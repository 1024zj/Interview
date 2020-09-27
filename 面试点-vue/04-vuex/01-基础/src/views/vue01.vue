<template>
  <div class="hello">
    <h1>{{ this.$store.state.name}}</h1>
    <h1>{{ title +this.$store.state.count}}</h1>

    <button @click="changeName">修改名字</button>
    <button @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "vuex",
    };
  },
  methods: {
    addCount() {
      this.$store.commit("increment");
    },
    changeName() {
      this.$store.commit("changeName", "小样");
      //this.$store.dispatch("changeName", "小样");
      console.log("222");
    },
  },
  created: function () {
    console.log(this.$store.state.count);
  },
};
</script>

