<template>
  <Scatter :data="chartData"
           :options="chartOptions"
           :id="scatter-chart"
           :v-if="loaded"
  />
</template>

<script >
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      position: "top",
      min: -10,
      max: 10
    },
    y: {
      position: "right",
      min: -10,
      max: 10
    },
  }
}
let cdata = {
  datasets: [{ data: [{x:1, y:1}], backgroundColor: 'rgb(255, 99, 132)'  }]
};
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
  name: 'ScatterChart',
  components: {
    Scatter
  },
  data: () => ({
    loaded: false,
    chartData: null,
    chartOptions: options
  }),

  mounted: async function() {
    this.loaded = false

    try {
      const { newData } =  setInterval(()=>
      {
        cdata.datasets[0].data[0].x = cdata.datasets[0].data[0].x * -1;
        return cdata
      }, 1000)
      this.chartData = newData

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>