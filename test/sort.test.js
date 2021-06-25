import sortPlayer from '../src/js/app';

test('1', () => {
  const result = sortPlayer([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('2', () => {
  const result = sortPlayer([
    { name: 'мечник', health: 0 },
    { name: 'маг', health: -40 },
    { name: 'лучник', health: 9990 },
  ]);

  expect(result).toEqual([
    { name: 'лучник', health: 9990 },
    { name: 'мечник', health: 0 },
    { name: 'маг', health: -40 },
  ]);
});

test('3', () => {
  const result = sortPlayer([
    { name: 'мечник', health: -20 },
    { name: 'маг', health: -100213 },
    { name: 'лучник', health: -836 },
  ]);

  expect(result).toEqual([
    { name: 'мечник', health: -20 },
    { name: 'лучник', health: -836 },
    { name: 'маг', health: -100213 },
  ]);
});

test('4', () => {
  const result = sortPlayer([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ]);

  expect(result).toEqual([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ]);
});
