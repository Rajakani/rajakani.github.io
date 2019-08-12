---
layout: default
title: 'The art of writing perfect code'
parent: Programming
nav_order: 1
modifiedDate: 09-Sep-2017
---
## The Art of writing beautiful code

&quot;*A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system* &quot; - Gall's Law

The above quote is from the book ![Systemantics](https://www.amazon.in/gp/product/B00AK1BIDM/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B00AK1BIDM&linkCode=as2&tag=adyarcafe-21&linkId=c59100aa2917a653ce6d12b31f9de5ff) published in 1975 which is still relevant for any Systems Design.

### How to start writing beautiful code

Before start writing any piece of code, discuss more about the class design. Discuss as much as use cases possible and how the code could be reused. We dont need to write all the scenarios upfront sometimes this may come under YAGNI, but still think about the modularity of the code.

Once you discuss all the terminologies you use in the business and decided upon the behaviours and properties your Class may have, then write the abstract class first, Interfaces are a good choice though.
Never write any implemenation code first, write the behaviours and just add a method name to be called inside the behaviours, if possible with the input and output parameters filled. Think of how easily this can be overriden. Once you have the methods defined, its easier to read the implemenations. As a rule of thumb never write more than Five lines of code inside any methods. This helps in making the code more modular and splitting them to classes.
