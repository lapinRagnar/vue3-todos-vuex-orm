<template>

  <div style="float: left;">

    <h1>mon nom est - {{ user.name }}</h1>

    <input v-model="form.title" />
    <button @click="addList">ajouter list</button>

    <List
      v-for="list in user.lists"
      :key="list.id"
      :list="list"
    />
  </div>

  <div style="float: right">
    essai
    <ul>
      <li
        v-for="item in items"
        v-text="item.body"
        :key="item.id"
      />
    </ul>
  </div>

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

    items(){
      return User.query()
              .with('items')
              .find(1)
              .items
    }


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
              items: [
                {
                  id: 9,
                  body: 'banane'
                }
              ]
              
            },
            {
              id: 11,
              title: 'faire la gym',
              items: [
                {
                  id: 10,
                  body: 'pomme'
                }
              ]
            },
            {
              id: 12,
              title: 'faire des betises',
              items: [
                {
                  id: 11,
                  body: 'ananas'
                }
              ]
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
