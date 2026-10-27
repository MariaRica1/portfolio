# Maria Rica Valenzuela — SQA Portfolio

Responsive single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. The supplied logo is preserved in `public/logo.png` and framed with CSS for the navigation.

## Local development

```sh
npm install
npm run dev -- --port 4187
```

## Production

```sh
npm run build
npm run preview
```

The production output is `dist/`. The build includes TypeScript checking.

## Customization

- `src/main.tsx`: biography, project records, sample metrics, GitHub and LinkedIn destinations.
- `src/styles.css`: responsive layout and component styles.
- `tailwind.config.js`: exact navy, electric blue, cyan, steel grey, cloud white, Inter, and Fira Code tokens. The valid six-digit navy `#0A1F44` is used.

The project descriptions, case counts, and metrics are illustrative samples, labeled in the interface. Replace them with verified professional results. The replayable console is a browser simulation, not an actual automated test runner.

The contact form validates required fields and email format locally. It does not transmit or store messages; attach a form endpoint to enable delivery. GitHub and LinkedIn open the provided profile URLs.

Accessibility includes labeled inputs, native modal keyboard support, visible focus outlines, reduced-motion support, and a mobile navigation menu.
