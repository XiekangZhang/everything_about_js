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

### Install vuetify

- `npm create vuetify`

### Install primevue

- `npm install primevue` or `yarn add primevue`
  - add following configurations `import PrimeVue from 'primevue/config' app.use(PrimeVue)`

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

- `template:`, `data() { return {}}` and `methods: {}`
- `data() {return {states}}` vs `{{}}` in `template`

#### Life cycle hook

- `created()`: Vue engine triggers after creating the component instance and before mounting it to the DOM element

#### Two-way binding with v-model

- one common scenario for two-way binding is the form input synchronization.
- Binding `v-model` directive to a component's data model will automatically trigger updating the template when the data model changes, and vice versa.
- `v-model.lazy` vs `v-model` vs `v-model.number` vs `v-model.trim`
  - `v-model.lazy`: only track changes triggered by the `onChange` event
  - `v-model`: real time changes tracking
  - `v-model.number`: transfer the input value into a number
  - `v-model.trim`: a string free from whitespaces

#### Binding reactive data and passing props data with `v-bind` or `:`

- `v-model` for two-way binding, `{{}}` for one-way data injection
- `v-bind`: one-way binding data to another element as attributes' values or other Vue components as props

#### Iterating over data collection using `v-for`

- `v-for = "elem in list"`

#### Adding event listener to elements with `v-on` & Handling events better with `v-on` event modifiers

- event has usually 3 main phases
  - Capturing: the event travels from the top down to the target element
  - Target: the event is at the target element
  - Bubbling: the event travels from the target element up to its ancestor
- `v-on` (in short `@`) to bind a DOM event to a listener.
- `v-on:<event>.<modifier>`
- event._modifier_: `.stop`, `.prevent`, `.self`, `.once`, `.capture`, `.passive`

#### Detecting keyboard events with key code modifiers

- `keydown` + [`.tab`, `.delete`, `.esc`, `.space`] or key combination [`.shift`, `.ctrl`, `.alt`, `.meta` + keyCode], `keyCode`
- `@click.shift.exact`: makes sure the click event fires when the user presses the only Shift key while clicking the button.

#### Conditional rendering elements with `v-if`, `v-else`, and `v-else-if`

#### Conditional displaying elements with `v-show`

#### Dynamically displaying HTML code with `v-html`

#### Displaying text content with `v-text`

#### Optimizing renders with `v-once` and `v-memo`

- `v-once` helps render static content and preserves performance from the re-rendering static element. Vue renders elements with this directive presented only once and would not update it regardless of any re-rendering.
- `v-memo` memorizes a block of parts (or components) within a template conditionally

### Using render function --> create VNode (createElement)

- `h(component, {/*props*/}, children)`

### Functional component

- A functional component is a stateless component. Unlike a standard component, which works with options API, a functional component is a function, denoting the render function for that component.
- stateless --> no access to the `this` instance.
- Registering a component globally: `Vue.component(alias_name, component instance)`

### Create a plugin

- `/* plugins/samplePlugin.ts */`
- `export default {install(Vue, options) {}}`
- then in `main.js`: `Vue.use(samplePlugin)`

## Composing components

### VUE single file component

- `template`, `script`, `style`
- `export default {}` --> `import ComponentName from './ComponentName.vue'`
- life hooks:
  - `setup(props, context)`: runs once before Vue instantiates the component
  - `beforeCreate()`: runs before the Vue renderer creates the component instance --> component is initialized but hasn't triggered the `data()` function or `computed()` properties --> Use case: when you need to load external logic without modifying the component's data.
  - `created()`: runs after the Vue engine creates the component instance, but hasn't mounted it to the DOM yet. --> Use case: when there is a need for external loading data into the component. This hook is preferable to the `mounted` one for reading or writing data from external resources.
  - `beforeMount()`: runs after `created`. The Vue render has created the component instance and compiled its template for rendering before the first render of the component.
  - `mounted()`: runs after the first render of the component. The component's rendered DOM node is available for you to access through the `$el` property. --> Use case: when you need to perform any DOM manipulation or access the component's DOM node `this.$el`.
  - `beforeUpdate()`: before re-render with new local data state
  - `updated()`
  - `beforeUnmount()`: `$el` is still available
  - `unmounted()`

### Computed properties

- `computed()`: The Vue engine automatically caches the value of computed properties and re-computes the value only when related reactive data changes.

### Watchers

- Watchers allow you to programmatically watch for changes in any reactive data property of a component and handle them.
- watcher object's fields
  - handler: the callback function to trigger whenever the target data's value changes
  - deep: a boolean value to indicate whether the watcher should watch for changes in nested data properties
  - immediate: a boolean value to indicate whether the watcher should trigger the callback function immediately after mounting the component
  - flush: pre | post --> indicates the timing order of the handler's execution. By default, Vue triggers the handler before updating the Vue component
