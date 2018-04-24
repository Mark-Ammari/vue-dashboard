<template>
<div>
    <app-navbar></app-navbar>          
        <div>
            <canvas id="planet-chart"></canvas>
        </div> 
</div>
</template>

<script>
    import NavBar from '../NavBar.vue'
    import Chart from 'chart.js';
    import planetChartData from '../../chart-data.js';

    export default {   
        data: function() {
            return {
                planetChartData: planetChartData,
            }
        }, 
        mounted() {
            this.createChart('planet-chart', this.planetChartData);
        },
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }         
        },
        components: {
            appNavbar: NavBar
        }

    }
</script>