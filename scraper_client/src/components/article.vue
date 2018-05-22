<template>
  <div id="app">
      <div class="card center-align">
          <div class="date">{{Date(article.timeStamps)}}</div>
          <h5>{{article.headline}}</h5>
          <p>{{article.summary}}</p>

          <a v-bind:href="article.link" target="_blank">Read More...</a>
          <div></div>
          <button v-if="!flag" v-on:click="saveArticle" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">save</i></button>
          <div v-else>Article Saved!</div>
      </div>
      
  </div>
</template>

<script>
import userServices from "../services/userServices.js";

export default {
  name: "articler",
  props: ["article"],
  data(){
      return{
          flag: false
      }
  },
  methods: {
      async saveArticle() { 
          const res = await userServices.saveOne(this.article._id);
          this.flag = true;
          console.log(res);
      }
  }
};
</script>

<style scoped>
a {
  display: inline-block;
  padding: 1em;
}
.card {
  width: 80%;
  margin: 1em auto;
  padding: 0.5em;
}
.date {
  margin: 0 0 0.5em 1em;
}
</style>
