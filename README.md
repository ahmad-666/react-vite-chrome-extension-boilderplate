# React Chrome Extension Template

#### We write chrome extension like any other react project

    *just use it on smaller window to make sure its responsive
    *after we finish it we build it and pass build version to 'load unpacked' of chrome extension to test it.

#### from chrome-->extension-->check developer options-->load unpacked-->select build folder('dist') that contains manifest.json to see real result

#### sometimes in chrome extension we need to access special properties,methods from 'chrome' object like chrome.storage,chrome.tabs,chrome.actions, etc

    *for each of these we need to set proper permission in manifest.json e.g if we are using chrome.tabs then in manifest.json: "permissions":["tabs"]

#### we can create src/background.ts file to add background code but then we need to statically move src/background.ts to dist/background.js(with help of vite.config) and in manifest.json we need to have: "background": {"service_worker": "background.js"}

This is a template for creating a Chrome extension using React and [Vite](https://vitejs.dev/) with TypeScript.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18+ or 20+) installed on your machine.

### Setup

1. Clone or fork the repository :

    ```sh
    # To clone
    git clone https://github.com/5tigerjelly/chrome-extension-react-template
    cd chrome-extension-react-template
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## 🏗️ Development

To start the development server:

```sh
npm run dev
```

This will start the Vite development server and open your default browser.

## 📦 Build

To create a production build:

```sh
npm run build
```

This will generate the build files in the `build` directory.

## 📂 Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle switch in the top right corner.
3. Click "Load unpacked" and select the `build` directory.

Your React app should now be loaded as a Chrome extension!

## 🗂️ Project Structure

- `public/`: Contains static files and the `manifest.json`.
- `src/`: Contains the React app source code.
- `vite.config.ts`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Contains the project dependencies and scripts.

## License

This project is licensed under the MIT License.
