import "./assets/main.css";

import { createApp } from "vue/dist/vue.esm-bundler.js";
//import App from './App.vue'

// * internal component template
/** 
const Description = {
  template: `<div>This is the description component</div><br/>
  <h1>This is the app's entrance</h1> <br/>
  <h2>We are exploring template syntax</h2>
  `,
};

createApp({
  //template: "This is the app's entrance",
  components: {
    Description,
  },
  template: "<Description />",
  data() {
    return {};
  },
}).mount("#app"); 
**/

// * data() vs {{}} syntax
/**
const App = {
  template: `<div>{{ title }}</div>`,
  data() {
    return {
      title: "My first Vue component",
    };
  },
  created() {
    console.log(this.title);
  },
};
**/

const App = {
  template: `<div>Counter: {{ counter }} </div>`,
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    const internal = setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      clearInterval(internal);
    }, 5000);
  },
};
const app = createApp(App);
app.mount("#app");
