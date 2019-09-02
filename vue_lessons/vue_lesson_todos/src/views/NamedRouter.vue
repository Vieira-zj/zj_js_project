<template>
  <div>
    <div>
      <h2>Nested Named Views</h2>
      <router-link to="/router/named/settings/emails">user profile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'header header'
    'nav content'
    'nav helper';
}

h2 {
  grid-area: header;
}

.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}
</style>
