<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8 mt-5">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo.id"><b @click="removeTodo(index)">{{ todo.todo }}</b></li>
            </ul>
            <form @submit.prevent="sub">
              <div class="form-group mt-5">
                <input type="text" placeholder="Add a Todo" class="form-control" v-model="todo">
                <button type="submit" class="btn btn-outline-primary mt-3">Add todo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data () {
    return {
      todo: ''
    }
  },
  computed: {
    todos () {
     return this.$store.state.todos
    }
  },

  mounted () {
    firebase.firestore().collection('todos').get().then((res) => {
      res.forEach(x => {
        this.$store.commit('setTodo', x.data())
      })
    })
  },

  methods: {
    sub () {
      if (this.todo) {
        firebase.firestore().collection('todos').add({
          
        }).then((res) => {
          firebase.firestore().collection('todos').doc(res.id).set({
            todo: this.todo,
            id: res.id
          }).then(() => {
            this.$store.commit('setTodo', ({
              todo: this.todo,
              id: res.id
            }))
            this.todo = ''
          })
        })
      }
      else {
        alert('your todo is empty')
      }
    },
    removeTodo (todo, index) {
      firebase.firestore().collection('todos').doc(todo.id).delete().then(() => {
        console.log('sucesssfully deleted')
        this.$store.commit('removeTodo', index)
      })
    }
  }
}
</script>

<style>

</style>
