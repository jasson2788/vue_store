import Vue from 'vue';
import App from 'components/App.vue';

import 'configuration/globalComponents';

new Vue({
    render: (h): Vue.VNode => h(App)
}).$mount('#app');