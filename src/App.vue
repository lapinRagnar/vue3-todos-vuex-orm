<template>
  <input v-model="form.body" />

  <button @click="addItem">Ajouter un item</button>

  <li v-for="item in items" :key="item.$id">
    {{ item.body }}
  </li>

</template>

<script>
import Item from './classes/Item';



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
    }
  }
}
</script>

<style>

</style>
