---
layout: default
title: 'Convertor'
parent: Programming
nav_order: 3
modifiedDate: 09-Sep-2017
comments: true
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<script>
function someFunction(){   
    var data = 400;
    $.ajax({
        url: 'https://us-central1-adyarcafe-blogs.cloudfunctions.net/numberToWords?message='+data,
        dataType: 'jsonp',
        cors: true ,       
        method: 'GET',       
        headers: {
            'Access-Control-Allow-Origin': '*'
          },
        crossDomain: true,       
        success: function(data){
          document.getElementById("intro").innerHTML = data;
        }
      
      });
  }
</script>

<button onclick="someFunction()">Click me</button>

<p id="intro"></p>