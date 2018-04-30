import IPChecker from './components/pages/IPChecker.vue'
import Home from './components/pages/Home.vue'
// import About from './components/pages/About.vue'
// import Contact from './components/pages/Contact.vue'
// import Maps from './components/pages/Maps.vue'

//Is there a simpler way to do these imports?
//import Pages from './components/pages'


export const routes = [
    { path: '', component: Home },
    { path: '/ipchecker', component: IPChecker }
];
