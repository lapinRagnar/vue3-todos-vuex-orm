<template>

  <h1>mon nom est - {{ user.name }}</h1>

  <input v-model="form.title" />
  <button @click="addList">ajouter list</button>

  <List
    v-for="list in user.lists"
    :key="list.id"
    :list="list"
  />

    

</template>

<script>
import User from './classes/User'
import ListComponent from '@/components/List.vue'
import List from './classes/List'




export default {
  name: 'App',
  components: {
    List: ListComponent,
  },
  data(){
    return {
      form: {
        title: '',
        user_id: 1
      }
    }
  },
  methods: {
    addList(){
      List.insert({data: this.form})
    }
  },
  computed: {

    user(){
      return User.query()
              .with('lists.items')
              .find(1)
    },


  },
  beforeMount(){

    User.insert({
      data: [
        {
          id: 1,
          name: 'lapin',
          email: 'lapin@gmail.com',  
          lists: [
            {
              id: 10,
              title: 'faire les courses',
              
            },
            {
              id: 11,
              title: 'faire la gym',
              
            },
            {
              id: 12,
              title: 'faire des betises',

            },
          ]
        },
      ]
    })

  }
}
</script>

<style scoped>
  .centrer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(163, 163, 48);
    min-height: 300px;
    padding: 50px;
    margin: 20px 100px;
    border-radius: 20px;
  }

  input, button {
    max-width: 300px;
    margin: 10px;
  }
</style>
