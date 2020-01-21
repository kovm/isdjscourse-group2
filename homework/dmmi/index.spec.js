const shoot = require('./index.js')();

test('Shoot 10 empty sea cells', () => {
    expect(shoot(1)(2)).toBe(-1);
    expect(shoot(7)(5)).toBe(-1);
    expect(shoot(9)(7)).toBe(-1);
    expect(shoot(10)(10)).toBe(-1);
    expect(shoot(2)(10)).toBe(-1);
    expect(shoot(3)(6)).toBe(-1);
    expect(shoot(6)(3)).toBe(-1);
    expect(shoot(4)(8)).toBe(-1);
    expect(shoot(9)(4)).toBe(-1);
    expect(shoot(5)(5)).toBe(-1);
});
test('Not a whole number error', () => {
    const expectedError = new Error('Wrong type for coordinates. Use whole numbers only');
    expect(() => shoot('9')(1)).toThrowError(expectedError);
    expect(() => shoot(true)(1)).toThrowError(expectedError);
    expect(() => shoot(6.3)(1)).toThrowError(expectedError);
    expect(() => shoot({y:7})(1)).toThrowError(expectedError);
    expect(() => shoot(null)(1)).toThrowError(expectedError);
    expect(() => shoot(NaN)(1)).toThrowError(expectedError);
    expect(() => shoot(undefined)(1)).toThrowError(expectedError);
    expect(() => shoot(Infinity)(1)).toThrowError(expectedError);
    expect(() => shoot([4, 8])(1)).toThrowError(expectedError);
    expect(() => shoot(1)('9')).toThrowError(expectedError);
    expect(() => shoot(1)(true)).toThrowError(expectedError);
    expect(() => shoot(1)(6.3)).toThrowError(expectedError);
    expect(() => shoot(1)({y:7})).toThrowError(expectedError);
    expect(() => shoot(1)(null)).toThrowError(expectedError);
    expect(() => shoot(1)(NaN)).toThrowError(expectedError);
    expect(() => shoot(1)(undefined)).toThrowError(expectedError);
    expect(() => shoot(1)(Infinity)).toThrowError(expectedError);
    expect(() => shoot(1)([4, 8])).toThrowError(expectedError);
    expect(() => shoot(true)('9')).toThrowError(expectedError);
    expect(() => shoot(6.3)({y:7})).toThrowError(expectedError);
    expect(() => shoot(null)(NaN)).toThrowError(expectedError);
    expect(() => shoot(undefined)([4, 8])).toThrowError(expectedError);    
});
test('Coordinate out of bounds error', () => {
    const expectedError = 'coordinate is out of range';
    for (let x = -20; x > -21 && x < 21 ; x++){
        for (let y = -20; y > -21 && y < 21; y++) {
            if (x < 1 || x > 10 || y < 1 || y > 10)
            {
                expect(() => shoot(x)(y)).toThrowError(expectedError);            
            }
        }
    }
});

test('Kill 1 deck ships', () => {
    expect(shoot(4)(9)).toBe(1);
    expect(shoot(6)(9)).toBe(1);
    expect(shoot(7)(6)).toBe(1);
    expect(shoot(1)(10)).toBe(1);
});
test('Kill 2 deck ships', () => {
    expect(shoot(1)(1)).toBe(0);
    expect(shoot(2)(1)).toBe(1);
    
    expect(shoot(9)(9)).toBe(0);
    //Some misses until we've found second deck
    expect(shoot(8)(9)).toBe(-1);
    expect(shoot(8)(8)).toBe(-1);
    expect(shoot(10)(9)).toBe(-1);
    expect(shoot(9)(10)).toBe(1);

    expect(shoot(10)(4)).toBe(0);
    expect(shoot(10)(3)).toBe(1);
});
test('Kill 3 deck ships', () => {
    expect(shoot(2)(5)).toBe(0);
    expect(shoot(2)(4)).toBe(-1);
    expect(shoot(2)(7)).toBe(0);
    expect(shoot(2)(6)).toBe(1);
    
    expect(shoot(4)(2)).toBe(0);
    expect(shoot(3)(2)).toBe(-1);
    expect(shoot(4)(3)).toBe(0);
    expect(shoot(4)(1)).toBe(1);
});
test('Repeated shoot to the same cell error', () => {
    const expectedError = new Error('This cell has been already shooted.');
    expect(() => shoot(4)(2)).toThrowError(expectedError);
    expect(() => shoot(4)(1)).toThrowError(expectedError);
    expect(() => shoot(2)(4)).toThrowError(expectedError);
    expect(() => shoot(10)(9)).toThrowError(expectedError);
    expect(() => shoot(10)(10)).toThrowError(expectedError);
    expect(() => shoot(7)(6)).toThrowError(expectedError);
    expect(() => shoot(4)(9)).toThrowError(expectedError);
    expect(() => shoot(4)(8)).toThrowError(expectedError);
    expect(() => shoot(9)(4)).toThrowError(expectedError);    
});
test('Kill 4 deck ships', () => {
    expect(shoot(8)(1)).toBe(0);
    expect(shoot(8)(2)).toBe(-1);
    expect(shoot(7)(1)).toBe(0);
    expect(shoot(6)(1)).toBe(-1);    
    expect(shoot(10)(1)).toBe(0);
    expect(shoot(9)(1)).toBe(1); 
});
test('Shoot after ships are gone error', () => {
    const expectedError = new Error('There is no ship to shoot.');
    expect(() => shoot(6)(10)).toThrowError(expectedError);
    expect(() => shoot(3)(3)).toThrowError(expectedError);
});
