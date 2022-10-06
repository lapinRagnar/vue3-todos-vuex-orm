import { Model } from '@vuex-orm/core'


export default class RoleUser extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'role_user'

  static primaryKey = ['role_id', 'user_id']

  static fields() {

    return {
      id: this.uid(),
      user_id: this.attr(''),
      role_id: this.attr(''),

      // relationship
      

    }


  }


}