import { Model } from '@vuex-orm/core'
import RoleUser from './RoleUser'
import User from './User'


export default class Role extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'roles'

  static fields() {

    return {
      id: this.uid(),
      title: this.attr(''),

      // relationship
      users: this.belongsToMany(User, RoleUser, 'role_id', 'user_id')

    }


  }


}