<template>

  <h1>mon nom est - {{ user.name }}</h1>

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



  

</template>

<script>
import User from './classes/User'
import Item from './classes/Item';
import List from './classes/List';



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
