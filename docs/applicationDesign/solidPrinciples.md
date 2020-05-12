---
layout: default
title: 'SOLID Principles'
parent: Application Design
nav_order: 2
modifiedDate: 2019-11-28
comments: true
---
## SOLID Principles

* S&nbsp;- Single-responsibility principle
* O&nbsp;- Open-closed principle
* L&nbsp;- Liskov substitution principle
* I&nbsp;- Interface segregation principle
* D&nbsp;- Dependency Inversion Principle

In object-oriented design, the SOLID principles are a set of five design principles which helps to make code cleaner, more flexible, and easier to change.

### Single-responsibility principle

  Classes, software components and microservices that have only one responsibility are much easier to explain, understand and implement than the ones that provide a solution for everything

#### A simple question to validate your design

  If you build your software over a longer period and if you need to adapt it to changing requirements, it might seem like the easiest and fastest approach is adding a method or functionality to your existing code instead of writing a new class or component. But that often results in classes with more than responsibility and makes it more and more difficult to maintain.

  You can avoid these problems by asking a simple question before you make any changes: What is the responsibility of your class/component/microservice?

  If your answer includes the word “and”, you’re most likely breaking the single responsibility principle. Then it’s better take a step back and rethink your current approach. There is most likely a better way to implement it.
