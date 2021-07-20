import canIterate from '../js/app';

test('obj is enumerable', () => {
    const testObj = 'hello';
    const expected = 'obj is enumerable';
    const result = canIterate(testObj);

    expect(result).toBe(expected);
});

test('obj is not enumerable', () => {
    const testObj = null;
    const expected = 'obj is not enumerable';
    const result = canIterate(testObj);

    expect(result).toBe(expected);
});
