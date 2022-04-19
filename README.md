# cc-islands

Didnt have time to tackle multiple Islands! app.js is the main file.

Ideally I'd have implemented this as Linear Regression, which you can see an initial attempt of in app.py

## Running

```javascript
[jacobclark:~/Desktop/cc-islands]$ node                                                                                                                                                                          (main✱) 
Welcome to Node.js v14.18.1.
Type ".help" for more information.
> require('./app.js')([[0,0,0,0,0],[0,1,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]])
```

This is a map of a desert island, where each '1' represents a cell of dry land, and each '0' represents a cell of ocean. The task is to determine the total perimeter of the island (i.e. total length of cell edges touching water), where each cell has edges of length 1. For example, an isolated land cell without any neighbouring land cells would have a total perimeter of 4 - although the provided map doesn't actually contain any cases of this.
Rewards:

5  Points are awarded for determining the correct perimeter of the example island
3  Further points are awarded for an algorithm capable of returning the perimeters of multiple islands in this problem
2  Further points are awarded for an algorithm in under 1000 bytes of code
