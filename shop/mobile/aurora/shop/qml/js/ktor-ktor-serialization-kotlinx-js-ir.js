(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.k8;
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.uc;
  var toString = kotlin_kotlin.$_$.q9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var isInterface = kotlin_kotlin.$_$.c9;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.v1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.ub;
  var discard = kotlin_io_ktor_ktor_io.$_$.j1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.k;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.l;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.e;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Map = kotlin_kotlin.$_$.n4;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Set = kotlin_kotlin.$_$.t4;
  var firstOrNull = kotlin_kotlin.$_$.t5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var isArray = kotlin_kotlin.$_$.u8;
  var List = kotlin_kotlin.$_$.l4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var filterNotNull = kotlin_kotlin.$_$.r5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.y4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.r6;
  var Collection = kotlin_kotlin.$_$.e4;
  //endregion
  //region block: pre-declaration
  SerializationNegotiationParameters.prototype = Object.create(SerializationParameters.prototype);
  SerializationNegotiationParameters.prototype.constructor = SerializationNegotiationParameters;
  $serializeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $serializeCOROUTINE$0.prototype.constructor = $serializeCOROUTINE$0;
  KotlinxSerializationConverter$serializationBase$1.prototype = Object.create(KotlinxSerializationBase.prototype);
  KotlinxSerializationConverter$serializationBase$1.prototype.constructor = KotlinxSerializationConverter$serializationBase$1;
  $deserializeCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $deserializeCOROUTINE$1.prototype.constructor = $deserializeCOROUTINE$1;
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.t46_1 = format;
    this.u46_1 = value;
    this.v46_1 = typeInfo;
    this.w46_1 = charset;
    this.x46_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.y46 = function () {
    return this.t46_1;
  };
  SerializationNegotiationParameters.prototype.t = function () {
    return this.u46_1;
  };
  SerializationNegotiationParameters.prototype.z46 = function () {
    return this.v46_1;
  };
  SerializationNegotiationParameters.prototype.a47 = function () {
    return this.w46_1;
  };
  SerializationNegotiationParameters.$metadata$ = classMeta('SerializationNegotiationParameters', undefined, undefined, undefined, undefined, SerializationParameters.prototype);
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o47_1 = _this__u8e3s4;
    this.p47_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 5;
            this.kh_1 = 2;
            var tmp_0 = this;
            tmp_0.r47_1 = serializerFromTypeInfo(this.p47_1.z46(), this.o47_1.v47_1.p3q());
            this.p47_1.f47_1 = this.r47_1;
            this.jh_1 = 1;
            suspendResult = this.o47_1.w47(this.p47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q47_1 = suspendResult;
            this.kh_1 = 5;
            this.jh_1 = 3;
            continue $sm;
          case 2:
            this.kh_1 = 5;
            var tmp_1 = this.mh_1;
            if (tmp_1 instanceof SerializationException) {
              this.s47_1 = this.mh_1;
              var tmp_2 = this;
              tmp_2.q47_1 = null;
              this.jh_1 = 3;
              continue $sm;
            } else {
              throw this.mh_1;
            }

            break;
          case 3:
            this.kh_1 = 5;
            this.t47_1 = this.q47_1;
            if (!(this.t47_1 == null)) {
              return this.t47_1;
            }

            this.u47_1 = guessSerializer(this.p47_1.t(), this.o47_1.v47_1.p3q());
            this.p47_1.f47_1 = this.u47_1;
            this.jh_1 = 4;
            suspendResult = this.o47_1.w47(this.p47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 5) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $serializeCOROUTINE$0.$metadata$ = classMeta('$serializeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationBase(format) {
    this.v47_1 = format;
  }
  KotlinxSerializationBase.prototype.x47 = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  KotlinxSerializationBase.$metadata$ = classMeta('KotlinxSerializationBase');
  function SerializationParameters(format, value, typeInfo, charset) {
    this.b47_1 = format;
    this.c47_1 = value;
    this.d47_1 = typeInfo;
    this.e47_1 = charset;
  }
  SerializationParameters.prototype.y46 = function () {
    return this.b47_1;
  };
  SerializationParameters.prototype.t = function () {
    return this.c47_1;
  };
  SerializationParameters.prototype.z46 = function () {
    return this.d47_1;
  };
  SerializationParameters.prototype.a47 = function () {
    return this.e47_1;
  };
  SerializationParameters.prototype.m46 = function () {
    var tmp = this.f47_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  SerializationParameters.$metadata$ = classMeta('SerializationParameters');
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.e2b(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.n3q(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.q3q(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.z47_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.a48_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.c48 = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).nd() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).nd());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.z47_1, parameters.m46(), parameters.y46(), parameters.t(), parameters.x46_1, parameters.a47());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.w47 = function (parameters, $cont) {
    return this.c48(parameters, $cont);
  };
  KotlinxSerializationConverter$serializationBase$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, KotlinxSerializationBase.prototype);
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l48_1 = _this__u8e3s4;
    this.m48_1 = charset;
    this.n48_1 = typeInfo;
    this.o48_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 4;
            this.p48_1 = serializerFromTypeInfo(this.n48_1, this.l48_1.a48_1.p3q());
            this.jh_1 = 1;
            suspendResult = this.o48_1.e1d(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            this.kh_1 = 2;
            var tmp0_subject = this.l48_1.a48_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.l48_1.a48_1.o3q(this.p48_1, readText$default(contentPacket, this.m48_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.l48_1.a48_1.r3q(this.p48_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.l48_1.a48_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            this.kh_1 = 4;
            var tmp_1 = this.mh_1;
            if (tmp_1 instanceof Error) {
              var cause = this.mh_1;
              throw new JsonConvertException('Illegal input', cause);
            } else {
              throw this.mh_1;
            }

            break;
          case 3:
            this.kh_1 = 4;
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
  $deserializeCOROUTINE$1.$metadata$ = classMeta('$deserializeCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function KotlinxSerializationConverter(format) {
    this.a48_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.a48_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.a48_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.a48_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.b48_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.q48 = function (contentType, charset, typeInfo, value, $cont) {
    return this.r48(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.f2b = function (contentType, charset, typeInfo, value, $cont) {
    return this.q48(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.r48 = function (contentType, charset, typeInfo, value, $cont) {
    return this.b48_1.x47(new SerializationNegotiationParameters(this.a48_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.g2b = function (contentType, charset, typeInfo, value, $cont) {
    return this.r48(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.h2b = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  KotlinxSerializationConverter.$metadata$ = classMeta('KotlinxSerializationConverter', [ContentConverter]);
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.j1v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.xd().m() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = module_0.s3q(typeInfo.h1v_1, null, 2, null);
      tmp_0 = tmp1_safe_receiver == null ? null : maybeNullable(tmp1_safe_receiver, typeInfo);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.h1v_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_getInstance()));
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
            tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
            tmp$ret$1 = tmp$ret$0;
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
              var keySerializer = elementSerializer(value.j2(), module_0);
              var valueSerializer = elementSerializer(value.k2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.s3q(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.j1v_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yd()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.b(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp1_distinctBy.d();
    while (tmp0_iterator_0.e()) {
      var e = tmp0_iterator_0.f();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.v3p().b3r();
      var key = tmp$ret$3;
      if (set.b(key)) {
        list.b(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.g() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.d();
      while (tmp0_iterator_1.e()) {
        var item_0 = tmp0_iterator_1.f();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.v3p().b3r();
        tmp0_mapTo_0.b(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.v3p().u3q()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.m();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.d();
      while (tmp0_iterator_2.e()) {
        var element = tmp0_iterator_2.f();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map
