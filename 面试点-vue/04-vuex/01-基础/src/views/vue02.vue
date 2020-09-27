<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>{{count}}</div>
    <div>{{name}}</div>

    <div @click="addCount">按钮</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "02 State"
    };
  },
  computed: mapState({
    count: "count",
    name: "name"
  }),
  methods: {
    addCount() {
      this.$store.commit("increment");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
