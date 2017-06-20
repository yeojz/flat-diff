function reconcile(mergeKeys, flatBase, flatTarget) {
  return mergeKeys.reduce((collect, path) => {

    const baseHasProperty = flatBase.hasOwnProperty(path);
    const targetHasProperty = flatTarget.hasOwnProperty(path);

    if (baseHasProperty && targetHasProperty) {
      const changeKey = flatBase[path] === flatTarget[path] ? 'same' : 'put';

      collect.push({
        path,
        prev: flatBase[path],
        type: changeKey,
        value: flatTarget[path]
      });

      return collect;
    }

    if (baseHasProperty && !targetHasProperty) {
      collect.push({
        path,
        prev: flatBase[path],
        type: 'del',
        value: void 0
      });

      return collect;
    }

    if (!baseHasProperty && targetHasProperty) {
      collect.push({
        path,
        prev: void 0,
        type: 'post',
        value: flatTarget[path]
      });

      return collect;
    }

    return collect;
  }, []);
}

export default reconcile;
