$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$assetDirectory = Join-Path $PSScriptRoot '../public'
$sourceLogo = [System.Drawing.Bitmap]::new((Join-Path $assetDirectory 'logo.png'))
try {
    # Trim transparent canvas space while retaining the original logo artwork.
    $minX = $sourceLogo.Width
    $minY = $sourceLogo.Height
    $maxX = -1
    $maxY = -1
    for ($y = 0; $y -lt $sourceLogo.Height; $y++) {
        for ($x = 0; $x -lt $sourceLogo.Width; $x++) {
            if ($sourceLogo.GetPixel($x, $y).A -gt 0) {
                $minX = [Math]::Min($minX, $x)
                $minY = [Math]::Min($minY, $y)
                $maxX = [Math]::Max($maxX, $x)
                $maxY = [Math]::Max($maxY, $y)
            }
        }
    }
    if ($maxX -lt 0) { throw 'The source logo contains no visible pixels.' }
    $cropWidth = $maxX - $minX + 1
    $cropHeight = $maxY - $minY + 1
    foreach ($size in @(16, 32)) {
        $icon = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $graphics = [System.Drawing.Graphics]::FromImage($icon)
        try {
            $graphics.Clear([System.Drawing.Color]::Transparent)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $scale = ($size - 2) / [double][Math]::Max($cropWidth, $cropHeight)
            $width = [int][Math]::Round($cropWidth * $scale)
            $height = [int][Math]::Round($cropHeight * $scale)
            $destination = [System.Drawing.Rectangle]::new([int][Math]::Floor(($size - $width) / 2), [int][Math]::Floor(($size - $height) / 2), $width, $height)
            $graphics.DrawImage($sourceLogo, $destination, $minX, $minY, $cropWidth, $cropHeight, [System.Drawing.GraphicsUnit]::Pixel)
            $icon.Save((Join-Path $assetDirectory "favicon-${size}x${size}.png"), [System.Drawing.Imaging.ImageFormat]::Png)
            Write-Output "Created favicon-${size}x${size}.png"
        }
        finally {
            $graphics.Dispose()
            $icon.Dispose()
        }
    }
}
finally {
    $sourceLogo.Dispose()
}
