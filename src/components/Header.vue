<template>
  <header class="bg-grey-lighter py-4">
    <div class="container m-auto flex flex-wrap items-center justify-end">
      <div class="flex-1 flex items-center">

        <a href="/" class="uppercase text-sm font-mono pl-4 font-semibold no-underline text-indigo-dark hover:text-indigo-darker">expen$eMe</a>
      </div>
      <div>
        <router-link to="/" class="link-grey px-2 no-underline" v-if="!signedIn()">Log in</router-link>
        <router-link to="/signup" class="link-grey px-2 no-underline" v-if="!signedIn()">Sign Up</router-link>
        <router-link to="/records" class="link-grey px-2 no-underline" v-if="signedIn()">Categories</router-link>
        <router-link to="/artists" class="link-grey px-2 no-underline" v-if="signedIn()">Expenses</router-link>
        <a href="#" @click.prevent="signOut" class="link-grey px-2 no-underline" v-if="signedIn()">Sign out</a>
      </div>
    </div>
  </header>
</template>


<script>
  export default {
    name: "Header",
    created () {
      this.signedIn()
    },
    methods: {
      setError (error, text) {
        this.error = (error.response && error.response.data && error.response.data.error) || text
      },
      signedIn () {
        return localStorage.signedIn
      },
      signOut () {
        this.$http.secured.delete('/login')
          .then(response => {
            delete localStorage.csrf
            delete localStorage.signedIn
            this.$router.replace('/')
          })
          .catch(error => this.setError(error, 'Cannot sign out'))
      }
    }
  }
</script>