import { Model } from '@vuex-orm/core'


export default class Image extends Model {

  static entity = 'images'

  static fields() {

    return {
      id: this.uid(),
      url: this.attr(null),
      imageable_id: this.attr(null),      // id = 4
      imageable_type: this.attr(null),     // exemple: user

      // relationship
      image: this.morphTo('imageable_id', 'imageable_type')

    }


  }


}