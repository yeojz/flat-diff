
function same(collect, path, args) {
  if (
    args.baseHasProperty
    && args.targetHasProperty
    && args.flatBase[path] === args.flatTarget[path]
  ) {
    collect.push({
      path,
      type: 'same',
      value: args.flatTarget[path]
    });

    return true;
  }

  return false;
}

function put(collect, path, args) {
  if (args.baseHasProperty && args.targetHasProperty) {
    collect.push({
      path,
      prev: args.flatBase[path],
      type: 'put',
      value: args.flatTarget[path]
    });

    return true;
  }

  return false;
}

function del(collect, path, args) {
  if (args.baseHasProperty && !args.targetHasProperty) {
    collect.push({
      path,
      type: 'del',
      value: args.flatBase[path]
    });

    return true;
  }

  return false;
}

function post(collect, path, args) {

  if (!args.baseHasProperty && args.targetHasProperty) {
    collect.push({
      path,
      type: 'post',
      value: args.flatTarget[path]
    });

    return true;
  }

  return false;
}

export default {
  same,
  put,
  del,
  post
};
