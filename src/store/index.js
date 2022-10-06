import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'



import Item from '@/classes/Item'
import User from '@/classes/User'
import Profile from '@/classes/Profile'
import List from '@/classes/List'
import Role from '@/classes/Role'
import RoleUser from '@/classes/RoleUser'
import Image from '@/classes/Image'
import Post from '@/classes/Post'




const database = new VuexORM.Database()

database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)
database.register(Role)
database.register(RoleUser)
database.register(Image)
database.register(Post)

export default createStore({
  plugins: [VuexORM.install(database)]
})
