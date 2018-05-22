<template>
  <div id="app">
      <button v-on:click="loadFresh" class="waves-effect waves-light btn">Load Fresh Articles</button>
      <h3 v-if="flag">Articles Added: {{added}}</h3>
      <articler v-for="article in articles" :article="article" :key="article.id" />
  </div>
</template>

<script>
import userServices from "../services/userServices.js";
import articler from "../components/article";

export default {
  name: "home",
  components: {
    articler
  },
  data() {
    return {
      articles: [],
      added: 0,
      flag: false
    };
  },
  methods: {
    async loadStale() {
      const foo = await userServices.getStaleArticles();
      this.articles = foo.data;
   
    },
    async loadFresh() {
      const foo = await userServices.getFreshArticles();
      console.log(foo)
      this.articles = foo.data.articles;
      this.flag = true; 
      this.added = foo.data.insterted;
    }
  },
  created() {
    this.loadStale();
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
