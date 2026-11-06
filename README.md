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

- `src/portfolio.ts`: résumé-based profile, project records, skills, experience, and social destinations.
- `src/main.tsx`: sections, project filtering, case-study dialogs, testing-scope summaries, and the email draft form.
- `src/styles.css`: responsive layout and component styles.
- `tailwind.config.js`: exact navy, electric blue, cyan, steel grey, cloud white, Inter, and Fira Code tokens. The valid six-digit navy `#0A1F44` is used.

Profile, skills, employment, education, and project responsibilities are based on Maria Rica's supplied résumé. The testing-scope section counts the listed workflow areas, focus topics, and methods for each project; these are not test coverage or performance metrics. The replayable hero console remains a labeled browser simulation, not an actual automated test runner.

The contact form validates required fields and email format locally, then opens a mailto draft addressed to the résumé's email. The visitor reviews and sends it in their email app. A direct email link is also available. GitHub and LinkedIn open the provided profile URLs.

Accessibility includes labeled inputs, native modal keyboard support, visible focus outlines, reduced-motion support, and a mobile navigation menu.
