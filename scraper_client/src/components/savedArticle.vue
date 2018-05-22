<template>
  <div id="app">
      <div class="card center-align">
          <div class="date">Date: {{article.timeStamps}}</div>
          <h5>{{article.headline}}</h5>
          <p>{{article.summary}}</p>

          <a v-bind:href="article.link" target="_blank">Read More...</a>
          <div></div>
          <button v-on:click="deleteArticle" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete_forever</i></button>

  
      </div>
      
  </div>
</template>

<script>
import userServices from "../services/userServices.js";

export default {
  name: "articlerSaved",
  props: ["article"],
  methods: {
      async deleteArticle(){
          const res = await userServices.deleteOne(this.article._id);
          console.log(res); 
          this.$emit('deleted', this.article._id)
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
