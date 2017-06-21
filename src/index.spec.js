import diff from './index';

test('example in readme should generate expected result', () => {
  const base = {
    a: [1, 2, { b: 1 }, 4, 5, 6],
    b: 'test',
    c: 'prev'
  };

  const target = {
    a: [1, 2, { b: 2 }, 4, 6],
    b: 'test 2',
    d: 'new'
  };

  const delta = diff(base, target);

  expect(delta).toMatchObject([
    { path: 'a.0', type: 'same', value: 1 },
    { path: 'a.1', type: 'same', value: 2 },
    { path: 'a.2.b', type: 'put', prev: 1, value: 2 },
    { path: 'a.3', type: 'same', value: 4 },
    { path: 'a.4', type: 'put', prev: 5, value: 6 },
    { path: 'a.5', type: 'del', value: 6 },
    { path: 'b', type: 'put', prev: 'test', value: 'test 2' },
    { path: 'c', type: 'del', value: 'prev' },
    { path: 'd', type: 'post', value: 'new' }
  ]);
});
