import { Model } from '@vuex-orm/core'
import Image from './Image'
import Item from './Item'
import List from './List'
import Profile from './Profile'
import Role from './Role'
import RoleUser from './RoleUser'

export default class User extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'users'

  get full_name(){
    return `${this.firstName} - ${this.lastName}`
  }



  static fields() {

    return {
      id: this.uid(),
      name: this.attr(''),
      email: this.attr(''),
      firstName: this.attr(''),
      lastName: this.attr('', value => value.toUpperCase()),

      // relation
      profile: this.hasOne(Profile, 'user_id'),

      // a user has many lists
      lists: this.hasMany(List, 'user_id'),

      // has many through cad user -> lists -> items
      items: this.hasManyThrough(Item, List, 'user_id', 'list_id'),

      roles: this.belongsToMany(Role, RoleUser, 'user_id', 'role_id'),

      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),
    }


  }


}