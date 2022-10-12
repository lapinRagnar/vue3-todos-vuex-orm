<template>
  <div>
    Many To Many Polimorphic
    <div>Tag -> videos | posts</div>
    <div>Video -> tags</div>      
    <div>Post -> tags</div>   
    <div>taggable</div>
    <div style="border: 1px green solid ; margin: 40px 0px;"></div>   
  </div>

  <div
    v-for="video in videos"
    :key="video.id"
  >
    {{ video.url }}
    <video controls width="250" autoplay>
      <source :src="video.url">
    </video>

    <li v-for="tag in video.tags" :key="tag.id">
      {{tag.name}}
    </li>
  </div>

  <div
    v-for="post in posts"
    :key="post.id"
  >
    {{ post.title }}

    <li v-for="tag in post.tags" :key="tag.id">
      {{tag.name}}
    </li>

  </div>

  <div style="border: 5px solid orange; margin: 40px 0;"></div>

  <div
    v-for="tag in tags"
    :key="tag.id"
  >
    <h2>tag - {{tag.name}}</h2>
    <div>
      <h4>videos</h4>
      <div
        v-for="video in tag.video"
        :key="video.id"
      >
        {{videos.url}}
      </div>
    </div>

    <div style="border: 1px solid yellowgreen; margin: 40px 0;"></div>

    <div>
      <h4>posts</h4>
      <div
        v-for="post in tag.posts"
        :key="post.id"
      >
        {{post.title}}
      </div>
    </div>
  </div>


</template>
<script>
import Post from '@/classes/Post';
import Tag from '@/classes/Tag';
import Video from '@/classes/Video';

export default {
  
  mounted(){
    Video.insert({
      data: [
        {
          id: 1,
          url: 'https://youtu.be/w7yekJ6mhu8',
          tags: [
            {
              id: 1,
              name: 'messi',
            },
            {
              id: 2,
              name: 'foot',
            },
          ]
        }
      ]
    })


    Post.insert({
      data: [
        {
          id: 1,
          title: 'le titre de mon super post',
          tags: [
            {
              id: 5,
              name: 'le recit d\'un post',
            },
            {
              id: 9,
              name: 'sport',
            },
          ]
        }
      ]
    })

  },

  computed: {
    videos(){
      return Video.query()
              .with('tags')
              .get()
    },
    posts(){
      return Post.query()
              .with('tags')
              .get()
    },

    tags(){
      return Tag.query()
              .with('videos|posts')
              .get()

    }
  }
}
</script>
<style lang="">
    
</style>