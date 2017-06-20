import flatten from 'flat';
import reconcile from './reconcile';

function diff(base, target) {
  const flatBase = flatten(base);
  const flatTarget = flatten(target);
  const mergeKeys = Object.keys(Object.assign({}, flatBase, flatTarget)).sort();

  return reconcile(mergeKeys, flatBase, flatTarget);
}

export default diff;
