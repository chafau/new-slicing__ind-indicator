<template>
  <div id="app">
    <div class="row">
      <div class="col-md-3" v-for="item in WorkList" :key="item.id">
        <WorkCard
          :imgUrl="item.image"
          :title="item.title"
          :accountCurrentValue="item.accCurrVal"
          :accountMaxValue="item.accMaxVal"
          :assessmentCurrentValue="item.assCurrVal"
          :assessmentMaxValue="item.assMaxVal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SplineChart from "@/components/charts/SplineChart.vue";
import StatsCard from "@/components/cards/StatsCard.vue";
import axios from "axios";
import WorkCard from "@/components/cards/workCard.vue";

export default {
  data() {
    return {
      WorkList: [
        {
          id: 1,
          image: "google",
          title: "Google Company",
          accCurrVal: 1,
          accMaxVal: 21,
          assCurrVal: 21,
          assMaxVal: 21,
        },
        {
          id: 2,
          image: "netflix",
          title: "Netflix",
          accCurrVal: 1,
          accMaxVal: 21,
          assCurrVal: 21,
          assMaxVal: 21,
        },
        {
          id: 3,
          image: "gojek",
          title: "Gojek",
          accCurrVal: 1,
          accMaxVal: 21,
          assCurrVal: 21,
          assMaxVal: 21,
        },
        {
          id: 4,
          image: "paypal",
          title: "Paypal",
          accCurrVal: 1,
          accMaxVal: 21,
          assCurrVal: 21,
          assMaxVal: 21,
        },
      ],
    };
  },
  components: {
    SplineChart,
    StatsCard,
    WorkCard,
  },
};
</script>

<style lang="scss" scoped>
hr {
  width: 90%;
  opacity: 0.1 !important;
}
</style>
