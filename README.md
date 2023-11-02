# react_boilerplate

This is a template to quickly start SPA development using React.

## Installation

### Install Node.js

We utilize Volta as a version management tool for Node.js and npm. Please install it by checking the official documentation.

[Volta documents](https://docs.volta.sh/guide/)

- Node.js v18.18.2 (LTS as of 2023/10/15)
- npm (version bundled with the above Node.js)

### Start the Development Server

```sh
npm install # package install
npm run dev # start dev server
```

### Production Build and Server Start

```sh
npm run build # build
npm run start # start production server
```

## Custom theme

We are using the custom theme feature of Chakra UI and making our own settings.

Please refer to the source code in `/src/theme` for target source code.

[Chakra UI](https://chakra-ui.com/)

### colors

Manage the colors across the entire application.

[Customizing theme tokens](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens)

### components

Manage the styles of global components.

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-single-components)

### styles

Manage global styles.

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles)

### storybook

You can check the Chakra UI component on StoryBook.

[Chakra UI + Storybook](https://chakra-ui.com/getting-started/with-storybook)

## Features Directory

In this template, the `src/features` directory divides directories for each feature (feature).

Feel free to modify the structure as needed.

## Plop

File creation from the CLI is possible with Plop.js.

For detailed settings, please check the following files:

- `plop-templates` - Template files
- `plopfile.js` - Configuration file

[Plop.js](https://plopjs.com/)
