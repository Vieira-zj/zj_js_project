<template>
  <div>
    <h1>Vue Router Demo - Scroller</h1>
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link><br>
        <router-link to="/post">Post</router-link><br>
        <router-link to="/post#header">Header</router-link><br>
        <router-link to="/post#paragraph1">Paragraph 1</router-link><br>
        <router-link to="/post#paragraph2">Paaragraph 2</router-link><br>
        <router-link to="/post#footer">Footer</router-link>
      </div>
      <div id="main">
        <router-view />
      </div>
    </div>
    <!-- scroll by native js -->
    <div class="nav_top_bottom">
      <button @click="scrollHandle('#header')">Top</button><br>
      <button @click="scrollHandle('#footer')">Bottom</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollHandle (id) {
      window.scrollTo({
        top: document.querySelector(id).offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style src="@/css/content.css" scoped></style>

<style scoped>
.container {
  display: grid;
  grid-template-areas: 'nav main';
}

#nav {
  grid-area: nav;
  border: 20px;
}

#main {
  grid-area: main;
  padding: 20px;
}

.nav_top_bottom {
  position: fixed;
  top: 300px;
  right: 20px;
}
</style>