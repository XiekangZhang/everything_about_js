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


---

## Vue.js (officially documentation from vuejs.org)

### Essentials

#### Reactivity Fundamentals

- `const obj = ref(...)`: obj.value to get the value
- better for the vue to track the mutation between variables and the DOM
- when you mutate reactive state, the DOM is updated automatically. However, it should be noted that the DOM updates are not applied synchroniously. To wait for the DOM update to complete after a stage change, you can use the `nextTick()` global API.
- There is another way to declare reactive state, with the `reactive()` API. Unlike a ref which wraps the inner value in a special object, `reactive()` makes an object itself reactive.
  - `import { reactive } from 'vue'`
  - `const state = reactive({ count: 0 })`
  - only the proxy is reactive. Therefore, the best practice when working with Vue's reactivity system is to _exclusively use the proxied versions of your state_.

#### Computed Properties

- for complex logic that includes reactive data, it is recommended to use a _computed property_ instead of using cluttered template. --> `computed()`
- the difference between `computed()` and `function()` is that _computed properties are cached based on their reactive dependencies_. A computed property will only re-evaluate when some of its reactive dependencies have changed.
- Don't make async requests or mutate the DOM inside a computed getter.

#### List rendering

- use `return [...numbers].reverse()` instead of `numbers.reverse()` to avoid mutating the original array in a computed property.
- It's not recommended to use `v-if` and `v-for` on the same element due to implicit precedence. Since `v-if` has a higher priority than `v-for`. That means the `v-if` condition will not have access to varibales from the scope of the `v-for`. --> solution: moving `v-for` to a wrapping `<template>` tag.

#### Event handling

- Accessing Event argument in inline handlers by passing in the `$event` variable
- Event modifiers: `.stop`, `.prevent`, `.capture`, `.self`, `.once`, `.passive`
  - `.stop`: stop event's propagation
  - `.prevent`: no longer reload the page
  - `.capture`: use capture mode when adding the event listener
  - `.self`: only trigger handler if event.target is the element itself
  - `.once`: trigger the event only once
  - `.passive`: touch event listeners for improving performance on mobile devices
- Key Modifiers: `keyup`, `keydown`
- Mouse Button Modifiers: `.left`, `.right`, `.middle`

#### Form Input Bindings

- `v-model`

#### Lifecycle Hooks

- `onMounted()`: can be used to run code after the component has finished the initial rendering and created the DOM nodes.
- `onUpdated()`
- `onUnmounted()`

#### Watchers

- `watch()` to trigger a callback whenever a piece of reactive state changes
- one `watch(_function_name_, ......)` function example

```javascript
watch(
  question,
  async (newQueston, oldQuestion) => {
    if (newQuestion.indexOf("?") > -1) {
      answer.value = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        anwser.value = (await res.json()).answer;
      } catch (error) {
        answer.value = "Error! Could not reach the API. " + error;
      }
    }
  },
  { immediate: true }
);
```

- `watch()` first argument can be different type of reactive sources: it can be a ref, a reactive object, a getter function, or an array of multiple sources

```javascript
// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);
```

- `watchEffect()` uses exactly the same reactive state as the source

```javascript
watchEffect(async () => {
  const response = await fetch(`api/vi/${todoId.value}`);
  data.value = await response.json();
});
```

- If you want to access the DOM in a watcher callback after Vue has updated it, you need to specify the `flush: 'POST'` or `watchPostEffect()`
- `watch()` is usually worked with synchronous circumstances. If you create an asynchronous `watch()`, try to use

```javascript
// data to be loaded asynchronously
const data = ref(null);
watchEffect(() => {
  if (data.value) {
    // do something when data is loaded
  }
});
```

#### Components Basics

- To use a child component, we need to import it in the parent component. Then use `<Component_Name/>` in template slot.
- Props (`defineProps([...])`) are custom attributes you can register on a component.
- `$emit()` to trigger an event from a child component to its parent component. To declare it by using `defineEmits([...])` in the child component.
- `<component :is="tabs[currentTab]"></component>` to dynamically render a component based on a variable.

### Components In-depth

#### Registration

- Global Registration: `app.component('component-name', {...})` in `main.js`
- Local Registration: `<script setup> import ComponentA from './ComponentA.vue' </script>` and then `<template><ComponentA/></template>`
- Local Registration options API: `export default {components: {ComponentA}, setup() {}}`

#### Props

- `defineProps(['foo'])` and `props: ['foo']`
- All props form a one-way-down binding between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around.
- Props validation

```javascript
defineProps({
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true,
  },
  propD: {
    type: Number,
    default: 100,
  },
  propE: {
    type: Object,
    default: () => ({ message: "hello" }),
  },
  propF: {
    validator: (value) => {
      return ["success", "warning", "danger"].includes(value);
    },
  },
  propG: {
    type: Function,
    default() {
      return "Default function";
    },
  },
});
```

#### Component Events

```javascript
<!-- MyComponent -->
<button @click="$emit('someEvent', parameters)">Click me</button>

<!-- Parent -->
<MyComponent @some-event="handleEvent" />
```

- `const emit = defineEmits(['someEvent'])` then call the emit by using `emit('someEvent', parameters)`

#### Component v-model

- `$attrs`
- `import {useAttrs} from 'vue' const attrs = userAttrs()`

#### Slots

- The `<slot>` element is a _slot outlet_ that indicates where the parent-provided _slot content_ should be rendered.
- `v-slot` has a dedicated shorthand `#`

#### Provide / Inject

- ![Provide/Inject --> Dependency Injection vs Props](./images/provide_inject.png)
- `provide(/* key */ 'message', /* value */ 'hello!')` --> `inject(/* key */ 'message')`

#### Async Components

```javascript
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ... Load component from server
    resolve(/* loaded component */);
  });
});
```

- Asynchronous operations inevitably involve loading and error states

```javascript
const AsyncComp = defineAsyncComponent({
  loader: () => import("./AsyncComponent.vue"),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000,
});
```

### Reusability

#### Composables

- a composable is a function that leverages the Vue's Composition API to encapsulate and reuse _stateful logic_.
- when doing async data fetching, we often need to handle different states: loading, success, and error.

```javascript
// fetch.js
import { ref, watchEffect, toValue } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  const fetchData = () => {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error };
}
```

```javascript
// call fetch.js
<script setup>
  import {useFetch} from './fetch.js'; const url = ref("/initial-url") const{" "}
  {(data, error)} = useFetch(url) url.value = "/new-url"
</script>
```

#### Custom Directives

- In `<script setup>`, any camelCase variable that starts with the `v` prefix can be used as a custom directive.

#### Plugins

- `app.use(plugin, options)`: use a plugin globally
- `const myPlugin = {install(app, options) {}}`: create a plugin

### Build-in Components

- Transition: `<Transition>` and `<TransitionGroup>` for applying animations to elements when they are inserted, updated, or removed from the DOM.
- KeepAlive: `<KeepAlive>` is a built-in component that allows us to conditionally cache component instances when dynamically switching between multiple components.

```javascript
<!-- Inactive components will be cached! -->
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>

<!-- Define KeepAlive Component -->
<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // called on initial mount
  // and every time it is re-inserted from the cache
})

onDeactivated(() => {
  // called when removed from the DOM into the cache
  // and also when unmounted
})
</script>
```

- Teleport: `<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.

## Vue Router

- To make building Single Page Appliation with Vue.js

```javascript
// 1. Define route components.
// These can be imported from other files
const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = Vue.createApp({});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");

// Now the app has started!
```
