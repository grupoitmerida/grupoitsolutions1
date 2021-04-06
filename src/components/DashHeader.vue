<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-default">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="Dispositivos"
                      type="gradient-red"
                      :sub-title='this.totalDevices'
                      icon="ni ni-tablet-button"
                      class="mb-4">

            <template slot="footer">
              <!-- <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span> -->
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Vehículos"
                      type="gradient-info"
                      :sub-title='this.totalVehicles'
                      icon="ni ni-bus-front-12"
                      class="mb-4">

            <template slot="footer">
              <!-- <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span> -->
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="SIMS"
                      type="gradient-green"
                      :sub-title='this.totalSims'
                      icon="ni ni-credit-card"
                      class="mb-4">

            <template slot="footer">
              <!-- <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span> -->
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Activos"
                      type="gradient-light"
                      :sub-title='this.totalAssets'
                      icon="ni ni-single-02"
                      class="mb-4">

            <template slot="footer">
              <!-- <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span> -->
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>  
</template>
<script>
import UserCard from '../views/Pages/UserProfile/UserCard';
import basicService from '../services/basic.service';
export default {
    data() {
      return {
          totalDevices: '',
          totalVehicles: '',
          totalSims: '',
          totalAssets: ''
      }
    },
    props:{
      
    },
    components:{
        UserCard,
        basicService
    },
    mounted(){
        basicService.getDevices().then((result) => {
        this.totalDevices = result.data.total.toString();
      })
      basicService.getVehicles().then((result) => {
        this.totalVehicles = result.data.total.toString();
      })
      basicService.getSims().then((result) => {
        this.totalSims = result.data.total.toString();
      })
      basicService.getAssets().then((result) => {
        this.totalAssets = result.data.total.toString();
      })
    }
}
</script>