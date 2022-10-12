import { Model } from '@vuex-orm/core'
import Comment from './Comment'
import Image from './Image'
import Tag from './Tag'
import Taggable from './Taggable'


export default class Post extends Model {

  static entity = 'posts'

  static fields() {

    return {
      id: this.uid(),
      title: this.attr(null),
      body: this.attr(null),

      // relationship
      image: this.morphOne(Image, 'imageable_id', 'imageable_type'),

      comments: this.morphMany(Comment, 'commentable_id', 'commentable_type'),

      tags: this.morphToMany(Tag, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),


    }


  }


}