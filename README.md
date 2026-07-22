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

