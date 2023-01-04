(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.t8;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var emptyList = kotlin_kotlin.$_$.n5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.qc;
  var classMeta = kotlin_kotlin.$_$.k8;
  var KProperty1 = kotlin_kotlin.$_$.ca;
  var getPropertyCallableRef = kotlin_kotlin.$_$.q8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.e8;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.x1;
  var IllegalArgumentException = kotlin_kotlin.$_$.sb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.y4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.q9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var isInterface = kotlin_kotlin.$_$.c9;
  var KClass = kotlin_kotlin.$_$.aa;
  var copyToArray = kotlin_kotlin.$_$.l5;
  var Triple = kotlin_kotlin.$_$.ac;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.wb;
  var Entry = kotlin_kotlin.$_$.m4;
  var LinkedHashMap = kotlin_kotlin.$_$.j4;
  var MutableMap = kotlin_kotlin.$_$.r4;
  var Map = kotlin_kotlin.$_$.n4;
  var HashMap = kotlin_kotlin.$_$.f4;
  var LinkedHashSet = kotlin_kotlin.$_$.k4;
  var MutableSet = kotlin_kotlin.$_$.s4;
  var Set = kotlin_kotlin.$_$.t4;
  var HashSet = kotlin_kotlin.$_$.g4;
  var ArrayList = kotlin_kotlin.$_$.d4;
  var MutableList = kotlin_kotlin.$_$.p4;
  var List = kotlin_kotlin.$_$.l4;
  var Collection = kotlin_kotlin.$_$.e4;
  var equals = kotlin_kotlin.$_$.m8;
  var getStringHashCode = kotlin_kotlin.$_$.r8;
  var Iterator = kotlin_kotlin.$_$.i4;
  var Iterable = kotlin_kotlin.$_$.h4;
  var isBlank = kotlin_kotlin.$_$.ka;
  var toList = kotlin_kotlin.$_$.x6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toHashSet = kotlin_kotlin.$_$.u6;
  var toBooleanArray = kotlin_kotlin.$_$.t6;
  var withIndex = kotlin_kotlin.$_$.d7;
  var to = kotlin_kotlin.$_$.wc;
  var toMap = kotlin_kotlin.$_$.y6;
  var lazy_0 = kotlin_kotlin.$_$.rc;
  var contentEquals = kotlin_kotlin.$_$.z4;
  var until = kotlin_kotlin.$_$.z9;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var ensureNotNull = kotlin_kotlin.$_$.lc;
  var Long = kotlin_kotlin.$_$.ub;
  var Char = kotlin_kotlin.$_$.kb;
  var isObject = kotlin_kotlin.$_$.f9;
  var toIntOrNull = kotlin_kotlin.$_$.xa;
  var hashCode = kotlin_kotlin.$_$.s8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var isArray = kotlin_kotlin.$_$.u8;
  var arrayIterator = kotlin_kotlin.$_$.c8;
  var asList = kotlin_kotlin.$_$.w4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var step = kotlin_kotlin.$_$.y9;
  var getValue = kotlin_kotlin.$_$.v5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var longArray = kotlin_kotlin.$_$.j9;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var get_lastIndex = kotlin_kotlin.$_$.z5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.jc;
  var indexOf = kotlin_kotlin.$_$.w5;
  var contentToString = kotlin_kotlin.$_$.b5;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c3;
  var UInt = kotlin_kotlin.$_$.cc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f3;
  var ULong = kotlin_kotlin.$_$.dc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var UByte = kotlin_kotlin.$_$.bc;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var UShort = kotlin_kotlin.$_$.ec;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var KTypeParameter = kotlin_kotlin.$_$.da;
  var contentHashCode = kotlin_kotlin.$_$.a5;
  var fillArrayVal = kotlin_kotlin.$_$.o8;
  var booleanArray = kotlin_kotlin.$_$.d8;
  var emptyMap = kotlin_kotlin.$_$.o5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.v3;
  var isCharArray = kotlin_kotlin.$_$.x8;
  var charArray = kotlin_kotlin.$_$.g8;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var isDoubleArray = kotlin_kotlin.$_$.z8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p3;
  var isFloatArray = kotlin_kotlin.$_$.a9;
  var isLongArray = kotlin_kotlin.$_$.d9;
  var isIntArray = kotlin_kotlin.$_$.b9;
  var isShortArray = kotlin_kotlin.$_$.g9;
  var isByteArray = kotlin_kotlin.$_$.w8;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.m3;
  var isBooleanArray = kotlin_kotlin.$_$.v8;
  var coerceAtLeast = kotlin_kotlin.$_$.s9;
  var copyOf = kotlin_kotlin.$_$.f5;
  var copyOf_0 = kotlin_kotlin.$_$.h5;
  var copyOf_1 = kotlin_kotlin.$_$.i5;
  var copyOf_2 = kotlin_kotlin.$_$.d5;
  var copyOf_3 = kotlin_kotlin.$_$.k5;
  var copyOf_4 = kotlin_kotlin.$_$.c5;
  var copyOf_5 = kotlin_kotlin.$_$.g5;
  var copyOf_6 = kotlin_kotlin.$_$.e5;
  var Unit = kotlin_kotlin.$_$.fc;
  var trimIndent = kotlin_kotlin.$_$.hb;
  var equals_0 = kotlin_kotlin.$_$.ia;
  var charSequenceLength = kotlin_kotlin.$_$.i8;
  var charSequenceGet = kotlin_kotlin.$_$.h8;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var titlecase = kotlin_kotlin.$_$.ua;
  var isLowerCase = kotlin_kotlin.$_$.na;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  var mapOf = kotlin_kotlin.$_$.h6;
  var lastOrNull = kotlin_kotlin.$_$.c6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.a6;
  var Annotation = kotlin_kotlin.$_$.jb;
  var get_indices = kotlin_kotlin.$_$.y5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var get_indices_0 = kotlin_kotlin.$_$.x5;
  var get_js = kotlin_kotlin.$_$.i9;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.x3p(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.d3t(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.s3s(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.w3p(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.v3p().u3q();
    if (isNullabilitySupported) {
      return this.h3u(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.l3t();
    } else {
      this.k3u();
      this.h3u(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.g46(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.y3p(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.z3p());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.a3q(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.z3p());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).v3p();
      $this$buildSerialDescriptor.j3q('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.k3q_1.nd() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.j3q('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.d3q_1 = this$0.l3q_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.k3q_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.k3q_1 = baseClass;
    this.l3q_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m3q_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.z3p = function () {
    return this.k3q_1;
  };
  PolymorphicSerializer.prototype.v3p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.m3q_1.t();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.k3q_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.v3p();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = interfaceMeta('BinaryFormat', [SerialFormat]);
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.g() === 1 ? "Field '" + fieldNames.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializerOrNull(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.yd();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.xd();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.e6_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.b(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.m()) {
      var tmp0_elvis_lhs = serializerOrNull_0(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.s3q(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.d();
      while (tmp0_iterator.e()) {
        var item = tmp0_iterator.f();
        tmp0_mapTo.b(serializer_0(_this__u8e3s4, item));
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.d();
      while (tmp0_iterator_0.e()) {
        var item_0 = tmp0_iterator_0.f();
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.builtinSerializer.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$2 = tmp_0;
        tmp0_mapTo_0.b(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo_0;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp_2 = typeArguments.h(0).wd();
        var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.h(0));
        tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        return tmp$ret$5;
      }
      var tmp$ret$6;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$6 = copyToArray(serializers);
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull_0(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.t3q(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.v3p().u3q()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.s3q(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.v3p();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.z3q_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.v3q_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.y3q_1 = original;
    this.z3q_1 = kClass;
    this.a3r_1 = this.y3q_1.b3r() + '<' + this.z3q_1.nd() + '>';
  }
  ContextDescriptor.prototype.c3r = function () {
    return this.y3q_1.c3r();
  };
  ContextDescriptor.prototype.d3r = function () {
    return this.y3q_1.d3r();
  };
  ContextDescriptor.prototype.e3r = function () {
    return this.y3q_1.e3r();
  };
  ContextDescriptor.prototype.u3q = function () {
    return this.y3q_1.u3q();
  };
  ContextDescriptor.prototype.f3r = function () {
    return this.y3q_1.f3r();
  };
  ContextDescriptor.prototype.g3r = function (index) {
    return this.y3q_1.g3r(index);
  };
  ContextDescriptor.prototype.h3r = function (index) {
    return this.y3q_1.h3r(index);
  };
  ContextDescriptor.prototype.i3r = function (name) {
    return this.y3q_1.i3r(name);
  };
  ContextDescriptor.prototype.j3r = function (index) {
    return this.y3q_1.j3r(index);
  };
  ContextDescriptor.prototype.k3r = function (index) {
    return this.y3q_1.k3r(index);
  };
  ContextDescriptor.prototype.b3r = function () {
    return this.a3r_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.y3q_1, another.y3q_1) ? another.z3q_1.equals(this.z3q_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.z3q_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.a3r_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.z3q_1 + ', original: ' + this.y3q_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.m3r_1 = $this_elementDescriptors;
    this.l3r_1 = $this_elementDescriptors.d3r();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.l3r_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.m3r_1.d3r();
    var tmp0_this = this;
    var tmp1 = tmp0_this.l3r_1;
    tmp0_this.l3r_1 = tmp1 - 1 | 0;
    return this.m3r_1.h3r(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.n3r_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.n3r_1);
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.e3q_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.b3q_1 = serialName;
    this.c3q_1 = false;
    this.d3q_1 = emptyList();
    this.e3q_1 = ArrayList_init_$Create$_0();
    this.f3q_1 = HashSet_init_$Create$();
    this.g3q_1 = ArrayList_init_$Create$_0();
    this.h3q_1 = ArrayList_init_$Create$_0();
    this.i3q_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.o3r = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.f3q_1.b(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.e3q_1;
    tmp1_plusAssign.b(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.g3q_1;
    tmp2_plusAssign.b(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.h3q_1;
    tmp3_plusAssign.b(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.i3q_1;
    tmp4_plusAssign.b(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.j3q = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.o3r(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.a3s_1.t();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.z3r_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.j3r(it) + ': ' + this$0.h3r(it).b3r();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.p3r_1 = serialName;
    this.q3r_1 = kind;
    this.r3r_1 = elementsCount;
    this.s3r_1 = builder.d3q_1;
    this.t3r_1 = toHashSet(builder.e3q_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.e3q_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.u3r_1 = tmp$ret$0;
    this.v3r_1 = compactArray(builder.g3q_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.h3q_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.w3r_1 = tmp$ret$1;
    this.x3r_1 = toBooleanArray(builder.i3q_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.u3r_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.v2_1, item.u2_1);
      tmp0_mapTo.b(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.y3r_1 = toMap(tmp$ret$4);
    this.z3r_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.a3s_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.b3r = function () {
    return this.p3r_1;
  };
  SerialDescriptorImpl.prototype.f3r = function () {
    return this.q3r_1;
  };
  SerialDescriptorImpl.prototype.d3r = function () {
    return this.r3r_1;
  };
  SerialDescriptorImpl.prototype.c3r = function () {
    return this.s3r_1;
  };
  SerialDescriptorImpl.prototype.b3s = function () {
    return this.t3r_1;
  };
  SerialDescriptorImpl.prototype.j3r = function (index) {
    return getChecked(this.u3r_1, index);
  };
  SerialDescriptorImpl.prototype.i3r = function (name) {
    var tmp0_elvis_lhs = this.y3r_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.g3r = function (index) {
    return getChecked(this.w3r_1, index);
  };
  SerialDescriptorImpl.prototype.h3r = function (index) {
    return getChecked(this.v3r_1, index);
  };
  SerialDescriptorImpl.prototype.k3r = function (index) {
    return getChecked_0(this.x3r_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b3r() === other.b3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.z3r_1, tmp0__anonymous__q1qw7t.z3r_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.d3r() === other.d3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.d3r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.h3r(index).b3r() === other.h3r(index).b3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.h3r(index).f3r(), other.h3r(index).f3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.r3r_1);
    var tmp_0 = this.p3r_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.e3q_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).nd());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.c3s = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.d3s = function () {
    return true;
  };
  AbstractDecoder.prototype.e3s = function () {
    return null;
  };
  AbstractDecoder.prototype.f3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.g3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.h3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.i3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.j3s = function () {
    var tmp = this.c3s();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.k3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.l3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.m3s = function () {
    var tmp = this.c3s();
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.n3s = function () {
    var tmp = this.c3s();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.o3s = function (enumDescriptor) {
    var tmp = this.c3s();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.p3s = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.q3s = function (deserializer, previousValue) {
    return this.r3s(deserializer);
  };
  AbstractDecoder.prototype.s3s = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.t3s = function (descriptor) {
  };
  AbstractDecoder.prototype.u3s = function (descriptor, index) {
    return this.f3s();
  };
  AbstractDecoder.prototype.v3s = function (descriptor, index) {
    return this.g3s();
  };
  AbstractDecoder.prototype.w3s = function (descriptor, index) {
    return this.h3s();
  };
  AbstractDecoder.prototype.x3s = function (descriptor, index) {
    return this.i3s();
  };
  AbstractDecoder.prototype.y3s = function (descriptor, index) {
    return this.j3s();
  };
  AbstractDecoder.prototype.z3s = function (descriptor, index) {
    return this.k3s();
  };
  AbstractDecoder.prototype.a3t = function (descriptor, index) {
    return this.l3s();
  };
  AbstractDecoder.prototype.b3t = function (descriptor, index) {
    return this.m3s();
  };
  AbstractDecoder.prototype.c3t = function (descriptor, index) {
    return this.n3s();
  };
  AbstractDecoder.prototype.d3t = function (descriptor, index, deserializer, previousValue) {
    return this.q3s(deserializer, previousValue);
  };
  AbstractDecoder.prototype.f3t = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.v3p().u3q();
    return (isNullabilitySupported ? true : this.d3s()) ? this.q3s(deserializer, previousValue) : this.e3s();
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.s3s = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.t3s = function (descriptor) {
  };
  AbstractEncoder.prototype.j3t = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.k3t = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.l3t = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.m3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.n3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.o3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.p3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.q3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.r3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.s3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.t3t = function (value) {
    return this.k3t(new Char(value));
  };
  AbstractEncoder.prototype.u3t = function (value) {
    return this.k3t(value);
  };
  AbstractEncoder.prototype.v3t = function (enumDescriptor, index) {
    return this.k3t(index);
  };
  AbstractEncoder.prototype.w3t = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.x3t = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.m3t(value);
    }
  };
  AbstractEncoder.prototype.y3t = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.n3t(value);
    }
  };
  AbstractEncoder.prototype.z3t = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.o3t(value);
    }
  };
  AbstractEncoder.prototype.a3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.p3t(value);
    }
  };
  AbstractEncoder.prototype.b3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.q3t(value);
    }
  };
  AbstractEncoder.prototype.c3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.r3t(value);
    }
  };
  AbstractEncoder.prototype.d3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.s3t(value);
    }
  };
  AbstractEncoder.prototype.e3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.t3t(value);
    }
  };
  AbstractEncoder.prototype.f3u = function (descriptor, index, value) {
    if (this.j3t(descriptor, index)) {
      this.u3t(value);
    }
  };
  AbstractEncoder.prototype.g3u = function (descriptor, index, serializer, value) {
    if (this.j3t(descriptor, index)) {
      this.h3u(serializer, value);
    }
  };
  AbstractEncoder.prototype.i3u = function (descriptor, index, serializer, value) {
    if (this.j3t(descriptor, index)) {
      this.j3u(serializer, value);
    }
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.n3u_1 = -1;
    this.o3u_1 = -3;
  }
  Companion.prototype.p3u = function () {
    return this.n3u_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.s3s(descriptor);
    var result = block(composite);
    composite.t3s(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.l3u(descriptor, collectionSize);
    block(composite);
    composite.t3s(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.s3s(descriptor);
    block(composite);
    composite.t3s(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.c3t($this.v3p(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.v3p();
    return compositeDecoder.e3t(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.w3p = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.v3p();
    var composite = encoder.s3s(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.f3u(this.v3p(), 0, actualSerializer.v3p().b3r());
    var tmp = this.v3p();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.g3u(tmp, 1, tmp$ret$0, value);
    composite.t3s(tmp0_encodeStructure);
  };
  AbstractPolymorphicSerializer.prototype.x3p = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.v3p();
    var composite = decoder.s3s(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.g3t()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.h3t(this.v3p());
        Companion_getInstance_1();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.c3t(this.v3p(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              var tmp = this.v3p();
              value = composite.e3t(tmp, index, serializer, null, 8, null);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp_0 = tmp$ret$4;
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.t3s(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.a3q = function (decoder, klassName) {
    return decoder.p3q().q3u(this.z3p(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.y3p = function (encoder, value) {
    return encoder.p3q().r3u(this.z3p(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.nd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.nd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.u3u_1 = primitive.b3r() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.b3r = function () {
    return this.u3u_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.b3r = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.v3u_1 = elementDescriptor;
    this.w3u_1 = 1;
  }
  ListLikeDescriptor.prototype.f3r = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.d3r = function () {
    return this.w3u_1;
  };
  ListLikeDescriptor.prototype.j3r = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.i3r = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.k3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.g3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.h3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.v3u_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.v3u_1, other.v3u_1) ? this.b3r() === other.b3r() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.v3u_1), 31) + getStringHashCode(this.b3r()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.b3r() + '(' + this.v3u_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.z3u_1 = serialName;
    this.a3v_1 = keyDescriptor;
    this.b3v_1 = valueDescriptor;
    this.c3v_1 = 2;
  }
  MapLikeDescriptor.prototype.b3r = function () {
    return this.z3u_1;
  };
  MapLikeDescriptor.prototype.f3r = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.d3r = function () {
    return this.c3v_1;
  };
  MapLikeDescriptor.prototype.j3r = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.i3r = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.k3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.g3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.h3r = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.b3r() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.a3v_1;
        break;
      case 1:
        tmp = this.b3v_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.b3r() === other.b3r()))
      return false;
    if (!equals(this.a3v_1, other.a3v_1))
      return false;
    if (!equals(this.b3v_1, other.b3v_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.b3r());
    result = imul(31, result) + hashCode(this.a3v_1) | 0;
    result = imul(31, result) + hashCode(this.b3v_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.b3r() + '(' + this.a3v_1 + ', ' + this.b3v_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.b3r = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.b3r = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.b3r = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.k3v_1 = new PrimitiveArrayDescriptor(primitiveSerializer.v3p());
  }
  PrimitiveArraySerializer.prototype.v3p = function () {
    return this.k3v_1;
  };
  PrimitiveArraySerializer.prototype.l3v = function (_this__u8e3s4) {
    return _this__u8e3s4.m3v();
  };
  PrimitiveArraySerializer.prototype.n3v = function (_this__u8e3s4) {
    return _this__u8e3s4.t2();
  };
  PrimitiveArraySerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return _this__u8e3s4.jb(size);
  };
  PrimitiveArraySerializer.prototype.p3v = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.q3v = function (_this__u8e3s4) {
    return this.p3v((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.r3v = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.s3v = function () {
    return this.u3v(this.t3v());
  };
  PrimitiveArraySerializer.prototype.y3v = function (encoder, value) {
    var size = this.z3v(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.k3v_1;
    var composite = encoder.l3u(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.x3v(composite, value, size);
    composite.t3s(tmp0_encodeCollection);
  };
  PrimitiveArraySerializer.prototype.w3p = function (encoder, value) {
    return this.y3v(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.a3w = function (encoder, value) {
    return this.y3v(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.x3p = function (decoder) {
    return this.b3w(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.e3w = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.m3v() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.jb(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.c3w_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.a3w = function (encoder, value) {
    var size = this.z3v(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.v3p();
    var composite = encoder.l3u(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q3v(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.g3u(this.v3p(), index, this.c3w_1, iterator.f());
      }
       while (inductionVariable < size);
    composite.t3s(tmp0_encodeCollection);
  };
  CollectionLikeSerializer.prototype.w3p = function (encoder, value) {
    return this.a3w(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.d3w = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.v3v(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.v3v = function (decoder, index, builder, checkIndex) {
    var tmp = this.v3p();
    this.r3v(builder, index, decoder.e3t(tmp, index, this.c3w_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.i3t($this.v3p());
    $this.o3v(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.b3w = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.u3v(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.s3v() : tmp1_elvis_lhs;
    var startIndex = this.l3v(builder);
    var compositeDecoder = decoder.s3s(this.v3p());
    if (compositeDecoder.g3t()) {
      this.d3w(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.h3t(this.v3p());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.w3v(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.t3s(this.v3p());
    return this.n3v(builder);
  };
  AbstractCollectionSerializer.prototype.x3p = function (decoder) {
    return this.b3w(decoder, null);
  };
  AbstractCollectionSerializer.prototype.w3v = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.v3v(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.g3w_1 = kClass;
    this.h3w_1 = new ArrayClassDesc(eSerializer.v3p());
  }
  ReferenceArraySerializer.prototype.v3p = function () {
    return this.h3w_1;
  };
  ReferenceArraySerializer.prototype.i3w = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.z3v = function (_this__u8e3s4) {
    return this.i3w((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.j3w = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.q3v = function (_this__u8e3s4) {
    return this.j3w((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.s3v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.k3w = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ReferenceArraySerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.k3w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.l3w = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.g3w_1);
  };
  ReferenceArraySerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.l3w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.m3w = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.m3w((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.n3w = function (_this__u8e3s4, size) {
    return _this__u8e3s4.jb(size);
  };
  ReferenceArraySerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.n3w(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.o3w = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.qa(index, element);
  };
  ReferenceArraySerializer.prototype.r3v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.o3w(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.q3w = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.z3v = function (_this__u8e3s4) {
    return this.q3w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.r3w = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.q3v = function (_this__u8e3s4) {
    return this.r3w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.s3w_1 = keySerializer;
    this.t3w_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.u3w = function () {
    return this.s3w_1;
  };
  MapLikeSerializer.prototype.v3w = function () {
    return this.t3w_1;
  };
  MapLikeSerializer.prototype.d3w = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.e1_1;
    var last = progression.f1_1;
    var step_0 = progression.g1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.v3v(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.v3v = function (decoder, index, builder, checkIndex) {
    var tmp = this.v3p();
    var key = decoder.e3t(tmp, index, this.s3w_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.h3t(this.v3p());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.c2(key)) {
      var tmp_3 = this.t3w_1.v3p().f3r();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.d3t(this.v3p(), vIndex, this.t3w_1, getValue(builder, key));
    } else {
      var tmp_4 = this.v3p();
      tmp_1 = decoder.e3t(tmp_4, vIndex, this.t3w_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.a(key, value);
  };
  MapLikeSerializer.prototype.a3w = function (encoder, value) {
    var size = this.z3v(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.v3p();
    var composite = encoder.l3u(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.q3v(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var v = tmp$ret$2;
      var tmp = this.v3p();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.g3u(tmp, tmp0, this.s3w_1, k);
      var tmp_0 = this.v3p();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.g3u(tmp_0, tmp1, this.t3w_1, v);
    }
    composite.t3s(tmp0_encodeCollection);
  };
  MapLikeSerializer.prototype.w3p = function (encoder, value) {
    return this.a3w(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.y3w_1 = new LinkedHashMapClassDesc(kSerializer.v3p(), vSerializer.v3p());
  }
  LinkedHashMapSerializer.prototype.v3p = function () {
    return this.y3w_1;
  };
  LinkedHashMapSerializer.prototype.z3w = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashMapSerializer.prototype.z3v = function (_this__u8e3s4) {
    return this.z3w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.a3x = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.q3v = function (_this__u8e3s4) {
    return this.a3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.s3v = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.b3x = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  LinkedHashMapSerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.b3x(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.c3x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.c3x(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.d3x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.d3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.e3x = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.e3x(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.h3x_1 = new HashMapClassDesc(kSerializer.v3p(), vSerializer.v3p());
  }
  HashMapSerializer.prototype.v3p = function () {
    return this.h3x_1;
  };
  HashMapSerializer.prototype.z3w = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashMapSerializer.prototype.z3v = function (_this__u8e3s4) {
    return this.z3w((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.a3x = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.r().d();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.q3v = function (_this__u8e3s4) {
    return this.a3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.s3v = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.i3x = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  HashMapSerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.i3x(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.j3x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.j3x(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.d3x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.d3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.k3x = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.k3x(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.m3x_1 = new ArrayListClassDesc(element.v3p());
  }
  ArrayListSerializer.prototype.v3p = function () {
    return this.m3x_1;
  };
  ArrayListSerializer.prototype.s3v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.n3x = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ArrayListSerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.n3x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.o3x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.o3x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.p3x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.p3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.q3x = function (_this__u8e3s4, size) {
    return _this__u8e3s4.jb(size);
  };
  ArrayListSerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.q3x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.r3x = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.qa(index, element);
  };
  ArrayListSerializer.prototype.r3v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.r3x(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.t3x_1 = new HashSetClassDesc(eSerializer.v3p());
  }
  HashSetSerializer.prototype.v3p = function () {
    return this.t3x_1;
  };
  HashSetSerializer.prototype.s3v = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.u3x = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashSetSerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.u3x(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.v3x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.v3x(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.w3x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.w3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.x3x = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.x3x(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.y3x = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.r3v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.y3x(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.a3y_1 = new LinkedHashSetClassDesc(eSerializer.v3p());
  }
  LinkedHashSetSerializer.prototype.v3p = function () {
    return this.a3y_1;
  };
  LinkedHashSetSerializer.prototype.s3v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.b3y = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashSetSerializer.prototype.l3v = function (_this__u8e3s4) {
    return this.b3y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.c3y = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.n3v = function (_this__u8e3s4) {
    return this.c3y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.w3x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.u3v = function (_this__u8e3s4) {
    return this.w3x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.d3y = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.o3v = function (_this__u8e3s4, size) {
    return this.d3y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.e3y = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.r3v = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.e3y(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.f3y_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).x8(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.j3y_1[slot] = $this.j3y_1[slot].zg((new Long(1, 0)).x8(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.j3y_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.j3y_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.yg());
          slotMarks = slotMarks.zg((new Long(1, 0)).x8(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.h3y_1($this.g3y_1, index)) {
            $this.j3y_1[slot] = slotMarks;
            return index;
          }
        }
        $this.j3y_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_1();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_2();
    this.g3y_1 = descriptor;
    this.h3y_1 = readIfAbsent;
    var elementsCount = this.g3y_1.d3r();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).x8(elementsCount);
      }
      tmp.i3y_1 = tmp_0;
      this.j3y_1 = Companion_getInstance_2().f3y_1;
    } else {
      this.i3y_1 = new Long(0, 0);
      this.j3y_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.k3y = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.i3y_1 = this.i3y_1.zg((new Long(1, 0)).x8(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.l3y = function () {
    var elementsCount = this.g3y_1.d3r();
    while (!this.i3y_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.i3y_1.yg());
      this.i3y_1 = this.i3y_1.zg((new Long(1, 0)).x8(index));
      if (this.h3y_1(this.g3y_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_1();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function EnumSerializer$descriptor$lambda(this$0, $serialName) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = this$0.m3y_1;
      var indexedObject = tmp0_forEach;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.internal.EnumSerializer.descriptor.<anonymous>.<anonymous>' call
        var fqn = $serialName + '.' + element.l4_1;
        var tmp = OBJECT_getInstance();
        var enumMemberDescriptor = buildSerialDescriptor$default(fqn, tmp, [], null, 12, null);
        $this$buildSerialDescriptor.j3q(element.l4_1, enumMemberDescriptor, null, false, 12, null);
      }
      return Unit_getInstance();
    };
  }
  function EnumSerializer(serialName, values) {
    this.m3y_1 = values;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.n3y_1 = buildSerialDescriptor$default(serialName, tmp_0, [], EnumSerializer$descriptor$lambda(this, serialName), 4, null);
  }
  EnumSerializer.prototype.v3p = function () {
    return this.n3y_1;
  };
  EnumSerializer.prototype.w3p = function (encoder, value) {
    var index = indexOf(this.m3y_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$('' + value + ' is not a valid enum ' + this.n3y_1.b3r() + ', ' + ('must be one of ' + contentToString(this.m3y_1)));
    }
    encoder.v3t(this.n3y_1, index);
  };
  EnumSerializer.prototype.x3p = function (decoder) {
    var index = decoder.o3s(this.n3y_1);
    if (!(0 <= index ? index <= (this.m3y_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$('' + index + ' is not among valid ' + this.n3y_1.b3r() + ' enum values, ' + ('values size is ' + this.m3y_1.length));
    }
    return this.m3y_1[index];
  };
  EnumSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.n3y_1.b3r() + '>';
  };
  EnumSerializer.$metadata$ = classMeta('EnumSerializer', [KSerializer]);
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.a3z_1 = true;
  }
  InlineClassDescriptor.prototype.e3r = function () {
    return this.a3z_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b3r() === other.b3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.a3z_1 ? contentEquals(this.n3z(), tmp0__anonymous__q1qw7t.n3z()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.d3r() === other.d3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.d3r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.h3r(index).b3r() === other.h3r(index).b3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.h3r(index).f3r(), other.h3r(index).f3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.p3z_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.p3z_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.v3p = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.w3p = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.x3p = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.s3z_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.v3p = function () {
    return this.s3z_1;
  };
  UIntSerializer.prototype.t3z = function (encoder, value) {
    var tmp = encoder.w3t(this.s3z_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.p3t(tmp$ret$0);
  };
  UIntSerializer.prototype.w3p = function (encoder, value) {
    return this.t3z(encoder, value instanceof UInt ? value.f8_1 : THROW_CCE());
  };
  UIntSerializer.prototype.u3z = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.p3s(this.s3z_1).i3s();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.x3p = function (decoder) {
    return new UInt(this.u3z(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.v3z_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance()));
  }
  ULongSerializer.prototype.v3p = function () {
    return this.v3z_1;
  };
  ULongSerializer.prototype.w3z = function (encoder, value) {
    var tmp = encoder.w3t(this.v3z_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.q3t(tmp$ret$0);
  };
  ULongSerializer.prototype.w3p = function (encoder, value) {
    return this.w3z(encoder, value instanceof ULong ? value.n8_1 : THROW_CCE());
  };
  ULongSerializer.prototype.x3z = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.p3s(this.v3z_1).j3s();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.x3p = function (decoder) {
    return new ULong(this.x3z(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.y3z_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.v3p = function () {
    return this.y3z_1;
  };
  UByteSerializer.prototype.z3z = function (encoder, value) {
    var tmp = encoder.w3t(this.y3z_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.n3t(tmp$ret$0);
  };
  UByteSerializer.prototype.w3p = function (encoder, value) {
    return this.z3z(encoder, value instanceof UByte ? value.y7_1 : THROW_CCE());
  };
  UByteSerializer.prototype.a40 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.p3s(this.y3z_1).g3s();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.x3p = function (decoder) {
    return new UByte(this.a40(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.b40_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.v3p = function () {
    return this.b40_1;
  };
  UShortSerializer.prototype.c40 = function (encoder, value) {
    var tmp = encoder.w3t(this.b40_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.o3t(tmp$ret$0);
  };
  UShortSerializer.prototype.w3p = function (encoder, value) {
    return this.c40(encoder, value instanceof UShort ? value.t8_1 : THROW_CCE());
  };
  UShortSerializer.prototype.d40 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.p3s(this.b40_1).h3s();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.x3p = function (decoder) {
    return new UShort(this.d40(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.e40_1 = serializer;
    this.f40_1 = new SerialDescriptorForNullable(this.e40_1.v3p());
  }
  NullableSerializer.prototype.v3p = function () {
    return this.f40_1;
  };
  NullableSerializer.prototype.g40 = function (encoder, value) {
    if (!(value == null)) {
      encoder.k3u();
      encoder.h3u(this.e40_1, value);
    } else {
      encoder.l3t();
    }
  };
  NullableSerializer.prototype.w3p = function (encoder, value) {
    return this.g40(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.x3p = function (decoder) {
    return decoder.d3s() ? decoder.r3s(this.e40_1) : decoder.e3s();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.e40_1, other.e40_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.e40_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.v3q_1 = original;
    this.w3q_1 = this.v3q_1.b3r() + '?';
    this.x3q_1 = cachedSerialNames(this.v3q_1);
  }
  SerialDescriptorForNullable.prototype.c3r = function () {
    return this.v3q_1.c3r();
  };
  SerialDescriptorForNullable.prototype.d3r = function () {
    return this.v3q_1.d3r();
  };
  SerialDescriptorForNullable.prototype.e3r = function () {
    return this.v3q_1.e3r();
  };
  SerialDescriptorForNullable.prototype.f3r = function () {
    return this.v3q_1.f3r();
  };
  SerialDescriptorForNullable.prototype.g3r = function (index) {
    return this.v3q_1.g3r(index);
  };
  SerialDescriptorForNullable.prototype.h3r = function (index) {
    return this.v3q_1.h3r(index);
  };
  SerialDescriptorForNullable.prototype.i3r = function (name) {
    return this.v3q_1.i3r(name);
  };
  SerialDescriptorForNullable.prototype.j3r = function (index) {
    return this.v3q_1.j3r(index);
  };
  SerialDescriptorForNullable.prototype.k3r = function (index) {
    return this.v3q_1.k3r(index);
  };
  SerialDescriptorForNullable.prototype.b3r = function () {
    return this.w3q_1;
  };
  SerialDescriptorForNullable.prototype.b3s = function () {
    return this.x3q_1;
  };
  SerialDescriptorForNullable.prototype.u3q = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.v3q_1, other.v3q_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.v3q_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.v3q_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.d3q_1 = this$0.i40_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.h40_1 = objectInstance;
    this.i40_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.j40_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.v3p = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.j40_1.t();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.w3p = function (encoder, value) {
    encoder.s3s(this.v3p()).t3s(this.v3p());
  };
  ObjectSerializer.prototype.x3p = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.v3p();
    var composite = decoder.s3s(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.h3t(this.v3p());
      Companion_getInstance_1();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.t3s(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.h40_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.v3p();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.m();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_hashCode = selector(element);
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$1 = tmp + tmp$ret$0 | 0;
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.b3s();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.d3r());
    var inductionVariable = 0;
    var last = _this__u8e3s4.d3r();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.j3r(i);
        result.b(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.nd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.wd();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.j3r(i);
          missingFields.b(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.b3r());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.b3r());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.b3r();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.f3r();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.k3z_1.t();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.m3z_1.t();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.f3z_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.f3z_1[i];
        indices.a(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c3z_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q3z();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c3z_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r3z();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.v3p();
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.n3z());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.j3r(i) + ': ' + this$0.h3r(i).b3r();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.b3z_1 = serialName;
    this.c3z_1 = generatedSerializer;
    this.d3z_1 = elementsCount;
    this.e3z_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.d3z_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.f3z_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.d3z_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.g3z_1 = tmp$ret$2;
    this.h3z_1 = null;
    this.i3z_1 = booleanArray(this.d3z_1);
    this.j3z_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.k3z_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.l3z_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.m3z_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.b3r = function () {
    return this.b3z_1;
  };
  PluginGeneratedSerialDescriptor.prototype.d3r = function () {
    return this.d3z_1;
  };
  PluginGeneratedSerialDescriptor.prototype.f3r = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.c3r = function () {
    var tmp0_elvis_lhs = this.h3z_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.b3s = function () {
    return this.j3z_1.j2();
  };
  PluginGeneratedSerialDescriptor.prototype.n3z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.l3z_1.t();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.o3z = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.e3z_1 = tmp0_this.e3z_1 + 1 | 0;
    this.f3z_1[tmp0_this.e3z_1] = name;
    this.i3z_1[this.e3z_1] = isOptional;
    this.g3z_1[this.e3z_1] = null;
    if (this.e3z_1 === (this.d3z_1 - 1 | 0)) {
      this.j3z_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.h3r = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).v3p();
  };
  PluginGeneratedSerialDescriptor.prototype.k3r = function (index) {
    return getChecked_0(this.i3z_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.g3r = function (index) {
    var tmp0_elvis_lhs = getChecked(this.g3z_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.j3r = function (index) {
    return getChecked(this.f3z_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.i3r = function (name) {
    var tmp0_elvis_lhs = this.j3z_1.i2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.b3r() === other.b3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.n3z(), tmp0__anonymous__q1qw7t.n3z());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.d3r() === other.d3r())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.d3r();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.h3r(index).b3r() === other.h3r(index).b3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.h3r(index).f3r(), other.h3r(index).f3r())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.d3z_1);
    var tmp_0 = this.b3r() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.n3z();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_0()));
  }
  CharArraySerializer_0.prototype.n40 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.n40((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.o40 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.o40((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.t3v = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.p40 = function (decoder, index, builder, checkIndex) {
    builder.s40(decoder.b3t(this.k3v_1, index));
  };
  CharArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.p40(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.t40 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.e3u(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.t40(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.w40 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.w40((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.x40 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.x40((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.t3v = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.y40 = function (decoder, index, builder, checkIndex) {
    builder.b41(decoder.a3t(this.k3v_1, index));
  };
  DoubleArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.y40(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.c41 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.d3u(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.c41(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.f41 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.f41((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.g41 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.g41((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.t3v = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.h41 = function (decoder, index, builder, checkIndex) {
    builder.k41(decoder.z3s(this.k3v_1, index));
  };
  FloatArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.h41(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.l41 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.c3u(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.l41(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance()));
  }
  LongArraySerializer_0.prototype.o41 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.o41((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.p41 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.p41((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.t3v = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.q41 = function (decoder, index, builder, checkIndex) {
    builder.t41(decoder.y3s(this.k3v_1, index));
  };
  LongArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.q41(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.u41 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.b3u(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.u41(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.x41 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.x41((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.y41 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.y41((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.t3v = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.z41 = function (decoder, index, builder, checkIndex) {
    builder.c42(decoder.x3s(this.k3v_1, index));
  };
  IntArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.z41(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.d42 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.a3u(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.d42(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.g42 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.g42((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.h42 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.h42((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.t3v = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.i42 = function (decoder, index, builder, checkIndex) {
    builder.l42(decoder.w3s(this.k3v_1, index));
  };
  ShortArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.i42(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.m42 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.z3t(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.m42(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.p42 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.p42((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.q42 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.q42((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.t3v = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.r42 = function (decoder, index, builder, checkIndex) {
    builder.u42(decoder.v3s(this.k3v_1, index));
  };
  ByteArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.r42(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.v42 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.y3t(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.v42(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.y42 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.z3v = function (_this__u8e3s4) {
    return this.y42((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.z42 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.u3v = function (_this__u8e3s4) {
    return this.z42((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.t3v = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.a43 = function (decoder, index, builder, checkIndex) {
    builder.d43(decoder.u3s(this.k3v_1, index));
  };
  BooleanArraySerializer_0.prototype.v3v = function (decoder, index, builder, checkIndex) {
    return this.a43(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.e43 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.x3t(this.k3v_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.x3v = function (encoder, content, size) {
    return this.e43(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q40_1 = bufferWithData;
    this.r40_1 = bufferWithData.length;
    this.jb(10);
  }
  CharArrayBuilder.prototype.m3v = function () {
    return this.r40_1;
  };
  CharArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.q40_1.length < requiredCapacity)
      this.q40_1 = copyOf(this.q40_1, coerceAtLeast(requiredCapacity, imul(this.q40_1.length, 2)));
  };
  CharArrayBuilder.prototype.s40 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.q40_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r40_1;
    tmp0_this.r40_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.t2 = function () {
    return copyOf(this.q40_1, this.r40_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z40_1 = bufferWithData;
    this.a41_1 = bufferWithData.length;
    this.jb(10);
  }
  DoubleArrayBuilder.prototype.m3v = function () {
    return this.a41_1;
  };
  DoubleArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.z40_1.length < requiredCapacity)
      this.z40_1 = copyOf_0(this.z40_1, coerceAtLeast(requiredCapacity, imul(this.z40_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.b41 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.z40_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.a41_1;
    tmp0_this.a41_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.t2 = function () {
    return copyOf_0(this.z40_1, this.a41_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i41_1 = bufferWithData;
    this.j41_1 = bufferWithData.length;
    this.jb(10);
  }
  FloatArrayBuilder.prototype.m3v = function () {
    return this.j41_1;
  };
  FloatArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.i41_1.length < requiredCapacity)
      this.i41_1 = copyOf_1(this.i41_1, coerceAtLeast(requiredCapacity, imul(this.i41_1.length, 2)));
  };
  FloatArrayBuilder.prototype.k41 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.i41_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.j41_1;
    tmp0_this.j41_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.t2 = function () {
    return copyOf_1(this.i41_1, this.j41_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r41_1 = bufferWithData;
    this.s41_1 = bufferWithData.length;
    this.jb(10);
  }
  LongArrayBuilder.prototype.m3v = function () {
    return this.s41_1;
  };
  LongArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.r41_1.length < requiredCapacity)
      this.r41_1 = copyOf_2(this.r41_1, coerceAtLeast(requiredCapacity, imul(this.r41_1.length, 2)));
  };
  LongArrayBuilder.prototype.t41 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.r41_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s41_1;
    tmp0_this.s41_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.t2 = function () {
    return copyOf_2(this.r41_1, this.s41_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a42_1 = bufferWithData;
    this.b42_1 = bufferWithData.length;
    this.jb(10);
  }
  IntArrayBuilder.prototype.m3v = function () {
    return this.b42_1;
  };
  IntArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.a42_1.length < requiredCapacity)
      this.a42_1 = copyOf_3(this.a42_1, coerceAtLeast(requiredCapacity, imul(this.a42_1.length, 2)));
  };
  IntArrayBuilder.prototype.c42 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.a42_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.b42_1;
    tmp0_this.b42_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.t2 = function () {
    return copyOf_3(this.a42_1, this.b42_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j42_1 = bufferWithData;
    this.k42_1 = bufferWithData.length;
    this.jb(10);
  }
  ShortArrayBuilder.prototype.m3v = function () {
    return this.k42_1;
  };
  ShortArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.j42_1.length < requiredCapacity)
      this.j42_1 = copyOf_4(this.j42_1, coerceAtLeast(requiredCapacity, imul(this.j42_1.length, 2)));
  };
  ShortArrayBuilder.prototype.l42 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.j42_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.k42_1;
    tmp0_this.k42_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.t2 = function () {
    return copyOf_4(this.j42_1, this.k42_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s42_1 = bufferWithData;
    this.t42_1 = bufferWithData.length;
    this.jb(10);
  }
  ByteArrayBuilder.prototype.m3v = function () {
    return this.t42_1;
  };
  ByteArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.s42_1.length < requiredCapacity)
      this.s42_1 = copyOf_5(this.s42_1, coerceAtLeast(requiredCapacity, imul(this.s42_1.length, 2)));
  };
  ByteArrayBuilder.prototype.u42 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.s42_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.t42_1;
    tmp0_this.t42_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.t2 = function () {
    return copyOf_5(this.s42_1, this.t42_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b43_1 = bufferWithData;
    this.c43_1 = bufferWithData.length;
    this.jb(10);
  }
  BooleanArrayBuilder.prototype.m3v = function () {
    return this.c43_1;
  };
  BooleanArrayBuilder.prototype.jb = function (requiredCapacity) {
    if (this.b43_1.length < requiredCapacity)
      this.b43_1 = copyOf_6(this.b43_1, coerceAtLeast(requiredCapacity, imul(this.b43_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.d43 = function (c) {
    this.e3w(0, 1, null);
    var tmp = this.b43_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.c43_1;
    tmp0_this.c43_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.t2 = function () {
    return copyOf_6(this.b43_1, this.c43_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.f43_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.v3p = function () {
    return this.f43_1;
  };
  StringSerializer.prototype.g43 = function (encoder, value) {
    return encoder.u3t(value);
  };
  StringSerializer.prototype.w3p = function (encoder, value) {
    return this.g43(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.x3p = function (decoder) {
    return decoder.n3s();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.h43_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.v3p = function () {
    return this.h43_1;
  };
  CharSerializer.prototype.i43 = function (encoder, value) {
    return encoder.t3t(value);
  };
  CharSerializer.prototype.w3p = function (encoder, value) {
    return this.i43(encoder, value instanceof Char ? value.i1_1 : THROW_CCE());
  };
  CharSerializer.prototype.j43 = function (decoder) {
    return decoder.m3s();
  };
  CharSerializer.prototype.x3p = function (decoder) {
    return new Char(this.j43(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.k43_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.v3p = function () {
    return this.k43_1;
  };
  DoubleSerializer.prototype.l43 = function (encoder, value) {
    return encoder.s3t(value);
  };
  DoubleSerializer.prototype.w3p = function (encoder, value) {
    return this.l43(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.x3p = function (decoder) {
    return decoder.l3s();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.m43_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.v3p = function () {
    return this.m43_1;
  };
  FloatSerializer.prototype.n43 = function (encoder, value) {
    return encoder.r3t(value);
  };
  FloatSerializer.prototype.w3p = function (encoder, value) {
    return this.n43(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.x3p = function (decoder) {
    return decoder.k3s();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.o43_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.v3p = function () {
    return this.o43_1;
  };
  LongSerializer.prototype.p43 = function (encoder, value) {
    return encoder.q3t(value);
  };
  LongSerializer.prototype.w3p = function (encoder, value) {
    return this.p43(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.x3p = function (decoder) {
    return decoder.j3s();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.q43_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.v3p = function () {
    return this.q43_1;
  };
  IntSerializer.prototype.r43 = function (encoder, value) {
    return encoder.p3t(value);
  };
  IntSerializer.prototype.w3p = function (encoder, value) {
    return this.r43(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.x3p = function (decoder) {
    return decoder.i3s();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.s43_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.v3p = function () {
    return this.s43_1;
  };
  ShortSerializer.prototype.t43 = function (encoder, value) {
    return encoder.o3t(value);
  };
  ShortSerializer.prototype.w3p = function (encoder, value) {
    return this.t43(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.x3p = function (decoder) {
    return decoder.h3s();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.u43_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.v3p = function () {
    return this.u43_1;
  };
  ByteSerializer.prototype.v43 = function (encoder, value) {
    return encoder.n3t(value);
  };
  ByteSerializer.prototype.w3p = function (encoder, value) {
    return this.v43(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.x3p = function (decoder) {
    return decoder.g3s();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.w43_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.v3p = function () {
    return this.w43_1;
  };
  BooleanSerializer.prototype.x43 = function (encoder, value) {
    return encoder.m3t(value);
  };
  BooleanSerializer.prototype.w3p = function (encoder, value) {
    return this.x43(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.x3p = function (decoder) {
    return decoder.f3s();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.y43_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.v3p = function () {
    return this.y43_1.v3p();
  };
  UnitSerializer.prototype.z43 = function (decoder) {
    this.y43_1.x3p(decoder);
  };
  UnitSerializer.prototype.x3p = function (decoder) {
    this.z43(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.a44 = function (encoder, value) {
    this.y43_1.w3p(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.w3p = function (encoder, value) {
    return this.a44(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.b44_1 = serialName;
    this.c44_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.b3r = function () {
    return this.b44_1;
  };
  PrimitiveSerialDescriptor_0.prototype.f3r = function () {
    return this.c44_1;
  };
  PrimitiveSerialDescriptor_0.prototype.d3r = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.j3r = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.i3r = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.k3r = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.h3r = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.g3r = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.b44_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().j2();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.nd()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().i2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().gf(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().jf(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ef(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().pf(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().df(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().of(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance())), to(PrimitiveClasses_getInstance().nf(), LongArraySerializer()), to(PrimitiveClasses_getInstance().cf(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().mf(), IntArraySerializer()), to(PrimitiveClasses_getInstance().bf(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().lf(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().af(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().kf(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().ze(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().if(), BooleanArraySerializer()), to(getKClass(Unit), serializer_10(Unit_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.f44 = function (_this__u8e3s4, index) {
    return this.h44(this.g44(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.h44 = function (nestedName) {
    var tmp0_elvis_lhs = this.k44();
    return this.l44(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.g44 = function (desc, index) {
    return desc.j3r(index);
  };
  NamedValueDecoder.prototype.l44 = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.z44(tag);
    var r = block();
    if (!$this.j44_1) {
      $this.a45();
    }
    $this.j44_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.q3s($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.d3s() ? this$0.q3s($deserializer, $previousValue) : this$0.e3s();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.i44_1 = tmp$ret$0;
    this.j44_1 = false;
  }
  TaggedDecoder.prototype.p3q = function () {
    return get_EmptySerializersModule();
  };
  TaggedDecoder.prototype.m44 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.n44 = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.o44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.p44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.q44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.r44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.s44 = function (tag) {
    var tmp = this.m44(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.t44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.u44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.v44 = function (tag) {
    var tmp = this.m44(tag);
    return tmp instanceof Char ? tmp.i1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.w44 = function (tag) {
    var tmp = this.m44(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.x44 = function (tag, enumDescriptor) {
    var tmp = this.m44(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.y44 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.z44(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.q3s = function (deserializer, previousValue) {
    return this.r3s(deserializer);
  };
  TaggedDecoder.prototype.p3s = function (inlineDescriptor) {
    return this.y44(this.a45(), inlineDescriptor);
  };
  TaggedDecoder.prototype.d3s = function () {
    var tmp0_elvis_lhs = this.k44();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.n44(currentTag);
  };
  TaggedDecoder.prototype.e3s = function () {
    return null;
  };
  TaggedDecoder.prototype.f3s = function () {
    return this.o44(this.a45());
  };
  TaggedDecoder.prototype.g3s = function () {
    return this.p44(this.a45());
  };
  TaggedDecoder.prototype.h3s = function () {
    return this.q44(this.a45());
  };
  TaggedDecoder.prototype.i3s = function () {
    return this.r44(this.a45());
  };
  TaggedDecoder.prototype.j3s = function () {
    return this.s44(this.a45());
  };
  TaggedDecoder.prototype.k3s = function () {
    return this.t44(this.a45());
  };
  TaggedDecoder.prototype.l3s = function () {
    return this.u44(this.a45());
  };
  TaggedDecoder.prototype.m3s = function () {
    return this.v44(this.a45());
  };
  TaggedDecoder.prototype.n3s = function () {
    return this.w44(this.a45());
  };
  TaggedDecoder.prototype.o3s = function (enumDescriptor) {
    return this.x44(this.a45(), enumDescriptor);
  };
  TaggedDecoder.prototype.s3s = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.t3s = function (descriptor) {
  };
  TaggedDecoder.prototype.u3s = function (descriptor, index) {
    return this.o44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.v3s = function (descriptor, index) {
    return this.p44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.w3s = function (descriptor, index) {
    return this.q44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.x3s = function (descriptor, index) {
    return this.r44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.y3s = function (descriptor, index) {
    return this.s44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.z3s = function (descriptor, index) {
    return this.t44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.a3t = function (descriptor, index) {
    return this.u44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.b3t = function (descriptor, index) {
    return this.v44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.c3t = function (descriptor, index) {
    return this.w44(this.f44(descriptor, index));
  };
  TaggedDecoder.prototype.d3t = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f44(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.f3t = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.f44(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.k44 = function () {
    return lastOrNull(this.i44_1);
  };
  TaggedDecoder.prototype.z44 = function (name) {
    this.i44_1.b(name);
  };
  TaggedDecoder.prototype.a45 = function () {
    var r = this.i44_1.k3(get_lastIndex_0(this.i44_1));
    this.j44_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.b45_1 = key;
    this.c45_1 = value;
  }
  MapEntry.prototype.s = function () {
    return this.b45_1;
  };
  MapEntry.prototype.t = function () {
    return this.c45_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.b45_1 + ', value=' + this.c45_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.b45_1 == null ? 0 : hashCode(this.b45_1);
    result = imul(result, 31) + (this.c45_1 == null ? 0 : hashCode(this.c45_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.b45_1, tmp0_other_with_cast.b45_1))
      return false;
    if (!equals(this.c45_1, tmp0_other_with_cast.c45_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.v3p();
      $this$buildSerialDescriptor.j3q('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.v3p();
      $this$buildSerialDescriptor.j3q('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f45_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.v3p = function () {
    return this.f45_1;
  };
  MapEntrySerializer_0.prototype.g45 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  MapEntrySerializer_0.prototype.h45 = function (_this__u8e3s4) {
    return this.g45((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.i45 = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  MapEntrySerializer_0.prototype.j45 = function (_this__u8e3s4) {
    return this.i45((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.k45 = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.v3p();
      $this$buildClassSerialDescriptor.j3q('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.v3p();
      $this$buildClassSerialDescriptor.j3q('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.q45_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.v3p = function () {
    return this.q45_1;
  };
  PairSerializer_0.prototype.r45 = function (_this__u8e3s4) {
    return _this__u8e3s4.g3_1;
  };
  PairSerializer_0.prototype.h45 = function (_this__u8e3s4) {
    return this.r45(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.s45 = function (_this__u8e3s4) {
    return _this__u8e3s4.h3_1;
  };
  PairSerializer_0.prototype.j45 = function (_this__u8e3s4) {
    return this.s45(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.k45 = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.e3t($this.w45_1, 0, $this.t45_1, null, 8, null);
    var b = composite.e3t($this.w45_1, 1, $this.u45_1, null, 8, null);
    var c = composite.e3t($this.w45_1, 2, $this.v45_1, null, 8, null);
    composite.t3s($this.w45_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.h3t($this.w45_1);
      Companion_getInstance_1();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.e3t($this.w45_1, 0, $this.t45_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.e3t($this.w45_1, 1, $this.u45_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.e3t($this.w45_1, 2, $this.v45_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.t3s($this.w45_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.t45_1.v3p();
      $this$buildClassSerialDescriptor.j3q('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.u45_1.v3p();
      $this$buildClassSerialDescriptor.j3q('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.v45_1.v3p();
      $this$buildClassSerialDescriptor.j3q('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.t45_1 = aSerializer;
    this.u45_1 = bSerializer;
    this.v45_1 = cSerializer;
    var tmp = this;
    tmp.w45_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.v3p = function () {
    return this.w45_1;
  };
  TripleSerializer_0.prototype.x45 = function (encoder, value) {
    var structuredEncoder = encoder.s3s(this.w45_1);
    structuredEncoder.g3u(this.w45_1, 0, this.t45_1, value.r7_1);
    structuredEncoder.g3u(this.w45_1, 1, this.u45_1, value.s7_1);
    structuredEncoder.g3u(this.w45_1, 2, this.v45_1, value.t7_1);
    structuredEncoder.t3s(this.w45_1);
  };
  TripleSerializer_0.prototype.w3p = function (encoder, value) {
    return this.x45(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.x3p = function (decoder) {
    var composite = decoder.s3s(this.w45_1);
    if (composite.g3t()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.l45_1 = keySerializer;
    this.m45_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.n45 = function (encoder, value) {
    var structuredEncoder = encoder.s3s(this.v3p());
    structuredEncoder.g3u(this.v3p(), 0, this.l45_1, this.h45(value));
    structuredEncoder.g3u(this.v3p(), 1, this.m45_1, this.j45(value));
    structuredEncoder.t3s(this.v3p());
  };
  KeyValueSerializer.prototype.w3p = function (encoder, value) {
    return this.n45(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.x3p = function (decoder) {
    var composite = decoder.s3s(this.v3p());
    if (composite.g3t()) {
      var tmp = this.v3p();
      var key = composite.e3t(tmp, 0, this.l45_1, null, 8, null);
      var tmp_0 = this.v3p();
      var value = composite.e3t(tmp_0, 1, this.m45_1, null, 8, null);
      return this.k45(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.h3t(this.v3p());
      Companion_getInstance_1();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.v3p();
          key_0 = composite.e3t(tmp_1, 0, this.l45_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.v3p();
            value_0 = composite.e3t(tmp_2, 1, this.m45_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.t3s(this.v3p());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.k45(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.s3q = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.t3q(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.z45_1 = class2ContextualFactory;
    this.a46_1 = polyBase2Serializers;
    this.b46_1 = polyBase2DefaultSerializerProvider;
    this.c46_1 = polyBase2NamedSerializers;
    this.d46_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.r3u = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.a46_1.i2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.b46_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.q3u = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c46_1.i2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).i2(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d46_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.t3q = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z45_1.i2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e46(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.y45 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.z45_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.r().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.s();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.t();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.h46_1;
        collector.i46(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.g46(kclass, serial.f46_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.a46_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.r().d();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.s();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.t();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.r().d();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.e()) {
        var element_1 = tmp0_iterator_1.f();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.s();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.t();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.j46(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.b46_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.r().d();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.e()) {
      var element_2 = tmp0_iterator_2.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.s();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.t();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.k46(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.d46_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.r().d();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.e()) {
      var element_3 = tmp0_iterator_3.f();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.s();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.t();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.l46(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.m46 = function () {
    return this.h46_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.c29 = function () {
    return this.f46_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.n46_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n46_1.equals(tmp0_other_with_cast.n46_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n46_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.n46_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.od(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ff());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.k40(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.nd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.u3q = get_isNullable;
  SerialDescriptorImpl.prototype.e3r = get_isInline;
  AbstractDecoder.prototype.e3t = decodeSerializableElement$default;
  AbstractDecoder.prototype.r3s = decodeSerializableValue;
  AbstractDecoder.prototype.g3t = decodeSequentially;
  AbstractDecoder.prototype.i3t = decodeCollectionSize;
  AbstractEncoder.prototype.k3u = encodeNotNullMark;
  AbstractEncoder.prototype.l3u = beginCollection;
  AbstractEncoder.prototype.h3u = encodeSerializableValue;
  AbstractEncoder.prototype.j3u = encodeNullableSerializableValue;
  AbstractEncoder.prototype.m3u = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.u3q = get_isNullable;
  ListLikeDescriptor.prototype.e3r = get_isInline;
  ListLikeDescriptor.prototype.c3r = get_annotations;
  PrimitiveArrayDescriptor.prototype.u3q = get_isNullable;
  PrimitiveArrayDescriptor.prototype.e3r = get_isInline;
  PrimitiveArrayDescriptor.prototype.c3r = get_annotations;
  ArrayClassDesc.prototype.u3q = get_isNullable;
  ArrayClassDesc.prototype.e3r = get_isInline;
  ArrayClassDesc.prototype.c3r = get_annotations;
  MapLikeDescriptor.prototype.u3q = get_isNullable;
  MapLikeDescriptor.prototype.e3r = get_isInline;
  MapLikeDescriptor.prototype.c3r = get_annotations;
  LinkedHashMapClassDesc.prototype.u3q = get_isNullable;
  LinkedHashMapClassDesc.prototype.e3r = get_isInline;
  LinkedHashMapClassDesc.prototype.c3r = get_annotations;
  HashMapClassDesc.prototype.u3q = get_isNullable;
  HashMapClassDesc.prototype.e3r = get_isInline;
  HashMapClassDesc.prototype.c3r = get_annotations;
  ArrayListClassDesc.prototype.u3q = get_isNullable;
  ArrayListClassDesc.prototype.e3r = get_isInline;
  ArrayListClassDesc.prototype.c3r = get_annotations;
  LinkedHashSetClassDesc.prototype.u3q = get_isNullable;
  LinkedHashSetClassDesc.prototype.e3r = get_isInline;
  LinkedHashSetClassDesc.prototype.c3r = get_annotations;
  HashSetClassDesc.prototype.u3q = get_isNullable;
  HashSetClassDesc.prototype.e3r = get_isInline;
  HashSetClassDesc.prototype.c3r = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.u3q = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.e3r = get_isInline;
  InlineClassDescriptor.prototype.u3q = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.r3z = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.u3q = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.e3r = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.c3r = get_annotations;
  TaggedDecoder.prototype.e3t = decodeSerializableElement$default;
  TaggedDecoder.prototype.r3s = decodeSerializableValue;
  TaggedDecoder.prototype.g3t = decodeSequentially;
  TaggedDecoder.prototype.i3t = decodeCollectionSize;
  NamedValueDecoder.prototype.r3s = decodeSerializableValue;
  NamedValueDecoder.prototype.e3t = decodeSerializableElement$default;
  NamedValueDecoder.prototype.g3t = decodeSequentially;
  NamedValueDecoder.prototype.i3t = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = SerializationException_init_$Create$;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_getInstance_1;
  _.$_$.m = BooleanSerializer_getInstance;
  _.$_$.n = ByteArraySerializer_getInstance;
  _.$_$.o = DoubleSerializer_getInstance;
  _.$_$.p = IntSerializer_getInstance;
  _.$_$.q = StringSerializer_getInstance;
  _.$_$.r = ListSerializer;
  _.$_$.s = MapSerializer;
  _.$_$.t = SetSerializer;
  _.$_$.u = get_nullable;
  _.$_$.v = serializer_1;
  _.$_$.w = serializer_14;
  _.$_$.x = serializer_11;
  _.$_$.y = serializer_13;
  _.$_$.z = serializer_12;
  _.$_$.a1 = PolymorphicKind;
  _.$_$.b1 = PrimitiveKind;
  _.$_$.c1 = PrimitiveSerialDescriptor;
  _.$_$.d1 = get_annotations;
  _.$_$.e1 = get_isInline;
  _.$_$.f1 = get_isNullable;
  _.$_$.g1 = SerialDescriptor;
  _.$_$.h1 = ENUM;
  _.$_$.i1 = getContextualDescriptor;
  _.$_$.j1 = AbstractDecoder;
  _.$_$.k1 = AbstractEncoder;
  _.$_$.l1 = decodeCollectionSize;
  _.$_$.m1 = decodeSequentially;
  _.$_$.n1 = CompositeDecoder;
  _.$_$.o1 = CompositeEncoder;
  _.$_$.p1 = decodeSerializableValue;
  _.$_$.q1 = Decoder;
  _.$_$.r1 = beginCollection;
  _.$_$.s1 = encodeNotNullMark;
  _.$_$.t1 = encodeNullableSerializableValue;
  _.$_$.u1 = Encoder;
  _.$_$.v1 = AbstractPolymorphicSerializer;
  _.$_$.w1 = ArrayListSerializer;
  _.$_$.x1 = ElementMarker;
  _.$_$.y1 = EnumSerializer;
  _.$_$.z1 = typeParametersSerializers;
  _.$_$.a2 = GeneratedSerializer;
  _.$_$.b2 = NamedValueDecoder;
  _.$_$.c2 = PluginGeneratedSerialDescriptor;
  _.$_$.d2 = ReferenceArraySerializer;
  _.$_$.e2 = SerializerFactory;
  _.$_$.f2 = jsonCachedSerialNames;
  _.$_$.g2 = throwMissingFieldException;
  _.$_$.h2 = get_EmptySerializersModule;
  _.$_$.i2 = contextual;
  _.$_$.j2 = SerializersModuleCollector;
  _.$_$.k2 = BinaryFormat;
  _.$_$.l2 = DeserializationStrategy;
  _.$_$.m2 = KSerializer;
  _.$_$.n2 = MissingFieldException;
  _.$_$.o2 = SealedClassSerializer;
  _.$_$.p2 = SerializationException;
  _.$_$.q2 = StringFormat;
  _.$_$.r2 = findPolymorphicSerializer;
  _.$_$.s2 = serializerOrNull;
  _.$_$.t2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
