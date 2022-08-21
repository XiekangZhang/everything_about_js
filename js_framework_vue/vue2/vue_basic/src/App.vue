<template>
  <div id="app">
    <!-- v-html -->
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <!-- v-bind -->
    <button v-bind:disabled="isButtonDisabled">Button</button>

    <button v-on:click="count++">Count ist: {{ count }}</button>
    <ol>
      <li v-for="item in this.groceryList"
          v-bind:key="item.id">
        {{ item.text }}
      </li>
    </ol>
  </div>
</template>

<script>
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
      isButtonDisabled: true
    }
  }
}
</script>

<style scoped>

</style>