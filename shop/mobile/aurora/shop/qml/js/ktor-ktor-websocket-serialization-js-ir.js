(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['ktor-ktor-websocket-serialization-js-ir'] = factory(typeof this['ktor-ktor-websocket-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-websocket-serialization-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websocket-serialization-js-ir.js.map
