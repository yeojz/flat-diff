# flat-diff

> A diff algorithm based on the unique key path of each value in an Object / JSON

## Installation

```
$ npm install flat-diff --save
```

## Example

Given:

```js
  import diff from 'flat-diff';

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

  const metadata = diff(base, target);
```

will give a result of:

```js
  const metadata = [
    { path: 'a.0', type: 'same', prev: 1, value: 1 },
    { path: 'a.1', type: 'same', prev: 2, value: 2 },
    { path: 'a.2.b', type: 'put', prev: 1, value: 2 },
    { path: 'a.3', type: 'same', prev: 4, value: 4 },
    { path: 'a.4', type: 'put', prev: 5, value: 6 },
    { path: 'a.5', type: 'del', prev: 6, value: void 0 },
    { path: 'b', type: 'put', prev: 'test', value: 'test 2' },
    { path: 'c', type: 'del', prev: 'prev', value: void 0 },
    { path: 'd', type: 'post', prev: void 0, value: 'new' }
  ];
```

## License

`flat-diff` is [MIT licensed](./LICENSE)
