import { Model } from '@vuex-orm/core'
import Item from './Item'
import List from './List'
import Profile from './Profile'
import Role from './Role'
import RoleUser from './RoleUser'

export default class User extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'users'

  static fields() {

    return {
      id: this.uid(),
      name: this.attr(''),
      email: this.attr(''),

      // relation
      profile: this.hasOne(Profile, 'user_id'),

      // a user has many lists
      lists: this.hasMany(List, 'user_id'),

      // has many through cad user -> lists -> items
      items: this.hasManyThrough(Item, List, 'user_id', 'list_id'),

      roles: this.belongsToMany(Role, RoleUser, 'user_id', 'role_id'),
    }


  }


}