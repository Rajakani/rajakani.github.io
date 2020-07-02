---
layout: default
title: 'Javascript is Crazy'
parent: 'Client Side'
grand_parent: Application Design
nav_order: 8
modifiedDate: 2019-12-17
comments: true
is_display_Horizontal_Ads: true
---

## foobar VS fooNaN
Just do a simple string concatenation
```javascript
"foo" +"bar" === "foobar"   //true
```
Now try  
```javascript  
"foo" + + "bar" === "fooNaN" // true
```
This will be evaluted as “foo” + (+ “bar”), which converts “bar” to not a number.

## Tricky Floating points 
```javascript
0.5 + 0.2 === 0.7 //true
```
but 
```javascript
0.1 + 0.2 === 0.3 //false, wonder why?
```

Simplest possible explanation is that 0.1+0.2 = 0.30000000000000004
Say 1/3 = 0.33, we need to round this off at some point. but this never adds back to 1.

[Floating Points](https://floating-point-gui.de/basic/)

## Not a Number is number
```javascript
typeof NaN === "number" //true
```
And
```javascript
NaN !== NaN // true
```

Well, NaN is still a numeric type, despite the fact it actually stands for Not-A-Number :-)

There are three kinds of operation which return NaN:
1. Operations with a NaN as at least one operand
2. Indeterminate forms
The divisions 0/0
3. Real operations with complex results:
The square root of a negative number

So a specific NaN is not considered equal to another NaN because they may be different values.

## Is it Null or Not Null?

```javascript
typeof null             // "object" (not "null" for legacy reasons)
null instanceof Object  // false
typeof undefined        // "undefined"
null === undefined      // false
null  == undefined      // true
null === null           // true
null == null            // true
null == false           // false
!null                   // true
isNaN(1 + null)         // false
isNaN(1 + undefined)    // true
```

## How about Arrays
```javascript
[] == ![] // true
```
Arrays evaluate as true in a boolean condition so this does make some sense even if it doesn’t read very well!

