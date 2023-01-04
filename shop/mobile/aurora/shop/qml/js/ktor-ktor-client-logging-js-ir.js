(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-logging-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-logging-js-ir'.");
    }
    root['ktor-ktor-client-logging-js-ir'] = factory(typeof this['ktor-ktor-client-logging-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-logging-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var isCharSequence = kotlin_kotlin.$_$.y8;
  var trim = kotlin_kotlin.$_$.ib;
  var toString = kotlin_kotlin.$_$.q9;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var classMeta = kotlin_kotlin.$_$.k8;
  var charSequenceLength = kotlin_kotlin.$_$.i8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Enum = kotlin_kotlin.$_$.pb;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.s;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var interfaceMeta = kotlin_kotlin.$_$.t8;
  var println = kotlin_kotlin.$_$.a8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.g;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var Url = kotlin_io_ktor_ktor_http.$_$.g1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.k;
  var charset = kotlin_io_ktor_ktor_http.$_$.k1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.t;
  var ByteChannel$default = kotlin_io_ktor_ktor_io.$_$.o;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.h;
  var Phases_getInstance_1 = kotlin_io_ktor_ktor_client_core.$_$.i;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var ResponseObserver_init_$Create$ = kotlin_io_ktor_ktor_client_core.$_$.a;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.k;
  var Collection = kotlin_kotlin.$_$.e4;
  var isInterface = kotlin_kotlin.$_$.c9;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.f9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Long = kotlin_kotlin.$_$.ub;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.l;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.s;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.r;
  var contentType = kotlin_io_ktor_ktor_http.$_$.o1;
  var SuspendFunction2 = kotlin_kotlin.$_$.y7;
  var SuspendFunction1 = kotlin_kotlin.$_$.x7;
  var toList = kotlin_kotlin.$_$.w6;
  var sortedWith = kotlin_kotlin.$_$.s6;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var Comparator = kotlin_kotlin.$_$.mb;
  var compareValues = kotlin_kotlin.$_$.e7;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.p;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.t1;
  var close = kotlin_io_ktor_ktor_io.$_$.v1;
  var copyToBoth = kotlin_io_ktor_ktor_utils.$_$.u;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.t;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.g;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  //endregion
  //region block: pre-declaration
  $logResponseExceptionCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $logResponseExceptionCOROUTINE$0.prototype.constructor = $logResponseExceptionCOROUTINE$0;
  $logResponseBodyCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $logResponseBodyCOROUTINE$1.prototype.constructor = $logResponseBodyCOROUTINE$1;
  $closeResponseLogCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $closeResponseLogCOROUTINE$2.prototype.constructor = $closeResponseLogCOROUTINE$2;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  LoggedContent.prototype = Object.create(ReadChannelContent.prototype);
  LoggedContent.prototype.constructor = LoggedContent;
  Logging$setupRequestLogging$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Logging$setupRequestLogging$slambda.prototype.constructor = Logging$setupRequestLogging$slambda;
  Logging$logRequestBody$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Logging$logRequestBody$slambda.prototype.constructor = Logging$logRequestBody$slambda;
  Logging$setupResponseLogging$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Logging$setupResponseLogging$slambda.prototype.constructor = Logging$setupResponseLogging$slambda;
  Logging$setupResponseLogging$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Logging$setupResponseLogging$slambda_1.prototype.constructor = Logging$setupResponseLogging$slambda_1;
  Logging$setupResponseLogging$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Logging$setupResponseLogging$slambda_3.prototype.constructor = Logging$setupResponseLogging$slambda_3;
  $logResponseBodyCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $logResponseBodyCOROUTINE$4.prototype.constructor = $logResponseBodyCOROUTINE$4;
  toReadChannel$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toReadChannel$slambda.prototype.constructor = toReadChannel$slambda;
  $observeCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $observeCOROUTINE$5.prototype.constructor = $observeCOROUTINE$5;
  //endregion
  function $logResponseExceptionCOROUTINE$0(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e3j_1 = _this__u8e3s4;
    this.f3j_1 = message;
  }
  $logResponseExceptionCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.e3j_1.j3j_1.er(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this.f3j_1;
            this.e3j_1.g3j_1.n3j(toString(trim(isCharSequence(tmp_0) ? tmp_0 : THROW_CCE())));
            return Unit_getInstance();
          case 2:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 2) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $logResponseExceptionCOROUTINE$0.$metadata$ = classMeta('$logResponseExceptionCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $logResponseBodyCOROUTINE$1(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3j_1 = _this__u8e3s4;
    this.x3j_1 = message;
  }
  $logResponseBodyCOROUTINE$1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.w3j_1.k3j_1.er(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w3j_1.i3j_1.j6(this.x3j_1);
            ;
            return Unit_getInstance();
          case 2:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 2) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $logResponseBodyCOROUTINE$1.$metadata$ = classMeta('$logResponseBodyCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $closeResponseLogCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3k_1 = _this__u8e3s4;
  }
  $closeResponseLogCOROUTINE$2.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            if (!this.g3k_1.m3j_1.atomicfu$compareAndSet(false, true))
              return Unit_getInstance();
            this.jh_1 = 1;
            suspendResult = this.g3k_1.j3j_1.er(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var message = toString(trim(this.g3k_1.i3j_1));
            if (charSequenceLength(message) > 0) {
              this.g3k_1.g3j_1.n3j(message);
            }

            return Unit_getInstance();
          case 2:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 2) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $closeResponseLogCOROUTINE$2.$metadata$ = classMeta('$closeResponseLogCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientCallLogger(logger) {
    this.g3j_1 = logger;
    this.h3j_1 = StringBuilder_init_$Create$();
    this.i3j_1 = StringBuilder_init_$Create$();
    var tmp = this;
    tmp.j3j_1 = Job$default(null, 1, null);
    var tmp_0 = this;
    tmp_0.k3j_1 = Job$default(null, 1, null);
    this.l3j_1 = atomic$boolean$1(false);
    this.m3j_1 = atomic$boolean$1(false);
  }
  HttpClientCallLogger.prototype.h3k = function (message) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = this.h3j_1;
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    var tmp1_appendLine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_0 = tmp0_appendLine.j6(tmp1_appendLine);
    tmp$ret$1 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
    tmp$ret$2 = tmp$ret$1;
  };
  HttpClientCallLogger.prototype.i3k = function (message) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = this.i3j_1;
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    var tmp1_appendLine = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_0 = tmp0_appendLine.j6(tmp1_appendLine);
    tmp$ret$1 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
    tmp$ret$2 = tmp$ret$1;
    this.k3j_1.dr();
  };
  HttpClientCallLogger.prototype.j3k = function (message, $cont) {
    var tmp = new $logResponseExceptionCOROUTINE$0(this, message, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  HttpClientCallLogger.prototype.k3k = function (message, $cont) {
    var tmp = new $logResponseBodyCOROUTINE$1(this, message, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  HttpClientCallLogger.prototype.l3k = function () {
    if (!this.l3j_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    try {
      var message = toString(trim(this.h3j_1));
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$0 = charSequenceLength(message) > 0;
      if (tmp$ret$0) {
        this.g3j_1.n3j(message);
      }
    }finally {
      this.j3j_1.dr();
    }
  };
  HttpClientCallLogger.prototype.m3k = function ($cont) {
    var tmp = new $closeResponseLogCOROUTINE$2(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  HttpClientCallLogger.$metadata$ = classMeta('HttpClientCallLogger');
  var LogLevel_ALL_instance;
  var LogLevel_HEADERS_instance;
  var LogLevel_BODY_instance;
  var LogLevel_INFO_instance;
  var LogLevel_NONE_instance;
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel_HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel_BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel_INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel_NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this, name, ordinal);
    this.p3k_1 = info;
    this.q3k_1 = headers;
    this.r3k_1 = body;
  }
  LogLevel.prototype.s3k = function () {
    return this.p3k_1;
  };
  LogLevel.prototype.v22 = function () {
    return this.q3k_1;
  };
  LogLevel.$metadata$ = classMeta('LogLevel', undefined, undefined, undefined, undefined, Enum.prototype);
  function LogLevel_ALL_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ALL_instance;
  }
  function LogLevel_HEADERS_getInstance() {
    LogLevel_initEntries();
    return LogLevel_HEADERS_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function LoggedContent(originalContent, channel) {
    ReadChannelContent.call(this);
    this.u3k_1 = originalContent;
    this.v3k_1 = channel;
    this.w3k_1 = this.u3k_1.j28();
    this.x3k_1 = this.u3k_1.l28();
    this.y3k_1 = this.u3k_1.k28();
    this.z3k_1 = this.u3k_1.v22();
  }
  LoggedContent.prototype.j28 = function () {
    return this.w3k_1;
  };
  LoggedContent.prototype.l28 = function () {
    return this.x3k_1;
  };
  LoggedContent.prototype.k28 = function () {
    return this.y3k_1;
  };
  LoggedContent.prototype.v22 = function () {
    return this.z3k_1;
  };
  LoggedContent.prototype.o29 = function () {
    return this.v3k_1;
  };
  LoggedContent.$metadata$ = classMeta('LoggedContent', undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Logger() {
  }
  Logger.$metadata$ = interfaceMeta('Logger');
  function get_SIMPLE(_this__u8e3s4) {
    return new SimpleLogger();
  }
  function SimpleLogger() {
  }
  SimpleLogger.prototype.n3j = function (message) {
    println('HttpClient: ' + message);
  };
  SimpleLogger.$metadata$ = classMeta('SimpleLogger', [Logger]);
  function get_ClientCallLogger() {
    init_properties_Logging_kt_sb2mx7();
    return ClientCallLogger;
  }
  var ClientCallLogger;
  function get_DisableLogging() {
    init_properties_Logging_kt_sb2mx7();
    return DisableLogging;
  }
  var DisableLogging;
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.a3l_1 = tmp$ret$0;
    this.b3l_1 = get_DEFAULT(Companion_getInstance());
    this.c3l_1 = LogLevel_HEADERS_getInstance();
  }
  Config.$metadata$ = classMeta('Config');
  function setupRequestLogging($this, client) {
    var tmp = Phases_getInstance().l2g_1;
    client.v2d_1.u1u(tmp, Logging$setupRequestLogging$slambda_0($this, null));
  }
  function logRequest($this, request, $cont) {
    var tmp = request.w2f_1;
    var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
    var logger = new HttpClientCallLogger($this.d3l_1);
    request.y2f_1.b1o(get_ClientCallLogger(), logger);
    var tmp$ret$11;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$10;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.logging.Logging.logRequest.<anonymous>' call
    if ($this.e3l_1.p3k_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine = 'REQUEST: ' + Url(request.t2f_1);
      var tmp$ret$0;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_0 = tmp0_apply.j6(tmp0_appendLine);
      tmp$ret$0 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$1 = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.text.appendLine' call
      var tmp1_appendLine = 'METHOD: ' + request.u2f_1;
      var tmp$ret$2;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_1 = tmp0_apply.j6(tmp1_appendLine);
      tmp$ret$2 = tmp0_appendLine_1.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$3 = tmp$ret$2;
    }
    if ($this.e3l_1.q3k_1) {
      var tmp$ret$5;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$4;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_2 = tmp0_apply.j6('COMMON HEADERS');
      tmp$ret$4 = tmp0_appendLine_2.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$5 = tmp$ret$4;
      logHeaders(tmp0_apply, request.v2f_1.s1r());
      var tmp$ret$7;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$6;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_3 = tmp0_apply.j6('CONTENT HEADERS');
      tmp$ret$6 = tmp0_appendLine_3.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$7 = tmp$ret$6;
      var tmp0_safe_receiver = content.l28();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        logHeader(tmp0_apply, HttpHeaders_getInstance().c1z_1, tmp0_safe_receiver.toString());
        tmp$ret$8 = Unit_getInstance();
      }
      var tmp1_safe_receiver = content.j28();
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        logHeader(tmp0_apply, HttpHeaders_getInstance().f1z_1, tmp1_safe_receiver.toString());
        tmp$ret$9 = Unit_getInstance();
      }
      logHeaders(tmp0_apply, content.v22().s1r());
    }
    tmp$ret$10 = tmp0_apply;
    tmp$ret$11 = tmp$ret$10.toString();
    var message = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$12 = charSequenceLength(message) > 0;
    if (tmp$ret$12) {
      logger.h3k(message);
    }
    var tmp_0;
    var tmp$ret$13;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$13 = charSequenceLength(message) === 0;
    if (tmp$ret$13) {
      tmp_0 = true;
    } else {
      tmp_0 = !$this.e3l_1.r3k_1;
    }
    if (tmp_0) {
      logger.l3k();
      return null;
    }
    return logRequestBody($this, content, logger, $cont);
  }
  function logRequestBody($this, content, logger, $cont) {
    var requestLog = StringBuilder_init_$Create$();
    var tmp$ret$1;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = 'BODY Content-Type: ' + content.j28();
    var tmp$ret$0;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_0 = requestLog.j6(tmp0_appendLine);
    tmp$ret$0 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
    tmp$ret$1 = tmp$ret$0;
    var tmp0_safe_receiver = content.j28();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
    var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().m1j_1 : tmp1_elvis_lhs;
    var channel = ByteChannel$default(false, 1, null);
    var tmp = GlobalScope_getInstance();
    var tmp_0 = Dispatchers_getInstance().lv_1;
    var tmp_1 = launch$default(tmp, tmp_0, null, Logging$logRequestBody$slambda_0(channel, charset_0, requestLog, null), 2, null);
    tmp_1.kk(Logging$logRequestBody$lambda(logger, requestLog));
    return observe(content, channel, $cont);
  }
  function logRequestException($this, context, cause) {
    if ($this.e3l_1.p3k_1) {
      $this.d3l_1.n3j('REQUEST ' + Url(context.t2f_1) + ' failed with exception: ' + cause);
    }
  }
  function setupResponseLogging($this, client) {
    var tmp = Phases_getInstance_0().w2m_1;
    client.w2d_1.u1u(tmp, Logging$setupResponseLogging$slambda_0($this, null));
    var tmp_0 = Phases_getInstance_1().r2g_1;
    client.u2d_1.u1u(tmp_0, Logging$setupResponseLogging$slambda_2($this, null));
    if (!$this.e3l_1.r3k_1)
      return Unit_getInstance();
    var observer = Logging$setupResponseLogging$slambda_4($this, null);
    var tmp_1 = Plugin_getInstance();
    tmp_1.b34(ResponseObserver_init_$Create$(observer, null, 2, null), client);
  }
  function logResponseException($this, log, request, cause) {
    if (!$this.e3l_1.p3k_1)
      return Unit_getInstance();
    log.j6('RESPONSE ' + request.f2i() + ' failed with exception: ' + cause);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.g3l_1 = new AttributeKey('ClientLogging');
  }
  Companion_0.prototype.s = function () {
    return this.g3l_1;
  };
  Companion_0.prototype.h3l = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new Logging(config.b3l_1, config.c3l_1, config.a3l_1);
  };
  Companion_0.prototype.y2g = function (block) {
    return this.h3l(block);
  };
  Companion_0.prototype.i3l = function (plugin, scope) {
    setupRequestLogging(plugin, scope);
    setupResponseLogging(plugin, scope);
  };
  Companion_0.prototype.z2g = function (plugin, scope) {
    return this.i3l(plugin instanceof Logging ? plugin : THROW_CCE(), scope);
  };
  Companion_0.$metadata$ = objectMeta('Companion', [HttpClientPlugin]);
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function shouldBeLogged($this, request) {
    var tmp;
    if ($this.f3l_1.m()) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = $this.f3l_1;
        var tmp_0;
        if (isInterface(tmp0_any, Collection)) {
          tmp_0 = tmp0_any.m();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_any.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$1;
          // Inline function 'io.ktor.client.plugins.logging.Logging.shouldBeLogged.<anonymous>' call
          tmp$ret$1 = element(request);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function Logging$setupRequestLogging$slambda(this$0, resultContinuation) {
    this.r3l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Logging$setupRequestLogging$slambda.prototype.n2e = function ($this$intercept, it, $cont) {
    var tmp = this.o2e($this$intercept, it, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  Logging$setupRequestLogging$slambda.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n2e(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  Logging$setupRequestLogging$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 8;
            if (!shouldBeLogged(this.r3l_1, this.s3l_1.q1u_1)) {
              this.s3l_1.q1u_1.y2f_1.b1o(get_DisableLogging(), Unit_getInstance());
              return Unit_getInstance();
            }

            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = logRequest(this.r3l_1, this.s3l_1.q1u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u3l_1 = suspendResult;
            this.kh_1 = 8;
            this.jh_1 = 3;
            continue $sm;
          case 2:
            this.kh_1 = 8;
            var tmp_0 = this.mh_1;
            if (tmp_0 instanceof Error) {
              this.v3l_1 = this.mh_1;
              var tmp_1 = this;
              tmp_1.u3l_1 = null;
              this.jh_1 = 3;
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 3:
            this.kh_1 = 8;
            this.w3l_1 = this.u3l_1;
            this.jh_1 = 4;
            continue $sm;
          case 4:
            this.kh_1 = 7;
            this.kh_1 = 6;
            this.jh_1 = 5;
            var tmp0_elvis_lhs = this.w3l_1;
            suspendResult = this.s3l_1.u1t(tmp0_elvis_lhs == null ? this.s3l_1.t1t() : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_2 = this;
            tmp_2.x3l_1 = Unit_getInstance();
            this.kh_1 = 8;
            this.jh_1 = 9;
            continue $sm;
          case 6:
            this.kh_1 = 7;
            var tmp_3 = this.mh_1;
            if (tmp_3 instanceof Error) {
              var cause = this.mh_1;
              var tmp_4 = this;
              logRequestException(this.r3l_1, this.s3l_1.q1u_1, cause);
              throw cause;
            } else {
              throw this.mh_1;
            }

            break;
          case 7:
            this.kh_1 = 8;
            var t = this.mh_1;
            throw t;
          case 8:
            throw this.mh_1;
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.kh_1 === 8) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  Logging$setupRequestLogging$slambda.prototype.o2e = function ($this$intercept, it, completion) {
    var i = new Logging$setupRequestLogging$slambda(this.r3l_1, completion);
    i.s3l_1 = $this$intercept;
    i.t3l_1 = it;
    return i;
  };
  Logging$setupRequestLogging$slambda.$metadata$ = classMeta('Logging$setupRequestLogging$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Logging$setupRequestLogging$slambda_0(this$0, resultContinuation) {
    var i = new Logging$setupRequestLogging$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.n2e($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation) {
    this.g3m_1 = $channel;
    this.h3m_1 = $charset;
    this.i3m_1 = $requestLog;
    CoroutineImpl.call(this, resultContinuation);
  }
  Logging$logRequestBody$slambda.prototype.e1e = function ($this$launch, $cont) {
    var tmp = this.f1e($this$launch, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  Logging$logRequestBody$slambda.prototype.th = function (p1, $cont) {
    return this.e1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Logging$logRequestBody$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.g3m_1.e1d(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_0 = this;
            tmp_0.k3m_1 = readText$default(ARGUMENT, this.h3m_1, 0, 2, null);
            this.kh_1 = 3;
            this.jh_1 = 4;
            continue $sm;
          case 2:
            this.kh_1 = 3;
            var tmp_1 = this.mh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.mh_1;
              var tmp_2 = this;
              tmp_2.k3m_1 = null;
              this.jh_1 = 4;
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 3:
            throw this.mh_1;
          case 4:
            this.kh_1 = 3;
            var tmp0_elvis_lhs = this.k3m_1;
            var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
            var tmp0_appendLine = this.i3m_1.j6('BODY START');
            tmp0_appendLine.h6(_Char___init__impl__6a9atx(10));
            ;
            var tmp0_appendLine_0 = this.i3m_1.j6(text);
            tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
            ;
            this.i3m_1.j6('BODY END');
            ;
            return Unit_getInstance();
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
  Logging$logRequestBody$slambda.prototype.f1e = function ($this$launch, completion) {
    var i = new Logging$logRequestBody$slambda(this.g3m_1, this.h3m_1, this.i3m_1, completion);
    i.j3m_1 = $this$launch;
    return i;
  };
  Logging$logRequestBody$slambda.$metadata$ = classMeta('Logging$logRequestBody$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Logging$logRequestBody$slambda_0($channel, $charset, $requestLog, resultContinuation) {
    var i = new Logging$logRequestBody$slambda($channel, $charset, $requestLog, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1e($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$logRequestBody$lambda($logger, $requestLog) {
    return function (it) {
      $logger.h3k($requestLog.toString());
      $logger.l3k();
      return Unit_getInstance();
    };
  }
  function Logging$setupResponseLogging$slambda(this$0, resultContinuation) {
    this.t3m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Logging$setupResponseLogging$slambda.prototype.z2n = function ($this$intercept, response, $cont) {
    var tmp = this.a2o($this$intercept, response, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  Logging$setupResponseLogging$slambda.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.z2n(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  Logging$setupResponseLogging$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 10;
            if (this.t3m_1.e3l_1.equals(LogLevel_NONE_getInstance()) ? true : this.v3m_1.a2j().i2h().a1o(get_DisableLogging()))
              return Unit_getInstance();
            this.w3m_1 = this.v3m_1.a2j().i2h().y1n(get_ClientCallLogger());
            this.x3m_1 = StringBuilder_init_$Create$();
            this.y3m_1 = false;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            this.kh_1 = 4;
            this.kh_1 = 3;
            logResponseHeader(this.x3m_1, this.v3m_1.a2j().u2e(), this.t3m_1.e3l_1);
            this.jh_1 = 2;
            suspendResult = this.u3m_1.u1t(this.u3m_1.t1t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.z3m_1 = Unit_getInstance();
            this.kh_1 = 10;
            this.jh_1 = 7;
            continue $sm;
          case 3:
            this.kh_1 = 4;
            var tmp_1 = this.mh_1;
            if (tmp_1 instanceof Error) {
              this.a3n_1 = this.mh_1;
              var tmp_2 = this;
              logResponseException(this.t3m_1, this.x3m_1, this.v3m_1.a2j().d2i(), this.a3n_1);
              this.y3m_1 = true;
              throw this.a3n_1;
            } else {
              throw this.mh_1;
            }

            break;
          case 4:
            this.kh_1 = 10;
            this.b3n_1 = this.mh_1;
            this.w3m_1.i3k(this.x3m_1.toString());
            if (this.y3m_1 ? true : !this.t3m_1.e3l_1.r3k_1) {
              this.jh_1 = 5;
              suspendResult = this.w3m_1.m3k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 6;
              continue $sm;
            }

            break;
          case 5:
            this.jh_1 = 6;
            continue $sm;
          case 6:
            throw this.b3n_1;
          case 7:
            this.w3m_1.i3k(this.x3m_1.toString());
            if (this.y3m_1 ? true : !this.t3m_1.e3l_1.r3k_1) {
              this.jh_1 = 8;
              suspendResult = this.w3m_1.m3k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 9;
              continue $sm;
            }

            break;
          case 8:
            this.jh_1 = 9;
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 10) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  Logging$setupResponseLogging$slambda.prototype.a2o = function ($this$intercept, response, completion) {
    var i = new Logging$setupResponseLogging$slambda(this.t3m_1, completion);
    i.u3m_1 = $this$intercept;
    i.v3m_1 = response;
    return i;
  };
  Logging$setupResponseLogging$slambda.$metadata$ = classMeta('Logging$setupResponseLogging$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Logging$setupResponseLogging$slambda_0(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.z2n($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$setupResponseLogging$slambda_1(this$0, resultContinuation) {
    this.k3n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Logging$setupResponseLogging$slambda_1.prototype.h2f = function ($this$intercept, it, $cont) {
    var tmp = this.i2f($this$intercept, it, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  Logging$setupResponseLogging$slambda_1.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h2f(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  Logging$setupResponseLogging$slambda_1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 6;
            if (this.k3n_1.e3l_1.equals(LogLevel_NONE_getInstance()) ? true : this.l3n_1.q1u_1.i2h().a1o(get_DisableLogging())) {
              return Unit_getInstance();
            }

            this.kh_1 = 3;
            this.jh_1 = 1;
            suspendResult = this.l3n_1.v1t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.kh_1 = 6;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            this.kh_1 = 6;
            return Unit_getInstance();
          case 3:
            this.kh_1 = 6;
            var tmp_0 = this.mh_1;
            if (tmp_0 instanceof Error) {
              this.n3n_1 = this.mh_1;
              this.o3n_1 = StringBuilder_init_$Create$();
              this.p3n_1 = this.l3n_1.q1u_1.i2h().y1n(get_ClientCallLogger());
              logResponseException(this.k3n_1, this.o3n_1, this.l3n_1.q1u_1.d2i(), this.n3n_1);
              this.jh_1 = 4;
              suspendResult = this.p3n_1.j3k(this.o3n_1.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 4:
            this.jh_1 = 5;
            suspendResult = this.p3n_1.m3k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            throw this.n3n_1;
          case 6:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 6) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  Logging$setupResponseLogging$slambda_1.prototype.i2f = function ($this$intercept, it, completion) {
    var i = new Logging$setupResponseLogging$slambda_1(this.k3n_1, completion);
    i.l3n_1 = $this$intercept;
    i.m3n_1 = it;
    return i;
  };
  Logging$setupResponseLogging$slambda_1.$metadata$ = classMeta('Logging$setupResponseLogging$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Logging$setupResponseLogging$slambda_2(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.h2f($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$setupResponseLogging$slambda_3(this$0, resultContinuation) {
    this.y3n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Logging$setupResponseLogging$slambda_3.prototype.r2p = function (it, $cont) {
    var tmp = this.s2p(it, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  Logging$setupResponseLogging$slambda_3.prototype.th = function (p1, $cont) {
    return this.r2p(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  Logging$setupResponseLogging$slambda_3.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 10;
            if (this.y3n_1.e3l_1.equals(LogLevel_NONE_getInstance()) ? true : this.z3n_1.a2j().i2h().a1o(get_DisableLogging())) {
              return Unit_getInstance();
            }

            this.a3o_1 = this.z3n_1.a2j().i2h().y1n(get_ClientCallLogger());
            this.b3o_1 = StringBuilder_init_$Create$();
            this.jh_1 = 1;
            continue $sm;
          case 1:
            this.kh_1 = 4;
            this.kh_1 = 3;
            this.jh_1 = 2;
            suspendResult = logResponseBody(this.b3o_1, contentType(this.z3n_1), this.z3n_1.f1w(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c3o_1 = suspendResult;
            this.kh_1 = 10;
            this.jh_1 = 7;
            continue $sm;
          case 3:
            this.kh_1 = 4;
            var tmp_0 = this.mh_1;
            if (tmp_0 instanceof Error) {
              this.d3o_1 = this.mh_1;
              var tmp_1 = this;
              tmp_1.c3o_1 = Unit_getInstance();
              this.kh_1 = 10;
              this.jh_1 = 7;
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 4:
            this.kh_1 = 10;
            this.e3o_1 = this.mh_1;
            this.jh_1 = 5;
            var tmp_2 = this;
            tmp_2.f3o_1 = this.b3o_1.toString();
            var tmp_3 = this.f3o_1;
            suspendResult = this.a3o_1.k3k(toString(trim(isCharSequence(tmp_3) ? tmp_3 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.jh_1 = 6;
            suspendResult = this.a3o_1.m3k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.e3o_1;
          case 7:
            this.jh_1 = 8;
            var tmp_4 = this;
            tmp_4.g3o_1 = this.b3o_1.toString();
            var tmp_5 = this.g3o_1;
            suspendResult = this.a3o_1.k3k(toString(trim(isCharSequence(tmp_5) ? tmp_5 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.jh_1 = 9;
            suspendResult = this.a3o_1.m3k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 10) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  Logging$setupResponseLogging$slambda_3.prototype.s2p = function (it, completion) {
    var i = new Logging$setupResponseLogging$slambda_3(this.y3n_1, completion);
    i.z3n_1 = it;
    return i;
  };
  Logging$setupResponseLogging$slambda_3.$metadata$ = classMeta('Logging$setupResponseLogging$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Logging$setupResponseLogging$slambda_4(this$0, resultContinuation) {
    var i = new Logging$setupResponseLogging$slambda_3(this$0, resultContinuation);
    var l = function (it, $cont) {
      return i.r2p(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Logging(logger, level, filters) {
    Companion_getInstance_0();
    this.d3l_1 = logger;
    this.e3l_1 = level;
    this.f3l_1 = filters;
  }
  Logging.prototype.h3o = function () {
    return this.e3l_1;
  };
  Logging.$metadata$ = classMeta('Logging');
  var properties_initialized_Logging_kt_588vu7;
  function init_properties_Logging_kt_sb2mx7() {
    if (properties_initialized_Logging_kt_588vu7) {
    } else {
      properties_initialized_Logging_kt_588vu7 = true;
      ClientCallLogger = new AttributeKey('CallLogger');
      DisableLogging = new AttributeKey('DisableLogging');
    }
  }
  function logHeaders(_this__u8e3s4, headers) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp0_sortedBy = toList(headers);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = logHeaders$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedBy, tmp$ret$0);
    var sortedHeaders = tmp$ret$1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedHeaders.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.s();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.t();
      var values = tmp$ret$3;
      logHeader(_this__u8e3s4, key, joinToString$default(values, '; ', null, null, 0, null, null, 62, null));
    }
  }
  function logHeader(_this__u8e3s4, key, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine = '-> ' + key + ': ' + value;
    var tmp$ret$0;
    // Inline function 'kotlin.text.appendLine' call
    var tmp0_appendLine_0 = _this__u8e3s4.c(tmp0_appendLine);
    tmp$ret$0 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
    tmp$ret$1 = tmp$ret$0;
  }
  function logResponseHeader(log, response, level) {
    var tmp$ret$8;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    if (level.p3k_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine = 'RESPONSE: ' + response.k28();
      var tmp$ret$0;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_0 = log.j6(tmp0_appendLine);
      tmp$ret$0 = tmp0_appendLine_0.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$1 = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.text.appendLine' call
      var tmp1_appendLine = 'METHOD: ' + response.a2j().d2i().b2j();
      var tmp$ret$2;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_1 = log.j6(tmp1_appendLine);
      tmp$ret$2 = tmp0_appendLine_1.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$3 = tmp$ret$2;
      var tmp$ret$5;
      // Inline function 'kotlin.text.appendLine' call
      var tmp2_appendLine = 'FROM: ' + response.a2j().d2i().f2i();
      var tmp$ret$4;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_2 = log.j6(tmp2_appendLine);
      tmp$ret$4 = tmp0_appendLine_2.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$5 = tmp$ret$4;
    }
    var tmp;
    if (level.q3k_1) {
      var tmp$ret$7;
      // Inline function 'kotlin.text.appendLine' call
      var tmp$ret$6;
      // Inline function 'kotlin.text.appendLine' call
      var tmp0_appendLine_3 = log.j6('COMMON HEADERS');
      tmp$ret$6 = tmp0_appendLine_3.h6(_Char___init__impl__6a9atx(10));
      tmp$ret$7 = tmp$ret$6;
      logHeaders(log, response.v22().s1r());
      tmp = Unit_getInstance();
    }
    tmp$ret$8 = tmp;
  }
  function logResponseBody(log, contentType, content, $cont) {
    var tmp = new $logResponseBodyCOROUTINE$4(log, contentType, content, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.y3o_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.y3o_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function logHeaders$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
    tmp$ret$0 = a.s();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.logging.logHeaders.<anonymous>' call
    tmp$ret$1 = b.s();
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function $logResponseBodyCOROUTINE$4(log, contentType, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3o_1 = log;
    this.r3o_1 = contentType;
    this.s3o_1 = content;
  }
  $logResponseBodyCOROUTINE$4.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 4;
            var tmp_0 = this;
            tmp_0.t3o_1 = 'BODY Content-Type: ' + this.r3o_1;
            var tmp_1 = this;
            tmp_1.u3o_1 = this.q3o_1.j6(this.t3o_1);
            this.u3o_1.h6(_Char___init__impl__6a9atx(10));
            ;
            var tmp_2 = this;
            tmp_2.v3o_1 = this.q3o_1.j6('BODY START');
            this.v3o_1.h6(_Char___init__impl__6a9atx(10));
            ;
            var tmp_3 = this;
            var tmp0_safe_receiver = this.r3o_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
            tmp_3.w3o_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().m1j_1 : tmp1_elvis_lhs;
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.s3o_1.e1d(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_4 = this;
            tmp_4.x3o_1 = readText$default(ARGUMENT, this.w3o_1, 0, 2, null);
            this.kh_1 = 4;
            this.jh_1 = 3;
            continue $sm;
          case 2:
            this.kh_1 = 4;
            var tmp_5 = this.mh_1;
            if (tmp_5 instanceof Error) {
              var cause = this.mh_1;
              var tmp_6 = this;
              tmp_6.x3o_1 = null;
              this.jh_1 = 3;
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 3:
            this.kh_1 = 4;
            var tmp2_elvis_lhs = this.x3o_1;
            var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
            var tmp0_appendLine = this.q3o_1.j6(message);
            tmp0_appendLine.h6(_Char___init__impl__6a9atx(10));
            ;
            this.q3o_1.j6('BODY END');
            ;
            return Unit_getInstance();
          case 4:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 4) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $logResponseBodyCOROUTINE$4.$metadata$ = classMeta('$logResponseBodyCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function observe(_this__u8e3s4, log, $cont) {
    var tmp = new $observeCOROUTINE$5(_this__u8e3s4, log, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function toReadChannel(_this__u8e3s4) {
    var tmp = GlobalScope_getInstance();
    var tmp_0 = Dispatchers_getInstance().kv_1;
    return writer$default(tmp, tmp_0, false, toReadChannel$slambda_0(_this__u8e3s4, null), 2, null).ow();
  }
  function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
    this.t3p_1 = $this_toReadChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  toReadChannel$slambda.prototype.y2j = function ($this$writer, $cont) {
    var tmp = this.z2j($this$writer, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  toReadChannel$slambda.prototype.th = function (p1, $cont) {
    return this.y2j((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toReadChannel$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.t3p_1.q29(this.u3p_1.ow(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 2) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  toReadChannel$slambda.prototype.z2j = function ($this$writer, completion) {
    var i = new toReadChannel$slambda(this.t3p_1, completion);
    i.u3p_1 = $this$writer;
    return i;
  };
  toReadChannel$slambda.$metadata$ = classMeta('toReadChannel$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
    var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y2j($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $observeCOROUTINE$5(_this__u8e3s4, log, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h3p_1 = _this__u8e3s4;
    this.i3p_1 = log;
  }
  $observeCOROUTINE$5.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.j3p_1 = this.h3p_1;
            var tmp_0 = this.j3p_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.jh_1 = 1;
              suspendResult = writeFully(this.i3p_1, this.h3p_1.m28(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.j3p_1;
              if (tmp_1 instanceof ReadChannelContent) {
                var tmp_2 = this;
                var responseChannel = ByteChannel$default(false, 1, null);
                var content = this.h3p_1.o29();
                copyToBoth(content, this.i3p_1, responseChannel);
                tmp_2.k3p_1 = new LoggedContent(this.h3p_1, responseChannel);
                this.jh_1 = 2;
                continue $sm;
              } else {
                var tmp_3 = this.j3p_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  var tmp_4 = this;
                  var responseChannel_0 = ByteChannel$default(false, 1, null);
                  var content_0 = toReadChannel(this.h3p_1);
                  copyToBoth(content_0, this.i3p_1, responseChannel_0);
                  tmp_4.k3p_1 = new LoggedContent(this.h3p_1, responseChannel_0);
                  this.jh_1 = 2;
                  continue $sm;
                } else {
                  var tmp_5 = this;
                  close(this.i3p_1);
                  tmp_5.k3p_1 = this.h3p_1;
                  this.jh_1 = 2;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            close(this.i3p_1);
            ;
            this.k3p_1 = this.h3p_1;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            return this.k3p_1;
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
  $observeCOROUTINE$5.$metadata$ = classMeta('$observeCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_DEFAULT(_this__u8e3s4) {
    return get_SIMPLE(_this__u8e3s4);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LogLevel_ALL_getInstance;
  _.$_$.b = Companion_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = get_DEFAULT;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-logging-js-ir.js.map
