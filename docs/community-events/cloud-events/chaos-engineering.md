---
layout: default
title: 'Chaos Engineering in HotStar'
parent: 'Cloud Events'
grand_parent: 'Community Events'
nav_order: 1
modifiedDate: 2019-08-10
---
# Chaos Engineering in HotStar

## Concurrency Pattern
    Hot star crossed the highest live streaming @ 2019, during Worldcup cricket

## Ingredients for actual Chaos
    Push Notification
        - As in recommendations need to be pushed, as it cant be cached
    Increased Latency
        - Lot of systems dependant to each other
    Network Failures (CDN)
    Delayed Scale up
    Heavy Traffic
    Bandwidth Constraints

## Cycle of Chaos
    Identify Steady State
    Run Experiment
    Verify and Improve

## What are we looking for?

    Any undiscovered issues and hidden patterns
    Bottle necks / choke points
    Breaking point of each system
    Death wave
    Failures - Network, servers, applications

## Panic Mode
Putting a service to panic mode, bypasses that service and the user can continue using other services.
Ex: if Login service is down, the user may not need to login during the fix

    Turn off Non-crtical services
    P0 services must be always up
    Graceful Degradation
