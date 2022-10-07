<template>

  <h1
    style="background-color: orangered; border-bottom: 1px solid green;"
  >One To Many Polymorphic Relationship
  </h1>

  <OneToManyPolymorphic />

</template>

<script>
import User from './classes/User'
import ListComponent from '@/components/List.vue'
import ManyToMany from '@/components/ManyToMany.vue'
import OneToOnePolymorphic from '@/components/OneToOnePolymorphic.vue'
import List from './classes/List'
import OneToManyPolymorphic from './components/OneToManyPolymorphic.vue'




export default {
  name: 'App',
  components: {
    List: ListComponent,
    ManyToMany,
    OneToOnePolymorphic,
    OneToManyPolymorphic
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
              .with('items')
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
