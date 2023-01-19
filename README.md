# Cragi - Starter template html code, vanilla js + vite js

## Get Started

To work with this assembly in a new project, clone the entire contents of the repository <br>
`git clone <this repo>`
Then, from the root of the project `npm i`, which will install all the dependencies in package.json.
After that, you can use of the proposed build commands (the resulting files go to the **dist** folder in the root directory): <br>

`npm run dev` - is a basic command that runs a development build using browser sync

`npm run build` - is a production build command for a project. All assets are compressed and optimized for hosting.

`npm run preview` - is a basic command that runs a preview build using browser sync

```
├── src/                          # Sources
│   ├── scripts                   # Scripts
│   ├── styles                    # Site styles (sass preprocessor in scss syntax)
│   │   └── main.scss             # Main stylesheet
│   │   └── vendor.scss           # File for including library styles from the vendor folder
│   │   └── _fonts.scss           # File for connecting fonts (you can use a mixin)
│   │   └── _mixins.scss          # File for connecting mixins from the mixins folder
│   │   └── _variabless.scss      # File for writing css or scss variables
│   │   └── base.scss             # File for writing global styles
│   │   ├── components            # scss components
│   │   ├── mixins                # folder for saving finished scss components
│   │   │   └── _breakpoint.scss  # _breakpoint.scss
│   │   ├── vendor                # folder for storing local css-style libraries
│   │   │   └── normalize.css     # normalize css
│   ├── dist                      # folder for storing other assets - php, video files, favicon, etc.
│   ├── partials                  # partials in HTML files.
│   │   ├── base                  # folder base html partials (header, footer ...)
│   │   │   └── header.hbs        # header html part
│   │   └── hero.hbs              # example (hero) html part
│   └── index.html                # Main html file
│   └── main.js                   # Main js file
└── vite.config.js                # file with Vite settings
└── package.json                  # file with build settings and installed packages
└── README.md                     # assembly documentation
```

## Table of contents

1. [svg sprites](#svg-sprites)

## svg sprites

To make an svg sprite, put the svg files you need for the sprite in the **src/icons** folder. Other svg files just leave in the **dist/assets/img** folder.

Html output svg file, example:

```
<svg class="icon">
    <use xlink:href="#icon-example"></use>
</svg>
```
