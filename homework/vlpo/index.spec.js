const battle = require('./index').createSeaBattle();

test('Returns hit, kill or miss', () => {
    expect([-1, 0, 1]).toContain(battle(0)(0));
    expect([-1, 0, 1]).toContain(battle(1)(2));
    expect([-1, 0, 1]).toContain(battle(3)(6));
    expect([-1, 0, 1]).toContain(battle(9)(0));
    expect([-1, 0, 1]).toContain(battle(8)(2));
    expect([-1, 0, 1]).toContain(battle(2)(7));
});

test('If re-shot', () => {
    expect(() => battle(0)(0)).toThrow();
});

test('Wrong data or coords outside the map', () => {
    expect(() => battle('0')('0')).toThrow();
    expect(() => battle(0)('0')).toThrow();
    expect(() => battle('0')(3)).toThrow();
    expect(() => battle({})(3)).toThrow();
    expect(() => battle(null)(null)).toThrow();
    expect(() => battle(undefined)(null)).toThrow();
    expect(() => battle()()).toThrow();
    expect(() => battle(-13)(12)).toThrow();
    expect(() => battle(6)(11)).toThrow();
    expect(() => battle(-6)(2)).toThrow();
});

