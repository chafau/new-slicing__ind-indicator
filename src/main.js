import { app } from "./plugins/globalComponents.js"
import router from './routes'
import VueApexCharts from "vue3-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

library.add(fas, far);
dom.watch();

app.use(VueApexCharts);
app.use(router).component('fa', FontAwesomeIcon).mount('#app')