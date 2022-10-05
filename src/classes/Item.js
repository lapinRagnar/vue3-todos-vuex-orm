import { Model } from '@vuex-orm/core'
import List from './List'

export default class Item extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'items'

  static fields() {

    return {
      id: this.uid(),
      body: this.attr(''),
      list_id: this.attr(null),

      // relationship
      list: this.belongsTo(List, 'list_id')

    }


  }


}