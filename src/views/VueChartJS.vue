<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <!-- <line-chart></line-chart> -->
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
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
