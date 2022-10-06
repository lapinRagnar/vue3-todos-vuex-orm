<template lang="">

  <div>
  
    <ul v-for="user in users" :key="user.id">
  
      <h1>{{ user.name }}</h1>
      
      <li 
        v-for="role in user.roles"
        :key="role.id"
        v-text="role.title"
      />
    
    </ul>

  </div>
</template>
<script>
  
  import User from '@/classes/User'

export default {
  mounted(){
    User.insert({
      data: [
        {
          id: 1,
          name: 'lapinragnar',
          email: 'lapinragnar@ragnar.com',
          roles: [
            {
              id: 5,
              title: 'admin'
            },
            {
              id: 6,
              title: 'designer'
            },
            {
              id: 7,
              title: 'invite'
            },
          ]
        },
        {
          id: 2,
          name: 'belou',
          email: 'belou@belou.com',
          roles: [
            {
              id: 5,
              title: 'invite'
            },
          ]
        }
      ]
    })
  },

  computed: {
    users(){
      return User.query()
              .with('roles')
              .get()
    }
  },


}
</script>
<style lang="">
    
</style>