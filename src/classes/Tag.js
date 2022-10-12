import { Model } from '@vuex-orm/core'
import Post from './Post'
import Taggable from './Taggable'
import Video from './Video'


export default class Tag extends Model {

  static entity = 'tags'

  static fields() {

    return {
      id: this.uid(),
      name: this.attr(null),

      // relationship
      videos: this.morphedByMany(Video, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
      posts: this.morphedByMany(Post, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),

    }


  }


}