<template>
  <div id="app">
      <h3 v-if="deletedCount > 0">Deleted: {{deletedCount}} articles!</h3>
      <articlerSaved @deleted="deletedOne" v-for="article in articles" :article="article" :key="article.id" />
  </div>
</template>

<script>
import userServices from "../services/userServices.js";
import articlerSaved from "../components/savedArticle";

export default {
  name: "home",
  components: {
    articlerSaved
  },
  data() {
    return {
      articles: [],
      deletedCount: 0
    };
  },
  methods: {
    async loadSaved() {
      const foo = await userServices.getSaved();
      console.log(foo)
      this.articles = foo.data[0].article.reverse();
   
    },
    deletedOne(){
      this.loadSaved();
      this.deletedCount++;
    }
  },
  created() {
    this.loadSaved();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button{
  margin: 1.25em;
}
</style>
