<!-- Still need to work on responsiveness -->
<template>
<div>
     <app-navbar></app-navbar>

     <div style="margin-left:200px;" class="container">
        <div class="row">

        <div class="col-xs-6">
            <transition name="fade" appear>
                <div class="chart-container">
                    <canvas id="planet-chart"></canvas>
                </div>
            </transition>
        </div>

        <div class="col-xs-6">
            <transition name="fade" appear>
                <div class="chart-container">
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
        <div class="row">
            <br></br>
            <button class="btn btn-primary" @click="updateChart">Update</button>
            <button class="btn btn-success" @click="unblocked++">Unblocked</button>
            <button class="btn btn-danger" @click="blocked++">Blocked</button>
            <p>{{ unblocked }}/{{ blocked }}</p>
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
    import IPChecker from "../pages/IPChecker.vue"
    export default {
        data: function() {
            return {
                blocked: 0,
                unblocked: 0,
                planetChartData: planetChartData,
                barChartData: barChartData
            }
        },
        mounted(){
            this.createChart('planet-chart', this.planetChartData);
            this.createChart('pie-chart', this.barChartData);
        },
        methods: {
            updateChart(){
                if(this.planetChartData.data.datasets[0].data.length != 0 && barChartData.data.datasets[0].data.length != 0) {
                    this.planetChartData.data.datasets[0].data.pop()
                    this.planetChartData.data.datasets[0].data.pop()
                    this.barChartData.data.datasets[0].data.pop()
                    this.barChartData.data.datasets[0].data.pop()
                } else {
                    this.planetChartData.data.datasets[0].data.push(this.blocked)
                    this.planetChartData.data.datasets[0].data.push(this.unblocked)
                    this.barChartData.data.datasets[0].data.push(this.blocked)
                    this.barChartData.data.datasets[0].data.push(this.unblocked)
                }  
            },
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

    .chart-container{
        margin-top:15px;
        background-color:lightgrey;
    }

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
