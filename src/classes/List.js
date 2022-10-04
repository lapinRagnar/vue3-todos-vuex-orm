import { Model } from '@vuex-orm/core'
import Item from './Item'
import User from './User'

export default class List extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'lists'

  static fields() {

    return {
      id: this.attr(null),
      title: this.attr(''),
      user_id: this.attr(null),

      // relationship
      // belongsTo a user
      user: this.belongsTo(User, 'user_id'),

      // list has many items
      items: this.hasMany(Item, 'list_id')
    }


  }


}