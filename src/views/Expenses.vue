<template>
  <div class="max-w-md m-auto py-10">
    <div class="text-red" v-if="error">{{ error }}</div>
    <h3 class="font-mono font-regular text-3xl mb-4">Add a new Expense</h3>

    <form @submit.prevent="addExpense">
      <div class="mb-6">
        <label for="date" class="label">Date</label>
        <input
          type="date"
          id="date"
          class="input"
          autofocus
          autocomplete="off"
          v-model="newExpense.date">
      </div>

      <div class="mb-6">
        <label for="description" class="label">Description</label>
        <input
          type="text"
          id="description"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="description"
          v-model="newExpense.description">
      </div>

      <div class="mb-6">
        <label for="amount" class="label">Amount</label>
        <input
          type="number"
          id="amount"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="description"
          v-model="newExpense.amount">
      </div>

      <div class="mb-6">
        <label for="category" class="label">Category</label>
        <select id="category" class="select" v-model="newExpense.category">
          <option disabled value="">Select a Category</option>
          <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
        </select>
        <p class="pt-4">Don't a Category? <router-link to="/categories" class="link-grey">Create one</router-link></p>
      </div>

      <input type="submit" value="Add Expense" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green hover:bg-green-dark block w-full py-4 text-white items-center justify-center">
    </form>

    <hr class="border border-grey-light my-6" />

    <ul class="list-reset mt-4">
      <li class="py-4" v-for="expense in expenses" :key="expense.id" :expense="expense">
        <div class="flex items-center justify-between flex-wrap">
          <div class="flex-1 flex justify-between flex-wrap pr-4">
          <p class="block flex font-mono font-semibold flex items-center">
            {{ expense.date }} &mdash; {{ expense.description }} &mdash; {{ expense.amount }} &mdash; {{ expense.category }}
          </p>
          <p class="block font-mono font-semibold">{{ getCategory(expense) }}</p>
        </div>

        <button class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
          @click.prevent="editExpense(expese)">Edit</button>

        <button class="bg-transparent text-sm hover:bg-red text-red hover:text-white no-underline font-bold py-2 px-4 rounded border border-red"
         @click.prevent="deleteExpense(expense)">Delete</button>
        </div>

        <div v-if="expense == editedExpense">
          <form action="" @submit.prevent="updateExpense(expense)">
            <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">

              <div class="mb-6">
                <label class="label">Date</label>
                <input class="input" v-model="expense.date">
              </div>

              <div class="mb-6">
                <label class="label">Description</label>
                <input class="input" v-model="expense.description">
              </div>

               <div class="mb-6">
                <label class="label">Amount</label>
                <input class="input" v-model="expense.amount">
              </div>

              <div class="mb-6">
                 <select id="category_update" class="select" v-model="expense.category">
                    <option disabled value="">Select Category</option>
                  <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                  </select>
              </div>

              <input type="submit" value="Update" class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded">
            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Expenses',
  data () {
    return {
      categories: [],
      expenses: [],
      newExpense: [],
      error: '',
      editedExpense: ''
    }
  },
  created () {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured.get('/api/expenses')
        .then(response => { this.expenses = response.data })
        .catch(error => this.setError(error, 'Something went wrong'))
      this.$http.secured.get('/api/expenses')
        .then(response => { this.expense = response.data })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    getCategory (expense) {
      const categoryValues = this.categories.filter(category => category.id === expense.category_id)
      let category
      categoryValues.forEach(function (element) {
        category = element.name
      })
      return category
    },
    addExpense () {
      const value = this.newExpense
      if (!value) {
        return
      }
      this.$http.secured.post('/api/expenses/', { expense: { date: this.newExpense.date, description: this.newExpense.description, category_id: this.newExpense.category } })
        .then(response => {
          this.expenses.push(response.data)
          this.newExpense = ''
        })
        .catch(error => this.setError(error, 'Cannot create expense'))
    },
    deleteExpense (expense) {
      this.$http.secured.delete(`/api/expenses/${expense.id}`)
        .then(response => {
          this.expenses.splice(this.expenses.indexOf(expense), 1)
        })
        .catch(error => this.setError(error, 'Cannot delete expense'))
    },
    editExpense (expense) {
      this.editedExpense = expense
    },
    updateExpense (expense) {
      this.editedExpense = ''
      this.$http.secured.patch(`/api/expenses/${expense.id}`, { expense: { date: expense.date, description: expense.description, amount: expense.amount, category_id: expense.category } })
        .catch(error => this.setError(error, 'Cannot update expense'))
    }
  }
}
</script>