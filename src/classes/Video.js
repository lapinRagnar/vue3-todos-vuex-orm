import { Model } from '@vuex-orm/core'
import Comment from './Comment'


export default class Video extends Model {

  static entity = 'videos'

  static fields() {

    return {
      id: this.uid(),
      url: this.attr(null),

      // relationship
      comments: this.morphMany(Comment, 'commentable_id', 'commentable_type'),

    }
  }
}