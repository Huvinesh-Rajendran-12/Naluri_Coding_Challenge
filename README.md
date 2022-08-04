# Naluri Coding Challenge

## The Problem 
The Naluri space project is investigating how we could model the solar system. As a first step
we’d like to calculate the circumference of the sun.

## The Solution
1. Create an HTTP server that is capable of
  a. Calculating Pi to increasing accuracy e.g. 3, 3.1, 3.14, 3.141, 3.1415… etc.
  b. Everytime the server has calculated the next decimal precision, it should store
      the most accurate value
  c. When the server is queried via an HTTP GET request, it will respond with the
      most accurate value that the server has calculated
2. Create a webapp that displays
  a. The servers’ current known value of Pi
  b. The circumference of the sun
