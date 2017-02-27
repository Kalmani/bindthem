"use strict";

module.exports = function(env, methods) {
  if (typeof methods == 'String')
    methods = [methods];

  for (var i = 0; i < methods.length; i++)
    env.methods[i] = env.methods[i].bind(env);

  return env;
};
