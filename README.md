# Swahilipot FM 

Source Code for The Swahilipot FM site

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [Continuous Changes](#continuous-changes)
- [License](#license)
- [Contact](#contact)

## Installation

To get started with Swahilipot FM, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/<yourusername>/swahilipot-fm.git
cd swahilipot-fm
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

You can also use:

```bash
npm start
```

To build the production bundle, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure your code follows our coding standards and includes appropriate tests.

## Documentation

> Please make sure you write a two-sentence description of what was done (feature or implementation) when creating a PR to the `dev` or `main` branch.

## Continuous Changes

### Recent Updates
- **August 20, 2026**: Aligned the site with the official brand guideline (exact navy/orange/sky-blue palette in `tailwind.config.ts` and `src/index.css`, Montserrat/Mont fonts) across all pages and components. Fixed washed-out gradients, replaced the heavy autoplay video background on the Presenters page with a lightweight gradient, and resized/recompressed all presenter photos. Added `Presenter.liveShowIds` so presenters only show "On Air" for their actual live show. Reverted unrelated Teenz Connect roster changes.
- **August 17, 2026**: Refined homepage and schedule experience by updating hero visuals, presenter and schedule datasets, day-based schedule rendering, and live reactions interactions. Also refreshed supporting media assets and styles across `src/pages/Index.tsx`, `src/pages/Schedule.tsx`, `src/components/home/HeroSection.tsx`, `src/components/layout/LiveReactions.tsx`, `src/data/scheduleData.ts`, `src/data/presentersData.ts`, and `src/index.css`.
- **August 8, 2026**: Optimized weekend schedule by eliminating Friday Rave show and consolidating DJ Spinking's presence to Saturday Night Wave (Saturday 19:00-21:00). Updated all related files: `src/data/scheduleData.ts`, `src/data/presentersData.ts`, `src/components/home/HeroSection.tsx`, and `src/components/layout/NewsTicker.tsx` for consistency across presenter profiles, hero banners, and navigation.
- **August 7, 2026**: Fixed schedule day navigation so selecting a day (including "View Schedule" from presenter shows) opens the correct day and surfaces that day's full lineup; also refreshed homepage banner/featured show presentation for clearer discovery.
- **July 31, 2026**: Expanded Sanity CMS content models for articles and authors, and updated the CMS adapter layer (`src/lib/cms/`) to support richer newsroom data across local, remote, and Sanity sources.
- Added and updated newsroom UI flows, including new article gallery/slider components and an author profile page integration across News, NewsDetail, Live, and Schedule pages.
- Fixed homepage/banner presentation so full banners are visible and adjusted the crossing PIW news strip behavior to prevent blocking page content.
- **April 28, 2025**: Updated the README file to include a section for documenting recent changes and updates.
- Added new shows to the schedule data in `scheduleData.ts`.
- Improved page transitions and animations in `index.css` and `tailwind.config.ts`.
- **April 8, 2026**: Updated hero carousel with new promotional banners and added fullscreen feature to live streaming page.
- Fixed presenter information to match new promotional materials (added Cardiac Poet, Bahati Ngazi, updated VDJ Kams).
- Resolved CI/CD deployment issues with proper Vercel configuration and GitHub Actions workflows.
- **July 22, 2026**: Integrated Sanity CMS for the newsroom with a pluggable CMS adapter layer (`src/lib/cms/`) and a new Sanity Studio project (`swahilipot-fm-cms/`), and streamlined the news platform components and pages.
- **April 28, 2026**: Enhanced contact page with background image and updated contact information.
- Fixed Netlify deployment configuration for proper Vite/React builds.
- Updated show host information for Breakfast Club, Kick Off, and Night Shift shows.
- Added new promotional banners to homepage carousel including beyond-ballot and night-shift.

## License

This project is licensed under the MIT License.

## Contact

For inquiries, please contact us at [info@swahilipotfm.co.ke](mailto:info@swahilipotfm.co.ke).

