<template>
  <div class="max-w-sm m-auto my-8">
    <div class="border p-10 border-grey-light shadow rounded">
      <h3 class="text-2xl mb-6 text-grey-darkest">Log In</h3>
      <form @submit.prevent="login">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="mb-6">
          <label for ="email" class="label">Email Address</label>
          <input type="email" v-mdoel="email" class="input" id="email">
        </div>

        <div class="mb-6">
          <label for ="password" class="label">Password</label>
          <input type="password" v-mdoel="password" class="input" id="email">
        </div>

        <button type="submit" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green hover:bg-green-dark block w-full py-4 text-white items-center justify-center">Log In</button>

        <div class="my-4">
          <router-link to="/signup" class="link">Sign Up</router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  updated() {
    this.checkLoggedIn()
  },
  methods: {
    login() {
      this.$http.plain.post('/login', { email: this.email, password: this.password})
      .then(response => this.signSuccessfull(response))
      .catch(error => this.singinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.loginFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/categories')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/categories')
      }
    }
  }
}
</script>