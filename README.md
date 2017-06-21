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
    { path: 'a.0', type: 'same', value: 1 },
    { path: 'a.1', type: 'same', value: 2 },
    { path: 'a.2.b', type: 'put', prev: 1, value: 2 },
    { path: 'a.3', type: 'same', value: 4 },
    { path: 'a.4', type: 'put', prev: 5, value: 6 },
    { path: 'a.5', type: 'del', value: 6 },
    { path: 'b', type: 'put', prev: 'test', value: 'test 2' },
    { path: 'c', type: 'del', value: 'prev' },
    { path: 'd', type: 'post', value: 'new' }
  ];

  // Note: path keys will be sorted.
```

## Caveats

Due to how keys are generated, if you have an array and object with number keys in the same path,
there will be a conflict.

i.e.

```js
// object
{
  a: {
    '0': 'b',
    '1': 'c'
  }
}

// array
{
  a: ['b', 'c']
}


// both formats above will result in similar paths:
[
  {path: 'a.0', value: 'b'},
  {path: 'a.1', value: 'c'}
]
```

## License

`flat-diff` is [MIT licensed](./LICENSE)
