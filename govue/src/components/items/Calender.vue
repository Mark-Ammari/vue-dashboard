<template>
  <div class="calendar">
    <div class="month">
      <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>{{ getMonth() }}<br><span style="font-size:18px">{{ getYear() }}</span></li>
      </ul>
    </div>

    <ul class="weekdays">
      <li>Mo</li> <!-- Sunday is the first day of the week. -->
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>

    <ul class="days">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
    </ul>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                date: '',
            }
        },
        methods: {
            getMonth() {
                const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
                this.date = new Date();
                return monthNames[this.date.getMonth()];
            },
            getYear() {
                this.date = new Date()
                return this.date.getFullYear();
            },
        }
    }
</script>

<style>
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}
.calendar{
    margin: auto;  /*I want to center the calendar horizontally*/
    width: 80%;
}
.month {
    padding: 70px 25px;
    width: 100%;
    background: #1abc9c;
    text-align: center;
}
.month ul {
    margin: 0;
    padding: 0;
}
.month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}
.month .prev {
    float: left;
    padding-top: 10px;
}
.month .next {
    float: right;
    padding-top: 10px;
}
.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
}
.weekdays li {
    display: inline-block;
    width: 13.6%;
    color: #666;
    text-align: center;
}
.days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
}
.days li {
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    color: #777;
}
.days li .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
}
</style>
