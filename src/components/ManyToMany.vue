<template lang="">

  <div>
    
    <h2>relation inverse - lister les utilisateurs en fonction de son role</h2>
    <ul
      v-for="role in roles"
      :key="role.id"

    >
      <h1>{{ role.title }}</h1>
      <li 
        v-for="user in role.users"
        :key="user.id"
        v-text="user.name"
      />

    </ul>

  </div>
</template>
<script>
  
  import User from '@/classes/User'
  import Role from '@/classes/Role'

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
    roles(){
      return Role.query()
              .with('users')
              .get()
    }
  },


}
</script>
<style lang="">
    
</style>