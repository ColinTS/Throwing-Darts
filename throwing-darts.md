# Throwing Darts
You've just recently been hired to calculate scores for a Dart Board game

## Scoring Specs
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5

If all radiuses are less than 5, award 100 BONUS POINTS!
An empty array should return 0.

Write a function named `scoreThrows` that accepts an Array of Numbers and returns a total score using the above specification.

## Examples:

    scoreThrows( [1, 5, 11] ) => returns 15 
    scoreThrows( [15, 20, 30] ) => returns 0
    scoreThrows( [1, 2, 3, 4] ) => returns 140