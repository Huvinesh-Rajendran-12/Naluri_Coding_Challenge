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

1. One of the main know formulas among others to calculate Pi is the Nilakantha's formula. The other known famous formula is the Ramanujan and Chudnovsky algorithm. The reason why the Nilakantha formula was chosen is because it has a lower time complexity, $O(N)$, to the Ramanujan and Chudnovsky algorithm $O(N^2)$. <br>
2. Nilakantha formula : $$\pi = 3 + 4 \cdot \displaystyle\sum_{n \geq 0} \frac{(-1)^n}{(2n+3)^3-(2n+3)}$$
3. Some rules were followed to implement this algorithm and those are as follows: <br>
    i. The total iteration is set to 1000000, because the higher the number of iterations the higher the precision. <br>
    ii. Three variables are created which are _sum_, _n_, and _one_. <br>
    iii. _sum_ will be set to 3, _n_ will be set to 2, _one_ will be set to 1.
    iii. During each iteration, _n_ will be increased by 2 and _one_ will be added by the multiplication of _one_ and -1. <br>
    iv. The _sum_ will be returned at the end of the iteration.

## The usage 
1. This repository consists of two folders which are the naluri_frontend and naluri_backend folders. The naluri_frontend folder consists of the frontend service of the application meanwhile the naluri_backend folder consist of the backend service of the application. 
2. Go to each respective folders and install the required modules by entering the following command:
```
npm install
```
3. The frontend service is started using the following command: 
```
npm start
```
4. The backend service is started using the following command: 
```
node index.js
```

