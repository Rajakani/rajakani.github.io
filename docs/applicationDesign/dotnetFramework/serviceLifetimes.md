---
layout: default
title: Service Lifetime
nav_order: 2
modifiedDate: 2020-06-04
parent: 'Dot Net Framework'
---

ASP.NET Core services can be configured with the following lifetimes:

### Transient
Transient lifetime services are created each time they're requested from the service container. This lifetime works best for lightweight, stateless services.

### Scoped
Scoped lifetime services (AddScoped) are created once per client request (connection).

### Singleton
Singleton lifetime services (AddSingleton) are created the first time they're requested (or when Startup.ConfigureServices is run and an instance is specified with the service registration). Every subsequent request uses the same instance. If the app requires singleton behavior, allowing the service container to manage the service's lifetime is recommended. Don't implement the singleton design pattern and provide user code to manage the object's lifetime in the class.






