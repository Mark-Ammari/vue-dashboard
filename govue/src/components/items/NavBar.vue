<template>
  <div class="side-nav">
        <router-link to="/" tag="a" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/ipchecker" tag="a" active-class="active"><a>IP-Checker</a></router-link>
        <router-link to="/maps" tag="a" active-class="active" exact><a>Maps</a></router-link>
        <router-link to="/about" tag="a" active-class="active" exact><a>About</a></router-link>
        <router-link to="/contact" tag="a" active-class="active"><a>Contact</a></router-link>
    </div>
</template>

<style>
.side-nav {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
}
.side-nav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    font-family: Times, serif;
    color: #818181;
    display: block;
}
.side-nav a:hover {
    color: #f1f1f1;
}
</style>
