# Whisust.com

Personal website.

## Specs

The website should contain:

- a Homepage, with:
    - an "About me" section,
    - links to the "Projects" page
    - links to the "Blog" page
    - social links
- a Projects page, which describes my past, ongoing and future tech projects
    - each project should have a name and some steps
- a Blog page, with blog articles
- an About page, with some details on my formation and work history
- an RSS feed

## Technology

The site is built using [Astrojs](https://astro.build/) and based on
the [Brutal theme](https://github.com/ElianCodes/brutal).
It uses UnoCSS as css framework.
Commands:

| Command           | Action                                        |
|-------------------|-----------------------------------------------|
| `npm install`     | install dependencies                          |
| `npm run dev`     | Start a local server on http://localhost:3000 |
| `npm run build`   | Build the production version on `/.dist`      |
| `npm run preview` | Preview the build locally, before deploying   |

## [Deprecated] Installation

- Install Soupault
- run `soupault build` in the correct dir
- the html pages will be generated in the `$dir/build`
- locally i've installed apache (on windows yurk) to test the .htaccess file
- start it by running C:\Apache24\bin\httpd.exe -k start using an *admin* windows terminal
- access it through http://www.whisust-dev.com