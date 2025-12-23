# Copilot Instructions for Jess Bennion Portfolio

## Project Overview
React portfolio website for design work, deployed to GitHub Pages at `http://abennio.github.io/jess-bennion`. Built with Create React App (CRA) using React Router v6 for client-side routing.

## Architecture & Routing

- **Homepage**: [Root.js](../src/Components/Root.js) serves as the main landing page with a grid of portfolio tiles
- **Routing**: Centralized in [App.js](../src/App.js) using React Router v6
  - Base route is `/jess-bennion` (GitHub Pages requirement)
  - Each portfolio piece has its own route: `/birkenhead`, `/chester-zoo`, etc.
  - All routes defined as flat `<Route>` elements, no nesting
- **Navigation**: [navbar.js](../src/Components/Navbar/navbar.js) uses `NavLink` with function-based `className` for active states: `className={({ isActive }) => isActive ? "active-work" : "inactive-work"}`

## File Organization Conventions

**Page Components**: Each portfolio piece lives in `src/Components/Pages/{ProjectName}/`
- Pattern: `{ProjectName}Page.js` + `{ProjectName}Page.css`
- Examples: `BirkenheadPage.js`, `ChesterZooPage.js`
- Each page imports `NavBar` and `Footer` directly (no layout wrapper)

**Images**: Stored in `src/portfolio-images/{ProjectName}/` with imports in component files
- Home page tiles import images in [Root.js](../src/Components/Root.js) (see lines 8-25)
- Detail pages import specific images (e.g., `mural` in [BirkenheadPage.js](../src/Components/Pages/Birkenhead/BirkenheadPage.js))

## Component Patterns

**Tile Component** ([Tile.js](../src/Components/Tiles/Tile.js)): Reusable portfolio preview
```javascript
<Tile image={pigeon} alt={"Birkenhead Mural"} title={"Birkenhead Mural"} />
```
- Shows image with hover overlay (text appears on hover via CSS opacity transition)
- Always wrapped in `<Link>` in [Root.js](../src/Components/Root.js)

**Page Structure**: Standard pattern for portfolio detail pages
```javascript
<div className="[project]-page">
  <NavBar />
  <div className="[project]-container">
    <div className="[project]-description">
      <h1>Title</h1>
      <p>Description</p>
    </div>
    <img src={image} className="[project]-image" alt="..." />
  </div>
  <Footer />
</div>
```

## Styling Approach

- **No CSS Modules**: Plain CSS with scoped class names by convention
- **Class naming**: Use project-specific prefixes (e.g., `.birkenhead-container`, `.birkenhead-description`)
- **Layout**: Flexbox for all layouts (see [Root.css](../src/Components/Root.css), [BirkenheadPage.css](../src/Components/Pages/Birkenhead/BirkenheadPage.css))
- **Responsive margins**: Desktop uses large horizontal margins (`margin-left: 15rem`), responsive with `@media`
- **Bootstrap**: React Bootstrap components used for `Navbar` structure only (not full Bootstrap styling)

## Development Workflow

**Start dev server**: `npm start` (opens `localhost:3000`)
**Build for production**: `npm run build` (outputs to `build/`)
**Deploy**: Builds to `build/` directory, configured for GitHub Pages via `homepage` in package.json

## Adding New Portfolio Pieces

1. Create folder: `src/Components/Pages/{ProjectName}/`
2. Create files: `{ProjectName}Page.js` and `{ProjectName}Page.css`
3. Add images to `src/portfolio-images/{ProjectName}/`
4. Import and add route in [App.js](../src/App.js)
5. Import tile image and add `<Link>` + `<Tile>` block in [Root.js](../src/Components/Root.js) (see existing pattern)
6. Follow page structure pattern from existing pages (e.g., [BirkenheadPage.js](../src/Components/Pages/Birkenhead/BirkenheadPage.js))

## Key Dependencies

- `react-router-dom` v6: Client-side routing (in devDependencies but should be in dependencies)
- `react-bootstrap`: Bootstrap components for navbar structure
- `bootstrap`: Base CSS imported in [index.js](../src/index.js)
- No state management library (uses React built-ins only)
