import "./assets/main.css";

import { createApp, h } from "vue/dist/vue.esm-bundler.js";
import App from './App.vue'

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

/** 
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
**/

// * v-bind
/**
const App = {
  template: `
  <label for="name">
  Write your name {{ name }}:
  <input
  v-model.lazy="name"
  placeholder="Enter your name"
  id="name">
  </label>`,
  data() {
    return {
      name: "",
    };
  },
};
**/

// * v-bind with check list
const CourseCheckList = {
  template: `<div>The course checklist: {{ list.join(', ') }}</div>
  <div>
    <label for="chapter1">
      <input v-model="list" type="checkbox" value="chapter01" id="chapter1" />
      Chapter 1
    </label>
    <label for="chapter2">
      <input v-model="list" type="checkbox" value="chapter02" id="chapter2" />
      Chapter 2
    </label>
    <label for="chapter3">
      <input v-model="list" type="checkbox" value="chapter03" id="chapter3" />
      Chapter 3
    </label>
  </div>`,
  data() {
    return {
      list: [],
    };
  },
};

// * v-bind
/**
const App = {
  template: `<img :src="imageSrc" />`,
  data() {
    return {
      imageSrc:
        "https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat",
    };
  },
};


const App = {
  template: `<img v-bind="image" />`,
  data() {
    return {
      image: {
        src: "https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat",
        alt: "A random cute cat",
        class: ["cat", "image"],
        style: [
          {
            marginBlock: "10px",
            marginInline: "15px",
          },
          {
            padding: "10px",
          },
        ],
      },
    };
  },
};
**/

// * v-for
const List = {
  template: `<ul>
  <li v-for="number in numbers" :key="number">
    {{ number }}
  </li>
  </ul>
  
  <ul>
  <li v-for="task in tasks" :key="task.id"> {{title}}: {{ task.description }}</li>
  </ul>
  `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      title: "Task",
      tasks: [
        { id: "task01", description: "Buy groceries" },
        { id: "task02", description: "Learn Vue" },
        { id: "task03", description: "Build something awesome" },
      ],
    };
  },
};

const Collection = {
  template: `
  <ul>
  <li v-for="(value, name) in collection" :key="name"> {{ name }}: {{ value }}</li>
  </ul>
  
  <button @click.stop="printMessage">Click me</button>
  <div>{{ printMsg }}</div>

  <input @keydown.enter="onEnter">
  `,
  data() {
    return {
      collection: {
        title: "Watch Moonknight",
        description: "Log in to Disney+ and watch all the chapters",
        priority: "5",
      },
      printMsg: "Nothing to print yet!",
    };
  },
  methods: {
    printMessage(e) {
      this.printMsg = "The button was clicked!";
      if (e) {
        e.stopPropagation();
      }
      console.log("The button was clicked!");
    },
    onEnter(event) {
      //if (event.keyCode === 13) {
      console.log("User pressed Enter!");
      //}
    },
  },
};

const Conditional = {
  template: `<div>
    <div v-if="isVisible">I am the text in toggle</div>
    <div v-else-if="showSubtitle">I am the subtitle text</div>
    <div v-else>I am the replacement text</div>
    <div>Visibility: {{ isVisible }}</div>
    
    <div v-show="isVisible">I am the text in toggle</div>
    <div>Visibility: {{ isVisible }}</div>
  </div>`,
  data() {
    return {
      isVisible: false,
      showSubtitle: true,
    };
  },
};

const HTML = {
  template: `
  <div v-html="innerContent"></div>`,
  data() {
    return {
      innerContent: "<div>Hello World</div>",
    };
  },
};

const Placehoder = {
  template: `
  <div v-text="text">Placeholder text</div>`,
  data() {
    return {
      text: "Hello World",
    };
  },
};

//const app = createApp({
//  components: { CourseCheckList },
//  template: `<CourseCheckList />`,
//});
const Once = {
  template: `
  <div>
    <input v-model="name" placeholder="Enter your name" />
  </div>
  <div v-once> {{ name }} </div>`,
  data() {
    return {
      name: "Maya",
    };
  },
};

// v-memo
const Memo = {
  template: `
  <ul>
      <li
        v-for="image in images"
        :key="image.id"
        :style=" selected === image.id ? {border: '1px solid blue'} : {}"
        @click="selected = image.id"
        v-memo="[selected === image.id]"
      >
        <img :src="image.url" />
        <div>{{ image.title }}</div>
      </li>
    </ul>
  `,
  data() {
    return {
      selected: null,
      images: [
        {
          id: 1,
          title: "Cute cat",
          url: "https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/TheCute%20Cat",
        },
        {
          id: 2,
          title: "Cute cat no 2",
          url: "https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cute_cat",
        },
        {
          id: 3,
          title: "Cute cat no 3",
          url: "https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_me",
        },
        {
          id: 4,
          title: "Just a cat",
          url: "https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_1",
        },
      ],
    };
  },
};

// * render() function
const inputElem = h("input", {
  placehoder: "Enter some text",
  type: "text",
  id: "text-input",
});

// support JSX
//const name = "JSX"
//const JSXComp = <div>This is a {name} component</div>

const comp = h(
  "div",
  {
    id: "my-test-comp",
    style: {
      border: "1px solid red",
    },
  },
  inputElem
  //MyHeading
  //JSXComp
);

// * need to be analyzed
export function MyHeading(props, context) {
  const heading = `h${props.level}`;
  return h(heading, context.$attrs, context.$slots);
}
MyHeading.props = ["prop-one", "prop-two"];
MyHeading.emits = ["event-one", "event-two"];

/** const app = createApp({
  template: `<List />
  <Collection />
  <Conditional />
  <HTML />
  <Placehoder />
  <Once />
  <Memo />`,
  components: { List, Conditional, HTML, Placehoder, Once, Memo },
  // render() function replace the options api
  /**render() {
    return h(
      "div",
      { id: "test-id" },
      "This is a render function to create a div with id test-id"
    );
  }, **/
  /**render() {
    return comp;
  },**/
//}); 

//app.component("Collection", Collection);
// use 3rd party component
//app.use();
const app = createApp(App);
app.mount("#app");
