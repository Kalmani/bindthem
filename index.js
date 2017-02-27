"use strict";

module.exports = function(env, methods) {
  if (typeof methods == 'string')
    methods = [methods];

  for (var i = 0; i < methods.length; i++) {
    if (!env[methods[i]]) continue;
    env[methods[i]] = env[methods[i]].bind(env);
  }

  return env;
};
