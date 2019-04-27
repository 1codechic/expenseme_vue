<template>
  <div class="max-w-md m-auto py-10">
    <div class="text-red" v-if="error">{{ error }}</div>
    <h3 class="font-mono font-regular text-3xl mb-4">Add a new Category</h3>
    <form action="" @submit.prevent="addCategory">
      <div class="mb-6">
        <input class="input"
          autofocus autocomplete="off"
          placeholder="Type an arist name"
          v-model="newCategory.name" />
      </div>
      <input type="submit" value="Add Category" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green hover:bg-green-dark block w-full py-4 text-white items-center justify-center" />
    </form>

    <hr class="border border-grey-light my-6" />

    <ul class="list-reset mt-4">
      <li class="py-4" v-for="category in categories" :key="category.id" :category="category">

        <div class="flex items-center justify-between flex-wrap">
          <p class="block flex-1 font-mono font-semibold flex items-center ">
            <svg class="fill-current text-indigo w-6 h-6 mr-2" viewBox="0 0 20 20" width="20" height="20"><title>Expense Category</title><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"></path></svg>
            {{ category.name }}
          </p>

          <button class="bg-tranparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
          @click.prevent="editCategory(category)">Edit</button>

          <button class="bg-transprent text-sm hover:bg-red text-red hover:text-white no-underline font-bold py-2 px-4 rounded border border-red"
         @click.prevent="deleteCategory(category)">Delete</button>
        </div>

        <div v-if="category == editedCategory">
          <form action="" @submit.prevent="updateCategory(category)">
            <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">
              <input class="input" v-model="category.name" />
              <input type="submit" value="Update" class=" my-2 bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 rounded cursor-pointer">
            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      categories: [],
      newCategory: [],
      error: '',
      editedCategory: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured.get('/api/categories')
      .then(response => { this.categories = response.data })
      .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = ( error.response && error.response.data && error.response.data.error) || text
    },
    addCategory() {
      const value = this.newCategory
      if (!value) {
        return
      }
      this.$http.secured.post('/api/categories/', { category: { name: this.newCategory.name } })
        .then(response => {
          this.categories.push(response.data)
          this.newCategory = ''
        })
        .catch(error => this.setError(error, 'Cannot create category'))
    },
    deleteCategory (category) {
      this.$http.secured.get('/api/categories/${category.id}')
        .then(response => {
          this.category.splice(this.category.indexOf(category), 1)
        })
    },
    editCategory(category) {
      this.editedCategory = category
    },
    updateCategory (category) {
      this.editedCategory = ''
      this.$http.secured.patch(`/api/categories/${category.id}`, { cateogy: { title: category.name } })
        .catch(error => this.setError(error, 'Cannot update category'))
    }
  }
}
</script>