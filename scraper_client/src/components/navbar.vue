<template>
  <div>
    <nav>
      <div class="nav-wrapper">
      <!-- This is the navbar for when no one is logged in -->
       <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="waves-effect" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/saved">Saved</router-link>
          </li>
        </ul>
    

      </div>
    </nav>
           <ul class="sidenav" id="mobile-demo">
               <li>
            <router-link class="waves-effect" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="waves-effect" to="/saved">Saved</router-link>
          </li>
         </ul>

  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  mounted(){
          var elems = document.querySelectorAll('.sidenav');
         var instances = M.Sidenav.init(elems);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin: 0 20px 0 0;
  font-size: 16px;
}

.nav-wrapper {
  background-image: linear-gradient(to bottom right, #161414, #2c2e2c, #454e46);
}
</style>