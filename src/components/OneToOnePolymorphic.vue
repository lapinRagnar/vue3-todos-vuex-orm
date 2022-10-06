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

    <div style="border-top: 1px solid red; margin: 30px;"></div>
    <h2> la relation inverse - afficher d'ou vient les images</h2>

    <img
      v-for="image in images"
      :src="image.url"
      :key="image.id"
      style="width: 200px;"
    />

    <h3>A qui appartient l'image</h3>
    <div
      v-for="image in aQuiAppartientImage"
      :key="image.id"
    >
      {{ image.imageable.constructor.entity }}

    </div>


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
              id: 2,
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
              id: 1,
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
      },

      images(){
        return Image.all()
      },

      aQuiAppartientImage(){
        return Image.query()
                .with('imageable')
                .get()
      }

    }
    

  }

</script>
