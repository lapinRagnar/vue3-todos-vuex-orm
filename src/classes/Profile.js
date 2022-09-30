import { Model } from '@vuex-orm/core'
import User from './User'

export default class Profile extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'profiles'

  static fields() {

    return {
      id: this.uid(),
      bio: this.attr(''),
      life_goal: this.attr(''),
      user_id: this.attr(null),
      
      // relation
      user: this.belongsTo(User, 'user_id')
    }


  }


}