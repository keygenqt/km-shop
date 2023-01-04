(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-serialization-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-serialization-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.k8;
  var ContentTypeMatcher = kotlin_io_ktor_ktor_http.$_$.z;
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.f9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.r;
  var contentType = kotlin_io_ktor_ktor_http.$_$.o1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.c;
  var plus = kotlin_kotlin.$_$.j6;
  var toMutableSet = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.d;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.f;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.i;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var toString = kotlin_kotlin.$_$.q9;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.p;
  var Collection = kotlin_kotlin.$_$.e4;
  var isInterface = kotlin_kotlin.$_$.c9;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.m1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.k;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.j;
  var Unit = kotlin_kotlin.$_$.fc;
  var charset = kotlin_io_ktor_ktor_http.$_$.k1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.lc;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var equals = kotlin_kotlin.$_$.m8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.s1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.y4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Exception = kotlin_kotlin.$_$.rb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.e8;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.d1;
  var getKClass = kotlin_kotlin.$_$.e;
  var setOf = kotlin_kotlin.$_$.q6;
  var SuspendFunction2 = kotlin_kotlin.$_$.y7;
  var endsWith$default = kotlin_kotlin.$_$.l;
  var startsWith$default = kotlin_kotlin.$_$.s;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  //endregion
  //region block: pre-declaration
  ContentNegotiation$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda.prototype.constructor = ContentNegotiation$Plugin$install$slambda;
  ContentNegotiation$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  ContentNegotiation$Plugin$install$slambda_1.prototype.constructor = ContentNegotiation$Plugin$install$slambda_1;
  $convertRequestCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $convertRequestCOROUTINE$0.prototype.constructor = $convertRequestCOROUTINE$0;
  ContentConverterException.prototype = Object.create(Exception.prototype);
  ContentConverterException.prototype.constructor = ContentConverterException;
  //endregion
  function get_DefaultCommonIgnoredTypes() {
    init_properties_ContentNegotiation_kt_d83xzi();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.j3g_1 = converter;
    this.k3g_1 = contentTypeToSend;
    this.l3g_1 = contentTypeMatcher;
  }
  ConverterRegistration.prototype.m3g = function () {
    return this.j3g_1;
  };
  ConverterRegistration.prototype.n3g = function () {
    return this.l3g_1;
  };
  ConverterRegistration.$metadata$ = classMeta('ConverterRegistration');
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.o3g_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.i1w = function (contentType) {
    return contentType.h1y(this.o3g_1);
  };
  ContentNegotiation$Config$defaultMatcher$1.$metadata$ = classMeta(undefined, [ContentTypeMatcher]);
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.x3g_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.n2e = function ($this$intercept, it, $cont) {
    var tmp = this.o2e($this$intercept, it, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n2e(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.jh_1 = 1;
            suspendResult = this.x3g_1.e3h(this.y3g_1.q1u_1, this.y3g_1.t1t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a3h_1 = suspendResult;
            var tmp_0 = this;
            var tmp_1;
            if (this.a3h_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = this.a3h_1;
            }

            tmp_0.b3h_1 = tmp_1;
            this.jh_1 = 2;
            suspendResult = this.y3g_1.u1t(this.b3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 3) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.o2e = function ($this$intercept, it, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.x3g_1, completion);
    i.y3g_1 = $this$intercept;
    i.z3g_1 = it;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.n2e($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.n3h_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.h2f = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.i2f($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h2f(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.q3h_1 = this.p3h_1.i3();
            this.r3h_1 = this.p3h_1.j3();
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.o3h_1.q1u_1.u2e());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.s3h_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.o3h_1.q1u_1.d2i().v22();
            tmp_2.t3h_1 = suitableCharset$default(tmp_3, null, 1, null);
            this.jh_1 = 1;
            suspendResult = this.n3h_1.x3h(this.q3h_1, this.r3h_1, this.s3h_1, this.t3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u3h_1 = suspendResult;
            var tmp_4 = this;
            var tmp_5;
            if (this.u3h_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_5 = this.u3h_1;
            }

            tmp_4.v3h_1 = tmp_5;
            this.w3h_1 = new HttpResponseContainer(this.q3h_1, this.v3h_1);
            this.jh_1 = 2;
            suspendResult = this.o3h_1.u1t(this.w3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 3) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.i2f = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.n3h_1, completion);
    i.o3h_1 = $this$intercept;
    i.p3h_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  ContentNegotiation$Plugin$install$slambda_1.$metadata$ = classMeta('ContentNegotiation$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.h2f($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    this.y3h_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.z3h_1 = tmp$ret$0;
  }
  Config.prototype.d2b = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().r1w_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.a3i(contentType, converter, matcher, configuration);
  };
  Config.prototype.a3i = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.z3h_1.b(registration);
  };
  Config.$metadata$ = classMeta('Config', [Configuration]);
  function Plugin() {
    Plugin_instance = this;
    this.b3i_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.s = function () {
    return this.b3i_1;
  };
  Plugin.prototype.c3i = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.z3h_1, config.y3h_1);
  };
  Plugin.prototype.y2g = function (block) {
    return this.c3i(block);
  };
  Plugin.prototype.d3i = function (plugin, scope) {
    var tmp = Phases_getInstance().s2m_1;
    scope.t2d_1.u1u(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().t2g_1;
    scope.u2d_1.u1u(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.z2g = function (plugin, scope) {
    return this.d3i(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation$convertRequest$lambda(it) {
    return toString(it.j3g_1);
  }
  function $convertRequestCOROUTINE$0(_this__u8e3s4, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3i_1 = _this__u8e3s4;
    this.n3i_1 = request;
    this.o3i_1 = body;
  }
  $convertRequestCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 7;
            var tmp_0 = this;
            tmp_0.p3i_1 = this.m3i_1.c3h_1;
            var tmp0_iterator = this.p3i_1.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              accept(this.n3i_1, element.k3g_1);
            }

            var tmp_1;
            var tmp_2 = this.o3i_1;
            if (tmp_2 instanceof OutgoingContent) {
              tmp_1 = true;
            } else {
              l$ret$1: do {
                var tmp1_any = this.m3i_1.d3h_1;
                var tmp_3;
                if (isInterface(tmp1_any, Collection)) {
                  tmp_3 = tmp1_any.m();
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  this.q3i_1 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp1_any.d();
                while (tmp0_iterator_0.e()) {
                  var element_0 = tmp0_iterator_0.f();
                  if (element_0.od(this.o3i_1)) {
                    this.q3i_1 = true;
                    break l$ret$1;
                  }
                }
                this.q3i_1 = false;
              }
               while (false);
              tmp_1 = this.q3i_1;
            }

            if (tmp_1)
              return null;
            var tmp_4 = this;
            var tmp0_elvis_lhs = contentType_0(this.n3i_1);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.r3i_1 = tmp_5;
            var tmp_6 = this.o3i_1;
            if (tmp_6 instanceof Unit) {
              this.n3i_1.v2f_1.f1s(HttpHeaders_getInstance().f1z_1);
              return EmptyContent_getInstance();
            }

            var tmp_7 = this;
            var tmp2_filter = this.m3i_1.c3h_1;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = tmp2_filter.d();
            while (tmp0_iterator_1.e()) {
              var element_1 = tmp0_iterator_1.f();
              if (element_1.l3g_1.i1w(this.r3i_1)) {
                tmp0_filterTo.b(element_1);
              }
            }

            var tmp3_takeIf = tmp0_filterTo;
            var tmp_8;
            if (!tmp3_takeIf.m()) {
              tmp_8 = tmp3_takeIf;
            } else {
              tmp_8 = null;
            }

            var tmp1_elvis_lhs = tmp_8;
            var tmp_9;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_9 = tmp1_elvis_lhs;
            }

            tmp_7.s3i_1 = tmp_9;
            if (this.n3i_1.i34() == null)
              return null;
            this.n3i_1.v2f_1.f1s(HttpHeaders_getInstance().f1z_1);
            this.jh_1 = 1;
            continue $sm;
          case 1:
            this.u3i_1 = this.s3i_1.d();
            this.jh_1 = 2;
            continue $sm;
          case 2:
            if (!this.u3i_1.e()) {
              this.jh_1 = 5;
              continue $sm;
            }

            this.v3i_1 = this.u3i_1.f();
            this.jh_1 = 3;
            var tmp0_elvis_lhs_0 = charset(this.r3i_1);
            var tmp_10 = tmp0_elvis_lhs_0 == null ? Charsets_getInstance().m1j_1 : tmp0_elvis_lhs_0;
            var tmp_11 = ensureNotNull(this.n3i_1.i34());
            var tmp_12;
            if (!equals(this.o3i_1, NullBody_getInstance())) {
              tmp_12 = this.o3i_1;
            } else {
              tmp_12 = null;
            }

            suspendResult = this.v3i_1.j3g_1.g2b(this.r3i_1, tmp_10, tmp_11, tmp_12, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              this.t3i_1 = result;
              this.jh_1 = 6;
              continue $sm;
            } else {
              this.jh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.jh_1 = 2;
            continue $sm;
          case 5:
            this.t3i_1 = null;
            if (false) {
              this.jh_1 = 1;
              continue $sm;
            }

            this.jh_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.t3i_1;
            var tmp_13;
            if (tmp2_elvis_lhs == null) {
              var tmp_14 = "Can't convert " + toString(this.o3i_1) + ' with contentType ' + this.r3i_1 + ' using converters ';
              throw new ContentConverterException(tmp_14 + joinToString$default(this.s3i_1, null, null, null, 0, null, ContentNegotiation$convertRequest$lambda, 31, null));
            } else {
              tmp_13 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_13;
            return serializedContent;
          case 7:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 7) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $convertRequestCOROUTINE$0.$metadata$ = classMeta('$convertRequestCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ContentNegotiation(registrations, ignoredTypes) {
    Plugin_getInstance();
    this.c3h_1 = registrations;
    this.d3h_1 = ignoredTypes;
  }
  ContentNegotiation.prototype.e3h = function (request, body, $cont) {
    var tmp = new $convertRequestCOROUTINE$0(this, request, body, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ContentNegotiation.prototype.x3h = function (info, body, responseContentType, charset, $cont) {
    if (!isInterface(body, ByteReadChannel))
      return null;
    if (this.d3h_1.l1(info.h1v_1))
      return null;
    var tmp$ret$8;
    // Inline function 'kotlin.takeIf' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.c3h_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$0 = element.l3g_1.i1w(responseContentType);
      if (tmp$ret$0) {
        tmp0_filterTo.b(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_map = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.d();
    while (tmp0_iterator_0.e()) {
      var item = tmp0_iterator_0.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
      tmp$ret$3 = item.j3g_1;
      tmp0_mapTo.b(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp2_takeIf = tmp$ret$5;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$7;
    // Inline function 'io.ktor.client.plugins.contentnegotiation.ContentNegotiation.convertResponse.<anonymous>' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$6 = !tmp2_takeIf.m();
    tmp$ret$7 = tmp$ret$6;
    if (tmp$ret$7) {
      tmp = tmp2_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$8 = tmp;
    var tmp0_elvis_lhs = tmp$ret$8;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var suitableConverters = tmp_0;
    return deserialize(suitableConverters, body, info, charset, $cont);
  };
  ContentNegotiation.$metadata$ = classMeta('ContentNegotiation');
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  ContentConverterException.$metadata$ = classMeta('ContentConverterException', undefined, undefined, undefined, undefined, Exception.prototype);
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function init_properties_ContentNegotiation_kt_d83xzi() {
    if (properties_initialized_ContentNegotiation_kt_1ayduy) {
    } else {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().kf(), PrimitiveClasses_getInstance().gf(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    }
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.i1w = function (contentType) {
    if (contentType.h1y(Application_getInstance().r1w_1)) {
      return true;
    }
    var value = contentType.g1y().toString();
    var tmp;
    if (startsWith$default(value, 'application/', false, 2, null)) {
      tmp = endsWith$default(value, '+json', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  JsonContentTypeMatcher.$metadata$ = objectMeta('JsonContentTypeMatcher', [ContentTypeMatcher]);
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      DefaultIgnoredTypes = tmp$ret$0;
    }
  }
  //region block: post-declaration
  Config.prototype.e2b = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
