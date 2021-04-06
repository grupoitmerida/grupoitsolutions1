<template>
<div>
    <dash-header></dash-header>
    <br><br>
    <b-container fluid>
        <edit-profile-form></edit-profile-form>
    </b-container> 
    <br><br>
    <b-container fluid>
        <page-visits-table></page-visits-table>
    </b-container>
    <br><br> 
</div>
</template>
<script>
import DashHeader from '../../components/DashHeader';
import PageVisitsTable from '../Dashboard/PageVisitsTable.vue';
import EditProfileForm from './UserProfile/EditProfileForm.vue';

export default {
    data() {
      return {}
    },
    components:{
        DashHeader,
        PageVisitsTable,
        EditProfileForm,
        
    },
    mounted(){
  
    }
}
</script>
        
