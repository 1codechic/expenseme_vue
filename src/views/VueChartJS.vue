<template>
  <section class="container">
    <h1>Monthly Expenses</h1>
    <div class="columns">
      <div class="column">
        <!-- <line-chart></line-chart> -->
      </div>
      <div class="column">
        
        <!--Bar Chart example-->
      </div>
    </div>
    <div class="columns">
      <div class="column">
         <bar-chart></bar-chart>.
      </div>
    </div>
  </section>
</template>

<script>
  import BarChart from '@/components/BarChart'

   export default {
    name: 'VueChartJS',
    components: {
      
      BarChart
      
      
    }
  }
</script>
