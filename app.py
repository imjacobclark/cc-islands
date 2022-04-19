import functools
import operator
import numpy as np
from sklearn.linear_model import LinearRegression

test_data = [[0,0,0,0,0],[0,1,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]]

land_items = map(lambda x: 0 if x == 0 else 4+(2*(x-1)), map(lambda x: functools.reduce(lambda a,b: a+b, x), test_data))

x = map(lambda x: [{'point':x, 'index':i} for i, x in enumerate(x)], test_data)

def dd(a, b):
    if (b['point'] == 0):
        return a 
    else:
        return a + b['index']

indicies = map(lambda x: functools.reduce(dd, x, 0), x)

x = np.array(list(indicies)).reshape((-1, 1))
y = np.array(list(land_items))
model = LinearRegression().fit(x, y)

print(model.score(x, y))
print(list(map(lambda x: 0 if x+1 < 4 else round(x) + 1, model.predict(x))))
