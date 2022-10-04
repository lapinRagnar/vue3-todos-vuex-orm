<template>

  <div class="centrer" v-for="profile in profiles" :key="profile.id">

    <h1>Mon super vuex-ORM</h1>
    <h3>Retation User --> profile</h3>

    <h2>Nom: {{ user.name }}</h2>
    <p>Bio: {{ user.profile.bio}}</p>
    <p>Objectif: {{ user.profile.life_goal}}</p>

    <hr>
    <h3>Retation inverse profile --> user</h3>

    <h2>Nom: {{ profile.user.name }}</h2>
    <p>{{ profile.bio }}</p>

    <input v-model="form.body" />

    <button @click="addItem">Ajouter un item</button>

    <li v-for="item in items" :key="item.$id">
      {{ item.body }}
    </li>

  </div>

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
      // return User.find(22)
      return User.query()
              .with('profile')
              .find(22)
    },
    profiles(){
      // return Profile.find(22)
      return Profile.query()
              .with('user')
              .get()
    }
  },
  beforeMount(){

    User.insert({
      data: [
        {
          id: 22,
          name: 'lapin',
          email: 'lapin@gmail.com',  
          profile: {
            id: 55,
            bio: 'Je suis un developpeur!',
            life_goal: 'rien de special',        

          }      
        },
        {
          id: 1,
          name: 'ragnar',
          email: 'ragnar@gmail.com',  
          profile: {
            id: 5,
            bio: 'Je suis un nageur!',
            life_goal: 'les potes!',        

          }      
        }
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
