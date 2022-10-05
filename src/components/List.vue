<template>
  <div>

    <h2>{{list.title}}</h2>

    <input v-model="form.body" />
    <button @click="addItem">ajouter item</button>

    <ul>
      <li
        v-for="item in filledList.items"
        :key="item.id"
      >
        {{item.body}}
        <button @click="deleteItem(item)">x</button>
      </li>
    </ul>

  </div>
</template>

<script>
  
  import Item from '@/classes/Item'
import List from '@/classes/List'


  export default {
    props: {
      list: {
        required: true,
        type: List
      }
    },

    computed: {
      filledList(){
        return List.query()
                .with('items')
                .find(this.list.id)
      }
    },
    
    data(){
      return {
        form: {
          body: '',
          list_id: this.list.id
        }
      }
    },
    methods: {
      addItem(){
        Item.insert({data: this.form})
      },

      deleteItem(item){
        console.log('supprimé', item.id);
        Item.delete({
          where: item.id
        })
      }
    }
  }


</script>

