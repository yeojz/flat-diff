import checks from './checks';

function reconcile(mergeKeys, flatBase, flatTarget) {
  return mergeKeys.reduce((collect, path) => {

    const args = {
      flatBase,
      flatTarget,
      baseHasProperty: flatBase.hasOwnProperty(path),
      targetHasProperty: flatTarget.hasOwnProperty(path)
    };

    [
      checks.same,
      checks.put,
      checks.del,
      checks.post
    ].some((fn) => fn(collect, path, args));

    return collect;
  }, []);
}

export default reconcile;
