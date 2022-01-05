import MathUtils from './'

test('it should round', () => {
  const spy = jest.spyOn(MathUtils, 'round')
  const res1 = MathUtils.addRoundedIntegers(1.1, 2)

  expect(spy).toHaveBeenCalledTimes(1)
  expect(res1).toEqual(3)

  const res2 = MathUtils.addRoundedIntegers(2.1, 2.8123)
  expect(res2).toEqual(5)
  expect(spy).toHaveBeenCalledTimes(3)

  spy.mockRestore();
});

test('it should add numbers from the database', () => {
  const spy = jest.spyOn(MathUtils, 'pullSomeNumbersFromDatabase').mockImplementation(() => [1,2,3,4])
  const res = MathUtils.addNumbersPulledFromDatabase()

  expect(res).toEqual(10)

  spy.mockRestore();
});
