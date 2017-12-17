const assert = require('assert');
const trapRainWater = require('./src/index.js');

const elevationMap1 = [0,1,0,2,1,0,1,3,2,1,2,1];

const elevationMap2 = [9,1,0,2,1,0,1,3,2,1,2,1];

const elevationMap3 = [1,0,0,0,1];

const elevationMap4 = [1,0,2,3,5,6,8,7,6,0,0,0];

it('should return amount of trapped water correctly', () => {
    assert.equal(trapRainWater(elevationMap1), 6);
    assert.equal(trapRainWater(elevationMap2), 14);
    assert.equal(trapRainWater(elevationMap3), 3);
    assert.equal(trapRainWater(elevationMap4), 1);
});
