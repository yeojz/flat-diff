import reconcile from './reconcile';

test('should return array even if path not found in both', () => {
  const result = reconcile(['a'], {}, {});
  expect(result).toMatchObject([])
});
