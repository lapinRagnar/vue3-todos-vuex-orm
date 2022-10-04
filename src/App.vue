<template>

 
  <div v-for="list in user.lists" :key="list.id">
    <p>
      {{ list.title}}
    </p>

    <ul>
      <li
        v-for="item in list.items"
        :key="item.id"
        v-text="item.body"
      >

      </li>
    </ul>

  </div>

  <input v-model="form.body" />

  <button @click="addItem">Ajouter un item</button>


  

</template>

<script>
import User from './classes/User'
import Item from './classes/Item';
import Profile from './classes/Profile';



export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      form: {
        body: ''
      }
    }
  },
  methods: {
    addItem(){
      Item.insert({data: this.form })
    }
  },
  computed: {
    items(){
      return Item.all()
    },
    user(){
      return User.query()
              .with('lists.items')
              .find(22)
    },


  },
  beforeMount(){

    User.insert({
      data: [
        {
          id: 22,
          name: 'lapin',
          email: 'lapin@gmail.com',  
          lists: [
            {
              id: 1,
              title: 'shopping',
              items: [
                {
                  id: 1,
                  body: 'banane',
                },
                {
                  id: 2,
                  body: 'poire',
                },
                {
                  id: 3,
                  body: 'pomme',
                },
              ] 

            },
            {
              id: 2,
              title: 'faire du sport',
              items: [
                {
                  id: 1,
                  body: 'marathon',
                },
                {
                  id: 10,
                  body: 'basket',
                },
                {
                  id: 11,
                  body: 'natation',
                },
                {
                  id: 12,
                  body: 'randonnée',
                },
              ] 

            },
            {
              id: 3,
              title: 'apprendre la musique',
              items: [
                {
                  id: 4,
                  body: 'solfege',
                },
                {
                  id: 5,
                  body: 'rock',
                },
                {
                  id: 6,
                  body: 'country',
                },
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
