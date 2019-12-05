---
layout: default
title: 'Number to Words Convertor'
parent: Tools
nav_order: 3
modifiedDate: 2019-06-09
---

# Convert Number to Words

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script> -->
<script>
function convertNumberToWord(){
    var data = document.getElementById("numberField").value;
    if(data === "" || data === undefined) return false;
    $.ajax({
        url: 'https://us-central1-adyarcafe-blogs.cloudfunctions.net/numberToWords?message='+data,
        dataType: 'jsonp',
       contentType: 'application/javascript',
        cors: true ,
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
          },
        crossDomain: true,
        success: function(data){
          document.getElementById("wordOutput").innerHTML = data.a
        },
        error: function(response){
           document.getElementById("wordOutput").innerHTML = JSON.stringify(response);
        }

      });
      return false;
  }
</script>

<label for="name"> Enter Number:</label>
<input type="number" id="numberField" name="number" required
       minlength="1" maxlength="15" size="10">

<button onclick="convertNumberToWord()">Display in Words</button>

<p id="wordOutput"></p>
