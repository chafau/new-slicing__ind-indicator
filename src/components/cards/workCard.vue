<template>
  <div class="card mb-3" style="width: 19.5rem">
    <div class="text-center mt-4">
      <img
        class="rounded-circle"
        :src="require(`@/assets/Images/workspace/${imgUrl}.png`)"
      />
      <h6 class="card-title mt-3 mb-0">{{ title }}</h6>
    </div>
    <!-- <div class="testimony-card p-4 text-black">
    </div> -->
    <hr class="mx-auto my-4" />
    <div class="card-body py-0">
      <div class="row">
        <div class="col text-center">
          <h6 class="max-text">Max Account</h6>
          <h6 style="display: inline">{{ accountCurrentValue }}</h6>
          <h6 style="display: inline">/</h6>
          <h6 style="display: inline">{{ accountMaxValue }}</h6>
        </div>
        <div class="col text-center">
          <h6 class="max-text">Max Assessment</h6>
          <h6 style="display: inline">{{ assessmentCurrentValue }}</h6>
          <h6 style="display: inline">/</h6>
          <h6 style="display: inline">{{ assessmentMaxValue }}</h6>
        </div>
      </div>
    </div>
    <div class="card-body pt-4">
      <div class="row">
        <div class="col">
          <div class="w-100 text-left">
            <h6 class="max-text m-0">
              <i class="fa-regular fa-calendar"></i>
              &nbsp;21-04-2021
            </h6>
          </div>
        </div>
        <div class="col">
          <div class="w-100">
            <h6 class="btn-action m-0">
              <i class="fa-regular fa-pen-to-square mx-3"></i>
              <i class="fa-regular fa-trash-can"></i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCards",
  props: {
    title: String,
    imgUrl: String,
    accountCurrentValue: Number,
    accountMaxValue: Number,
    assessmentCurrentValue: Number,
    assessmentMaxValue: Number,
  },
};
</script>

<style lang="scss" scoped>
.max-text {
  font-size: 13px;
  color: #9ea2a9;
}

.btn-action {
  text-align: right;
  font-size: 13px;
  color: #9ea2a9;
}

hr {
  border-top: 2px solid #000000;
  border-radius: 30px;
}

img {
  // object-fit: cover;
  width: 60px;
  height: 60px;
}
</style>