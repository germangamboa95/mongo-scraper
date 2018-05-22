<template>
  <div id="app">
      <h3 v-if="deletedCount > 0">Deleted: {{deletedCount}} articles!</h3>
     
      <articlerSaved @noteAdded="noteAdded" @deleted="deletedOne" v-for="article in articles" :article="article" v-bind:notes="notes" :key="article._id" />
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
      notes: [],
      deletedCount: 0,
      foo: 0
    };
  },
  methods: {
    async loadSaved() {
      const foo = await userServices.getSaved();
      this.articles = foo.data[0].article.reverse();
      this.notes = foo.data[0].notes.reverse();
   
    },
    deletedOne(){
      this.loadSaved();
      this.deletedCount++;
    },
    async noteAdded(){
      this.loadSaved();
      this.foo++;
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
