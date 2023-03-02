<style>
  h1{
    text-align: center;
  }
  ul{
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  footer{
    color: blue;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
<h1>Miracle's Blog</h1>

<ul>
  <li><a href="/">home</a></li>
  <li><a href="/articles">articles</a></li>
  <li><a href="/about">About</a> </li>
</ul>

<main><slot /></main>


<footer>
  <a href="/">wrriten by 2023.03.02</a>
</footer>
