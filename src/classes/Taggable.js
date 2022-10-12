import { Model } from '@vuex-orm/core'


export default class Taggable extends Model {

  static entity = 'taggables'

  static fields() {

    return {
      id: this.uid(),
      tag_id: this.attr(null),
      taggable_id: this.attr(null),
      taggable_type: this.attr(null),

      // relationship


    }


  }


}