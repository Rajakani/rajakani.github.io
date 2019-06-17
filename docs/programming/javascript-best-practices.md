---
layout: default
title: 'JS Best practices'
parent: Programming
nav_order: 3
modifiedDate: 12-Jan-2017
comments: true
---

<ul>
<li>Use <em>const</em> and <em>let</em> instead of <em>var</em></li>
<br><p>Consider a simple for...loop <br> <em>for(var x = 0; x &lt;10; x++){} console.log(x);<br></em>
If you expect the result is <em>undefined</em>, then you got it wrong. <br>It will print 10.<br>
To avoid this use let : <br><em>for(let x = 0; x &lt; 10; x++){} console.log(x);<br></em>
<em>const</em> and <em>let</em> only exist in the blocks they are defined in, but 
Learn javascript Hoisting and Block scope to learn more about this</p>

<li>Know the difference between a normal for loop, for..of and for..in loops</li>
</ul>

<p>For other <a href='{{site.data.intersite-links.code-best-practice}}'>code best practices</a> see this post. </p>
