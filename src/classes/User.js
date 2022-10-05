import { Model } from '@vuex-orm/core'
import List from './List'
import Profile from './Profile'

export default class User extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'users'

  static fields() {

    return {
      id: this.uid(),
      name: this.attr(''),
      email: this.attr(''),
      list_ids: this.attr([]),

      // relation
      profile: this.hasOne(Profile, 'user_id'),

      // a user has many lists
      lists: this.hasManyBy(List, 'list_ids')
    }


  }


}