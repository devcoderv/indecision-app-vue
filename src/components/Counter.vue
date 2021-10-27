<template>
  <h1>Counter</h1>
  <p>{{ counter }}<sup>2</sup> = {{ squerCounter }}</p>
  <div>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 1,
      validator(value) {
        return value >= 0;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  computed: {
    squerCounter() {
      return this.counter * this.counter;
    },
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>
