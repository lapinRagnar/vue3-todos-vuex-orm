import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'



import Item from '@/classes/Item'




const database = new VuexORM.Database()

database.register(Item)

export default createStore({
  plugins: [VuexORM.install(database)]
})
