# Blueprint Registry

Blueprint Registry is a static-first web application for generating production-oriented Markdown blueprints.
Users move through a guided flow:

1. Choose project category
2. Choose stack
3. Choose delivery profile
4. Choose UI/UX direction
5. Download or copy a generated `.md` implementation spec

The app is built with React + TypeScript + Vite and uses local data constants only.

## Production Readiness

- Static build output via Vite (`dist/`)
- TypeScript strict mode
- No external AI API dependency
- Local markdown generation and preview
- Mobile responsive layout
- Copy to clipboard and `.md` download support

## Tech Stack

- React 18
- TypeScript
- Vite
- react-markdown
- Bootstrap (responsive baseline)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

- `src/App.tsx`: guided wizard flow and markdown generation
- `src/data.ts`: blueprint datasets, category metadata, stack profiles
- `src/styles.css`: design system and responsive styling

## Contributing

Contributions are welcome and encouraged. If you want to improve this project:

1. Open an issue with the problem statement or proposed enhancement.
2. Submit a focused pull request with a clear rationale.
3. Include screenshots for UI changes and confirm `npm run build` passes.
4. Keep changes compatible with the anti-generic design direction in `design.MD`.

Good contribution areas:

- Better category mapping and search relevance
- Improved mobile ergonomics
- Accessibility refinements (keyboard flow, contrast, semantics)
- Additional blueprint templates and validation rules

## License

MIT. See `LICENSE`.
