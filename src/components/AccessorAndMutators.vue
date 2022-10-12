<template>
  <div>
    <h3>AccessorAndMutators</h3>

    <div>
      Prénom: {{user.firstName}}
    </div>
    <div>
      Nom: {{user.lastName}}
    </div>
    <div>
      FullName: {{user.full_name}}
    </div>
  </div>
</template>
<script>
import User from '@/classes/User';

export default {
  
  mounted(){
    User.insert({
      data: {
        id: 1,
        firstName: 'lapin',
        lastName: 'ragnar'
      }
    })
  },

  computed:{
    user(){
      return User.find(1)
    }
  }

}
</script>
<style lang="">
    
</style>