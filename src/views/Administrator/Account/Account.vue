<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="d-flex bd-highlight mb-3 mt-4">
            <div class="my-auto mx-3 me-auto bd-highlight">
              <div class="row">
                <div class="col-md-4 w-100">
                  <div class="input-group">
                    <input
                      class="form-control py-2 border-right-0 border bg-transparent"
                      type="search"
                      id="example-search-input"
                    />
                    <span class="input-group-append">
                      <div class="input-group-text bg-transparent h-100">
                        <i class="fa fa-search"></i>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn-add px-3 bd-highlight align-self-center">
              <button
                type="button"
                class="btn btn-outline-secondary py-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  class="user-icon"
                  src="@/assets/Images/icons/users.svg"
                  alt=""
                />
                Create Account
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody class="customtable">
                <tr v-for="item in database" :key="item.id">
                  <td>
                    <label class="customcheckbox">
                      <input type="checkbox" class="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                    <img
                      src="@/assets/Images/profile/BayunaRama.png"
                      class="rounded-circle mx-3"
                      style="width: 40px"
                      alt="Avatar"
                    />
                    {{ item.adminName }}
                  </td>
                  <td>{{ item.adminPhone }}</td>
                  <td>{{ item.adminEmail }}</td>
                  <td>{{ item.adminPass }}</td>
                  <td>
                    <span
                      class="active text-white px-2 py-2"
                      v-if="item.adminStatus == true"
                      >Active</span
                    >
                    <span
                      class="disable text-white px-2 py-2"
                      v-if="item.adminStatus == false"
                      >Disable</span
                    >
                  </td>
                  <td>
                    <button type="button" class="btn btn-light">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

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
                <label for="input-email" class="form-label me-auto"
                  >Username</label
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
                id="input-email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="input-phone" class="form-label"
                >Phone Number</label
              >
              <input
                type="number"
                class="form-control"
                id="input-phone"
              />
            </div>
            <div class="mb-3">
              <label for="input-email" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="input-email"
              />
            </div>
            <div class="mb-3">
              <label for="input-email" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="input-email"
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
                <button type="button" class="btn w-100 btn-primary">
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
</template>

<script>
export default {
  data() {
    return {
      database: [
        {
          id: 1,
          adminName: "admin1",
          adminPhone: "085156448045",
          adminEmail: "admin1@ebdesk.com",
          adminPass: "@admin1",
          adminStatus: true,
        },
        {
          id: 2,
          adminName: "admin2",
          adminPhone: "0895331105965",
          adminEmail: "admin2@ebdesk.com",
          adminPass: "@admin2",
          adminStatus: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);

.container {
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

  .card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid transparent;
    border-radius: 0px;
  }

  .card .card-title {
    position: relative;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }

  tr {
    height: 50px !important;
  }

  td {
    vertical-align: middle;
  }

  // * {
  //   outline: none;
  // }

  // .table th,
  // .table thead th {
  //   font-weight: 500;
  // }

  // .table thead th {
  //   vertical-align: bottom;
  //   border-bottom: 2px solid #dee2e6;
  // }

  // .table th {
  //   padding: 1rem;
  //   vertical-align: top;
  //   border-top: 1px solid #dee2e6;
  // }

  // .table th,
  // .table thead th {
  //   font-weight: 500;
  // }

  // th {
  //   text-align: inherit;
  // }

  // .m-b-20 {
  //   margin-bottom: 20px;
  // }

  // .customcheckbox {
  //   display: block;
  //   position: relative;
  //   padding-left: 24px;
  //   font-weight: 100;
  //   margin-bottom: 12px;
  //   cursor: pointer;
  //   font-size: 22px;
  //   -webkit-user-select: none;
  //   -moz-user-select: none;
  //   -ms-user-select: none;
  //   user-select: none;
  // }

  // .customcheckbox input {
  //   position: absolute;
  //   opacity: 0;
  //   cursor: pointer;
  // }

  // .checkmark {
  //   position: absolute;
  //   top: -3px;
  //   left: 0;
  //   height: 20px;
  //   width: 20px;
  //   background-color: #cdcdcd;
  //   border-radius: 6px;
  // }

  // .customcheckbox input:checked ~ .checkmark {
  //   background-color: #2196bb;
  // }

  // .customcheckbox .checkmark:after {
  //   left: 8px;
  //   top: 4px;
  //   width: 5px;
  //   height: 10px;
  //   border: solid white;
  //   border-width: 0 3px 3px 0;
  //   -webkit-transform: rotate(45deg);
  //   -ms-transform: rotate(45deg);
  //   transform: rotate(45deg);
  // }
  .form-control {
    background: white;
  }

  .col {
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

  .form-control:focus {
    outline: 0 !important;
    border-color: initial;
    box-shadow: none;
  }

  .customcheckbox {
    .checkbox {
      background-image: linear-gradient(to bottom, #2129a5 0%, #5d28ef 100%);
      width: 20px;
      height: 20px;
      vertical-align: middle !important;
    }
  }

  .active {
    background: #13c57c;
    border-radius: 30px;
  }

  .disable {
    background: #9ea2a9;
    border-radius: 30px;
  }
}
</style>
