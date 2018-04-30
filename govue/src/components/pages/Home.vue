<template>
<div>
     <app-navbar></app-navbar>

     <div style="margin-left:200px;" class="container">
        <div class="row">

        <div class="col-xs-6">
            <transition name="fade" appear>
                <div style="margin-top:15px;background-color:lightgrey;">
                    <canvas id="planet-chart"></canvas>
                </div>
            </transition>
        </div>

        <div class="col-xs-6">
            <transition name="fade" appear>
                <div style="margin-top:15px;background-color:lightgrey;">
                    <canvas id="pie-chart"></canvas>
                </div>
            </transition>
        </div>

        <div class="row">
            <div style="margin-top:15px;" class="col-xs-12">
                 <transition name="fade" appear>
                    <appCalender></appCalender>
                 </transition>
            </div>
        </div>

        </div>
        </div>

</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue'
    import Chart from 'chart.js';
    import planetChartData from '../../chart-data.js';
    import barChartData from '../../chart-data2.js';
    import Calender from "../items/Calender.vue"

    export default {
        data: function() {
            return {
                data: [],
                planetChartData: planetChartData,
                barChartData: barChartData
            }
        },
        mounted(){
            this.createChart('planet-chart', this.planetChartData);
            this.createChart('pie-chart', this.barChartData);


        },
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                })
            },
        },
        components: {
            appNavbar: NavBar,
            appCalender: Calender
        }

    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 2s;
        opacity: 0;
    }
</style>
