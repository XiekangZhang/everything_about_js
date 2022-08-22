<template>
  <div id="app">
    <!-- v-html -->
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <!-- v-bind -->
    <p>
      <button v-bind:disabled="isButtonDisabled">Button</button>
    </p>

    <p>
      <span v-bind:title="message1">this is a message!</span>
    </p>

    <!-- v-if -->
    <p v-if="seen">
      Now you see me
    </p>

    <button v-on:click=increment>Count ist: {{ count }}</button>
    <ol>
      <li v-for="item in this.groceryList"
          v-bind:key="item.id">
        {{ item.text }}
      </li>
    </ol>
    <!-- example for compute -->
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  name: "App",
  data() {
    return {
      groceryList: [
        {id: 0, text: 'test1'},
        {id: 1, text: 'test2'}
      ],
      count: 0,
      rawHtml: `<span style="color:red">This should be red.</span>`,
      isButtonDisabled: true,
      message1: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  methods: {
    increment() {
      this.count++
      nextTick(() => {
        // access updated DOM
        // info: DOM updates are not applied synchronously.
        console.log("bbbbbbbb")
      })
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>

<style scoped>

</style>