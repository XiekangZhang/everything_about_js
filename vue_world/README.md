# Vue world

- vue is a JavaScript engine for building progressive, composable and reactive UI in frontend applications
- vue follows MVVM (Model-View-ViewModel) pattern, ViewModel is the binder that binds data between the View and Model.

## Settings for using Vue

- Installing Node.js
  - Node is an open-source JavaScript server environment built on Chrome's V8 JavaScript runtime engine. Node allows developers to code and run JavaScript applications locally or in a hosted server, outside a browser.
  - `node -v`: check node version
  - `npm -v`: check npm (node package manager) version
  - `npm install npm@latest -g`: update NPM version
  - `npm init`: initialize an empty project
- Yarn one alternative package manager developed by Facebook, which is faster, more secure, and more reliable due to its parallel downloading and caching mechanism
  - `brew install yarn`: on macOS
  - `npm i -g yarn`: on Windows (npm install --global yarn)
  - `yarn -v`: version of yarn
  - `yarn add <node package name>`: install a new package
- Vite.js as a builder management tool
  - Vite is a JavaScript development server which uses the native ES module and enables a hot-reload.
- Intall nvm (node version managers)
  - [nvm installing](https://github.com/nvm-sh/nvm#installing-and-updating)
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/{version}/install.sh | bash`
  - `eport NVM_DIR="$HOME/.nvm"`
- Update node on linux
  - `nvm ls-remote`
  - `nvm install version.number`

## Create a new Vue application

- `npm init vue@latest`
  - `cd vue_application_project`
  - `npm install`, `npm run format`, `npm run dev`
  - `npm run build`: ready to ship your app to production

## How Vue works

### Virtual DOM under the Hood

- Vue doesn't work directly with the DOM (Document Object Model). Instead, it implements its Virtual DOM to optimize the application's performance on runtime.
- Virtual DOM is the in-memory virtual copy version of the actual DOM in the browser, but is lighter-weight and has extra functionalities.

### The Vue app instance

- Every Vue application starts with only one single Vue component instance as the application root. Any other Vue component created in the same application needs to be nested inside this root component
- `import {createApp} from 'vue'`
- `import App from './App.vue'`
- `const app = createApp(App)`
- `app.mount('#app')`: `#app` is the unique id selector for the application's root element. Vue engine queries for the element using this id, mounts the app instance to it, then renders the application in the browser.

### Options API

- Options API is Vue's core API for initializing a Vue component.
- _State handling_: including `data()` which returns the local data state for the component, `computed`, `methods`, `watch` for enabling observation on specific local data, and `props` for the incoming data
- _Rendering_: `template` for the HTML view template and `render()` as the rendering logic for the component
- _Life cycle hooks_: such as `beforeCreate()`, `created()`, `mounted()`, etc., for handling different stages of a component's life cycle. -_Others_: such as `provide()`, `inject()` for handling different customization and communication between components. And `components`, an collection of nested component templates to use within the component.

#### Structure of vue file

- `data() {return {states}}` vs `{{}}` in `template`

#### Life cycle hook

- `created()`: Vue engine triggers after creating the component instance and before mounting it to the DOM element

#### Two-way binding with v-model

- one common scenario for two-way binding is the form input synchronization.
- Binding `v-model` directive to a component's data model will automatically trigger updating the template when the data model changes, and vice versa.
