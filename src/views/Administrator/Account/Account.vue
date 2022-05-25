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
                      class="
                        form-control
                        py-2
                        border-right-0 border
                        bg-transparent
                      "
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
              <button type="button" class="btn btn-outline-secondary py-1">
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
                <tr>
                  <td>
                    <label class="customcheckbox">
                      <input type="checkbox" class="checkbox"/>
                      <div class="control__indicator"></div>
                    </label>
                    adminRahasia123
                  </td>
                  <td>089672832132</td>
                  <td>ebdesk@gmail.com</td>
                  <td>Test123@</td>
                  <td>
                    <span>Active</span>
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
</template>

<style lang="scss" scoped>
@import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);

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

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
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

.form-control:focus {
  outline: 0 !important;
  border-color: initial;
  box-shadow: none;
}

.checkbox:hover {
    display: none !important;
}
</style>