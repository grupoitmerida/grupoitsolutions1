<template>
  <div class="header" 
  :class="{
    [`bg-${type}`]: type
    }">
    <!-- <div class="header"> -->
     <b-container fluid>
      <div class="header-body">
        <slot></slot>
      </div>
     </b-container>
  </div>
</template>
<script>
  export default {
    name: 'base-header',
    props: {
      type: {
        type: String,
        default: 'darker',
        description: 'Header background type'
      }
    }
  }
</script>
<style>

</style>
