(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    root['ktor-ktor-io-js-ir'] = factory(typeof this['ktor-ktor-io-js-ir'] === 'undefined' ? {} : this['ktor-ktor-io-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.t8;
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var classMeta = kotlin_kotlin.$_$.k8;
  var ensureNotNull = kotlin_kotlin.$_$.lc;
  var toString = kotlin_kotlin.$_$.q9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toLong = kotlin_kotlin.$_$.o9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Long = kotlin_kotlin.$_$.ub;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ba;
  var getPropertyCallableRef = kotlin_kotlin.$_$.q8;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var CancellationException = kotlin_kotlin.$_$.f7;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.e8;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var isInterface = kotlin_kotlin.$_$.c9;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var equals = kotlin_kotlin.$_$.m8;
  var SuspendFunction1 = kotlin_kotlin.$_$.x7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toByte = kotlin_kotlin.$_$.n9;
  var toShort = kotlin_kotlin.$_$.p9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var charSequenceLength = kotlin_kotlin.$_$.i8;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var Exception = kotlin_kotlin.$_$.rb;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.k9;
  var coerceAtLeast = kotlin_kotlin.$_$.s9;
  var coerceAtMost = kotlin_kotlin.$_$.u9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var Appendable = kotlin_kotlin.$_$.ea;
  var encodeToByteArray = kotlin_kotlin.$_$.ha;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var Char = kotlin_kotlin.$_$.kb;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.h8;
  var isLowSurrogate = kotlin_kotlin.$_$.ma;
  var isHighSurrogate = kotlin_kotlin.$_$.la;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var coerceAtMost_0 = kotlin_kotlin.$_$.t9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var hashCode = kotlin_kotlin.$_$.s8;
  var lazy = kotlin_kotlin.$_$.rc;
  var KProperty1 = kotlin_kotlin.$_$.ca;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var replace$default = kotlin_kotlin.$_$.q;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var get_js = kotlin_kotlin.$_$.i9;
  var getStringHashCode = kotlin_kotlin.$_$.r8;
  var extendThrowable = kotlin_kotlin.$_$.n8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j8;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var isCharSequence = kotlin_kotlin.$_$.y8;
  var trim = kotlin_kotlin.$_$.ib;
  var decodeToString = kotlin_kotlin.$_$.ga;
  var setOf = kotlin_kotlin.$_$.q6;
  var fillArrayVal = kotlin_kotlin.$_$.o8;
  var isObject = kotlin_kotlin.$_$.f9;
  //endregion
  //region block: pre-declaration
  function readRemaining$default(limit, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance();
      limit = new Long(-1, 2147483647);
    }
    return $handler == null ? this.d1d(limit, $cont) : $handler(limit, $cont);
  }
  $tryAwaitCOROUTINE$49.prototype = Object.create(CoroutineImpl.prototype);
  $tryAwaitCOROUTINE$49.prototype.constructor = $tryAwaitCOROUTINE$49;
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.constructor = $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0;
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.constructor = $awaitAtLeastNBytesAvailableForReadCOROUTINE$1;
  $writePacketCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $writePacketCOROUTINE$8.prototype.constructor = $writePacketCOROUTINE$8;
  $writeFullyCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$9.prototype.constructor = $writeFullyCOROUTINE$9;
  $writeFullyCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$10.prototype.constructor = $writeFullyCOROUTINE$10;
  $readRemainingCOROUTINE$26.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingCOROUTINE$26.prototype.constructor = $readRemainingCOROUTINE$26;
  $readRemainingSuspendCOROUTINE$27.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingSuspendCOROUTINE$27.prototype.constructor = $readRemainingSuspendCOROUTINE$27;
  $readAvailableCOROUTINE$30.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$30.prototype.constructor = $readAvailableCOROUTINE$30;
  $readAvailableCOROUTINE$33.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$33.prototype.constructor = $readAvailableCOROUTINE$33;
  $awaitInternalAtLeast1COROUTINE$38.prototype = Object.create(CoroutineImpl.prototype);
  $awaitInternalAtLeast1COROUTINE$38.prototype.constructor = $awaitInternalAtLeast1COROUTINE$38;
  $awaitSuspendCOROUTINE$39.prototype = Object.create(CoroutineImpl.prototype);
  $awaitSuspendCOROUTINE$39.prototype.constructor = $awaitSuspendCOROUTINE$39;
  $discardCOROUTINE$40.prototype = Object.create(CoroutineImpl.prototype);
  $discardCOROUTINE$40.prototype.constructor = $discardCOROUTINE$40;
  $discardSuspendCOROUTINE$41.prototype = Object.create(CoroutineImpl.prototype);
  $discardSuspendCOROUTINE$41.prototype.constructor = $discardSuspendCOROUTINE$41;
  ClosedWriteChannelException.prototype = Object.create(CancellationException.prototype);
  ClosedWriteChannelException.prototype.constructor = ClosedWriteChannelException;
  launchChannel$slambda.prototype = Object.create(CoroutineImpl.prototype);
  launchChannel$slambda.prototype.constructor = launchChannel$slambda;
  $requestWriteBufferCOROUTINE$52.prototype = Object.create(CoroutineImpl.prototype);
  $requestWriteBufferCOROUTINE$52.prototype.constructor = $requestWriteBufferCOROUTINE$52;
  $writeBufferSuspendCOROUTINE$53.prototype = Object.create(CoroutineImpl.prototype);
  $writeBufferSuspendCOROUTINE$53.prototype.constructor = $writeBufferSuspendCOROUTINE$53;
  $completeWritingFallbackCOROUTINE$54.prototype = Object.create(CoroutineImpl.prototype);
  $completeWritingFallbackCOROUTINE$54.prototype.constructor = $completeWritingFallbackCOROUTINE$54;
  InsufficientSpaceException.prototype = Object.create(Exception.prototype);
  InsufficientSpaceException.prototype.constructor = InsufficientSpaceException;
  function close() {
    this.zl();
  }
  DefaultBufferPool.prototype = Object.create(DefaultPool.prototype);
  DefaultBufferPool.prototype.constructor = DefaultBufferPool;
  BytePacketBuilder.prototype = Object.create(Output.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacket.prototype = Object.create(Input.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  ChunkBuffer$Companion$NoPool$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPool$1.prototype.constructor = ChunkBuffer$Companion$NoPool$1;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.constructor = ChunkBuffer$Companion$NoPoolManuallyManaged$1;
  ChunkBuffer.prototype = Object.create(Buffer.prototype);
  ChunkBuffer.prototype.constructor = ChunkBuffer;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  $sleepCOROUTINE$56.prototype = Object.create(CoroutineImpl.prototype);
  $sleepCOROUTINE$56.prototype.constructor = $sleepCOROUTINE$56;
  $trySuspendCOROUTINE$57.prototype = Object.create(CoroutineImpl.prototype);
  $trySuspendCOROUTINE$57.prototype.constructor = $trySuspendCOROUTINE$57;
  $copyToSequentialImplCOROUTINE$58.prototype = Object.create(CoroutineImpl.prototype);
  $copyToSequentialImplCOROUTINE$58.prototype.constructor = $copyToSequentialImplCOROUTINE$58;
  $copyToTailCOROUTINE$59.prototype = Object.create(CoroutineImpl.prototype);
  $copyToTailCOROUTINE$59.prototype.constructor = $copyToTailCOROUTINE$59;
  ByteArrayPool$1.prototype = Object.create(DefaultPool.prototype);
  ByteArrayPool$1.prototype.constructor = ByteArrayPool$1;
  ByteChannelJS.prototype = Object.create(ByteChannelSequentialBase.prototype);
  ByteChannelJS.prototype.constructor = ByteChannelJS;
  MalformedInputException.prototype = Object.create(Error.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  ByteReadPacket$pool$1.prototype = Object.create(SingleInstancePool.prototype);
  ByteReadPacket$pool$1.prototype.constructor = ByteReadPacket$pool$1;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  //endregion
  function ByteChannel() {
  }
  ByteChannel.$metadata$ = interfaceMeta('ByteChannel', [ByteReadChannel_1, ByteWriteChannel]);
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function $tryAwaitCOROUTINE$49(_this__u8e3s4, n, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x13_1 = _this__u8e3s4;
    this.y13_1 = n;
  }
  $tryAwaitCOROUTINE$49.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            if (this.x13_1.z13_1.p14() < this.y13_1) {
              this.jh_1 = 1;
              suspendResult = this.x13_1.z13_1.o14(this.y13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.jh_1 = 2;
            continue $sm;
          case 2:
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
  $tryAwaitCOROUTINE$49.$metadata$ = classMeta('$tryAwaitCOROUTINE$49', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ByteChannelSequentialBase_init_$Init$(initial, autoFlush, pool, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      pool = Companion_getInstance_4().q14_1;
    ByteChannelSequentialBase.call($this, initial, autoFlush, pool);
    return $this;
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.g14_1.ri_1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v14_1) == null);
  }
  function _set_lastReadAvailable__98ukjs($this, _set____db54di) {
    var tmp0_setValue = lastReadAvailable$factory();
    $this.j14_1.si_1 = _set____db54di;
    return Unit_getInstance();
  }
  function _get_lastReadAvailable__cgybqk($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.AtomicInt.getValue' call
    var tmp0_getValue = lastReadAvailable$factory_0();
    tmp$ret$0 = $this.j14_1.si_1;
    return tmp$ret$0;
  }
  function _set_lastReadView__2y3peu($this, _set____db54di) {
    var tmp0_setValue = lastReadView$factory();
    $this.k14_1.ri_1 = _set____db54di;
    return Unit_getInstance();
  }
  function _get_lastReadView__ihufyy($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    var tmp0_getValue = lastReadView$factory_0();
    tmp$ret$0 = $this.k14_1.ri_1;
    return tmp$ret$0;
  }
  function flushImpl($this) {
    if ($this.h14_1.es()) {
      $this.l14_1.x14();
      return false;
    }
    flushWrittenBytes($this);
    $this.l14_1.x14();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = $this.m14_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.h14_1.g();
    var buffer = ensureNotNull($this.h14_1.o15());
    $this.n14_1.p15(buffer);
    tmp$ret$0 = $this.e14_1.atomicfu$addAndGet(size);
    tmp$ret$1 = tmp$ret$0;
  }
  function ensureNotClosed($this) {
    if ($this.q15()) {
      var tmp0_elvis_lhs = $this.n13();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.n13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.n13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.kr();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $cont) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function completeReading($this) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    var tmp0__get_readRemaining__u3cy9h = _get_lastReadView__ihufyy($this);
    tmp$ret$0 = tmp0__get_readRemaining__u3cy9h.h16_1 - tmp0__get_readRemaining__u3cy9h.g16_1 | 0;
    var remaining = tmp$ret$0;
    var delta = _get_lastReadAvailable__cgybqk($this) - remaining | 0;
    if (!(_get_lastReadView__ihufyy($this) === Companion_getInstance_1().m16())) {
      completeReadHead($this.i14_1, _get_lastReadView__ihufyy($this));
    }
    if (delta > 0) {
      $this.n16(delta);
    }
    _set_lastReadAvailable__98ukjs($this, 0);
    _set_lastReadView__2y3peu($this, Companion_getInstance_4().s14_1);
  }
  function discardSuspend($this, max, discarded0, $cont) {
    var tmp = new $discardSuspendCOROUTINE$41($this, max, discarded0, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$0 = "Can't read negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp1_minusAssign = $this.f14_1;
    tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    $this.c14_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp2_minusAssign = $this.e14_1;
    tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    var tmp3_check = $this.f14_1.si_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.a17() + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = $this.a17() >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$2 = 'Readable bytes count is negative: ' + $this.a17() + ', ' + count + ' in ' + $this;
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$0 = "Can't write negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    var tmp1_plusAssign = $this.f14_1;
    tmp1_plusAssign.atomicfu$getAndAdd(count);
    $this.d14_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    var tmp2_check = $this.f14_1.si_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.f14_1.si_1 + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.p14() < $count ? !this$0.q15() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.a17() < $count ? !this$0.b17() : false;
    };
  }
  function ByteChannelSequentialBase$beginWriteSession$1(this$0) {
    this.z13_1 = this$0;
  }
  ByteChannelSequentialBase$beginWriteSession$1.prototype.c17 = function (min) {
    if (this.z13_1.p14() === 0)
      return null;
    return this.z13_1.h14_1.d17(min);
  };
  ByteChannelSequentialBase$beginWriteSession$1.prototype.e17 = function (n, $cont) {
    var tmp = new $tryAwaitCOROUTINE$49(this, n, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase$beginWriteSession$1.$metadata$ = classMeta(undefined, [WriterSuspendSession]);
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n17_1 = _this__u8e3s4;
    this.o17_1 = count;
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 4;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.n17_1.p14() < this.o17_1 ? !this.n17_1.q15() : false)) {
              this.jh_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.n17_1)) {
              this.jh_1 = 2;
              suspendResult = this.n17_1.l14_1.p17(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.n17_1, this.o17_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.jh_1 = 3;
            continue $sm;
          case 3:
            this.jh_1 = 1;
            continue $sm;
          case 4:
            throw this.mh_1;
          case 5:
            return Unit_getInstance();
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
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y17_1 = _this__u8e3s4;
    this.z17_1 = count;
  }
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.y17_1.a17() < this.z17_1 ? !this.y17_1.b17() : false)) {
              this.jh_1 = 4;
              continue $sm;
            }

            this.jh_1 = 2;
            suspendResult = this.y17_1.l14_1.p17(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.y17_1, this.z17_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jh_1 = 1;
            continue $sm;
          case 3:
            throw this.mh_1;
          case 4:
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
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writePacketCOROUTINE$8(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i18_1 = _this__u8e3s4;
    this.j18_1 = packet;
  }
  $writePacketCOROUTINE$8.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.i18_1.o14(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var size = this.j18_1.r18().i8();
            this.i18_1.h14_1.s18(this.j18_1);
            this.i18_1.t18(size);
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
  $writePacketCOROUTINE$8.$metadata$ = classMeta('$writePacketCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c19_1 = _this__u8e3s4;
    this.d19_1 = src;
  }
  $writeFullyCOROUTINE$9.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.c19_1.o14(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.d19_1.h16_1 - this.d19_1.g16_1 | 0;
            writeFully$default(this.c19_1.h14_1, this.d19_1, 0, 2, null);
            this.c19_1.t18(count);
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
  $writeFullyCOROUTINE$9.$metadata$ = classMeta('$writeFullyCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m19_1 = _this__u8e3s4;
    this.n19_1 = src;
    this.o19_1 = offset;
    this.p19_1 = length;
  }
  $writeFullyCOROUTINE$10.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 4;
            this.q19_1 = this.o19_1;
            this.r19_1 = this.o19_1 + this.p19_1 | 0;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.q19_1 < this.r19_1)) {
              this.jh_1 = 3;
              continue $sm;
            }

            this.jh_1 = 2;
            suspendResult = this.m19_1.o14(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.m19_1.p14();
            var tmp1_min = this.r19_1 - this.q19_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.m19_1.h14_1, this.n19_1, this.q19_1, bytesCount);
            this.q19_1 = this.q19_1 + bytesCount | 0;
            this.m19_1.t18(bytesCount);
            this.jh_1 = 1;
            continue $sm;
          case 3:
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
  $writeFullyCOROUTINE$10.$metadata$ = classMeta('$writeFullyCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1a_1 = _this__u8e3s4;
    this.b1a_1 = limit;
  }
  $readRemainingCOROUTINE$26.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            ensureNotFailed(this.a1a_1);
            var tmp_0 = this;
            tmp_0.c1a_1 = BytePacketBuilder_init_$Create$(null, 1, null);
            var tmp_1 = this;
            var tmp_2 = this;
            tmp_2.d1a_1 = this.a1a_1.i14_1.r18();
            tmp_1.e1a_1 = this.b1a_1.b1(this.d1a_1) <= 0 ? this.b1a_1 : this.d1a_1;
            this.c1a_1.i1a(this.a1a_1.i14_1, this.e1a_1);
            this.a1a_1.n16(this.e1a_1.i8());
            var tmp_3 = this;
            var tmp_4 = this;
            tmp_4.f1a_1 = this.c1a_1.g();
            tmp_3.g1a_1 = this.b1a_1.o6(toLong(this.f1a_1));
            if (this.g1a_1.equals(new Long(0, 0)) ? true : this.a1a_1.b17()) {
              var tmp_5 = this;
              ensureNotFailed_0(this.a1a_1, this.c1a_1);
              tmp_5.h1a_1 = this.c1a_1.t2();
              this.jh_1 = 2;
              continue $sm;
            } else {
              this.jh_1 = 1;
              suspendResult = readRemainingSuspend(this.a1a_1, this.c1a_1, this.b1a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.h1a_1 = suspendResult;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            return this.h1a_1;
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
  $readRemainingCOROUTINE$26.$metadata$ = classMeta('$readRemainingCOROUTINE$26', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z15_1 = _this__u8e3s4;
    this.a16_1 = builder;
    this.b16_1 = limit;
  }
  $readRemainingSuspendCOROUTINE$27.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 5;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!(toLong(this.a16_1.g()).b1(this.b16_1) < 0)) {
              this.jh_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp_1 = this;
            var tmp0_minus = this.a16_1.g();
            tmp_1.c16_1 = this.b16_1.o6(toLong(tmp0_minus));
            var tmp_2 = this;
            tmp_2.d16_1 = this.z15_1.i14_1.r18();
            tmp_0.e16_1 = this.c16_1.b1(this.d16_1) <= 0 ? this.c16_1 : this.d16_1;
            this.a16_1.i1a(this.z15_1.i14_1, this.e16_1);
            this.z15_1.n16(this.e16_1.i8());
            ensureNotFailed_0(this.z15_1, this.a16_1);
            if (this.z15_1.b17() ? true : this.a16_1.g() === this.b16_1.i8()) {
              this.jh_1 = 4;
              continue $sm;
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.jh_1 = 3;
            suspendResult = this.z15_1.j1a(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.jh_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.z15_1, this.a16_1);
            return this.a16_1.t2();
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
  $readRemainingSuspendCOROUTINE$27.$metadata$ = classMeta('$readRemainingSuspendCOROUTINE$27', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1a_1 = _this__u8e3s4;
    this.t1a_1 = dst;
  }
  $readAvailableCOROUTINE$30.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp0_safe_receiver = this.s1a_1.n13();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.s1a_1.q15() ? this.s1a_1.a17() === 0 : false)
              return -1;
            if ((this.t1a_1.j16_1 - this.t1a_1.h16_1 | 0) === 0)
              return 0;
            if (this.s1a_1.a17() === 0) {
              this.jh_1 = 1;
              suspendResult = this.s1a_1.j1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            if (!this.s1a_1.i14_1.v1a()) {
              this.s1a_1.u1a();
            }

            var tmp0_minOf = toLong(this.t1a_1.j16_1 - this.t1a_1.h16_1 | 0);
            var tmp1_minOf = this.s1a_1.i14_1.r18();
            var size = (tmp0_minOf.b1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).i8();
            readFully_3(this.s1a_1.i14_1, this.t1a_1, size);
            this.s1a_1.n16(size);
            return size;
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
  $readAvailableCOROUTINE$30.$metadata$ = classMeta('$readAvailableCOROUTINE$30', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1b_1 = _this__u8e3s4;
    this.f1b_1 = dst;
    this.g1b_1 = offset;
    this.h1b_1 = length;
  }
  $readAvailableCOROUTINE$33.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp0_safe_receiver = this.e1b_1.n13();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.e1b_1.q15() ? this.e1b_1.a17() === 0 : false)
              return -1;
            if (this.h1b_1 === 0)
              return 0;
            if (this.e1b_1.a17() === 0) {
              this.jh_1 = 1;
              suspendResult = this.e1b_1.j1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            if (!this.e1b_1.i14_1.v1a()) {
              this.e1b_1.u1a();
            }

            var tmp0_minOf = toLong(this.h1b_1);
            var tmp1_minOf = this.e1b_1.i14_1.r18();
            var size = (tmp0_minOf.b1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).i8();
            readFully_2(this.e1b_1.i14_1, this.f1b_1, this.g1b_1, size);
            this.e1b_1.n16(size);
            return size;
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
  $readAvailableCOROUTINE$33.$metadata$ = classMeta('$readAvailableCOROUTINE$33', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1b_1 = _this__u8e3s4;
  }
  $awaitInternalAtLeast1COROUTINE$38.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            var tmp_0 = this;
            tmp_0.s1b_1 = this.q1b_1.i14_1;
            if (!this.s1b_1.t1b()) {
              var tmp_1 = this;
              tmp_1.r1b_1 = true;
              this.jh_1 = 3;
              continue $sm;
            } else {
              this.jh_1 = 1;
              suspendResult = this.q1b_1.j1a(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.r1b_1 = suspendResult;
            this.jh_1 = 3;
            continue $sm;
          case 2:
            throw this.mh_1;
          case 3:
            return this.r1b_1;
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
  $awaitInternalAtLeast1COROUTINE$38.$metadata$ = classMeta('$awaitInternalAtLeast1COROUTINE$38', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1c_1 = _this__u8e3s4;
    this.d1c_1 = atLeast;
  }
  $awaitSuspendCOROUTINE$39.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            var tmp_0 = this;
            tmp_0.e1c_1 = this.d1c_1 >= 0;
            if (!this.e1c_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.jh_1 = 1;
            suspendResult = this.c1c_1.f1c(this.d1c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c1c_1.u1a();
            var tmp0_safe_receiver = this.c1c_1.n13();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.c1c_1.b17() ? this.c1c_1.a17() >= this.d1c_1 : false;
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
  $awaitSuspendCOROUTINE$39.$metadata$ = classMeta('$awaitSuspendCOROUTINE$39', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $discardCOROUTINE$40(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1c_1 = _this__u8e3s4;
    this.p1c_1 = max;
  }
  $discardCOROUTINE$40.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.q1c_1 = this.o1c_1.i14_1.s1c(this.p1c_1);
            this.o1c_1.n16(this.q1c_1.i8());
            if (this.q1c_1.equals(this.p1c_1) ? true : this.o1c_1.b17()) {
              var tmp_0 = this;
              ensureNotFailed(this.o1c_1);
              return this.q1c_1;
            } else {
              this.jh_1 = 1;
              suspendResult = discardSuspend(this.o1c_1, this.p1c_1, this.q1c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.r1c_1 = suspendResult;
            this.jh_1 = 2;
            continue $sm;
          case 2:
            return this.r1c_1;
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
  $discardCOROUTINE$40.$metadata$ = classMeta('$discardCOROUTINE$40', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $discardSuspendCOROUTINE$41(_this__u8e3s4, max, discarded0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w16_1 = _this__u8e3s4;
    this.x16_1 = max;
    this.y16_1 = discarded0;
  }
  $discardSuspendCOROUTINE$41.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 5;
            this.z16_1 = this.y16_1;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            this.jh_1 = 2;
            suspendResult = this.w16_1.t1c(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              this.jh_1 = 4;
              continue $sm;
            } else {
              this.jh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            var count = this.w16_1.i14_1.s1c(this.x16_1.o6(this.z16_1));
            this.w16_1.n16(count.i8());
            this.z16_1 = this.z16_1.n6(count);
            if (this.z16_1.b1(this.x16_1) < 0 ? !this.w16_1.b17() : false) {
              this.jh_1 = 1;
              continue $sm;
            }

            this.jh_1 = 4;
            continue $sm;
          case 4:
            ensureNotFailed(this.w16_1);
            return this.z16_1;
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
  $discardSuspendCOROUTINE$41.$metadata$ = classMeta('$discardSuspendCOROUTINE$41', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    this.a14_1 = autoFlush;
    this.b14_1 = atomic$ref$1(Companion_getInstance_4().s14_1);
    this.c14_1 = atomic$long$1(new Long(0, 0));
    this.d14_1 = atomic$long$1(new Long(0, 0));
    this.e14_1 = atomic$int$1(0);
    this.f14_1 = atomic$int$1(0);
    this.g14_1 = atomic$ref$1(null);
    this.h14_1 = new BytePacketBuilder(pool);
    this.i14_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.j14_1 = atomic$int$1(0);
    this.k14_1 = atomic$ref$1(Companion_getInstance_4().s14_1);
    this.l14_1 = new AwaitingSlot();
    this.m14_1 = new Object();
    var tmp = this;
    tmp.n14_1 = BytePacketBuilder_init_$Create$(null, 1, null);
    var count = remainingAll(initial).i8();
    this.t18(count);
    this.e14_1.atomicfu$addAndGet(count);
  }
  ByteChannelSequentialBase.prototype.u1c = function () {
    return this.a14_1;
  };
  ByteChannelSequentialBase.prototype.q15 = function () {
    return !(this.g14_1.ri_1 == null);
  };
  ByteChannelSequentialBase.prototype.v1c = function () {
    return this.h14_1;
  };
  ByteChannelSequentialBase.prototype.w1c = function () {
    return this.i14_1;
  };
  ByteChannelSequentialBase.prototype.a17 = function () {
    return this.e14_1.si_1;
  };
  ByteChannelSequentialBase.prototype.p14 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.f14_1.si_1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.b17 = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.q15() ? this.f14_1.si_1 === 0 : false;
  };
  ByteChannelSequentialBase.prototype.x1c = function () {
    return this.q15();
  };
  ByteChannelSequentialBase.prototype.n13 = function () {
    var tmp0_safe_receiver = this.g14_1.ri_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v14_1;
  };
  ByteChannelSequentialBase.prototype.o14 = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.f1c = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.kd = function () {
    flushImpl(this);
  };
  ByteChannelSequentialBase.prototype.u1a = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.m14_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    tmp$ret$0 = unsafeAppend(this.i14_1, this.n14_1);
    tmp$ret$1 = tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.o13 = function (packet, $cont) {
    var tmp = new $writePacketCOROUTINE$8(this, packet, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.y1c = function (src, $cont) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.z1c = function (src, offset, length, $cont) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.a1d = function () {
    return new ByteChannelSequentialBase$beginWriteSession$1(this);
  };
  ByteChannelSequentialBase.prototype.b1d = function (written) {
    this.h14_1.c1d();
    this.t18(written);
  };
  ByteChannelSequentialBase.prototype.n16 = function (count) {
    addBytesRead(this, count);
    this.l14_1.x14();
  };
  ByteChannelSequentialBase.prototype.d1d = function (limit, $cont) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.f1d = function (dst, $cont) {
    return this.g1d(dst instanceof Buffer ? dst : THROW_CCE(), $cont);
  };
  ByteChannelSequentialBase.prototype.g1d = function (dst, $cont) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.h1d = function (dst, offset, length, $cont) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.t1c = function (atLeast, $cont) {
    // Inline function 'kotlin.require' call
    var tmp0_require = atLeast >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.await.<anonymous>' call
      tmp$ret$0 = "atLeast parameter shouldn't be negative: " + atLeast;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = toLong(atLeast).b1(new Long(4088, 0)) <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.await.<anonymous>' call
      tmp$ret$1 = "atLeast parameter shouldn't be larger than max buffer size of 4088: " + atLeast;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    completeReading(this);
    if (atLeast === 0)
      return !this.b17();
    if (this.i14_1.r18().b1(toLong(atLeast)) >= 0)
      return true;
    return this.j1a(atLeast, $cont);
  };
  ByteChannelSequentialBase.prototype.i1d = function ($cont) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.j1a = function (atLeast, $cont) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.j1d = function (max, $cont) {
    var tmp = new $discardCOROUTINE$40(this, max, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ByteChannelSequentialBase.prototype.kp = function (cause) {
    if (!(this.n13() == null) ? true : this.q15()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.vx(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  ByteChannelSequentialBase.prototype.vx = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.g14_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.i14_1.kr();
      this.h14_1.kr();
      this.n14_1.kr();
    } else {
      this.kd();
    }
    this.l14_1.k1d(cause);
    return true;
  };
  ByteChannelSequentialBase.prototype.l1d = function (dst, limit) {
    var size = this.i14_1.r18();
    var tmp;
    if (size.b1(limit) <= 0) {
      dst.h14_1.s18(this.i14_1);
      dst.t18(size.i8());
      this.n16(size.i8());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  ByteChannelSequentialBase.prototype.t18 = function (count) {
    addBytesWritten(this, count);
    if (this.q15()) {
      this.h14_1.kr();
      ensureNotClosed(this);
    }
    if (this.u1c() ? true : this.p14() === 0) {
      this.kd();
    }
  };
  ByteChannelSequentialBase.$metadata$ = classMeta('ByteChannelSequentialBase', [ByteChannel, ByteReadChannel_1, ByteWriteChannel, SuspendableReadSession, HasReadSession, HasWriteSession]);
  function get_EXPECTED_CAPACITY() {
    return EXPECTED_CAPACITY;
  }
  var EXPECTED_CAPACITY;
  function lastReadAvailable$factory() {
    return getPropertyCallableRef('lastReadAvailable', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadAvailable__cgybqk(receiver);
    }, function (receiver, value) {
      return _set_lastReadAvailable__98ukjs(receiver, value);
    });
  }
  function lastReadAvailable$factory_0() {
    return getPropertyCallableRef('lastReadAvailable', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadAvailable__cgybqk(receiver);
    }, function (receiver, value) {
      return _set_lastReadAvailable__98ukjs(receiver, value);
    });
  }
  function lastReadView$factory() {
    return getPropertyCallableRef('lastReadView', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadView__ihufyy(receiver);
    }, function (receiver, value) {
      return _set_lastReadView__2y3peu(receiver, value);
    });
  }
  function lastReadView$factory_0() {
    return getPropertyCallableRef('lastReadView', 1, KMutableProperty1, function (receiver) {
      return _get_lastReadView__ihufyy(receiver);
    }, function (receiver, value) {
      return _set_lastReadView__2y3peu(receiver, value);
    });
  }
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.kp(null);
  }
  function readAvailable(_this__u8e3s4, dst, $cont) {
    return _this__u8e3s4.h1d(dst, 0, dst.length, $cont);
  }
  function copyTo(_this__u8e3s4, dst, $cont) {
    Companion_getInstance();
    return copyTo_0(_this__u8e3s4, dst, new Long(-1, 2147483647), $cont);
  }
  function discard(_this__u8e3s4, $cont) {
    Companion_getInstance();
    return _this__u8e3s4.j1d(new Long(-1, 2147483647), $cont);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.vx(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  ClosedWriteChannelException.$metadata$ = classMeta('ClosedWriteChannelException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function writeFully(_this__u8e3s4, src, $cont) {
    return _this__u8e3s4.z1c(src, 0, src.length, $cont);
  }
  function get_CLOSED_SUCCESS() {
    init_properties_CloseElement_kt_zcr6ie();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.v14_1 = cause;
  }
  CloseElement.$metadata$ = classMeta('CloseElement');
  var properties_initialized_CloseElement_kt_clkism;
  function init_properties_CloseElement_kt_zcr6ie() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function WriterJob() {
  }
  WriterJob.$metadata$ = interfaceMeta('WriterJob', [Job]);
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel_0(autoFlush), true, block);
  }
  function writer$default(_this__u8e3s4, coroutineContext, autoFlush, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coroutineContext = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      autoFlush = false;
    return writer(_this__u8e3s4, coroutineContext, autoFlush, block);
  }
  function WriterScope() {
  }
  WriterScope.$metadata$ = interfaceMeta('WriterScope', [CoroutineScope]);
  function ChannelJob(delegate, channel) {
    this.m1d_1 = delegate;
    this.n1d_1 = channel;
  }
  ChannelJob.prototype.ow = function () {
    return this.n1d_1;
  };
  ChannelJob.prototype.kj = function () {
    return this.m1d_1.kj();
  };
  ChannelJob.prototype.s = function () {
    return this.m1d_1.s();
  };
  ChannelJob.prototype.xk = function (child) {
    return this.m1d_1.xk(child);
  };
  ChannelJob.prototype.pk = function (cause) {
    this.m1d_1.pk(cause);
  };
  ChannelJob.prototype.f4 = function (initial, operation) {
    return this.m1d_1.f4(initial, operation);
  };
  ChannelJob.prototype.z3 = function (key) {
    return this.m1d_1.z3(key);
  };
  ChannelJob.prototype.hk = function () {
    return this.m1d_1.hk();
  };
  ChannelJob.prototype.lk = function (onCancelling, invokeImmediately, handler) {
    return this.m1d_1.lk(onCancelling, invokeImmediately, handler);
  };
  ChannelJob.prototype.kk = function (handler) {
    return this.m1d_1.kk(handler);
  };
  ChannelJob.prototype.e4 = function (key) {
    return this.m1d_1.e4(key);
  };
  ChannelJob.prototype.g4 = function (context) {
    return this.m1d_1.g4(context);
  };
  ChannelJob.prototype.fk = function () {
    return this.m1d_1.fk();
  };
  ChannelJob.prototype.toString = function () {
    return 'ChannelJob[' + this.m1d_1 + ']';
  };
  ChannelJob.$metadata$ = classMeta('ChannelJob', [ReaderJob, WriterJob, Job]);
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.jj().z3(Key_getInstance());
    var job = launch$default(_this__u8e3s4, context, null, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null), 2, null);
    job.kk(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ReaderJob() {
  }
  ReaderJob.$metadata$ = interfaceMeta('ReaderJob', [Job]);
  function ChannelScope(delegate, channel) {
    this.o1d_1 = channel;
    this.p1d_1 = delegate;
  }
  ChannelScope.prototype.ow = function () {
    return this.o1d_1;
  };
  ChannelScope.prototype.jj = function () {
    return this.p1d_1.jj();
  };
  ChannelScope.$metadata$ = classMeta('ChannelScope', [ReaderScope, WriterScope, CoroutineScope]);
  function ReaderScope() {
  }
  ReaderScope.$metadata$ = interfaceMeta('ReaderScope', [CoroutineScope]);
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.y1d_1 = $attachJob;
    this.z1d_1 = $channel;
    this.a1e_1 = $block;
    this.b1e_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchChannel$slambda.prototype.e1e = function ($this$launch, $cont) {
    var tmp = this.f1e($this$launch, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  launchChannel$slambda.prototype.th = function (p1, $cont) {
    return this.e1e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchChannel$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            if (this.y1d_1) {
              this.z1d_1.m13(ensureNotNull(this.c1e_1.jj().z3(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.c1e_1, this.z1d_1);
            tmp_0.d1e_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.a1e_1(this.d1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kh_1 = 3;
            this.jh_1 = 4;
            continue $sm;
          case 2:
            this.kh_1 = 3;
            var tmp_2 = this.mh_1;
            if (tmp_2 instanceof Error) {
              var cause = this.mh_1;
              if (!equals(this.b1e_1, Dispatchers_getInstance().lv_1) ? !(this.b1e_1 == null) : false) {
                throw cause;
              }
              this.z1d_1.kp(cause);
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
  launchChannel$slambda.prototype.f1e = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.y1d_1, this.z1d_1, this.a1e_1, this.b1e_1, completion);
    i.c1e_1 = $this$launch;
    return i;
  };
  launchChannel$slambda.$metadata$ = classMeta('launchChannel$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1e($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.vx(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function ReadSession() {
  }
  ReadSession.$metadata$ = interfaceMeta('ReadSession');
  function SuspendableReadSession() {
  }
  SuspendableReadSession.$metadata$ = interfaceMeta('SuspendableReadSession', [ReadSession]);
  function HasReadSession() {
  }
  HasReadSession.$metadata$ = interfaceMeta('HasReadSession');
  function WriterSuspendSession() {
  }
  WriterSuspendSession.$metadata$ = interfaceMeta('WriterSuspendSession', [WriterSession]);
  function HasWriteSession() {
  }
  HasWriteSession.$metadata$ = interfaceMeta('HasWriteSession');
  function WriterSession() {
  }
  WriterSession.$metadata$ = interfaceMeta('WriterSession');
  function requestWriteBuffer(_this__u8e3s4, desiredSpace, $cont) {
    var tmp = new $requestWriteBufferCOROUTINE$52(_this__u8e3s4, desiredSpace, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function completeWriting(_this__u8e3s4, buffer, written, $cont) {
    if (isInterface(_this__u8e3s4, HasWriteSession)) {
      _this__u8e3s4.b1d(written);
      return Unit_getInstance();
    }
    return completeWritingFallback(_this__u8e3s4, buffer, $cont);
  }
  function writeBufferSuspend(session, desiredSpace, $cont) {
    var tmp = new $writeBufferSuspendCOROUTINE$53(session, desiredSpace, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function writeBufferFallback() {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = Companion_getInstance_4().q14_1.c1f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.writeBufferFallback.<anonymous>' call
    tmp0_also.d1f();
    Companion_getInstance_1();
    tmp0_also.e1f(8);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function completeWritingFallback(_this__u8e3s4, buffer, $cont) {
    var tmp = new $completeWritingFallbackCOROUTINE$54(_this__u8e3s4, buffer, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function $requestWriteBufferCOROUTINE$52(_this__u8e3s4, desiredSpace, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1e_1 = _this__u8e3s4;
    this.p1e_1 = desiredSpace;
  }
  $requestWriteBufferCOROUTINE$52.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            var tmp_1;
            var tmp_2 = this.o1e_1;
            if (isInterface(tmp_2, HasWriteSession)) {
              tmp_1 = this.o1e_1.a1d();
            } else {
              tmp_1 = null;
            }

            tmp_0.q1e_1 = tmp_1;
            if (!(this.q1e_1 == null)) {
              this.r1e_1 = this.q1e_1.c17(this.p1e_1);
              if (!(this.r1e_1 == null)) {
                return this.r1e_1;
              }
              this.jh_1 = 2;
              suspendResult = writeBufferSuspend(this.q1e_1, this.p1e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            return writeBufferFallback();
          case 2:
            return suspendResult;
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
  $requestWriteBufferCOROUTINE$52.$metadata$ = classMeta('$requestWriteBufferCOROUTINE$52', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeBufferSuspendCOROUTINE$53(session, desiredSpace, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1f_1 = session;
    this.b1f_1 = desiredSpace;
  }
  $writeBufferSuspendCOROUTINE$53.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.a1f_1.e17(this.b1f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = this.a1f_1.c17(this.b1f_1);
            return tmp0_elvis_lhs == null ? this.a1f_1.c17(1) : tmp0_elvis_lhs;
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
  $writeBufferSuspendCOROUTINE$53.$metadata$ = classMeta('$writeBufferSuspendCOROUTINE$53', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $completeWritingFallbackCOROUTINE$54(_this__u8e3s4, buffer, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1f_1 = _this__u8e3s4;
    this.o1f_1 = buffer;
  }
  $completeWritingFallbackCOROUTINE$54.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this.o1f_1;
            if (tmp_0 instanceof ChunkBuffer) {
              this.jh_1 = 2;
              suspendResult = this.n1f_1.y1c(this.o1f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            throw UnsupportedOperationException_init_$Create$('Only ChunkBuffer instance is supported.');
          case 2:
            this.o1f_1.z1f(Companion_getInstance_4().q14_1);
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
  $completeWritingFallbackCOROUTINE$54.$metadata$ = classMeta('$completeWritingFallbackCOROUTINE$54', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_highByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 >>> 8 | 0);
  }
  function get_lowByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 & 255);
  }
  function get_highShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 >>> 16 | 0);
  }
  function get_lowShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 & 65535);
  }
  function get(_this__u8e3s4, index) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = _this__u8e3s4.a1g_1.getInt8(index);
    return tmp$ret$0;
  }
  function set(_this__u8e3s4, index, value) {
    return _this__u8e3s4.a1g_1.setInt8(index, value);
  }
  function Allocator() {
  }
  Allocator.$metadata$ = interfaceMeta('Allocator');
  function storeByteArray(_this__u8e3s4, offset, source, sourceOffset, count) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, sourceOffset, count);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.d1g(_this__u8e3s4, 0, count, offset);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function decode(_this__u8e3s4, input, max) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    tmp$ret$0 = tmp0_minOf.b1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    var tmp2_buildString = tmp$ret$0.i8();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp0_apply, max);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  }
  function decode$default(_this__u8e3s4, input, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return decode(_this__u8e3s4, input, max);
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().q14_1.c1f();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.h16_1 - single.g16_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully_0(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = BytePacketBuilder_init_$Create$(null, 1, null);
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.f1g(single.e1g());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.t2();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            builder.kr();
            throw $p;
          } else {
            throw $p;
          }
        }
      }
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single.z1f(Companion_getInstance_4().q14_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.r18();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.r18();
      tmp$ret$0 = tmp0_maxOf.b1(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        var before = tmp$ret$0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
        // Inline function 'kotlin.check' call
        var tmp0_check = rc >= 0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$1 = 'Check failed.';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$2 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
        tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.c1d();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        var before = tmp$ret$0;
        if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
          size = 0;
        } else {
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        var tmp = bytesWritten;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
        tmp$ret$2 = size > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.c1d();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.t2();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.kr();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function encode$default(_this__u8e3s4, input, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(input);
    return encode(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function Companion() {
    Companion_instance = this;
    this.l16_1 = 8;
  }
  Companion.prototype.g1g = function () {
    return this.l16_1;
  };
  Companion.prototype.m16 = function () {
    return Companion_getInstance_4().s14_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.f16_1 = memory;
    this.g16_1 = 0;
    this.h16_1 = 0;
    this.i16_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb = this.f16_1;
    tmp$ret$0 = tmp0__get_size32__ezg0pb.a1g_1.byteLength;
    tmp.j16_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb_0 = this.f16_1;
    tmp$ret$1 = tmp0__get_size32__ezg0pb_0.a1g_1.byteLength;
    tmp_0.k16_1 = tmp$ret$1;
  }
  Buffer.prototype.h1g = function () {
    return this.f16_1;
  };
  Buffer.prototype.i1g = function () {
    return this.g16_1;
  };
  Buffer.prototype.j1g = function () {
    return this.h16_1;
  };
  Buffer.prototype.k1g = function () {
    return this.j16_1;
  };
  Buffer.prototype.l1g = function () {
    return this.k16_1 - this.j16_1 | 0;
  };
  Buffer.prototype.m1g = function () {
    return this.k16_1;
  };
  Buffer.prototype.n1g = function () {
    return this.h16_1 - this.g16_1 | 0;
  };
  Buffer.prototype.o1g = function () {
    return this.j16_1 - this.h16_1 | 0;
  };
  Buffer.prototype.p1g = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.g16_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.h16_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.h16_1 - this.g16_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.g16_1 = newReadPosition;
  };
  Buffer.prototype.q1g = function (count) {
    var newWritePosition = this.h16_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.j16_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.j16_1 - this.h16_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.h16_1 = newWritePosition;
  };
  Buffer.prototype.r1g = function (position) {
    var limit = this.j16_1;
    if (position < this.h16_1) {
      var tmp = position - this.h16_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.j16_1 - this.h16_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.h16_1 = position;
        return false;
      }
      var tmp_0 = position - this.h16_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.j16_1 - this.h16_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.h16_1 = position;
    return true;
  };
  Buffer.prototype.s1g = function (position) {
    if (position < 0 ? true : position > this.h16_1) {
      var tmp = position - this.g16_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.h16_1 - this.g16_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.g16_1 === position)) {
      this.g16_1 = position;
    }
  };
  Buffer.prototype.t1g = function (count) {
    var newReadPosition = this.g16_1 - count | 0;
    if (newReadPosition < this.i16_1) {
      rewindFailed(count, this.g16_1 - this.i16_1 | 0);
    }
    this.g16_1 = newReadPosition;
  };
  Buffer.prototype.u1g = function (startGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.g16_1 >= startGap) {
      this.i16_1 = startGap;
      return Unit_getInstance();
    }
    if (this.g16_1 === this.h16_1) {
      if (startGap > this.j16_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.h16_1 = startGap;
      this.g16_1 = startGap;
      this.i16_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.e1f = function (endGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = endGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.k16_1 - endGap | 0;
    if (newLimit >= this.h16_1) {
      this.j16_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.i16_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.g16_1 === this.h16_1) {
      this.j16_1 = newLimit;
      this.g16_1 = newLimit;
      this.h16_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.v1g = function () {
    this.i16_1 = 0;
    this.g16_1 = 0;
    var capacity = this.k16_1;
    this.h16_1 = capacity;
  };
  Buffer.prototype.d1f = function () {
    this.w1g(this.k16_1 - this.i16_1 | 0);
  };
  Buffer.prototype.w1g = function (limit) {
    var startGap = this.i16_1;
    this.g16_1 = startGap;
    this.h16_1 = startGap;
    this.j16_1 = limit;
  };
  Buffer.prototype.x1g = function () {
    this.y1g(0);
    this.z1g();
  };
  Buffer.prototype.z1g = function () {
    this.j16_1 = this.k16_1;
  };
  Buffer.prototype.y1g = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newReadPosition >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = newReadPosition <= this.g16_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.g16_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.g16_1 = newReadPosition;
    if (this.i16_1 > newReadPosition) {
      this.i16_1 = newReadPosition;
    }
  };
  Buffer.prototype.a1h = function (copy) {
    copy.j16_1 = this.j16_1;
    copy.i16_1 = this.i16_1;
    copy.g16_1 = this.g16_1;
    copy.h16_1 = this.h16_1;
  };
  Buffer.prototype.b1h = function () {
    var readPosition = this.g16_1;
    if (readPosition === this.h16_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.g16_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.get' call
    var tmp0_get = this.f16_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = tmp0_get.a1g_1.getInt8(readPosition);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Buffer.prototype.c1h = function (value) {
    var writePosition = this.h16_1;
    if (writePosition === this.j16_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.set' call
    var tmp0_set = this.f16_1;
    tmp0_set.a1g_1.setInt8(writePosition, value);
    tmp$ret$0 = Unit_getInstance();
    this.h16_1 = writePosition + 1 | 0;
  };
  Buffer.prototype.d1h = function () {
    this.x1g();
    this.d1f();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = this.h16_1 - this.g16_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$1 = this.j16_1 - this.h16_1 | 0;
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.i16_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$2 = this.k16_1 - this.j16_1 | 0;
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.k16_1 + ')';
  };
  Buffer.$metadata$ = classMeta('Buffer');
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.k16_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.k16_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.k16_1 - _this__u8e3s4.j16_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.h16_1 - _this__u8e3s4.g16_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.g16_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.k16_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.i16_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.h16_1 - _this__u8e3s4.g16_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.g16_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  InsufficientSpaceException.$metadata$ = classMeta('InsufficientSpaceException', undefined, undefined, undefined, undefined, Exception.prototype);
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.y1g(_this__u8e3s4.g16_1 - size | 0);
  }
  function canRead(_this__u8e3s4) {
    return _this__u8e3s4.h16_1 > _this__u8e3s4.g16_1;
  }
  function write(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var rc = block(_this__u8e3s4.f16_1, _this__u8e3s4.h16_1, _this__u8e3s4.j16_1);
    _this__u8e3s4.q1g(rc);
    return rc;
  }
  function read(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var rc = block(_this__u8e3s4.f16_1, _this__u8e3s4.g16_1, _this__u8e3s4.h16_1);
    _this__u8e3s4.p1g(rc);
    return rc;
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.h16_1 - other.g16_1 | 0;
    var tmp0_minOf = tmp$ret$0;
    tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    var size = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = _this__u8e3s4.j16_1 - _this__u8e3s4.h16_1 | 0;
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.f16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.j16_1;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0__anonymous__q1qw7t = other.f16_1;
    var tmp1__anonymous__uwfjfc_0 = other.g16_1;
    var tmp2__anonymous__z9zvc9_0 = other.h16_1;
    tmp0__anonymous__q1qw7t.d1g(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
    tmp$ret$3 = size;
    var rc = tmp$ret$3;
    other.p1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    var rc_0 = tmp$ret$5;
    _this__u8e3s4.q1g(rc_0);
    tmp$ret$6 = rc_0;
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$0 = _this__u8e3s4.j16_1 - _this__u8e3s4.h16_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = _this__u8e3s4.k16_1 - _this__u8e3s4.j16_1 | 0;
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.h16_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.j16_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.z1g();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.h16_1 - other.g16_1 | 0;
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.g16_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.f16_1.d1g(_this__u8e3s4.f16_1, other.g16_1, size, newReadPosition);
    other.p1g(size);
    _this__u8e3s4.y1g(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    init_properties_BufferFactory_kt_l6j3be();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this.h1h_1 = bufferSize;
    this.i1h_1 = allocator;
  }
  DefaultBufferPool.prototype.j1h = function () {
    return new ChunkBuffer(this.i1h_1.b1g(this.h1h_1), null, this);
  };
  DefaultBufferPool.prototype.k1h = function (instance) {
    this.i1h_1.c1g(instance.f16_1);
    DefaultPool.prototype.o1h.call(this, instance);
    instance.p1h();
  };
  DefaultBufferPool.prototype.o1h = function (instance) {
    return this.k1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.q1h = function (instance) {
    DefaultPool.prototype.r1h.call(this, instance);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0__get_size__8hfv5c = instance.f16_1;
    tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.a1g_1.byteLength);
    var tmp1_check = tmp$ret$0.equals(toLong(this.h1h_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0__get_size__8hfv5c_0 = instance.f16_1;
      tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.a1g_1.byteLength);
      tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.h1h_1 + ', actual: ' + toString(tmp$ret$1);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = !(instance === Companion_getInstance_4().s14_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = !(instance === Companion_getInstance_1().m16());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$4 = "Empty instance couldn't be recycled";
      var message_1 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = instance.s1h() === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
      var message_2 = tmp$ret$5;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    var tmp5_check = instance.t1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_check) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
      var message_3 = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    var tmp6_check = instance.y1f_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
      var message_4 = tmp$ret$7;
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  DefaultBufferPool.prototype.r1h = function (instance) {
    return this.q1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.u1h = function (instance) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = DefaultPool.prototype.v1h.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.w1h();
    tmp0_apply.d1h();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.v1h = function (instance) {
    return this.u1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.$metadata$ = classMeta('DefaultBufferPool', undefined, undefined, undefined, undefined, DefaultPool.prototype);
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function init_properties_BufferFactory_kt_l6j3be() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.h16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j16_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.d1g(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = length;
    var rc = tmp$ret$2;
    _this__u8e3s4.q1g(rc);
    tmp$ret$3 = rc;
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      tmp$ret$0 = "length shouldn't be negative: " + length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = src.h16_1 - src.g16_1 | 0;
    var tmp1_require = length <= tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$2 = src.h16_1 - src.g16_1 | 0;
      tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$4 = _this__u8e3s4.j16_1 - _this__u8e3s4.h16_1 | 0;
    var tmp2_require = length <= tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$5 = _this__u8e3s4.j16_1 - _this__u8e3s4.h16_1 | 0;
      tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
      var message_1 = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$8;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp3__anonymous__ufb84q = _this__u8e3s4.f16_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.h16_1;
    var tmp5__anonymous__kpxxpo = _this__u8e3s4.j16_1;
    var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.f16_1.d1g(tmp3__anonymous__ufb84q, src.g16_1, length, tmp4__anonymous__pkmkx7);
    src.p1g(length);
    tmp$ret$7 = length;
    var rc = tmp$ret$7;
    _this__u8e3s4.q1g(rc);
    tmp$ret$8 = rc;
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    readFully_0(_this__u8e3s4 instanceof Buffer ? _this__u8e3s4 : THROW_CCE(), destination, offset, length);
  }
  function writeExact(_this__u8e3s4, size, name, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.h16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j16_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_$Create$(name, size, writeRemaining);
    }
    block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = size;
    var rc = tmp$ret$0;
    _this__u8e3s4.q1g(rc);
    tmp$ret$1 = rc;
  }
  function readFully_0(_this__u8e3s4, destination, offset, length) {
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_1(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
    value = Unit_getInstance();
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.p1g(rc);
    tmp$ret$1 = rc;
    tmp$ret$2 = value;
  }
  function readExact(_this__u8e3s4, size, name, block) {
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < size) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + size + '.');
    }
    value = block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = size;
    var rc = tmp$ret$0;
    _this__u8e3s4.p1g(rc);
    tmp$ret$1 = rc;
    return value;
  }
  function readFully_1(_this__u8e3s4, dst, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.j16_1 - dst.h16_1 | 0;
    var tmp1_require = length <= tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp0__anonymous__q1qw7t.d1g(dst.f16_1, tmp1__anonymous__uwfjfc, length, dst.h16_1);
    dst.q1g(length);
    value = Unit_getInstance();
    tmp$ret$4 = length;
    var rc = tmp$ret$4;
    _this__u8e3s4.p1g(rc);
    tmp$ret$5 = rc;
    tmp$ret$6 = value;
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.h16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j16_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0__anonymous__q1qw7t.a1g_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
    tmp$ret$0 = 2;
    var rc = tmp$ret$0;
    _this__u8e3s4.q1g(rc);
    tmp$ret$1 = rc;
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    tmp$ret$0 = tmp0__anonymous__q1qw7t.a1g_1.getInt16(tmp1__anonymous__uwfjfc, false);
    tmp$ret$1 = tmp$ret$0;
    value = tmp$ret$1;
    tmp$ret$2 = 2;
    var rc = tmp$ret$2;
    _this__u8e3s4.p1g(rc);
    tmp$ret$3 = rc;
    tmp$ret$4 = value;
    return tmp$ret$4;
  }
  function coerceAtMostMaxIntOrFail(_this__u8e3s4, message) {
    if (_this__u8e3s4.b1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
      throw IllegalArgumentException_init_$Create$(message);
    return _this__u8e3s4.i8();
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function copyAll(_this__u8e3s4) {
    var copied = _this__u8e3s4.e1g();
    var tmp0_elvis_lhs = _this__u8e3s4.t1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return copied;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    return copyAll_0(next, copied, copied);
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.t1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        $this = tmp0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.y1h();
      current.z1f(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.h16_1 - $this.g16_1 | 0;
        var rem = toLong(tmp$ret$0).n6(n_0);
        var tmp0_elvis_lhs = $this.t1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = rem;
        $this = tmp0;
        n_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function copyAll_0(_this__u8e3s4, head, prev) {
    var $this = _this__u8e3s4;
    var head_0 = head;
    var prev_0 = prev;
    $l$1: do {
      $l$0: do {
        var copied = $this.e1g();
        prev_0.z1h(copied);
        var tmp0_elvis_lhs = $this.t1h();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return head_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = head_0;
        var tmp2 = copied;
        $this = tmp0;
        head_0 = tmp1;
        prev_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function forEachChunk(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var current = _this__u8e3s4;
    $l$loop: do {
      block(current);
      var tmp0_elvis_lhs = current.t1h();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      current = tmp;
    }
     while (true);
  }
  function buildPacket(block) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = BytePacketBuilder_init_$Create$(null, 1, null);
    try {
      block(builder);
      return builder.t2();
    } catch ($p) {
      if ($p instanceof Error) {
        builder.kr();
        throw $p;
      } else {
        throw $p;
      }
    }
  }
  function BytePacketBuilder_init_$Init$(pool, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance_4().q14_1;
    BytePacketBuilder.call($this, pool);
    return $this;
  }
  function BytePacketBuilder_init_$Create$(pool, $mask0, $marker) {
    return BytePacketBuilder_init_$Init$(pool, $mask0, $marker, Object.create(BytePacketBuilder.prototype));
  }
  function BytePacketBuilder(pool) {
    Output.call(this, pool);
  }
  BytePacketBuilder.prototype.g = function () {
    return this.a1i();
  };
  BytePacketBuilder.prototype.es = function () {
    return this.a1i() === 0;
  };
  BytePacketBuilder.prototype.b1i = function () {
  };
  BytePacketBuilder.prototype.c1i = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.h6 = function (value) {
    var tmp = Output.prototype.h6.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.c = function (value) {
    var tmp = Output.prototype.c.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.qf = function (value, startIndex, endIndex) {
    var tmp = Output.prototype.qf.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.t2 = function () {
    var size = this.g();
    var head = this.o15();
    return head == null ? Companion_getInstance_2().d1i_1 : new ByteReadPacket(head, toLong(size), this.g15_1);
  };
  BytePacketBuilder.prototype.toString = function () {
    return 'BytePacketBuilder(' + this.g() + ' bytes written)';
  };
  BytePacketBuilder.$metadata$ = classMeta('BytePacketBuilder', undefined, undefined, undefined, undefined, Output.prototype);
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, Object.create(ByteReadPacket.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.d1i_1 = new ByteReadPacket(Companion_getInstance_4().s14_1, new Long(0, 0), Companion_getInstance_4().r14_1);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.j1i();
  }
  ByteReadPacket.prototype.r1i = function () {
    return new ByteReadPacket(copyAll(this.e1i()), this.r18(), this.k18_1);
  };
  ByteReadPacket.prototype.s1i = function () {
    return null;
  };
  ByteReadPacket.prototype.t1i = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.u1i = function () {
  };
  ByteReadPacket.prototype.toString = function () {
    return 'ByteReadPacket(' + toString(this.r18()) + ' bytes remaining)';
  };
  ByteReadPacket.$metadata$ = classMeta('ByteReadPacket', undefined, undefined, undefined, undefined, Input.prototype);
  function ByteReadPacket_0(array, offset, length) {
    return ByteReadPacket_1(array, offset, length, ByteReadPacket$lambda);
  }
  function ByteReadPacket$lambda(it) {
    return Unit_getInstance();
  }
  function _set__head__b4pap2($this, newHead) {
    $this.l18_1 = newHead;
    $this.m18_1 = newHead.f16_1;
    $this.n18_1 = newHead.g16_1;
    $this.o18_1 = newHead.h16_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.t1b())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            var tmp$ret$6;
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.f16_1;
            var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.g16_1;
            var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.h16_1;
            var inductionVariable = tmp1__anonymous__uwfjfc;
            if (inductionVariable < tmp2__anonymous__z9zvc9)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.bits.get' call
                var tmp$ret$1;
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                tmp$ret$1 = tmp0__anonymous__q1qw7t_0.a1g_1.getInt8(index);
                tmp$ret$2 = tmp$ret$1;
                var codepoint = tmp$ret$2 & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  var tmp$ret$3;
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.h6(tmp3__anonymous__ufb84q);
                    var tmp0 = copied;
                    copied = tmp0 + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp$ret$3 = tmp_1;
                  tmp_0 = !tmp$ret$3;
                }
                if (tmp_0) {
                  tmp0__anonymous__q1qw7t.p1g(index - tmp1__anonymous__uwfjfc | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2__anonymous__z9zvc9);
            tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
            var rc = tmp$ret$5;
            tmp0__anonymous__q1qw7t.p1g(rc);
            tmp$ret$6 = rc;
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          tmp$ret$7 = tmp_2;
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h16_1 - tmp0__get_readRemaining__u3cy9h.g16_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp3__anonymous__ufb84q = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.f16_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.g16_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.h16_1;
                var inductionVariable = tmp1__anonymous__uwfjfc;
                if (inductionVariable < tmp2__anonymous__z9zvc9)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var tmp$ret$3;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    var tmp$ret$2;
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.a1g_1.getInt8(index);
                    tmp$ret$3 = tmp$ret$2;
                    var v = tmp$ret$3 & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      var tmp$ret$4;
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.h6(tmp3__anonymous__ufb84q_0);
                        var tmp0 = copied;
                        copied = tmp0 + 1 | 0;
                        tmp_0 = true;
                      }
                      tmp$ret$4 = tmp_0;
                      if (!tmp$ret$4) {
                        tmp3__anonymous__ufb84q.p1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            var tmp2 = byteCount;
                            byteCount = tmp2 + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      var tmp3 = byteCount;
                      byteCount = tmp3 - 1 | 0;
                      if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                        tmp3__anonymous__ufb84q.p1g(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      var tmp4 = byteCount;
                      byteCount = tmp4 - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          var tmp$ret$6;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp4__anonymous__pkmkx7 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.h6(tmp4__anonymous__pkmkx7);
                            var tmp0_0 = copied;
                            copied = tmp0_0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$6 = tmp_1;
                          if (!tmp$ret$6) {
                            tmp3__anonymous__ufb84q.p1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          var tmp$ret$7;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.h6(tmp5__anonymous__kpxxpo);
                            var tmp0_1 = copied;
                            copied = tmp0_1 + 1 | 0;
                            tmp_3 = true;
                          }
                          tmp$ret$7 = tmp_3;
                          if (!tmp$ret$7) {
                            tmp_2 = true;
                          } else {
                            var tmp$ret$8;
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.h6(tmp6__anonymous__fv9ai5);
                              var tmp0_2 = copied;
                              copied = tmp0_2 + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp$ret$8 = tmp_4;
                            tmp_2 = !tmp$ret$8;
                          }
                          if (tmp_2) {
                            tmp3__anonymous__ufb84q.p1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2__anonymous__z9zvc9);
                tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.p1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$12 = tmp1__get_readRemaining__qliyus.h16_1 - tmp1__get_readRemaining__qliyus.g16_1 | 0;
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$13 = tmp2__get_endGap__m31424.k16_1 - tmp2__get_endGap__m31424.j16_1 | 0;
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.i1j(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = current.h16_1 - current.g16_1 | 0;
        var tmp0_minOf = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf.b1(n_0) <= 0 ? tmp0_minOf : n_0;
        var size = tmp$ret$1.i8();
        current.p1g(size);
        var tmp1_this = $this_0;
        tmp1_this.n18_1 = tmp1_this.n18_1 + size | 0;
        afterRead($this_0, current);
        var tmp0 = $this_0;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$2 = n_0.o6(toLong(size));
        var tmp1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = skipped_0.n6(toLong(size));
        var tmp2 = tmp$ret$3;
        $this_0 = tmp0;
        n_0 = tmp1;
        skipped_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.i1j(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = current.h16_1 - current.g16_1 | 0;
      var tmp0_minOf = tmp$ret$0;
      var tmp1_minOf = currentCount;
      tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      var size = tmp$ret$1;
      current.p1g(size);
      var tmp1_this = $this;
      tmp1_this.n18_1 = tmp1_this.n18_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.q18_1 ? current.t1h() == null : false) {
      $this.n18_1 = current.g16_1;
      $this.o18_1 = current.h16_1;
      $this.w1i(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.h16_1 - current.g16_1 | 0;
    var size = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.k16_1 - current.j16_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(size, tmp0_minOf);
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.k18_1.c1f();
      Companion_getInstance_1();
      new_0.e1f(8);
      new_0.z1h(current.y1h());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.z1f($this.k18_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.k18_1.c1f();
    var chunk2 = $this.k18_1.c1f();
    Companion_getInstance_1();
    chunk1.e1f(8);
    Companion_getInstance_1();
    chunk2.e1f(8);
    chunk1.z1h(chunk2);
    chunk2.z1h(current.y1h());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.w1i(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.y1h();
        current_0.z1f($this_0.k18_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.w1i(new Long(0, 0));
          var tmp0 = $this_0;
          var tmp1 = empty_0;
          var tmp2 = empty_0;
          $this_0 = tmp0;
          current_0 = tmp1;
          empty_0 = tmp2;
          continue $l$0;
        } else {
          var tmp$ret$0;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$0 = next.h16_1 > next.g16_1;
          if (tmp$ret$0) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.p18_1;
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            tmp$ret$1 = next.h16_1 - next.g16_1 | 0;
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.o6(toLong(tmp1_minus));
            tmp0_this.w1i(tmp$ret$2);
            tmp = next;
          } else {
            var tmp3 = $this_0;
            var tmp4 = next;
            var tmp5 = empty_0;
            $this_0 = tmp3;
            current_0 = tmp4;
            empty_0 = tmp5;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.q18_1)
      return null;
    var chunk = $this.s1i();
    if (chunk == null) {
      $this.q18_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.l18_1);
    if (tail === Companion_getInstance_4().s14_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.p18_1.equals(new Long(0, 0));
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.t1h();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.w1i(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.z1h(chunk);
      var tmp2_this = $this;
      tmp2_this.w1i(tmp2_this.p18_1.n6(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        tmp$ret$0 = $this_0.o18_1 - $this_0.n18_1 | 0;
        var headSize = tmp$ret$0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.t1h();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().s14_1)) {
            $this_0.j1j(head_0);
          }
          var tmp0 = $this_0;
          var tmp1 = minSize_0;
          var tmp2 = next;
          $this_0 = tmp0;
          minSize_0 = tmp1;
          head_0 = tmp2;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.o18_1 = head_0.h16_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = tmp2_this.p18_1;
          tmp$ret$1 = tmp0_minus.o6(toLong(copied));
          tmp2_this.w1i(tmp$ret$1);
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$2 = next.h16_1 > next.g16_1;
          if (!tmp$ret$2) {
            head_0.z1h(null);
            head_0.z1h(next.y1h());
            next.z1f($this_0.k18_1);
          } else {
            next.u1g(copied);
          }
        }
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$3 = head_0.h16_1 - head_0.g16_1 | 0;
        if (tmp$ret$3 >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        var tmp3 = $this_0;
        var tmp4 = minSize_0;
        var tmp5 = head_0;
        $this_0 = tmp3;
        minSize_0 = tmp4;
        head_0 = tmp5;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = head.h16_1 - head.g16_1 | 0;
    if (tmp$ret$0 === 0) {
      $this.j1j(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    this.k18_1 = pool;
    this.l18_1 = head;
    this.m18_1 = head.f16_1;
    this.n18_1 = head.g16_1;
    this.o18_1 = head.h16_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.o18_1 - this.n18_1 | 0;
    tmp$ret$0 = remaining.o6(toLong(tmp0_minus));
    tmp.p18_1 = tmp$ret$0;
    this.q18_1 = false;
  }
  Input.prototype.t1b = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.o18_1 - this.n18_1 | 0;
    if (tmp$ret$0 === 0) {
      tmp_0 = this.p18_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.q18_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Input.prototype.e1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.l18_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.s1g(this.n18_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Input.prototype.v1i = function () {
    return this.n18_1;
  };
  Input.prototype.w1i = function (newValue) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newValue.b1(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.p18_1 = newValue;
  };
  Input.prototype.x1i = function () {
    return this.o18_1 - this.n18_1 | 0;
  };
  Input.prototype.r18 = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.o18_1 - this.n18_1 | 0;
    return toLong(tmp$ret$0).n6(this.p18_1);
  };
  Input.prototype.v1a = function () {
    return !(this.n18_1 === this.o18_1) ? true : !this.p18_1.equals(new Long(0, 0));
  };
  Input.prototype.kr = function () {
    var head = this.e1i();
    var empty = Companion_getInstance_4().s14_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.w1i(new Long(0, 0));
      releaseAll(head, this.k18_1);
    }
  };
  Input.prototype.u11 = function () {
    this.kr();
    if (!this.q18_1) {
      this.q18_1 = true;
    }
    this.u1i();
  };
  Input.prototype.o15 = function () {
    var head = this.e1i();
    var empty = Companion_getInstance_4().s14_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.w1i(new Long(0, 0));
    return head;
  };
  Input.prototype.y1i = function () {
    var head = this.e1i();
    var next = head.t1h();
    var empty = Companion_getInstance_4().s14_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.w1i(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = tmp0_this.p18_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = next.h16_1 - next.g16_1 | 0;
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.o6(toLong(tmp1_minus));
      tmp0_this.w1i(tmp$ret$1);
    }
    head.z1h(null);
    return head;
  };
  Input.prototype.z1i = function (chain) {
    if (chain === Companion_getInstance_4().s14_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.l18_1 === Companion_getInstance_4().s14_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = this.o18_1 - this.n18_1 | 0;
      var tmp0_minus = tmp$ret$0;
      tmp$ret$1 = size.o6(toLong(tmp0_minus));
      this.w1i(tmp$ret$1);
    } else {
      findTail(this.l18_1).z1h(chain);
      var tmp0_this = this;
      tmp0_this.w1i(tmp0_this.p18_1.n6(size));
    }
  };
  Input.prototype.a1j = function (chain) {
    var tail = findTail(this.e1i());
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = chain.h16_1 - chain.g16_1 | 0;
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = tail.j16_1 - tail.h16_1 | 0;
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.e1i() === tail) {
      this.o18_1 = tail.h16_1;
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = tmp0_this.p18_1;
      tmp$ret$2 = tmp0_plus.n6(toLong(size));
      tmp0_this.w1i(tmp$ret$2);
    }
    return true;
  };
  Input.prototype.b1j = function (n) {
    // Inline function 'kotlin.require' call
    var tmp0_require = n >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      tmp$ret$0 = 'Negative discard is not allowed: ' + n;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  Input.prototype.p1g = function (n) {
    if (!(this.b1j(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  Input.prototype.s1c = function (n) {
    if (n.b1(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  Input.prototype.c1j = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.t1b() : false)
      return '';
    var remaining = this.r18();
    if (remaining.b1(new Long(0, 0)) > 0 ? toLong(max).b1(remaining) >= 0 : false) {
      var tmp = remaining.i8();
      return readTextExactBytes$default(this, tmp, null, 2, null);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Input.prototype.d1j = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = 0;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return this.c1j(min, max);
  };
  Input.prototype.e1j = function (minSize) {
    return prepareReadLoop(this, minSize, this.e1i());
  };
  Input.prototype.f1j = function (current) {
    return this.g1j(current);
  };
  Input.prototype.g1j = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().s14_1);
  };
  Input.prototype.h1j = function (current) {
    var tmp0_elvis_lhs = current.t1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.h16_1 - current.g16_1 | 0;
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.k16_1 - current.j16_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    var overrunSize = tmp$ret$2;
    if (next.i16_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.z1g();
      this.o18_1 = current.h16_1;
      var tmp1_this = this;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = tmp1_this.p18_1;
      tmp$ret$3 = tmp1_plus.n6(toLong(overrunSize));
      tmp1_this.w1i(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = tmp2_this.p18_1;
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$4 = next.h16_1 - next.g16_1 | 0;
      var tmp3_minus = tmp$ret$4 - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.o6(toLong(tmp3_minus));
      tmp2_this.w1i(tmp$ret$5);
      current.y1h();
      current.z1f(this.k18_1);
    }
  };
  Input.prototype.s1i = function () {
    var buffer = this.k18_1.c1f();
    try {
      Companion_getInstance_1();
      buffer.e1f(8);
      var tmp = buffer.h16_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.j16_1 - buffer.h16_1 | 0;
      var copied = this.t1i(buffer.f16_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.q18_1 = true;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        tmp$ret$1 = buffer.h16_1 > buffer.g16_1;
        if (!tmp$ret$1) {
          buffer.z1f(this.k18_1);
          return null;
        }
      }
      buffer.q1g(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.z1f(this.k18_1);
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  Input.prototype.j1i = function () {
    if (!this.q18_1) {
      this.q18_1 = true;
    }
  };
  Input.prototype.i1j = function (minSize) {
    var head = this.e1i();
    if ((this.o18_1 - this.n18_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  Input.prototype.j1j = function (head) {
    var tmp0_elvis_lhs = head.y1h();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().s14_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = tmp1_this.p18_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = next.h16_1 - next.g16_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.o6(toLong(tmp1_minus));
    tmp1_this.w1i(tmp$ret$1);
    head.z1f(this.k18_1);
    return next;
  };
  Input.$metadata$ = classMeta('Input', [Closeable]);
  function takeWhile(_this__u8e3s4, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    try {
      $l$loop_0: do {
        if (!block(current)) {
          break $l$loop_0;
        }
        release = false;
        var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var next = tmp_0;
        current = next;
        release = true;
      }
       while (true);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function takeWhileSize(_this__u8e3s4, initialSize, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, initialSize);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    var size = initialSize;
    try {
      $l$loop: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp0__get_readRemaining__u3cy9h = current;
        tmp$ret$0 = tmp0__get_readRemaining__u3cy9h.h16_1 - tmp0__get_readRemaining__u3cy9h.g16_1 | 0;
        var before = tmp$ret$0;
        var after;
        if (before >= size) {
          try {
            size = block(current);
          }finally {
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp1__get_readRemaining__qliyus = current;
            tmp$ret$1 = tmp1__get_readRemaining__qliyus.h16_1 - tmp1__get_readRemaining__qliyus.g16_1 | 0;
            after = tmp$ret$1;
          }
        } else {
          after = before;
        }
        release = false;
        var tmp_0;
        if (after === 0) {
          tmp_0 = prepareReadNextHead(_this__u8e3s4, current);
        } else {
          var tmp_1;
          if (after < size) {
            tmp_1 = true;
          } else {
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
            var tmp2__get_endGap__m31424 = current;
            tmp$ret$2 = tmp2__get_endGap__m31424.k16_1 - tmp2__get_endGap__m31424.j16_1 | 0;
            var tmp_2 = tmp$ret$2;
            Companion_getInstance_1();
            tmp_1 = tmp_2 < 8;
          }
          if (tmp_1) {
            completeReadHead(_this__u8e3s4, current);
            tmp_0 = prepareReadFirstHead(_this__u8e3s4, size);
          } else {
            tmp_0 = current;
          }
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_3;
        if (tmp1_elvis_lhs == null) {
          break $l$loop;
        } else {
          tmp_3 = tmp1_elvis_lhs;
        }
        var next = tmp_3;
        current = next;
        release = true;
      }
       while (size > 0);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function discard_0(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.s1c(new Long(-1, 2147483647));
  }
  function readFully_2(_this__u8e3s4, dst, offset, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_0(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$4;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readFully_3(_this__u8e3s4, dst, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$3;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$2 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
          var tmp1_minOf = tmp$ret$2;
          tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_1(tmp0__anonymous__q1qw7t, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$4 = remaining > 0;
          if (!tmp$ret$4) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$5 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$5;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function requireNoRemaining(_this__u8e3s4) {
    if (_this__u8e3s4 > 0) {
      prematureEndOfStream(_this__u8e3s4);
    }
  }
  function readFullyBytesTemplate(_this__u8e3s4, initialDstOffset, length, readBlock) {
    var remaining = length;
    var dstOffset = initialDstOffset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          readBlock(tmp0__anonymous__q1qw7t, dstOffset, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    return remaining;
  }
  function readAvailable_0(_this__u8e3s4, destination, destinationOffset, length) {
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = destinationOffset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
          var tmp1_minOf = toLong(tmp$ret$1);
          tmp$ret$2 = tmp0_minOf.b1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
          var count = tmp$ret$2.i8();
          // Inline function 'io.ktor.utils.io.core.readAvailable.<anonymous>' call
          var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.f16_1;
          var tmp2__anonymous__z9zvc9 = toLong(tmp0__anonymous__q1qw7t.g16_1);
          var tmp3__anonymous__ufb84q = dstOffset;
          tmp1__anonymous__uwfjfc.k1j(destination, tmp2__anonymous__z9zvc9, toLong(count), tmp3__anonymous__ufb84q);
          tmp0__anonymous__q1qw7t.p1g(count);
          var tmp$ret$3;
          // Inline function 'kotlin.Long.minus' call
          var tmp2_minus = remaining;
          tmp$ret$3 = tmp2_minus.o6(toLong(count));
          remaining = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.Long.plus' call
          var tmp3_plus = dstOffset;
          tmp$ret$4 = tmp3_plus.n6(toLong(count));
          dstOffset = tmp$ret$4;
          tmp$ret$5 = remaining.b1(new Long(0, 0)) > 0;
          if (!tmp$ret$5) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$6 = remaining;
    var remaining_0 = tmp$ret$6;
    var result = length.o6(remaining_0);
    return (result.equals(new Long(0, 0)) ? _this__u8e3s4.t1b() : false) ? new Long(-1, -1) : result;
  }
  function readFullyBytesTemplate_0(_this__u8e3s4, initialDstOffset, length, readBlock) {
    var remaining = length;
    var dstOffset = initialDstOffset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
          var tmp1_minOf = toLong(tmp$ret$1);
          tmp$ret$2 = tmp0_minOf.b1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
          var count = tmp$ret$2.i8();
          readBlock(tmp0__anonymous__q1qw7t.f16_1, toLong(tmp0__anonymous__q1qw7t.g16_1), dstOffset, count);
          tmp0__anonymous__q1qw7t.p1g(count);
          var tmp$ret$3;
          // Inline function 'kotlin.Long.minus' call
          var tmp2_minus = remaining;
          tmp$ret$3 = tmp2_minus.o6(toLong(count));
          remaining = tmp$ret$3;
          var tmp$ret$4;
          // Inline function 'kotlin.Long.plus' call
          var tmp3_plus = dstOffset;
          tmp$ret$4 = tmp3_plus.n6(toLong(count));
          dstOffset = tmp$ret$4;
          tmp$ret$5 = remaining.b1(new Long(0, 0)) > 0;
          if (!tmp$ret$5) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    return remaining;
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = _this__u8e3s4.o18_1 - _this__u8e3s4.n18_1 | 0;
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.n18_1;
        _this__u8e3s4.n18_1 = index + 2 | 0;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.m18_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.a1g_1.getInt16(index, false);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$4 = readShortFallback(_this__u8e3s4);
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readPrimitive(_this__u8e3s4, size, main, fallback) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = _this__u8e3s4.o18_1 - _this__u8e3s4.n18_1 | 0;
    if (tmp$ret$0 > size) {
      var index = _this__u8e3s4.n18_1;
      _this__u8e3s4.n18_1 = index + size | 0;
      return main(_this__u8e3s4.m18_1, index);
    }
    return fallback();
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    tmp$ret$0 = readShort(head);
    var value = tmp$ret$0;
    completeReadHead(_this__u8e3s4, head);
    tmp$ret$1 = value;
    return tmp$ret$1;
  }
  function readPrimitiveFallback(_this__u8e3s4, size, read) {
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, size);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(size);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var value = read(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.o15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0__anonymous__q1qw7t = current;
        var tmp_0 = tmp0__anonymous__q1qw7t.g16_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
        $this.c1i(tmp0__anonymous__q1qw7t.f16_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.t1h();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.g15_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.g15_1.c1f();
    Companion_getInstance_1();
    new_0.e1f(8);
    $this.f1g(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.i15_1;
    if (_tail == null) {
      $this.h15_1 = head;
      $this.n15_1 = 0;
    } else {
      _tail.z1h(head);
      var tailPosition = $this.k15_1;
      _tail.r1g(tailPosition);
      var tmp0_this = $this;
      tmp0_this.n15_1 = tmp0_this.n15_1 + (tailPosition - $this.m15_1 | 0) | 0;
    }
    $this.i15_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.n15_1 = tmp1_this.n15_1 + chainedSizeDelta | 0;
    $this.j15_1 = newTail.f16_1;
    $this.k15_1 = newTail.h16_1;
    $this.m15_1 = newTail.g16_1;
    $this.l15_1 = newTail.j16_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).c1h(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.k15_1;
    tmp0_this.k15_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.d17(3);
      try {
        var tmp$ret$11;
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp16_putUtf8Char = buffer.f16_1;
        var tmp17_putUtf8Char = buffer.h16_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        var tmp18_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp18_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp18_putUtf8Char);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp17_putUtf8Char, tmp1_set);
          tmp$ret$1 = Unit_getInstance();
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp17_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp2_set, tmp3_set);
          tmp$ret$2 = Unit_getInstance();
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp17_putUtf8Char, tmp4_set);
          tmp$ret$3 = Unit_getInstance();
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp17_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp5_set, tmp6_set);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp17_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp7_set, tmp8_set);
          tmp$ret$5 = Unit_getInstance();
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp17_putUtf8Char, tmp9_set);
          tmp$ret$6 = Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp17_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp10_set, tmp11_set);
          tmp$ret$7 = Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp17_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp12_set, tmp13_set);
          tmp$ret$8 = Unit_getInstance();
          var tmp$ret$9;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp17_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.a1g_1.setInt8(tmp14_set, tmp15_set);
          tmp$ret$9 = Unit_getInstance();
          tmp = 4;
        } else {
          malformedCodePoint(tmp18_putUtf8Char);
        }
        tmp$ret$10 = tmp;
        var size = tmp$ret$10;
        buffer.q1g(size);
        tmp$ret$11 = size;
        var result = tmp$ret$11;
        // Inline function 'kotlin.check' call
        var tmp0_check = result >= 0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$12;
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          tmp$ret$12 = "The returned value shouldn't be negative";
          var message = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.c1d();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.r1g($this.k15_1);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.h16_1 - tail.g16_1 | 0;
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = foreignStolen.h16_1 - foreignStolen.g16_1 | 0;
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$2 = tail.k16_1 - tail.j16_1 | 0;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$3 = tail.j16_1 - tail.h16_1 | 0;
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.i16_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.g1i(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$4 = tail.j16_1 - tail.h16_1 | 0;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.k16_1 - tail.j16_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.c1d();
      var tmp0_safe_receiver = foreignStolen.y1h();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.g1i(tmp0_safe_receiver);
        tmp$ret$6 = Unit_getInstance();
      }
      foreignStolen.z1f(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.h15_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.h15_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.t1h());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.z1h(foreignStolen);
    }
    tail.z1f($this.g15_1);
    $this.i15_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.g15_1 = pool;
    this.h15_1 = null;
    this.i15_1 = null;
    this.j15_1 = Companion_getInstance_6().l1j_1;
    this.k15_1 = 0;
    this.l15_1 = 0;
    this.m15_1 = 0;
    this.n15_1 = 0;
  }
  Output.prototype.a1i = function () {
    return this.n15_1 + (this.k15_1 - this.m15_1 | 0) | 0;
  };
  Output.prototype.e1i = function () {
    var tmp0_elvis_lhs = this.h15_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().s14_1 : tmp0_elvis_lhs;
  };
  Output.prototype.f1i = function () {
    return this.l15_1 - this.k15_1 | 0;
  };
  Output.prototype.kd = function () {
    flushChain(this);
  };
  Output.prototype.o15 = function () {
    var tmp0_elvis_lhs = this.h15_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.i15_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.r1g(this.k15_1);
    this.h15_1 = null;
    this.i15_1 = null;
    this.k15_1 = 0;
    this.l15_1 = 0;
    this.m15_1 = 0;
    this.n15_1 = 0;
    this.j15_1 = Companion_getInstance_6().l1j_1;
    return head;
  };
  Output.prototype.f1g = function (buffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffer.t1h() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      tmp$ret$0 = 'It should be a single buffer chunk.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  Output.prototype.g1i = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.h16_1 - tail.g16_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.o6(toLong(tmp1_minus));
    var tmp2_toIntOrFail = tmp$ret$1;
    if (tmp2_toIntOrFail.b1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    tmp$ret$2 = tmp2_toIntOrFail.i8();
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  Output.prototype.c1h = function (v) {
    var index = this.k15_1;
    if (index < this.l15_1) {
      this.k15_1 = index + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp0_set = this.j15_1;
      tmp0_set.a1g_1.setInt8(index, v);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  Output.prototype.u11 = function () {
    try {
      this.kd();
    }finally {
      this.b1i();
    }
  };
  Output.prototype.h6 = function (value) {
    var tailPosition = this.k15_1;
    if ((this.l15_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = this.j15_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(value);
      var tmp17_putUtf8Char = tmp$ret$0;
      var tmp0_subject = tmp17_putUtf8Char;
      var tmp;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp17_putUtf8Char);
        tmp16_putUtf8Char.a1g_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
        tmp16_putUtf8Char.a1g_1.setInt8(tailPosition, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
        tmp16_putUtf8Char.a1g_1.setInt8(tailPosition, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
        tmp16_putUtf8Char.a1g_1.setInt8(tailPosition, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.a1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp = 4;
      } else {
        malformedCodePoint(tmp17_putUtf8Char);
      }
      tmp$ret$10 = tmp;
      var size = tmp$ret$10;
      this.k15_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  Output.prototype.c = function (value) {
    if (value == null) {
      this.qf('null', 0, 4);
    } else {
      this.qf(value, 0, charSequenceLength(value));
    }
    return this;
  };
  Output.prototype.qf = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.qf('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().m1j_1);
    return this;
  };
  Output.prototype.s18 = function (packet) {
    var foreignStolen = packet.o15();
    if (foreignStolen == null) {
      packet.kr();
      return Unit_getInstance();
    }
    var tail = this.i15_1;
    if (tail == null) {
      this.g1i(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.k18_1);
  };
  Output.prototype.p15 = function (chunkBuffer) {
    var _tail = this.i15_1;
    if (_tail == null) {
      this.g1i(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.g15_1);
  };
  Output.prototype.i1a = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.b1(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.o18_1 - p.n18_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.b1(remaining) <= 0) {
        remaining = remaining.o6(headRemaining);
        var tmp0_elvis_lhs = p.y1i();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.f1g(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.i1j(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.g16_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.i8());
        }finally {
          var positionAfter = buffer.g16_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.h16_1) {
            p.g1j(buffer);
          } else {
            p.n18_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  Output.prototype.kr = function () {
    this.u11();
  };
  Output.prototype.d17 = function (n) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    tmp$ret$0 = this.l15_1 - this.k15_1 | 0;
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.i15_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.r1g(this.k15_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  Output.prototype.c1d = function () {
    var tmp0_safe_receiver = this.i15_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.k15_1 = tmp0_safe_receiver.h16_1;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Output.prototype.h1i = function (size, block) {
    var buffer = this.d17(size);
    try {
      var result = block(buffer);
      // Inline function 'kotlin.check' call
      var tmp0_check = result >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
        tmp$ret$0 = "The returned value shouldn't be negative";
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return result;
    }finally {
      this.c1d();
    }
  };
  Output.prototype.i1i = function () {
    var head = this.e1i();
    if (!(head === Companion_getInstance_4().s14_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = head.t1h() == null;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.d1f();
      Companion_getInstance_1();
      head.e1f(8);
      this.k15_1 = head.h16_1;
      this.m15_1 = this.k15_1;
      this.l15_1 = head.j16_1;
    }
  };
  Output.$metadata$ = classMeta('Output', [Appendable, Closeable]);
  function writeWhileSize(_this__u8e3s4, initialSize, block) {
    var tail = prepareWriteHead(_this__u8e3s4, initialSize, null);
    try {
      var size;
      $l$loop: while (true) {
        size = block(tail);
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeWhile(_this__u8e3s4, block) {
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        if (!block(tail))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeFully_2(_this__u8e3s4, src, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        var tmp1_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_1(tmp0__anonymous__q1qw7t, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$3 = remaining > 0;
        if (!tmp$ret$3)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeFully$default(_this__u8e3s4, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = src.h16_1 - src.g16_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      length = tmp$ret$0;
    }
    return writeFully_2(_this__u8e3s4, src, length);
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeFully$default_0(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.length - offset | 0;
    return writeFully_3(_this__u8e3s4, src, offset, length);
  }
  function writeFullyBytesTemplate(_this__u8e3s4, offset, length, block) {
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.j16_1 - tmp0__anonymous__q1qw7t.h16_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        block(tmp0__anonymous__q1qw7t, currentOffset, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.k15_1;
      if ((_this__u8e3s4.l15_1 - index | 0) > 2) {
        _this__u8e3s4.k15_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.j15_1;
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        tmp0__anonymous__q1qw7t.a1g_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writePrimitiveTemplate(_this__u8e3s4, componentSize, block) {
    var index = _this__u8e3s4.k15_1;
    if ((_this__u8e3s4.l15_1 - index | 0) > componentSize) {
      _this__u8e3s4.k15_1 = index + componentSize | 0;
      block(_this__u8e3s4.j15_1, index);
      return true;
    }
    return false;
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.d17(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.c1d();
    tmp$ret$0 = true;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.c1h(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.c1h(tmp$ret$2);
    }
  }
  function writePrimitiveFallbackTemplate(_this__u8e3s4, componentSize, writeOperation) {
    var tail = _this__u8e3s4.d17(componentSize);
    writeOperation(tail);
    _this__u8e3s4.c1d();
    return true;
  }
  function read_0(_this__u8e3s4, n, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = _this__u8e3s4.i1j(n);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    var positionBefore = buffer.g16_1;
    try {
      block(buffer);
    }finally {
      var positionAfter = buffer.g16_1;
      if (positionAfter < positionBefore) {
        throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
      }
      if (positionAfter === buffer.h16_1) {
        _this__u8e3s4.g1j(buffer);
      } else {
        _this__u8e3s4.n18_1 = positionAfter;
      }
    }
  }
  function toByteArray(_this__u8e3s4, charset) {
    if (charset.equals(Charsets_getInstance().m1j_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.p1j(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText(_this__u8e3s4, charset, max) {
    return decode(charset.q1j(), _this__u8e3s4, max);
  }
  function readText$default(_this__u8e3s4, charset, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      charset = Charsets_getInstance().m1j_1;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return readText(_this__u8e3s4, charset, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_2(_this__u8e3s4, tmp0_also, 0, n);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = get_EmptyByteArray();
    }
    return tmp;
  }
  function readBytes$default(_this__u8e3s4, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.r18();
      if (tmp0_coerceAtMostMaxIntOrFail.b1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.i8();
      tmp$ret$0_0 = Unit_getInstance();
      n = tmp$ret$0;
    }
    return readBytes(_this__u8e3s4, n);
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    return decodeExactBytes(charset.q1j(), _this__u8e3s4, bytesCount);
  }
  function readTextExactBytes$default(_this__u8e3s4, bytesCount, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      charset = Charsets_getInstance().m1j_1;
    return readTextExactBytes(_this__u8e3s4, bytesCount, charset);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance().m1j_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.p1j(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeText$default(_this__u8e3s4, text, fromIndex, toIndex, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(text);
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().m1j_1;
    return writeText(_this__u8e3s4, text, fromIndex, toIndex, charset);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var memory = tmp0__anonymous__q1qw7t.f16_1;
        var dstOffset = tmp0__anonymous__q1qw7t.h16_1;
        var dstLimit = tmp0__anonymous__q1qw7t.j16_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
        index = tmp + tmp$ret$0 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0__anonymous__q1qw7t.q1g(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
        if (tmp$ret$2 === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        tmp$ret$3 = tmp_0;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.c1d();
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  ChunkBuffer$Companion$Pool$1.prototype.c1f = function () {
    return get_DefaultChunkedBufferPool().c1f();
  };
  ChunkBuffer$Companion$Pool$1.prototype.r1j = function (instance) {
    get_DefaultChunkedBufferPool().x1h(instance);
  };
  ChunkBuffer$Companion$Pool$1.prototype.x1h = function (instance) {
    return this.r1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$Pool$1.prototype.zl = function () {
    get_DefaultChunkedBufferPool().zl();
  };
  ChunkBuffer$Companion$Pool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  ChunkBuffer$Companion$EmptyPool$1.prototype.c1f = function () {
    return Companion_getInstance_4().s14_1;
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.r1j = function (instance) {
    // Inline function 'kotlin.require' call
    var tmp0_require = instance === Companion_getInstance_4().s14_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.x1h = function (instance) {
    return this.r1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.zl = function () {
  };
  ChunkBuffer$Companion$EmptyPool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$1.prototype.c1f = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().b1g(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.r1j = function (instance) {
    DefaultAllocator_getInstance().c1g(instance.f16_1);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.x1h = function (instance) {
    return this.r1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.c1f = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.r1j = function (instance) {
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.x1h = function (instance) {
    return this.r1j(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function appendNext($this, chunk) {
    if (!$this.w1f_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.q14_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.r14_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.s14_1 = new ChunkBuffer(Companion_getInstance_6().l1j_1, null, this.r14_1);
    var tmp_1 = this;
    tmp_1.t14_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.u14_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.v1f_1 = parentPool;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(origin === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.w1f_1 = atomic$ref$1(null);
    this.x1f_1 = atomic$int$1(1);
    this.y1f_1 = origin;
  }
  ChunkBuffer.prototype.s1j = function () {
    return this.v1f_1;
  };
  ChunkBuffer.prototype.z1h = function (newValue) {
    if (newValue == null) {
      this.y1h();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype.t1h = function () {
    return this.w1f_1.ri_1;
  };
  ChunkBuffer.prototype.s1h = function () {
    return this.x1f_1.si_1;
  };
  ChunkBuffer.prototype.y1h = function () {
    return this.w1f_1.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.e1g = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.y1f_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.t1j();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.f16_1, tmp0_let, this.v1f_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.a1h(tmp0_also);
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.z1f = function (pool) {
    if (this.u1j()) {
      var origin = this.y1f_1;
      if (!(origin == null)) {
        this.p1h();
        origin.z1f(pool);
      } else {
        var tmp0_elvis_lhs = this.v1f_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.x1h(this);
      }
    }
  };
  ChunkBuffer.prototype.p1h = function () {
    if (!this.x1f_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.y1h();
    this.y1f_1 = null;
  };
  ChunkBuffer.prototype.t1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.x1f_1;
      while (true) {
        var cur = tmp0_update.si_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        tmp$ret$0 = cur + 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.w1h = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.x1f_1;
      while (true) {
        var cur = tmp0_update.si_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.u1j = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.x1f_1;
      while (true) {
        var cur = tmp0_updateAndGet.si_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        tmp$ret$0 = cur - 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.d1h = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.y1f_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      tmp$ret$0 = 'Unable to reset buffer with origin';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Buffer.prototype.d1h.call(this);
    this.w1f_1.ri_1 = null;
  };
  ChunkBuffer.$metadata$ = classMeta('ChunkBuffer', undefined, undefined, undefined, undefined, Buffer.prototype);
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.s1h() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function toIntOrFail(_this__u8e3s4, name) {
    if (_this__u8e3s4.b1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(_this__u8e3s4, name);
    }
    return _this__u8e3s4.i8();
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function decodeASCII(_this__u8e3s4, consumer) {
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    var inductionVariable = tmp1__anonymous__uwfjfc;
    if (inductionVariable < tmp2__anonymous__z9zvc9)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.get' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.a1g_1.getInt8(index);
        tmp$ret$1 = tmp$ret$0;
        var codepoint = tmp$ret$1 & 255;
        if ((codepoint & 128) === 128 ? true : !consumer(new Char(numberToChar(codepoint)))) {
          _this__u8e3s4.p1g(index - tmp1__anonymous__uwfjfc | 0);
          return false;
        }
      }
       while (inductionVariable < tmp2__anonymous__z9zvc9);
    tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    var rc = tmp$ret$2;
    _this__u8e3s4.p1g(rc);
    tmp$ret$3 = rc;
    return true;
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  MalformedUTF8InputException.$metadata$ = classMeta('MalformedUTF8InputException', undefined, undefined, undefined, undefined, Exception.prototype);
  function decodeUTF8(_this__u8e3s4, consumer) {
    var byteCount = 0;
    var value = 0;
    var lastByteCount = 0;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    var inductionVariable = tmp1__anonymous__uwfjfc;
    if (inductionVariable < tmp2__anonymous__z9zvc9)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.get' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.a1g_1.getInt8(index);
        tmp$ret$1 = tmp$ret$0;
        var v = tmp$ret$1 & 255;
        if ((v & 128) === 0) {
          if (!(byteCount === 0)) {
            malformedByteCount(byteCount);
          }
          if (!consumer(new Char(numberToChar(v)))) {
            _this__u8e3s4.p1g(index - tmp1__anonymous__uwfjfc | 0);
            return -1;
          }
        } else if (byteCount === 0) {
          var mask = 128;
          value = v;
          var inductionVariable_0 = 1;
          if (inductionVariable_0 <= 6)
            $l$loop: do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((value & mask) === 0)) {
                value = value & ~mask;
                mask = mask >> 1;
                var tmp2 = byteCount;
                byteCount = tmp2 + 1 | 0;
              } else {
                break $l$loop;
              }
            }
             while (inductionVariable_0 <= 6);
          lastByteCount = byteCount;
          var tmp3 = byteCount;
          byteCount = tmp3 - 1 | 0;
          if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
            _this__u8e3s4.p1g(index - tmp1__anonymous__uwfjfc | 0);
            return lastByteCount;
          }
        } else {
          value = value << 6 | v & 127;
          var tmp4 = byteCount;
          byteCount = tmp4 - 1 | 0;
          if (byteCount === 0) {
            if (isBmpCodePoint(value)) {
              if (!consumer(new Char(numberToChar(value)))) {
                _this__u8e3s4.p1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                return -1;
              }
            } else if (!isValidCodePoint(value)) {
              malformedCodePoint(value);
            } else {
              if (!consumer(new Char(numberToChar(highSurrogate(value)))) ? true : !consumer(new Char(numberToChar(lowSurrogate(value))))) {
                _this__u8e3s4.p1g(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                return -1;
              }
            }
            value = 0;
          }
        }
      }
       while (inductionVariable < tmp2__anonymous__z9zvc9);
    tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    var rc = tmp$ret$2;
    _this__u8e3s4.p1g(rc);
    tmp$ret$3 = rc;
    return 0;
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function putUtf8Char(_this__u8e3s4, offset, v) {
    var tmp0_subject = v;
    var tmp;
    if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
      var tmp0_storeAt = toByte(v);
      _this__u8e3s4.a1g_1.setInt8(offset, tmp0_storeAt);
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp1_set = toByte(192 | v >> 6 & 31);
      _this__u8e3s4.a1g_1.setInt8(offset, tmp1_set);
      tmp$ret$0 = Unit_getInstance();
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp2_set = offset + 1 | 0;
      var tmp3_set = toByte(128 | v & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp2_set, tmp3_set);
      tmp$ret$1 = Unit_getInstance();
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp4_set = toByte(224 | v >> 12 & 15);
      _this__u8e3s4.a1g_1.setInt8(offset, tmp4_set);
      tmp$ret$2 = Unit_getInstance();
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp5_set = offset + 1 | 0;
      var tmp6_set = toByte(128 | v >> 6 & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp5_set, tmp6_set);
      tmp$ret$3 = Unit_getInstance();
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp7_set = offset + 2 | 0;
      var tmp8_set = toByte(128 | v & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp7_set, tmp8_set);
      tmp$ret$4 = Unit_getInstance();
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp9_set = toByte(240 | v >> 18 & 7);
      _this__u8e3s4.a1g_1.setInt8(offset, tmp9_set);
      tmp$ret$5 = Unit_getInstance();
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp10_set = offset + 1 | 0;
      var tmp11_set = toByte(128 | v >> 12 & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp10_set, tmp11_set);
      tmp$ret$6 = Unit_getInstance();
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp12_set = offset + 2 | 0;
      var tmp13_set = toByte(128 | v >> 6 & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp12_set, tmp13_set);
      tmp$ret$7 = Unit_getInstance();
      var tmp$ret$8;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp14_set = offset + 3 | 0;
      var tmp15_set = toByte(128 | v & 63);
      _this__u8e3s4.a1g_1.setInt8(tmp14_set, tmp15_set);
      tmp$ret$8 = Unit_getInstance();
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
    var tmp1_minOf = from + tmp$ret$0 | 0;
    tmp$ret$1 = Math.min(to, tmp1_minOf);
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp6_storeAt = tmp1;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.a1g_1.setInt8(tmp6_storeAt, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject = codepoint;
      var tmp_1;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$10 = tmp_1;
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(high);
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = Char__toInt_impl_vasixd(low);
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp0_subject = codepoint;
      var tmp_1;
      if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$1 = tmp_1;
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject_0 = codepoint;
      var tmp_2;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$3 = Unit_getInstance();
        tmp_2 = 2;
      } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$5 = Unit_getInstance();
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$6 = Unit_getInstance();
        tmp_2 = 3;
      } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.a1g_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$9 = Unit_getInstance();
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.a1g_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$10 = Unit_getInstance();
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$11 = tmp_2;
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function charactersSize(v) {
    var tmp0_subject = v;
    var tmp;
    if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function get_EmptyByteArray() {
    init_properties_Unsafe_kt_ayh6vg();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.canRead' call
      tmp$ret$0 = current.h16_1 > current.g16_1;
      if (!tmp$ret$0) {
        _this__u8e3s4.g1j(current);
      } else {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        tmp$ret$1 = current.k16_1 - current.j16_1 | 0;
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.h1j(current);
        } else {
          _this__u8e3s4.n18_1 = current.g16_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    init_properties_Unsafe_kt_ayh6vg();
    return _this__u8e3s4.e1j(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.v1a() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.f1j(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    init_properties_Unsafe_kt_ayh6vg();
    var builderSize = builder.g();
    var tmp0_elvis_lhs = builder.o15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.t1h() == null : false) ? _this__u8e3s4.a1j(builderHead) : false) {
      builder.i1i();
      return builderSize;
    }
    _this__u8e3s4.z1i(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (!(current == null)) {
      _this__u8e3s4.c1d();
    }
    return _this__u8e3s4.d17(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function init_properties_Unsafe_kt_ayh6vg() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $cont) {
    var tmp = new $trySuspendCOROUTINE$57($this, sleepCondition, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function $sleepCOROUTINE$56(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1k_1 = _this__u8e3s4;
    this.q1k_1 = sleepCondition;
  }
  $sleepCOROUTINE$56.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.jh_1 = 1;
            suspendResult = trySuspend(this.p1k_1, this.q1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.p1k_1.x14();
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
  $sleepCOROUTINE$56.$metadata$ = classMeta('$sleepCOROUTINE$56', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $trySuspendCOROUTINE$57(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1k_1 = _this__u8e3s4;
    this.e1k_1 = sleepCondition;
  }
  $trySuspendCOROUTINE$57.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            this.f1k_1 = false;
            var tmp_0 = this;
            tmp_0.g1k_1 = Job$default(null, 1, null);
            if (this.d1k_1.w14_1.atomicfu$compareAndSet(null, this.g1k_1) ? this.e1k_1() : false) {
              this.f1k_1 = true;
              this.jh_1 = 1;
              suspendResult = this.g1k_1.er(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jh_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.jh_1 = 2;
            continue $sm;
          case 2:
            return this.f1k_1;
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
  $trySuspendCOROUTINE$57.$metadata$ = classMeta('$trySuspendCOROUTINE$57', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AwaitingSlot() {
    this.w14_1 = atomic$ref$1(null);
  }
  AwaitingSlot.prototype.p17 = function (sleepCondition, $cont) {
    var tmp = new $sleepCOROUTINE$56(this, sleepCondition, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  AwaitingSlot.prototype.x14 = function () {
    var tmp0_safe_receiver = this.w14_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.dr();
  };
  AwaitingSlot.prototype.k1d = function (cause) {
    var tmp0_elvis_lhs = this.w14_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.qq(cause);
    } else {
      continuation.dr();
    }
  };
  AwaitingSlot.$metadata$ = classMeta('AwaitingSlot');
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToSequentialImplCOROUTINE$58(_this__u8e3s4, dst, limit, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToTailCOROUTINE$59(_this__u8e3s4, dst, limit, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  }
  function $copyToSequentialImplCOROUTINE$58(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1k_1 = _this__u8e3s4;
    this.a1l_1 = dst;
    this.b1l_1 = limit;
  }
  $copyToSequentialImplCOROUTINE$58.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 10;
            var tmp_0 = this;
            tmp_0.c1l_1 = !(this.z1k_1 === this.a1l_1);
            if (!this.c1l_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.z1k_1.n13() == null)) {
              this.a1l_1.vx(this.z1k_1.n13());
              return new Long(0, 0);
            }

            this.d1l_1 = this.b1l_1;
            this.jh_1 = 1;
            continue $sm;
          case 1:
            if (!(this.d1l_1.b1(new Long(0, 0)) > 0)) {
              this.jh_1 = 9;
              continue $sm;
            }

            this.jh_1 = 2;
            suspendResult = this.z1k_1.i1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e1l_1 = suspendResult;
            if (!this.e1l_1) {
              this.jh_1 = 9;
              continue $sm;
            } else {
              this.jh_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.f1l_1 = this.z1k_1.l1d(this.a1l_1, this.d1l_1);
            if (this.f1l_1.equals(new Long(0, 0))) {
              this.jh_1 = 6;
              suspendResult = copyToTail(this.z1k_1, this.a1l_1, this.d1l_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.a1l_1.p14() === 0) {
                this.jh_1 = 4;
                suspendResult = this.a1l_1.o14(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.jh_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.jh_1 = 5;
            continue $sm;
          case 5:
            this.g1l_1 = this.f1l_1;
            this.jh_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.jh_1 = 9;
              continue $sm;
            } else {
              this.jh_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.g1l_1 = tail;
            this.jh_1 = 8;
            continue $sm;
          case 8:
            var copied = this.g1l_1;
            this.d1l_1 = this.d1l_1.o6(copied);
            if (copied.b1(new Long(0, 0)) > 0) {
              this.a1l_1.kd();
            }

            this.jh_1 = 1;
            continue $sm;
          case 9:
            return this.b1l_1.o6(this.d1l_1);
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
  $copyToSequentialImplCOROUTINE$58.$metadata$ = classMeta('$copyToSequentialImplCOROUTINE$58', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $copyToTailCOROUTINE$59(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1l_1 = _this__u8e3s4;
    this.q1l_1 = dst;
    this.r1l_1 = limit;
  }
  $copyToTailCOROUTINE$59.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 9;
            this.s1l_1 = Companion_getInstance_4().q14_1.c1f();
            this.jh_1 = 1;
            continue $sm;
          case 1:
            this.jh_1 = 2;
            continue $sm;
          case 2:
            this.kh_1 = 8;
            this.s1l_1.w1g(coerceAtMost_0(this.r1l_1, toLong(this.s1l_1.k16_1)).i8());
            this.jh_1 = 3;
            suspendResult = this.p1l_1.f1d(this.s1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.u1l_1 = suspendResult;
            if (this.u1l_1 === -1) {
              this.s1l_1.z1f(Companion_getInstance_4().q14_1);
              this.t1l_1 = new Long(0, 0);
              this.kh_1 = 9;
              this.jh_1 = 6;
              continue $sm;
            } else {
              this.jh_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.jh_1 = 5;
            suspendResult = this.q1l_1.y1c(this.s1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.t1l_1 = toLong(this.u1l_1);
            this.kh_1 = 9;
            this.jh_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.t1l_1;
            this.s1l_1.z1f(Companion_getInstance_4().q14_1);
            ;
            return tmp_1;
          case 7:
            this.s1l_1.z1f(Companion_getInstance_4().q14_1);
            ;
            return Unit_getInstance();
          case 8:
            this.kh_1 = 9;
            var t = this.mh_1;
            this.s1l_1.z1f(Companion_getInstance_4().q14_1);
            ;
            throw t;
          case 9:
            throw this.mh_1;
        }
      } catch ($p) {
        if (this.kh_1 === 9) {
          throw $p;
        } else {
          this.jh_1 = this.kh_1;
          this.mh_1 = $p;
        }
      }
     while (true);
  };
  $copyToTailCOROUTINE$59.$metadata$ = classMeta('$copyToTailCOROUTINE$59', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_ByteArrayPool() {
    init_properties_ByteArrayPool_kt_ygh2ft();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  ByteArrayPool$1.prototype.j1h = function () {
    return new Int8Array(4096);
  };
  ByteArrayPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, DefaultPool.prototype);
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function init_properties_ByteArrayPool_kt_ygh2ft() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  ObjectPool.$metadata$ = interfaceMeta('ObjectPool', [Closeable]);
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.x1h = function (instance) {
  };
  NoPoolImpl.prototype.zl = function () {
  };
  NoPoolImpl.$metadata$ = classMeta('NoPoolImpl', [ObjectPool]);
  function SingleInstancePool() {
    this.y1l_1 = atomic$int$1(0);
    this.z1l_1 = atomic$boolean$1(false);
    this.a1m_1 = atomic$ref$1(null);
  }
  SingleInstancePool.prototype.c1f = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.y1l_1;
      while (true) {
        var cur = tmp0_update.si_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.pool.SingleInstancePool.borrow.<anonymous>' call
        if (!(cur === 0))
          throw IllegalStateException_init_$Create$('Instance is already consumed');
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
    var instance = this.j1h();
    this.a1m_1.ri_1 = instance;
    return instance;
  };
  SingleInstancePool.prototype.x1h = function (instance) {
    if (!(this.a1m_1.ri_1 === instance)) {
      if (this.a1m_1.ri_1 == null ? !(this.y1l_1.si_1 === 0) : false) {
        throw IllegalStateException_init_$Create$('Already recycled or an irrelevant instance tried to be recycled');
      }
      throw IllegalStateException_init_$Create$('Unable to recycle irrelevant instance');
    }
    this.a1m_1.ri_1 = null;
    if (!this.z1l_1.atomicfu$compareAndSet(false, true)) {
      throw IllegalStateException_init_$Create$('An instance is already disposed');
    }
    this.o1h(instance);
  };
  SingleInstancePool.prototype.zl = function () {
    if (this.z1l_1.atomicfu$compareAndSet(false, true)) {
      var tmp0_elvis_lhs = this.a1m_1.ri_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      this.a1m_1.ri_1 = null;
      this.o1h(value);
    }
  };
  SingleInstancePool.$metadata$ = classMeta('SingleInstancePool', [ObjectPool]);
  function ByteChannel_0(autoFlush) {
    return new ByteChannelJS(Companion_getInstance_4().s14_1, autoFlush);
  }
  function ByteChannel$default(autoFlush, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      autoFlush = false;
    return ByteChannel_0(autoFlush);
  }
  function copyTo_0(_this__u8e3s4, dst, limit, $cont) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $cont);
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = content.length === 0;
    if (tmp$ret$0)
      return Companion_getInstance_5().m16();
    var head = Companion_getInstance_4().q14_1.c1f();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.e1f(8);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0__get_writeRemaining__z8qq3e = tail;
      tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.j16_1 - tmp0__get_writeRemaining__z8qq3e.h16_1 | 0;
      var tmp2_minOf = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().q14_1.c1f();
      current.z1h(tail);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    tmp$ret$3 = tmp3_apply;
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.q1m_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.kp(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase_init_$Init$(initial, autoFlush, null, 4, null, this);
    this.q1m_1 = null;
  }
  ByteChannelJS.prototype.m13 = function (job) {
    var tmp0_safe_receiver = this.q1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qk(null, 1, null);
    }
    this.q1m_1 = job;
    job.mk(true, false, ByteChannelJS$attachJob$lambda(this), 2, null);
  };
  ByteChannelJS.prototype.toString = function () {
    return 'ByteChannel[' + this.q1m_1 + ', ' + hashCode(this) + ']';
  };
  ByteChannelJS.$metadata$ = classMeta('ByteChannelJS', undefined, undefined, undefined, undefined, ByteChannelSequentialBase.prototype);
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().s14_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.vx(null);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.b1m_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  Companion_3.prototype.m16 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Empty$factory();
    tmp$ret$0 = this.b1m_1.t();
    return tmp$ret$0;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
    Companion_getInstance_5();
  }
  ByteReadChannel_1.$metadata$ = interfaceMeta('ByteReadChannel');
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.m16();
    }, null);
  }
  function ByteWriteChannel() {
  }
  ByteWriteChannel.$metadata$ = interfaceMeta('ByteWriteChannel');
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.b1g = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  DefaultAllocator.prototype.c1g = function (instance) {
  };
  DefaultAllocator.$metadata$ = objectMeta('DefaultAllocator', [Allocator]);
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function useMemory(_this__u8e3s4, offset, length, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), _this__u8e3s4, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = block(tmp0_let);
    return tmp$ret$0;
  }
  function of(_this__u8e3s4, array, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    return new Memory(new DataView(buffer, offset, length));
  }
  function of$default(_this__u8e3s4, buffer, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = buffer.byteLength - offset | 0;
    return of_1(_this__u8e3s4, buffer, offset, length);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.l1j_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.a1g_1 = view;
  }
  Memory.prototype.r1m = function () {
    return this.a1g_1;
  };
  Memory.prototype.g = function () {
    return toLong(this.a1g_1.byteLength);
  };
  Memory.prototype.s1m = function () {
    return this.a1g_1.byteLength;
  };
  Memory.prototype.t1m = function (index) {
    return this.a1g_1.getInt8(index);
  };
  Memory.prototype.u1m = function (index, value) {
    this.a1g_1.setInt8(index, value);
  };
  Memory.prototype.v1m = function (offset, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$0 = "offset shouldn't be negative: " + offset;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$1 = "length shouldn't be negative: " + length;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.a1g_1.byteLength);
    if (tmp.b1(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.a1g_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.a1g_1.buffer, this.a1g_1.byteOffset + offset | 0, length));
  };
  Memory.prototype.d1g = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.a1g_1.buffer, this.a1g_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.a1g_1.buffer, destination.a1g_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  Memory.prototype.k1j = function (destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (offset.b1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(offset, 'offset');
    }
    tmp$ret$0 = offset.i8();
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (length.b1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(length, 'length');
    }
    tmp$ret$1 = length.i8();
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    if (destinationOffset.b1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(destinationOffset, 'destinationOffset');
    }
    tmp$ret$2 = destinationOffset.i8();
    this.d1g(destination, tmp, tmp_0, tmp$ret$2);
  };
  Memory.$metadata$ = classMeta('Memory');
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = destination;
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.a1g_1.buffer, _this__u8e3s4.a1g_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_3(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_3(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.a1g_1.buffer, destination.a1g_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function storeShortAt(_this__u8e3s4, offset, value) {
    _this__u8e3s4.a1g_1.setInt16(offset, value, false);
  }
  function loadShortAt(_this__u8e3s4, offset) {
    return _this__u8e3s4.a1g_1.getInt16(offset, false);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.w1m = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().m1j_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp_2 = _Char___init__impl__6a9atx(95);
        var tmp_3 = _Char___init__impl__6a9atx(45);
        var tmp0_let = replace$default(name, tmp_2, tmp_3, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call
        var tmp_4;
        if (tmp0_let === 'iso-8859-1') {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_let;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_4 = tmp$ret$1 === 'iso-8859-1';
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().n1j_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  Companion_5.prototype.x1m = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            var tmp$ret$3;
            // Inline function 'kotlin.let' call
            var tmp_2 = _Char___init__impl__6a9atx(95);
            var tmp_3 = _Char___init__impl__6a9atx(45);
            var tmp0_let = replace$default(charset, tmp_2, tmp_3, false, 4, null);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call
            var tmp_4;
            if (tmp0_let === 'iso-8859-1') {
              tmp_4 = true;
            } else {
              var tmp$ret$1;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$0 = tmp0_let;
              tmp$ret$1 = tmp$ret$0.toLowerCase();
              tmp_4 = tmp$ret$1 === 'iso-8859-1';
            }
            tmp$ret$2 = tmp_4;
            tmp$ret$3 = tmp$ret$2;

            tmp_1 = tmp$ret$3;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.o1j_1 = _name;
  }
  Charset.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(get_js(getKClassFromExpression(this)), get_js(getKClassFromExpression(other))))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.o1j_1 === other.o1j_1))
      return false;
    return true;
  };
  Charset.prototype.hashCode = function () {
    return getStringHashCode(this.o1j_1);
  };
  Charset.prototype.toString = function () {
    return this.o1j_1;
  };
  Charset.$metadata$ = classMeta('Charset');
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.o1j_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.m1j_1 = new CharsetImpl('UTF-8');
    this.n1j_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.prototype.y1m = function () {
    return this.m1j_1;
  };
  Charsets.$metadata$ = objectMeta('Charsets');
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  MalformedInputException.$metadata$ = classMeta('MalformedInputException', undefined, undefined, undefined, undefined, Error.prototype);
  function CharsetDecoder(_charset) {
    this.z1m_1 = _charset;
  }
  CharsetDecoder.$metadata$ = classMeta('CharsetDecoder');
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.a1n_1 = _charset;
  }
  CharsetEncoder.$metadata$ = classMeta('CharsetEncoder');
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.c1n_1 = name;
  }
  CharsetImpl.prototype.p1j = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.q1j = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + this.c1n_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this.c1n_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.c1n_1 === tmp0_other_with_cast.c1n_1))
      return false;
    return true;
  };
  CharsetImpl.$metadata$ = classMeta('CharsetImpl', undefined, undefined, undefined, undefined, Charset.prototype);
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.e1n_1 = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.e1n_1 + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return this.e1n_1.hashCode();
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.e1n_1.equals(tmp0_other_with_cast.e1n_1))
      return false;
    return true;
  };
  CharsetEncoderImpl.$metadata$ = classMeta('CharsetEncoderImpl', undefined, undefined, undefined, undefined, CharsetEncoder.prototype);
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.g1n_1 = charset;
  }
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.g1n_1 + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    return this.g1n_1.hashCode();
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.g1n_1.equals(tmp0_other_with_cast.g1n_1))
      return false;
    return true;
  };
  CharsetDecoderImpl.$metadata$ = classMeta('CharsetDecoderImpl', undefined, undefined, undefined, undefined, CharsetDecoder.prototype);
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h16_1 - tmp0__get_readRemaining__u3cy9h.g16_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp0__anonymous__q1qw7t = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$2 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.f16_1;
                var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.g16_1;
                var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.h16_1;
                var tmp$ret$8;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q = new Int8Array(tmp0__anonymous__q1qw7t_0.a1g_1.buffer, tmp0__anonymous__q1qw7t_0.a1g_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                var tmp$ret$7;
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    var tmp$ret$6;
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.h1n(tmp3__anonymous__ufb84q, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp$ret$6 = tmp$ret$4;
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var tmp0_elvis_lhs_1 = $p.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$7;
                dst.c(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                tmp$ret$8 = tmp3__anonymous__ufb84q.byteLength;
                tmp$ret$9 = tmp$ret$8;
                var rc = tmp$ret$9;
                tmp0__anonymous__q1qw7t.p1g(rc);
                tmp$ret$10 = rc;
                tmp$ret$11 = tmp$ret$10;
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.i1n();
                  } catch ($p) {
                    var tmp_2;
                    {
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  tmp$ret$12 = charSequenceLength(tail) > 0;
                  if (tmp$ret$12) {
                    tmp0__anonymous__q1qw7t.t1g(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$13 = tmp1__get_readRemaining__qliyus.h16_1 - tmp1__get_readRemaining__qliyus.g16_1 | 0;
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$14 = tmp2__get_endGap__m31424.k16_1 - tmp2__get_endGap__m31424.j16_1 | 0;
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp0__get_readRemaining__u3cy9h_0 = current_0;
            tmp$ret$16 = tmp0__get_readRemaining__u3cy9h_0.h16_1 - tmp0__get_readRemaining__u3cy9h_0.g16_1 | 0;
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp1__anonymous__uwfjfc_0 = current_0;
                var tmp$ret$20;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$19;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$18;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_1 = tmp1__anonymous__uwfjfc_0.f16_1;
                var tmp1__anonymous__uwfjfc_1 = tmp1__anonymous__uwfjfc_0.g16_1;
                var tmp2__anonymous__z9zvc9_0 = tmp1__anonymous__uwfjfc_0.h16_1;
                var tmp$ret$17;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t_1.a1g_1.buffer, tmp0__anonymous__q1qw7t_1.a1g_1.byteOffset + tmp1__anonymous__uwfjfc_1 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_1 | 0);
                var result = decodeBufferImpl(tmp3__anonymous__ufb84q_0, decoder, max - charactersCopied | 0);
                dst.c(result.j1n_1);
                charactersCopied = charactersCopied + result.j1n_1.length | 0;
                tmp$ret$17 = result.k1n_1;
                tmp$ret$18 = tmp$ret$17;
                var rc_0 = tmp$ret$18;
                tmp1__anonymous__uwfjfc_0.p1g(rc_0);
                tmp$ret$19 = rc_0;
                tmp$ret$20 = tmp$ret$19;
                var rc_1 = tmp$ret$20;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  var tmp0 = size_0;
                  size_0 = tmp0 + 1 | 0;
                }
                tmp$ret$21 = size_0;
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp1__get_readRemaining__qliyus_0 = current_0;
                tmp$ret$22 = tmp1__get_readRemaining__qliyus_0.h16_1 - tmp1__get_readRemaining__qliyus_0.g16_1 | 0;
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp2__get_endGap__m31424_0 = current_0;
                tmp$ret$23 = tmp2__get_endGap__m31424_0.k16_1 - tmp2__get_endGap__m31424_0.j16_1 | 0;
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex <= toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().n1j_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().m1j_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.j16_1 - dst.h16_1 | 0;
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully$default_1(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = input.o18_1 - input.n18_1 | 0;
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder_0(get_charset(_this__u8e3s4).o1j_1, true);
      var head = input.e1i();
      var view = input.m18_1.a1g_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.g16_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.g16_1 | 0, inputLength);
          tmp$ret$1 = decoder.l1n(subView);
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_elvis_lhs = $p.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.p1g(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.z1m_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.a1n_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$17;
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              var tmp$ret$1;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0__get_readRemaining__u3cy9h = current;
              tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.h16_1 - tmp0__get_readRemaining__u3cy9h.g16_1 | 0;
              var before = tmp$ret$1;
              var after;
              if (before >= size) {
                try {
                  var tmp$ret$8;
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp0__anonymous__q1qw7t = current;
                  var tmp$ret$2;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  tmp$ret$2 = tmp0__anonymous__q1qw7t.h16_1 - tmp0__anonymous__q1qw7t.g16_1 | 0;
                  var chunkSize = tmp$ret$2;
                  var tmp$ret$3;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                  var size_0 = tmp$ret$3;
                  var tmp_0;
                  if (tmp0__anonymous__q1qw7t.g16_1 === 0 ? tmp0__anonymous__q1qw7t.f16_1.a1g_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp0__anonymous__q1qw7t.f16_1.a1g_1;
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.h1n(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp0__anonymous__q1qw7t.f16_1.a1g_1.buffer, tmp0__anonymous__q1qw7t.f16_1.a1g_1.byteOffset + tmp0__anonymous__q1qw7t.g16_1 | 0, size_0);
                      var tmp$ret$7;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.h1n(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_1 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.j6(text);
                  tmp0__anonymous__q1qw7t.p1g(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                  size = tmp$ret$8;
                }finally {
                  var tmp$ret$9;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1__get_readRemaining__qliyus = current;
                  tmp$ret$9 = tmp1__get_readRemaining__qliyus.h16_1 - tmp1__get_readRemaining__qliyus.g16_1 | 0;
                  after = tmp$ret$9;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  var tmp$ret$10;
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2__get_endGap__m31424 = current;
                  tmp$ret$10 = tmp2__get_endGap__m31424.k16_1 - tmp2__get_endGap__m31424.j16_1 | 0;
                  var tmp_3 = tmp$ret$10;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              tmp$ret$11 = Unit_getInstance();
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                var tmp$ret$16;
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp1__anonymous__uwfjfc = current_0;
                var tmp$ret$12;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$12 = tmp1__anonymous__uwfjfc.h16_1 - tmp1__anonymous__uwfjfc.g16_1 | 0;
                var chunkSize_0 = tmp$ret$12;
                var tmp$ret$13;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                var size_1 = tmp$ret$13;
                var tmp_6;
                if (tmp1__anonymous__uwfjfc.g16_1 === 0 ? tmp1__anonymous__uwfjfc.f16_1.a1g_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.l1n(tmp1__anonymous__uwfjfc.f16_1.a1g_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp1__anonymous__uwfjfc.f16_1.a1g_1.buffer, tmp1__anonymous__uwfjfc.f16_1.a1g_1.byteOffset + tmp1__anonymous__uwfjfc.g16_1 | 0, size_1);
                    var tmp$ret$15;
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.h1n(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var tmp0_elvis_lhs_3 = $p.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.j6(text_0);
                tmp1__anonymous__uwfjfc.p1g(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                tmp$ret$16 = true;
                if (!tmp$ret$16) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        tmp$ret$17 = sb.j6(decoder.i1n());
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs_4 = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.j1n_1 = charactersDecoded;
    this.k1n_1 = bytesConsumed;
  }
  DecodeBufferResult.prototype.m1n = function () {
    return this.j1n_1;
  };
  DecodeBufferResult.prototype.n1n = function () {
    return this.k1n_1;
  };
  DecodeBufferResult.prototype.toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.j1n_1 + ', bytesConsumed=' + this.k1n_1 + ')';
  };
  DecodeBufferResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.j1n_1);
    result = imul(result, 31) + this.k1n_1 | 0;
    return result;
  };
  DecodeBufferResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.j1n_1 === tmp0_other_with_cast.j1n_1))
      return false;
    if (!(this.k1n_1 === tmp0_other_with_cast.k1n_1))
      return false;
    return true;
  };
  DecodeBufferResult.$metadata$ = classMeta('DecodeBufferResult');
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.l1n(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().w_1 : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.l1n(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.l1n(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        tmp$ret$0 = nativeDecoder.l1n(_this__u8e3s4);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = dst.f16_1;
    var tmp1__anonymous__uwfjfc = dst.h16_1;
    var tmp2__anonymous__z9zvc9 = dst.j16_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.v1m(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).a1g_1;
    var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(input, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        var tmp1_set = tmp1;
        var tmp2_set = toByte(character);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = i8;
        tmp$ret$1[tmp1_set] = tmp2_set;
      }
       while (inductionVariable < toIndex);
    tmp$ret$2 = writeIndex;
    tmp$ret$3 = tmp$ret$2;
    var rc = tmp$ret$3;
    dst.q1g(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function readDirectInt8Array(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.g16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.h16_1;
    tmp$ret$0 = block(new Int8Array(tmp0__anonymous__q1qw7t.a1g_1.buffer, tmp0__anonymous__q1qw7t.a1g_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0));
    var rc = tmp$ret$0;
    _this__u8e3s4.p1g(rc);
    tmp$ret$1 = rc;
    return tmp$ret$1;
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.h16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j16_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_2(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.q1g(rc);
    tmp$ret$1 = rc;
  }
  function writeFully$default_1(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_4(_this__u8e3s4, src, offset, length);
  }
  function writeDirect(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.f16_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.h16_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.j16_1;
    tmp$ret$0 = block(tmp0__anonymous__q1qw7t.v1m(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).a1g_1);
    var rc = tmp$ret$0;
    _this__u8e3s4.q1g(rc);
    tmp$ret$1 = rc;
    return tmp$ret$1;
  }
  function ByteReadPacket_1(array, offset, length, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var tmp = tmp$ret$0;
    var content = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var sub = (offset === 0 ? length === array.length : false) ? content.buffer : content.buffer.slice(offset, offset + length | 0);
    var pool = new ByteReadPacket$pool$1(sub, block, array);
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = pool.c1f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.ByteReadPacket.<anonymous>' call
    tmp0_apply.v1g();
    tmp$ret$1 = tmp0_apply;
    return ByteReadPacket_init_$Create$(tmp$ret$1, pool);
  }
  function ByteReadPacket$pool$1($sub, $block, $array) {
    this.r1n_1 = $sub;
    this.s1n_1 = $block;
    this.t1n_1 = $array;
    SingleInstancePool.call(this);
  }
  ByteReadPacket$pool$1.prototype.j1h = function () {
    var tmp = Companion_getInstance_6();
    return new ChunkBuffer(of$default(tmp, this.r1n_1, 0, 0, 6, null), null, this);
  };
  ByteReadPacket$pool$1.prototype.k1h = function (instance) {
    this.s1n_1(this.t1n_1);
  };
  ByteReadPacket$pool$1.prototype.o1h = function (instance) {
    return this.k1h(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ByteReadPacket$pool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, SingleInstancePool.prototype);
  function Closeable() {
  }
  Closeable.$metadata$ = interfaceMeta('Closeable');
  function addSuppressedInternal(_this__u8e3s4, other) {
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var tmp = Companion_getInstance_6();
    var view = new ChunkBuffer(of$default(tmp, buffer, 0, 0, 6, null), null, Companion_getInstance_4().t14_1);
    view.v1g();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().u14_1);
    return decode(charset.q1j(), packet, IntCompanionObject_getInstance().w_1);
  }
  function String$default(bytes, offset, length, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().m1j_1;
    return String_0(bytes, offset, length, charset);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (offset + length | 0) <= bytes.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  EOFException.$metadata$ = classMeta('EOFException', undefined, undefined, undefined, undefined, IOException.prototype);
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = classMeta('IOException', undefined, undefined, undefined, undefined, Exception.prototype);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Decoder_0(encoding, fatal) {
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeStream(_this__u8e3s4, buffer, stream) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
    try {
      return _this__u8e3s4.h1n(buffer, decodeOptions(stream));
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = $p.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.stream = stream;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.fatal = fatal;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.u1n_1 = $this_toKtor;
  }
  toKtor$1.prototype.i1n = function () {
    return this.u1n_1.decode();
  };
  toKtor$1.prototype.l1n = function (buffer) {
    return this.u1n_1.decode(buffer);
  };
  toKtor$1.prototype.h1n = function (buffer, options) {
    return this.u1n_1.decode(buffer, options);
  };
  toKtor$1.$metadata$ = classMeta(undefined, [Decoder]);
  function get_ENCODING_ALIASES() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.v1n_1 = fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
    var tmp0_lowercase = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_lowercase;
    tmp$ret$2 = tmp$ret$1.toLowerCase();
    var requestedEncoding = tmp$ret$2;
    // Inline function 'kotlin.check' call
    var tmp1_check = get_ENCODING_ALIASES().l1(requestedEncoding);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      tmp$ret$3 = encoding + ' is not supported.';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  TextDecoderFallback.prototype.w1n = function () {
    return this.v1n_1;
  };
  TextDecoderFallback.prototype.i1n = function () {
    return '';
  };
  TextDecoderFallback.prototype.l1n = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = bytes;
            tmp$ret$1 = tmp$ret$0[index];
            var byte = tmp$ret$1;
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              var tmp0_check = !this.v1n_1;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Invalid character: ' + point;
                var message = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              var tmp = get_REPLACEMENT();
              writeFully$default_0(builder, tmp, 0, 0, 6, null);
              continue $l$loop;
            }
            if (point > 255) {
              builder.c1h(toByte(point >> 8));
            }
            builder.c1h(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.t2();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.kr();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var tmp_0 = tmp$ret$3;
    return decodeToString(readBytes$default(tmp_0, 0, 1, null));
  };
  TextDecoderFallback.prototype.h1n = function (buffer, options) {
    return this.l1n(buffer);
  };
  TextDecoderFallback.$metadata$ = classMeta('TextDecoderFallback', [Decoder]);
  function toCodePoint(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function init_properties_TextDecoderFallback_kt_mch4cl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT = tmp$ret$0;
    }
  }
  function decodeWrap(block) {
    try {
      return block();
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = $p.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
  }
  function get_WIN1252_TABLE() {
    init_properties_Win1252Table_kt_2hu70m();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function init_properties_Win1252Table_kt_2hu70m() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.l1h_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.l1h_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.m1h_1 = tmp$ret$0;
    this.n1h_1 = 0;
  }
  DefaultPool.prototype.o1h = function (instance) {
  };
  DefaultPool.prototype.v1h = function (instance) {
    return instance;
  };
  DefaultPool.prototype.r1h = function (instance) {
  };
  DefaultPool.prototype.c1f = function () {
    if (this.n1h_1 === 0)
      return this.j1h();
    var tmp0_this = this;
    tmp0_this.n1h_1 = tmp0_this.n1h_1 - 1 | 0;
    var idx = tmp0_this.n1h_1;
    var tmp = this.m1h_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.m1h_1[idx] = null;
    return this.v1h(instance);
  };
  DefaultPool.prototype.x1h = function (instance) {
    this.r1h(instance);
    if (this.n1h_1 === this.l1h_1) {
      this.o1h(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n1h_1;
      tmp0_this.n1h_1 = tmp1 + 1 | 0;
      this.m1h_1[tmp1] = instance;
    }
  };
  DefaultPool.prototype.zl = function () {
    var inductionVariable = 0;
    var last = this.n1h_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.m1h_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.m1h_1[i] = null;
        this.o1h(instance);
      }
       while (inductionVariable < last);
    this.n1h_1 = 0;
  };
  DefaultPool.$metadata$ = classMeta('DefaultPool', [ObjectPool]);
  //region block: post-declaration
  ByteChannelSequentialBase.prototype.e1d = readRemaining$default;
  ChannelJob.prototype.qk = cancel$default;
  ChannelJob.prototype.mk = invokeOnCompletion$default;
  DefaultPool.prototype.u11 = close;
  DefaultBufferPool.prototype.u11 = close;
  ChunkBuffer$Companion$Pool$1.prototype.u11 = close;
  ChunkBuffer$Companion$EmptyPool$1.prototype.u11 = close;
  NoPoolImpl.prototype.u11 = close;
  ChunkBuffer$Companion$NoPool$1.prototype.u11 = close;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.u11 = close;
  ByteArrayPool$1.prototype.u11 = close;
  SingleInstancePool.prototype.u11 = close;
  ByteChannelJS.prototype.e1d = readRemaining$default;
  ByteReadPacket$pool$1.prototype.u11 = close;
  //endregion
  //region block: init
  EXPECTED_CAPACITY = new Long(4088, 0);
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = completeWriting;
  _.$_$.b = copyTo_0;
  _.$_$.c = copyTo;
  _.$_$.d = discard;
  _.$_$.e = readAvailable;
  _.$_$.f = requestWriteBuffer;
  _.$_$.g = writeFully;
  _.$_$.h = decode$default;
  _.$_$.i = encode$default;
  _.$_$.j = String$default;
  _.$_$.k = readBytes$default;
  _.$_$.l = readText$default;
  _.$_$.m = writeFully$default_0;
  _.$_$.n = writeText$default;
  _.$_$.o = ByteChannel$default;
  _.$_$.p = writer$default;
  _.$_$.q = BytePacketBuilder_init_$Create$;
  _.$_$.r = IOException_init_$Init$;
  _.$_$.s = Companion_getInstance_7;
  _.$_$.t = Charsets_getInstance;
  _.$_$.u = Companion_getInstance_1;
  _.$_$.v = Companion_getInstance_5;
  _.$_$.w = MalformedInputException;
  _.$_$.x = encodeToByteArray_0;
  _.$_$.y = encode;
  _.$_$.z = get_name;
  _.$_$.a1 = completeReadHead;
  _.$_$.b1 = prepareReadFirstHead;
  _.$_$.c1 = prepareReadNextHead;
  _.$_$.d1 = ByteReadPacket_1;
  _.$_$.e1 = ByteReadPacket;
  _.$_$.f1 = Closeable;
  _.$_$.g1 = Input;
  _.$_$.h1 = String_0;
  _.$_$.i1 = addSuppressedInternal;
  _.$_$.j1 = discard_0;
  _.$_$.k1 = readAvailable_0;
  _.$_$.l1 = readShort_0;
  _.$_$.m1 = writeShort_0;
  _.$_$.n1 = IOException;
  _.$_$.o1 = get_ByteArrayPool;
  _.$_$.p1 = ByteChannel_0;
  _.$_$.q1 = ByteChannel;
  _.$_$.r1 = ByteReadChannel;
  _.$_$.s1 = ByteReadChannel_1;
  _.$_$.t1 = WriterScope;
  _.$_$.u1 = cancel;
  _.$_$.v1 = close_0;
  _.$_$.w1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map
