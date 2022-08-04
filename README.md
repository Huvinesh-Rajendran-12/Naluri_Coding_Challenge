# Naluri Coding Challenge

## The Problem 
The Naluri space project is investigating how we could model the solar system. As a first step
we’d like to calculate the circumference of the sun.

## The Solution
1. Create an HTTP server that is capable of <br>
  a. Calculating Pi to increasing accuracy e.g. 3, 3.1, 3.14, 3.141, 3.1415… etc. <br>
  b. Everytime the server has calculated the next decimal precision, it should store
      the most accurate value <br>
  c. When the server is queried via an HTTP GET request, it will respond with the
      most accurate value that the server has calculated <br>

2. Create a webapp that displays <br>
  a. The servers’ current known value of Pi <br>
  b. The circumference of the sun <br>
  
## The Approach 

1. One of the main know formulas among others to calculate Pi is the Nilakantha's formula. The other known famous formula is the Ramanujan formula. The reason why the Nilakantha formula was chosen is because it has a lower time complexity( O( N logN loglogN) to the Ramanujan formula ( O( N^2 logN loglogN). <br>
2. Nilakantha formula : $$ \pi $$
4. 
