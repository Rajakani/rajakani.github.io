---
layout: default
title: 'Cloud Functions'
parent: Cloud applications
nav_order: 4
modifiedDate: 2019-01-19
comments: true
---
#Cloud Functions
Cloud functions are serverless, lightweight compute solution to create single-purpose, stand-alone functions



###Calling Cloud Functions from a Static page

Return JSONP as data type in ajax call for supporting CORS.

Add CORS support to every request
https://cloud.google.com/functions/docs/writing/http#writing_http_helloworld-python

JSONP Explained in detail
https://www.sitepoint.com/jsonp-examples/


Add this code to your python return statement.

{% highlight python %}
callback = request.args.get('callback')
return '{0}({1})'.format(callback, {'a':1, 'b':2})
{% endhighlight %}

https://stackoverflow.com/questions/11574850/jsonp-web-service-with-python
