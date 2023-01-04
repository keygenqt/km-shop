(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-serialization-kotlinx-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-serialization-kotlinx-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'ktor-ktor-serialization-kotlinx-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-json-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-json-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-serialization-kotlinx-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_io_ktor_ktor_serialization_kotlinx, kotlin_io_ktor_ktor_http, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var serialization = kotlin_io_ktor_ktor_serialization_kotlinx.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    init_properties_JsonSupport_kt_xg0arx();
    return DefaultJson;
  }
  var DefaultJson;
  function json(_this__u8e3s4, json, contentType) {
    init_properties_JsonSupport_kt_xg0arx();
    serialization(_this__u8e3s4, contentType, json);
  }
  function json$default(_this__u8e3s4, json_0, contentType, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      json_0 = get_DefaultJson();
    if (!(($mask0 & 2) === 0))
      contentType = Application_getInstance().r1w_1;
    return json(_this__u8e3s4, json_0, contentType);
  }
  function DefaultJson$lambda($this$Json) {
    init_properties_JsonSupport_kt_xg0arx();
    $this$Json.r49_1 = true;
    $this$Json.u49_1 = true;
    $this$Json.b4a_1 = true;
    $this$Json.v49_1 = true;
    $this$Json.w49_1 = false;
    $this$Json.z49_1 = false;
    return Unit_getInstance();
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function init_properties_JsonSupport_kt_xg0arx() {
    if (properties_initialized_JsonSupport_kt_9cgd93) {
    } else {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json$default(null, DefaultJson$lambda, 1, null);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json-js-ir.js.map
