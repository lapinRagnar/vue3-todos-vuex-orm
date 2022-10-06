<template>
  
  <div>
    <h3>Mon nom est {{ user.name }}</h3>
    <img
      :src="user.image.url"
      style="width: 200px;"
    />

    <h3>Mon post -  {{ post.title }}</h3>
    <img
      :src="post.image.url"
      style="width: 200px;"
    >
  </div>

</template>

<script>

  import Image from '@/classes/Image'
  import Post from '@/classes/Post'
  import User from '@/classes/User'

  export default {
    
    created(){

      User.insert({

        data: [
          {
            id: 1,
            name: 'lapinragnar',
            image: {
              url: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/12D08/production/_125546077_61846252.png'
            }
          }
        ]
      })

      Post.insert({

        data: [
          {
            id: 1,
            title: 'my awesom post',
            image: {
              url: "https://photos.tf1info.fr/images/1024/576/2_feature_1600x900_mercury-5bcebc-0@1x.jpeg"
            }
          }
        ]
      })
    },

    computed: {

      user(){
        return User.query()
                .with('image')
                .find(1)
      },

      post(){
        return Post.query()
                .with('image')
                .find(1)
      }

    }
    

  }

</script>
