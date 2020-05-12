---
layout: default
title: Lets understand the tricky part
parent: Application Design
nav_order: 7
modifiedDate: 2019-06-16
---

## Why C# doesn't Support multiple inheritance.
The language designers preferred Composition over Inheritance incase of a Diamond problems arise. 
Also if the constructor want to call the base class method, its seems quite confusing if there are multiple bases. 

Its not that they couldn't solve this problem, they wanted the language to be simple. So they decided not to implement Multiple Inheritance. 

<!-- more -->
[Interview with Chris Brumme - CLR Team](https://devblogs.microsoft.com/csharpfaq/why-doesnt-c-support-multiple-inheritance/)
### Alternatives for Multiple Inheritance
#### Use Mixins
Mixins are small utility classes that define useful functionality that usually becomes part of another class. We need to use interfaces to add functionalities. That works, but it’s not as powerful since you don’t inherit implementation. By creating extension methods using the interface, you can inject many more methods into the public definition of the interface, without forcing every developer to re-create those methods whenever he or she implements that interface.

[Alternatives to multiple inheritance](https://stackoverflow.com/questions/1289712/what-are-some-good-alternatives-to-multiple-inheritance-in-net)


## C# Delegates Explained
A delegate is a reference to a method. Whereas objects can easily be sent as parameters into methods, constructor or whatever, methods are a bit more tricky. But every once in a while you might feel the need to send a method as a parameter to another method, and that's when you'll need delegates.

## Difference between procedural and object oriented language


