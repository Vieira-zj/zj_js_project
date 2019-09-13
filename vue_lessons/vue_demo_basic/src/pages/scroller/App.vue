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
  </div>
</template>

<style src="@/css/content.css" scoped></style>

<style scoped>
.container {
  display: grid;
  grid-template-areas: 'nav main';
}

#nav {
  grid-area: nav;
  padding: 20px;
  border: 30px;
  border-right: 1px solid #ccc;
  background-color: snow;
}

#main {
  grid-area: main;
  padding: 20px;
}
</style>