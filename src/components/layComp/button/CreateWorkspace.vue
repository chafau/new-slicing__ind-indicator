<template>
  <div class="btn-add px-3 bd-highlight align-self-center">
    <button
      type="button"
      class="btn btn-outline-secondary py-1"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <img class="user-icon" src="@/assets/Images/icons/users.svg" alt="" />
      Create Workspace
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog w-25 modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <div class="d-flex">
                  <label for="exampleInputEmail1" class="form-label me-auto"
                    >Company Name</label
                  >
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="company.email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Max Account</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="company.maxAcc"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Max Assessment</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="company.maxAss"
                />
              </div>
              <div class="row">
                <div class="col">
                  <button
                    type="button"
                    class="btn w-100 btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col">
                  <button
                    type="button"
                    class="btn w-100 btn-primary"
                    v-on:click="addCompany(company)"
                    @click="emitEventChanged"
                  >
                    <i
                      class="fai fa-solid fa-arrow-right-to-bracket fa-rotate-90"
                    ></i>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateWorkspaceButton",
  data() {
    return {
      company: {},
      workspace: [],
    };
  },
  methods: {
    addCompany() {
      this.workspace.push({ ...this.company });
      this.company = {};
    },
    emitEventChanged() {
      this.$emit("emitEvents", this.workspace);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  background: #f6f6f6;
  min-height: 100%;

  .form-control {
    background: white;
  }

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }

    .btn-add {
      .btn {
        border-radius: 8px;
        border: 2px solid #0f123f;
        background: $white;
        color: #0f123f;
        font-weight: 500;

        &:focus {
          outline: none;
          box-shadow: none;
        }

        &:hover {
          img {
            filter: brightness(0) invert(1);
          }

          .fai {
            color: white;
          }

          -webkit-text-fill-color: white;
          background: linear-gradient(128.58deg, #0f123f 14.67%, #3a408f 86.8%);
        }
      }
    }

    .routes {
      border: 0.5px solid #e3e7ee;
      border-radius: 8px;
      li {
        a {
          color: $black;
          border-radius: 7.4px;
          background: $white;

          &.active {
            color: $white;
            background: linear-gradient(
              128.58deg,
              #0f123f 14.67%,
              #3a408f 86.8%
            );
          }
        }
      }
    }
  }
}
</style>
