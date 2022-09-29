import { Model } from '@vuex-orm/core'

export default class Item extends Model {

  // on met le nom item au pluriels et la class Item au singulier
  static entity = 'items'

  static fields() {

    return {
      id: this.attr(null),
      body: this.attr('')
    }


  }


}