<template>
  <main id="Home-page">
    <div id="dashboard">
      <div class="container">
        <div class="d-flex bd-highlight mb-3 mt-4">
          <div class="my-auto me-auto bd-highlight">
            <h3 class="jumbotron m-0">{{ routeName }}</h3>
          </div>
          <div
            class="btn-add px-3 bd-highlight align-self-center"
            v-if="routeName === 'Workspace'"
          >
            <button type="button" class="btn btn-outline-secondary py-1">
              <img
                class="user-icon"
                src="@/assets/Images/icons/users.svg"
                alt=""
              />
              Create Workspace
            </button>
          </div>
          <div class="p-0 bd-highlight align-self-center h-100">
            <div class="routes">
              <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="routeName === 'Account Management' ? 'active' : ''"
                    to="/administrator/account/create"
                    >Account</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :class="routeName === 'Workspace' ? 'active' : ''"
                    to="/administrator/workspace/create"
                    >Workspace</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      routeName: null,
    };
  },
  created() {
    this.setRouteName();
  },
  methods: {
    setRouteName() {
      if (this.$route.name == "workspaceCreate") {
        this.routeName = "Workspace";
      } else if (this.$route.name == "accountCreate") {
        this.routeName = "Account Management";
      }
    },
  },
  watch: {
    $route(to, from) {
      this.setRouteName();
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #f6f6f6;
  min-height: 100%;

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }

    .btn-add {
      button {
        border-radius: 8px;
        border: 2px solid #0f123f;
        background: $white;
        color: #0F123F;
        font-weight: 500;

        &:focus {
          outline: none;
          box-shadow: none;
        }
        &:hover {
          img {
            filter: brightness(0) invert(1);
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