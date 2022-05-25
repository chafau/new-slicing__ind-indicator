<template>
  <main id="Home-page">
    <div id="dashboard">
      <div class="container">
        <h3 class="jumbotron pt-4">Dashboard</h3>
        <div class="row">
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="All Candidate"
              :description="datas"
              colors="white"
            />
          </div>
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="New Candidate"
              :description="datas"
              colors="white"
            />
          </div>
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="On Progress"
              :description="datas"
              colors="white"
            />
          </div>
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="Pending"
              :description="datas"
              colors="white"
            />
          </div>
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="Not Met"
              :description="datas"
              colors="white"
            />
          </div>
          <div class="col-md col-xs-6 mt-4">
            <stats-card
              title="Completed"
              :description="datas"
              colors="white"
            />
          </div>
        </div>
        <div class="row mt-4 mx-1 mx-md-0">
          <div class="col-md-7 col-xs-12 bg-white">
            <SplineChart />
          </div>
          <div
            class="
              col-md-4
              mt-3 mt-md-0
              col-xs-12
              mx-auto
              bg-white
              d-flex
              align-items-center
            "
          >
            <DonutChart />
          </div>
        </div>

        <div class="row bg-white mt-4 mx-2">
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StatsCard from "../components/cards/StatsCard.vue";
import ApexCharts from "apexcharts";
import Cards from "../components/cards/Cards.vue";
import DonutChart from "../components/charts/DonutChart.vue";
import SplineChart from "../components/charts/SplineChart.vue";
import axios from "axios";

export default {
  components: {
    StatsCard,
    ApexCharts,
    Cards,
    DonutChart,
    SplineChart,
  },
  data() {
    return {
      datas: null,

      //

      donutSimpleSeries: [50, 50],
      donutSimpleOptions: {
        labels: ["Transport"],
        chart: {
          type: "donut",
        },
        colors: ["#FFFFFF", "#3A408F"],
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "50%",
                  formatter: () => "Back End",
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },

  methods: {
    setData(data) {
      this.datas = data.length;
      console.log(this.datas);
    },
  },
  mounted() {
    axios
      .get("https://reqres.in/api/users")
      .then((resp) => {
        this.setData(resp.data.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
#dashboard {
  background: #f6f6f6;
  min-height: 100%;

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }
  }
}
</style>