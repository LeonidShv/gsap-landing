## Test task
Desktop only, 1500x900, animations, gsap.
Preloader works only during the first loading. If you want to see again Preloader, you need to clear local storage.

Also, I've try to implement scrolling by sections, but it didn't work for me properly. My next possible steps for this functionality is researching fullpage.js, or research how to implement it with GSAP (I've found similar examples with GSAP, but it didn't work in my case).

About refactoring, we can solve problems with DRY, also, it is good idea to check extra wrappers. Also, need to add fixed by lighthouse recommendations

## Result
https://youtu.be/Mmc0GSpIkbE

## Bundle analyze

npx nuxi analyze

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```
