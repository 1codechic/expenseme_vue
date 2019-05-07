<template>
  <div id="app">
  <Header />

  <router-view/>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

