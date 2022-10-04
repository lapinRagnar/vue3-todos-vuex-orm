import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'



import Item from '@/classes/Item'
import User from '@/classes/User'
import Profile from '@/classes/Profile'
import List from '@/classes/List'




const database = new VuexORM.Database()

database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)

export default createStore({
  plugins: [VuexORM.install(database)]
})
