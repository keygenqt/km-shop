(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var fillArrayVal = kotlin_kotlin.$_$.o8;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var classMeta = kotlin_kotlin.$_$.k8;
  var toString = kotlin_kotlin.$_$.q9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var charSequenceGet = kotlin_kotlin.$_$.h8;
  var Char = kotlin_kotlin.$_$.kb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.m8;
  var Annotation = kotlin_kotlin.$_$.jb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var interfaceMeta = kotlin_kotlin.$_$.t8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var hashCode = kotlin_kotlin.$_$.s8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var Map = kotlin_kotlin.$_$.n4;
  var List = kotlin_kotlin.$_$.l4;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.r8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.qc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var toInt = kotlin_kotlin.$_$.ya;
  var toLong = kotlin_kotlin.$_$.ab;
  var toDouble = kotlin_kotlin.$_$.wa;
  var toLongOrNull = kotlin_kotlin.$_$.za;
  var toDoubleOrNull = kotlin_kotlin.$_$.va;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var toULongOrNull = kotlin_kotlin.$_$.eb;
  var Companion_getInstance = kotlin_kotlin.$_$.a4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f3;
  var ULong = kotlin_kotlin.$_$.dc;
  var isInterface = kotlin_kotlin.$_$.c9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var lazy_0 = kotlin_kotlin.$_$.rc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var KProperty1 = kotlin_kotlin.$_$.ca;
  var getPropertyCallableRef = kotlin_kotlin.$_$.q8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toLong_0 = kotlin_kotlin.$_$.o9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.d3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.g3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.a3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.j3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.e8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.i8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j8;
  var coerceAtLeast = kotlin_kotlin.$_$.s9;
  var coerceAtMost = kotlin_kotlin.$_$.u9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.r6;
  var arrayIterator = kotlin_kotlin.$_$.c8;
  var ensureNotNull = kotlin_kotlin.$_$.lc;
  var emptyMap = kotlin_kotlin.$_$.o5;
  var getValue = kotlin_kotlin.$_$.v5;
  var copyOf = kotlin_kotlin.$_$.j5;
  var copyOf_0 = kotlin_kotlin.$_$.k5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.nb;
  var invoke = kotlin_kotlin.$_$.mc;
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ob;
  var Unit = kotlin_kotlin.$_$.fc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var SuspendFunction2 = kotlin_kotlin.$_$.y7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var isObject = kotlin_kotlin.$_$.f9;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var plus = kotlin_kotlin.$_$.tc;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.sb;
  var isFinite = kotlin_kotlin.$_$.oc;
  var isFinite_0 = kotlin_kotlin.$_$.nc;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toUInt = kotlin_kotlin.$_$.db;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c3;
  var toULong = kotlin_kotlin.$_$.fb;
  var toUByte = kotlin_kotlin.$_$.cb;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var toUShort = kotlin_kotlin.$_$.gb;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.z3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var setOf = kotlin_kotlin.$_$.q6;
  var numberToChar = kotlin_kotlin.$_$.k9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var equals_0 = kotlin_kotlin.$_$.ia;
  var toByte = kotlin_kotlin.$_$.n9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var toShort = kotlin_kotlin.$_$.p9;
  var single = kotlin_kotlin.$_$.sa;
  var emptySet = kotlin_kotlin.$_$.p5;
  var plus_0 = kotlin_kotlin.$_$.j6;
  var toList = kotlin_kotlin.$_$.w6;
  var Enum = kotlin_kotlin.$_$.pb;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var last = kotlin_kotlin.$_$.d6;
  var removeLast = kotlin_kotlin.$_$.n6;
  var lastIndexOf$default = kotlin_kotlin.$_$.p;
  var Long = kotlin_kotlin.$_$.ub;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w3;
  var charArray = kotlin_kotlin.$_$.g8;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), get_EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.s48_1 = configuration;
    this.t48_1 = serializersModule;
    this.u48_1 = new DescriptorSchemaCache();
  }
  Json.prototype.v48 = function () {
    return this.s48_1;
  };
  Json.prototype.p3q = function () {
    return this.t48_1;
  };
  Json.prototype.n3q = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
      encoder.h3u(serializer, value);
      return result.toString();
    }finally {
      result.kr();
    }
  };
  Json.prototype.o3q = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.v3p());
    var result = input.r3s(deserializer);
    lexer.q49();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.t2();
    return new JsonImpl(conf, builder.d4a_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.r49_1 = json.s48_1.e4a_1;
    this.s49_1 = json.s48_1.j4a_1;
    this.t49_1 = json.s48_1.f4a_1;
    this.u49_1 = json.s48_1.g4a_1;
    this.v49_1 = json.s48_1.h4a_1;
    this.w49_1 = json.s48_1.i4a_1;
    this.x49_1 = json.s48_1.k4a_1;
    this.y49_1 = json.s48_1.l4a_1;
    this.z49_1 = json.s48_1.m4a_1;
    this.a4a_1 = json.s48_1.n4a_1;
    this.b4a_1 = json.s48_1.o4a_1;
    this.c4a_1 = json.s48_1.p4a_1;
    this.d4a_1 = json.p3q();
  }
  JsonBuilder.prototype.q4a = function () {
    return this.x49_1;
  };
  JsonBuilder.prototype.t2 = function () {
    if (this.z49_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.a4a_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.w49_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.x49_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.x49_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.x49_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.x49_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.r49_1, this.t49_1, this.u49_1, this.v49_1, this.w49_1, this.s49_1, this.x49_1, this.y49_1, this.z49_1, this.a4a_1, this.b4a_1, this.c4a_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.p3q(), get_EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.s48_1.m4a_1, $this.s48_1.n4a_1);
    $this.p3q().y45(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.e4a_1 = encodeDefaults;
    this.f4a_1 = ignoreUnknownKeys;
    this.g4a_1 = isLenient;
    this.h4a_1 = allowStructuredMapKeys;
    this.i4a_1 = prettyPrint;
    this.j4a_1 = explicitNulls;
    this.k4a_1 = prettyPrintIndent;
    this.l4a_1 = coerceInputValues;
    this.m4a_1 = useArrayPolymorphism;
    this.n4a_1 = classDiscriminator;
    this.o4a_1 = allowSpecialFloatingPointValues;
    this.p4a_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.r4a = function () {
    return this.g4a_1;
  };
  JsonConfiguration.prototype.q4a = function () {
    return this.k4a_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.e4a_1 + ', ignoreUnknownKeys=' + this.f4a_1 + ', isLenient=' + this.g4a_1 + ', ' + ('allowStructuredMapKeys=' + this.h4a_1 + ', prettyPrint=' + this.i4a_1 + ', explicitNulls=' + this.j4a_1 + ', ') + ("prettyPrintIndent='" + this.k4a_1 + "', coerceInputValues=" + this.l4a_1 + ', useArrayPolymorphism=' + this.m4a_1 + ', ') + ("classDiscriminator='" + this.n4a_1 + "', allowSpecialFloatingPointValues=" + this.o4a_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    Companion_getInstance_6();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.f1w();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.s();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.t();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.h6(_Char___init__impl__6a9atx(58));
    tmp0_apply.sf(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.u4a_1 = content;
  }
  JsonObject.prototype.r = function () {
    return this.u4a_1.r();
  };
  JsonObject.prototype.j2 = function () {
    return this.u4a_1.j2();
  };
  JsonObject.prototype.g = function () {
    return this.u4a_1.g();
  };
  JsonObject.prototype.k2 = function () {
    return this.u4a_1.k2();
  };
  JsonObject.prototype.u1q = function (key) {
    return this.u4a_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u1q((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.v1q = function (key) {
    return this.u4a_1.i2(key);
  };
  JsonObject.prototype.i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.v1q((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.m = function () {
    return this.u4a_1.m();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.u4a_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.u4a_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.u4a_1.r();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.v4a_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.v4a_1.g();
  };
  JsonArray.prototype.w4a = function (element) {
    return this.v4a_1.l1(element);
  };
  JsonArray.prototype.l1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.w4a(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.x4a = function (elements) {
    return this.v4a_1.m1(elements);
  };
  JsonArray.prototype.m1 = function (elements) {
    return this.x4a(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.v4a_1.h(index);
  };
  JsonArray.prototype.m = function () {
    return this.v4a_1.m();
  };
  JsonArray.prototype.d = function () {
    return this.v4a_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.v4a_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.v4a_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.v4a_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.y4a_1 = isString;
    this.z4a_1 = toString(body);
  }
  JsonLiteral.prototype.f1w = function () {
    return this.z4a_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.y4a_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.z4a_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.z4a_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.y4a_1 === other.y4a_1))
      return false;
    if (!(this.z4a_1 === other.z4a_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.y4a_1 | 0;
    result = imul(31, result) + getStringHashCode(this.z4a_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.a4b_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b4b_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.f1w = function () {
    return this.a4b_1;
  };
  JsonNull.prototype.c4b = function () {
    return this.b4b_1.t();
  };
  JsonNull.prototype.k40 = function (typeParamsSerializers) {
    return this.c4b();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.f1w());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.f1w());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.f1w());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.f1w();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.f1w());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.f1w();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.f1w());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.f1w());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.j3q('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.j3q('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.j3q('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.j3q('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.j3q('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().d4b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().e4b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().f4b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().g4b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().h4b_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.i4b_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.v3p = function () {
    return this.i4b_1;
  };
  JsonElementSerializer.prototype.j4b = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.h3u(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.h3u(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.h3u(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.w3p = function (encoder, value) {
    return this.j4b(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.x3p = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.t4a();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.d4b_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.v3p = function () {
    return this.d4b_1;
  };
  JsonPrimitiveSerializer.prototype.k4b = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.h3u(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.h3u(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.w3p = function (encoder, value) {
    return this.k4b(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.x3p = function (decoder) {
    var result = asJsonDecoder(decoder).t4a();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.l4b_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).v3p();
    this.m4b_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.c3r = function () {
    return this.l4b_1.c3r();
  };
  JsonObjectDescriptor.prototype.d3r = function () {
    return this.l4b_1.d3r();
  };
  JsonObjectDescriptor.prototype.e3r = function () {
    return this.l4b_1.e3r();
  };
  JsonObjectDescriptor.prototype.u3q = function () {
    return this.l4b_1.u3q();
  };
  JsonObjectDescriptor.prototype.f3r = function () {
    return this.l4b_1.f3r();
  };
  JsonObjectDescriptor.prototype.g3r = function (index) {
    return this.l4b_1.g3r(index);
  };
  JsonObjectDescriptor.prototype.h3r = function (index) {
    return this.l4b_1.h3r(index);
  };
  JsonObjectDescriptor.prototype.i3r = function (name) {
    return this.l4b_1.i3r(name);
  };
  JsonObjectDescriptor.prototype.j3r = function (index) {
    return this.l4b_1.j3r(index);
  };
  JsonObjectDescriptor.prototype.k3r = function (index) {
    return this.l4b_1.k3r(index);
  };
  JsonObjectDescriptor.prototype.b3r = function () {
    return this.m4b_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.g4b_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.v3p = function () {
    return this.g4b_1;
  };
  JsonObjectSerializer.prototype.n4b = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).w3p(encoder, value);
  };
  JsonObjectSerializer.prototype.w3p = function (encoder, value) {
    return this.n4b(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.x3p = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).x3p(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.o4b_1 = ListSerializer(JsonElementSerializer_getInstance()).v3p();
    this.p4b_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.c3r = function () {
    return this.o4b_1.c3r();
  };
  JsonArrayDescriptor.prototype.d3r = function () {
    return this.o4b_1.d3r();
  };
  JsonArrayDescriptor.prototype.e3r = function () {
    return this.o4b_1.e3r();
  };
  JsonArrayDescriptor.prototype.u3q = function () {
    return this.o4b_1.u3q();
  };
  JsonArrayDescriptor.prototype.f3r = function () {
    return this.o4b_1.f3r();
  };
  JsonArrayDescriptor.prototype.g3r = function (index) {
    return this.o4b_1.g3r(index);
  };
  JsonArrayDescriptor.prototype.h3r = function (index) {
    return this.o4b_1.h3r(index);
  };
  JsonArrayDescriptor.prototype.i3r = function (name) {
    return this.o4b_1.i3r(name);
  };
  JsonArrayDescriptor.prototype.j3r = function (index) {
    return this.o4b_1.j3r(index);
  };
  JsonArrayDescriptor.prototype.k3r = function (index) {
    return this.o4b_1.k3r(index);
  };
  JsonArrayDescriptor.prototype.b3r = function () {
    return this.p4b_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.h4b_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.v3p = function () {
    return this.h4b_1;
  };
  JsonArraySerializer.prototype.q4b = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).w3p(encoder, value);
  };
  JsonArraySerializer.prototype.w3p = function (encoder, value) {
    return this.q4b(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.x3p = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).x3p(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.e4b_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.v3p = function () {
    return this.e4b_1;
  };
  JsonNullSerializer.prototype.r4b = function (encoder, value) {
    verify(encoder);
    encoder.l3t();
  };
  JsonNullSerializer.prototype.w3p = function (encoder, value) {
    return this.r4b(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.x3p = function (decoder) {
    verify_0(decoder);
    if (decoder.d3s()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.e3s();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.f4b_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.v3p = function () {
    return this.f4b_1;
  };
  JsonLiteralSerializer.prototype.s4b = function (encoder, value) {
    verify(encoder);
    if (value.y4a_1) {
      return encoder.u3t(value.z4a_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.q3t(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.z4a_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.w3t(serializer_0(Companion_getInstance()).v3p());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.q3t(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.s3t(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.m3t(tmp3_safe_receiver);
    }
    encoder.u3t(value.z4a_1);
  };
  JsonLiteralSerializer.prototype.w3p = function (encoder, value) {
    return this.s4b(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.x3p = function (decoder) {
    var result = asJsonDecoder(decoder).t4a();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.t4b_1.t();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.t4b_1 = lazy_0($deferred);
  }
  defer$1.prototype.b3r = function () {
    return _get_original__l7ku1m(this).b3r();
  };
  defer$1.prototype.f3r = function () {
    return _get_original__l7ku1m(this).f3r();
  };
  defer$1.prototype.d3r = function () {
    return _get_original__l7ku1m(this).d3r();
  };
  defer$1.prototype.j3r = function (index) {
    return _get_original__l7ku1m(this).j3r(index);
  };
  defer$1.prototype.i3r = function (name) {
    return _get_original__l7ku1m(this).i3r(name);
  };
  defer$1.prototype.g3r = function (index) {
    return _get_original__l7ku1m(this).g3r(index);
  };
  defer$1.prototype.h3r = function (index) {
    return _get_original__l7ku1m(this).h3r(index);
  };
  defer$1.prototype.k3r = function (index) {
    return _get_original__l7ku1m(this).k3r(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(sb) {
    this.u4b_1 = sb;
    this.v4b_1 = true;
  }
  Composer.prototype.w4b = function () {
    this.v4b_1 = true;
  };
  Composer.prototype.x4b = function () {
    return Unit_getInstance();
  };
  Composer.prototype.y4b = function () {
    this.v4b_1 = false;
  };
  Composer.prototype.z4b = function () {
    return Unit_getInstance();
  };
  Composer.prototype.a4c = function (v) {
    return this.u4b_1.s40(v);
  };
  Composer.prototype.b4c = function (v) {
    return this.u4b_1.c4c(v);
  };
  Composer.prototype.d4c = function (v) {
    return this.u4b_1.c4c(v.toString());
  };
  Composer.prototype.e4c = function (v) {
    return this.u4b_1.c4c(v.toString());
  };
  Composer.prototype.f4c = function (v) {
    return this.u4b_1.t41(toLong_0(v));
  };
  Composer.prototype.g4c = function (v) {
    return this.u4b_1.t41(toLong_0(v));
  };
  Composer.prototype.h4c = function (v) {
    return this.u4b_1.t41(toLong_0(v));
  };
  Composer.prototype.i4c = function (v) {
    return this.u4b_1.t41(v);
  };
  Composer.prototype.j4c = function (v) {
    return this.u4b_1.c4c(v.toString());
  };
  Composer.prototype.k4c = function (value) {
    return this.u4b_1.l4c(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.s48_1.i4a_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(sb) {
    Composer.call(this, sb);
  }
  ComposerForUnsignedNumbers.prototype.h4c = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    return Composer.prototype.b4c.call(this, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.i4c = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    return Composer.prototype.b4c.call(this, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.f4c = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    return Composer.prototype.b4c.call(this, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.g4c = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(v);
    return Composer.prototype.b4c.call(this, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(sb, json) {
    Composer.call(this, sb);
    this.q4c_1 = json;
    this.r4c_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.w4b = function () {
    this.v4b_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r4c_1;
    tmp0_this.r4c_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.x4b = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.r4c_1;
    tmp0_this.r4c_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.y4b = function () {
    this.v4b_1 = false;
    this.b4c('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.r4c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.b4c(this.q4c_1.s48_1.k4a_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.z4b = function () {
    this.a4c(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.t4c_1 = !descriptor.k3r(index) ? descriptor.h3r(index).u3q() : false;
    return $this.t4c_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.s4c_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.t4c_1 = false;
  }
  JsonElementMarker.prototype.k3y = function (index) {
    this.s4c_1.k3y(index);
  };
  JsonElementMarker.prototype.l3y = function () {
    return this.s4c_1.l3y();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.b3r() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.f3r() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.u4c(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.u3q() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.f3r(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.i3r(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.s48_1.p4a_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.w4c(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.i2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    Companion_getInstance_0();
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.b3r() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonNameIndexOrThrow$default(_this__u8e3s4, json, name, suffix, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      suffix = '';
    return getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix);
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.d3r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.g3r(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.b(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x4c_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.d3r());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).c2(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.j3r(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.j3r(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.a(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.a4d_1, 2);
    $this.y4c_1 = copyOf($this.y4c_1, newSize);
    $this.z4c_1 = copyOf_0($this.z4c_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.y4c_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.z4c_1 = tmp_3;
    this.a4d_1 = -1;
  }
  JsonPath.prototype.b4d = function (sd) {
    var tmp0_this = this;
    tmp0_this.a4d_1 = tmp0_this.a4d_1 + 1 | 0;
    var depth = tmp0_this.a4d_1;
    if (depth === this.y4c_1.length) {
      resize(this);
    }
    this.y4c_1[depth] = sd;
  };
  JsonPath.prototype.c4d = function (index) {
    this.z4c_1[this.a4d_1] = index;
  };
  JsonPath.prototype.d4d = function (key) {
    var tmp;
    if (!(this.z4c_1[this.a4d_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.a4d_1 = tmp0_this.a4d_1 + 1 | 0;
      tmp = tmp0_this.a4d_1 === this.y4c_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.y4c_1[this.a4d_1] = key;
    this.z4c_1[this.a4d_1] = -2;
  };
  JsonPath.prototype.e4d = function () {
    if (this.z4c_1[this.a4d_1] === -2) {
      this.y4c_1[this.a4d_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.f4d = function () {
    var depth = this.a4d_1;
    if (this.z4c_1[depth] === -2) {
      this.z4c_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.a4d_1;
      tmp0_this.a4d_1 = tmp1 - 1 | 0;
    }
    if (!(this.a4d_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.a4d_1;
      tmp2_this.a4d_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.g4d = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.j6('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.a4d_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.y4c_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.f3r(), LIST_getInstance())) {
            if (!(this.z4c_1[index] === -1)) {
              tmp0_apply.j6('[');
              tmp0_apply.sf(this.z4c_1[index]);
              tmp0_apply.j6(']');
            }
          } else {
            var idx = this.z4c_1[index];
            if (idx >= 0) {
              tmp0_apply.j6('.');
              tmp0_apply.j6(element.j3r(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.j6('[');
            tmp0_apply.j6("'");
            tmp0_apply.sf(element);
            tmp0_apply.j6("'");
            tmp0_apply.j6(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.g4d();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.h4d_1.k4d(get_TC_BEGIN_OBJ());
    if ($this.h4d_1.l4d() === get_TC_COMMA()) {
      $this.h4d_1.u4c('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.h4d_1.m4d()) {
      var key = $this.i4d_1 ? $this.h4d_1.o4d() : $this.h4d_1.n4d();
      $this.h4d_1.k4d(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.p4d();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.a(key, element);
      lastToken = $this.h4d_1.q4d();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.h4d_1.u4c('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.h4d_1.k4d(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.h4d_1.u4c('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function readArray($this) {
    var lastToken = $this.h4d_1.q4d();
    if ($this.h4d_1.l4d() === get_TC_COMMA()) {
      $this.h4d_1.u4c('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.h4d_1.m4d()) {
      var element = $this.p4d();
      result.b(element);
      lastToken = $this.h4d_1.q4d();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.h4d_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.m49_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.u4c(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.h4d_1.k4d(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.h4d_1.u4c('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.i4d_1 ? true : !isString) {
      tmp = $this.h4d_1.o4d();
    } else {
      tmp = $this.h4d_1.n4d();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.m4e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.r4e = function ($this$$receiver, it, $cont) {
    var tmp = this.s4e($this$$receiver, it, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.h7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.r4e(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.p4e_1 = this.m4e_1.h4d_1.l4d();
            if (this.p4e_1 === get_TC_STRING()) {
              this.q4e_1 = readValue(this.m4e_1, true);
              this.jh_1 = 2;
              continue $sm;
            } else {
              if (this.p4e_1 === get_TC_OTHER()) {
                this.q4e_1 = readValue(this.m4e_1, false);
                this.jh_1 = 2;
                continue $sm;
              } else {
                if (this.p4e_1 === get_TC_BEGIN_OBJ()) {
                  this.jh_1 = 1;
                  suspendResult = readObject_0(this.n4e_1, this.m4e_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.p4e_1 === get_TC_BEGIN_LIST()) {
                    this.q4e_1 = readArray(this.m4e_1);
                    this.jh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.m4e_1.h4d_1.u4c("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.q4e_1 = suspendResult;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            return this.q4e_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.s4e = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.m4e_1, completion);
    i.n4e_1 = $this$$receiver;
    i.o4e_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.r4e($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4d_1 = _this__u8e3s4;
    this.a4e_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 5;
            this.b4e_1 = this.z4d_1.h4d_1.k4d(get_TC_BEGIN_OBJ());
            if (this.z4d_1.h4d_1.l4d() === get_TC_COMMA()) {
              this.z4d_1.h4d_1.u4c('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.c4e_1 = LinkedHashMap_init_$Create$();
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!this.z4d_1.h4d_1.m4d()) {
              this.jh_1 = 4;
              continue $sm;
            }

            this.d4e_1 = this.z4d_1.i4d_1 ? this.z4d_1.h4d_1.o4d() : this.z4d_1.h4d_1.n4d();
            this.z4d_1.h4d_1.k4d(get_TC_COLON());
            ;
            this.jh_1 = 2;
            suspendResult = this.a4e_1.z6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.c4e_1.a(this.d4e_1, element);
            ;
            this.b4e_1 = this.z4d_1.h4d_1.q4d();
            var tmp0_subject = this.b4e_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.jh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.jh_1 = 4;
                continue $sm;
              } else {
                this.z4d_1.h4d_1.u4c('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.jh_1 = 1;
            continue $sm;
          case 4:
            if (this.b4e_1 === get_TC_BEGIN_OBJ()) {
              this.z4d_1.h4d_1.k4d(get_TC_END_OBJ());
            } else if (this.b4e_1 === get_TC_COMMA()) {
              this.z4d_1.h4d_1.u4c('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.c4e_1);
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
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.h4d_1 = lexer;
    this.i4d_1 = configuration.g4a_1;
    this.j4d_1 = 0;
  }
  JsonTreeReader.prototype.p4d = function () {
    var token = this.h4d_1.l4d();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.j4d_1 = tmp0_this.j4d_1 + 1 | 0;
      if (tmp0_this.j4d_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.j4d_1 = tmp1_this.j4d_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.h4d_1.u4c(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.s4a().s48_1.m4a_1;
    }
    if (tmp) {
      serializer.w3p(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.v3p(), _this__u8e3s4.s4a());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.v3p().f3r());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.w3p(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.s4a().s48_1.m4a_1;
    }
    if (tmp) {
      return deserializer.x3p(_this__u8e3s4);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.t4a();
    var tmp1_cast = deserializer.v3p();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.b3r() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer.v3p(), _this__u8e3s4.s4a());
    var tmp0_safe_receiver = jsonTree.v1q(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1w();
    var tmp2_elvis_lhs = deserializer.a3q(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.s4a();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.c3r().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.t4e_1;
    }
    return json.s48_1.n4a_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.v3p()).l1(classDiscriminator)) {
      var baseName = serializer.v3p().b3r();
      var actualName = actualSerializer.v3p().b3r();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.f3r();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.nd() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.u4e_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.nd() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.d3r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.j3r(i);
        if (name === $this.v4e_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.u4e_1 = useArrayPolymorphism;
    this.v4e_1 = discriminator;
  }
  PolymorphismValidator.prototype.g46 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.j46 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.v3p();
    checkKind_0(this, descriptor, actualClass);
    if (!this.u4e_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.k46 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.l46 = function (baseClass, defaultDeserializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.v4c_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.w4e = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.v4c_1;
    var value_0 = tmp0_getOrPut.i2(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.a(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.a(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.w4c = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.x4e(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.w4e(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.x4e = function (descriptor, key) {
    var tmp0_safe_receiver = this.v4c_1.i2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.i2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.h3t(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.h49_1.l4d() === get_TC_COMMA()) {
      $this.h49_1.u4c('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.j49_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.j49_1 === -1)) {
        hasComma = $this.h49_1.z4e();
      }
    } else {
      $this.h49_1.y4e(get_COLON());
    }
    var tmp;
    if ($this.h49_1.m4d()) {
      if (decodingKey) {
        if ($this.j49_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.h49_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.m49_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.u4c(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.h49_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.m49_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.u4c(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.j49_1 = tmp0_this.j49_1 + 1 | 0;
      tmp = tmp0_this.j49_1;
    } else {
      if (hasComma) {
        $this.h49_1.u4c("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.f49_1;
      var tmp1_tryCoerceValue = descriptor.h3r(index);
      var tmp;
      if (!tmp1_tryCoerceValue.u3q()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.h49_1.a4f();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.f3r(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.h49_1.b4f($this.k49_1.g4a_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.h49_1.n4d();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.h49_1.z4e();
    while ($this.h49_1.m4d()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.h49_1.y4e(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.f49_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.k49_1.l4a_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.h49_1.z4e();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.l49_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.k3y(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.h49_1.u4c('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.l49_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l3y();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.k49_1.f4a_1) {
      $this.h49_1.d4f($this.k49_1.g4a_1);
    } else {
      $this.h49_1.c4f(key);
    }
    return $this.h49_1.z4e();
  }
  function decodeListIndex($this) {
    var hasComma = $this.h49_1.z4e();
    var tmp;
    if ($this.h49_1.m4d()) {
      if (!($this.j49_1 === -1) ? !hasComma : false) {
        $this.h49_1.u4c('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.j49_1 = tmp0_this.j49_1 + 1 | 0;
      tmp = tmp0_this.j49_1;
    } else {
      if (hasComma) {
        $this.h49_1.u4c('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.k49_1.g4a_1) {
      tmp = $this.h49_1.f4f();
    } else {
      tmp = $this.h49_1.e4f();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.f49_1 = json;
    this.g49_1 = mode;
    this.h49_1 = lexer;
    this.i49_1 = this.f49_1.p3q();
    this.j49_1 = -1;
    this.k49_1 = this.f49_1.s48_1;
    this.l49_1 = this.k49_1.j4a_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.s4a = function () {
    return this.f49_1;
  };
  StreamingJsonDecoder.prototype.g4f = function () {
    return this.h49_1;
  };
  StreamingJsonDecoder.prototype.p3q = function () {
    return this.i49_1;
  };
  StreamingJsonDecoder.prototype.t4a = function () {
    return (new JsonTreeReader(this.f49_1.s48_1, this.h49_1)).p4d();
  };
  StreamingJsonDecoder.prototype.r3s = function (deserializer) {
    try {
      return decodeSerializableValuePolymorphic(this, deserializer);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException(plus($p.message, ' at path: ') + this.h49_1.n49_1.g4d(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.s3s = function (descriptor) {
    var newMode = switchMode(this.f49_1, descriptor);
    this.h49_1.n49_1.b4d(descriptor);
    this.h49_1.y4e(newMode.j4f_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.m4_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.f49_1, newMode, this.h49_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.g49_1.equals(newMode) ? this.f49_1.s48_1.j4a_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.f49_1, newMode, this.h49_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.t3s = function (descriptor) {
    if (this.f49_1.s48_1.f4a_1 ? descriptor.d3r() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.h49_1.y4e(this.g49_1.k4f_1);
    this.h49_1.n49_1.f4d();
  };
  StreamingJsonDecoder.prototype.d3s = function () {
    var tmp;
    var tmp0_safe_receiver = this.l49_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t4c_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.h49_1.a4f();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.e3s = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.d3t = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.g49_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.h49_1.n49_1.e4d();
    }
    var value = AbstractDecoder.prototype.d3t.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.h49_1.n49_1.d4d(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.h3t = function (descriptor) {
    var tmp0_subject = this.g49_1;
    var tmp0 = tmp0_subject.m4_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.g49_1.equals(WriteMode_MAP_getInstance())) {
      this.h49_1.n49_1.c4d(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.f3s = function () {
    var tmp;
    if (this.k49_1.g4a_1) {
      tmp = this.h49_1.m4f();
    } else {
      tmp = this.h49_1.l4f();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.g3s = function () {
    var value = this.h49_1.n4f();
    if (!value.equals(toLong_0(value.ah()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.h49_1.u4c(tmp, 0, null, 6, null);
    }
    return value.ah();
  };
  StreamingJsonDecoder.prototype.h3s = function () {
    var value = this.h49_1.n4f();
    if (!value.equals(toLong_0(value.bh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.h49_1.u4c(tmp, 0, null, 6, null);
    }
    return value.bh();
  };
  StreamingJsonDecoder.prototype.i3s = function () {
    var value = this.h49_1.n4f();
    if (!value.equals(toLong_0(value.i8()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.h49_1.u4c(tmp, 0, null, 6, null);
    }
    return value.i8();
  };
  StreamingJsonDecoder.prototype.j3s = function () {
    return this.h49_1.n4f();
  };
  StreamingJsonDecoder.prototype.k3s = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.h49_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.f49_1.s48_1.o4a_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.h49_1, result);
  };
  StreamingJsonDecoder.prototype.l3s = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.h49_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.f49_1.s48_1.o4a_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.h49_1, result);
  };
  StreamingJsonDecoder.prototype.m3s = function () {
    var string = this.h49_1.o4d();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.h49_1.u4c(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.n3s = function () {
    var tmp;
    if (this.k49_1.g4a_1) {
      tmp = this.h49_1.f4f();
    } else {
      tmp = this.h49_1.n4d();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.p3s = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.h49_1, this.f49_1) : AbstractDecoder.prototype.p3s.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.prototype.o3s = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.f49_1, this.n3s(), ' at path ' + this.h49_1.n49_1.g4d());
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.o4d();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.u4c(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.o4f_1 = lexer;
    this.p4f_1 = json.p3q();
  }
  JsonDecoderForUnsignedTypes.prototype.p3q = function () {
    return this.p4f_1;
  };
  JsonDecoderForUnsignedTypes.prototype.h3t = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.i3s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o4f_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.j3s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o4f_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.g3s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o4f_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.h3s = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o4f_1;
      var input = tmp0_parseString.o4d();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.u4c(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.w48_1.y4b();
    $this.u3t(ensureNotNull($this.d49_1));
    $this.w48_1.a4c(get_COLON());
    $this.w48_1.z4b();
    $this.u3t(descriptor.b3r());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.w48_1 = composer;
    this.x48_1 = json;
    this.y48_1 = mode;
    this.z48_1 = modeReuseCache;
    this.a49_1 = this.x48_1.p3q();
    this.b49_1 = this.x48_1.s48_1;
    this.c49_1 = false;
    this.d49_1 = null;
    var i = this.y48_1.m4_1;
    if (!(this.z48_1 == null)) {
      if (!(this.z48_1[i] === null) ? true : !(this.z48_1[i] === this)) {
        this.z48_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.s4a = function () {
    return this.x48_1;
  };
  StreamingJsonEncoder.prototype.p3q = function () {
    return this.a49_1;
  };
  StreamingJsonEncoder.prototype.m3u = function (descriptor, index) {
    return this.b49_1.e4a_1;
  };
  StreamingJsonEncoder.prototype.h3u = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.s4a().s48_1.m4a_1;
      }
      if (tmp) {
        serializer.w3p(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.v3p(), this.s4a());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.v3p().f3r());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.d49_1 = baseClassDiscriminator;
      actualSerializer.w3p(this, value);
    }
  };
  StreamingJsonEncoder.prototype.s3s = function (descriptor) {
    var newMode = switchMode(this.x48_1, descriptor);
    if (!equals(new Char(newMode.j4f_1), new Char(get_INVALID()))) {
      this.w48_1.a4c(newMode.j4f_1);
      this.w48_1.w4b();
    }
    if (!(this.d49_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.d49_1 = null;
    }
    if (this.y48_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.z48_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.m4_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.w48_1, this.x48_1, newMode, this.z48_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.t3s = function (descriptor) {
    if (!equals(new Char(this.y48_1.k4f_1), new Char(get_INVALID()))) {
      this.w48_1.x4b();
      this.w48_1.y4b();
      this.w48_1.a4c(this.y48_1.k4f_1);
    }
  };
  StreamingJsonEncoder.prototype.j3t = function (descriptor, index) {
    var tmp0_subject = this.y48_1;
    var tmp0 = tmp0_subject.m4_1;
    switch (tmp0) {
      case 1:
        if (!this.w48_1.v4b_1) {
          this.w48_1.a4c(get_COMMA());
        }

        this.w48_1.y4b();
        ;
        break;
      case 2:
        if (!this.w48_1.v4b_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.w48_1.a4c(get_COMMA());
            this.w48_1.y4b();
            tmp_0 = true;
          } else {
            this.w48_1.a4c(get_COLON());
            this.w48_1.z4b();
            tmp_0 = false;
          }
          tmp.c49_1 = tmp_0;
        } else {
          this.c49_1 = true;
          this.w48_1.y4b();
        }

        break;
      case 3:
        if (index === 0)
          this.c49_1 = true;
        if (index === 1) {
          this.w48_1.a4c(get_COMMA());
          this.w48_1.z4b();
          this.c49_1 = false;
        }

        break;
      default:
        if (!this.w48_1.v4b_1) {
          this.w48_1.a4c(get_COMMA());
        }

        this.w48_1.y4b();
        this.u3t(descriptor.j3r(index));
        this.w48_1.a4c(get_COLON());
        this.w48_1.z4b();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.i3u = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.b49_1.j4a_1) {
      AbstractEncoder.prototype.i3u.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.w3t = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.w48_1.u4b_1), this.x48_1, this.y48_1, null) : AbstractEncoder.prototype.w3t.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.l3t = function () {
    this.w48_1.b4c(get_NULL());
  };
  StreamingJsonEncoder.prototype.m3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.j4c(value);
    }
  };
  StreamingJsonEncoder.prototype.n3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.f4c(value);
    }
  };
  StreamingJsonEncoder.prototype.o3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.g4c(value);
    }
  };
  StreamingJsonEncoder.prototype.p3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.h4c(value);
    }
  };
  StreamingJsonEncoder.prototype.q3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.i4c(value);
    }
  };
  StreamingJsonEncoder.prototype.r3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.d4c(value);
    }
    if (!this.b49_1.o4a_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.w48_1.u4b_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.s3t = function (value) {
    if (this.c49_1) {
      this.u3t(value.toString());
    } else {
      this.w48_1.e4c(value);
    }
    if (!this.b49_1.o4a_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.w48_1.u4b_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.t3t = function (value) {
    this.u3t(toString_0(value));
  };
  StreamingJsonEncoder.prototype.u3t = function (value) {
    return this.w48_1.k4c(value);
  };
  StreamingJsonEncoder.prototype.v3t = function (enumDescriptor, index) {
    this.u3t(enumDescriptor.j3r(index));
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.e3r() ? get_unsignedNumberDescriptors().l1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).v3p(), serializer_0(Companion_getInstance()).v3p(), serializer_2(Companion_getInstance_2()).v3p(), serializer_3(Companion_getInstance_3()).v3p()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.h6(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.qf(value, lastPos, i);
          _this__u8e3s4.j6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.qf(value, lastPos, value.length);
    } else {
      _this__u8e3s4.j6(value);
    }
    _this__u8e3s4.h6(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.k44();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.v4f(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.t() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.s4f_1 = json;
    this.t4f_1 = value;
    this.u4f_1 = this.s4a().s48_1;
  }
  AbstractJsonTreeDecoder.prototype.s4a = function () {
    return this.s4f_1;
  };
  AbstractJsonTreeDecoder.prototype.t = function () {
    return this.t4f_1;
  };
  AbstractJsonTreeDecoder.prototype.p3q = function () {
    return this.s4a().p3q();
  };
  AbstractJsonTreeDecoder.prototype.t4a = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.r3s = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.l44 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.s3s = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.f3r();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.s4a();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.b3r() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.s4a();
        var keyDescriptor = carrierDescriptor(descriptor.h3r(0), tmp0_selectMapMode.p3q());
        var keyKind = keyDescriptor.f3r();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.s4a();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.b3r() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.s48_1.h4a_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.s4a();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.b3r() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.s4a();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.b3r() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.t3s = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.d3s = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.w4f = function (tag) {
    var currentElement = this.v4f(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.x4f = function (tag, enumDescriptor) {
    var tmp = this.s4a();
    var tmp_0 = this.w4f(tag).f1w();
    return getJsonNameIndexOrThrow$default(enumDescriptor, tmp, tmp_0, null, 4, null);
  };
  AbstractJsonTreeDecoder.prototype.x44 = function (tag, enumDescriptor) {
    return this.x4f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.y4f = function (tag) {
    return !(this.v4f(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.n44 = function (tag) {
    return this.y4f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z4f = function (tag) {
    var value = this.w4f(tag);
    if (!this.s4a().s48_1.g4a_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.y4a_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.o44 = function (tag) {
    return this.z4f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().c9_1;
        if (result <= ByteCompanionObject_getInstance().d9_1 ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.p44 = function (tag) {
    return this.a4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().k9_1;
        if (result <= ShortCompanionObject_getInstance().l9_1 ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.q44 = function (tag) {
    return this.b4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.r44 = function (tag) {
    return this.c4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.s44 = function (tag) {
    return this.d4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.s4a().s48_1.o4a_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.t44 = function (tag) {
    return this.e4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.s4a().s48_1.o4a_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.u44 = function (tag) {
    return this.f4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g4g = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.w4f(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.f1w());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.v44 = function (tag) {
    return this.g4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.h4g = function (tag) {
    var value = this.w4f(tag);
    if (!this.s4a().s48_1.g4a_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.y4a_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.f1w();
  };
  AbstractJsonTreeDecoder.prototype.w44 = function (tag) {
    return this.h4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i4g = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.w4f(tag).f1w()), this.s4a()) : NamedValueDecoder.prototype.y44.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.y44 = function (tag, inlineDescriptor) {
    return this.i4g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.s4a();
      var tmp1_tryCoerceValue = descriptor.h3r(index);
      var tmp;
      if (!tmp1_tryCoerceValue.u3q()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.v4f(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.f3r(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.v4f(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.s4g_1 = (!$this.s4a().s48_1.j4a_1 ? !descriptor.k3r(index) : false) ? descriptor.h3r(index).u3q() : false;
    return $this.s4g_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o4g_1 = value;
    this.p4g_1 = polyDiscriminator;
    this.q4g_1 = polyDescriptor;
    this.r4g_1 = 0;
    this.s4g_1 = false;
  }
  JsonTreeDecoder.prototype.t = function () {
    return this.o4g_1;
  };
  JsonTreeDecoder.prototype.h3t = function (descriptor) {
    while (this.r4g_1 < descriptor.d3r()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.r4g_1;
      tmp0_this.r4g_1 = tmp1 + 1 | 0;
      var name = this.f44(descriptor, tmp1);
      var index = this.r4g_1 - 1 | 0;
      this.s4g_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.t();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).c2(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.u4f_1.l4a_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.d3s = function () {
    return !this.s4g_1 ? AbstractJsonTreeDecoder.prototype.d3s.call(this) : false;
  };
  JsonTreeDecoder.prototype.g44 = function (desc, index) {
    var mainName = desc.j3r(index);
    if (!this.u4f_1.p4a_1)
      return mainName;
    if (this.t().j2().l1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.s4a());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.w4c(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.t().j2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.i2(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.v4f = function (tag) {
    return getValue(this.t(), tag);
  };
  JsonTreeDecoder.prototype.s3s = function (descriptor) {
    if (descriptor === this.q4g_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.s3s.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.t3s = function (descriptor) {
    var tmp;
    if (this.u4f_1.f4a_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.f3r();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.u4f_1.p4a_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.s4a()).x4e(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.t().j2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.l1(key) ? !(key === this.p4g_1) : false) {
        throw UnknownKeyException(key, this.t().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.y4g_1 = value;
    this.z4g_1 = this.y4g_1.g();
    this.a4h_1 = -1;
  }
  JsonTreeListDecoder.prototype.t = function () {
    return this.y4g_1;
  };
  JsonTreeListDecoder.prototype.g44 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.v4f = function (tag) {
    return this.y4g_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.h3t = function (descriptor) {
    while (this.a4h_1 < (this.z4g_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.a4h_1;
      tmp0_this.a4h_1 = tmp1 + 1 | 0;
      return this.a4h_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.l4h_1 = value;
    this.m4h_1 = toList(this.l4h_1.j2());
    this.n4h_1 = imul(this.m4h_1.g(), 2);
    this.o4h_1 = -1;
  }
  JsonTreeMapDecoder.prototype.t = function () {
    return this.l4h_1;
  };
  JsonTreeMapDecoder.prototype.g44 = function (desc, index) {
    var i = index / 2 | 0;
    return this.m4h_1.h(i);
  };
  JsonTreeMapDecoder.prototype.h3t = function (descriptor) {
    while (this.o4h_1 < (this.n4h_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.o4h_1;
      tmp0_this.o4h_1 = tmp1 + 1 | 0;
      return this.o4h_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.v4f = function (tag) {
    return (this.o4h_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.l4h_1, tag);
  };
  JsonTreeMapDecoder.prototype.t3s = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.v3p())).r3s(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.j4f_1 = begin;
    this.k4f_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.f3r();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.h3r(0), _this__u8e3s4.p3q());
          var keyKind = keyDescriptor.f3r();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.s48_1.h4a_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.h3r(0), _this__u8e3s4.p3q());
    var keyKind = keyDescriptor.f3r();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.s48_1.h4a_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.f3r(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.e3r()) {
      tmp = carrierDescriptor(_this__u8e3s4.h3r(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function appendEscape($this, lastPosition, current) {
    $this.p4h(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.p4h(lastPosition, currentPosition);
    var result = $this.p49_1.toString();
    $this.p49_1.tf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.o49_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.o49_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.q4h(), $this.m49_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.r4h(currentPosition);
    if (currentPosition === -1) {
      $this.u4c('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.q4h();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.q4h(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.u4c(tmp_0, 0, null, 6, null);
    }
    $this.p49_1.h6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.m49_1 = startPos;
      $this.s4h();
      if (($this.m49_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.u4c('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.m49_1);
    }
    $this.p49_1.h6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.u4c(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.r4h(start);
    if (current >= charSequenceLength($this.q4h()) ? true : current === -1) {
      $this.u4c('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.q4h();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.o4d() + "'";
        $this.u4c(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.q4h()) - current | 0) < literalSuffix.length) {
      $this.u4c('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.q4h(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.o4d() + "'";
          $this.u4c(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.m49_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.m49_1 = 0;
    this.n49_1 = new JsonPath();
    this.o49_1 = null;
    this.p49_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.s4h = function () {
  };
  AbstractJsonLexer.prototype.t4h = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.q49 = function () {
    var nextToken = this.q4d();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.q4h(), this.m49_1 - 1 | 0)) + ' instead';
      this.u4c(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.k4d = function (expected) {
    var token = this.q4d();
    if (!(token === expected)) {
      this.u4h(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.y4e = function (expected) {
    this.s4h();
    var source = this.q4h();
    var cpos = this.m49_1;
    $l$loop_0: while (true) {
      cpos = this.r4h(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.m49_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.v4h(expected);
    }
    this.m49_1 = cpos;
    this.v4h(expected);
  };
  AbstractJsonLexer.prototype.v4h = function (expected) {
    var tmp0_this = this;
    tmp0_this.m49_1 = tmp0_this.m49_1 - 1 | 0;
    if ((this.m49_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.o4d() === 'null' : false) {
      this.w4h("Expected string literal but 'null' literal was found", this.m49_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.u4h(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.u4h = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.m49_1 === charSequenceLength(this.q4h()) ? true : this.m49_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.q4h(), this.m49_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.m49_1 - 1 | 0;
    this.u4c(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.l4d = function () {
    var source = this.q4h();
    var cpos = this.m49_1;
    $l$loop_0: while (true) {
      cpos = this.r4h(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.m49_1 = cpos;
      return charToTokenClass(ch);
    }
    this.m49_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.a4f = function () {
    var current = this.x4h();
    current = this.r4h(current);
    var len = charSequenceLength(this.q4h()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.q4h(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.q4h(), current + 4 | 0)) === 0 : false)
      return true;
    this.m49_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.x4h = function () {
    var current = this.m49_1;
    $l$loop_0: while (true) {
      current = this.r4h(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.q4h(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.m49_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.b4f = function (isLenient) {
    var token = this.l4d();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.o4d();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.n4d();
    }
    var string = tmp;
    this.o49_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.y4h = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.q4h();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.n4d = function () {
    if (!(this.o49_1 == null)) {
      return takePeeked(this);
    }
    return this.e4f();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.r4h(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.u4c('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.p4h(lastPosition, currentPosition);
          currentPosition = this.r4h(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.u4c('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.y4h(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.m49_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.f4f = function () {
    var result = this.o4d();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.u4c("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.o4d = function () {
    if (!(this.o49_1 == null)) {
      return takePeeked(this);
    }
    var current = this.x4h();
    if (current >= charSequenceLength(this.q4h()) ? true : current === -1) {
      var tmp = current;
      this.u4c('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.q4h(), current));
    if (token === 1) {
      return this.n4d();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.q4h(), current));
      this.u4c(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.q4h(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.q4h())) {
        usedAppend = true;
        this.p4h(this.m49_1, current);
        var eof = this.r4h(current);
        if (eof === -1) {
          this.m49_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.y4h(this.m49_1, current);
    } else {
      tmp_1 = decodedString(this, this.m49_1, current);
    }
    var result = tmp_1;
    this.m49_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.p4h = function (fromIndex, toIndex) {
    this.p49_1.qf(this.q4h(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.z4h = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.u4c(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.d4f = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.l4d();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.o4d();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.l4d();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.o4d();
        } else {
          this.e4f();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.m49_1, 'found ] instead of } at path: ' + this.n49_1, this.q4h());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.m49_1, 'found } instead of ] at path: ' + this.n49_1, this.q4h());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.u4c('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.q4d();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.q4h() + "', currentPosition=" + this.m49_1 + ')';
  };
  AbstractJsonLexer.prototype.c4f = function (key) {
    var processed = this.y4h(0, this.m49_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.w4h("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.w4h = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.n49_1.g4d() + hintMessage, this.q4h());
  };
  AbstractJsonLexer.prototype.u4c = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.m49_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.w4h(message, position, hint);
  };
  AbstractJsonLexer.prototype.n4f = function () {
    var current = this.x4h();
    current = this.r4h(current);
    if (current >= charSequenceLength(this.q4h()) ? true : current === -1) {
      this.u4c('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.q4h(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.q4h())) {
        this.u4c('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.q4h(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.u4c("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.q4h()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.u4c(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.m6(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.o6(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.b1(new Long(0, 0)) > 0) {
        this.u4c('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.u4c('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.u4c('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.q4h(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.u4c('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.m49_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.k6();
      } else {
        this.u4c('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.l4f = function () {
    return consumeBoolean(this, this.x4h());
  };
  AbstractJsonLexer.prototype.m4f = function () {
    var current = this.x4h();
    if (current === charSequenceLength(this.q4h())) {
      this.u4c('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.q4h(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.m49_1 === charSequenceLength(this.q4h())) {
        this.u4c('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.q4h(), this.m49_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.u4c('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.m49_1 = tmp0_this.m49_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().b4i_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().a4i_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.a4i_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.b4i_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.a4i_1 = charArray(117);
    this.b4i_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.g4i_1 = source;
  }
  StringJsonLexer.prototype.q4h = function () {
    return this.g4i_1;
  };
  StringJsonLexer.prototype.r4h = function (position) {
    return position < this.g4i_1.length ? position : -1;
  };
  StringJsonLexer.prototype.q4d = function () {
    var source = this.g4i_1;
    $l$loop: while (!(this.m49_1 === -1) ? this.m49_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m49_1;
      tmp0_this.m49_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.z4e = function () {
    var current = this.x4h();
    if (current === this.g4i_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.g4i_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.m49_1 = tmp0_this.m49_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.m4d = function () {
    var current = this.m49_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.g4i_1.length) {
      var c = charSequenceGet(this.g4i_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.m49_1 = current;
      return this.t4h(c);
    }
    this.m49_1 = current;
    return false;
  };
  StringJsonLexer.prototype.x4h = function () {
    var current = this.m49_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.g4i_1.length) {
      var c = charSequenceGet(this.g4i_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.m49_1 = current;
    return current;
  };
  StringJsonLexer.prototype.y4e = function (expected) {
    if (this.m49_1 === -1) {
      this.v4h(expected);
    }
    var source = this.g4i_1;
    $l$loop: while (this.m49_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m49_1;
      tmp0_this.m49_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.v4h(expected);
    }
    this.v4h(expected);
  };
  StringJsonLexer.prototype.e4f = function () {
    this.y4e(get_STRING());
    var current = this.m49_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.g4i_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.u4h(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.g4i_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.g4i_1, this.m49_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.m49_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.g4i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.u48_1;
  }
  function JsonStringBuilder() {
    this.e49_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.t41 = function (value) {
    this.e49_1.sf(value);
  };
  JsonStringBuilder.prototype.s40 = function (ch) {
    this.e49_1.h6(ch);
  };
  JsonStringBuilder.prototype.c4c = function (string) {
    this.e49_1.j6(string);
  };
  JsonStringBuilder.prototype.l4c = function (string) {
    printQuoted(this.e49_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.e49_1.toString();
  };
  JsonStringBuilder.prototype.kr = function () {
  };
  JsonStringBuilder.$metadata$ = classMeta('JsonStringBuilder');
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.u3q = get_isNullable;
  defer$1.prototype.e3r = get_isInline;
  defer$1.prototype.c3r = get_annotations;
  PolymorphismValidator.prototype.i46 = contextual;
  StreamingJsonDecoder.prototype.e3t = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.g3t = decodeSequentially;
  StreamingJsonDecoder.prototype.i3t = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.r3s = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.e3t = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.g3t = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.i3t = decodeCollectionSize;
  StreamingJsonEncoder.prototype.k3u = encodeNotNullMark;
  StreamingJsonEncoder.prototype.l3u = beginCollection;
  StreamingJsonEncoder.prototype.j3u = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.e3t = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.g3t = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.i3t = decodeCollectionSize;
  JsonTreeDecoder.prototype.e3t = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.g3t = decodeSequentially;
  JsonTreeDecoder.prototype.i3t = decodeCollectionSize;
  JsonTreeListDecoder.prototype.e3t = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.g3t = decodeSequentially;
  JsonTreeListDecoder.prototype.i3t = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.e3t = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.g3t = decodeSequentially;
  JsonTreeMapDecoder.prototype.i3t = decodeCollectionSize;
  //endregion
  //region block: init
  COLON = _Char___init__impl__6a9atx(58);
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_COMMA = 4;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
