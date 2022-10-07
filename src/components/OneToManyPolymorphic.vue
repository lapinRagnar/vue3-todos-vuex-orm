<template>
  
  <div>
    
    <h3>One to many polymorphic</h3>
    <p>video -> comments</p>
    <p>Post -> comments</p>
    <p>créer une class - Video, Post, Comment</p>

    <h3>Videos</h3>
    <div
      v-for="video in videos"
      :key="video.id"
    >
      {{ video.url }}
      <video :src="video.url"></video>

      <ul>
        <li v-for="comment in video.comments" :key="comment.id">
        {{ comment.body }}
      </li>
      </ul>

    </div>

    <h3>Post</h3>
    <div v-for="post in posts" :key="post.id">
    
      <h4>{{ post.title }}</h4>
      <p> {{ post.body }} </p>

      <h5>commentaire</h5>
      <div v-for="comment in post.comments" :key="comment.id">
        {{ comment.body }}
      </div>
    
    </div>


  </div>
</template>

<script>
import Video from '@/classes/Video';
import Post from '@/classes/Post';

export default {
  
  mounted(){

    Video.insert({
      data: [
        {
          id: 1,
          url: 'https://youtu.be/4QGDrHb0sVk',
          comments: [
            {
              id: 10,
              body: 'c coool les mecs, aie aieuuuuh!'
            },
            {
              id: 11,
              body: 'mon deuxieme comment!'
            },
            {
              id: 12,
              body: 'mon troisiemene comment!'
            },
          ]
        }
      ]
    })

    Post.insert({
      data: [
        {
          id: 1,
          title: 'mon super titre de post',
          body: 'mon super body des mon super post',
          comments: [
            {
              id: 10,
              body: 'mon comment sur le post c coool les mecs, aie aieuuuuh!'
            },
            {
              id: 11,
              body: 'mon deuxieme comment polymorhic aie aieuuuh!'
            },
            {
              id: 12,
              body: 'mon troisiemene comment!'
            },
          ]
        }
      ]
    })
  },

  computed: {

    videos(){
      return Video.query()
              .with('comments')
              .get()
    },

    posts(){
      return Post.query()
              .with('comments')
              .get()
    }
  }
}
</script>
<style lang="">
    
</style>