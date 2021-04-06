<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <b-container fluid>
      <!-- -- Mask -- -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- -- Header container -- -->
        <b-container fluid class="d-flex align-items-center">
          <b-row >
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">Hello Jesse</h1>
              <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your
                work and manage your projects or assigned tasks</p>
              <a href="#!" class="btn btn-info">Edit profile</a>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
      <br> <br>  
    <!--*************************************************************************-->    
    <br>  
  </div>
</template>
<script>
import UserCard from './UserProfile/UserCard';

  export default {
    data() {
      return {
 
      }
    },
    components: {
      UserCard,
    },
    methods:{
      removeBackgroundColor() {
        document.body.classList.remove('prueba-estilo');
      }
    },
    mounted(){
      this.removeBackgroundColor();
     
    }
  };
</script>
<style>
</style>
