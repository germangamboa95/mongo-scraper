<template>
  <div id="app">
      <div class="card center-align">
          <div class="date">{{Date(article.timeStamps)}}</div>
          <h5>{{article.headline}}</h5>
          <p>{{article.summary}}</p>
          <a v-bind:href="article.link" target="_blank">Read More...</a>
          <div></div>
                    
          <div class="input-field inline">
             <input id="note" type="text" class="validate" name="text" v-model="note">
             <label for="note">Add a note!</label>
          </div>
          <button v-on:click="addNote" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></button>
          <div v-if="savedNotes.length > 0">
          <h5>Saved Notes</h5>
          <ul>
              <li v-for="noter in savedNotes" :key="noter._id">{{noter.text}}</li>
          </ul>
          </div>
          
          <div></div>
          <button v-on:click="deleteArticle" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete_forever</i></button>
            

        
  
      </div>
      
  </div>
</template>

<script>
import userServices from "../services/userServices.js";

export default {
  name: "articlerSaved",
  props: ["article", "notes"],
  data() {
    return {
      note: "",
      savedNotes: []
    };
  },
  methods: {
    async deleteArticle() {
      const res = await userServices.deleteOne(this.article._id);
      console.log(res);
      this.$emit("deleted", this.article._id);
    },
    async addNote() {
      const res = await userServices.addNote(this.note, this.article._id);
      this.$emit("noteAdded", this.article._id);
      this.note = "";
    },
    sortNotes() {
     this.savedNotes= this.notes.filter(
        note => note.articleId === this.article._id
      );
      console.log(this.savedNotes);
      
    }
  },
  watch: {
    notes: function() {this.sortNotes()}
  },
  created() {
    this.sortNotes();
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
