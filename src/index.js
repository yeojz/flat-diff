import flatten from 'flat';

function reconcile(mergeKeys, flatBase, flatTarget) {
  return mergeKeys.reduce((collect, path) => {

    if (flatBase.hasOwnProperty(path) && flatTarget.hasOwnProperty(path)) {
      const changeKey = flatBase[path] === flatTarget[path] ? 'same' : 'put';
      collect.push({
        path,
        prev: flatBase[path],
        type: changeKey,
        value: flatTarget[path]
      });
      return collect;
    }

    if (flatBase.hasOwnProperty(path) && !flatTarget.hasOwnProperty(path)) {
      collect.push({
        path,
        prev: flatBase[path],
        type: 'del',
        value: void 0
      });
      return collect;
    }

    if (!flatBase.hasOwnProperty(path) && flatTarget.hasOwnProperty(path)) {
      collect.push({
        path,
        prev: void 0,
        type: 'post',
        value: flatTarget[path]
      });
      return collect;
    }
  }, []);
}

function diff(base, target) {
  const flatBase = flatten(base);
  const flatTarget = flatten(target);
  const flatMerge = Object.assign({}, flatBase, flatTarget);
  const mergeKeys = Object.keys(flatMerge).sort();

  return reconcile(mergeKeys, flatBase, flatTarget);
}

export default diff;
