import {flatten} from 'flat';
import reconcile from './reconcile';

function diff(base, target, opts) {
  const flatBase = flatten(base, opts || {});
  const flatTarget = flatten(target, opts || {});

  const mergeKeys = Object.keys(Object.assign({}, flatBase, flatTarget)).sort();

  return reconcile(mergeKeys, flatBase, flatTarget);
}

export default diff;
