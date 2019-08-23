function getQuotes(){        
  $.ajax({
        url: 'https://us-central1-adyarcafe-blogs.cloudfunctions.net/QuoteFinder',
        dataType: 'jsonp',
        contentType: 'application/javascript',
        cors: true ,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        crossDomain: true,
        success: function(response){
          $('#quotesWidget').html(response.quote)
        },
        error: function(response){
          $('#quotesWidget').html(JSON.stringify(response));
        }

    });
    return false;
}