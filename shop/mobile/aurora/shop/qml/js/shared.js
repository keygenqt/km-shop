.import "../js/kotlin-kotlin-stdlib-js-ir.js" as Helper
.import "../js/88b0986a7186d029-atomicfu-js-ir.js" as Helper
.import "../js/Kotlin-DateTime-library-kotlinx-datetime-js-ir.js" as Helper
.import "../js/kotlin-kotlinx-atomicfu-runtime-js-ir.js" as Helper
.import "../js/kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js" as Helper
.import "../js/kotlinx-serialization-kotlinx-serialization-core-js-ir.js" as Helper
.import "../js/kotlinx-serialization-kotlinx-serialization-json-js-ir.js" as Helper
.import "../js/ktor-ktor-io-js-ir.js" as Helper
.import "../js/ktor-ktor-utils-js-ir.js" as Helper
.import "../js/ktor-ktor-http-js-ir.js" as Helper
.import "../js/ktor-ktor-events-js-ir.js" as Helper
.import "../js/ktor-ktor-websockets-js-ir.js" as Helper
.import "../js/ktor-ktor-client-core-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-js-ir.js" as Helper
.import "../js/ktor-ktor-client-content-negotiation-js-ir.js" as Helper
.import "../js/ktor-ktor-client-js-js-ir.js" as Helper
.import "../js/ktor-ktor-client-logging-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-kotlinx-js-ir.js" as Helper
.import "../js/ktor-ktor-serialization-kotlinx-json-js-ir.js" as Helper
.import "../js/ktor-ktor-websocket-serialization-js-ir.js" as Helper

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-client-logging-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-client-logging-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-client-logging-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-client-logging-js-ir' was not found. Please, check whether 'ktor-ktor-client-logging-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'ktor-ktor-client-content-negotiation-js-ir' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'shared'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'shared'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'shared'.");
    }
    root.shared = factory(typeof shared === 'undefined' ? {} : shared, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-client-logging-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var classMeta = kotlin_kotlin.$_$.k8;
  var interfaceMeta = kotlin_kotlin.$_$.t8;
  var objectMeta = kotlin_kotlin.$_$.m9;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Unit_getInstance = kotlin_kotlin.$_$.c4;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.yb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.r8;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u3;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var toString = kotlin_kotlin.$_$.q9;
  var hashCode = kotlin_kotlin.$_$.s8;
  var equals = kotlin_kotlin.$_$.m8;
  var ByteArraySerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var EnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var getKClass = kotlin_kotlin.$_$.e;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var getNumberHashCode = kotlin_kotlin.$_$.p8;
  var THROW_ISE = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.pb;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.e8;
  var RuntimeException = kotlin_kotlin.$_$.xb;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var CoroutineImpl = kotlin_kotlin.$_$.v7;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.s;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.ic;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g7;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.n;
  var copyToArray = kotlin_kotlin.$_$.l5;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var get_DEFAULT = kotlin_io_ktor_ktor_client_logging.$_$.d;
  var LogLevel_ALL_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var contentType = kotlin_io_ktor_ktor_http.$_$.n1;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpResponseValidator = kotlin_io_ktor_ktor_client_core.$_$.l;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_client_logging.$_$.c;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Plugin_getInstance_0 = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var lazy = kotlin_kotlin.$_$.rc;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.ca;
  var getPropertyCallableRef = kotlin_kotlin.$_$.q8;
  var SuspendFunction1 = kotlin_kotlin.$_$.x7;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.q;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.l;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.t;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var List = kotlin_kotlin.$_$.l4;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var isInterface = kotlin_kotlin.$_$.c9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sc;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.j;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.n;
  var MultiPartFormDataContent_init_$Create$ = kotlin_io_ktor_ktor_client_core.$_$.b;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.m;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var promise$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.u;
  var SuspendFunction0 = kotlin_kotlin.$_$.w7;
  //endregion
  //region block: pre-declaration
  OrderProduct.prototype = Object.create(Enum.prototype);
  OrderProduct.prototype.constructor = OrderProduct;
  AdminRole.prototype = Object.create(Enum.prototype);
  AdminRole.prototype.constructor = AdminRole;
  OrderState.prototype = Object.create(Enum.prototype);
  OrderState.prototype.constructor = OrderState;
  ResponseException.prototype = Object.create(RuntimeException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype.constructor = ServiceRequest$httpClient$lambda$lambda$slambda;
  $logoutCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $logoutCOROUTINE$0.prototype.constructor = $logoutCOROUTINE$0;
  $adminCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $adminCOROUTINE$1.prototype.constructor = $adminCOROUTINE$1;
  $categoriesCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $categoriesCOROUTINE$2.prototype.constructor = $categoriesCOROUTINE$2;
  $categoriesPublishedCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $categoriesPublishedCOROUTINE$3.prototype.constructor = $categoriesPublishedCOROUTINE$3;
  $categoryCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $categoryCOROUTINE$4.prototype.constructor = $categoryCOROUTINE$4;
  $collectionsCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $collectionsCOROUTINE$5.prototype.constructor = $collectionsCOROUTINE$5;
  $collectionsPublishedCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $collectionsPublishedCOROUTINE$6.prototype.constructor = $collectionsPublishedCOROUTINE$6;
  $collectionCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $collectionCOROUTINE$7.prototype.constructor = $collectionCOROUTINE$7;
  $messagesCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $messagesCOROUTINE$8.prototype.constructor = $messagesCOROUTINE$8;
  $messageCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $messageCOROUTINE$9.prototype.constructor = $messageCOROUTINE$9;
  $productsCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $productsCOROUTINE$10.prototype.constructor = $productsCOROUTINE$10;
  $productsPublishedCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $productsPublishedCOROUTINE$11.prototype.constructor = $productsPublishedCOROUTINE$11;
  $productsCountPublishedCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $productsCountPublishedCOROUTINE$12.prototype.constructor = $productsCountPublishedCOROUTINE$12;
  $productsPurchasedCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $productsPurchasedCOROUTINE$13.prototype.constructor = $productsPurchasedCOROUTINE$13;
  $productsPublishedByIDsCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $productsPublishedByIDsCOROUTINE$14.prototype.constructor = $productsPublishedByIDsCOROUTINE$14;
  $productCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $productCOROUTINE$15.prototype.constructor = $productCOROUTINE$15;
  $pricesCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $pricesCOROUTINE$16.prototype.constructor = $pricesCOROUTINE$16;
  $ordersCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $ordersCOROUTINE$17.prototype.constructor = $ordersCOROUTINE$17;
  $orderByNumberCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $orderByNumberCOROUTINE$18.prototype.constructor = $orderByNumberCOROUTINE$18;
  $orderCOROUTINE$19.prototype = Object.create(CoroutineImpl.prototype);
  $orderCOROUTINE$19.prototype.constructor = $orderCOROUTINE$19;
  $adminsCOROUTINE$20.prototype = Object.create(CoroutineImpl.prototype);
  $adminsCOROUTINE$20.prototype.constructor = $adminsCOROUTINE$20;
  $adminCOROUTINE$21.prototype = Object.create(CoroutineImpl.prototype);
  $adminCOROUTINE$21.prototype.constructor = $adminCOROUTINE$21;
  $dashboardMadeOrdersCOROUTINE$22.prototype = Object.create(CoroutineImpl.prototype);
  $dashboardMadeOrdersCOROUTINE$22.prototype.constructor = $dashboardMadeOrdersCOROUTINE$22;
  $dashboardOrdersCompletedCOROUTINE$23.prototype = Object.create(CoroutineImpl.prototype);
  $dashboardOrdersCompletedCOROUTINE$23.prototype.constructor = $dashboardOrdersCompletedCOROUTINE$23;
  $dashboardTotalEarningsCOROUTINE$24.prototype = Object.create(CoroutineImpl.prototype);
  $dashboardTotalEarningsCOROUTINE$24.prototype.constructor = $dashboardTotalEarningsCOROUTINE$24;
  $dashboardSellerCOROUTINE$25.prototype = Object.create(CoroutineImpl.prototype);
  $dashboardSellerCOROUTINE$25.prototype.constructor = $dashboardSellerCOROUTINE$25;
  $dashboardChartCOROUTINE$26.prototype = Object.create(CoroutineImpl.prototype);
  $dashboardChartCOROUTINE$26.prototype.constructor = $dashboardChartCOROUTINE$26;
  $loginCOROUTINE$27.prototype = Object.create(CoroutineImpl.prototype);
  $loginCOROUTINE$27.prototype.constructor = $loginCOROUTINE$27;
  $messageCOROUTINE$28.prototype = Object.create(CoroutineImpl.prototype);
  $messageCOROUTINE$28.prototype.constructor = $messageCOROUTINE$28;
  $categoryCOROUTINE$29.prototype = Object.create(CoroutineImpl.prototype);
  $categoryCOROUTINE$29.prototype.constructor = $categoryCOROUTINE$29;
  $collectionCOROUTINE$30.prototype = Object.create(CoroutineImpl.prototype);
  $collectionCOROUTINE$30.prototype.constructor = $collectionCOROUTINE$30;
  $productCOROUTINE$31.prototype = Object.create(CoroutineImpl.prototype);
  $productCOROUTINE$31.prototype.constructor = $productCOROUTINE$31;
  $adminCOROUTINE$32.prototype = Object.create(CoroutineImpl.prototype);
  $adminCOROUTINE$32.prototype.constructor = $adminCOROUTINE$32;
  $uploadsCOROUTINE$33.prototype = Object.create(CoroutineImpl.prototype);
  $uploadsCOROUTINE$33.prototype.constructor = $uploadsCOROUTINE$33;
  $orderCreateCOROUTINE$34.prototype = Object.create(CoroutineImpl.prototype);
  $orderCreateCOROUTINE$34.prototype.constructor = $orderCreateCOROUTINE$34;
  $messageStateCOROUTINE$35.prototype = Object.create(CoroutineImpl.prototype);
  $messageStateCOROUTINE$35.prototype.constructor = $messageStateCOROUTINE$35;
  $categoryCOROUTINE$36.prototype = Object.create(CoroutineImpl.prototype);
  $categoryCOROUTINE$36.prototype.constructor = $categoryCOROUTINE$36;
  $categoryStateCOROUTINE$37.prototype = Object.create(CoroutineImpl.prototype);
  $categoryStateCOROUTINE$37.prototype.constructor = $categoryStateCOROUTINE$37;
  $collectionCOROUTINE$38.prototype = Object.create(CoroutineImpl.prototype);
  $collectionCOROUTINE$38.prototype.constructor = $collectionCOROUTINE$38;
  $collectionStateCOROUTINE$39.prototype = Object.create(CoroutineImpl.prototype);
  $collectionStateCOROUTINE$39.prototype.constructor = $collectionStateCOROUTINE$39;
  $productCOROUTINE$40.prototype = Object.create(CoroutineImpl.prototype);
  $productCOROUTINE$40.prototype.constructor = $productCOROUTINE$40;
  $productStateCOROUTINE$41.prototype = Object.create(CoroutineImpl.prototype);
  $productStateCOROUTINE$41.prototype.constructor = $productStateCOROUTINE$41;
  $adminCOROUTINE$42.prototype = Object.create(CoroutineImpl.prototype);
  $adminCOROUTINE$42.prototype.constructor = $adminCOROUTINE$42;
  $orderCustomerCOROUTINE$43.prototype = Object.create(CoroutineImpl.prototype);
  $orderCustomerCOROUTINE$43.prototype.constructor = $orderCustomerCOROUTINE$43;
  $orderNoteCOROUTINE$44.prototype = Object.create(CoroutineImpl.prototype);
  $orderNoteCOROUTINE$44.prototype.constructor = $orderNoteCOROUTINE$44;
  $orderStateCOROUTINE$45.prototype = Object.create(CoroutineImpl.prototype);
  $orderStateCOROUTINE$45.prototype.constructor = $orderStateCOROUTINE$45;
  wrapPromise$slambda.prototype = Object.create(CoroutineImpl.prototype);
  wrapPromise$slambda.prototype.constructor = wrapPromise$slambda;
  DeleteRequestPromise$logout$slambda.prototype = Object.create(CoroutineImpl.prototype);
  DeleteRequestPromise$logout$slambda.prototype.constructor = DeleteRequestPromise$logout$slambda;
  DeleteRequestPromise$admin$slambda.prototype = Object.create(CoroutineImpl.prototype);
  DeleteRequestPromise$admin$slambda.prototype.constructor = DeleteRequestPromise$admin$slambda;
  GetRequestPromise$categories$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$categories$slambda.prototype.constructor = GetRequestPromise$categories$slambda;
  GetRequestPromise$categoriesPublished$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$categoriesPublished$slambda.prototype.constructor = GetRequestPromise$categoriesPublished$slambda;
  GetRequestPromise$collection$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$collection$slambda.prototype.constructor = GetRequestPromise$collection$slambda;
  GetRequestPromise$collections$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$collections$slambda.prototype.constructor = GetRequestPromise$collections$slambda;
  GetRequestPromise$collectionsPublished$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$collectionsPublished$slambda.prototype.constructor = GetRequestPromise$collectionsPublished$slambda;
  GetRequestPromise$category$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$category$slambda.prototype.constructor = GetRequestPromise$category$slambda;
  GetRequestPromise$messages$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$messages$slambda.prototype.constructor = GetRequestPromise$messages$slambda;
  GetRequestPromise$message$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$message$slambda.prototype.constructor = GetRequestPromise$message$slambda;
  GetRequestPromise$products$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$products$slambda.prototype.constructor = GetRequestPromise$products$slambda;
  GetRequestPromise$productsPublished$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$productsPublished$slambda.prototype.constructor = GetRequestPromise$productsPublished$slambda;
  GetRequestPromise$productsCountPublished$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$productsCountPublished$slambda.prototype.constructor = GetRequestPromise$productsCountPublished$slambda;
  GetRequestPromise$productsPurchased$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$productsPurchased$slambda.prototype.constructor = GetRequestPromise$productsPurchased$slambda;
  GetRequestPromise$productsPublishedByIDs$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$productsPublishedByIDs$slambda.prototype.constructor = GetRequestPromise$productsPublishedByIDs$slambda;
  GetRequestPromise$product$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$product$slambda.prototype.constructor = GetRequestPromise$product$slambda;
  GetRequestPromise$prices$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$prices$slambda.prototype.constructor = GetRequestPromise$prices$slambda;
  GetRequestPromise$orders$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$orders$slambda.prototype.constructor = GetRequestPromise$orders$slambda;
  GetRequestPromise$orderByNumber$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$orderByNumber$slambda.prototype.constructor = GetRequestPromise$orderByNumber$slambda;
  GetRequestPromise$order$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$order$slambda.prototype.constructor = GetRequestPromise$order$slambda;
  GetRequestPromise$admins$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$admins$slambda.prototype.constructor = GetRequestPromise$admins$slambda;
  GetRequestPromise$admin$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$admin$slambda.prototype.constructor = GetRequestPromise$admin$slambda;
  GetRequestPromise$dashboardMadeOrders$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$dashboardMadeOrders$slambda.prototype.constructor = GetRequestPromise$dashboardMadeOrders$slambda;
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype.constructor = GetRequestPromise$dashboardOrdersCompleted$slambda;
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype.constructor = GetRequestPromise$dashboardTotalEarnings$slambda;
  GetRequestPromise$dashboardSeller$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$dashboardSeller$slambda.prototype.constructor = GetRequestPromise$dashboardSeller$slambda;
  GetRequestPromise$dashboardChart$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GetRequestPromise$dashboardChart$slambda.prototype.constructor = GetRequestPromise$dashboardChart$slambda;
  PostRequestPromise$login$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$login$slambda.prototype.constructor = PostRequestPromise$login$slambda;
  PostRequestPromise$message$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$message$slambda.prototype.constructor = PostRequestPromise$message$slambda;
  PostRequestPromise$category$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$category$slambda.prototype.constructor = PostRequestPromise$category$slambda;
  PostRequestPromise$collection$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$collection$slambda.prototype.constructor = PostRequestPromise$collection$slambda;
  PostRequestPromise$product$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$product$slambda.prototype.constructor = PostRequestPromise$product$slambda;
  PostRequestPromise$admin$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$admin$slambda.prototype.constructor = PostRequestPromise$admin$slambda;
  PostRequestPromise$uploads$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$uploads$slambda.prototype.constructor = PostRequestPromise$uploads$slambda;
  PostRequestPromise$orderCreate$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PostRequestPromise$orderCreate$slambda.prototype.constructor = PostRequestPromise$orderCreate$slambda;
  PutRequestPromise$messageState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$messageState$slambda.prototype.constructor = PutRequestPromise$messageState$slambda;
  PutRequestPromise$category$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$category$slambda.prototype.constructor = PutRequestPromise$category$slambda;
  PutRequestPromise$categoryState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$categoryState$slambda.prototype.constructor = PutRequestPromise$categoryState$slambda;
  PutRequestPromise$collection$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$collection$slambda.prototype.constructor = PutRequestPromise$collection$slambda;
  PutRequestPromise$collectionState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$collectionState$slambda.prototype.constructor = PutRequestPromise$collectionState$slambda;
  PutRequestPromise$product$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$product$slambda.prototype.constructor = PutRequestPromise$product$slambda;
  PutRequestPromise$productState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$productState$slambda.prototype.constructor = PutRequestPromise$productState$slambda;
  PutRequestPromise$admin$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$admin$slambda.prototype.constructor = PutRequestPromise$admin$slambda;
  PutRequestPromise$orderCustomer$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$orderCustomer$slambda.prototype.constructor = PutRequestPromise$orderCustomer$slambda;
  PutRequestPromise$orderNote$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$orderNote$slambda.prototype.constructor = PutRequestPromise$orderNote$slambda;
  PutRequestPromise$orderState$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PutRequestPromise$orderState$slambda.prototype.constructor = PutRequestPromise$orderState$slambda;
  //endregion
  function Greeting() {
    this.h4i_1 = getPlatform();
  }
  Greeting.prototype.greeting = function () {
    return 'Hello, ' + this.h4i_1.n4() + '!';
  };
  Greeting.$metadata$ = classMeta('Greeting');
  function Platform() {
  }
  Platform.$metadata$ = interfaceMeta('Platform');
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.AdminCreateRequest', this, 3);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('role', false);
    tmp0_serialDesc.o3z('password', false);
    this.i4i_1 = tmp0_serialDesc;
  }
  $serializer.prototype.v3p = function () {
    return this.i4i_1;
  };
  $serializer.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.x3p = function (decoder) {
    var tmp0_desc = this.i4i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return AdminCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer.prototype.j4i = function (encoder, value) {
    var tmp0_desc = this.i4i_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.k4i_1);
    tmp1_output.f3u(tmp0_desc, 1, value.l4i_1);
    tmp1_output.f3u(tmp0_desc, 2, value.m4i_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer.prototype.w3p = function (encoder, value) {
    return this.j4i(encoder, value instanceof AdminCreateRequest ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function AdminCreateRequest_init_$Init$(seen1, email, role, password, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance().i4i_1);
    }
    $this.k4i_1 = email;
    $this.l4i_1 = role;
    $this.m4i_1 = password;
    return $this;
  }
  function AdminCreateRequest_init_$Create$(seen1, email, role, password, serializationConstructorMarker) {
    return AdminCreateRequest_init_$Init$(seen1, email, role, password, serializationConstructorMarker, Object.create(AdminCreateRequest.prototype));
  }
  function AdminCreateRequest(email, role, password) {
    Companion_getInstance_4();
    this.k4i_1 = email;
    this.l4i_1 = role;
    this.m4i_1 = password;
  }
  AdminCreateRequest.prototype.n4i = function () {
    return this.k4i_1;
  };
  AdminCreateRequest.prototype.o4i = function () {
    return this.l4i_1;
  };
  AdminCreateRequest.prototype.n27 = function () {
    return this.m4i_1;
  };
  AdminCreateRequest.prototype.component1 = function () {
    return this.k4i_1;
  };
  AdminCreateRequest.prototype.component2 = function () {
    return this.l4i_1;
  };
  AdminCreateRequest.prototype.component3 = function () {
    return this.m4i_1;
  };
  AdminCreateRequest.prototype.copy = function (email, role, password) {
    return this.p4i(email === void 1 ? this.k4i_1 : email, role === void 1 ? this.l4i_1 : role, password === void 1 ? this.m4i_1 : password);
  };
  AdminCreateRequest.prototype.p4i = function (email, role, password) {
    return new AdminCreateRequest(email, role, password);
  };
  AdminCreateRequest.prototype.q4i = function (email, role, password, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      email = this.k4i_1;
    if (!(($mask0 & 2) === 0))
      role = this.l4i_1;
    if (!(($mask0 & 4) === 0))
      password = this.m4i_1;
    return this.p4i(email, role, password);
  };
  AdminCreateRequest.prototype.toString = function () {
    return 'AdminCreateRequest(email=' + this.k4i_1 + ', role=' + this.l4i_1 + ', password=' + this.m4i_1 + ')';
  };
  AdminCreateRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.k4i_1);
    result = imul(result, 31) + getStringHashCode(this.l4i_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m4i_1) | 0;
    return result;
  };
  AdminCreateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminCreateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof AdminCreateRequest ? other : THROW_CCE();
    if (!(this.k4i_1 === tmp0_other_with_cast.k4i_1))
      return false;
    if (!(this.l4i_1 === tmp0_other_with_cast.l4i_1))
      return false;
    if (!(this.m4i_1 === tmp0_other_with_cast.m4i_1))
      return false;
    return true;
  };
  AdminCreateRequest.$metadata$ = classMeta('AdminCreateRequest', undefined, undefined, {0: $serializer_getInstance});
  Object.defineProperty(AdminCreateRequest.prototype, 'email', {
    configurable: true,
    get: AdminCreateRequest.prototype.n4i
  });
  Object.defineProperty(AdminCreateRequest.prototype, 'role', {
    configurable: true,
    get: AdminCreateRequest.prototype.o4i
  });
  Object.defineProperty(AdminCreateRequest.prototype, 'password', {
    configurable: true,
    get: AdminCreateRequest.prototype.n27
  });
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer = function () {
    return $serializer_getInstance_0();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.AdminUpdateRequest', this, 2);
    tmp0_serialDesc.o3z('role', false);
    tmp0_serialDesc.o3z('password', false);
    this.r4i_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.v3p = function () {
    return this.r4i_1;
  };
  $serializer_0.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.x3p = function (decoder) {
    var tmp0_desc = this.r4i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.f3t(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.f3t(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return AdminUpdateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_0.prototype.s4i = function (encoder, value) {
    var tmp0_desc = this.r4i_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.t4i_1);
    tmp1_output.i3u(tmp0_desc, 1, StringSerializer_getInstance(), value.u4i_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_0.prototype.w3p = function (encoder, value) {
    return this.s4i(encoder, value instanceof AdminUpdateRequest ? value : THROW_CCE());
  };
  $serializer_0.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function AdminUpdateRequest_init_$Init$(seen1, role, password, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_0().r4i_1);
    }
    $this.t4i_1 = role;
    $this.u4i_1 = password;
    return $this;
  }
  function AdminUpdateRequest_init_$Create$(seen1, role, password, serializationConstructorMarker) {
    return AdminUpdateRequest_init_$Init$(seen1, role, password, serializationConstructorMarker, Object.create(AdminUpdateRequest.prototype));
  }
  function AdminUpdateRequest(role, password) {
    Companion_getInstance_5();
    this.t4i_1 = role;
    this.u4i_1 = password;
  }
  AdminUpdateRequest.prototype.o4i = function () {
    return this.t4i_1;
  };
  AdminUpdateRequest.prototype.n27 = function () {
    return this.u4i_1;
  };
  AdminUpdateRequest.prototype.component1 = function () {
    return this.t4i_1;
  };
  AdminUpdateRequest.prototype.component2 = function () {
    return this.u4i_1;
  };
  AdminUpdateRequest.prototype.copy = function (role, password) {
    return this.v4i(role === void 1 ? this.t4i_1 : role, password === void 1 ? this.u4i_1 : password);
  };
  AdminUpdateRequest.prototype.v4i = function (role, password) {
    return new AdminUpdateRequest(role, password);
  };
  AdminUpdateRequest.prototype.w4i = function (role, password, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      role = this.t4i_1;
    if (!(($mask0 & 2) === 0))
      password = this.u4i_1;
    return this.v4i(role, password);
  };
  AdminUpdateRequest.prototype.toString = function () {
    return 'AdminUpdateRequest(role=' + this.t4i_1 + ', password=' + this.u4i_1 + ')';
  };
  AdminUpdateRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.t4i_1);
    result = imul(result, 31) + (this.u4i_1 == null ? 0 : getStringHashCode(this.u4i_1)) | 0;
    return result;
  };
  AdminUpdateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminUpdateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof AdminUpdateRequest ? other : THROW_CCE();
    if (!(this.t4i_1 === tmp0_other_with_cast.t4i_1))
      return false;
    if (!(this.u4i_1 == tmp0_other_with_cast.u4i_1))
      return false;
    return true;
  };
  AdminUpdateRequest.$metadata$ = classMeta('AdminUpdateRequest', undefined, undefined, {0: $serializer_getInstance_0});
  Object.defineProperty(AdminUpdateRequest.prototype, 'role', {
    configurable: true,
    get: AdminUpdateRequest.prototype.o4i
  });
  Object.defineProperty(AdminUpdateRequest.prototype, 'password', {
    configurable: true,
    get: AdminUpdateRequest.prototype.n27
  });
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer = function () {
    return $serializer_getInstance_1();
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.CategoryRequest', this, 6);
    tmp0_serialDesc.o3z('key', false);
    tmp0_serialDesc.o3z('image', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('desc', false);
    tmp0_serialDesc.o3z('isPublished', false);
    tmp0_serialDesc.o3z('uploads', false);
    this.x4i_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.v3p = function () {
    return this.x4i_1;
  };
  $serializer_1.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_1.prototype.x3p = function (decoder) {
    var tmp0_desc = this.x4i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_local5 = null;
    var tmp10_input = decoder.s3s(tmp0_desc);
    if (tmp10_input.g3t()) {
      tmp4_local0 = tmp10_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.u3s(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.d3t(tmp0_desc, 5, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.u3s(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.d3t(tmp0_desc, 5, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.t3s(tmp0_desc);
    return CategoryRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  $serializer_1.prototype.y4i = function (encoder, value) {
    var tmp0_desc = this.x4i_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.z4i_1);
    tmp1_output.f3u(tmp0_desc, 1, value.a4j_1);
    tmp1_output.f3u(tmp0_desc, 2, value.b4j_1);
    tmp1_output.f3u(tmp0_desc, 3, value.c4j_1);
    tmp1_output.x3t(tmp0_desc, 4, value.d4j_1);
    tmp1_output.g3u(tmp0_desc, 5, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), value.e4j_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_1.prototype.w3p = function (encoder, value) {
    return this.y4i(encoder, value instanceof CategoryRequest ? value : THROW_CCE());
  };
  $serializer_1.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function CategoryRequest_init_$Init$(seen1, key, image, name, desc, isPublished, uploads, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen1))) {
      throwMissingFieldException(seen1, 63, $serializer_getInstance_1().x4i_1);
    }
    $this.z4i_1 = key;
    $this.a4j_1 = image;
    $this.b4j_1 = name;
    $this.c4j_1 = desc;
    $this.d4j_1 = isPublished;
    $this.e4j_1 = uploads;
    return $this;
  }
  function CategoryRequest_init_$Create$(seen1, key, image, name, desc, isPublished, uploads, serializationConstructorMarker) {
    return CategoryRequest_init_$Init$(seen1, key, image, name, desc, isPublished, uploads, serializationConstructorMarker, Object.create(CategoryRequest.prototype));
  }
  function CategoryRequest(key, image, name, desc, isPublished, uploads) {
    Companion_getInstance_6();
    this.z4i_1 = key;
    this.a4j_1 = image;
    this.b4j_1 = name;
    this.c4j_1 = desc;
    this.d4j_1 = isPublished;
    this.e4j_1 = uploads;
  }
  CategoryRequest.prototype.s = function () {
    return this.z4i_1;
  };
  CategoryRequest.prototype.f4j = function () {
    return this.a4j_1;
  };
  CategoryRequest.prototype.n4 = function () {
    return this.b4j_1;
  };
  CategoryRequest.prototype.g4j = function () {
    return this.c4j_1;
  };
  CategoryRequest.prototype.h4j = function () {
    return this.d4j_1;
  };
  CategoryRequest.prototype.i4j = function () {
    return this.e4j_1;
  };
  CategoryRequest.prototype.component1 = function () {
    return this.z4i_1;
  };
  CategoryRequest.prototype.component2 = function () {
    return this.a4j_1;
  };
  CategoryRequest.prototype.component3 = function () {
    return this.b4j_1;
  };
  CategoryRequest.prototype.component4 = function () {
    return this.c4j_1;
  };
  CategoryRequest.prototype.component5 = function () {
    return this.d4j_1;
  };
  CategoryRequest.prototype.component6 = function () {
    return this.e4j_1;
  };
  CategoryRequest.prototype.copy = function (key, image, name, desc, isPublished, uploads) {
    return this.j4j(key === void 1 ? this.z4i_1 : key, image === void 1 ? this.a4j_1 : image, name === void 1 ? this.b4j_1 : name, desc === void 1 ? this.c4j_1 : desc, isPublished === void 1 ? this.d4j_1 : isPublished, uploads === void 1 ? this.e4j_1 : uploads);
  };
  CategoryRequest.prototype.j4j = function (key, image, name, desc, isPublished, uploads) {
    return new CategoryRequest(key, image, name, desc, isPublished, uploads);
  };
  CategoryRequest.prototype.k4j = function (key, image, name, desc, isPublished, uploads, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.z4i_1;
    if (!(($mask0 & 2) === 0))
      image = this.a4j_1;
    if (!(($mask0 & 4) === 0))
      name = this.b4j_1;
    if (!(($mask0 & 8) === 0))
      desc = this.c4j_1;
    if (!(($mask0 & 16) === 0))
      isPublished = this.d4j_1;
    if (!(($mask0 & 32) === 0))
      uploads = this.e4j_1;
    return this.j4j(key, image, name, desc, isPublished, uploads);
  };
  CategoryRequest.prototype.toString = function () {
    return 'CategoryRequest(key=' + this.z4i_1 + ', image=' + this.a4j_1 + ', name=' + this.b4j_1 + ', desc=' + this.c4j_1 + ', isPublished=' + this.d4j_1 + ', uploads=' + toString(this.e4j_1) + ')';
  };
  CategoryRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.z4i_1);
    result = imul(result, 31) + getStringHashCode(this.a4j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b4j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c4j_1) | 0;
    result = imul(result, 31) + (this.d4j_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.e4j_1) | 0;
    return result;
  };
  CategoryRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CategoryRequest))
      return false;
    var tmp0_other_with_cast = other instanceof CategoryRequest ? other : THROW_CCE();
    if (!(this.z4i_1 === tmp0_other_with_cast.z4i_1))
      return false;
    if (!(this.a4j_1 === tmp0_other_with_cast.a4j_1))
      return false;
    if (!(this.b4j_1 === tmp0_other_with_cast.b4j_1))
      return false;
    if (!(this.c4j_1 === tmp0_other_with_cast.c4j_1))
      return false;
    if (!(this.d4j_1 === tmp0_other_with_cast.d4j_1))
      return false;
    if (!equals(this.e4j_1, tmp0_other_with_cast.e4j_1))
      return false;
    return true;
  };
  CategoryRequest.$metadata$ = classMeta('CategoryRequest', undefined, undefined, {0: $serializer_getInstance_1});
  Object.defineProperty(CategoryRequest.prototype, 'key', {
    configurable: true,
    get: CategoryRequest.prototype.s
  });
  Object.defineProperty(CategoryRequest.prototype, 'image', {
    configurable: true,
    get: CategoryRequest.prototype.f4j
  });
  Object.defineProperty(CategoryRequest.prototype, 'name', {
    configurable: true,
    get: CategoryRequest.prototype.n4
  });
  Object.defineProperty(CategoryRequest.prototype, 'desc', {
    configurable: true,
    get: CategoryRequest.prototype.g4j
  });
  Object.defineProperty(CategoryRequest.prototype, 'isPublished', {
    configurable: true,
    get: CategoryRequest.prototype.h4j
  });
  Object.defineProperty(CategoryRequest.prototype, 'uploads', {
    configurable: true,
    get: CategoryRequest.prototype.i4j
  });
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer = function () {
    return $serializer_getInstance_2();
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.CategoryStateRequest', this, 1);
    tmp0_serialDesc.o3z('isPublished', false);
    this.l4j_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.v3p = function () {
    return this.l4j_1;
  };
  $serializer_2.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_2.prototype.x3p = function (decoder) {
    var tmp0_desc = this.l4j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return CategoryStateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_2.prototype.m4j = function (encoder, value) {
    var tmp0_desc = this.l4j_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.x3t(tmp0_desc, 0, value.n4j_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_2.prototype.w3p = function (encoder, value) {
    return this.m4j(encoder, value instanceof CategoryStateRequest ? value : THROW_CCE());
  };
  $serializer_2.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function CategoryStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().l4j_1);
    }
    $this.n4j_1 = isPublished;
    return $this;
  }
  function CategoryStateRequest_init_$Create$(seen1, isPublished, serializationConstructorMarker) {
    return CategoryStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, Object.create(CategoryStateRequest.prototype));
  }
  function CategoryStateRequest(isPublished) {
    Companion_getInstance_7();
    this.n4j_1 = isPublished;
  }
  CategoryStateRequest.prototype.h4j = function () {
    return this.n4j_1;
  };
  CategoryStateRequest.prototype.component1 = function () {
    return this.n4j_1;
  };
  CategoryStateRequest.prototype.copy = function (isPublished) {
    return this.o4j(isPublished === void 1 ? this.n4j_1 : isPublished);
  };
  CategoryStateRequest.prototype.o4j = function (isPublished) {
    return new CategoryStateRequest(isPublished);
  };
  CategoryStateRequest.prototype.p4j = function (isPublished, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      isPublished = this.n4j_1;
    return this.o4j(isPublished);
  };
  CategoryStateRequest.prototype.toString = function () {
    return 'CategoryStateRequest(isPublished=' + this.n4j_1 + ')';
  };
  CategoryStateRequest.prototype.hashCode = function () {
    return this.n4j_1 | 0;
  };
  CategoryStateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CategoryStateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof CategoryStateRequest ? other : THROW_CCE();
    if (!(this.n4j_1 === tmp0_other_with_cast.n4j_1))
      return false;
    return true;
  };
  CategoryStateRequest.$metadata$ = classMeta('CategoryStateRequest', undefined, undefined, {0: $serializer_getInstance_2});
  Object.defineProperty(CategoryStateRequest.prototype, 'isPublished', {
    configurable: true,
    get: CategoryStateRequest.prototype.h4j
  });
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.serializer = function () {
    return $serializer_getInstance_3();
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.CollectionRequest', this, 5);
    tmp0_serialDesc.o3z('key', false);
    tmp0_serialDesc.o3z('icon', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('desc', false);
    tmp0_serialDesc.o3z('isPublished', false);
    this.q4j_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.v3p = function () {
    return this.q4j_1;
  };
  $serializer_3.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_3.prototype.x3p = function (decoder) {
    var tmp0_desc = this.q4j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = false;
    var tmp9_input = decoder.s3s(tmp0_desc);
    if (tmp9_input.g3t()) {
      tmp4_local0 = tmp9_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.u3s(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.u3s(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.t3s(tmp0_desc);
    return CollectionRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_3.prototype.r4j = function (encoder, value) {
    var tmp0_desc = this.q4j_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.s4j_1);
    tmp1_output.f3u(tmp0_desc, 1, value.t4j_1);
    tmp1_output.f3u(tmp0_desc, 2, value.u4j_1);
    tmp1_output.f3u(tmp0_desc, 3, value.v4j_1);
    tmp1_output.x3t(tmp0_desc, 4, value.w4j_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_3.prototype.w3p = function (encoder, value) {
    return this.r4j(encoder, value instanceof CollectionRequest ? value : THROW_CCE());
  };
  $serializer_3.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function CollectionRequest_init_$Init$(seen1, key, icon, name, desc, isPublished, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_3().q4j_1);
    }
    $this.s4j_1 = key;
    $this.t4j_1 = icon;
    $this.u4j_1 = name;
    $this.v4j_1 = desc;
    $this.w4j_1 = isPublished;
    return $this;
  }
  function CollectionRequest_init_$Create$(seen1, key, icon, name, desc, isPublished, serializationConstructorMarker) {
    return CollectionRequest_init_$Init$(seen1, key, icon, name, desc, isPublished, serializationConstructorMarker, Object.create(CollectionRequest.prototype));
  }
  function CollectionRequest(key, icon, name, desc, isPublished) {
    Companion_getInstance_8();
    this.s4j_1 = key;
    this.t4j_1 = icon;
    this.u4j_1 = name;
    this.v4j_1 = desc;
    this.w4j_1 = isPublished;
  }
  CollectionRequest.prototype.s = function () {
    return this.s4j_1;
  };
  CollectionRequest.prototype.x4j = function () {
    return this.t4j_1;
  };
  CollectionRequest.prototype.n4 = function () {
    return this.u4j_1;
  };
  CollectionRequest.prototype.g4j = function () {
    return this.v4j_1;
  };
  CollectionRequest.prototype.h4j = function () {
    return this.w4j_1;
  };
  CollectionRequest.prototype.component1 = function () {
    return this.s4j_1;
  };
  CollectionRequest.prototype.component2 = function () {
    return this.t4j_1;
  };
  CollectionRequest.prototype.component3 = function () {
    return this.u4j_1;
  };
  CollectionRequest.prototype.component4 = function () {
    return this.v4j_1;
  };
  CollectionRequest.prototype.component5 = function () {
    return this.w4j_1;
  };
  CollectionRequest.prototype.copy = function (key, icon, name, desc, isPublished) {
    return this.y4j(key === void 1 ? this.s4j_1 : key, icon === void 1 ? this.t4j_1 : icon, name === void 1 ? this.u4j_1 : name, desc === void 1 ? this.v4j_1 : desc, isPublished === void 1 ? this.w4j_1 : isPublished);
  };
  CollectionRequest.prototype.y4j = function (key, icon, name, desc, isPublished) {
    return new CollectionRequest(key, icon, name, desc, isPublished);
  };
  CollectionRequest.prototype.z4j = function (key, icon, name, desc, isPublished, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.s4j_1;
    if (!(($mask0 & 2) === 0))
      icon = this.t4j_1;
    if (!(($mask0 & 4) === 0))
      name = this.u4j_1;
    if (!(($mask0 & 8) === 0))
      desc = this.v4j_1;
    if (!(($mask0 & 16) === 0))
      isPublished = this.w4j_1;
    return this.y4j(key, icon, name, desc, isPublished);
  };
  CollectionRequest.prototype.toString = function () {
    return 'CollectionRequest(key=' + this.s4j_1 + ', icon=' + this.t4j_1 + ', name=' + this.u4j_1 + ', desc=' + this.v4j_1 + ', isPublished=' + this.w4j_1 + ')';
  };
  CollectionRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.s4j_1);
    result = imul(result, 31) + getStringHashCode(this.t4j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u4j_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v4j_1) | 0;
    result = imul(result, 31) + (this.w4j_1 | 0) | 0;
    return result;
  };
  CollectionRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CollectionRequest))
      return false;
    var tmp0_other_with_cast = other instanceof CollectionRequest ? other : THROW_CCE();
    if (!(this.s4j_1 === tmp0_other_with_cast.s4j_1))
      return false;
    if (!(this.t4j_1 === tmp0_other_with_cast.t4j_1))
      return false;
    if (!(this.u4j_1 === tmp0_other_with_cast.u4j_1))
      return false;
    if (!(this.v4j_1 === tmp0_other_with_cast.v4j_1))
      return false;
    if (!(this.w4j_1 === tmp0_other_with_cast.w4j_1))
      return false;
    return true;
  };
  CollectionRequest.$metadata$ = classMeta('CollectionRequest', undefined, undefined, {0: $serializer_getInstance_3});
  Object.defineProperty(CollectionRequest.prototype, 'key', {
    configurable: true,
    get: CollectionRequest.prototype.s
  });
  Object.defineProperty(CollectionRequest.prototype, 'icon', {
    configurable: true,
    get: CollectionRequest.prototype.x4j
  });
  Object.defineProperty(CollectionRequest.prototype, 'name', {
    configurable: true,
    get: CollectionRequest.prototype.n4
  });
  Object.defineProperty(CollectionRequest.prototype, 'desc', {
    configurable: true,
    get: CollectionRequest.prototype.g4j
  });
  Object.defineProperty(CollectionRequest.prototype, 'isPublished', {
    configurable: true,
    get: CollectionRequest.prototype.h4j
  });
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.serializer = function () {
    return $serializer_getInstance_4();
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.CollectionStateRequest', this, 1);
    tmp0_serialDesc.o3z('isPublished', false);
    this.a4k_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.v3p = function () {
    return this.a4k_1;
  };
  $serializer_4.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_4.prototype.x3p = function (decoder) {
    var tmp0_desc = this.a4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return CollectionStateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_4.prototype.b4k = function (encoder, value) {
    var tmp0_desc = this.a4k_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.x3t(tmp0_desc, 0, value.c4k_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_4.prototype.w3p = function (encoder, value) {
    return this.b4k(encoder, value instanceof CollectionStateRequest ? value : THROW_CCE());
  };
  $serializer_4.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function CollectionStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_4().a4k_1);
    }
    $this.c4k_1 = isPublished;
    return $this;
  }
  function CollectionStateRequest_init_$Create$(seen1, isPublished, serializationConstructorMarker) {
    return CollectionStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, Object.create(CollectionStateRequest.prototype));
  }
  function CollectionStateRequest(isPublished) {
    Companion_getInstance_9();
    this.c4k_1 = isPublished;
  }
  CollectionStateRequest.prototype.h4j = function () {
    return this.c4k_1;
  };
  CollectionStateRequest.prototype.component1 = function () {
    return this.c4k_1;
  };
  CollectionStateRequest.prototype.copy = function (isPublished) {
    return this.o4j(isPublished === void 1 ? this.c4k_1 : isPublished);
  };
  CollectionStateRequest.prototype.o4j = function (isPublished) {
    return new CollectionStateRequest(isPublished);
  };
  CollectionStateRequest.prototype.p4j = function (isPublished, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      isPublished = this.c4k_1;
    return this.o4j(isPublished);
  };
  CollectionStateRequest.prototype.toString = function () {
    return 'CollectionStateRequest(isPublished=' + this.c4k_1 + ')';
  };
  CollectionStateRequest.prototype.hashCode = function () {
    return this.c4k_1 | 0;
  };
  CollectionStateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CollectionStateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof CollectionStateRequest ? other : THROW_CCE();
    if (!(this.c4k_1 === tmp0_other_with_cast.c4k_1))
      return false;
    return true;
  };
  CollectionStateRequest.$metadata$ = classMeta('CollectionStateRequest', undefined, undefined, {0: $serializer_getInstance_4});
  Object.defineProperty(CollectionStateRequest.prototype, 'isPublished', {
    configurable: true,
    get: CollectionStateRequest.prototype.h4j
  });
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.serializer = function () {
    return $serializer_getInstance_5();
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_10() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.FileRequest', this, 3);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('contentType', false);
    tmp0_serialDesc.o3z('file', false);
    this.d4k_1 = tmp0_serialDesc;
  }
  $serializer_5.prototype.v3p = function () {
    return this.d4k_1;
  };
  $serializer_5.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), ByteArraySerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_5.prototype.x3p = function (decoder) {
    var tmp0_desc = this.d4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.d3t(tmp0_desc, 2, ByteArraySerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.d3t(tmp0_desc, 2, ByteArraySerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return FileRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_5.prototype.e4k = function (encoder, value) {
    var tmp0_desc = this.d4k_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.f4k_1);
    tmp1_output.f3u(tmp0_desc, 1, value.g4k_1);
    tmp1_output.g3u(tmp0_desc, 2, ByteArraySerializer_getInstance(), value.h4k_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_5.prototype.w3p = function (encoder, value) {
    return this.e4k(encoder, value instanceof FileRequest ? value : THROW_CCE());
  };
  $serializer_5.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function FileRequest_init_$Init$(seen1, name, contentType, file, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_5().d4k_1);
    }
    $this.f4k_1 = name;
    $this.g4k_1 = contentType;
    $this.h4k_1 = file;
    return $this;
  }
  function FileRequest_init_$Create$(seen1, name, contentType, file, serializationConstructorMarker) {
    return FileRequest_init_$Init$(seen1, name, contentType, file, serializationConstructorMarker, Object.create(FileRequest.prototype));
  }
  function FileRequest(name, contentType, file) {
    Companion_getInstance_10();
    this.f4k_1 = name;
    this.g4k_1 = contentType;
    this.h4k_1 = file;
  }
  FileRequest.prototype.n4 = function () {
    return this.f4k_1;
  };
  FileRequest.prototype.j28 = function () {
    return this.g4k_1;
  };
  FileRequest.prototype.i4k = function () {
    return this.h4k_1;
  };
  FileRequest.prototype.component1 = function () {
    return this.f4k_1;
  };
  FileRequest.prototype.component2 = function () {
    return this.g4k_1;
  };
  FileRequest.prototype.component3 = function () {
    return this.h4k_1;
  };
  FileRequest.prototype.copy = function (name, contentType, file) {
    return this.j4k(name === void 1 ? this.f4k_1 : name, contentType === void 1 ? this.g4k_1 : contentType, file === void 1 ? this.h4k_1 : file);
  };
  FileRequest.prototype.j4k = function (name, contentType, file) {
    return new FileRequest(name, contentType, file);
  };
  FileRequest.prototype.k4k = function (name, contentType, file, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.f4k_1;
    if (!(($mask0 & 2) === 0))
      contentType = this.g4k_1;
    if (!(($mask0 & 4) === 0))
      file = this.h4k_1;
    return this.j4k(name, contentType, file);
  };
  FileRequest.prototype.toString = function () {
    return 'FileRequest(name=' + this.f4k_1 + ', contentType=' + this.g4k_1 + ', file=' + toString(this.h4k_1) + ')';
  };
  FileRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.f4k_1);
    result = imul(result, 31) + getStringHashCode(this.g4k_1) | 0;
    result = imul(result, 31) + hashCode(this.h4k_1) | 0;
    return result;
  };
  FileRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FileRequest))
      return false;
    var tmp0_other_with_cast = other instanceof FileRequest ? other : THROW_CCE();
    if (!(this.f4k_1 === tmp0_other_with_cast.f4k_1))
      return false;
    if (!(this.g4k_1 === tmp0_other_with_cast.g4k_1))
      return false;
    if (!equals(this.h4k_1, tmp0_other_with_cast.h4k_1))
      return false;
    return true;
  };
  FileRequest.$metadata$ = classMeta('FileRequest', undefined, undefined, {0: $serializer_getInstance_5});
  Object.defineProperty(FileRequest.prototype, 'name', {
    configurable: true,
    get: FileRequest.prototype.n4
  });
  Object.defineProperty(FileRequest.prototype, 'contentType', {
    configurable: true,
    get: FileRequest.prototype.j28
  });
  Object.defineProperty(FileRequest.prototype, 'file', {
    configurable: true,
    get: FileRequest.prototype.i4k
  });
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.serializer = function () {
    return $serializer_getInstance_6();
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_11() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.LoginRequest', this, 2);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('password', false);
    this.l4k_1 = tmp0_serialDesc;
  }
  $serializer_6.prototype.v3p = function () {
    return this.l4k_1;
  };
  $serializer_6.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_6.prototype.x3p = function (decoder) {
    var tmp0_desc = this.l4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return LoginRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_6.prototype.m4k = function (encoder, value) {
    var tmp0_desc = this.l4k_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.n4k_1);
    tmp1_output.f3u(tmp0_desc, 1, value.o4k_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_6.prototype.w3p = function (encoder, value) {
    return this.m4k(encoder, value instanceof LoginRequest ? value : THROW_CCE());
  };
  $serializer_6.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function LoginRequest_init_$Init$(seen1, email, password, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_6().l4k_1);
    }
    $this.n4k_1 = email;
    $this.o4k_1 = password;
    return $this;
  }
  function LoginRequest_init_$Create$(seen1, email, password, serializationConstructorMarker) {
    return LoginRequest_init_$Init$(seen1, email, password, serializationConstructorMarker, Object.create(LoginRequest.prototype));
  }
  function LoginRequest(email, password) {
    Companion_getInstance_11();
    this.n4k_1 = email;
    this.o4k_1 = password;
  }
  LoginRequest.prototype.n4i = function () {
    return this.n4k_1;
  };
  LoginRequest.prototype.n27 = function () {
    return this.o4k_1;
  };
  LoginRequest.prototype.component1 = function () {
    return this.n4k_1;
  };
  LoginRequest.prototype.component2 = function () {
    return this.o4k_1;
  };
  LoginRequest.prototype.copy = function (email, password) {
    return this.p4k(email === void 1 ? this.n4k_1 : email, password === void 1 ? this.o4k_1 : password);
  };
  LoginRequest.prototype.p4k = function (email, password) {
    return new LoginRequest(email, password);
  };
  LoginRequest.prototype.w4i = function (email, password, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      email = this.n4k_1;
    if (!(($mask0 & 2) === 0))
      password = this.o4k_1;
    return this.p4k(email, password);
  };
  LoginRequest.prototype.toString = function () {
    return 'LoginRequest(email=' + this.n4k_1 + ', password=' + this.o4k_1 + ')';
  };
  LoginRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.n4k_1);
    result = imul(result, 31) + getStringHashCode(this.o4k_1) | 0;
    return result;
  };
  LoginRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginRequest))
      return false;
    var tmp0_other_with_cast = other instanceof LoginRequest ? other : THROW_CCE();
    if (!(this.n4k_1 === tmp0_other_with_cast.n4k_1))
      return false;
    if (!(this.o4k_1 === tmp0_other_with_cast.o4k_1))
      return false;
    return true;
  };
  LoginRequest.$metadata$ = classMeta('LoginRequest', undefined, undefined, {0: $serializer_getInstance_6});
  Object.defineProperty(LoginRequest.prototype, 'email', {
    configurable: true,
    get: LoginRequest.prototype.n4i
  });
  Object.defineProperty(LoginRequest.prototype, 'password', {
    configurable: true,
    get: LoginRequest.prototype.n27
  });
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.prototype.serializer = function () {
    return $serializer_getInstance_7();
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_12() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.MessageRequest', this, 5);
    tmp0_serialDesc.o3z('fname', false);
    tmp0_serialDesc.o3z('lname', false);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('phone', false);
    tmp0_serialDesc.o3z('message', false);
    this.q4k_1 = tmp0_serialDesc;
  }
  $serializer_7.prototype.v3p = function () {
    return this.q4k_1;
  };
  $serializer_7.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_7.prototype.x3p = function (decoder) {
    var tmp0_desc = this.q4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.s3s(tmp0_desc);
    if (tmp9_input.g3t()) {
      tmp4_local0 = tmp9_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.t3s(tmp0_desc);
    return MessageRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_7.prototype.r4k = function (encoder, value) {
    var tmp0_desc = this.q4k_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.s4k_1);
    tmp1_output.f3u(tmp0_desc, 1, value.t4k_1);
    tmp1_output.f3u(tmp0_desc, 2, value.u4k_1);
    tmp1_output.f3u(tmp0_desc, 3, value.v4k_1);
    tmp1_output.f3u(tmp0_desc, 4, value.w4k_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_7.prototype.w3p = function (encoder, value) {
    return this.r4k(encoder, value instanceof MessageRequest ? value : THROW_CCE());
  };
  $serializer_7.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function MessageRequest_init_$Init$(seen1, fname, lname, email, phone, message, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_7().q4k_1);
    }
    $this.s4k_1 = fname;
    $this.t4k_1 = lname;
    $this.u4k_1 = email;
    $this.v4k_1 = phone;
    $this.w4k_1 = message;
    return $this;
  }
  function MessageRequest_init_$Create$(seen1, fname, lname, email, phone, message, serializationConstructorMarker) {
    return MessageRequest_init_$Init$(seen1, fname, lname, email, phone, message, serializationConstructorMarker, Object.create(MessageRequest.prototype));
  }
  function MessageRequest(fname, lname, email, phone, message) {
    Companion_getInstance_12();
    this.s4k_1 = fname;
    this.t4k_1 = lname;
    this.u4k_1 = email;
    this.v4k_1 = phone;
    this.w4k_1 = message;
  }
  MessageRequest.prototype.x4k = function () {
    return this.s4k_1;
  };
  MessageRequest.prototype.y4k = function () {
    return this.t4k_1;
  };
  MessageRequest.prototype.n4i = function () {
    return this.u4k_1;
  };
  MessageRequest.prototype.z4k = function () {
    return this.v4k_1;
  };
  MessageRequest.prototype.j1 = function () {
    return this.w4k_1;
  };
  MessageRequest.prototype.component1 = function () {
    return this.s4k_1;
  };
  MessageRequest.prototype.component2 = function () {
    return this.t4k_1;
  };
  MessageRequest.prototype.component3 = function () {
    return this.u4k_1;
  };
  MessageRequest.prototype.component4 = function () {
    return this.v4k_1;
  };
  MessageRequest.prototype.component5 = function () {
    return this.w4k_1;
  };
  MessageRequest.prototype.copy = function (fname, lname, email, phone, message) {
    return this.a4l(fname === void 1 ? this.s4k_1 : fname, lname === void 1 ? this.t4k_1 : lname, email === void 1 ? this.u4k_1 : email, phone === void 1 ? this.v4k_1 : phone, message === void 1 ? this.w4k_1 : message);
  };
  MessageRequest.prototype.a4l = function (fname, lname, email, phone, message) {
    return new MessageRequest(fname, lname, email, phone, message);
  };
  MessageRequest.prototype.b4l = function (fname, lname, email, phone, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fname = this.s4k_1;
    if (!(($mask0 & 2) === 0))
      lname = this.t4k_1;
    if (!(($mask0 & 4) === 0))
      email = this.u4k_1;
    if (!(($mask0 & 8) === 0))
      phone = this.v4k_1;
    if (!(($mask0 & 16) === 0))
      message = this.w4k_1;
    return this.a4l(fname, lname, email, phone, message);
  };
  MessageRequest.prototype.toString = function () {
    return 'MessageRequest(fname=' + this.s4k_1 + ', lname=' + this.t4k_1 + ', email=' + this.u4k_1 + ', phone=' + this.v4k_1 + ', message=' + this.w4k_1 + ')';
  };
  MessageRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.s4k_1);
    result = imul(result, 31) + getStringHashCode(this.t4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v4k_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w4k_1) | 0;
    return result;
  };
  MessageRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MessageRequest))
      return false;
    var tmp0_other_with_cast = other instanceof MessageRequest ? other : THROW_CCE();
    if (!(this.s4k_1 === tmp0_other_with_cast.s4k_1))
      return false;
    if (!(this.t4k_1 === tmp0_other_with_cast.t4k_1))
      return false;
    if (!(this.u4k_1 === tmp0_other_with_cast.u4k_1))
      return false;
    if (!(this.v4k_1 === tmp0_other_with_cast.v4k_1))
      return false;
    if (!(this.w4k_1 === tmp0_other_with_cast.w4k_1))
      return false;
    return true;
  };
  MessageRequest.$metadata$ = classMeta('MessageRequest', undefined, undefined, {0: $serializer_getInstance_7});
  Object.defineProperty(MessageRequest.prototype, 'fname', {
    configurable: true,
    get: MessageRequest.prototype.x4k
  });
  Object.defineProperty(MessageRequest.prototype, 'lname', {
    configurable: true,
    get: MessageRequest.prototype.y4k
  });
  Object.defineProperty(MessageRequest.prototype, 'email', {
    configurable: true,
    get: MessageRequest.prototype.n4i
  });
  Object.defineProperty(MessageRequest.prototype, 'phone', {
    configurable: true,
    get: MessageRequest.prototype.z4k
  });
  Object.defineProperty(MessageRequest.prototype, 'message', {
    configurable: true,
    get: MessageRequest.prototype.j1
  });
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.prototype.serializer = function () {
    return $serializer_getInstance_8();
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_13() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.MessageStateRequest', this, 1);
    tmp0_serialDesc.o3z('isChecked', false);
    this.c4l_1 = tmp0_serialDesc;
  }
  $serializer_8.prototype.v3p = function () {
    return this.c4l_1;
  };
  $serializer_8.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_8.prototype.x3p = function (decoder) {
    var tmp0_desc = this.c4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return MessageStateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_8.prototype.d4l = function (encoder, value) {
    var tmp0_desc = this.c4l_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.x3t(tmp0_desc, 0, value.e4l_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_8.prototype.w3p = function (encoder, value) {
    return this.d4l(encoder, value instanceof MessageStateRequest ? value : THROW_CCE());
  };
  $serializer_8.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function MessageStateRequest_init_$Init$(seen1, isChecked, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_8().c4l_1);
    }
    $this.e4l_1 = isChecked;
    return $this;
  }
  function MessageStateRequest_init_$Create$(seen1, isChecked, serializationConstructorMarker) {
    return MessageStateRequest_init_$Init$(seen1, isChecked, serializationConstructorMarker, Object.create(MessageStateRequest.prototype));
  }
  function MessageStateRequest(isChecked) {
    Companion_getInstance_13();
    this.e4l_1 = isChecked;
  }
  MessageStateRequest.prototype.f4l = function () {
    return this.e4l_1;
  };
  MessageStateRequest.prototype.component1 = function () {
    return this.e4l_1;
  };
  MessageStateRequest.prototype.copy = function (isChecked) {
    return this.o4j(isChecked === void 1 ? this.e4l_1 : isChecked);
  };
  MessageStateRequest.prototype.o4j = function (isChecked) {
    return new MessageStateRequest(isChecked);
  };
  MessageStateRequest.prototype.p4j = function (isChecked, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      isChecked = this.e4l_1;
    return this.o4j(isChecked);
  };
  MessageStateRequest.prototype.toString = function () {
    return 'MessageStateRequest(isChecked=' + this.e4l_1 + ')';
  };
  MessageStateRequest.prototype.hashCode = function () {
    return this.e4l_1 | 0;
  };
  MessageStateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MessageStateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof MessageStateRequest ? other : THROW_CCE();
    if (!(this.e4l_1 === tmp0_other_with_cast.e4l_1))
      return false;
    return true;
  };
  MessageStateRequest.$metadata$ = classMeta('MessageStateRequest', undefined, undefined, {0: $serializer_getInstance_8});
  Object.defineProperty(MessageStateRequest.prototype, 'isChecked', {
    configurable: true,
    get: MessageStateRequest.prototype.f4l
  });
  function Companion_9() {
    Companion_instance_9 = this;
  }
  Companion_9.prototype.serializer = function () {
    return $serializer_getInstance_9();
  };
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_14() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.OrderNoteRequest', this, 1);
    tmp0_serialDesc.o3z('note', false);
    this.g4l_1 = tmp0_serialDesc;
  }
  $serializer_9.prototype.v3p = function () {
    return this.g4l_1;
  };
  $serializer_9.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_9.prototype.x3p = function (decoder) {
    var tmp0_desc = this.g4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return OrderNoteRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_9.prototype.h4l = function (encoder, value) {
    var tmp0_desc = this.g4l_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.i4l_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_9.prototype.w3p = function (encoder, value) {
    return this.h4l(encoder, value instanceof OrderNoteRequest ? value : THROW_CCE());
  };
  $serializer_9.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function OrderNoteRequest_init_$Init$(seen1, note, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_9().g4l_1);
    }
    $this.i4l_1 = note;
    return $this;
  }
  function OrderNoteRequest_init_$Create$(seen1, note, serializationConstructorMarker) {
    return OrderNoteRequest_init_$Init$(seen1, note, serializationConstructorMarker, Object.create(OrderNoteRequest.prototype));
  }
  function OrderNoteRequest(note) {
    Companion_getInstance_14();
    this.i4l_1 = note;
  }
  OrderNoteRequest.prototype.j4l = function () {
    return this.i4l_1;
  };
  OrderNoteRequest.prototype.component1 = function () {
    return this.i4l_1;
  };
  OrderNoteRequest.prototype.copy = function (note) {
    return this.k4l(note === void 1 ? this.i4l_1 : note);
  };
  OrderNoteRequest.prototype.k4l = function (note) {
    return new OrderNoteRequest(note);
  };
  OrderNoteRequest.prototype.l4l = function (note, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      note = this.i4l_1;
    return this.k4l(note);
  };
  OrderNoteRequest.prototype.toString = function () {
    return 'OrderNoteRequest(note=' + this.i4l_1 + ')';
  };
  OrderNoteRequest.prototype.hashCode = function () {
    return getStringHashCode(this.i4l_1);
  };
  OrderNoteRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderNoteRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderNoteRequest ? other : THROW_CCE();
    if (!(this.i4l_1 === tmp0_other_with_cast.i4l_1))
      return false;
    return true;
  };
  OrderNoteRequest.$metadata$ = classMeta('OrderNoteRequest', undefined, undefined, {0: $serializer_getInstance_9});
  Object.defineProperty(OrderNoteRequest.prototype, 'note', {
    configurable: true,
    get: OrderNoteRequest.prototype.j4l
  });
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.serializer = function () {
    return $serializer_getInstance_10();
  };
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_15() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.OrderCustomerRequest', this, 3);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('phone', false);
    tmp0_serialDesc.o3z('address', false);
    this.m4l_1 = tmp0_serialDesc;
  }
  $serializer_10.prototype.v3p = function () {
    return this.m4l_1;
  };
  $serializer_10.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_10.prototype.x3p = function (decoder) {
    var tmp0_desc = this.m4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return OrderCustomerRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_10.prototype.n4l = function (encoder, value) {
    var tmp0_desc = this.m4l_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.o4l_1);
    tmp1_output.f3u(tmp0_desc, 1, value.p4l_1);
    tmp1_output.f3u(tmp0_desc, 2, value.q4l_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_10.prototype.w3p = function (encoder, value) {
    return this.n4l(encoder, value instanceof OrderCustomerRequest ? value : THROW_CCE());
  };
  $serializer_10.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function OrderCustomerRequest_init_$Init$(seen1, email, phone, address, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_10().m4l_1);
    }
    $this.o4l_1 = email;
    $this.p4l_1 = phone;
    $this.q4l_1 = address;
    return $this;
  }
  function OrderCustomerRequest_init_$Create$(seen1, email, phone, address, serializationConstructorMarker) {
    return OrderCustomerRequest_init_$Init$(seen1, email, phone, address, serializationConstructorMarker, Object.create(OrderCustomerRequest.prototype));
  }
  function OrderCustomerRequest(email, phone, address) {
    Companion_getInstance_15();
    this.o4l_1 = email;
    this.p4l_1 = phone;
    this.q4l_1 = address;
  }
  OrderCustomerRequest.prototype.n4i = function () {
    return this.o4l_1;
  };
  OrderCustomerRequest.prototype.z4k = function () {
    return this.p4l_1;
  };
  OrderCustomerRequest.prototype.r4l = function () {
    return this.q4l_1;
  };
  OrderCustomerRequest.prototype.component1 = function () {
    return this.o4l_1;
  };
  OrderCustomerRequest.prototype.component2 = function () {
    return this.p4l_1;
  };
  OrderCustomerRequest.prototype.component3 = function () {
    return this.q4l_1;
  };
  OrderCustomerRequest.prototype.copy = function (email, phone, address) {
    return this.p4i(email === void 1 ? this.o4l_1 : email, phone === void 1 ? this.p4l_1 : phone, address === void 1 ? this.q4l_1 : address);
  };
  OrderCustomerRequest.prototype.p4i = function (email, phone, address) {
    return new OrderCustomerRequest(email, phone, address);
  };
  OrderCustomerRequest.prototype.q4i = function (email, phone, address, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      email = this.o4l_1;
    if (!(($mask0 & 2) === 0))
      phone = this.p4l_1;
    if (!(($mask0 & 4) === 0))
      address = this.q4l_1;
    return this.p4i(email, phone, address);
  };
  OrderCustomerRequest.prototype.toString = function () {
    return 'OrderCustomerRequest(email=' + this.o4l_1 + ', phone=' + this.p4l_1 + ', address=' + this.q4l_1 + ')';
  };
  OrderCustomerRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.o4l_1);
    result = imul(result, 31) + getStringHashCode(this.p4l_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.q4l_1) | 0;
    return result;
  };
  OrderCustomerRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderCustomerRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderCustomerRequest ? other : THROW_CCE();
    if (!(this.o4l_1 === tmp0_other_with_cast.o4l_1))
      return false;
    if (!(this.p4l_1 === tmp0_other_with_cast.p4l_1))
      return false;
    if (!(this.q4l_1 === tmp0_other_with_cast.q4l_1))
      return false;
    return true;
  };
  OrderCustomerRequest.$metadata$ = classMeta('OrderCustomerRequest', undefined, undefined, {0: $serializer_getInstance_10});
  Object.defineProperty(OrderCustomerRequest.prototype, 'email', {
    configurable: true,
    get: OrderCustomerRequest.prototype.n4i
  });
  Object.defineProperty(OrderCustomerRequest.prototype, 'phone', {
    configurable: true,
    get: OrderCustomerRequest.prototype.z4k
  });
  Object.defineProperty(OrderCustomerRequest.prototype, 'address', {
    configurable: true,
    get: OrderCustomerRequest.prototype.r4l
  });
  function Companion_11() {
    Companion_instance_11 = this;
  }
  Companion_11.prototype.serializer = function () {
    return $serializer_getInstance_11();
  };
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_16() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.OrderStateRequest', this, 1);
    tmp0_serialDesc.o3z('state', false);
    this.s4l_1 = tmp0_serialDesc;
  }
  $serializer_11.prototype.v3p = function () {
    return this.s4l_1;
  };
  $serializer_11.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_11.prototype.x3p = function (decoder) {
    var tmp0_desc = this.s4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.d3t(tmp0_desc, 0, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.d3t(tmp0_desc, 0, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return OrderStateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_11.prototype.t4l = function (encoder, value) {
    var tmp0_desc = this.s4l_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.g3u(tmp0_desc, 0, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), value.u4l_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_11.prototype.w3p = function (encoder, value) {
    return this.t4l(encoder, value instanceof OrderStateRequest ? value : THROW_CCE());
  };
  $serializer_11.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function OrderStateRequest_init_$Init$(seen1, state, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_11().s4l_1);
    }
    $this.u4l_1 = state;
    return $this;
  }
  function OrderStateRequest_init_$Create$(seen1, state, serializationConstructorMarker) {
    return OrderStateRequest_init_$Init$(seen1, state, serializationConstructorMarker, Object.create(OrderStateRequest.prototype));
  }
  function OrderStateRequest(state) {
    Companion_getInstance_16();
    this.u4l_1 = state;
  }
  OrderStateRequest.prototype.dk = function () {
    return this.u4l_1;
  };
  OrderStateRequest.prototype.component1 = function () {
    return this.u4l_1;
  };
  OrderStateRequest.prototype.copy = function (state) {
    return this.v4l(state === void 1 ? this.u4l_1 : state);
  };
  OrderStateRequest.prototype.v4l = function (state) {
    return new OrderStateRequest(state);
  };
  OrderStateRequest.prototype.w4l = function (state, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      state = this.u4l_1;
    return this.v4l(state);
  };
  OrderStateRequest.prototype.toString = function () {
    return 'OrderStateRequest(state=' + this.u4l_1 + ')';
  };
  OrderStateRequest.prototype.hashCode = function () {
    return this.u4l_1.hashCode();
  };
  OrderStateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderStateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderStateRequest ? other : THROW_CCE();
    if (!this.u4l_1.equals(tmp0_other_with_cast.u4l_1))
      return false;
    return true;
  };
  OrderStateRequest.$metadata$ = classMeta('OrderStateRequest', undefined, undefined, {0: $serializer_getInstance_11});
  Object.defineProperty(OrderStateRequest.prototype, 'state', {
    configurable: true,
    get: OrderStateRequest.prototype.dk
  });
  function Companion_12() {
    Companion_instance_12 = this;
  }
  Companion_12.prototype.serializer = function () {
    return $serializer_getInstance_12();
  };
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_17() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.OrderCreateRequest', this, 4);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('phone', false);
    tmp0_serialDesc.o3z('address', false);
    tmp0_serialDesc.o3z('products', false);
    this.x4l_1 = tmp0_serialDesc;
  }
  $serializer_12.prototype.v3p = function () {
    return this.x4l_1;
  };
  $serializer_12.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), new ReferenceArraySerializer(getKClass(OrderProductRequest), $serializer_getInstance_13())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_12.prototype.x3p = function (decoder) {
    var tmp0_desc = this.x4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.s3s(tmp0_desc);
    if (tmp8_input.g3t()) {
      tmp4_local0 = tmp8_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.d3t(tmp0_desc, 3, new ReferenceArraySerializer(getKClass(OrderProductRequest), $serializer_getInstance_13()), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.d3t(tmp0_desc, 3, new ReferenceArraySerializer(getKClass(OrderProductRequest), $serializer_getInstance_13()), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.t3s(tmp0_desc);
    return OrderCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer_12.prototype.y4l = function (encoder, value) {
    var tmp0_desc = this.x4l_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.z4l_1);
    tmp1_output.f3u(tmp0_desc, 1, value.a4m_1);
    tmp1_output.f3u(tmp0_desc, 2, value.b4m_1);
    tmp1_output.g3u(tmp0_desc, 3, new ReferenceArraySerializer(getKClass(OrderProductRequest), $serializer_getInstance_13()), value.c4m_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_12.prototype.w3p = function (encoder, value) {
    return this.y4l(encoder, value instanceof OrderCreateRequest ? value : THROW_CCE());
  };
  $serializer_12.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function OrderCreateRequest_init_$Init$(seen1, email, phone, address, products, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_12().x4l_1);
    }
    $this.z4l_1 = email;
    $this.a4m_1 = phone;
    $this.b4m_1 = address;
    $this.c4m_1 = products;
    return $this;
  }
  function OrderCreateRequest_init_$Create$(seen1, email, phone, address, products, serializationConstructorMarker) {
    return OrderCreateRequest_init_$Init$(seen1, email, phone, address, products, serializationConstructorMarker, Object.create(OrderCreateRequest.prototype));
  }
  function OrderCreateRequest(email, phone, address, products) {
    Companion_getInstance_17();
    this.z4l_1 = email;
    this.a4m_1 = phone;
    this.b4m_1 = address;
    this.c4m_1 = products;
  }
  OrderCreateRequest.prototype.n4i = function () {
    return this.z4l_1;
  };
  OrderCreateRequest.prototype.z4k = function () {
    return this.a4m_1;
  };
  OrderCreateRequest.prototype.r4l = function () {
    return this.b4m_1;
  };
  OrderCreateRequest.prototype.d4m = function () {
    return this.c4m_1;
  };
  OrderCreateRequest.prototype.component1 = function () {
    return this.z4l_1;
  };
  OrderCreateRequest.prototype.component2 = function () {
    return this.a4m_1;
  };
  OrderCreateRequest.prototype.component3 = function () {
    return this.b4m_1;
  };
  OrderCreateRequest.prototype.component4 = function () {
    return this.c4m_1;
  };
  OrderCreateRequest.prototype.copy = function (email, phone, address, products) {
    return this.e4m(email === void 1 ? this.z4l_1 : email, phone === void 1 ? this.a4m_1 : phone, address === void 1 ? this.b4m_1 : address, products === void 1 ? this.c4m_1 : products);
  };
  OrderCreateRequest.prototype.e4m = function (email, phone, address, products) {
    return new OrderCreateRequest(email, phone, address, products);
  };
  OrderCreateRequest.prototype.f4m = function (email, phone, address, products, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      email = this.z4l_1;
    if (!(($mask0 & 2) === 0))
      phone = this.a4m_1;
    if (!(($mask0 & 4) === 0))
      address = this.b4m_1;
    if (!(($mask0 & 8) === 0))
      products = this.c4m_1;
    return this.e4m(email, phone, address, products);
  };
  OrderCreateRequest.prototype.toString = function () {
    return 'OrderCreateRequest(email=' + this.z4l_1 + ', phone=' + this.a4m_1 + ', address=' + this.b4m_1 + ', products=' + toString(this.c4m_1) + ')';
  };
  OrderCreateRequest.prototype.hashCode = function () {
    var result = getStringHashCode(this.z4l_1);
    result = imul(result, 31) + getStringHashCode(this.a4m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b4m_1) | 0;
    result = imul(result, 31) + hashCode(this.c4m_1) | 0;
    return result;
  };
  OrderCreateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderCreateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderCreateRequest ? other : THROW_CCE();
    if (!(this.z4l_1 === tmp0_other_with_cast.z4l_1))
      return false;
    if (!(this.a4m_1 === tmp0_other_with_cast.a4m_1))
      return false;
    if (!(this.b4m_1 === tmp0_other_with_cast.b4m_1))
      return false;
    if (!equals(this.c4m_1, tmp0_other_with_cast.c4m_1))
      return false;
    return true;
  };
  OrderCreateRequest.$metadata$ = classMeta('OrderCreateRequest', undefined, undefined, {0: $serializer_getInstance_12});
  Object.defineProperty(OrderCreateRequest.prototype, 'email', {
    configurable: true,
    get: OrderCreateRequest.prototype.n4i
  });
  Object.defineProperty(OrderCreateRequest.prototype, 'phone', {
    configurable: true,
    get: OrderCreateRequest.prototype.z4k
  });
  Object.defineProperty(OrderCreateRequest.prototype, 'address', {
    configurable: true,
    get: OrderCreateRequest.prototype.r4l
  });
  Object.defineProperty(OrderCreateRequest.prototype, 'products', {
    configurable: true,
    get: OrderCreateRequest.prototype.d4m
  });
  function Companion_13() {
    Companion_instance_13 = this;
  }
  Companion_13.prototype.serializer = function () {
    return $serializer_getInstance_13();
  };
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_18() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.OrderProductRequest', this, 3);
    tmp0_serialDesc.o3z('productID', false);
    tmp0_serialDesc.o3z('count', false);
    tmp0_serialDesc.o3z('price', false);
    this.g4m_1 = tmp0_serialDesc;
  }
  $serializer_13.prototype.v3p = function () {
    return this.g4m_1;
  };
  $serializer_13.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), IntSerializer_getInstance(), DoubleSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_13.prototype.x3p = function (decoder) {
    var tmp0_desc = this.g4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0.0;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.x3s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.a3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.x3s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.a3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return OrderProductRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_13.prototype.h4m = function (encoder, value) {
    var tmp0_desc = this.g4m_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.i4m_1);
    tmp1_output.a3u(tmp0_desc, 1, value.j4m_1);
    tmp1_output.d3u(tmp0_desc, 2, value.k4m_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_13.prototype.w3p = function (encoder, value) {
    return this.h4m(encoder, value instanceof OrderProductRequest ? value : THROW_CCE());
  };
  $serializer_13.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function OrderProductRequest_init_$Init$(seen1, productID, count, price, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_13().g4m_1);
    }
    $this.i4m_1 = productID;
    $this.j4m_1 = count;
    $this.k4m_1 = price;
    return $this;
  }
  function OrderProductRequest_init_$Create$(seen1, productID, count, price, serializationConstructorMarker) {
    return OrderProductRequest_init_$Init$(seen1, productID, count, price, serializationConstructorMarker, Object.create(OrderProductRequest.prototype));
  }
  function OrderProductRequest(productID, count, price) {
    Companion_getInstance_18();
    this.i4m_1 = productID;
    this.j4m_1 = count;
    this.k4m_1 = price;
  }
  OrderProductRequest.prototype.l4m = function () {
    return this.i4m_1;
  };
  OrderProductRequest.prototype.m4m = function () {
    return this.j4m_1;
  };
  OrderProductRequest.prototype.n4m = function () {
    return this.k4m_1;
  };
  OrderProductRequest.prototype.component1 = function () {
    return this.i4m_1;
  };
  OrderProductRequest.prototype.component2 = function () {
    return this.j4m_1;
  };
  OrderProductRequest.prototype.component3 = function () {
    return this.k4m_1;
  };
  OrderProductRequest.prototype.copy = function (productID, count, price) {
    return this.o4m(productID === void 1 ? this.i4m_1 : productID, count === void 1 ? this.j4m_1 : count, price === void 1 ? this.k4m_1 : price);
  };
  OrderProductRequest.prototype.o4m = function (productID, count, price) {
    return new OrderProductRequest(productID, count, price);
  };
  OrderProductRequest.prototype.p4m = function (productID, count, price, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      productID = this.i4m_1;
    if (!(($mask0 & 2) === 0))
      count = this.j4m_1;
    if (!(($mask0 & 4) === 0))
      price = this.k4m_1;
    return this.o4m(productID, count, price);
  };
  OrderProductRequest.prototype.toString = function () {
    return 'OrderProductRequest(productID=' + this.i4m_1 + ', count=' + this.j4m_1 + ', price=' + this.k4m_1 + ')';
  };
  OrderProductRequest.prototype.hashCode = function () {
    var result = this.i4m_1;
    result = imul(result, 31) + this.j4m_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4m_1) | 0;
    return result;
  };
  OrderProductRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderProductRequest))
      return false;
    var tmp0_other_with_cast = other instanceof OrderProductRequest ? other : THROW_CCE();
    if (!(this.i4m_1 === tmp0_other_with_cast.i4m_1))
      return false;
    if (!(this.j4m_1 === tmp0_other_with_cast.j4m_1))
      return false;
    if (!equals(this.k4m_1, tmp0_other_with_cast.k4m_1))
      return false;
    return true;
  };
  OrderProductRequest.$metadata$ = classMeta('OrderProductRequest', undefined, undefined, {0: $serializer_getInstance_13});
  Object.defineProperty(OrderProductRequest.prototype, 'productID', {
    configurable: true,
    get: OrderProductRequest.prototype.l4m
  });
  Object.defineProperty(OrderProductRequest.prototype, 'count', {
    configurable: true,
    get: OrderProductRequest.prototype.m4m
  });
  Object.defineProperty(OrderProductRequest.prototype, 'price', {
    configurable: true,
    get: OrderProductRequest.prototype.n4m
  });
  var OrderProduct_NEWEST_instance;
  var OrderProduct_LOW_instance;
  var OrderProduct_HEIGHT_instance;
  function values() {
    return [OrderProduct_NEWEST_getInstance(), OrderProduct_LOW_getInstance(), OrderProduct_HEIGHT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NEWEST':
        return OrderProduct_NEWEST_getInstance();
      case 'LOW':
        return OrderProduct_LOW_getInstance();
      case 'HEIGHT':
        return OrderProduct_HEIGHT_getInstance();
      default:
        OrderProduct_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OrderProduct_entriesInitialized;
  function OrderProduct_initEntries() {
    if (OrderProduct_entriesInitialized)
      return Unit_getInstance();
    OrderProduct_entriesInitialized = true;
    OrderProduct_NEWEST_instance = new OrderProduct('NEWEST', 0);
    OrderProduct_LOW_instance = new OrderProduct('LOW', 1);
    OrderProduct_HEIGHT_instance = new OrderProduct('HEIGHT', 2);
  }
  function OrderProduct(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  OrderProduct.$metadata$ = classMeta('OrderProduct', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(OrderProduct.prototype, 'name', {
    configurable: true,
    get: OrderProduct.prototype.n4
  });
  Object.defineProperty(OrderProduct.prototype, 'ordinal', {
    configurable: true,
    get: OrderProduct.prototype.kg
  });
  function Companion_14() {
    Companion_instance_14 = this;
  }
  Companion_14.prototype.serializer = function () {
    return $serializer_getInstance_14();
  };
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_19() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.ProductRequest', this, 10);
    tmp0_serialDesc.o3z('categoryID', false);
    tmp0_serialDesc.o3z('image1', false);
    tmp0_serialDesc.o3z('image2', false);
    tmp0_serialDesc.o3z('image3', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('description', false);
    tmp0_serialDesc.o3z('price', false);
    tmp0_serialDesc.o3z('isPublished', false);
    tmp0_serialDesc.o3z('collections', false);
    tmp0_serialDesc.o3z('uploads', false);
    this.s4m_1 = tmp0_serialDesc;
  }
  $serializer_14.prototype.v3p = function () {
    return this.s4m_1;
  };
  $serializer_14.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), BooleanSerializer_getInstance(), new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_14.prototype.x3p = function (decoder) {
    var tmp0_desc = this.s4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = 0.0;
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.s3s(tmp0_desc);
    if (tmp14_input.g3t()) {
      tmp4_local0 = tmp14_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.c3t(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.a3t(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.u3s(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.d3t(tmp0_desc, 8, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.d3t(tmp0_desc, 9, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.c3t(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.a3t(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.u3s(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.d3t(tmp0_desc, 8, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.d3t(tmp0_desc, 9, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.t3s(tmp0_desc);
    return ProductRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  $serializer_14.prototype.t4m = function (encoder, value) {
    var tmp0_desc = this.s4m_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.u4m_1);
    tmp1_output.f3u(tmp0_desc, 1, value.v4m_1);
    tmp1_output.f3u(tmp0_desc, 2, value.w4m_1);
    tmp1_output.f3u(tmp0_desc, 3, value.x4m_1);
    tmp1_output.f3u(tmp0_desc, 4, value.y4m_1);
    tmp1_output.f3u(tmp0_desc, 5, value.z4m_1);
    tmp1_output.d3u(tmp0_desc, 6, value.a4n_1);
    tmp1_output.x3t(tmp0_desc, 7, value.b4n_1);
    tmp1_output.g3u(tmp0_desc, 8, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), value.c4n_1);
    tmp1_output.g3u(tmp0_desc, 9, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), value.d4n_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_14.prototype.w3p = function (encoder, value) {
    return this.t4m(encoder, value instanceof ProductRequest ? value : THROW_CCE());
  };
  $serializer_14.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function ProductRequest_init_$Init$(seen1, categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads, serializationConstructorMarker, $this) {
    if (!(1023 === (1023 & seen1))) {
      throwMissingFieldException(seen1, 1023, $serializer_getInstance_14().s4m_1);
    }
    $this.u4m_1 = categoryID;
    $this.v4m_1 = image1;
    $this.w4m_1 = image2;
    $this.x4m_1 = image3;
    $this.y4m_1 = name;
    $this.z4m_1 = description;
    $this.a4n_1 = price;
    $this.b4n_1 = isPublished;
    $this.c4n_1 = collections;
    $this.d4n_1 = uploads;
    return $this;
  }
  function ProductRequest_init_$Create$(seen1, categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads, serializationConstructorMarker) {
    return ProductRequest_init_$Init$(seen1, categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads, serializationConstructorMarker, Object.create(ProductRequest.prototype));
  }
  function ProductRequest(categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads) {
    Companion_getInstance_19();
    this.u4m_1 = categoryID;
    this.v4m_1 = image1;
    this.w4m_1 = image2;
    this.x4m_1 = image3;
    this.y4m_1 = name;
    this.z4m_1 = description;
    this.a4n_1 = price;
    this.b4n_1 = isPublished;
    this.c4n_1 = collections;
    this.d4n_1 = uploads;
  }
  ProductRequest.prototype.e4n = function () {
    return this.u4m_1;
  };
  ProductRequest.prototype.f4n = function () {
    return this.v4m_1;
  };
  ProductRequest.prototype.g4n = function () {
    return this.w4m_1;
  };
  ProductRequest.prototype.h4n = function () {
    return this.x4m_1;
  };
  ProductRequest.prototype.n4 = function () {
    return this.y4m_1;
  };
  ProductRequest.prototype.i4n = function () {
    return this.z4m_1;
  };
  ProductRequest.prototype.n4m = function () {
    return this.a4n_1;
  };
  ProductRequest.prototype.h4j = function () {
    return this.b4n_1;
  };
  ProductRequest.prototype.j4n = function () {
    return this.c4n_1;
  };
  ProductRequest.prototype.i4j = function () {
    return this.d4n_1;
  };
  ProductRequest.prototype.component1 = function () {
    return this.u4m_1;
  };
  ProductRequest.prototype.component2 = function () {
    return this.v4m_1;
  };
  ProductRequest.prototype.component3 = function () {
    return this.w4m_1;
  };
  ProductRequest.prototype.component4 = function () {
    return this.x4m_1;
  };
  ProductRequest.prototype.component5 = function () {
    return this.y4m_1;
  };
  ProductRequest.prototype.component6 = function () {
    return this.z4m_1;
  };
  ProductRequest.prototype.component7 = function () {
    return this.a4n_1;
  };
  ProductRequest.prototype.component8 = function () {
    return this.b4n_1;
  };
  ProductRequest.prototype.component9 = function () {
    return this.c4n_1;
  };
  ProductRequest.prototype.component10 = function () {
    return this.d4n_1;
  };
  ProductRequest.prototype.copy = function (categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads) {
    return this.k4n(categoryID === void 1 ? this.u4m_1 : categoryID, image1 === void 1 ? this.v4m_1 : image1, image2 === void 1 ? this.w4m_1 : image2, image3 === void 1 ? this.x4m_1 : image3, name === void 1 ? this.y4m_1 : name, description === void 1 ? this.z4m_1 : description, price === void 1 ? this.a4n_1 : price, isPublished === void 1 ? this.b4n_1 : isPublished, collections === void 1 ? this.c4n_1 : collections, uploads === void 1 ? this.d4n_1 : uploads);
  };
  ProductRequest.prototype.k4n = function (categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads) {
    return new ProductRequest(categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads);
  };
  ProductRequest.prototype.l4n = function (categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      categoryID = this.u4m_1;
    if (!(($mask0 & 2) === 0))
      image1 = this.v4m_1;
    if (!(($mask0 & 4) === 0))
      image2 = this.w4m_1;
    if (!(($mask0 & 8) === 0))
      image3 = this.x4m_1;
    if (!(($mask0 & 16) === 0))
      name = this.y4m_1;
    if (!(($mask0 & 32) === 0))
      description = this.z4m_1;
    if (!(($mask0 & 64) === 0))
      price = this.a4n_1;
    if (!(($mask0 & 128) === 0))
      isPublished = this.b4n_1;
    if (!(($mask0 & 256) === 0))
      collections = this.c4n_1;
    if (!(($mask0 & 512) === 0))
      uploads = this.d4n_1;
    return this.k4n(categoryID, image1, image2, image3, name, description, price, isPublished, collections, uploads);
  };
  ProductRequest.prototype.toString = function () {
    return 'ProductRequest(categoryID=' + this.u4m_1 + ', image1=' + this.v4m_1 + ', image2=' + this.w4m_1 + ', image3=' + this.x4m_1 + ', name=' + this.y4m_1 + ', description=' + this.z4m_1 + ', price=' + this.a4n_1 + ', isPublished=' + this.b4n_1 + ', collections=' + toString(this.c4n_1) + ', uploads=' + toString(this.d4n_1) + ')';
  };
  ProductRequest.prototype.hashCode = function () {
    var result = this.u4m_1;
    result = imul(result, 31) + getStringHashCode(this.v4m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w4m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.x4m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y4m_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z4m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a4n_1) | 0;
    result = imul(result, 31) + (this.b4n_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.c4n_1) | 0;
    result = imul(result, 31) + hashCode(this.d4n_1) | 0;
    return result;
  };
  ProductRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductRequest))
      return false;
    var tmp0_other_with_cast = other instanceof ProductRequest ? other : THROW_CCE();
    if (!(this.u4m_1 === tmp0_other_with_cast.u4m_1))
      return false;
    if (!(this.v4m_1 === tmp0_other_with_cast.v4m_1))
      return false;
    if (!(this.w4m_1 === tmp0_other_with_cast.w4m_1))
      return false;
    if (!(this.x4m_1 === tmp0_other_with_cast.x4m_1))
      return false;
    if (!(this.y4m_1 === tmp0_other_with_cast.y4m_1))
      return false;
    if (!(this.z4m_1 === tmp0_other_with_cast.z4m_1))
      return false;
    if (!equals(this.a4n_1, tmp0_other_with_cast.a4n_1))
      return false;
    if (!(this.b4n_1 === tmp0_other_with_cast.b4n_1))
      return false;
    if (!equals(this.c4n_1, tmp0_other_with_cast.c4n_1))
      return false;
    if (!equals(this.d4n_1, tmp0_other_with_cast.d4n_1))
      return false;
    return true;
  };
  ProductRequest.$metadata$ = classMeta('ProductRequest', undefined, undefined, {0: $serializer_getInstance_14});
  Object.defineProperty(ProductRequest.prototype, 'categoryID', {
    configurable: true,
    get: ProductRequest.prototype.e4n
  });
  Object.defineProperty(ProductRequest.prototype, 'image1', {
    configurable: true,
    get: ProductRequest.prototype.f4n
  });
  Object.defineProperty(ProductRequest.prototype, 'image2', {
    configurable: true,
    get: ProductRequest.prototype.g4n
  });
  Object.defineProperty(ProductRequest.prototype, 'image3', {
    configurable: true,
    get: ProductRequest.prototype.h4n
  });
  Object.defineProperty(ProductRequest.prototype, 'name', {
    configurable: true,
    get: ProductRequest.prototype.n4
  });
  Object.defineProperty(ProductRequest.prototype, 'description', {
    configurable: true,
    get: ProductRequest.prototype.i4n
  });
  Object.defineProperty(ProductRequest.prototype, 'price', {
    configurable: true,
    get: ProductRequest.prototype.n4m
  });
  Object.defineProperty(ProductRequest.prototype, 'isPublished', {
    configurable: true,
    get: ProductRequest.prototype.h4j
  });
  Object.defineProperty(ProductRequest.prototype, 'collections', {
    configurable: true,
    get: ProductRequest.prototype.j4n
  });
  Object.defineProperty(ProductRequest.prototype, 'uploads', {
    configurable: true,
    get: ProductRequest.prototype.i4j
  });
  function Companion_15() {
    Companion_instance_15 = this;
  }
  Companion_15.prototype.serializer = function () {
    return $serializer_getInstance_15();
  };
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_20() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.requests.ProductStateRequest', this, 1);
    tmp0_serialDesc.o3z('isPublished', false);
    this.m4n_1 = tmp0_serialDesc;
  }
  $serializer_15.prototype.v3p = function () {
    return this.m4n_1;
  };
  $serializer_15.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_15.prototype.x3p = function (decoder) {
    var tmp0_desc = this.m4n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.u3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return ProductStateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_15.prototype.n4n = function (encoder, value) {
    var tmp0_desc = this.m4n_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.x3t(tmp0_desc, 0, value.o4n_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_15.prototype.w3p = function (encoder, value) {
    return this.n4n(encoder, value instanceof ProductStateRequest ? value : THROW_CCE());
  };
  $serializer_15.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function ProductStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_15().m4n_1);
    }
    $this.o4n_1 = isPublished;
    return $this;
  }
  function ProductStateRequest_init_$Create$(seen1, isPublished, serializationConstructorMarker) {
    return ProductStateRequest_init_$Init$(seen1, isPublished, serializationConstructorMarker, Object.create(ProductStateRequest.prototype));
  }
  function ProductStateRequest(isPublished) {
    Companion_getInstance_20();
    this.o4n_1 = isPublished;
  }
  ProductStateRequest.prototype.h4j = function () {
    return this.o4n_1;
  };
  ProductStateRequest.prototype.component1 = function () {
    return this.o4n_1;
  };
  ProductStateRequest.prototype.copy = function (isPublished) {
    return this.o4j(isPublished === void 1 ? this.o4n_1 : isPublished);
  };
  ProductStateRequest.prototype.o4j = function (isPublished) {
    return new ProductStateRequest(isPublished);
  };
  ProductStateRequest.prototype.p4j = function (isPublished, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      isPublished = this.o4n_1;
    return this.o4j(isPublished);
  };
  ProductStateRequest.prototype.toString = function () {
    return 'ProductStateRequest(isPublished=' + this.o4n_1 + ')';
  };
  ProductStateRequest.prototype.hashCode = function () {
    return this.o4n_1 | 0;
  };
  ProductStateRequest.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductStateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof ProductStateRequest ? other : THROW_CCE();
    if (!(this.o4n_1 === tmp0_other_with_cast.o4n_1))
      return false;
    return true;
  };
  ProductStateRequest.$metadata$ = classMeta('ProductStateRequest', undefined, undefined, {0: $serializer_getInstance_15});
  Object.defineProperty(ProductStateRequest.prototype, 'isPublished', {
    configurable: true,
    get: ProductStateRequest.prototype.h4j
  });
  function OrderProduct_NEWEST_getInstance() {
    OrderProduct_initEntries();
    return OrderProduct_NEWEST_instance;
  }
  function OrderProduct_LOW_getInstance() {
    OrderProduct_initEntries();
    return OrderProduct_LOW_instance;
  }
  function OrderProduct_HEIGHT_getInstance() {
    OrderProduct_initEntries();
    return OrderProduct_HEIGHT_instance;
  }
  var AdminRole_GUEST_instance;
  var AdminRole_MANAGER_instance;
  var AdminRole_ADMIN_instance;
  function values_0() {
    return [AdminRole_GUEST_getInstance(), AdminRole_MANAGER_getInstance(), AdminRole_ADMIN_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'GUEST':
        return AdminRole_GUEST_getInstance();
      case 'MANAGER':
        return AdminRole_MANAGER_getInstance();
      case 'ADMIN':
        return AdminRole_ADMIN_getInstance();
      default:
        AdminRole_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AdminRole_entriesInitialized;
  function AdminRole_initEntries() {
    if (AdminRole_entriesInitialized)
      return Unit_getInstance();
    AdminRole_entriesInitialized = true;
    AdminRole_GUEST_instance = new AdminRole('GUEST', 0);
    AdminRole_MANAGER_instance = new AdminRole('MANAGER', 1);
    AdminRole_ADMIN_instance = new AdminRole('ADMIN', 2);
  }
  function AdminRole(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AdminRole.$metadata$ = classMeta('AdminRole', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(AdminRole.prototype, 'name', {
    configurable: true,
    get: AdminRole.prototype.n4
  });
  Object.defineProperty(AdminRole.prototype, 'ordinal', {
    configurable: true,
    get: AdminRole.prototype.kg
  });
  function Companion_16() {
    Companion_instance_16 = this;
  }
  Companion_16.prototype.serializer = function () {
    return $serializer_getInstance_16();
  };
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_21() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.AdminResponse', this, 3);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('role', false);
    this.r4n_1 = tmp0_serialDesc;
  }
  $serializer_16.prototype.v3p = function () {
    return this.r4n_1;
  };
  $serializer_16.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), new EnumSerializer('com.keygenqt.shop.data.responses.AdminRole', values_0())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_16.prototype.x3p = function (decoder) {
    var tmp0_desc = this.r4n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.d3t(tmp0_desc, 2, new EnumSerializer('com.keygenqt.shop.data.responses.AdminRole', values_0()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.d3t(tmp0_desc, 2, new EnumSerializer('com.keygenqt.shop.data.responses.AdminRole', values_0()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return AdminResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_16.prototype.s4n = function (encoder, value) {
    var tmp0_desc = this.r4n_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.t4n_1);
    tmp1_output.f3u(tmp0_desc, 1, value.u4n_1);
    tmp1_output.g3u(tmp0_desc, 2, new EnumSerializer('com.keygenqt.shop.data.responses.AdminRole', values_0()), value.v4n_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_16.prototype.w3p = function (encoder, value) {
    return this.s4n(encoder, value instanceof AdminResponse ? value : THROW_CCE());
  };
  $serializer_16.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function AdminResponse_init_$Init$(seen1, id, email, role, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_16().r4n_1);
    }
    $this.t4n_1 = id;
    $this.u4n_1 = email;
    $this.v4n_1 = role;
    return $this;
  }
  function AdminResponse_init_$Create$(seen1, id, email, role, serializationConstructorMarker) {
    return AdminResponse_init_$Init$(seen1, id, email, role, serializationConstructorMarker, Object.create(AdminResponse.prototype));
  }
  function AdminResponse(id, email, role) {
    Companion_getInstance_21();
    this.t4n_1 = id;
    this.u4n_1 = email;
    this.v4n_1 = role;
  }
  AdminResponse.prototype.w4n = function () {
    return this.t4n_1;
  };
  AdminResponse.prototype.n4i = function () {
    return this.u4n_1;
  };
  AdminResponse.prototype.o4i = function () {
    return this.v4n_1;
  };
  AdminResponse.prototype.component1 = function () {
    return this.t4n_1;
  };
  AdminResponse.prototype.component2 = function () {
    return this.u4n_1;
  };
  AdminResponse.prototype.component3 = function () {
    return this.v4n_1;
  };
  AdminResponse.prototype.copy = function (id, email, role) {
    return this.x4n(id === void 1 ? this.t4n_1 : id, email === void 1 ? this.u4n_1 : email, role === void 1 ? this.v4n_1 : role);
  };
  AdminResponse.prototype.x4n = function (id, email, role) {
    return new AdminResponse(id, email, role);
  };
  AdminResponse.prototype.y4n = function (id, email, role, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.t4n_1;
    if (!(($mask0 & 2) === 0))
      email = this.u4n_1;
    if (!(($mask0 & 4) === 0))
      role = this.v4n_1;
    return this.x4n(id, email, role);
  };
  AdminResponse.prototype.toString = function () {
    return 'AdminResponse(id=' + this.t4n_1 + ', email=' + this.u4n_1 + ', role=' + this.v4n_1 + ')';
  };
  AdminResponse.prototype.hashCode = function () {
    var result = this.t4n_1;
    result = imul(result, 31) + getStringHashCode(this.u4n_1) | 0;
    result = imul(result, 31) + this.v4n_1.hashCode() | 0;
    return result;
  };
  AdminResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminResponse))
      return false;
    var tmp0_other_with_cast = other instanceof AdminResponse ? other : THROW_CCE();
    if (!(this.t4n_1 === tmp0_other_with_cast.t4n_1))
      return false;
    if (!(this.u4n_1 === tmp0_other_with_cast.u4n_1))
      return false;
    if (!this.v4n_1.equals(tmp0_other_with_cast.v4n_1))
      return false;
    return true;
  };
  AdminResponse.$metadata$ = classMeta('AdminResponse', undefined, undefined, {0: $serializer_getInstance_16});
  Object.defineProperty(AdminResponse.prototype, 'id', {
    configurable: true,
    get: AdminResponse.prototype.w4n
  });
  Object.defineProperty(AdminResponse.prototype, 'email', {
    configurable: true,
    get: AdminResponse.prototype.n4i
  });
  Object.defineProperty(AdminResponse.prototype, 'role', {
    configurable: true,
    get: AdminResponse.prototype.o4i
  });
  function AdminRole_GUEST_getInstance() {
    AdminRole_initEntries();
    return AdminRole_GUEST_instance;
  }
  function AdminRole_MANAGER_getInstance() {
    AdminRole_initEntries();
    return AdminRole_MANAGER_instance;
  }
  function AdminRole_ADMIN_getInstance() {
    AdminRole_initEntries();
    return AdminRole_ADMIN_instance;
  }
  function CategoryResponse_init_$Init$(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, $mask0, $marker, $this) {
    if (!(($mask0 & 256) === 0))
      products = null;
    if (!(($mask0 & 512) === 0))
      uploads = null;
    CategoryResponse.call($this, id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads);
    return $this;
  }
  function CategoryResponse_init_$Create$(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, $mask0, $marker) {
    return CategoryResponse_init_$Init$(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, $mask0, $marker, Object.create(CategoryResponse.prototype));
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  Companion_17.prototype.serializer = function () {
    return $serializer_getInstance_17();
  };
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_22() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.CategoryResponse', this, 10);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('key', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('desc', false);
    tmp0_serialDesc.o3z('image', false);
    tmp0_serialDesc.o3z('isPublished', false);
    tmp0_serialDesc.o3z('createAt', false);
    tmp0_serialDesc.o3z('updateAt', false);
    tmp0_serialDesc.o3z('products', true);
    tmp0_serialDesc.o3z('uploads', true);
    this.z4n_1 = tmp0_serialDesc;
  }
  $serializer_17.prototype.v3p = function () {
    return this.z4n_1;
  };
  $serializer_17.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27())), get_nullable(new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_17.prototype.x3p = function (decoder) {
    var tmp0_desc = this.z4n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.s3s(tmp0_desc);
    if (tmp14_input.g3t()) {
      tmp4_local0 = tmp14_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.u3s(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.c3t(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.c3t(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.f3t(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.f3t(tmp0_desc, 9, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.u3s(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.c3t(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.c3t(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.f3t(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.f3t(tmp0_desc, 9, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.t3s(tmp0_desc);
    return CategoryResponse_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  $serializer_17.prototype.a4o = function (encoder, value) {
    var tmp0_desc = this.z4n_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.b4o_1);
    tmp1_output.f3u(tmp0_desc, 1, value.c4o_1);
    tmp1_output.f3u(tmp0_desc, 2, value.d4o_1);
    tmp1_output.f3u(tmp0_desc, 3, value.e4o_1);
    tmp1_output.f3u(tmp0_desc, 4, value.f4o_1);
    tmp1_output.x3t(tmp0_desc, 5, value.g4o_1);
    tmp1_output.f3u(tmp0_desc, 6, value.h4o_1);
    tmp1_output.f3u(tmp0_desc, 7, value.i4o_1);
    if (tmp1_output.m3u(tmp0_desc, 8) ? true : !(value.j4o_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), value.j4o_1);
    }
    if (tmp1_output.m3u(tmp0_desc, 9) ? true : !(value.k4o_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 9, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), value.k4o_1);
    }
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_17.prototype.w3p = function (encoder, value) {
    return this.a4o(encoder, value instanceof CategoryResponse ? value : THROW_CCE());
  };
  $serializer_17.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function CategoryResponse_init_$Init$_0(seen1, id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_17().z4n_1);
    }
    $this.b4o_1 = id;
    $this.c4o_1 = key;
    $this.d4o_1 = name;
    $this.e4o_1 = desc;
    $this.f4o_1 = image;
    $this.g4o_1 = isPublished;
    $this.h4o_1 = createAt;
    $this.i4o_1 = updateAt;
    if (0 === (seen1 & 256))
      $this.j4o_1 = null;
    else
      $this.j4o_1 = products;
    if (0 === (seen1 & 512))
      $this.k4o_1 = null;
    else
      $this.k4o_1 = uploads;
    return $this;
  }
  function CategoryResponse_init_$Create$_0(seen1, id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, serializationConstructorMarker) {
    return CategoryResponse_init_$Init$_0(seen1, id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, serializationConstructorMarker, Object.create(CategoryResponse.prototype));
  }
  function CategoryResponse(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads) {
    Companion_getInstance_22();
    var products_0 = products === void 1 ? null : products;
    var uploads_0 = uploads === void 1 ? null : uploads;
    this.b4o_1 = id;
    this.c4o_1 = key;
    this.d4o_1 = name;
    this.e4o_1 = desc;
    this.f4o_1 = image;
    this.g4o_1 = isPublished;
    this.h4o_1 = createAt;
    this.i4o_1 = updateAt;
    this.j4o_1 = products_0;
    this.k4o_1 = uploads_0;
  }
  CategoryResponse.prototype.w4n = function () {
    return this.b4o_1;
  };
  CategoryResponse.prototype.s = function () {
    return this.c4o_1;
  };
  CategoryResponse.prototype.n4 = function () {
    return this.d4o_1;
  };
  CategoryResponse.prototype.g4j = function () {
    return this.e4o_1;
  };
  CategoryResponse.prototype.f4j = function () {
    return this.f4o_1;
  };
  CategoryResponse.prototype.h4j = function () {
    return this.g4o_1;
  };
  CategoryResponse.prototype.l4o = function () {
    return this.h4o_1;
  };
  CategoryResponse.prototype.m4o = function () {
    return this.i4o_1;
  };
  CategoryResponse.prototype.d4m = function () {
    return this.j4o_1;
  };
  CategoryResponse.prototype.i4j = function () {
    return this.k4o_1;
  };
  CategoryResponse.prototype.component1 = function () {
    return this.b4o_1;
  };
  CategoryResponse.prototype.component2 = function () {
    return this.c4o_1;
  };
  CategoryResponse.prototype.component3 = function () {
    return this.d4o_1;
  };
  CategoryResponse.prototype.component4 = function () {
    return this.e4o_1;
  };
  CategoryResponse.prototype.component5 = function () {
    return this.f4o_1;
  };
  CategoryResponse.prototype.component6 = function () {
    return this.g4o_1;
  };
  CategoryResponse.prototype.component7 = function () {
    return this.h4o_1;
  };
  CategoryResponse.prototype.component8 = function () {
    return this.i4o_1;
  };
  CategoryResponse.prototype.component9 = function () {
    return this.j4o_1;
  };
  CategoryResponse.prototype.component10 = function () {
    return this.k4o_1;
  };
  CategoryResponse.prototype.copy = function (id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads) {
    return this.n4o(id === void 1 ? this.b4o_1 : id, key === void 1 ? this.c4o_1 : key, name === void 1 ? this.d4o_1 : name, desc === void 1 ? this.e4o_1 : desc, image === void 1 ? this.f4o_1 : image, isPublished === void 1 ? this.g4o_1 : isPublished, createAt === void 1 ? this.h4o_1 : createAt, updateAt === void 1 ? this.i4o_1 : updateAt, products === void 1 ? this.j4o_1 : products, uploads === void 1 ? this.k4o_1 : uploads);
  };
  CategoryResponse.prototype.n4o = function (id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads) {
    return new CategoryResponse(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads);
  };
  CategoryResponse.prototype.o4o = function (id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.b4o_1;
    if (!(($mask0 & 2) === 0))
      key = this.c4o_1;
    if (!(($mask0 & 4) === 0))
      name = this.d4o_1;
    if (!(($mask0 & 8) === 0))
      desc = this.e4o_1;
    if (!(($mask0 & 16) === 0))
      image = this.f4o_1;
    if (!(($mask0 & 32) === 0))
      isPublished = this.g4o_1;
    if (!(($mask0 & 64) === 0))
      createAt = this.h4o_1;
    if (!(($mask0 & 128) === 0))
      updateAt = this.i4o_1;
    if (!(($mask0 & 256) === 0))
      products = this.j4o_1;
    if (!(($mask0 & 512) === 0))
      uploads = this.k4o_1;
    return this.n4o(id, key, name, desc, image, isPublished, createAt, updateAt, products, uploads);
  };
  CategoryResponse.prototype.toString = function () {
    return 'CategoryResponse(id=' + this.b4o_1 + ', key=' + this.c4o_1 + ', name=' + this.d4o_1 + ', desc=' + this.e4o_1 + ', image=' + this.f4o_1 + ', isPublished=' + this.g4o_1 + ', createAt=' + this.h4o_1 + ', updateAt=' + this.i4o_1 + ', products=' + toString(this.j4o_1) + ', uploads=' + toString(this.k4o_1) + ')';
  };
  CategoryResponse.prototype.hashCode = function () {
    var result = this.b4o_1;
    result = imul(result, 31) + getStringHashCode(this.c4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f4o_1) | 0;
    result = imul(result, 31) + (this.g4o_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.h4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i4o_1) | 0;
    result = imul(result, 31) + (this.j4o_1 == null ? 0 : hashCode(this.j4o_1)) | 0;
    result = imul(result, 31) + (this.k4o_1 == null ? 0 : hashCode(this.k4o_1)) | 0;
    return result;
  };
  CategoryResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CategoryResponse))
      return false;
    var tmp0_other_with_cast = other instanceof CategoryResponse ? other : THROW_CCE();
    if (!(this.b4o_1 === tmp0_other_with_cast.b4o_1))
      return false;
    if (!(this.c4o_1 === tmp0_other_with_cast.c4o_1))
      return false;
    if (!(this.d4o_1 === tmp0_other_with_cast.d4o_1))
      return false;
    if (!(this.e4o_1 === tmp0_other_with_cast.e4o_1))
      return false;
    if (!(this.f4o_1 === tmp0_other_with_cast.f4o_1))
      return false;
    if (!(this.g4o_1 === tmp0_other_with_cast.g4o_1))
      return false;
    if (!(this.h4o_1 === tmp0_other_with_cast.h4o_1))
      return false;
    if (!(this.i4o_1 === tmp0_other_with_cast.i4o_1))
      return false;
    if (!equals(this.j4o_1, tmp0_other_with_cast.j4o_1))
      return false;
    if (!equals(this.k4o_1, tmp0_other_with_cast.k4o_1))
      return false;
    return true;
  };
  CategoryResponse.$metadata$ = classMeta('CategoryResponse', undefined, undefined, {0: $serializer_getInstance_17});
  Object.defineProperty(CategoryResponse.prototype, 'id', {
    configurable: true,
    get: CategoryResponse.prototype.w4n
  });
  Object.defineProperty(CategoryResponse.prototype, 'key', {
    configurable: true,
    get: CategoryResponse.prototype.s
  });
  Object.defineProperty(CategoryResponse.prototype, 'name', {
    configurable: true,
    get: CategoryResponse.prototype.n4
  });
  Object.defineProperty(CategoryResponse.prototype, 'desc', {
    configurable: true,
    get: CategoryResponse.prototype.g4j
  });
  Object.defineProperty(CategoryResponse.prototype, 'image', {
    configurable: true,
    get: CategoryResponse.prototype.f4j
  });
  Object.defineProperty(CategoryResponse.prototype, 'isPublished', {
    configurable: true,
    get: CategoryResponse.prototype.h4j
  });
  Object.defineProperty(CategoryResponse.prototype, 'createAt', {
    configurable: true,
    get: CategoryResponse.prototype.l4o
  });
  Object.defineProperty(CategoryResponse.prototype, 'updateAt', {
    configurable: true,
    get: CategoryResponse.prototype.m4o
  });
  Object.defineProperty(CategoryResponse.prototype, 'products', {
    configurable: true,
    get: CategoryResponse.prototype.d4m
  });
  Object.defineProperty(CategoryResponse.prototype, 'uploads', {
    configurable: true,
    get: CategoryResponse.prototype.i4j
  });
  function Companion_18() {
    Companion_instance_18 = this;
  }
  Companion_18.prototype.serializer = function () {
    return $serializer_getInstance_18();
  };
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_23() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.CollectionResponse', this, 8);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('key', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('desc', false);
    tmp0_serialDesc.o3z('icon', false);
    tmp0_serialDesc.o3z('isPublished', false);
    tmp0_serialDesc.o3z('createAt', false);
    tmp0_serialDesc.o3z('updateAt', false);
    this.p4o_1 = tmp0_serialDesc;
  }
  $serializer_18.prototype.v3p = function () {
    return this.p4o_1;
  };
  $serializer_18.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_18.prototype.x3p = function (decoder) {
    var tmp0_desc = this.p4o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = false;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.s3s(tmp0_desc);
    if (tmp12_input.g3t()) {
      tmp4_local0 = tmp12_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.u3s(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.c3t(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.c3t(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.u3s(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.c3t(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.c3t(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.t3s(tmp0_desc);
    return CollectionResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  $serializer_18.prototype.q4o = function (encoder, value) {
    var tmp0_desc = this.p4o_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.r4o_1);
    tmp1_output.f3u(tmp0_desc, 1, value.s4o_1);
    tmp1_output.f3u(tmp0_desc, 2, value.t4o_1);
    tmp1_output.f3u(tmp0_desc, 3, value.u4o_1);
    tmp1_output.f3u(tmp0_desc, 4, value.v4o_1);
    tmp1_output.x3t(tmp0_desc, 5, value.w4o_1);
    tmp1_output.f3u(tmp0_desc, 6, value.x4o_1);
    tmp1_output.f3u(tmp0_desc, 7, value.y4o_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_18.prototype.w3p = function (encoder, value) {
    return this.q4o(encoder, value instanceof CollectionResponse ? value : THROW_CCE());
  };
  $serializer_18.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function CollectionResponse_init_$Init$(seen1, id, key, name, desc, icon, isPublished, createAt, updateAt, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_18().p4o_1);
    }
    $this.r4o_1 = id;
    $this.s4o_1 = key;
    $this.t4o_1 = name;
    $this.u4o_1 = desc;
    $this.v4o_1 = icon;
    $this.w4o_1 = isPublished;
    $this.x4o_1 = createAt;
    $this.y4o_1 = updateAt;
    return $this;
  }
  function CollectionResponse_init_$Create$(seen1, id, key, name, desc, icon, isPublished, createAt, updateAt, serializationConstructorMarker) {
    return CollectionResponse_init_$Init$(seen1, id, key, name, desc, icon, isPublished, createAt, updateAt, serializationConstructorMarker, Object.create(CollectionResponse.prototype));
  }
  function CollectionResponse(id, key, name, desc, icon, isPublished, createAt, updateAt) {
    Companion_getInstance_23();
    this.r4o_1 = id;
    this.s4o_1 = key;
    this.t4o_1 = name;
    this.u4o_1 = desc;
    this.v4o_1 = icon;
    this.w4o_1 = isPublished;
    this.x4o_1 = createAt;
    this.y4o_1 = updateAt;
  }
  CollectionResponse.prototype.w4n = function () {
    return this.r4o_1;
  };
  CollectionResponse.prototype.s = function () {
    return this.s4o_1;
  };
  CollectionResponse.prototype.n4 = function () {
    return this.t4o_1;
  };
  CollectionResponse.prototype.g4j = function () {
    return this.u4o_1;
  };
  CollectionResponse.prototype.x4j = function () {
    return this.v4o_1;
  };
  CollectionResponse.prototype.h4j = function () {
    return this.w4o_1;
  };
  CollectionResponse.prototype.l4o = function () {
    return this.x4o_1;
  };
  CollectionResponse.prototype.m4o = function () {
    return this.y4o_1;
  };
  CollectionResponse.prototype.component1 = function () {
    return this.r4o_1;
  };
  CollectionResponse.prototype.component2 = function () {
    return this.s4o_1;
  };
  CollectionResponse.prototype.component3 = function () {
    return this.t4o_1;
  };
  CollectionResponse.prototype.component4 = function () {
    return this.u4o_1;
  };
  CollectionResponse.prototype.component5 = function () {
    return this.v4o_1;
  };
  CollectionResponse.prototype.component6 = function () {
    return this.w4o_1;
  };
  CollectionResponse.prototype.component7 = function () {
    return this.x4o_1;
  };
  CollectionResponse.prototype.component8 = function () {
    return this.y4o_1;
  };
  CollectionResponse.prototype.copy = function (id, key, name, desc, icon, isPublished, createAt, updateAt) {
    return this.z4o(id === void 1 ? this.r4o_1 : id, key === void 1 ? this.s4o_1 : key, name === void 1 ? this.t4o_1 : name, desc === void 1 ? this.u4o_1 : desc, icon === void 1 ? this.v4o_1 : icon, isPublished === void 1 ? this.w4o_1 : isPublished, createAt === void 1 ? this.x4o_1 : createAt, updateAt === void 1 ? this.y4o_1 : updateAt);
  };
  CollectionResponse.prototype.z4o = function (id, key, name, desc, icon, isPublished, createAt, updateAt) {
    return new CollectionResponse(id, key, name, desc, icon, isPublished, createAt, updateAt);
  };
  CollectionResponse.prototype.a4p = function (id, key, name, desc, icon, isPublished, createAt, updateAt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.r4o_1;
    if (!(($mask0 & 2) === 0))
      key = this.s4o_1;
    if (!(($mask0 & 4) === 0))
      name = this.t4o_1;
    if (!(($mask0 & 8) === 0))
      desc = this.u4o_1;
    if (!(($mask0 & 16) === 0))
      icon = this.v4o_1;
    if (!(($mask0 & 32) === 0))
      isPublished = this.w4o_1;
    if (!(($mask0 & 64) === 0))
      createAt = this.x4o_1;
    if (!(($mask0 & 128) === 0))
      updateAt = this.y4o_1;
    return this.z4o(id, key, name, desc, icon, isPublished, createAt, updateAt);
  };
  CollectionResponse.prototype.toString = function () {
    return 'CollectionResponse(id=' + this.r4o_1 + ', key=' + this.s4o_1 + ', name=' + this.t4o_1 + ', desc=' + this.u4o_1 + ', icon=' + this.v4o_1 + ', isPublished=' + this.w4o_1 + ', createAt=' + this.x4o_1 + ', updateAt=' + this.y4o_1 + ')';
  };
  CollectionResponse.prototype.hashCode = function () {
    var result = this.r4o_1;
    result = imul(result, 31) + getStringHashCode(this.s4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.t4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.u4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v4o_1) | 0;
    result = imul(result, 31) + (this.w4o_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.x4o_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y4o_1) | 0;
    return result;
  };
  CollectionResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CollectionResponse))
      return false;
    var tmp0_other_with_cast = other instanceof CollectionResponse ? other : THROW_CCE();
    if (!(this.r4o_1 === tmp0_other_with_cast.r4o_1))
      return false;
    if (!(this.s4o_1 === tmp0_other_with_cast.s4o_1))
      return false;
    if (!(this.t4o_1 === tmp0_other_with_cast.t4o_1))
      return false;
    if (!(this.u4o_1 === tmp0_other_with_cast.u4o_1))
      return false;
    if (!(this.v4o_1 === tmp0_other_with_cast.v4o_1))
      return false;
    if (!(this.w4o_1 === tmp0_other_with_cast.w4o_1))
      return false;
    if (!(this.x4o_1 === tmp0_other_with_cast.x4o_1))
      return false;
    if (!(this.y4o_1 === tmp0_other_with_cast.y4o_1))
      return false;
    return true;
  };
  CollectionResponse.$metadata$ = classMeta('CollectionResponse', undefined, undefined, {0: $serializer_getInstance_18});
  Object.defineProperty(CollectionResponse.prototype, 'id', {
    configurable: true,
    get: CollectionResponse.prototype.w4n
  });
  Object.defineProperty(CollectionResponse.prototype, 'key', {
    configurable: true,
    get: CollectionResponse.prototype.s
  });
  Object.defineProperty(CollectionResponse.prototype, 'name', {
    configurable: true,
    get: CollectionResponse.prototype.n4
  });
  Object.defineProperty(CollectionResponse.prototype, 'desc', {
    configurable: true,
    get: CollectionResponse.prototype.g4j
  });
  Object.defineProperty(CollectionResponse.prototype, 'icon', {
    configurable: true,
    get: CollectionResponse.prototype.x4j
  });
  Object.defineProperty(CollectionResponse.prototype, 'isPublished', {
    configurable: true,
    get: CollectionResponse.prototype.h4j
  });
  Object.defineProperty(CollectionResponse.prototype, 'createAt', {
    configurable: true,
    get: CollectionResponse.prototype.l4o
  });
  Object.defineProperty(CollectionResponse.prototype, 'updateAt', {
    configurable: true,
    get: CollectionResponse.prototype.m4o
  });
  function Companion_19() {
    Companion_instance_19 = this;
  }
  Companion_19.prototype.serializer = function () {
    return $serializer_getInstance_19();
  };
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_24() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.DashboardCountResponse', this, 2);
    tmp0_serialDesc.o3z('count', false);
    tmp0_serialDesc.o3z('percent', false);
    this.b4p_1 = tmp0_serialDesc;
  }
  $serializer_19.prototype.v3p = function () {
    return this.b4p_1;
  };
  $serializer_19.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_19.prototype.x3p = function (decoder) {
    var tmp0_desc = this.b4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x3s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x3s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return DashboardCountResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_19.prototype.c4p = function (encoder, value) {
    var tmp0_desc = this.b4p_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.d4p_1);
    tmp1_output.a3u(tmp0_desc, 1, value.e4p_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_19.prototype.w3p = function (encoder, value) {
    return this.c4p(encoder, value instanceof DashboardCountResponse ? value : THROW_CCE());
  };
  $serializer_19.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function DashboardCountResponse_init_$Init$(seen1, count, percent, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_19().b4p_1);
    }
    $this.d4p_1 = count;
    $this.e4p_1 = percent;
    return $this;
  }
  function DashboardCountResponse_init_$Create$(seen1, count, percent, serializationConstructorMarker) {
    return DashboardCountResponse_init_$Init$(seen1, count, percent, serializationConstructorMarker, Object.create(DashboardCountResponse.prototype));
  }
  function DashboardCountResponse(count, percent) {
    Companion_getInstance_24();
    this.d4p_1 = count;
    this.e4p_1 = percent;
  }
  DashboardCountResponse.prototype.m4m = function () {
    return this.d4p_1;
  };
  DashboardCountResponse.prototype.f4p = function () {
    return this.e4p_1;
  };
  DashboardCountResponse.prototype.component1 = function () {
    return this.d4p_1;
  };
  DashboardCountResponse.prototype.component2 = function () {
    return this.e4p_1;
  };
  DashboardCountResponse.prototype.copy = function (count, percent) {
    return this.g4p(count === void 1 ? this.d4p_1 : count, percent === void 1 ? this.e4p_1 : percent);
  };
  DashboardCountResponse.prototype.g4p = function (count, percent) {
    return new DashboardCountResponse(count, percent);
  };
  DashboardCountResponse.prototype.h4p = function (count, percent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      count = this.d4p_1;
    if (!(($mask0 & 2) === 0))
      percent = this.e4p_1;
    return this.g4p(count, percent);
  };
  DashboardCountResponse.prototype.toString = function () {
    return 'DashboardCountResponse(count=' + this.d4p_1 + ', percent=' + this.e4p_1 + ')';
  };
  DashboardCountResponse.prototype.hashCode = function () {
    var result = this.d4p_1;
    result = imul(result, 31) + this.e4p_1 | 0;
    return result;
  };
  DashboardCountResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DashboardCountResponse))
      return false;
    var tmp0_other_with_cast = other instanceof DashboardCountResponse ? other : THROW_CCE();
    if (!(this.d4p_1 === tmp0_other_with_cast.d4p_1))
      return false;
    if (!(this.e4p_1 === tmp0_other_with_cast.e4p_1))
      return false;
    return true;
  };
  DashboardCountResponse.$metadata$ = classMeta('DashboardCountResponse', undefined, undefined, {0: $serializer_getInstance_19});
  Object.defineProperty(DashboardCountResponse.prototype, 'count', {
    configurable: true,
    get: DashboardCountResponse.prototype.m4m
  });
  Object.defineProperty(DashboardCountResponse.prototype, 'percent', {
    configurable: true,
    get: DashboardCountResponse.prototype.f4p
  });
  function Companion_20() {
    Companion_instance_20 = this;
  }
  Companion_20.prototype.serializer = function () {
    return $serializer_getInstance_20();
  };
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_25() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.DashboardAmountResponse', this, 1);
    tmp0_serialDesc.o3z('amount', false);
    this.i4p_1 = tmp0_serialDesc;
  }
  $serializer_20.prototype.v3p = function () {
    return this.i4p_1;
  };
  $serializer_20.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [DoubleSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_20.prototype.x3p = function (decoder) {
    var tmp0_desc = this.i4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.a3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.a3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return DashboardAmountResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_20.prototype.j4p = function (encoder, value) {
    var tmp0_desc = this.i4p_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.d3u(tmp0_desc, 0, value.k4p_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_20.prototype.w3p = function (encoder, value) {
    return this.j4p(encoder, value instanceof DashboardAmountResponse ? value : THROW_CCE());
  };
  $serializer_20.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function DashboardAmountResponse_init_$Init$(seen1, amount, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_20().i4p_1);
    }
    $this.k4p_1 = amount;
    return $this;
  }
  function DashboardAmountResponse_init_$Create$(seen1, amount, serializationConstructorMarker) {
    return DashboardAmountResponse_init_$Init$(seen1, amount, serializationConstructorMarker, Object.create(DashboardAmountResponse.prototype));
  }
  function DashboardAmountResponse(amount) {
    Companion_getInstance_25();
    this.k4p_1 = amount;
  }
  DashboardAmountResponse.prototype.l4p = function () {
    return this.k4p_1;
  };
  DashboardAmountResponse.prototype.component1 = function () {
    return this.k4p_1;
  };
  DashboardAmountResponse.prototype.copy = function (amount) {
    return this.m4p(amount === void 1 ? this.k4p_1 : amount);
  };
  DashboardAmountResponse.prototype.m4p = function (amount) {
    return new DashboardAmountResponse(amount);
  };
  DashboardAmountResponse.prototype.n4p = function (amount, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      amount = this.k4p_1;
    return this.m4p(amount);
  };
  DashboardAmountResponse.prototype.toString = function () {
    return 'DashboardAmountResponse(amount=' + this.k4p_1 + ')';
  };
  DashboardAmountResponse.prototype.hashCode = function () {
    return getNumberHashCode(this.k4p_1);
  };
  DashboardAmountResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DashboardAmountResponse))
      return false;
    var tmp0_other_with_cast = other instanceof DashboardAmountResponse ? other : THROW_CCE();
    if (!equals(this.k4p_1, tmp0_other_with_cast.k4p_1))
      return false;
    return true;
  };
  DashboardAmountResponse.$metadata$ = classMeta('DashboardAmountResponse', undefined, undefined, {0: $serializer_getInstance_20});
  Object.defineProperty(DashboardAmountResponse.prototype, 'amount', {
    configurable: true,
    get: DashboardAmountResponse.prototype.l4p
  });
  function Companion_21() {
    Companion_instance_21 = this;
  }
  Companion_21.prototype.serializer = function () {
    return $serializer_getInstance_21();
  };
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_26() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.DashboardChartResponse', this, 2);
    tmp0_serialDesc.o3z('series1', false);
    tmp0_serialDesc.o3z('series2', false);
    this.o4p_1 = tmp0_serialDesc;
  }
  $serializer_21.prototype.v3p = function () {
    return this.o4p_1;
  };
  $serializer_21.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_21.prototype.x3p = function (decoder) {
    var tmp0_desc = this.o4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.d3t(tmp0_desc, 0, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.d3t(tmp0_desc, 0, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return DashboardChartResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_21.prototype.p4p = function (encoder, value) {
    var tmp0_desc = this.o4p_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.g3u(tmp0_desc, 0, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), value.q4p_1);
    tmp1_output.g3u(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().cf(), IntSerializer_getInstance()), value.r4p_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_21.prototype.w3p = function (encoder, value) {
    return this.p4p(encoder, value instanceof DashboardChartResponse ? value : THROW_CCE());
  };
  $serializer_21.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function DashboardChartResponse_init_$Init$(seen1, series1, series2, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_21().o4p_1);
    }
    $this.q4p_1 = series1;
    $this.r4p_1 = series2;
    return $this;
  }
  function DashboardChartResponse_init_$Create$(seen1, series1, series2, serializationConstructorMarker) {
    return DashboardChartResponse_init_$Init$(seen1, series1, series2, serializationConstructorMarker, Object.create(DashboardChartResponse.prototype));
  }
  function DashboardChartResponse(series1, series2) {
    Companion_getInstance_26();
    this.q4p_1 = series1;
    this.r4p_1 = series2;
  }
  DashboardChartResponse.prototype.s4p = function () {
    return this.q4p_1;
  };
  DashboardChartResponse.prototype.t4p = function () {
    return this.r4p_1;
  };
  DashboardChartResponse.prototype.component1 = function () {
    return this.q4p_1;
  };
  DashboardChartResponse.prototype.component2 = function () {
    return this.r4p_1;
  };
  DashboardChartResponse.prototype.copy = function (series1, series2) {
    return this.u4p(series1 === void 1 ? this.q4p_1 : series1, series2 === void 1 ? this.r4p_1 : series2);
  };
  DashboardChartResponse.prototype.u4p = function (series1, series2) {
    return new DashboardChartResponse(series1, series2);
  };
  DashboardChartResponse.prototype.v4p = function (series1, series2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      series1 = this.q4p_1;
    if (!(($mask0 & 2) === 0))
      series2 = this.r4p_1;
    return this.u4p(series1, series2);
  };
  DashboardChartResponse.prototype.toString = function () {
    return 'DashboardChartResponse(series1=' + toString(this.q4p_1) + ', series2=' + toString(this.r4p_1) + ')';
  };
  DashboardChartResponse.prototype.hashCode = function () {
    var result = hashCode(this.q4p_1);
    result = imul(result, 31) + hashCode(this.r4p_1) | 0;
    return result;
  };
  DashboardChartResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DashboardChartResponse))
      return false;
    var tmp0_other_with_cast = other instanceof DashboardChartResponse ? other : THROW_CCE();
    if (!equals(this.q4p_1, tmp0_other_with_cast.q4p_1))
      return false;
    if (!equals(this.r4p_1, tmp0_other_with_cast.r4p_1))
      return false;
    return true;
  };
  DashboardChartResponse.$metadata$ = classMeta('DashboardChartResponse', undefined, undefined, {0: $serializer_getInstance_21});
  Object.defineProperty(DashboardChartResponse.prototype, 'series1', {
    configurable: true,
    get: DashboardChartResponse.prototype.s4p
  });
  Object.defineProperty(DashboardChartResponse.prototype, 'series2', {
    configurable: true,
    get: DashboardChartResponse.prototype.t4p
  });
  function Companion_22() {
    Companion_instance_22 = this;
  }
  Companion_22.prototype.serializer = function () {
    return $serializer_getInstance_22();
  };
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_27() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.MessageResponse', this, 9);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('lname', false);
    tmp0_serialDesc.o3z('fname', false);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('phone', false);
    tmp0_serialDesc.o3z('message', false);
    tmp0_serialDesc.o3z('isChecked', false);
    tmp0_serialDesc.o3z('createAt', false);
    tmp0_serialDesc.o3z('updateAt', false);
    this.w4p_1 = tmp0_serialDesc;
  }
  $serializer_22.prototype.v3p = function () {
    return this.w4p_1;
  };
  $serializer_22.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_22.prototype.x3p = function (decoder) {
    var tmp0_desc = this.w4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.s3s(tmp0_desc);
    if (tmp13_input.g3t()) {
      tmp4_local0 = tmp13_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.c3t(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.u3s(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.c3t(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.c3t(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.c3t(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.u3s(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.c3t(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.c3t(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.t3s(tmp0_desc);
    return MessageResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  $serializer_22.prototype.x4p = function (encoder, value) {
    var tmp0_desc = this.w4p_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.y4p_1);
    tmp1_output.f3u(tmp0_desc, 1, value.z4p_1);
    tmp1_output.f3u(tmp0_desc, 2, value.a4q_1);
    tmp1_output.f3u(tmp0_desc, 3, value.b4q_1);
    tmp1_output.f3u(tmp0_desc, 4, value.c4q_1);
    tmp1_output.f3u(tmp0_desc, 5, value.d4q_1);
    tmp1_output.x3t(tmp0_desc, 6, value.e4q_1);
    tmp1_output.f3u(tmp0_desc, 7, value.f4q_1);
    tmp1_output.f3u(tmp0_desc, 8, value.g4q_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_22.prototype.w3p = function (encoder, value) {
    return this.x4p(encoder, value instanceof MessageResponse ? value : THROW_CCE());
  };
  $serializer_22.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function MessageResponse_init_$Init$(seen1, id, lname, fname, email, phone, message, isChecked, createAt, updateAt, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen1))) {
      throwMissingFieldException(seen1, 511, $serializer_getInstance_22().w4p_1);
    }
    $this.y4p_1 = id;
    $this.z4p_1 = lname;
    $this.a4q_1 = fname;
    $this.b4q_1 = email;
    $this.c4q_1 = phone;
    $this.d4q_1 = message;
    $this.e4q_1 = isChecked;
    $this.f4q_1 = createAt;
    $this.g4q_1 = updateAt;
    return $this;
  }
  function MessageResponse_init_$Create$(seen1, id, lname, fname, email, phone, message, isChecked, createAt, updateAt, serializationConstructorMarker) {
    return MessageResponse_init_$Init$(seen1, id, lname, fname, email, phone, message, isChecked, createAt, updateAt, serializationConstructorMarker, Object.create(MessageResponse.prototype));
  }
  function MessageResponse(id, lname, fname, email, phone, message, isChecked, createAt, updateAt) {
    Companion_getInstance_27();
    this.y4p_1 = id;
    this.z4p_1 = lname;
    this.a4q_1 = fname;
    this.b4q_1 = email;
    this.c4q_1 = phone;
    this.d4q_1 = message;
    this.e4q_1 = isChecked;
    this.f4q_1 = createAt;
    this.g4q_1 = updateAt;
  }
  MessageResponse.prototype.w4n = function () {
    return this.y4p_1;
  };
  MessageResponse.prototype.y4k = function () {
    return this.z4p_1;
  };
  MessageResponse.prototype.x4k = function () {
    return this.a4q_1;
  };
  MessageResponse.prototype.n4i = function () {
    return this.b4q_1;
  };
  MessageResponse.prototype.z4k = function () {
    return this.c4q_1;
  };
  MessageResponse.prototype.j1 = function () {
    return this.d4q_1;
  };
  MessageResponse.prototype.f4l = function () {
    return this.e4q_1;
  };
  MessageResponse.prototype.l4o = function () {
    return this.f4q_1;
  };
  MessageResponse.prototype.m4o = function () {
    return this.g4q_1;
  };
  MessageResponse.prototype.component1 = function () {
    return this.y4p_1;
  };
  MessageResponse.prototype.component2 = function () {
    return this.z4p_1;
  };
  MessageResponse.prototype.component3 = function () {
    return this.a4q_1;
  };
  MessageResponse.prototype.component4 = function () {
    return this.b4q_1;
  };
  MessageResponse.prototype.component5 = function () {
    return this.c4q_1;
  };
  MessageResponse.prototype.component6 = function () {
    return this.d4q_1;
  };
  MessageResponse.prototype.component7 = function () {
    return this.e4q_1;
  };
  MessageResponse.prototype.component8 = function () {
    return this.f4q_1;
  };
  MessageResponse.prototype.component9 = function () {
    return this.g4q_1;
  };
  MessageResponse.prototype.copy = function (id, lname, fname, email, phone, message, isChecked, createAt, updateAt) {
    return this.h4q(id === void 1 ? this.y4p_1 : id, lname === void 1 ? this.z4p_1 : lname, fname === void 1 ? this.a4q_1 : fname, email === void 1 ? this.b4q_1 : email, phone === void 1 ? this.c4q_1 : phone, message === void 1 ? this.d4q_1 : message, isChecked === void 1 ? this.e4q_1 : isChecked, createAt === void 1 ? this.f4q_1 : createAt, updateAt === void 1 ? this.g4q_1 : updateAt);
  };
  MessageResponse.prototype.h4q = function (id, lname, fname, email, phone, message, isChecked, createAt, updateAt) {
    return new MessageResponse(id, lname, fname, email, phone, message, isChecked, createAt, updateAt);
  };
  MessageResponse.prototype.i4q = function (id, lname, fname, email, phone, message, isChecked, createAt, updateAt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.y4p_1;
    if (!(($mask0 & 2) === 0))
      lname = this.z4p_1;
    if (!(($mask0 & 4) === 0))
      fname = this.a4q_1;
    if (!(($mask0 & 8) === 0))
      email = this.b4q_1;
    if (!(($mask0 & 16) === 0))
      phone = this.c4q_1;
    if (!(($mask0 & 32) === 0))
      message = this.d4q_1;
    if (!(($mask0 & 64) === 0))
      isChecked = this.e4q_1;
    if (!(($mask0 & 128) === 0))
      createAt = this.f4q_1;
    if (!(($mask0 & 256) === 0))
      updateAt = this.g4q_1;
    return this.h4q(id, lname, fname, email, phone, message, isChecked, createAt, updateAt);
  };
  MessageResponse.prototype.toString = function () {
    return 'MessageResponse(id=' + this.y4p_1 + ', lname=' + this.z4p_1 + ', fname=' + this.a4q_1 + ', email=' + this.b4q_1 + ', phone=' + this.c4q_1 + ', message=' + this.d4q_1 + ', isChecked=' + this.e4q_1 + ', createAt=' + this.f4q_1 + ', updateAt=' + this.g4q_1 + ')';
  };
  MessageResponse.prototype.hashCode = function () {
    var result = this.y4p_1;
    result = imul(result, 31) + getStringHashCode(this.z4p_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d4q_1) | 0;
    result = imul(result, 31) + (this.e4q_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.f4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g4q_1) | 0;
    return result;
  };
  MessageResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MessageResponse))
      return false;
    var tmp0_other_with_cast = other instanceof MessageResponse ? other : THROW_CCE();
    if (!(this.y4p_1 === tmp0_other_with_cast.y4p_1))
      return false;
    if (!(this.z4p_1 === tmp0_other_with_cast.z4p_1))
      return false;
    if (!(this.a4q_1 === tmp0_other_with_cast.a4q_1))
      return false;
    if (!(this.b4q_1 === tmp0_other_with_cast.b4q_1))
      return false;
    if (!(this.c4q_1 === tmp0_other_with_cast.c4q_1))
      return false;
    if (!(this.d4q_1 === tmp0_other_with_cast.d4q_1))
      return false;
    if (!(this.e4q_1 === tmp0_other_with_cast.e4q_1))
      return false;
    if (!(this.f4q_1 === tmp0_other_with_cast.f4q_1))
      return false;
    if (!(this.g4q_1 === tmp0_other_with_cast.g4q_1))
      return false;
    return true;
  };
  MessageResponse.$metadata$ = classMeta('MessageResponse', undefined, undefined, {0: $serializer_getInstance_22});
  Object.defineProperty(MessageResponse.prototype, 'id', {
    configurable: true,
    get: MessageResponse.prototype.w4n
  });
  Object.defineProperty(MessageResponse.prototype, 'lname', {
    configurable: true,
    get: MessageResponse.prototype.y4k
  });
  Object.defineProperty(MessageResponse.prototype, 'fname', {
    configurable: true,
    get: MessageResponse.prototype.x4k
  });
  Object.defineProperty(MessageResponse.prototype, 'email', {
    configurable: true,
    get: MessageResponse.prototype.n4i
  });
  Object.defineProperty(MessageResponse.prototype, 'phone', {
    configurable: true,
    get: MessageResponse.prototype.z4k
  });
  Object.defineProperty(MessageResponse.prototype, 'message', {
    configurable: true,
    get: MessageResponse.prototype.j1
  });
  Object.defineProperty(MessageResponse.prototype, 'isChecked', {
    configurable: true,
    get: MessageResponse.prototype.f4l
  });
  Object.defineProperty(MessageResponse.prototype, 'createAt', {
    configurable: true,
    get: MessageResponse.prototype.l4o
  });
  Object.defineProperty(MessageResponse.prototype, 'updateAt', {
    configurable: true,
    get: MessageResponse.prototype.m4o
  });
  var OrderState_NEW_instance;
  var OrderState_PENDING_instance;
  var OrderState_COMPLETED_instance;
  var OrderState_CANCELED_instance;
  function values_1() {
    return [OrderState_NEW_getInstance(), OrderState_PENDING_getInstance(), OrderState_COMPLETED_getInstance(), OrderState_CANCELED_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'NEW':
        return OrderState_NEW_getInstance();
      case 'PENDING':
        return OrderState_PENDING_getInstance();
      case 'COMPLETED':
        return OrderState_COMPLETED_getInstance();
      case 'CANCELED':
        return OrderState_CANCELED_getInstance();
      default:
        OrderState_initEntries();
        THROW_ISE();
        break;
    }
  }
  var OrderState_entriesInitialized;
  function OrderState_initEntries() {
    if (OrderState_entriesInitialized)
      return Unit_getInstance();
    OrderState_entriesInitialized = true;
    OrderState_NEW_instance = new OrderState('NEW', 0);
    OrderState_PENDING_instance = new OrderState('PENDING', 1);
    OrderState_COMPLETED_instance = new OrderState('COMPLETED', 2);
    OrderState_CANCELED_instance = new OrderState('CANCELED', 3);
  }
  function OrderState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  OrderState.$metadata$ = classMeta('OrderState', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(OrderState.prototype, 'name', {
    configurable: true,
    get: OrderState.prototype.n4
  });
  Object.defineProperty(OrderState.prototype, 'ordinal', {
    configurable: true,
    get: OrderState.prototype.kg
  });
  function Companion_23() {
    Companion_instance_23 = this;
  }
  Companion_23.prototype.serializer = function () {
    return $serializer_getInstance_23();
  };
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_28() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.OrderProductResponse', this, 4);
    tmp0_serialDesc.o3z('price', false);
    tmp0_serialDesc.o3z('count', false);
    tmp0_serialDesc.o3z('sum', false);
    tmp0_serialDesc.o3z('product', false);
    this.l4q_1 = tmp0_serialDesc;
  }
  $serializer_23.prototype.v3p = function () {
    return this.l4q_1;
  };
  $serializer_23.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [DoubleSerializer_getInstance(), IntSerializer_getInstance(), DoubleSerializer_getInstance(), $serializer_getInstance_27()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_23.prototype.x3p = function (decoder) {
    var tmp0_desc = this.l4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0.0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.s3s(tmp0_desc);
    if (tmp8_input.g3t()) {
      tmp4_local0 = tmp8_input.a3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.x3s(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.a3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.d3t(tmp0_desc, 3, $serializer_getInstance_27(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.a3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.x3s(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.a3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.d3t(tmp0_desc, 3, $serializer_getInstance_27(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.t3s(tmp0_desc);
    return OrderProductResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer_23.prototype.m4q = function (encoder, value) {
    var tmp0_desc = this.l4q_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.d3u(tmp0_desc, 0, value.n4q_1);
    tmp1_output.a3u(tmp0_desc, 1, value.o4q_1);
    tmp1_output.d3u(tmp0_desc, 2, value.p4q_1);
    tmp1_output.g3u(tmp0_desc, 3, $serializer_getInstance_27(), value.q4q_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_23.prototype.w3p = function (encoder, value) {
    return this.m4q(encoder, value instanceof OrderProductResponse ? value : THROW_CCE());
  };
  $serializer_23.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function OrderProductResponse_init_$Init$(seen1, price, count, sum, product, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_23().l4q_1);
    }
    $this.n4q_1 = price;
    $this.o4q_1 = count;
    $this.p4q_1 = sum;
    $this.q4q_1 = product;
    return $this;
  }
  function OrderProductResponse_init_$Create$(seen1, price, count, sum, product, serializationConstructorMarker) {
    return OrderProductResponse_init_$Init$(seen1, price, count, sum, product, serializationConstructorMarker, Object.create(OrderProductResponse.prototype));
  }
  function OrderProductResponse(price, count, sum, product) {
    Companion_getInstance_28();
    this.n4q_1 = price;
    this.o4q_1 = count;
    this.p4q_1 = sum;
    this.q4q_1 = product;
  }
  OrderProductResponse.prototype.n4m = function () {
    return this.n4q_1;
  };
  OrderProductResponse.prototype.m4m = function () {
    return this.o4q_1;
  };
  OrderProductResponse.prototype.r4q = function () {
    return this.p4q_1;
  };
  OrderProductResponse.prototype.s4q = function () {
    return this.q4q_1;
  };
  OrderProductResponse.prototype.component1 = function () {
    return this.n4q_1;
  };
  OrderProductResponse.prototype.component2 = function () {
    return this.o4q_1;
  };
  OrderProductResponse.prototype.component3 = function () {
    return this.p4q_1;
  };
  OrderProductResponse.prototype.component4 = function () {
    return this.q4q_1;
  };
  OrderProductResponse.prototype.copy = function (price, count, sum, product) {
    return this.t4q(price === void 1 ? this.n4q_1 : price, count === void 1 ? this.o4q_1 : count, sum === void 1 ? this.p4q_1 : sum, product === void 1 ? this.q4q_1 : product);
  };
  OrderProductResponse.prototype.t4q = function (price, count, sum, product) {
    return new OrderProductResponse(price, count, sum, product);
  };
  OrderProductResponse.prototype.u4q = function (price, count, sum, product, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      price = this.n4q_1;
    if (!(($mask0 & 2) === 0))
      count = this.o4q_1;
    if (!(($mask0 & 4) === 0))
      sum = this.p4q_1;
    if (!(($mask0 & 8) === 0))
      product = this.q4q_1;
    return this.t4q(price, count, sum, product);
  };
  OrderProductResponse.prototype.toString = function () {
    return 'OrderProductResponse(price=' + this.n4q_1 + ', count=' + this.o4q_1 + ', sum=' + this.p4q_1 + ', product=' + this.q4q_1 + ')';
  };
  OrderProductResponse.prototype.hashCode = function () {
    var result = getNumberHashCode(this.n4q_1);
    result = imul(result, 31) + this.o4q_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4q_1) | 0;
    result = imul(result, 31) + this.q4q_1.hashCode() | 0;
    return result;
  };
  OrderProductResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderProductResponse))
      return false;
    var tmp0_other_with_cast = other instanceof OrderProductResponse ? other : THROW_CCE();
    if (!equals(this.n4q_1, tmp0_other_with_cast.n4q_1))
      return false;
    if (!(this.o4q_1 === tmp0_other_with_cast.o4q_1))
      return false;
    if (!equals(this.p4q_1, tmp0_other_with_cast.p4q_1))
      return false;
    if (!this.q4q_1.equals(tmp0_other_with_cast.q4q_1))
      return false;
    return true;
  };
  OrderProductResponse.$metadata$ = classMeta('OrderProductResponse', undefined, undefined, {0: $serializer_getInstance_23});
  Object.defineProperty(OrderProductResponse.prototype, 'price', {
    configurable: true,
    get: OrderProductResponse.prototype.n4m
  });
  Object.defineProperty(OrderProductResponse.prototype, 'count', {
    configurable: true,
    get: OrderProductResponse.prototype.m4m
  });
  Object.defineProperty(OrderProductResponse.prototype, 'sum', {
    configurable: true,
    get: OrderProductResponse.prototype.r4q
  });
  Object.defineProperty(OrderProductResponse.prototype, 'product', {
    configurable: true,
    get: OrderProductResponse.prototype.s4q
  });
  function Companion_24() {
    Companion_instance_24 = this;
  }
  Companion_24.prototype.serializer = function () {
    return $serializer_getInstance_24();
  };
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_29() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.OrderResponse', this, 11);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('number', false);
    tmp0_serialDesc.o3z('email', false);
    tmp0_serialDesc.o3z('phone', false);
    tmp0_serialDesc.o3z('address', false);
    tmp0_serialDesc.o3z('note', false);
    tmp0_serialDesc.o3z('state', false);
    tmp0_serialDesc.o3z('sum', false);
    tmp0_serialDesc.o3z('products', false);
    tmp0_serialDesc.o3z('createAt', false);
    tmp0_serialDesc.o3z('updateAt', false);
    this.v4q_1 = tmp0_serialDesc;
  }
  $serializer_24.prototype.v3p = function () {
    return this.v4q_1;
  };
  $serializer_24.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), DoubleSerializer_getInstance(), new ReferenceArraySerializer(getKClass(OrderProductResponse), $serializer_getInstance_23()), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_24.prototype.x3p = function (decoder) {
    var tmp0_desc = this.v4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = 0.0;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.s3s(tmp0_desc);
    if (tmp15_input.g3t()) {
      tmp4_local0 = tmp15_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.c3t(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.d3t(tmp0_desc, 6, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.a3t(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.d3t(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(OrderProductResponse), $serializer_getInstance_23()), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.c3t(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.c3t(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.c3t(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.d3t(tmp0_desc, 6, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.a3t(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.d3t(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(OrderProductResponse), $serializer_getInstance_23()), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.c3t(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.c3t(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.t3s(tmp0_desc);
    return OrderResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  $serializer_24.prototype.w4q = function (encoder, value) {
    var tmp0_desc = this.v4q_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.x4q_1);
    tmp1_output.f3u(tmp0_desc, 1, value.y4q_1);
    tmp1_output.f3u(tmp0_desc, 2, value.z4q_1);
    tmp1_output.f3u(tmp0_desc, 3, value.a4r_1);
    tmp1_output.f3u(tmp0_desc, 4, value.b4r_1);
    tmp1_output.f3u(tmp0_desc, 5, value.c4r_1);
    tmp1_output.g3u(tmp0_desc, 6, new EnumSerializer('com.keygenqt.shop.data.responses.OrderState', values_1()), value.d4r_1);
    tmp1_output.d3u(tmp0_desc, 7, value.e4r_1);
    tmp1_output.g3u(tmp0_desc, 8, new ReferenceArraySerializer(getKClass(OrderProductResponse), $serializer_getInstance_23()), value.f4r_1);
    tmp1_output.f3u(tmp0_desc, 9, value.g4r_1);
    tmp1_output.f3u(tmp0_desc, 10, value.h4r_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_24.prototype.w3p = function (encoder, value) {
    return this.w4q(encoder, value instanceof OrderResponse ? value : THROW_CCE());
  };
  $serializer_24.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function OrderResponse_init_$Init$(seen1, id, number, email, phone, address, note, state, sum, products, createAt, updateAt, serializationConstructorMarker, $this) {
    if (!(2047 === (2047 & seen1))) {
      throwMissingFieldException(seen1, 2047, $serializer_getInstance_24().v4q_1);
    }
    $this.x4q_1 = id;
    $this.y4q_1 = number;
    $this.z4q_1 = email;
    $this.a4r_1 = phone;
    $this.b4r_1 = address;
    $this.c4r_1 = note;
    $this.d4r_1 = state;
    $this.e4r_1 = sum;
    $this.f4r_1 = products;
    $this.g4r_1 = createAt;
    $this.h4r_1 = updateAt;
    return $this;
  }
  function OrderResponse_init_$Create$(seen1, id, number, email, phone, address, note, state, sum, products, createAt, updateAt, serializationConstructorMarker) {
    return OrderResponse_init_$Init$(seen1, id, number, email, phone, address, note, state, sum, products, createAt, updateAt, serializationConstructorMarker, Object.create(OrderResponse.prototype));
  }
  function OrderResponse(id, number, email, phone, address, note, state, sum, products, createAt, updateAt) {
    Companion_getInstance_29();
    this.x4q_1 = id;
    this.y4q_1 = number;
    this.z4q_1 = email;
    this.a4r_1 = phone;
    this.b4r_1 = address;
    this.c4r_1 = note;
    this.d4r_1 = state;
    this.e4r_1 = sum;
    this.f4r_1 = products;
    this.g4r_1 = createAt;
    this.h4r_1 = updateAt;
  }
  OrderResponse.prototype.w4n = function () {
    return this.x4q_1;
  };
  OrderResponse.prototype.i4r = function () {
    return this.y4q_1;
  };
  OrderResponse.prototype.n4i = function () {
    return this.z4q_1;
  };
  OrderResponse.prototype.z4k = function () {
    return this.a4r_1;
  };
  OrderResponse.prototype.r4l = function () {
    return this.b4r_1;
  };
  OrderResponse.prototype.j4l = function () {
    return this.c4r_1;
  };
  OrderResponse.prototype.dk = function () {
    return this.d4r_1;
  };
  OrderResponse.prototype.r4q = function () {
    return this.e4r_1;
  };
  OrderResponse.prototype.d4m = function () {
    return this.f4r_1;
  };
  OrderResponse.prototype.l4o = function () {
    return this.g4r_1;
  };
  OrderResponse.prototype.m4o = function () {
    return this.h4r_1;
  };
  OrderResponse.prototype.component1 = function () {
    return this.x4q_1;
  };
  OrderResponse.prototype.component2 = function () {
    return this.y4q_1;
  };
  OrderResponse.prototype.component3 = function () {
    return this.z4q_1;
  };
  OrderResponse.prototype.component4 = function () {
    return this.a4r_1;
  };
  OrderResponse.prototype.component5 = function () {
    return this.b4r_1;
  };
  OrderResponse.prototype.component6 = function () {
    return this.c4r_1;
  };
  OrderResponse.prototype.component7 = function () {
    return this.d4r_1;
  };
  OrderResponse.prototype.component8 = function () {
    return this.e4r_1;
  };
  OrderResponse.prototype.component9 = function () {
    return this.f4r_1;
  };
  OrderResponse.prototype.component10 = function () {
    return this.g4r_1;
  };
  OrderResponse.prototype.component11 = function () {
    return this.h4r_1;
  };
  OrderResponse.prototype.copy = function (id, number, email, phone, address, note, state, sum, products, createAt, updateAt) {
    return this.j4r(id === void 1 ? this.x4q_1 : id, number === void 1 ? this.y4q_1 : number, email === void 1 ? this.z4q_1 : email, phone === void 1 ? this.a4r_1 : phone, address === void 1 ? this.b4r_1 : address, note === void 1 ? this.c4r_1 : note, state === void 1 ? this.d4r_1 : state, sum === void 1 ? this.e4r_1 : sum, products === void 1 ? this.f4r_1 : products, createAt === void 1 ? this.g4r_1 : createAt, updateAt === void 1 ? this.h4r_1 : updateAt);
  };
  OrderResponse.prototype.j4r = function (id, number, email, phone, address, note, state, sum, products, createAt, updateAt) {
    return new OrderResponse(id, number, email, phone, address, note, state, sum, products, createAt, updateAt);
  };
  OrderResponse.prototype.k4r = function (id, number, email, phone, address, note, state, sum, products, createAt, updateAt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.x4q_1;
    if (!(($mask0 & 2) === 0))
      number = this.y4q_1;
    if (!(($mask0 & 4) === 0))
      email = this.z4q_1;
    if (!(($mask0 & 8) === 0))
      phone = this.a4r_1;
    if (!(($mask0 & 16) === 0))
      address = this.b4r_1;
    if (!(($mask0 & 32) === 0))
      note = this.c4r_1;
    if (!(($mask0 & 64) === 0))
      state = this.d4r_1;
    if (!(($mask0 & 128) === 0))
      sum = this.e4r_1;
    if (!(($mask0 & 256) === 0))
      products = this.f4r_1;
    if (!(($mask0 & 512) === 0))
      createAt = this.g4r_1;
    if (!(($mask0 & 1024) === 0))
      updateAt = this.h4r_1;
    return this.j4r(id, number, email, phone, address, note, state, sum, products, createAt, updateAt);
  };
  OrderResponse.prototype.toString = function () {
    return 'OrderResponse(id=' + this.x4q_1 + ', number=' + this.y4q_1 + ', email=' + this.z4q_1 + ', phone=' + this.a4r_1 + ', address=' + this.b4r_1 + ', note=' + this.c4r_1 + ', state=' + this.d4r_1 + ', sum=' + this.e4r_1 + ', products=' + toString(this.f4r_1) + ', createAt=' + this.g4r_1 + ', updateAt=' + this.h4r_1 + ')';
  };
  OrderResponse.prototype.hashCode = function () {
    var result = this.x4q_1;
    result = imul(result, 31) + getStringHashCode(this.y4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z4q_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a4r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b4r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c4r_1) | 0;
    result = imul(result, 31) + this.d4r_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.e4r_1) | 0;
    result = imul(result, 31) + hashCode(this.f4r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g4r_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h4r_1) | 0;
    return result;
  };
  OrderResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderResponse))
      return false;
    var tmp0_other_with_cast = other instanceof OrderResponse ? other : THROW_CCE();
    if (!(this.x4q_1 === tmp0_other_with_cast.x4q_1))
      return false;
    if (!(this.y4q_1 === tmp0_other_with_cast.y4q_1))
      return false;
    if (!(this.z4q_1 === tmp0_other_with_cast.z4q_1))
      return false;
    if (!(this.a4r_1 === tmp0_other_with_cast.a4r_1))
      return false;
    if (!(this.b4r_1 === tmp0_other_with_cast.b4r_1))
      return false;
    if (!(this.c4r_1 === tmp0_other_with_cast.c4r_1))
      return false;
    if (!this.d4r_1.equals(tmp0_other_with_cast.d4r_1))
      return false;
    if (!equals(this.e4r_1, tmp0_other_with_cast.e4r_1))
      return false;
    if (!equals(this.f4r_1, tmp0_other_with_cast.f4r_1))
      return false;
    if (!(this.g4r_1 === tmp0_other_with_cast.g4r_1))
      return false;
    if (!(this.h4r_1 === tmp0_other_with_cast.h4r_1))
      return false;
    return true;
  };
  OrderResponse.$metadata$ = classMeta('OrderResponse', undefined, undefined, {0: $serializer_getInstance_24});
  Object.defineProperty(OrderResponse.prototype, 'id', {
    configurable: true,
    get: OrderResponse.prototype.w4n
  });
  Object.defineProperty(OrderResponse.prototype, 'number', {
    configurable: true,
    get: OrderResponse.prototype.i4r
  });
  Object.defineProperty(OrderResponse.prototype, 'email', {
    configurable: true,
    get: OrderResponse.prototype.n4i
  });
  Object.defineProperty(OrderResponse.prototype, 'phone', {
    configurable: true,
    get: OrderResponse.prototype.z4k
  });
  Object.defineProperty(OrderResponse.prototype, 'address', {
    configurable: true,
    get: OrderResponse.prototype.r4l
  });
  Object.defineProperty(OrderResponse.prototype, 'note', {
    configurable: true,
    get: OrderResponse.prototype.j4l
  });
  Object.defineProperty(OrderResponse.prototype, 'state', {
    configurable: true,
    get: OrderResponse.prototype.dk
  });
  Object.defineProperty(OrderResponse.prototype, 'sum', {
    configurable: true,
    get: OrderResponse.prototype.r4q
  });
  Object.defineProperty(OrderResponse.prototype, 'products', {
    configurable: true,
    get: OrderResponse.prototype.d4m
  });
  Object.defineProperty(OrderResponse.prototype, 'createAt', {
    configurable: true,
    get: OrderResponse.prototype.l4o
  });
  Object.defineProperty(OrderResponse.prototype, 'updateAt', {
    configurable: true,
    get: OrderResponse.prototype.m4o
  });
  function OrderState_NEW_getInstance() {
    OrderState_initEntries();
    return OrderState_NEW_instance;
  }
  function OrderState_PENDING_getInstance() {
    OrderState_initEntries();
    return OrderState_PENDING_instance;
  }
  function OrderState_COMPLETED_getInstance() {
    OrderState_initEntries();
    return OrderState_COMPLETED_instance;
  }
  function OrderState_CANCELED_getInstance() {
    OrderState_initEntries();
    return OrderState_CANCELED_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
  }
  Companion_25.prototype.serializer = function () {
    return $serializer_getInstance_25();
  };
  Companion_25.$metadata$ = objectMeta('Companion');
  var Companion_instance_25;
  function Companion_getInstance_30() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.ProductCountResponse', this, 1);
    tmp0_serialDesc.o3z('count', false);
    this.l4r_1 = tmp0_serialDesc;
  }
  $serializer_25.prototype.v3p = function () {
    return this.l4r_1;
  };
  $serializer_25.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_25.prototype.x3p = function (decoder) {
    var tmp0_desc = this.l4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.s3s(tmp0_desc);
    if (tmp5_input.g3t()) {
      tmp4_local0 = tmp5_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.t3s(tmp0_desc);
    return ProductCountResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_25.prototype.m4r = function (encoder, value) {
    var tmp0_desc = this.l4r_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.n4r_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_25.prototype.w3p = function (encoder, value) {
    return this.m4r(encoder, value instanceof ProductCountResponse ? value : THROW_CCE());
  };
  $serializer_25.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function ProductCountResponse_init_$Init$(seen1, count, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_25().l4r_1);
    }
    $this.n4r_1 = count;
    return $this;
  }
  function ProductCountResponse_init_$Create$(seen1, count, serializationConstructorMarker) {
    return ProductCountResponse_init_$Init$(seen1, count, serializationConstructorMarker, Object.create(ProductCountResponse.prototype));
  }
  function ProductCountResponse(count) {
    Companion_getInstance_30();
    this.n4r_1 = count;
  }
  ProductCountResponse.prototype.m4m = function () {
    return this.n4r_1;
  };
  ProductCountResponse.prototype.component1 = function () {
    return this.n4r_1;
  };
  ProductCountResponse.prototype.copy = function (count) {
    return this.o4r(count === void 1 ? this.n4r_1 : count);
  };
  ProductCountResponse.prototype.o4r = function (count) {
    return new ProductCountResponse(count);
  };
  ProductCountResponse.prototype.p4r = function (count, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      count = this.n4r_1;
    return this.o4r(count);
  };
  ProductCountResponse.prototype.toString = function () {
    return 'ProductCountResponse(count=' + this.n4r_1 + ')';
  };
  ProductCountResponse.prototype.hashCode = function () {
    return this.n4r_1;
  };
  ProductCountResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductCountResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ProductCountResponse ? other : THROW_CCE();
    if (!(this.n4r_1 === tmp0_other_with_cast.n4r_1))
      return false;
    return true;
  };
  ProductCountResponse.$metadata$ = classMeta('ProductCountResponse', undefined, undefined, {0: $serializer_getInstance_25});
  Object.defineProperty(ProductCountResponse.prototype, 'count', {
    configurable: true,
    get: ProductCountResponse.prototype.m4m
  });
  function Companion_26() {
    Companion_instance_26 = this;
  }
  Companion_26.prototype.serializer = function () {
    return $serializer_getInstance_26();
  };
  Companion_26.$metadata$ = objectMeta('Companion');
  var Companion_instance_26;
  function Companion_getInstance_31() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.ProductPageResponse', this, 2);
    tmp0_serialDesc.o3z('pages', false);
    tmp0_serialDesc.o3z('products', false);
    this.q4r_1 = tmp0_serialDesc;
  }
  $serializer_26.prototype.v3p = function () {
    return this.q4r_1;
  };
  $serializer_26.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_26.prototype.x3p = function (decoder) {
    var tmp0_desc = this.q4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return ProductPageResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_26.prototype.r4r = function (encoder, value) {
    var tmp0_desc = this.q4r_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.s4r_1);
    tmp1_output.g3u(tmp0_desc, 1, new ReferenceArraySerializer(getKClass(ProductResponse), $serializer_getInstance_27()), value.t4r_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_26.prototype.w3p = function (encoder, value) {
    return this.r4r(encoder, value instanceof ProductPageResponse ? value : THROW_CCE());
  };
  $serializer_26.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function ProductPageResponse_init_$Init$(seen1, pages, products, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_26().q4r_1);
    }
    $this.s4r_1 = pages;
    $this.t4r_1 = products;
    return $this;
  }
  function ProductPageResponse_init_$Create$(seen1, pages, products, serializationConstructorMarker) {
    return ProductPageResponse_init_$Init$(seen1, pages, products, serializationConstructorMarker, Object.create(ProductPageResponse.prototype));
  }
  function ProductPageResponse(pages, products) {
    Companion_getInstance_31();
    this.s4r_1 = pages;
    this.t4r_1 = products;
  }
  ProductPageResponse.prototype.u4r = function () {
    return this.s4r_1;
  };
  ProductPageResponse.prototype.d4m = function () {
    return this.t4r_1;
  };
  ProductPageResponse.prototype.component1 = function () {
    return this.s4r_1;
  };
  ProductPageResponse.prototype.component2 = function () {
    return this.t4r_1;
  };
  ProductPageResponse.prototype.copy = function (pages, products) {
    return this.v4r(pages === void 1 ? this.s4r_1 : pages, products === void 1 ? this.t4r_1 : products);
  };
  ProductPageResponse.prototype.v4r = function (pages, products) {
    return new ProductPageResponse(pages, products);
  };
  ProductPageResponse.prototype.w4r = function (pages, products, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pages = this.s4r_1;
    if (!(($mask0 & 2) === 0))
      products = this.t4r_1;
    return this.v4r(pages, products);
  };
  ProductPageResponse.prototype.toString = function () {
    return 'ProductPageResponse(pages=' + this.s4r_1 + ', products=' + toString(this.t4r_1) + ')';
  };
  ProductPageResponse.prototype.hashCode = function () {
    var result = this.s4r_1;
    result = imul(result, 31) + hashCode(this.t4r_1) | 0;
    return result;
  };
  ProductPageResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductPageResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ProductPageResponse ? other : THROW_CCE();
    if (!(this.s4r_1 === tmp0_other_with_cast.s4r_1))
      return false;
    if (!equals(this.t4r_1, tmp0_other_with_cast.t4r_1))
      return false;
    return true;
  };
  ProductPageResponse.$metadata$ = classMeta('ProductPageResponse', undefined, undefined, {0: $serializer_getInstance_26});
  Object.defineProperty(ProductPageResponse.prototype, 'pages', {
    configurable: true,
    get: ProductPageResponse.prototype.u4r
  });
  Object.defineProperty(ProductPageResponse.prototype, 'products', {
    configurable: true,
    get: ProductPageResponse.prototype.d4m
  });
  function ProductResponse_init_$Init$(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      categories = null;
    if (!(($mask0 & 4096) === 0))
      collections = null;
    if (!(($mask0 & 8192) === 0))
      uploads = null;
    ProductResponse.call($this, id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads);
    return $this;
  }
  function ProductResponse_init_$Create$(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, $mask0, $marker) {
    return ProductResponse_init_$Init$(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, $mask0, $marker, Object.create(ProductResponse.prototype));
  }
  function Companion_27() {
    Companion_instance_27 = this;
  }
  Companion_27.prototype.serializer = function () {
    return $serializer_getInstance_27();
  };
  Companion_27.$metadata$ = objectMeta('Companion');
  var Companion_instance_27;
  function Companion_getInstance_32() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.ProductResponse', this, 14);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('category', false);
    tmp0_serialDesc.o3z('categories', true);
    tmp0_serialDesc.o3z('image1', false);
    tmp0_serialDesc.o3z('image2', false);
    tmp0_serialDesc.o3z('image3', false);
    tmp0_serialDesc.o3z('name', false);
    tmp0_serialDesc.o3z('description', false);
    tmp0_serialDesc.o3z('price', false);
    tmp0_serialDesc.o3z('isPublished', false);
    tmp0_serialDesc.o3z('createAt', false);
    tmp0_serialDesc.o3z('updateAt', false);
    tmp0_serialDesc.o3z('collections', true);
    tmp0_serialDesc.o3z('uploads', true);
    this.x4r_1 = tmp0_serialDesc;
  }
  $serializer_27.prototype.v3p = function () {
    return this.x4r_1;
  };
  $serializer_27.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), $serializer_getInstance_17(), get_nullable(new ReferenceArraySerializer(getKClass(CategoryResponse), $serializer_getInstance_17())), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), DoubleSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(new ReferenceArraySerializer(getKClass(CollectionResponse), $serializer_getInstance_18())), get_nullable(new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_27.prototype.x3p = function (decoder) {
    var tmp0_desc = this.x4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = 0.0;
    var tmp13_local9 = false;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_input = decoder.s3s(tmp0_desc);
    if (tmp18_input.g3t()) {
      tmp4_local0 = tmp18_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp18_input.d3t(tmp0_desc, 1, $serializer_getInstance_17(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp18_input.f3t(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(CategoryResponse), $serializer_getInstance_17()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp18_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp18_input.f3t(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp18_input.f3t(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp18_input.c3t(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp18_input.c3t(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp18_input.a3t(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp18_input.u3s(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp18_input.c3t(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp18_input.c3t(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp18_input.f3t(tmp0_desc, 12, new ReferenceArraySerializer(getKClass(CollectionResponse), $serializer_getInstance_18()), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp18_input.f3t(tmp0_desc, 13, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp18_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp18_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp18_input.d3t(tmp0_desc, 1, $serializer_getInstance_17(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp18_input.f3t(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(CategoryResponse), $serializer_getInstance_17()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp18_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp18_input.f3t(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp18_input.f3t(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp18_input.c3t(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp18_input.c3t(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp18_input.a3t(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp18_input.u3s(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp18_input.c3t(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp18_input.c3t(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp18_input.f3t(tmp0_desc, 12, new ReferenceArraySerializer(getKClass(CollectionResponse), $serializer_getInstance_18()), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp18_input.f3t(tmp0_desc, 13, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp18_input.t3s(tmp0_desc);
    return ProductResponse_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, null);
  };
  $serializer_27.prototype.y4r = function (encoder, value) {
    var tmp0_desc = this.x4r_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.z4r_1);
    tmp1_output.g3u(tmp0_desc, 1, $serializer_getInstance_17(), value.a4s_1);
    if (tmp1_output.m3u(tmp0_desc, 2) ? true : !(value.b4s_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 2, new ReferenceArraySerializer(getKClass(CategoryResponse), $serializer_getInstance_17()), value.b4s_1);
    }
    tmp1_output.f3u(tmp0_desc, 3, value.c4s_1);
    tmp1_output.i3u(tmp0_desc, 4, StringSerializer_getInstance(), value.d4s_1);
    tmp1_output.i3u(tmp0_desc, 5, StringSerializer_getInstance(), value.e4s_1);
    tmp1_output.f3u(tmp0_desc, 6, value.f4s_1);
    tmp1_output.f3u(tmp0_desc, 7, value.g4s_1);
    tmp1_output.d3u(tmp0_desc, 8, value.h4s_1);
    tmp1_output.x3t(tmp0_desc, 9, value.i4s_1);
    tmp1_output.f3u(tmp0_desc, 10, value.j4s_1);
    tmp1_output.f3u(tmp0_desc, 11, value.k4s_1);
    if (tmp1_output.m3u(tmp0_desc, 12) ? true : !(value.l4s_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 12, new ReferenceArraySerializer(getKClass(CollectionResponse), $serializer_getInstance_18()), value.l4s_1);
    }
    if (tmp1_output.m3u(tmp0_desc, 13) ? true : !(value.m4s_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 13, new ReferenceArraySerializer(getKClass(UploadResponse), $serializer_getInstance_29()), value.m4s_1);
    }
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_27.prototype.w3p = function (encoder, value) {
    return this.y4r(encoder, value instanceof ProductResponse ? value : THROW_CCE());
  };
  $serializer_27.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function ProductResponse_init_$Init$_0(seen1, id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, serializationConstructorMarker, $this) {
    if (!(4091 === (4091 & seen1))) {
      throwMissingFieldException(seen1, 4091, $serializer_getInstance_27().x4r_1);
    }
    $this.z4r_1 = id;
    $this.a4s_1 = category;
    if (0 === (seen1 & 4))
      $this.b4s_1 = null;
    else
      $this.b4s_1 = categories;
    $this.c4s_1 = image1;
    $this.d4s_1 = image2;
    $this.e4s_1 = image3;
    $this.f4s_1 = name;
    $this.g4s_1 = description;
    $this.h4s_1 = price;
    $this.i4s_1 = isPublished;
    $this.j4s_1 = createAt;
    $this.k4s_1 = updateAt;
    if (0 === (seen1 & 4096))
      $this.l4s_1 = null;
    else
      $this.l4s_1 = collections;
    if (0 === (seen1 & 8192))
      $this.m4s_1 = null;
    else
      $this.m4s_1 = uploads;
    return $this;
  }
  function ProductResponse_init_$Create$_0(seen1, id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, serializationConstructorMarker) {
    return ProductResponse_init_$Init$_0(seen1, id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, serializationConstructorMarker, Object.create(ProductResponse.prototype));
  }
  function ProductResponse(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads) {
    Companion_getInstance_32();
    var categories_0 = categories === void 1 ? null : categories;
    var collections_0 = collections === void 1 ? null : collections;
    var uploads_0 = uploads === void 1 ? null : uploads;
    this.z4r_1 = id;
    this.a4s_1 = category;
    this.b4s_1 = categories_0;
    this.c4s_1 = image1;
    this.d4s_1 = image2;
    this.e4s_1 = image3;
    this.f4s_1 = name;
    this.g4s_1 = description;
    this.h4s_1 = price;
    this.i4s_1 = isPublished;
    this.j4s_1 = createAt;
    this.k4s_1 = updateAt;
    this.l4s_1 = collections_0;
    this.m4s_1 = uploads_0;
  }
  ProductResponse.prototype.w4n = function () {
    return this.z4r_1;
  };
  ProductResponse.prototype.n4s = function () {
    return this.a4s_1;
  };
  ProductResponse.prototype.o4s = function () {
    return this.b4s_1;
  };
  ProductResponse.prototype.f4n = function () {
    return this.c4s_1;
  };
  ProductResponse.prototype.g4n = function () {
    return this.d4s_1;
  };
  ProductResponse.prototype.h4n = function () {
    return this.e4s_1;
  };
  ProductResponse.prototype.n4 = function () {
    return this.f4s_1;
  };
  ProductResponse.prototype.i4n = function () {
    return this.g4s_1;
  };
  ProductResponse.prototype.n4m = function () {
    return this.h4s_1;
  };
  ProductResponse.prototype.h4j = function () {
    return this.i4s_1;
  };
  ProductResponse.prototype.l4o = function () {
    return this.j4s_1;
  };
  ProductResponse.prototype.m4o = function () {
    return this.k4s_1;
  };
  ProductResponse.prototype.j4n = function () {
    return this.l4s_1;
  };
  ProductResponse.prototype.i4j = function () {
    return this.m4s_1;
  };
  ProductResponse.prototype.component1 = function () {
    return this.z4r_1;
  };
  ProductResponse.prototype.component2 = function () {
    return this.a4s_1;
  };
  ProductResponse.prototype.component3 = function () {
    return this.b4s_1;
  };
  ProductResponse.prototype.component4 = function () {
    return this.c4s_1;
  };
  ProductResponse.prototype.component5 = function () {
    return this.d4s_1;
  };
  ProductResponse.prototype.component6 = function () {
    return this.e4s_1;
  };
  ProductResponse.prototype.component7 = function () {
    return this.f4s_1;
  };
  ProductResponse.prototype.component8 = function () {
    return this.g4s_1;
  };
  ProductResponse.prototype.component9 = function () {
    return this.h4s_1;
  };
  ProductResponse.prototype.component10 = function () {
    return this.i4s_1;
  };
  ProductResponse.prototype.component11 = function () {
    return this.j4s_1;
  };
  ProductResponse.prototype.component12 = function () {
    return this.k4s_1;
  };
  ProductResponse.prototype.component13 = function () {
    return this.l4s_1;
  };
  ProductResponse.prototype.component14 = function () {
    return this.m4s_1;
  };
  ProductResponse.prototype.copy = function (id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads) {
    return this.p4s(id === void 1 ? this.z4r_1 : id, category === void 1 ? this.a4s_1 : category, categories === void 1 ? this.b4s_1 : categories, image1 === void 1 ? this.c4s_1 : image1, image2 === void 1 ? this.d4s_1 : image2, image3 === void 1 ? this.e4s_1 : image3, name === void 1 ? this.f4s_1 : name, description === void 1 ? this.g4s_1 : description, price === void 1 ? this.h4s_1 : price, isPublished === void 1 ? this.i4s_1 : isPublished, createAt === void 1 ? this.j4s_1 : createAt, updateAt === void 1 ? this.k4s_1 : updateAt, collections === void 1 ? this.l4s_1 : collections, uploads === void 1 ? this.m4s_1 : uploads);
  };
  ProductResponse.prototype.p4s = function (id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads) {
    return new ProductResponse(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads);
  };
  ProductResponse.prototype.q4s = function (id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.z4r_1;
    if (!(($mask0 & 2) === 0))
      category = this.a4s_1;
    if (!(($mask0 & 4) === 0))
      categories = this.b4s_1;
    if (!(($mask0 & 8) === 0))
      image1 = this.c4s_1;
    if (!(($mask0 & 16) === 0))
      image2 = this.d4s_1;
    if (!(($mask0 & 32) === 0))
      image3 = this.e4s_1;
    if (!(($mask0 & 64) === 0))
      name = this.f4s_1;
    if (!(($mask0 & 128) === 0))
      description = this.g4s_1;
    if (!(($mask0 & 256) === 0))
      price = this.h4s_1;
    if (!(($mask0 & 512) === 0))
      isPublished = this.i4s_1;
    if (!(($mask0 & 1024) === 0))
      createAt = this.j4s_1;
    if (!(($mask0 & 2048) === 0))
      updateAt = this.k4s_1;
    if (!(($mask0 & 4096) === 0))
      collections = this.l4s_1;
    if (!(($mask0 & 8192) === 0))
      uploads = this.m4s_1;
    return this.p4s(id, category, categories, image1, image2, image3, name, description, price, isPublished, createAt, updateAt, collections, uploads);
  };
  ProductResponse.prototype.toString = function () {
    return 'ProductResponse(id=' + this.z4r_1 + ', category=' + this.a4s_1 + ', categories=' + toString(this.b4s_1) + ', image1=' + this.c4s_1 + ', image2=' + this.d4s_1 + ', image3=' + this.e4s_1 + ', name=' + this.f4s_1 + ', description=' + this.g4s_1 + ', price=' + this.h4s_1 + ', isPublished=' + this.i4s_1 + ', createAt=' + this.j4s_1 + ', updateAt=' + this.k4s_1 + ', collections=' + toString(this.l4s_1) + ', uploads=' + toString(this.m4s_1) + ')';
  };
  ProductResponse.prototype.hashCode = function () {
    var result = this.z4r_1;
    result = imul(result, 31) + this.a4s_1.hashCode() | 0;
    result = imul(result, 31) + (this.b4s_1 == null ? 0 : hashCode(this.b4s_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.c4s_1) | 0;
    result = imul(result, 31) + (this.d4s_1 == null ? 0 : getStringHashCode(this.d4s_1)) | 0;
    result = imul(result, 31) + (this.e4s_1 == null ? 0 : getStringHashCode(this.e4s_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.f4s_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g4s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h4s_1) | 0;
    result = imul(result, 31) + (this.i4s_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.j4s_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k4s_1) | 0;
    result = imul(result, 31) + (this.l4s_1 == null ? 0 : hashCode(this.l4s_1)) | 0;
    result = imul(result, 31) + (this.m4s_1 == null ? 0 : hashCode(this.m4s_1)) | 0;
    return result;
  };
  ProductResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ProductResponse ? other : THROW_CCE();
    if (!(this.z4r_1 === tmp0_other_with_cast.z4r_1))
      return false;
    if (!this.a4s_1.equals(tmp0_other_with_cast.a4s_1))
      return false;
    if (!equals(this.b4s_1, tmp0_other_with_cast.b4s_1))
      return false;
    if (!(this.c4s_1 === tmp0_other_with_cast.c4s_1))
      return false;
    if (!(this.d4s_1 == tmp0_other_with_cast.d4s_1))
      return false;
    if (!(this.e4s_1 == tmp0_other_with_cast.e4s_1))
      return false;
    if (!(this.f4s_1 === tmp0_other_with_cast.f4s_1))
      return false;
    if (!(this.g4s_1 === tmp0_other_with_cast.g4s_1))
      return false;
    if (!equals(this.h4s_1, tmp0_other_with_cast.h4s_1))
      return false;
    if (!(this.i4s_1 === tmp0_other_with_cast.i4s_1))
      return false;
    if (!(this.j4s_1 === tmp0_other_with_cast.j4s_1))
      return false;
    if (!(this.k4s_1 === tmp0_other_with_cast.k4s_1))
      return false;
    if (!equals(this.l4s_1, tmp0_other_with_cast.l4s_1))
      return false;
    if (!equals(this.m4s_1, tmp0_other_with_cast.m4s_1))
      return false;
    return true;
  };
  ProductResponse.$metadata$ = classMeta('ProductResponse', undefined, undefined, {0: $serializer_getInstance_27});
  Object.defineProperty(ProductResponse.prototype, 'id', {
    configurable: true,
    get: ProductResponse.prototype.w4n
  });
  Object.defineProperty(ProductResponse.prototype, 'category', {
    configurable: true,
    get: ProductResponse.prototype.n4s
  });
  Object.defineProperty(ProductResponse.prototype, 'categories', {
    configurable: true,
    get: ProductResponse.prototype.o4s
  });
  Object.defineProperty(ProductResponse.prototype, 'image1', {
    configurable: true,
    get: ProductResponse.prototype.f4n
  });
  Object.defineProperty(ProductResponse.prototype, 'image2', {
    configurable: true,
    get: ProductResponse.prototype.g4n
  });
  Object.defineProperty(ProductResponse.prototype, 'image3', {
    configurable: true,
    get: ProductResponse.prototype.h4n
  });
  Object.defineProperty(ProductResponse.prototype, 'name', {
    configurable: true,
    get: ProductResponse.prototype.n4
  });
  Object.defineProperty(ProductResponse.prototype, 'description', {
    configurable: true,
    get: ProductResponse.prototype.i4n
  });
  Object.defineProperty(ProductResponse.prototype, 'price', {
    configurable: true,
    get: ProductResponse.prototype.n4m
  });
  Object.defineProperty(ProductResponse.prototype, 'isPublished', {
    configurable: true,
    get: ProductResponse.prototype.h4j
  });
  Object.defineProperty(ProductResponse.prototype, 'createAt', {
    configurable: true,
    get: ProductResponse.prototype.l4o
  });
  Object.defineProperty(ProductResponse.prototype, 'updateAt', {
    configurable: true,
    get: ProductResponse.prototype.m4o
  });
  Object.defineProperty(ProductResponse.prototype, 'collections', {
    configurable: true,
    get: ProductResponse.prototype.j4n
  });
  Object.defineProperty(ProductResponse.prototype, 'uploads', {
    configurable: true,
    get: ProductResponse.prototype.i4j
  });
  function Companion_28() {
    Companion_instance_28 = this;
  }
  Companion_28.prototype.serializer = function () {
    return $serializer_getInstance_28();
  };
  Companion_28.$metadata$ = objectMeta('Companion');
  var Companion_instance_28;
  function Companion_getInstance_33() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.ProductPricesResponse', this, 2);
    tmp0_serialDesc.o3z('min', false);
    tmp0_serialDesc.o3z('max', false);
    this.r4s_1 = tmp0_serialDesc;
  }
  $serializer_28.prototype.v3p = function () {
    return this.r4s_1;
  };
  $serializer_28.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [DoubleSerializer_getInstance(), DoubleSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_28.prototype.x3p = function (decoder) {
    var tmp0_desc = this.r4s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0.0;
    var tmp5_local1 = 0.0;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.a3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.a3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.a3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.a3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return ProductPricesResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_28.prototype.s4s = function (encoder, value) {
    var tmp0_desc = this.r4s_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.d3u(tmp0_desc, 0, value.t4s_1);
    tmp1_output.d3u(tmp0_desc, 1, value.u4s_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_28.prototype.w3p = function (encoder, value) {
    return this.s4s(encoder, value instanceof ProductPricesResponse ? value : THROW_CCE());
  };
  $serializer_28.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function ProductPricesResponse_init_$Init$(seen1, min, max, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_28().r4s_1);
    }
    $this.t4s_1 = min;
    $this.u4s_1 = max;
    return $this;
  }
  function ProductPricesResponse_init_$Create$(seen1, min, max, serializationConstructorMarker) {
    return ProductPricesResponse_init_$Init$(seen1, min, max, serializationConstructorMarker, Object.create(ProductPricesResponse.prototype));
  }
  function ProductPricesResponse(min, max) {
    Companion_getInstance_33();
    this.t4s_1 = min;
    this.u4s_1 = max;
  }
  ProductPricesResponse.prototype.v4s = function () {
    return this.t4s_1;
  };
  ProductPricesResponse.prototype.w4s = function () {
    return this.u4s_1;
  };
  ProductPricesResponse.prototype.component1 = function () {
    return this.t4s_1;
  };
  ProductPricesResponse.prototype.component2 = function () {
    return this.u4s_1;
  };
  ProductPricesResponse.prototype.copy = function (min, max) {
    return this.x4s(min === void 1 ? this.t4s_1 : min, max === void 1 ? this.u4s_1 : max);
  };
  ProductPricesResponse.prototype.x4s = function (min, max) {
    return new ProductPricesResponse(min, max);
  };
  ProductPricesResponse.prototype.y4s = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = this.t4s_1;
    if (!(($mask0 & 2) === 0))
      max = this.u4s_1;
    return this.x4s(min, max);
  };
  ProductPricesResponse.prototype.toString = function () {
    return 'ProductPricesResponse(min=' + this.t4s_1 + ', max=' + this.u4s_1 + ')';
  };
  ProductPricesResponse.prototype.hashCode = function () {
    var result = getNumberHashCode(this.t4s_1);
    result = imul(result, 31) + getNumberHashCode(this.u4s_1) | 0;
    return result;
  };
  ProductPricesResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProductPricesResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ProductPricesResponse ? other : THROW_CCE();
    if (!equals(this.t4s_1, tmp0_other_with_cast.t4s_1))
      return false;
    if (!equals(this.u4s_1, tmp0_other_with_cast.u4s_1))
      return false;
    return true;
  };
  ProductPricesResponse.$metadata$ = classMeta('ProductPricesResponse', undefined, undefined, {0: $serializer_getInstance_28});
  Object.defineProperty(ProductPricesResponse.prototype, 'min', {
    configurable: true,
    get: ProductPricesResponse.prototype.v4s
  });
  Object.defineProperty(ProductPricesResponse.prototype, 'max', {
    configurable: true,
    get: ProductPricesResponse.prototype.w4s
  });
  function Companion_29() {
    Companion_instance_29 = this;
  }
  Companion_29.prototype.serializer = function () {
    return $serializer_getInstance_29();
  };
  Companion_29.$metadata$ = objectMeta('Companion');
  var Companion_instance_29;
  function Companion_getInstance_34() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function $serializer_29() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.data.responses.UploadResponse', this, 5);
    tmp0_serialDesc.o3z('id', false);
    tmp0_serialDesc.o3z('fileName', false);
    tmp0_serialDesc.o3z('fileMime', false);
    tmp0_serialDesc.o3z('originalFileName', false);
    tmp0_serialDesc.o3z('createAt', false);
    this.z4s_1 = tmp0_serialDesc;
  }
  $serializer_29.prototype.v3p = function () {
    return this.z4s_1;
  };
  $serializer_29.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_29.prototype.x3p = function (decoder) {
    var tmp0_desc = this.z4s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.s3s(tmp0_desc);
    if (tmp9_input.g3t()) {
      tmp4_local0 = tmp9_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.c3t(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.c3t(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.c3t(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.c3t(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.t3s(tmp0_desc);
    return UploadResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_29.prototype.a4t = function (encoder, value) {
    var tmp0_desc = this.z4s_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.b4t_1);
    tmp1_output.f3u(tmp0_desc, 1, value.c4t_1);
    tmp1_output.f3u(tmp0_desc, 2, value.d4t_1);
    tmp1_output.f3u(tmp0_desc, 3, value.e4t_1);
    tmp1_output.f3u(tmp0_desc, 4, value.f4t_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_29.prototype.w3p = function (encoder, value) {
    return this.a4t(encoder, value instanceof UploadResponse ? value : THROW_CCE());
  };
  $serializer_29.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function UploadResponse_init_$Init$(seen1, id, fileName, fileMime, originalFileName, createAt, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1))) {
      throwMissingFieldException(seen1, 31, $serializer_getInstance_29().z4s_1);
    }
    $this.b4t_1 = id;
    $this.c4t_1 = fileName;
    $this.d4t_1 = fileMime;
    $this.e4t_1 = originalFileName;
    $this.f4t_1 = createAt;
    return $this;
  }
  function UploadResponse_init_$Create$(seen1, id, fileName, fileMime, originalFileName, createAt, serializationConstructorMarker) {
    return UploadResponse_init_$Init$(seen1, id, fileName, fileMime, originalFileName, createAt, serializationConstructorMarker, Object.create(UploadResponse.prototype));
  }
  function UploadResponse(id, fileName, fileMime, originalFileName, createAt) {
    Companion_getInstance_34();
    this.b4t_1 = id;
    this.c4t_1 = fileName;
    this.d4t_1 = fileMime;
    this.e4t_1 = originalFileName;
    this.f4t_1 = createAt;
  }
  UploadResponse.prototype.w4n = function () {
    return this.b4t_1;
  };
  UploadResponse.prototype.g4t = function () {
    return this.c4t_1;
  };
  UploadResponse.prototype.h4t = function () {
    return this.d4t_1;
  };
  UploadResponse.prototype.i4t = function () {
    return this.e4t_1;
  };
  UploadResponse.prototype.l4o = function () {
    return this.f4t_1;
  };
  UploadResponse.prototype.component1 = function () {
    return this.b4t_1;
  };
  UploadResponse.prototype.component2 = function () {
    return this.c4t_1;
  };
  UploadResponse.prototype.component3 = function () {
    return this.d4t_1;
  };
  UploadResponse.prototype.component4 = function () {
    return this.e4t_1;
  };
  UploadResponse.prototype.component5 = function () {
    return this.f4t_1;
  };
  UploadResponse.prototype.copy = function (id, fileName, fileMime, originalFileName, createAt) {
    return this.j4t(id === void 1 ? this.b4t_1 : id, fileName === void 1 ? this.c4t_1 : fileName, fileMime === void 1 ? this.d4t_1 : fileMime, originalFileName === void 1 ? this.e4t_1 : originalFileName, createAt === void 1 ? this.f4t_1 : createAt);
  };
  UploadResponse.prototype.j4t = function (id, fileName, fileMime, originalFileName, createAt) {
    return new UploadResponse(id, fileName, fileMime, originalFileName, createAt);
  };
  UploadResponse.prototype.k4t = function (id, fileName, fileMime, originalFileName, createAt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.b4t_1;
    if (!(($mask0 & 2) === 0))
      fileName = this.c4t_1;
    if (!(($mask0 & 4) === 0))
      fileMime = this.d4t_1;
    if (!(($mask0 & 8) === 0))
      originalFileName = this.e4t_1;
    if (!(($mask0 & 16) === 0))
      createAt = this.f4t_1;
    return this.j4t(id, fileName, fileMime, originalFileName, createAt);
  };
  UploadResponse.prototype.toString = function () {
    return 'UploadResponse(id=' + this.b4t_1 + ', fileName=' + this.c4t_1 + ', fileMime=' + this.d4t_1 + ', originalFileName=' + this.e4t_1 + ', createAt=' + this.f4t_1 + ')';
  };
  UploadResponse.prototype.hashCode = function () {
    var result = this.b4t_1;
    result = imul(result, 31) + getStringHashCode(this.c4t_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d4t_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e4t_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f4t_1) | 0;
    return result;
  };
  UploadResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UploadResponse))
      return false;
    var tmp0_other_with_cast = other instanceof UploadResponse ? other : THROW_CCE();
    if (!(this.b4t_1 === tmp0_other_with_cast.b4t_1))
      return false;
    if (!(this.c4t_1 === tmp0_other_with_cast.c4t_1))
      return false;
    if (!(this.d4t_1 === tmp0_other_with_cast.d4t_1))
      return false;
    if (!(this.e4t_1 === tmp0_other_with_cast.e4t_1))
      return false;
    if (!(this.f4t_1 === tmp0_other_with_cast.f4t_1))
      return false;
    return true;
  };
  UploadResponse.$metadata$ = classMeta('UploadResponse', undefined, undefined, {0: $serializer_getInstance_29});
  Object.defineProperty(UploadResponse.prototype, 'id', {
    configurable: true,
    get: UploadResponse.prototype.w4n
  });
  Object.defineProperty(UploadResponse.prototype, 'fileName', {
    configurable: true,
    get: UploadResponse.prototype.g4t
  });
  Object.defineProperty(UploadResponse.prototype, 'fileMime', {
    configurable: true,
    get: UploadResponse.prototype.h4t
  });
  Object.defineProperty(UploadResponse.prototype, 'originalFileName', {
    configurable: true,
    get: UploadResponse.prototype.i4t
  });
  Object.defineProperty(UploadResponse.prototype, 'createAt', {
    configurable: true,
    get: UploadResponse.prototype.l4o
  });
  function Companion_30() {
    Companion_instance_30 = this;
  }
  Companion_30.$metadata$ = objectMeta('Companion');
  var Companion_instance_30;
  function Companion_getInstance_35() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function $serializer_30() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.exception.ErrorResponse', this, 3);
    tmp0_serialDesc.o3z('code', false);
    tmp0_serialDesc.o3z('message', false);
    tmp0_serialDesc.o3z('validate', true);
    this.l4t_1 = tmp0_serialDesc;
  }
  $serializer_30.prototype.v3p = function () {
    return this.l4t_1;
  };
  $serializer_30.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(new ArrayListSerializer($serializer_getInstance_31()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_30.prototype.x3p = function (decoder) {
    var tmp0_desc = this.l4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.s3s(tmp0_desc);
    if (tmp7_input.g3t()) {
      tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.f3t(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_31()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x3s(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.c3t(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.f3t(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_31()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.t3s(tmp0_desc);
    return ErrorResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_30.prototype.m4t = function (encoder, value) {
    var tmp0_desc = this.l4t_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.a3u(tmp0_desc, 0, value.n4t_1);
    tmp1_output.f3u(tmp0_desc, 1, value.o4t_1);
    if (tmp1_output.m3u(tmp0_desc, 2) ? true : !(value.p4t_1 == null)) {
      tmp1_output.i3u(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_31()), value.p4t_1);
    }
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_30.prototype.w3p = function (encoder, value) {
    return this.m4t(encoder, value instanceof ErrorResponse ? value : THROW_CCE());
  };
  $serializer_30.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_30();
    return $serializer_instance_30;
  }
  function ErrorResponse_init_$Init$(seen1, code, message, validate, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_30().l4t_1);
    }
    $this.n4t_1 = code;
    $this.o4t_1 = message;
    if (0 === (seen1 & 4))
      $this.p4t_1 = null;
    else
      $this.p4t_1 = validate;
    return $this;
  }
  function ErrorResponse_init_$Create$(seen1, code, message, validate, serializationConstructorMarker) {
    return ErrorResponse_init_$Init$(seen1, code, message, validate, serializationConstructorMarker, Object.create(ErrorResponse.prototype));
  }
  function ErrorResponse(code, message, validate) {
    Companion_getInstance_35();
    this.n4t_1 = code;
    this.o4t_1 = message;
    this.p4t_1 = validate;
  }
  ErrorResponse.prototype.toString = function () {
    return 'ErrorResponse(code=' + this.n4t_1 + ', message=' + this.o4t_1 + ', validate=' + this.p4t_1 + ')';
  };
  ErrorResponse.prototype.hashCode = function () {
    var result = this.n4t_1;
    result = imul(result, 31) + getStringHashCode(this.o4t_1) | 0;
    result = imul(result, 31) + (this.p4t_1 == null ? 0 : hashCode(this.p4t_1)) | 0;
    return result;
  };
  ErrorResponse.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ErrorResponse))
      return false;
    var tmp0_other_with_cast = other instanceof ErrorResponse ? other : THROW_CCE();
    if (!(this.n4t_1 === tmp0_other_with_cast.n4t_1))
      return false;
    if (!(this.o4t_1 === tmp0_other_with_cast.o4t_1))
      return false;
    if (!equals(this.p4t_1, tmp0_other_with_cast.p4t_1))
      return false;
    return true;
  };
  ErrorResponse.$metadata$ = classMeta('ErrorResponse', undefined, undefined, {0: $serializer_getInstance_30});
  function ResponseException_init_$Init$(code, message, validate, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      validate = null;
    ResponseException.call($this, code, message, validate);
    return $this;
  }
  function ResponseException_init_$Create$(code, message, validate, $mask0, $marker) {
    var tmp = ResponseException_init_$Init$(code, message, validate, $mask0, $marker, Object.create(ResponseException.prototype));
    captureStack(tmp, ResponseException_init_$Create$);
    return tmp;
  }
  function ResponseException(code, message, validate) {
    var validate_0 = validate === void 1 ? null : validate;
    RuntimeException_init_$Init$(this);
    this.q4t_1 = code;
    this.r4t_1 = message;
    this.s4t_1 = validate_0;
    captureStack(this, ResponseException);
  }
  ResponseException.prototype.k2a = function () {
    return this.q4t_1;
  };
  ResponseException.prototype.j1 = function () {
    return this.r4t_1;
  };
  ResponseException.prototype.t4t = function () {
    return this.s4t_1;
  };
  ResponseException.prototype.component1 = function () {
    return this.q4t_1;
  };
  ResponseException.prototype.component2 = function () {
    return this.r4t_1;
  };
  ResponseException.prototype.component3 = function () {
    return this.s4t_1;
  };
  ResponseException.prototype.copy = function (code, message, validate) {
    return this.u4t(code === void 1 ? this.q4t_1 : code, message === void 1 ? this.r4t_1 : message, validate === void 1 ? this.s4t_1 : validate);
  };
  ResponseException.prototype.u4t = function (code, message, validate) {
    return new ResponseException(code, message, validate);
  };
  ResponseException.prototype.v4t = function (code, message, validate, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      code = this.q4t_1;
    if (!(($mask0 & 2) === 0))
      message = this.r4t_1;
    if (!(($mask0 & 4) === 0))
      validate = this.s4t_1;
    return this.u4t(code, message, validate);
  };
  ResponseException.prototype.toString = function () {
    return 'ResponseException(code=' + this.q4t_1 + ', message=' + this.r4t_1 + ', validate=' + toString(this.s4t_1) + ')';
  };
  ResponseException.prototype.hashCode = function () {
    var result = this.q4t_1;
    result = imul(result, 31) + getStringHashCode(this.r4t_1) | 0;
    result = imul(result, 31) + (this.s4t_1 == null ? 0 : hashCode(this.s4t_1)) | 0;
    return result;
  };
  ResponseException.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResponseException))
      return false;
    var tmp0_other_with_cast = other instanceof ResponseException ? other : THROW_CCE();
    if (!(this.q4t_1 === tmp0_other_with_cast.q4t_1))
      return false;
    if (!(this.r4t_1 === tmp0_other_with_cast.r4t_1))
      return false;
    if (!equals(this.s4t_1, tmp0_other_with_cast.s4t_1))
      return false;
    return true;
  };
  ResponseException.$metadata$ = classMeta('ResponseException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  Object.defineProperty(ResponseException.prototype, 'code', {
    configurable: true,
    get: ResponseException.prototype.k2a
  });
  Object.defineProperty(ResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  Object.defineProperty(ResponseException.prototype, 'validate', {
    configurable: true,
    get: ResponseException.prototype.t4t
  });
  function Companion_31() {
    Companion_instance_31 = this;
  }
  Companion_31.prototype.serializer = function () {
    return $serializer_getInstance_31();
  };
  Companion_31.$metadata$ = objectMeta('Companion');
  var Companion_instance_31;
  function Companion_getInstance_36() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function $serializer_31() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.keygenqt.shop.exception.ValidateViolation', this, 2);
    tmp0_serialDesc.o3z('filed', false);
    tmp0_serialDesc.o3z('errors', false);
    this.w4t_1 = tmp0_serialDesc;
  }
  $serializer_31.prototype.v3p = function () {
    return this.w4t_1;
  };
  $serializer_31.prototype.q3z = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_31.prototype.x3p = function (decoder) {
    var tmp0_desc = this.w4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.s3s(tmp0_desc);
    if (tmp6_input.g3t()) {
      tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.h3t(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c3t(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.d3t(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.t3s(tmp0_desc);
    return ValidateViolation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_31.prototype.x4t = function (encoder, value) {
    var tmp0_desc = this.w4t_1;
    var tmp1_output = encoder.s3s(tmp0_desc);
    tmp1_output.f3u(tmp0_desc, 0, value.y4t_1);
    tmp1_output.g3u(tmp0_desc, 1, new ReferenceArraySerializer(PrimitiveClasses_getInstance().gf(), StringSerializer_getInstance()), value.z4t_1);
    tmp1_output.t3s(tmp0_desc);
  };
  $serializer_31.prototype.w3p = function (encoder, value) {
    return this.x4t(encoder, value instanceof ValidateViolation ? value : THROW_CCE());
  };
  $serializer_31.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_31();
    return $serializer_instance_31;
  }
  function ValidateViolation_init_$Init$(seen1, filed, errors, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_31().w4t_1);
    }
    $this.y4t_1 = filed;
    $this.z4t_1 = errors;
    return $this;
  }
  function ValidateViolation_init_$Create$(seen1, filed, errors, serializationConstructorMarker) {
    return ValidateViolation_init_$Init$(seen1, filed, errors, serializationConstructorMarker, Object.create(ValidateViolation.prototype));
  }
  function ValidateViolation(filed, errors) {
    Companion_getInstance_36();
    this.y4t_1 = filed;
    this.z4t_1 = errors;
  }
  ValidateViolation.prototype.a4u = function () {
    return this.y4t_1;
  };
  ValidateViolation.prototype.b4u = function () {
    return this.z4t_1;
  };
  ValidateViolation.prototype.component1 = function () {
    return this.y4t_1;
  };
  ValidateViolation.prototype.component2 = function () {
    return this.z4t_1;
  };
  ValidateViolation.prototype.copy = function (filed, errors) {
    return this.c4u(filed === void 1 ? this.y4t_1 : filed, errors === void 1 ? this.z4t_1 : errors);
  };
  ValidateViolation.prototype.c4u = function (filed, errors) {
    return new ValidateViolation(filed, errors);
  };
  ValidateViolation.prototype.d4u = function (filed, errors, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      filed = this.y4t_1;
    if (!(($mask0 & 2) === 0))
      errors = this.z4t_1;
    return this.c4u(filed, errors);
  };
  ValidateViolation.prototype.toString = function () {
    return 'ValidateViolation(filed=' + this.y4t_1 + ', errors=' + toString(this.z4t_1) + ')';
  };
  ValidateViolation.prototype.hashCode = function () {
    var result = getStringHashCode(this.y4t_1);
    result = imul(result, 31) + hashCode(this.z4t_1) | 0;
    return result;
  };
  ValidateViolation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValidateViolation))
      return false;
    var tmp0_other_with_cast = other instanceof ValidateViolation ? other : THROW_CCE();
    if (!(this.y4t_1 === tmp0_other_with_cast.y4t_1))
      return false;
    if (!equals(this.z4t_1, tmp0_other_with_cast.z4t_1))
      return false;
    return true;
  };
  ValidateViolation.$metadata$ = classMeta('ValidateViolation', undefined, undefined, {0: $serializer_getInstance_31});
  Object.defineProperty(ValidateViolation.prototype, 'filed', {
    configurable: true,
    get: ValidateViolation.prototype.a4u
  });
  Object.defineProperty(ValidateViolation.prototype, 'errors', {
    configurable: true,
    get: ValidateViolation.prototype.b4u
  });
  function ServiceRequest_init_$Init$(apiUrl, logger, debug, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      apiUrl = null;
    if (!(($mask0 & 2) === 0))
      logger = null;
    if (!(($mask0 & 4) === 0))
      debug = true;
    ServiceRequest.call($this, apiUrl, logger, debug);
    return $this;
  }
  function ServiceRequest_init_$Create$(apiUrl, logger, debug, $mask0, $marker) {
    return ServiceRequest_init_$Init$(apiUrl, logger, debug, $mask0, $marker, Object.create(ServiceRequest.prototype));
  }
  function ServiceRequest$get$delegate$lambda(this$0) {
    return function () {
      return new GetRequest(this$0.m4u_1);
    };
  }
  function ServiceRequest$put$delegate$lambda(this$0) {
    return function () {
      return new PutRequest(this$0.m4u_1);
    };
  }
  function ServiceRequest$post$delegate$lambda(this$0) {
    return function () {
      return new PostRequest(this$0.m4u_1);
    };
  }
  function ServiceRequest$delete$delegate$lambda(this$0) {
    return function () {
      return new DeleteRequest(this$0.m4u_1);
    };
  }
  function ServiceRequest$json$lambda($this$Json) {
    $this$Json.w49_1 = true;
    $this$Json.u49_1 = true;
    $this$Json.t49_1 = true;
    return Unit_getInstance();
  }
  function ServiceRequest$httpClient$lambda$lambda($this$HttpResponseValidator) {
    $this$HttpResponseValidator.w2p(ServiceRequest$httpClient$lambda$lambda$slambda_0(null));
    return Unit_getInstance();
  }
  function ServiceRequest$httpClient$lambda$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype.r2p = function (response, $cont) {
    var tmp = this.s2p(response, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype.th = function (p1, $cont) {
    return this.r2p(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            if (!this.v4u_1.k28().equals(Companion_getInstance().q23_1)) {
              this.jh_1 = 2;
              var tmp_0 = this.v4u_1.a2j();
              var tmp_1 = JsType_getInstance();
              var tmp_2 = getKClass(ErrorResponse);
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(ErrorResponse), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              suspendResult = tmp_0.e2i(typeInfoImpl(tmp_1, tmp_2, tmp_3), this);
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
            return Unit_getInstance();
          case 2:
            var error = suspendResult instanceof ErrorResponse ? suspendResult : THROW_CCE();
            var tmp_5 = this.v4u_1.k28().p25_1;
            var tmp0_safe_receiver = error.p4t_1;
            var tmp_6;
            if (tmp0_safe_receiver == null) {
              tmp_6 = null;
            } else {
              tmp_6 = copyToArray(tmp0_safe_receiver);
            }

            throw new ResponseException(tmp_5, error.o4t_1, tmp_6);
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
  ServiceRequest$httpClient$lambda$lambda$slambda.prototype.s2p = function (response, completion) {
    var i = new ServiceRequest$httpClient$lambda$lambda$slambda(completion);
    i.v4u_1 = response;
    return i;
  };
  ServiceRequest$httpClient$lambda$lambda$slambda.$metadata$ = classMeta('ServiceRequest$httpClient$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ServiceRequest$httpClient$lambda$lambda$slambda_0(resultContinuation) {
    var i = new ServiceRequest$httpClient$lambda$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.r2p(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ServiceRequest$httpClient$lambda$lambda_0(this$0) {
    return function ($this$install) {
      var tmp = $this$install;
      var tmp0_elvis_lhs = this$0.f4u_1;
      tmp.b3l_1 = tmp0_elvis_lhs == null ? get_DEFAULT(Companion_getInstance_0()) : tmp0_elvis_lhs;
      $this$install.c3l_1 = LogLevel_ALL_getInstance();
      return Unit_getInstance();
    };
  }
  function ServiceRequest$httpClient$lambda$lambda_1(this$0) {
    return function ($this$install) {
      var tmp0_safe_receiver = this$0.e4u_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$install.t2o(tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
        tmp = Unit_getInstance();
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        AppConstants_getInstance().x4u_1;
        $this$install.t2o('http://localhost:8086/');
        tmp$ret$1 = Unit_getInstance();
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = Unit_getInstance();
      }
      contentType($this$install, Application_getInstance().r1w_1);
      return Unit_getInstance();
    };
  }
  function ServiceRequest$httpClient$lambda$lambda_2(this$0) {
    return function ($this$install) {
      json$default($this$install, this$0.l4u_1, null, 2, null);
      return Unit_getInstance();
    };
  }
  function ServiceRequest$httpClient$lambda(this$0) {
    return function ($this$httpClient) {
      $this$httpClient.f2g_1 = false;
      HttpResponseValidator($this$httpClient, ServiceRequest$httpClient$lambda$lambda);
      var tmp;
      if (this$0.g4u_1) {
        var tmp_0 = Companion_getInstance_1();
        $this$httpClient.a2h(tmp_0, ServiceRequest$httpClient$lambda$lambda_0(this$0));
        tmp = Unit_getInstance();
      }
      var tmp_1 = Plugin_getInstance();
      $this$httpClient.a2h(tmp_1, ServiceRequest$httpClient$lambda$lambda_1(this$0));
      var tmp_2 = Plugin_getInstance_0();
      $this$httpClient.a2h(tmp_2, ServiceRequest$httpClient$lambda$lambda_2(this$0));
      return Unit_getInstance();
    };
  }
  function ServiceRequest(apiUrl, logger, debug) {
    this.e4u_1 = apiUrl;
    this.f4u_1 = logger;
    this.g4u_1 = debug;
    var tmp = this;
    tmp.h4u_1 = lazy(ServiceRequest$get$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.i4u_1 = lazy(ServiceRequest$put$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.j4u_1 = lazy(ServiceRequest$post$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.k4u_1 = lazy(ServiceRequest$delete$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.l4u_1 = Json$default(null, ServiceRequest$json$lambda, 1, null);
    var tmp_4 = this;
    tmp_4.m4u_1 = httpClient(ServiceRequest$httpClient$lambda(this));
  }
  ServiceRequest.prototype.z4u = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = get$factory();
    tmp$ret$0 = this.h4u_1.t();
    return tmp$ret$0;
  };
  ServiceRequest.prototype.a4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = put$factory();
    tmp$ret$0 = this.i4u_1.t();
    return tmp$ret$0;
  };
  ServiceRequest.prototype.b4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = post$factory();
    tmp$ret$0 = this.j4u_1.t();
    return tmp$ret$0;
  };
  ServiceRequest.prototype.c4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = delete$factory();
    tmp$ret$0 = this.k4u_1.t();
    return tmp$ret$0;
  };
  ServiceRequest.$metadata$ = classMeta('ServiceRequest');
  function get$factory() {
    return getPropertyCallableRef('get', 1, KProperty1, function (receiver) {
      return receiver.z4u();
    }, null);
  }
  function put$factory() {
    return getPropertyCallableRef('put', 1, KProperty1, function (receiver) {
      return receiver.a4v();
    }, null);
  }
  function post$factory() {
    return getPropertyCallableRef('post', 1, KProperty1, function (receiver) {
      return receiver.b4v();
    }, null);
  }
  function delete$factory() {
    return getPropertyCallableRef('delete', 1, KProperty1, function (receiver) {
      return receiver.c4v();
    }, null);
  }
  function $logoutCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l4v_1 = _this__u8e3s4;
  }
  $logoutCOROUTINE$0.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            var tmp_0 = this;
            tmp_0.m4v_1 = this.l4v_1.o4v_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/logout');
            ;
            tmp_1.n4v_1 = tmp0_apply;
            this.n4v_1.u2f_1 = Companion_getInstance_2().a23_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.n4v_1, this.m4v_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  $logoutCOROUTINE$0.$metadata$ = classMeta('$logoutCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $adminCOROUTINE$1(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4v_1 = _this__u8e3s4;
    this.y4v_1 = id;
  }
  $adminCOROUTINE$1.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            var tmp_0 = this;
            tmp_0.z4v_1 = this.x4v_1.o4v_1;
            var tmp_1 = this;
            tmp_1.a4w_1 = 'api/admins/' + this.y4v_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.a4w_1);
            ;
            tmp_2.b4w_1 = tmp0_apply;
            this.b4w_1.u2f_1 = Companion_getInstance_2().a23_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.b4w_1, this.z4v_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  $adminCOROUTINE$1.$metadata$ = classMeta('$adminCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DeleteRequest(client) {
    this.o4v_1 = client;
  }
  DeleteRequest.prototype.c4w = function ($cont) {
    var tmp = new $logoutCOROUTINE$0(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  DeleteRequest.prototype.d4w = function (id, $cont) {
    var tmp = new $adminCOROUTINE$1(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  DeleteRequest.$metadata$ = classMeta('DeleteRequest');
  function GetRequest$productsPublished$lambda($page, $order, $range, $categories, $collections) {
    return function ($this$url, it) {
      $this$url.k26_1.c1s('page', $page.toString());
      $this$url.k26_1.c1s('order', $order);
      var tmp = $this$url.k26_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$($range.length);
      var indexedObject = $range;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsPublished.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.toString();
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp.x1r('range', tmp$ret$2);
      var tmp_0 = $this$url.k26_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$($categories.length);
      var indexedObject_0 = $categories;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$3;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsPublished.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = item_0.toString();
        tmp0_mapTo_0.b(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp_0.x1r('categories', tmp$ret$5);
      var tmp_1 = $this$url.k26_1;
      var tmp$ret$8;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$($collections.length);
      var indexedObject_1 = $collections;
      var inductionVariable_1 = 0;
      var last_1 = indexedObject_1.length;
      while (inductionVariable_1 < last_1) {
        var item_1 = indexedObject_1[inductionVariable_1];
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp$ret$6;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsPublished.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$6 = item_1.toString();
        tmp0_mapTo_1.b(tmp$ret$6);
      }
      tmp$ret$7 = tmp0_mapTo_1;
      tmp$ret$8 = tmp$ret$7;
      tmp_1.x1r('collections', tmp$ret$8);
      return Unit_getInstance();
    };
  }
  function GetRequest$productsCountPublished$lambda($categories, $collections) {
    return function ($this$url, it) {
      var tmp = $this$url.k26_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$($categories.length);
      var indexedObject = $categories;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsCountPublished.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.toString();
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp.x1r('categories', tmp$ret$2);
      var tmp_0 = $this$url.k26_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$($collections.length);
      var indexedObject_0 = $collections;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$3;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsCountPublished.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = item_0.toString();
        tmp0_mapTo_0.b(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp_0.x1r('collections', tmp$ret$5);
      return Unit_getInstance();
    };
  }
  function GetRequest$productsPublishedByIDs$lambda($ids) {
    return function ($this$url, it) {
      var tmp = $this$url.k26_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$($ids.length);
      var indexedObject = $ids;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.productsPublishedByIDs.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.toString();
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp.x1r('ids', tmp$ret$2);
      return Unit_getInstance();
    };
  }
  function GetRequest$prices$lambda($categories, $collections) {
    return function ($this$url, it) {
      var tmp = $this$url.k26_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$($categories.length);
      var indexedObject = $categories;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.prices.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.toString();
        tmp0_mapTo.b(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp.x1r('categories', tmp$ret$2);
      var tmp_0 = $this$url.k26_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$($collections.length);
      var indexedObject_0 = $collections;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$3;
        // Inline function 'com.keygenqt.shop.services.impl.GetRequest.prices.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$3 = item_0.toString();
        tmp0_mapTo_0.b(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      tmp_0.x1r('collections', tmp$ret$5);
      return Unit_getInstance();
    };
  }
  function $categoriesCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m4w_1 = _this__u8e3s4;
  }
  $categoriesCOROUTINE$2.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.n4w_1 = this.m4w_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/categories');
            ;
            tmp_1.o4w_1 = tmp0_apply;
            this.o4w_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.o4w_1, this.n4w_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p4w_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.p4w_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CategoryResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $categoriesCOROUTINE$2.$metadata$ = classMeta('$categoriesCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $categoriesPublishedCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4w_1 = _this__u8e3s4;
  }
  $categoriesPublishedCOROUTINE$3.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.a4x_1 = this.z4w_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/categories/published');
            ;
            tmp_1.b4x_1 = tmp0_apply;
            this.b4x_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.b4x_1, this.a4x_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c4x_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.c4x_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CategoryResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $categoriesPublishedCOROUTINE$3.$metadata$ = classMeta('$categoriesPublishedCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $categoryCOROUTINE$4(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l4x_1 = _this__u8e3s4;
    this.m4x_1 = id;
  }
  $categoryCOROUTINE$4.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.n4x_1 = this.l4x_1.q4w_1;
            var tmp_1 = this;
            tmp_1.o4x_1 = 'api/categories/' + this.m4x_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.o4x_1);
            ;
            tmp_2.p4x_1 = tmp0_apply;
            this.p4x_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.p4x_1, this.n4x_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q4x_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.q4x_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(CategoryResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(CategoryResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CategoryResponse ? suspendResult : THROW_CCE();
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
  $categoryCOROUTINE$4.$metadata$ = classMeta('$categoryCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionsCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4x_1 = _this__u8e3s4;
  }
  $collectionsCOROUTINE$5.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.a4y_1 = this.z4x_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/collections');
            ;
            tmp_1.b4y_1 = tmp0_apply;
            this.b4y_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.b4y_1, this.a4y_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c4y_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.c4y_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CollectionResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $collectionsCOROUTINE$5.$metadata$ = classMeta('$collectionsCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionsPublishedCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l4y_1 = _this__u8e3s4;
  }
  $collectionsPublishedCOROUTINE$6.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.m4y_1 = this.l4y_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/collections/published');
            ;
            tmp_1.n4y_1 = tmp0_apply;
            this.n4y_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.n4y_1, this.m4y_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o4y_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.o4y_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(CollectionResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $collectionsPublishedCOROUTINE$6.$metadata$ = classMeta('$collectionsPublishedCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionCOROUTINE$7(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4y_1 = _this__u8e3s4;
    this.y4y_1 = id;
  }
  $collectionCOROUTINE$7.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.z4y_1 = this.x4y_1.q4w_1;
            var tmp_1 = this;
            tmp_1.a4z_1 = 'api/collections/' + this.y4y_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.a4z_1);
            ;
            tmp_2.b4z_1 = tmp0_apply;
            this.b4z_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.b4z_1, this.z4y_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c4z_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.c4z_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(CollectionResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(CollectionResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CollectionResponse ? suspendResult : THROW_CCE();
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
  $collectionCOROUTINE$7.$metadata$ = classMeta('$collectionCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $messagesCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l4z_1 = _this__u8e3s4;
  }
  $messagesCOROUTINE$8.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.m4z_1 = this.l4z_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/messages');
            ;
            tmp_1.n4z_1 = tmp0_apply;
            this.n4z_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.n4z_1, this.m4z_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o4z_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.o4z_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(MessageResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $messagesCOROUTINE$8.$metadata$ = classMeta('$messagesCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $messageCOROUTINE$9(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4z_1 = _this__u8e3s4;
    this.y4z_1 = id;
  }
  $messageCOROUTINE$9.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.z4z_1 = this.x4z_1.q4w_1;
            var tmp_1 = this;
            tmp_1.a50_1 = 'api/messages/' + this.y4z_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.a50_1);
            ;
            tmp_2.b50_1 = tmp0_apply;
            this.b50_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.b50_1, this.z4z_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c50_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.c50_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(MessageResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(MessageResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof MessageResponse ? suspendResult : THROW_CCE();
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
  $messageCOROUTINE$9.$metadata$ = classMeta('$messageCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productsCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l50_1 = _this__u8e3s4;
  }
  $productsCOROUTINE$10.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.m50_1 = this.l50_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products');
            ;
            tmp_1.n50_1 = tmp0_apply;
            this.n50_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.n50_1, this.m50_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o50_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.o50_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProductResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $productsCOROUTINE$10.$metadata$ = classMeta('$productsCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productsPublishedCOROUTINE$11(_this__u8e3s4, page, order, range, categories, collections, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x50_1 = _this__u8e3s4;
    this.y50_1 = page;
    this.z50_1 = order;
    this.a51_1 = range;
    this.b51_1 = categories;
    this.c51_1 = collections;
  }
  $productsPublishedCOROUTINE$11.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.d51_1 = this.x50_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products/published');
            tmp0_apply.j34(GetRequest$productsPublished$lambda(this.y50_1, this.z50_1, this.a51_1, this.b51_1, this.c51_1));
            ;
            tmp_1.e51_1 = tmp0_apply;
            this.e51_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e51_1, this.d51_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f51_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.f51_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(ProductPageResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ProductPageResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductPageResponse ? suspendResult : THROW_CCE();
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
  $productsPublishedCOROUTINE$11.$metadata$ = classMeta('$productsPublishedCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productsCountPublishedCOROUTINE$12(_this__u8e3s4, categories, collections, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o51_1 = _this__u8e3s4;
    this.p51_1 = categories;
    this.q51_1 = collections;
  }
  $productsCountPublishedCOROUTINE$12.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.r51_1 = this.o51_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products/published/count');
            tmp0_apply.j34(GetRequest$productsCountPublished$lambda(this.p51_1, this.q51_1));
            ;
            tmp_1.s51_1 = tmp0_apply;
            this.s51_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.s51_1, this.r51_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t51_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.t51_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(ProductCountResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ProductCountResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductCountResponse ? suspendResult : THROW_CCE();
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
  $productsCountPublishedCOROUTINE$12.$metadata$ = classMeta('$productsCountPublishedCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productsPurchasedCOROUTINE$13(_this__u8e3s4, excludeID, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c52_1 = _this__u8e3s4;
    this.d52_1 = excludeID;
  }
  $productsPurchasedCOROUTINE$13.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.e52_1 = this.c52_1.q4w_1;
            var tmp_1 = this;
            tmp_1.f52_1 = 'api/products/purchased/' + this.d52_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.f52_1);
            ;
            tmp_2.g52_1 = tmp0_apply;
            this.g52_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.g52_1, this.e52_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h52_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.h52_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProductResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $productsPurchasedCOROUTINE$13.$metadata$ = classMeta('$productsPurchasedCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productsPublishedByIDsCOROUTINE$14(_this__u8e3s4, ids, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q52_1 = _this__u8e3s4;
    this.r52_1 = ids;
  }
  $productsPublishedByIDsCOROUTINE$14.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.s52_1 = this.q52_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products/published/by-ids');
            tmp0_apply.j34(GetRequest$productsPublishedByIDs$lambda(this.r52_1));
            ;
            tmp_1.t52_1 = tmp0_apply;
            this.t52_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.t52_1, this.s52_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u52_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.u52_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProductResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $productsPublishedByIDsCOROUTINE$14.$metadata$ = classMeta('$productsPublishedByIDsCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productCOROUTINE$15(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d53_1 = _this__u8e3s4;
    this.e53_1 = id;
  }
  $productCOROUTINE$15.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.f53_1 = this.d53_1.q4w_1;
            var tmp_1 = this;
            tmp_1.g53_1 = 'api/products/' + this.e53_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.g53_1);
            ;
            tmp_2.h53_1 = tmp0_apply;
            this.h53_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.h53_1, this.f53_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i53_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.i53_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(ProductResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(ProductResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductResponse ? suspendResult : THROW_CCE();
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
  $productCOROUTINE$15.$metadata$ = classMeta('$productCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $pricesCOROUTINE$16(_this__u8e3s4, categories, collections, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r53_1 = _this__u8e3s4;
    this.s53_1 = categories;
    this.t53_1 = collections;
  }
  $pricesCOROUTINE$16.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.u53_1 = this.r53_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products/prices');
            tmp0_apply.j34(GetRequest$prices$lambda(this.s53_1, this.t53_1));
            ;
            tmp_1.v53_1 = tmp0_apply;
            this.v53_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.v53_1, this.u53_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w53_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.w53_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(ProductPricesResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ProductPricesResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductPricesResponse ? suspendResult : THROW_CCE();
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
  $pricesCOROUTINE$16.$metadata$ = classMeta('$pricesCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $ordersCOROUTINE$17(_this__u8e3s4, filter, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f54_1 = _this__u8e3s4;
    this.g54_1 = filter;
  }
  $ordersCOROUTINE$17.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 10;
            this.h54_1 = this.g54_1;
            this.i54_1 = this.h54_1.m4_1;
            if (this.i54_1 === 0) {
              var tmp_0 = this;
              tmp_0.k54_1 = this.f54_1.q4w_1;
              var tmp_1 = this;
              var tmp0_apply = new HttpRequestBuilder();
              url(tmp0_apply, 'api/orders/new');
              tmp_1.l54_1 = tmp0_apply;
              this.l54_1.u2f_1 = Companion_getInstance_2().w22_1;
              this.jh_1 = 7;
              suspendResult = (new HttpStatement(this.l54_1, this.k54_1)).c3b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.i54_1 === 1) {
                var tmp_2 = this;
                tmp_2.m54_1 = this.f54_1.q4w_1;
                var tmp_3 = this;
                var tmp0_apply_0 = new HttpRequestBuilder();
                url(tmp0_apply_0, 'api/orders/pending');
                tmp_3.n54_1 = tmp0_apply_0;
                this.n54_1.u2f_1 = Companion_getInstance_2().w22_1;
                this.jh_1 = 5;
                suspendResult = (new HttpStatement(this.n54_1, this.m54_1)).c3b(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.i54_1 === 2) {
                  var tmp_4 = this;
                  tmp_4.o54_1 = this.f54_1.q4w_1;
                  var tmp_5 = this;
                  var tmp0_apply_1 = new HttpRequestBuilder();
                  url(tmp0_apply_1, 'api/orders/completed');
                  tmp_5.p54_1 = tmp0_apply_1;
                  this.p54_1.u2f_1 = Companion_getInstance_2().w22_1;
                  this.jh_1 = 3;
                  suspendResult = (new HttpStatement(this.p54_1, this.o54_1)).c3b(this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.i54_1 === 3) {
                    var tmp_6 = this;
                    tmp_6.q54_1 = this.f54_1.q4w_1;
                    var tmp_7 = this;
                    var tmp0_apply_2 = new HttpRequestBuilder();
                    url(tmp0_apply_2, 'api/orders/canceled');
                    tmp_7.r54_1 = tmp0_apply_2;
                    this.r54_1.u2f_1 = Companion_getInstance_2().w22_1;
                    this.jh_1 = 1;
                    suspendResult = (new HttpStatement(this.r54_1, this.q54_1)).c3b(this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_8 = this;
                    noWhenBranchMatchedException();
                  }
                }
              }
            }

            break;
          case 1:
            this.s54_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_9 = this.s54_1.a2j();
            var tmp_10 = JsType_getInstance();
            var tmp_11 = getKClass(List);
            var tmp_12;
            try {
              tmp_12 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(OrderResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_13;
              if ($p instanceof Error) {
                tmp_13 = null;
              } else {
                throw $p;
              }
              tmp_12 = tmp_13;
            }

            suspendResult = tmp_9.e2i(typeInfoImpl(tmp_10, tmp_11, tmp_12), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_14 = this;
            tmp_14.j54_1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.jh_1 = 9;
            continue $sm;
          case 3:
            this.t54_1 = suspendResult;
            this.jh_1 = 4;
            var tmp_15 = this.t54_1.a2j();
            var tmp_16 = JsType_getInstance();
            var tmp_17 = getKClass(List);
            var tmp_18;
            try {
              tmp_18 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(OrderResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_19;
              if ($p instanceof Error) {
                tmp_19 = null;
              } else {
                throw $p;
              }
              tmp_18 = tmp_19;
            }

            suspendResult = tmp_15.e2i(typeInfoImpl(tmp_16, tmp_17, tmp_18), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_20 = this;
            tmp_20.j54_1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.jh_1 = 9;
            continue $sm;
          case 5:
            this.u54_1 = suspendResult;
            this.jh_1 = 6;
            var tmp_21 = this.u54_1.a2j();
            var tmp_22 = JsType_getInstance();
            var tmp_23 = getKClass(List);
            var tmp_24;
            try {
              tmp_24 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(OrderResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_25;
              if ($p instanceof Error) {
                tmp_25 = null;
              } else {
                throw $p;
              }
              tmp_24 = tmp_25;
            }

            suspendResult = tmp_21.e2i(typeInfoImpl(tmp_22, tmp_23, tmp_24), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_26 = this;
            tmp_26.j54_1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.jh_1 = 9;
            continue $sm;
          case 7:
            this.v54_1 = suspendResult;
            this.jh_1 = 8;
            var tmp_27 = this.v54_1.a2j();
            var tmp_28 = JsType_getInstance();
            var tmp_29 = getKClass(List);
            var tmp_30;
            try {
              tmp_30 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(OrderResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_31;
              if ($p instanceof Error) {
                tmp_31 = null;
              } else {
                throw $p;
              }
              tmp_30 = tmp_31;
            }

            suspendResult = tmp_27.e2i(typeInfoImpl(tmp_28, tmp_29, tmp_30), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            var tmp_32 = this;
            tmp_32.j54_1 = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            this.jh_1 = 9;
            continue $sm;
          case 9:
            return this.j54_1;
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
  $ordersCOROUTINE$17.$metadata$ = classMeta('$ordersCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderByNumberCOROUTINE$18(_this__u8e3s4, number, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e55_1 = _this__u8e3s4;
    this.f55_1 = number;
  }
  $orderByNumberCOROUTINE$18.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.g55_1 = this.e55_1.q4w_1;
            var tmp_1 = this;
            tmp_1.h55_1 = 'api/orders/number/' + this.f55_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.h55_1);
            ;
            tmp_2.i55_1 = tmp0_apply;
            this.i55_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.i55_1, this.g55_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j55_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.j55_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(OrderResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderByNumberCOROUTINE$18.$metadata$ = classMeta('$orderByNumberCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderCOROUTINE$19(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s55_1 = _this__u8e3s4;
    this.t55_1 = id;
  }
  $orderCOROUTINE$19.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.u55_1 = this.s55_1.q4w_1;
            var tmp_1 = this;
            tmp_1.v55_1 = 'api/orders/' + this.t55_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.v55_1);
            ;
            tmp_2.w55_1 = tmp0_apply;
            this.w55_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.w55_1, this.u55_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x55_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.x55_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(OrderResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderCOROUTINE$19.$metadata$ = classMeta('$orderCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $adminsCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g56_1 = _this__u8e3s4;
  }
  $adminsCOROUTINE$20.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.h56_1 = this.g56_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/admins');
            ;
            tmp_1.i56_1 = tmp0_apply;
            this.i56_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.i56_1, this.h56_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j56_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.j56_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(AdminResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $adminsCOROUTINE$20.$metadata$ = classMeta('$adminsCOROUTINE$20', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $adminCOROUTINE$21(_this__u8e3s4, id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s56_1 = _this__u8e3s4;
    this.t56_1 = id;
  }
  $adminCOROUTINE$21.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.u56_1 = this.s56_1.q4w_1;
            var tmp_1 = this;
            tmp_1.v56_1 = 'api/admins/' + this.t56_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.v56_1);
            ;
            tmp_2.w56_1 = tmp0_apply;
            this.w56_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.w56_1, this.u56_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x56_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_3 = this.x56_1.a2j();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(AdminResponse);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(AdminResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.e2i(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof AdminResponse ? suspendResult : THROW_CCE();
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
  $adminCOROUTINE$21.$metadata$ = classMeta('$adminCOROUTINE$21', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dashboardMadeOrdersCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g57_1 = _this__u8e3s4;
  }
  $dashboardMadeOrdersCOROUTINE$22.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.h57_1 = this.g57_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/dashboard/made-orders');
            ;
            tmp_1.i57_1 = tmp0_apply;
            this.i57_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.i57_1, this.h57_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j57_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.j57_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(DashboardCountResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(DashboardCountResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof DashboardCountResponse ? suspendResult : THROW_CCE();
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
  $dashboardMadeOrdersCOROUTINE$22.$metadata$ = classMeta('$dashboardMadeOrdersCOROUTINE$22', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dashboardOrdersCompletedCOROUTINE$23(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s57_1 = _this__u8e3s4;
  }
  $dashboardOrdersCompletedCOROUTINE$23.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.t57_1 = this.s57_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/dashboard/orders-completed');
            ;
            tmp_1.u57_1 = tmp0_apply;
            this.u57_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.u57_1, this.t57_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v57_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.v57_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(DashboardCountResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(DashboardCountResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof DashboardCountResponse ? suspendResult : THROW_CCE();
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
  $dashboardOrdersCompletedCOROUTINE$23.$metadata$ = classMeta('$dashboardOrdersCompletedCOROUTINE$23', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dashboardTotalEarningsCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e58_1 = _this__u8e3s4;
  }
  $dashboardTotalEarningsCOROUTINE$24.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.f58_1 = this.e58_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/dashboard/total-earnings');
            ;
            tmp_1.g58_1 = tmp0_apply;
            this.g58_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.g58_1, this.f58_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h58_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.h58_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(DashboardAmountResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(DashboardAmountResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof DashboardAmountResponse ? suspendResult : THROW_CCE();
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
  $dashboardTotalEarningsCOROUTINE$24.$metadata$ = classMeta('$dashboardTotalEarningsCOROUTINE$24', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dashboardSellerCOROUTINE$25(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q58_1 = _this__u8e3s4;
  }
  $dashboardSellerCOROUTINE$25.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.r58_1 = this.q58_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/dashboard/seller');
            ;
            tmp_1.s58_1 = tmp0_apply;
            this.s58_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.s58_1, this.r58_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t58_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.t58_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(List);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(OrderResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $dashboardSellerCOROUTINE$25.$metadata$ = classMeta('$dashboardSellerCOROUTINE$25', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dashboardChartCOROUTINE$26(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c59_1 = _this__u8e3s4;
  }
  $dashboardChartCOROUTINE$26.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.d59_1 = this.c59_1.q4w_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/dashboard/chart');
            ;
            tmp_1.e59_1 = tmp0_apply;
            this.e59_1.u2f_1 = Companion_getInstance_2().w22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e59_1, this.d59_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f59_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_2 = this.f59_1.a2j();
            var tmp_3 = JsType_getInstance();
            var tmp_4 = getKClass(DashboardChartResponse);
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(DashboardChartResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }

            suspendResult = tmp_2.e2i(typeInfoImpl(tmp_3, tmp_4, tmp_5), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof DashboardChartResponse ? suspendResult : THROW_CCE();
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
  $dashboardChartCOROUTINE$26.$metadata$ = classMeta('$dashboardChartCOROUTINE$26', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function GetRequest(client) {
    this.q4w_1 = client;
  }
  GetRequest.prototype.g59 = function ($cont) {
    var tmp = new $categoriesCOROUTINE$2(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.h59 = function ($cont) {
    var tmp = new $categoriesPublishedCOROUTINE$3(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.i59 = function (id, $cont) {
    var tmp = new $categoryCOROUTINE$4(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.j59 = function ($cont) {
    var tmp = new $collectionsCOROUTINE$5(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.k59 = function ($cont) {
    var tmp = new $collectionsPublishedCOROUTINE$6(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.l59 = function (id, $cont) {
    var tmp = new $collectionCOROUTINE$7(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.m59 = function ($cont) {
    var tmp = new $messagesCOROUTINE$8(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.n59 = function (id, $cont) {
    var tmp = new $messageCOROUTINE$9(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.o59 = function ($cont) {
    var tmp = new $productsCOROUTINE$10(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.p59 = function (page, order, range, categories, collections, $cont) {
    var tmp = new $productsPublishedCOROUTINE$11(this, page, order, range, categories, collections, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.q59 = function (categories, collections, $cont) {
    var tmp = new $productsCountPublishedCOROUTINE$12(this, categories, collections, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.r59 = function (excludeID, $cont) {
    var tmp = new $productsPurchasedCOROUTINE$13(this, excludeID, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.s59 = function (ids, $cont) {
    var tmp = new $productsPublishedByIDsCOROUTINE$14(this, ids, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.t59 = function (id, $cont) {
    var tmp = new $productCOROUTINE$15(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.u59 = function (categories, collections, $cont) {
    var tmp = new $pricesCOROUTINE$16(this, categories, collections, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.v59 = function (filter, $cont) {
    var tmp = new $ordersCOROUTINE$17(this, filter, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.w59 = function (number, $cont) {
    var tmp = new $orderByNumberCOROUTINE$18(this, number, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.x59 = function (id, $cont) {
    var tmp = new $orderCOROUTINE$19(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.y59 = function ($cont) {
    var tmp = new $adminsCOROUTINE$20(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.z59 = function (id, $cont) {
    var tmp = new $adminCOROUTINE$21(this, id, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.a5a = function ($cont) {
    var tmp = new $dashboardMadeOrdersCOROUTINE$22(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.b5a = function ($cont) {
    var tmp = new $dashboardOrdersCompletedCOROUTINE$23(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.c5a = function ($cont) {
    var tmp = new $dashboardTotalEarningsCOROUTINE$24(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.d5a = function ($cont) {
    var tmp = new $dashboardSellerCOROUTINE$25(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.prototype.e5a = function ($cont) {
    var tmp = new $dashboardChartCOROUTINE$26(this, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequest.$metadata$ = classMeta('GetRequest');
  function PostRequest$uploads$lambda($files) {
    return function ($this$formData) {
      var indexedObject = $files;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.keygenqt.shop.services.impl.PostRequest.uploads.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'io.ktor.http.Companion.build' call
        var tmp0_build = Companion_getInstance_3();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.keygenqt.shop.services.impl.PostRequest.uploads.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply.c1s(HttpHeaders_getInstance().f1z_1, element.g4k_1);
        tmp0_apply.c1s(HttpHeaders_getInstance().z1y_1, 'filename="' + element.f4k_1 + '"');
        tmp$ret$0 = tmp0_apply;
        tmp$ret$1 = tmp$ret$0.t2();
        $this$formData.g37('file', element.h4k_1, tmp$ret$1);
      }
      return Unit_getInstance();
    };
  }
  function $loginCOROUTINE$27(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n5a_1 = _this__u8e3s4;
    this.o5a_1 = request;
  }
  $loginCOROUTINE$27.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.p5a_1 = this.n5a_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/login');
            var tmp0_subject = this.o5a_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(LoginRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(LoginRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.o5a_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.o5a_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(LoginRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(LoginRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.q5a_1 = tmp0_apply;
            this.q5a_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.q5a_1, this.p5a_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r5a_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.r5a_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(AdminResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(AdminResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof AdminResponse ? suspendResult : THROW_CCE();
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
  $loginCOROUTINE$27.$metadata$ = classMeta('$loginCOROUTINE$27', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $messageCOROUTINE$28(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5b_1 = _this__u8e3s4;
    this.c5b_1 = request;
  }
  $messageCOROUTINE$28.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.d5b_1 = this.b5b_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/messages');
            var tmp0_subject = this.c5b_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(MessageRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(MessageRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.c5b_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.c5b_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(MessageRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(MessageRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.e5b_1 = tmp0_apply;
            this.e5b_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e5b_1, this.d5b_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f5b_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.f5b_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(MessageResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(MessageResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof MessageResponse ? suspendResult : THROW_CCE();
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
  $messageCOROUTINE$28.$metadata$ = classMeta('$messageCOROUTINE$28', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $categoryCOROUTINE$29(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5b_1 = _this__u8e3s4;
    this.p5b_1 = request;
  }
  $categoryCOROUTINE$29.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.q5b_1 = this.o5b_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/categories');
            var tmp0_subject = this.p5b_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(CategoryRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(CategoryRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.p5b_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.p5b_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(CategoryRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(CategoryRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.r5b_1 = tmp0_apply;
            this.r5b_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.r5b_1, this.q5b_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s5b_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.s5b_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(CategoryResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(CategoryResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CategoryResponse ? suspendResult : THROW_CCE();
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
  $categoryCOROUTINE$29.$metadata$ = classMeta('$categoryCOROUTINE$29', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionCOROUTINE$30(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5c_1 = _this__u8e3s4;
    this.c5c_1 = request;
  }
  $collectionCOROUTINE$30.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.d5c_1 = this.b5c_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/collections');
            var tmp0_subject = this.c5c_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(CollectionRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(CollectionRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.c5c_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.c5c_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(CollectionRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(CollectionRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.e5c_1 = tmp0_apply;
            this.e5c_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e5c_1, this.d5c_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f5c_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.f5c_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(CollectionResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(CollectionResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CollectionResponse ? suspendResult : THROW_CCE();
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
  $collectionCOROUTINE$30.$metadata$ = classMeta('$collectionCOROUTINE$30', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productCOROUTINE$31(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5c_1 = _this__u8e3s4;
    this.p5c_1 = request;
  }
  $productCOROUTINE$31.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.q5c_1 = this.o5c_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/products');
            var tmp0_subject = this.p5c_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(ProductRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(ProductRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.p5c_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.p5c_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(ProductRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(ProductRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.r5c_1 = tmp0_apply;
            this.r5c_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.r5c_1, this.q5c_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s5c_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.s5c_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(ProductResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(ProductResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductResponse ? suspendResult : THROW_CCE();
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
  $productCOROUTINE$31.$metadata$ = classMeta('$productCOROUTINE$31', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $adminCOROUTINE$32(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5d_1 = _this__u8e3s4;
    this.c5d_1 = request;
  }
  $adminCOROUTINE$32.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.d5d_1 = this.b5d_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/admins');
            var tmp0_subject = this.c5d_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(AdminCreateRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(AdminCreateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.c5d_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.c5d_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(AdminCreateRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(AdminCreateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.e5d_1 = tmp0_apply;
            this.e5d_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e5d_1, this.d5d_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f5d_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.f5d_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(AdminResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(AdminResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof AdminResponse ? suspendResult : THROW_CCE();
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
  $adminCOROUTINE$32.$metadata$ = classMeta('$adminCOROUTINE$32', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $uploadsCOROUTINE$33(_this__u8e3s4, files, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5d_1 = _this__u8e3s4;
    this.p5d_1 = files;
  }
  $uploadsCOROUTINE$33.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.q5d_1 = this.o5d_1.s5a_1;
            var tmp_1 = this;
            tmp_1.r5d_1 = formData(PostRequest$uploads$lambda(this.p5d_1));
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.u2f_1 = Companion_getInstance_2().x22_1;
            var tmp0_setBody = MultiPartFormDataContent_init_$Create$(this.r5d_1, null, null, 6, null);
            var tmp0_subject = tmp0_setBody;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(MultiPartFormDataContent);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = tmp0_setBody;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = tmp0_setBody;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(MultiPartFormDataContent);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            url(tmp0_apply, 'api/uploads');
            ;
            tmp_2.s5d_1 = tmp0_apply;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.s5d_1, this.q5d_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t5d_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.t5d_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(List);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(UploadResponse), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
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
  $uploadsCOROUTINE$33.$metadata$ = classMeta('$uploadsCOROUTINE$33', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderCreateCOROUTINE$34(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5e_1 = _this__u8e3s4;
    this.d5e_1 = request;
  }
  $orderCreateCOROUTINE$34.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.e5e_1 = this.c5e_1.s5a_1;
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, 'api/orders/create');
            var tmp0_subject = this.d5e_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = getKClass(OrderCreateRequest);
              var tmp_4;
              try {
                tmp_4 = createKType(getKClass(OrderCreateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.d5e_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.d5e_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = getKClass(OrderCreateRequest);
                var tmp_8;
                try {
                  tmp_8 = createKType(getKClass(OrderCreateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_1.f5e_1 = tmp0_apply;
            this.f5e_1.u2f_1 = Companion_getInstance_2().x22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.f5e_1, this.e5e_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g5e_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_10 = this.g5e_1.a2j();
            var tmp_11 = JsType_getInstance();
            var tmp_12 = getKClass(OrderResponse);
            var tmp_13;
            try {
              tmp_13 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_14;
              if ($p instanceof Error) {
                tmp_14 = null;
              } else {
                throw $p;
              }
              tmp_13 = tmp_14;
            }

            suspendResult = tmp_10.e2i(typeInfoImpl(tmp_11, tmp_12, tmp_13), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderCreateCOROUTINE$34.$metadata$ = classMeta('$orderCreateCOROUTINE$34', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function PostRequest(client) {
    this.s5a_1 = client;
  }
  PostRequest.prototype.h5e = function (request, $cont) {
    var tmp = new $loginCOROUTINE$27(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.i5e = function (request, $cont) {
    var tmp = new $messageCOROUTINE$28(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.j5e = function (request, $cont) {
    var tmp = new $categoryCOROUTINE$29(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.k5e = function (request, $cont) {
    var tmp = new $collectionCOROUTINE$30(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.l5e = function (request, $cont) {
    var tmp = new $productCOROUTINE$31(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.m5e = function (request, $cont) {
    var tmp = new $adminCOROUTINE$32(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.n5e = function (files, $cont) {
    var tmp = new $uploadsCOROUTINE$33(this, files, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.prototype.o5e = function (request, $cont) {
    var tmp = new $orderCreateCOROUTINE$34(this, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequest.$metadata$ = classMeta('PostRequest');
  function $messageStateCOROUTINE$35(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x5e_1 = _this__u8e3s4;
    this.y5e_1 = id;
    this.z5e_1 = request;
  }
  $messageStateCOROUTINE$35.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.a5f_1 = this.x5e_1.e5f_1;
            var tmp_1 = this;
            tmp_1.b5f_1 = 'api/messages/' + this.y5e_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.b5f_1);
            var tmp0_subject = this.z5e_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(MessageStateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(MessageStateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.z5e_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.z5e_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(MessageStateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(MessageStateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.c5f_1 = tmp0_apply;
            this.c5f_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.c5f_1, this.a5f_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d5f_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.d5f_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(MessageResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(MessageResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof MessageResponse ? suspendResult : THROW_CCE();
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
  $messageStateCOROUTINE$35.$metadata$ = classMeta('$messageStateCOROUTINE$35', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $categoryCOROUTINE$36(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n5f_1 = _this__u8e3s4;
    this.o5f_1 = id;
    this.p5f_1 = request;
  }
  $categoryCOROUTINE$36.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.q5f_1 = this.n5f_1.e5f_1;
            var tmp_1 = this;
            tmp_1.r5f_1 = 'api/categories/' + this.o5f_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.r5f_1);
            var tmp0_subject = this.p5f_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(CategoryRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(CategoryRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.p5f_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.p5f_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(CategoryRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(CategoryRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.s5f_1 = tmp0_apply;
            this.s5f_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.s5f_1, this.q5f_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t5f_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.t5f_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(CategoryResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(CategoryResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CategoryResponse ? suspendResult : THROW_CCE();
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
  $categoryCOROUTINE$36.$metadata$ = classMeta('$categoryCOROUTINE$36', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $categoryStateCOROUTINE$37(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5g_1 = _this__u8e3s4;
    this.d5g_1 = id;
    this.e5g_1 = request;
  }
  $categoryStateCOROUTINE$37.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.f5g_1 = this.c5g_1.e5f_1;
            var tmp_1 = this;
            tmp_1.g5g_1 = 'api/categories/state/' + this.d5g_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.g5g_1);
            var tmp0_subject = this.e5g_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(CategoryStateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(CategoryStateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.e5g_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.e5g_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(CategoryStateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(CategoryStateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.h5g_1 = tmp0_apply;
            this.h5g_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.h5g_1, this.f5g_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i5g_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.i5g_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(CategoryResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(CategoryResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CategoryResponse ? suspendResult : THROW_CCE();
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
  $categoryStateCOROUTINE$37.$metadata$ = classMeta('$categoryStateCOROUTINE$37', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionCOROUTINE$38(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r5g_1 = _this__u8e3s4;
    this.s5g_1 = id;
    this.t5g_1 = request;
  }
  $collectionCOROUTINE$38.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.u5g_1 = this.r5g_1.e5f_1;
            var tmp_1 = this;
            tmp_1.v5g_1 = 'api/collections/' + this.s5g_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.v5g_1);
            var tmp0_subject = this.t5g_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(CollectionRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(CollectionRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.t5g_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.t5g_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(CollectionRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(CollectionRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.w5g_1 = tmp0_apply;
            this.w5g_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.w5g_1, this.u5g_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x5g_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.x5g_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(CollectionResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(CollectionResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CollectionResponse ? suspendResult : THROW_CCE();
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
  $collectionCOROUTINE$38.$metadata$ = classMeta('$collectionCOROUTINE$38', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $collectionStateCOROUTINE$39(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g5h_1 = _this__u8e3s4;
    this.h5h_1 = id;
    this.i5h_1 = request;
  }
  $collectionStateCOROUTINE$39.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.j5h_1 = this.g5h_1.e5f_1;
            var tmp_1 = this;
            tmp_1.k5h_1 = 'api/collections/state/' + this.h5h_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.k5h_1);
            var tmp0_subject = this.i5h_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(CollectionStateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(CollectionStateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.i5h_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.i5h_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(CollectionStateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(CollectionStateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.l5h_1 = tmp0_apply;
            this.l5h_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.l5h_1, this.j5h_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m5h_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.m5h_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(CollectionResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(CollectionResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof CollectionResponse ? suspendResult : THROW_CCE();
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
  $collectionStateCOROUTINE$39.$metadata$ = classMeta('$collectionStateCOROUTINE$39', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productCOROUTINE$40(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5h_1 = _this__u8e3s4;
    this.w5h_1 = id;
    this.x5h_1 = request;
  }
  $productCOROUTINE$40.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.y5h_1 = this.v5h_1.e5f_1;
            var tmp_1 = this;
            tmp_1.z5h_1 = 'api/products/' + this.w5h_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.z5h_1);
            var tmp0_subject = this.x5h_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(ProductRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(ProductRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.x5h_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.x5h_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(ProductRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(ProductRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.a5i_1 = tmp0_apply;
            this.a5i_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.a5i_1, this.y5h_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b5i_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.b5i_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(ProductResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(ProductResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductResponse ? suspendResult : THROW_CCE();
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
  $productCOROUTINE$40.$metadata$ = classMeta('$productCOROUTINE$40', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $productStateCOROUTINE$41(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k5i_1 = _this__u8e3s4;
    this.l5i_1 = id;
    this.m5i_1 = request;
  }
  $productStateCOROUTINE$41.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.n5i_1 = this.k5i_1.e5f_1;
            var tmp_1 = this;
            tmp_1.o5i_1 = 'api/products/state/' + this.l5i_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.o5i_1);
            var tmp0_subject = this.m5i_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(ProductStateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(ProductStateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.m5i_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.m5i_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(ProductStateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(ProductStateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.p5i_1 = tmp0_apply;
            this.p5i_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.p5i_1, this.n5i_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q5i_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.q5i_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(ProductResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(ProductResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof ProductResponse ? suspendResult : THROW_CCE();
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
  $productStateCOROUTINE$41.$metadata$ = classMeta('$productStateCOROUTINE$41', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $adminCOROUTINE$42(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z5i_1 = _this__u8e3s4;
    this.a5j_1 = id;
    this.b5j_1 = request;
  }
  $adminCOROUTINE$42.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.c5j_1 = this.z5i_1.e5f_1;
            var tmp_1 = this;
            tmp_1.d5j_1 = 'api/admins/' + this.a5j_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.d5j_1);
            var tmp0_subject = this.b5j_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(AdminUpdateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(AdminUpdateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.b5j_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.b5j_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(AdminUpdateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(AdminUpdateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.e5j_1 = tmp0_apply;
            this.e5j_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.e5j_1, this.c5j_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f5j_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.f5j_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(AdminResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(AdminResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof AdminResponse ? suspendResult : THROW_CCE();
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
  $adminCOROUTINE$42.$metadata$ = classMeta('$adminCOROUTINE$42', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderCustomerCOROUTINE$43(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5j_1 = _this__u8e3s4;
    this.p5j_1 = id;
    this.q5j_1 = request;
  }
  $orderCustomerCOROUTINE$43.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.r5j_1 = this.o5j_1.e5f_1;
            var tmp_1 = this;
            tmp_1.s5j_1 = 'api/orders/customer/' + this.p5j_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.s5j_1);
            var tmp0_subject = this.q5j_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(OrderCustomerRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(OrderCustomerRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.q5j_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.q5j_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(OrderCustomerRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(OrderCustomerRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.t5j_1 = tmp0_apply;
            this.t5j_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.t5j_1, this.r5j_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u5j_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.u5j_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(OrderResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderCustomerCOROUTINE$43.$metadata$ = classMeta('$orderCustomerCOROUTINE$43', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderNoteCOROUTINE$44(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d5k_1 = _this__u8e3s4;
    this.e5k_1 = id;
    this.f5k_1 = request;
  }
  $orderNoteCOROUTINE$44.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.g5k_1 = this.d5k_1.e5f_1;
            var tmp_1 = this;
            tmp_1.h5k_1 = 'api/orders/note/' + this.e5k_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.h5k_1);
            var tmp0_subject = this.f5k_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(OrderNoteRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(OrderNoteRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.f5k_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.f5k_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(OrderNoteRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(OrderNoteRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.i5k_1 = tmp0_apply;
            this.i5k_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.i5k_1, this.g5k_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5k_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.j5k_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(OrderResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderNoteCOROUTINE$44.$metadata$ = classMeta('$orderNoteCOROUTINE$44', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $orderStateCOROUTINE$45(_this__u8e3s4, id, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s5k_1 = _this__u8e3s4;
    this.t5k_1 = id;
    this.u5k_1 = request;
  }
  $orderStateCOROUTINE$45.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 3;
            var tmp_0 = this;
            tmp_0.v5k_1 = this.s5k_1.e5f_1;
            var tmp_1 = this;
            tmp_1.w5k_1 = 'api/orders/state/' + this.t5k_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.w5k_1);
            var tmp0_subject = this.u5k_1;
            if (tmp0_subject == null) {
              tmp0_apply.w2f_1 = NullBody_getInstance();
              var tmp_3 = JsType_getInstance();
              var tmp_4 = getKClass(OrderStateRequest);
              var tmp_5;
              try {
                tmp_5 = createKType(getKClass(OrderStateRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_6;
                if ($p instanceof Error) {
                  tmp_6 = null;
                } else {
                  throw $p;
                }
                tmp_5 = tmp_6;
              }
              tmp0_apply.t2l(typeInfoImpl(tmp_3, tmp_4, tmp_5));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.w2f_1 = this.u5k_1;
                tmp0_apply.t2l(null);
              } else {
                tmp0_apply.w2f_1 = this.u5k_1;
                var tmp_7 = JsType_getInstance();
                var tmp_8 = getKClass(OrderStateRequest);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(OrderStateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                tmp0_apply.t2l(typeInfoImpl(tmp_7, tmp_8, tmp_9));
              }
            }

            tmp_2.x5k_1 = tmp0_apply;
            this.x5k_1.u2f_1 = Companion_getInstance_2().y22_1;
            this.jh_1 = 1;
            suspendResult = (new HttpStatement(this.x5k_1, this.v5k_1)).c3b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y5k_1 = suspendResult;
            this.jh_1 = 2;
            var tmp_11 = this.y5k_1.a2j();
            var tmp_12 = JsType_getInstance();
            var tmp_13 = getKClass(OrderResponse);
            var tmp_14;
            try {
              tmp_14 = createKType(getKClass(OrderResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_15;
              if ($p instanceof Error) {
                tmp_15 = null;
              } else {
                throw $p;
              }
              tmp_14 = tmp_15;
            }

            suspendResult = tmp_11.e2i(typeInfoImpl(tmp_12, tmp_13, tmp_14), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof OrderResponse ? suspendResult : THROW_CCE();
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
  $orderStateCOROUTINE$45.$metadata$ = classMeta('$orderStateCOROUTINE$45', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function PutRequest(client) {
    this.e5f_1 = client;
  }
  PutRequest.prototype.z5k = function (id, request, $cont) {
    var tmp = new $messageStateCOROUTINE$35(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.a5l = function (id, request, $cont) {
    var tmp = new $categoryCOROUTINE$36(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.b5l = function (id, request, $cont) {
    var tmp = new $categoryStateCOROUTINE$37(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.c5l = function (id, request, $cont) {
    var tmp = new $collectionCOROUTINE$38(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.d5l = function (id, request, $cont) {
    var tmp = new $collectionStateCOROUTINE$39(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.e5l = function (id, request, $cont) {
    var tmp = new $productCOROUTINE$40(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.f5l = function (id, request, $cont) {
    var tmp = new $productStateCOROUTINE$41(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.g5l = function (id, request, $cont) {
    var tmp = new $adminCOROUTINE$42(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.h5l = function (id, request, $cont) {
    var tmp = new $orderCustomerCOROUTINE$43(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.i5l = function (id, request, $cont) {
    var tmp = new $orderNoteCOROUTINE$44(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.prototype.j5l = function (id, request, $cont) {
    var tmp = new $orderStateCOROUTINE$45(this, id, request, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequest.$metadata$ = classMeta('PutRequest');
  function AppConstants() {
    AppConstants_instance = this;
    this.w4u_1 = FormatConstants_getInstance();
    this.x4u_1 = LinksConstants_getInstance();
    this.y4u_1 = OtherConstants_getInstance();
  }
  AppConstants.prototype.y46 = function () {
    return this.w4u_1;
  };
  AppConstants.prototype.k5l = function () {
    return this.x4u_1;
  };
  AppConstants.prototype.l5l = function () {
    return this.y4u_1;
  };
  AppConstants.$metadata$ = objectMeta('AppConstants');
  Object.defineProperty(AppConstants.prototype, 'format', {
    configurable: true,
    get: AppConstants.prototype.y46
  });
  Object.defineProperty(AppConstants.prototype, 'links', {
    configurable: true,
    get: AppConstants.prototype.k5l
  });
  Object.defineProperty(AppConstants.prototype, 'other', {
    configurable: true,
    get: AppConstants.prototype.l5l
  });
  var AppConstants_instance;
  function AppConstants_getInstance() {
    if (AppConstants_instance == null)
      new AppConstants();
    return AppConstants_instance;
  }
  function FormatConstants() {
    FormatConstants_instance = this;
    this.m5l_1 = 'dd.MM.yyyy';
  }
  FormatConstants.prototype.n5l = function () {
    return this.m5l_1;
  };
  FormatConstants.$metadata$ = objectMeta('FormatConstants');
  Object.defineProperty(FormatConstants.prototype, 'DATE_SHORT', {
    configurable: true,
    get: FormatConstants.prototype.n5l
  });
  var FormatConstants_instance;
  function FormatConstants_getInstance() {
    if (FormatConstants_instance == null)
      new FormatConstants();
    return FormatConstants_instance;
  }
  function LinksConstants() {
    LinksConstants_instance = this;
    this.o5l_1 = 'https://shop-api.keygenqt.com/';
    this.p5l_1 = 'http://localhost:8086/';
    this.q5l_1 = 'http://10.0.2.2:8086/';
    this.r5l_1 = 'https://yandex.com/map-widget/v1/?um=constructor%3A76ab87516c046b5d4f54647f1b9fe382edcaa24c935e6be8898244ec111ab1f4&amp;source=constructor';
  }
  LinksConstants.prototype.s5l = function () {
    return this.o5l_1;
  };
  LinksConstants.prototype.t5l = function () {
    return this.p5l_1;
  };
  LinksConstants.prototype.u5l = function () {
    return this.q5l_1;
  };
  LinksConstants.prototype.v5l = function () {
    return this.r5l_1;
  };
  LinksConstants.$metadata$ = objectMeta('LinksConstants');
  Object.defineProperty(LinksConstants.prototype, 'API_URL', {
    configurable: true,
    get: LinksConstants.prototype.s5l
  });
  Object.defineProperty(LinksConstants.prototype, 'API_DEBUG_URL', {
    configurable: true,
    get: LinksConstants.prototype.t5l
  });
  Object.defineProperty(LinksConstants.prototype, 'API_DEBUG_ANDROID_URL', {
    configurable: true,
    get: LinksConstants.prototype.u5l
  });
  Object.defineProperty(LinksConstants.prototype, 'URL_MAP', {
    configurable: true,
    get: LinksConstants.prototype.v5l
  });
  var LinksConstants_instance;
  function LinksConstants_getInstance() {
    if (LinksConstants_instance == null)
      new LinksConstants();
    return LinksConstants_instance;
  }
  function OtherConstants() {
    OtherConstants_instance = this;
    this.w5l_1 = 9;
    this.x5l_1 = 'keygenqt@gmail.com';
    this.y5l_1 = '+7 (999) 888 66 55';
    this.z5l_1 = 'https://t.me/keygenqt';
  }
  OtherConstants.prototype.a5m = function () {
    return this.w5l_1;
  };
  OtherConstants.prototype.b5m = function () {
    return this.x5l_1;
  };
  OtherConstants.prototype.c5m = function () {
    return this.y5l_1;
  };
  OtherConstants.prototype.d5m = function () {
    return this.z5l_1;
  };
  OtherConstants.$metadata$ = objectMeta('OtherConstants');
  Object.defineProperty(OtherConstants.prototype, 'PAGE_LIMIT', {
    configurable: true,
    get: OtherConstants.prototype.a5m
  });
  Object.defineProperty(OtherConstants.prototype, 'CONTACT_EMAIL', {
    configurable: true,
    get: OtherConstants.prototype.b5m
  });
  Object.defineProperty(OtherConstants.prototype, 'CONTACT_PHONE', {
    configurable: true,
    get: OtherConstants.prototype.c5m
  });
  Object.defineProperty(OtherConstants.prototype, 'CONTACT_TG', {
    configurable: true,
    get: OtherConstants.prototype.d5m
  });
  var OtherConstants_instance;
  function OtherConstants_getInstance() {
    if (OtherConstants_instance == null)
      new OtherConstants();
    return OtherConstants_instance;
  }
  function JSPlatform() {
    this.e5m_1 = 'Kotlin/JS';
  }
  JSPlatform.prototype.n4 = function () {
    return this.e5m_1;
  };
  JSPlatform.$metadata$ = classMeta('JSPlatform', [Platform]);
  function getPlatform() {
    return new JSPlatform();
  }
  function wrapPromise(function_0) {
    var tmp = GlobalScope_getInstance();
    return promise$default(tmp, null, null, wrapPromise$slambda_0(function_0, null), 3, null);
  }
  function wrapPromise$slambda($function, resultContinuation) {
    this.n5m_1 = $function;
    CoroutineImpl.call(this, resultContinuation);
  }
  wrapPromise$slambda.prototype.p5m = function ($this$promise, $cont) {
    var tmp = this.f1e($this$promise, $cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  wrapPromise$slambda.prototype.th = function (p1, $cont) {
    return this.p5m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  wrapPromise$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.n5m_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  wrapPromise$slambda.prototype.f1e = function ($this$promise, completion) {
    var i = new wrapPromise$slambda(this.n5m_1, completion);
    i.o5m_1 = $this$promise;
    return i;
  };
  wrapPromise$slambda.$metadata$ = classMeta('wrapPromise$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function wrapPromise$slambda_0($function, resultContinuation) {
    var i = new wrapPromise$slambda($function, resultContinuation);
    var l = function ($this$promise, $cont) {
      return i.p5m($this$promise, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ServiceRequestJS$get$delegate$lambda(this$0) {
    return function () {
      return new GetRequestPromise(this$0.q5m_1);
    };
  }
  function ServiceRequestJS$put$delegate$lambda(this$0) {
    return function () {
      return new PutRequestPromise(this$0.q5m_1);
    };
  }
  function ServiceRequestJS$post$delegate$lambda(this$0) {
    return function () {
      return new PostRequestPromise(this$0.q5m_1);
    };
  }
  function ServiceRequestJS$delete$delegate$lambda(this$0) {
    return function () {
      return new DeleteRequestPromise(this$0.q5m_1);
    };
  }
  function ServiceRequestJS(apiUrl) {
    var tmp = this;
    tmp.q5m_1 = ServiceRequest_init_$Create$(apiUrl, null, false, 6, null);
    var tmp_0 = this;
    tmp_0.r5m_1 = lazy(ServiceRequestJS$get$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.s5m_1 = lazy(ServiceRequestJS$put$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.t5m_1 = lazy(ServiceRequestJS$post$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.u5m_1 = lazy(ServiceRequestJS$delete$delegate$lambda(this));
  }
  ServiceRequestJS.prototype.z4u = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = get$factory_0();
    tmp$ret$0 = this.r5m_1.t();
    return tmp$ret$0;
  };
  ServiceRequestJS.prototype.a4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = put$factory_0();
    tmp$ret$0 = this.s5m_1.t();
    return tmp$ret$0;
  };
  ServiceRequestJS.prototype.b4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = post$factory_0();
    tmp$ret$0 = this.t5m_1.t();
    return tmp$ret$0;
  };
  ServiceRequestJS.prototype.c4v = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = delete$factory_0();
    tmp$ret$0 = this.u5m_1.t();
    return tmp$ret$0;
  };
  ServiceRequestJS.$metadata$ = classMeta('ServiceRequestJS');
  Object.defineProperty(ServiceRequestJS.prototype, 'get', {
    configurable: true,
    get: ServiceRequestJS.prototype.z4u
  });
  Object.defineProperty(ServiceRequestJS.prototype, 'put', {
    configurable: true,
    get: ServiceRequestJS.prototype.a4v
  });
  Object.defineProperty(ServiceRequestJS.prototype, 'post', {
    configurable: true,
    get: ServiceRequestJS.prototype.b4v
  });
  Object.defineProperty(ServiceRequestJS.prototype, 'delete', {
    configurable: true,
    get: ServiceRequestJS.prototype.c4v
  });
  function httpClient(config) {
    var tmp = Js_getInstance();
    return HttpClient(tmp, httpClient$lambda(config));
  }
  function httpClient$lambda($config) {
    return function ($this$HttpClient) {
      $config($this$HttpClient);
      return Unit_getInstance();
    };
  }
  function get$factory_0() {
    return getPropertyCallableRef('get', 1, KProperty1, function (receiver) {
      return receiver.get;
    }, null);
  }
  function put$factory_0() {
    return getPropertyCallableRef('put', 1, KProperty1, function (receiver) {
      return receiver.put;
    }, null);
  }
  function post$factory_0() {
    return getPropertyCallableRef('post', 1, KProperty1, function (receiver) {
      return receiver.post;
    }, null);
  }
  function delete$factory_0() {
    return getPropertyCallableRef('delete', 1, KProperty1, function (receiver) {
      return receiver.delete;
    }, null);
  }
  function DeleteRequestPromise$logout$slambda(this$0, resultContinuation) {
    this.d5n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  DeleteRequestPromise$logout$slambda.prototype.e5n = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  DeleteRequestPromise$logout$slambda.prototype.qi = function ($cont) {
    return this.e5n($cont);
  };
  DeleteRequestPromise$logout$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.d5n_1.g5n_1.c4v().c4w(this);
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
  DeleteRequestPromise$logout$slambda.prototype.f5n = function (completion) {
    var i = new DeleteRequestPromise$logout$slambda(this.d5n_1, completion);
    return i;
  };
  DeleteRequestPromise$logout$slambda.$metadata$ = classMeta('DeleteRequestPromise$logout$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function DeleteRequestPromise$logout$slambda_0(this$0, resultContinuation) {
    var i = new DeleteRequestPromise$logout$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.e5n($cont);
    };
    l.$arity = 0;
    return l;
  }
  function DeleteRequestPromise$admin$slambda(this$0, $id, resultContinuation) {
    this.p5n_1 = this$0;
    this.q5n_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  DeleteRequestPromise$admin$slambda.prototype.e5n = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  DeleteRequestPromise$admin$slambda.prototype.qi = function ($cont) {
    return this.e5n($cont);
  };
  DeleteRequestPromise$admin$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.p5n_1.g5n_1.c4v().d4w(this.q5n_1, this);
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
  DeleteRequestPromise$admin$slambda.prototype.f5n = function (completion) {
    var i = new DeleteRequestPromise$admin$slambda(this.p5n_1, this.q5n_1, completion);
    return i;
  };
  DeleteRequestPromise$admin$slambda.$metadata$ = classMeta('DeleteRequestPromise$admin$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function DeleteRequestPromise$admin$slambda_0(this$0, $id, resultContinuation) {
    var i = new DeleteRequestPromise$admin$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.e5n($cont);
    };
    l.$arity = 0;
    return l;
  }
  function DeleteRequestPromise(client) {
    this.g5n_1 = client;
  }
  DeleteRequestPromise.prototype.logout = function () {
    return wrapPromise(DeleteRequestPromise$logout$slambda_0(this, null));
  };
  DeleteRequestPromise.prototype.admin = function (id) {
    return wrapPromise(DeleteRequestPromise$admin$slambda_0(this, id, null));
  };
  DeleteRequestPromise.$metadata$ = classMeta('DeleteRequestPromise');
  function GetRequestPromise$categories$slambda(this$0, resultContinuation) {
    this.z5n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$categories$slambda.prototype.a5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$categories$slambda.prototype.qi = function ($cont) {
    return this.a5o($cont);
  };
  GetRequestPromise$categories$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.z5n_1.b5o_1.z4u().g59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$categories$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$categories$slambda(this.z5n_1, completion);
    return i;
  };
  GetRequestPromise$categories$slambda.$metadata$ = classMeta('GetRequestPromise$categories$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$categories$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$categories$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.a5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$categoriesPublished$slambda(this$0, resultContinuation) {
    this.k5o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$categoriesPublished$slambda.prototype.a5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$categoriesPublished$slambda.prototype.qi = function ($cont) {
    return this.a5o($cont);
  };
  GetRequestPromise$categoriesPublished$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.k5o_1.b5o_1.z4u().h59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$categoriesPublished$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$categoriesPublished$slambda(this.k5o_1, completion);
    return i;
  };
  GetRequestPromise$categoriesPublished$slambda.$metadata$ = classMeta('GetRequestPromise$categoriesPublished$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$categoriesPublished$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$categoriesPublished$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.a5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$collection$slambda(this$0, $id, resultContinuation) {
    this.t5o_1 = this$0;
    this.u5o_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$collection$slambda.prototype.v5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$collection$slambda.prototype.qi = function ($cont) {
    return this.v5o($cont);
  };
  GetRequestPromise$collection$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.t5o_1.b5o_1.z4u().l59(this.u5o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$collection$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$collection$slambda(this.t5o_1, this.u5o_1, completion);
    return i;
  };
  GetRequestPromise$collection$slambda.$metadata$ = classMeta('GetRequestPromise$collection$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$collection$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$collection$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.v5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$collections$slambda(this$0, resultContinuation) {
    this.e5p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$collections$slambda.prototype.f5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$collections$slambda.prototype.qi = function ($cont) {
    return this.f5p($cont);
  };
  GetRequestPromise$collections$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.e5p_1.b5o_1.z4u().j59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$collections$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$collections$slambda(this.e5p_1, completion);
    return i;
  };
  GetRequestPromise$collections$slambda.$metadata$ = classMeta('GetRequestPromise$collections$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$collections$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$collections$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.f5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$collectionsPublished$slambda(this$0, resultContinuation) {
    this.o5p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$collectionsPublished$slambda.prototype.f5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$collectionsPublished$slambda.prototype.qi = function ($cont) {
    return this.f5p($cont);
  };
  GetRequestPromise$collectionsPublished$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.o5p_1.b5o_1.z4u().k59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$collectionsPublished$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$collectionsPublished$slambda(this.o5p_1, completion);
    return i;
  };
  GetRequestPromise$collectionsPublished$slambda.$metadata$ = classMeta('GetRequestPromise$collectionsPublished$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$collectionsPublished$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$collectionsPublished$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.f5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$category$slambda(this$0, $id, resultContinuation) {
    this.x5p_1 = this$0;
    this.y5p_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$category$slambda.prototype.z5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$category$slambda.prototype.qi = function ($cont) {
    return this.z5p($cont);
  };
  GetRequestPromise$category$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.x5p_1.b5o_1.z4u().i59(this.y5p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$category$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$category$slambda(this.x5p_1, this.y5p_1, completion);
    return i;
  };
  GetRequestPromise$category$slambda.$metadata$ = classMeta('GetRequestPromise$category$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$category$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$category$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.z5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$messages$slambda(this$0, resultContinuation) {
    this.i5q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$messages$slambda.prototype.j5q = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$messages$slambda.prototype.qi = function ($cont) {
    return this.j5q($cont);
  };
  GetRequestPromise$messages$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.i5q_1.b5o_1.z4u().m59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$messages$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$messages$slambda(this.i5q_1, completion);
    return i;
  };
  GetRequestPromise$messages$slambda.$metadata$ = classMeta('GetRequestPromise$messages$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$messages$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$messages$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.j5q($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$message$slambda(this$0, $id, resultContinuation) {
    this.s5q_1 = this$0;
    this.t5q_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$message$slambda.prototype.u5q = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$message$slambda.prototype.qi = function ($cont) {
    return this.u5q($cont);
  };
  GetRequestPromise$message$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.s5q_1.b5o_1.z4u().n59(this.t5q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$message$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$message$slambda(this.s5q_1, this.t5q_1, completion);
    return i;
  };
  GetRequestPromise$message$slambda.$metadata$ = classMeta('GetRequestPromise$message$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$message$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$message$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.u5q($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$products$slambda(this$0, resultContinuation) {
    this.d5r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$products$slambda.prototype.e5r = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$products$slambda.prototype.qi = function ($cont) {
    return this.e5r($cont);
  };
  GetRequestPromise$products$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.d5r_1.b5o_1.z4u().o59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$products$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$products$slambda(this.d5r_1, completion);
    return i;
  };
  GetRequestPromise$products$slambda.$metadata$ = classMeta('GetRequestPromise$products$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$products$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$products$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.e5r($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$productsPublished$slambda(this$0, $page, $order, $range, $categories, $collections, resultContinuation) {
    this.n5r_1 = this$0;
    this.o5r_1 = $page;
    this.p5r_1 = $order;
    this.q5r_1 = $range;
    this.r5r_1 = $categories;
    this.s5r_1 = $collections;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$productsPublished$slambda.prototype.t5r = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$productsPublished$slambda.prototype.qi = function ($cont) {
    return this.t5r($cont);
  };
  GetRequestPromise$productsPublished$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.n5r_1.b5o_1.z4u().p59(this.o5r_1, this.p5r_1, this.q5r_1, this.r5r_1, this.s5r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$productsPublished$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$productsPublished$slambda(this.n5r_1, this.o5r_1, this.p5r_1, this.q5r_1, this.r5r_1, this.s5r_1, completion);
    return i;
  };
  GetRequestPromise$productsPublished$slambda.$metadata$ = classMeta('GetRequestPromise$productsPublished$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$productsPublished$slambda_0(this$0, $page, $order, $range, $categories, $collections, resultContinuation) {
    var i = new GetRequestPromise$productsPublished$slambda(this$0, $page, $order, $range, $categories, $collections, resultContinuation);
    var l = function ($cont) {
      return i.t5r($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$productsCountPublished$slambda(this$0, $categories, $collections, resultContinuation) {
    this.c5s_1 = this$0;
    this.d5s_1 = $categories;
    this.e5s_1 = $collections;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$productsCountPublished$slambda.prototype.f5s = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$productsCountPublished$slambda.prototype.qi = function ($cont) {
    return this.f5s($cont);
  };
  GetRequestPromise$productsCountPublished$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.c5s_1.b5o_1.z4u().q59(this.d5s_1, this.e5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$productsCountPublished$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$productsCountPublished$slambda(this.c5s_1, this.d5s_1, this.e5s_1, completion);
    return i;
  };
  GetRequestPromise$productsCountPublished$slambda.$metadata$ = classMeta('GetRequestPromise$productsCountPublished$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$productsCountPublished$slambda_0(this$0, $categories, $collections, resultContinuation) {
    var i = new GetRequestPromise$productsCountPublished$slambda(this$0, $categories, $collections, resultContinuation);
    var l = function ($cont) {
      return i.f5s($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$productsPurchased$slambda(this$0, $excludeID, resultContinuation) {
    this.o5s_1 = this$0;
    this.p5s_1 = $excludeID;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$productsPurchased$slambda.prototype.e5r = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$productsPurchased$slambda.prototype.qi = function ($cont) {
    return this.e5r($cont);
  };
  GetRequestPromise$productsPurchased$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.o5s_1.b5o_1.z4u().r59(this.p5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$productsPurchased$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$productsPurchased$slambda(this.o5s_1, this.p5s_1, completion);
    return i;
  };
  GetRequestPromise$productsPurchased$slambda.$metadata$ = classMeta('GetRequestPromise$productsPurchased$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$productsPurchased$slambda_0(this$0, $excludeID, resultContinuation) {
    var i = new GetRequestPromise$productsPurchased$slambda(this$0, $excludeID, resultContinuation);
    var l = function ($cont) {
      return i.e5r($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$productsPublishedByIDs$slambda(this$0, $ids, resultContinuation) {
    this.y5s_1 = this$0;
    this.z5s_1 = $ids;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$productsPublishedByIDs$slambda.prototype.e5r = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$productsPublishedByIDs$slambda.prototype.qi = function ($cont) {
    return this.e5r($cont);
  };
  GetRequestPromise$productsPublishedByIDs$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.y5s_1.b5o_1.z4u().s59(this.z5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$productsPublishedByIDs$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$productsPublishedByIDs$slambda(this.y5s_1, this.z5s_1, completion);
    return i;
  };
  GetRequestPromise$productsPublishedByIDs$slambda.$metadata$ = classMeta('GetRequestPromise$productsPublishedByIDs$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$productsPublishedByIDs$slambda_0(this$0, $ids, resultContinuation) {
    var i = new GetRequestPromise$productsPublishedByIDs$slambda(this$0, $ids, resultContinuation);
    var l = function ($cont) {
      return i.e5r($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$product$slambda(this$0, $id, resultContinuation) {
    this.i5t_1 = this$0;
    this.j5t_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$product$slambda.prototype.k5t = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$product$slambda.prototype.qi = function ($cont) {
    return this.k5t($cont);
  };
  GetRequestPromise$product$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.i5t_1.b5o_1.z4u().t59(this.j5t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$product$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$product$slambda(this.i5t_1, this.j5t_1, completion);
    return i;
  };
  GetRequestPromise$product$slambda.$metadata$ = classMeta('GetRequestPromise$product$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$product$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$product$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.k5t($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$prices$slambda(this$0, resultContinuation) {
    this.t5t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$prices$slambda.prototype.u5t = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$prices$slambda.prototype.qi = function ($cont) {
    return this.u5t($cont);
  };
  GetRequestPromise$prices$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            var tmp_0 = this.t5t_1.b5o_1.z4u();
            var tmp_1 = [];
            suspendResult = tmp_0.u59(tmp_1, [], this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$prices$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$prices$slambda(this.t5t_1, completion);
    return i;
  };
  GetRequestPromise$prices$slambda.$metadata$ = classMeta('GetRequestPromise$prices$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$prices$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$prices$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.u5t($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$orders$slambda(this$0, $filter, resultContinuation) {
    this.d5u_1 = this$0;
    this.e5u_1 = $filter;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$orders$slambda.prototype.f5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$orders$slambda.prototype.qi = function ($cont) {
    return this.f5u($cont);
  };
  GetRequestPromise$orders$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.d5u_1.b5o_1.z4u().v59(this.e5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$orders$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$orders$slambda(this.d5u_1, this.e5u_1, completion);
    return i;
  };
  GetRequestPromise$orders$slambda.$metadata$ = classMeta('GetRequestPromise$orders$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$orders$slambda_0(this$0, $filter, resultContinuation) {
    var i = new GetRequestPromise$orders$slambda(this$0, $filter, resultContinuation);
    var l = function ($cont) {
      return i.f5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$orderByNumber$slambda(this$0, $number, resultContinuation) {
    this.o5u_1 = this$0;
    this.p5u_1 = $number;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$orderByNumber$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$orderByNumber$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  GetRequestPromise$orderByNumber$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.o5u_1.b5o_1.z4u().w59(this.p5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$orderByNumber$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$orderByNumber$slambda(this.o5u_1, this.p5u_1, completion);
    return i;
  };
  GetRequestPromise$orderByNumber$slambda.$metadata$ = classMeta('GetRequestPromise$orderByNumber$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$orderByNumber$slambda_0(this$0, $number, resultContinuation) {
    var i = new GetRequestPromise$orderByNumber$slambda(this$0, $number, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$order$slambda(this$0, $id, resultContinuation) {
    this.z5u_1 = this$0;
    this.a5v_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$order$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$order$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  GetRequestPromise$order$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.z5u_1.b5o_1.z4u().x59(this.a5v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$order$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$order$slambda(this.z5u_1, this.a5v_1, completion);
    return i;
  };
  GetRequestPromise$order$slambda.$metadata$ = classMeta('GetRequestPromise$order$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$order$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$order$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$admins$slambda(this$0, resultContinuation) {
    this.j5v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$admins$slambda.prototype.k5v = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$admins$slambda.prototype.qi = function ($cont) {
    return this.k5v($cont);
  };
  GetRequestPromise$admins$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.j5v_1.b5o_1.z4u().y59(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$admins$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$admins$slambda(this.j5v_1, completion);
    return i;
  };
  GetRequestPromise$admins$slambda.$metadata$ = classMeta('GetRequestPromise$admins$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$admins$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$admins$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.k5v($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$admin$slambda(this$0, $id, resultContinuation) {
    this.t5v_1 = this$0;
    this.u5v_1 = $id;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$admin$slambda.prototype.v5v = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$admin$slambda.prototype.qi = function ($cont) {
    return this.v5v($cont);
  };
  GetRequestPromise$admin$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.t5v_1.b5o_1.z4u().z59(this.u5v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$admin$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$admin$slambda(this.t5v_1, this.u5v_1, completion);
    return i;
  };
  GetRequestPromise$admin$slambda.$metadata$ = classMeta('GetRequestPromise$admin$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$admin$slambda_0(this$0, $id, resultContinuation) {
    var i = new GetRequestPromise$admin$slambda(this$0, $id, resultContinuation);
    var l = function ($cont) {
      return i.v5v($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$dashboardMadeOrders$slambda(this$0, resultContinuation) {
    this.e5w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$dashboardMadeOrders$slambda.prototype.f5w = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$dashboardMadeOrders$slambda.prototype.qi = function ($cont) {
    return this.f5w($cont);
  };
  GetRequestPromise$dashboardMadeOrders$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.e5w_1.b5o_1.z4u().a5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$dashboardMadeOrders$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$dashboardMadeOrders$slambda(this.e5w_1, completion);
    return i;
  };
  GetRequestPromise$dashboardMadeOrders$slambda.$metadata$ = classMeta('GetRequestPromise$dashboardMadeOrders$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$dashboardMadeOrders$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$dashboardMadeOrders$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.f5w($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$dashboardOrdersCompleted$slambda(this$0, resultContinuation) {
    this.o5w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype.f5w = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype.qi = function ($cont) {
    return this.f5w($cont);
  };
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.o5w_1.b5o_1.z4u().b5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$dashboardOrdersCompleted$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$dashboardOrdersCompleted$slambda(this.o5w_1, completion);
    return i;
  };
  GetRequestPromise$dashboardOrdersCompleted$slambda.$metadata$ = classMeta('GetRequestPromise$dashboardOrdersCompleted$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$dashboardOrdersCompleted$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$dashboardOrdersCompleted$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.f5w($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$dashboardTotalEarnings$slambda(this$0, resultContinuation) {
    this.x5w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype.y5w = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype.qi = function ($cont) {
    return this.y5w($cont);
  };
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.x5w_1.b5o_1.z4u().c5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$dashboardTotalEarnings$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$dashboardTotalEarnings$slambda(this.x5w_1, completion);
    return i;
  };
  GetRequestPromise$dashboardTotalEarnings$slambda.$metadata$ = classMeta('GetRequestPromise$dashboardTotalEarnings$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$dashboardTotalEarnings$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$dashboardTotalEarnings$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.y5w($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$dashboardSeller$slambda(this$0, resultContinuation) {
    this.h5x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$dashboardSeller$slambda.prototype.f5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$dashboardSeller$slambda.prototype.qi = function ($cont) {
    return this.f5u($cont);
  };
  GetRequestPromise$dashboardSeller$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.h5x_1.b5o_1.z4u().d5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$dashboardSeller$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$dashboardSeller$slambda(this.h5x_1, completion);
    return i;
  };
  GetRequestPromise$dashboardSeller$slambda.$metadata$ = classMeta('GetRequestPromise$dashboardSeller$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$dashboardSeller$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$dashboardSeller$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.f5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise$dashboardChart$slambda(this$0, resultContinuation) {
    this.q5x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  GetRequestPromise$dashboardChart$slambda.prototype.r5x = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  GetRequestPromise$dashboardChart$slambda.prototype.qi = function ($cont) {
    return this.r5x($cont);
  };
  GetRequestPromise$dashboardChart$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.q5x_1.b5o_1.z4u().e5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  GetRequestPromise$dashboardChart$slambda.prototype.f5n = function (completion) {
    var i = new GetRequestPromise$dashboardChart$slambda(this.q5x_1, completion);
    return i;
  };
  GetRequestPromise$dashboardChart$slambda.$metadata$ = classMeta('GetRequestPromise$dashboardChart$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function GetRequestPromise$dashboardChart$slambda_0(this$0, resultContinuation) {
    var i = new GetRequestPromise$dashboardChart$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.r5x($cont);
    };
    l.$arity = 0;
    return l;
  }
  function GetRequestPromise(client) {
    this.b5o_1 = client;
  }
  GetRequestPromise.prototype.categories = function () {
    return wrapPromise(GetRequestPromise$categories$slambda_0(this, null));
  };
  GetRequestPromise.prototype.categoriesPublished = function () {
    return wrapPromise(GetRequestPromise$categoriesPublished$slambda_0(this, null));
  };
  GetRequestPromise.prototype.collection = function (id) {
    return wrapPromise(GetRequestPromise$collection$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.collections = function () {
    return wrapPromise(GetRequestPromise$collections$slambda_0(this, null));
  };
  GetRequestPromise.prototype.collectionsPublished = function () {
    return wrapPromise(GetRequestPromise$collectionsPublished$slambda_0(this, null));
  };
  GetRequestPromise.prototype.category = function (id) {
    return wrapPromise(GetRequestPromise$category$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.messages = function () {
    return wrapPromise(GetRequestPromise$messages$slambda_0(this, null));
  };
  GetRequestPromise.prototype.message = function (id) {
    return wrapPromise(GetRequestPromise$message$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.products = function () {
    return wrapPromise(GetRequestPromise$products$slambda_0(this, null));
  };
  GetRequestPromise.prototype.productsPublished = function (page, order, range, categories, collections) {
    return wrapPromise(GetRequestPromise$productsPublished$slambda_0(this, page, order, range, categories, collections, null));
  };
  GetRequestPromise.prototype.productsCountPublished = function (categories, collections) {
    return wrapPromise(GetRequestPromise$productsCountPublished$slambda_0(this, categories, collections, null));
  };
  GetRequestPromise.prototype.productsPurchased = function (excludeID) {
    return wrapPromise(GetRequestPromise$productsPurchased$slambda_0(this, excludeID, null));
  };
  GetRequestPromise.prototype.productsPublishedByIDs = function (ids) {
    return wrapPromise(GetRequestPromise$productsPublishedByIDs$slambda_0(this, ids, null));
  };
  GetRequestPromise.prototype.product = function (id) {
    return wrapPromise(GetRequestPromise$product$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.prices = function () {
    return wrapPromise(GetRequestPromise$prices$slambda_0(this, null));
  };
  GetRequestPromise.prototype.orders = function (filter) {
    return wrapPromise(GetRequestPromise$orders$slambda_0(this, filter, null));
  };
  GetRequestPromise.prototype.orderByNumber = function (number) {
    return wrapPromise(GetRequestPromise$orderByNumber$slambda_0(this, number, null));
  };
  GetRequestPromise.prototype.order = function (id) {
    return wrapPromise(GetRequestPromise$order$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.admins = function () {
    return wrapPromise(GetRequestPromise$admins$slambda_0(this, null));
  };
  GetRequestPromise.prototype.admin = function (id) {
    return wrapPromise(GetRequestPromise$admin$slambda_0(this, id, null));
  };
  GetRequestPromise.prototype.dashboardMadeOrders = function () {
    return wrapPromise(GetRequestPromise$dashboardMadeOrders$slambda_0(this, null));
  };
  GetRequestPromise.prototype.dashboardOrdersCompleted = function () {
    return wrapPromise(GetRequestPromise$dashboardOrdersCompleted$slambda_0(this, null));
  };
  GetRequestPromise.prototype.dashboardTotalEarnings = function () {
    return wrapPromise(GetRequestPromise$dashboardTotalEarnings$slambda_0(this, null));
  };
  GetRequestPromise.prototype.dashboardSeller = function () {
    return wrapPromise(GetRequestPromise$dashboardSeller$slambda_0(this, null));
  };
  GetRequestPromise.prototype.dashboardChart = function () {
    return wrapPromise(GetRequestPromise$dashboardChart$slambda_0(this, null));
  };
  GetRequestPromise.$metadata$ = classMeta('GetRequestPromise');
  function PostRequestPromise$login$slambda(this$0, $request, resultContinuation) {
    this.a5y_1 = this$0;
    this.b5y_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$login$slambda.prototype.v5v = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$login$slambda.prototype.qi = function ($cont) {
    return this.v5v($cont);
  };
  PostRequestPromise$login$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.a5y_1.c5y_1.b4v().h5e(this.b5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$login$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$login$slambda(this.a5y_1, this.b5y_1, completion);
    return i;
  };
  PostRequestPromise$login$slambda.$metadata$ = classMeta('PostRequestPromise$login$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$login$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$login$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5v($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$message$slambda(this$0, $request, resultContinuation) {
    this.l5y_1 = this$0;
    this.m5y_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$message$slambda.prototype.u5q = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$message$slambda.prototype.qi = function ($cont) {
    return this.u5q($cont);
  };
  PostRequestPromise$message$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.l5y_1.c5y_1.b4v().i5e(this.m5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$message$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$message$slambda(this.l5y_1, this.m5y_1, completion);
    return i;
  };
  PostRequestPromise$message$slambda.$metadata$ = classMeta('PostRequestPromise$message$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$message$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$message$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.u5q($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$category$slambda(this$0, $request, resultContinuation) {
    this.v5y_1 = this$0;
    this.w5y_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$category$slambda.prototype.z5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$category$slambda.prototype.qi = function ($cont) {
    return this.z5p($cont);
  };
  PostRequestPromise$category$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.v5y_1.c5y_1.b4v().j5e(this.w5y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$category$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$category$slambda(this.v5y_1, this.w5y_1, completion);
    return i;
  };
  PostRequestPromise$category$slambda.$metadata$ = classMeta('PostRequestPromise$category$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$category$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$category$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.z5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$collection$slambda(this$0, $request, resultContinuation) {
    this.f5z_1 = this$0;
    this.g5z_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$collection$slambda.prototype.v5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$collection$slambda.prototype.qi = function ($cont) {
    return this.v5o($cont);
  };
  PostRequestPromise$collection$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.f5z_1.c5y_1.b4v().k5e(this.g5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$collection$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$collection$slambda(this.f5z_1, this.g5z_1, completion);
    return i;
  };
  PostRequestPromise$collection$slambda.$metadata$ = classMeta('PostRequestPromise$collection$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$collection$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$collection$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$product$slambda(this$0, $request, resultContinuation) {
    this.p5z_1 = this$0;
    this.q5z_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$product$slambda.prototype.k5t = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$product$slambda.prototype.qi = function ($cont) {
    return this.k5t($cont);
  };
  PostRequestPromise$product$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.p5z_1.c5y_1.b4v().l5e(this.q5z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$product$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$product$slambda(this.p5z_1, this.q5z_1, completion);
    return i;
  };
  PostRequestPromise$product$slambda.$metadata$ = classMeta('PostRequestPromise$product$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$product$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$product$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.k5t($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$admin$slambda(this$0, $request, resultContinuation) {
    this.z5z_1 = this$0;
    this.a60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$admin$slambda.prototype.v5v = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$admin$slambda.prototype.qi = function ($cont) {
    return this.v5v($cont);
  };
  PostRequestPromise$admin$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.z5z_1.c5y_1.b4v().m5e(this.a60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$admin$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$admin$slambda(this.z5z_1, this.a60_1, completion);
    return i;
  };
  PostRequestPromise$admin$slambda.$metadata$ = classMeta('PostRequestPromise$admin$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$admin$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$admin$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5v($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$uploads$slambda(this$0, $files, resultContinuation) {
    this.j60_1 = this$0;
    this.k60_1 = $files;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$uploads$slambda.prototype.l60 = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$uploads$slambda.prototype.qi = function ($cont) {
    return this.l60($cont);
  };
  PostRequestPromise$uploads$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.j60_1.c5y_1.b4v().n5e(this.k60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$uploads$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$uploads$slambda(this.j60_1, this.k60_1, completion);
    return i;
  };
  PostRequestPromise$uploads$slambda.$metadata$ = classMeta('PostRequestPromise$uploads$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$uploads$slambda_0(this$0, $files, resultContinuation) {
    var i = new PostRequestPromise$uploads$slambda(this$0, $files, resultContinuation);
    var l = function ($cont) {
      return i.l60($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise$orderCreate$slambda(this$0, $request, resultContinuation) {
    this.u60_1 = this$0;
    this.v60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PostRequestPromise$orderCreate$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PostRequestPromise$orderCreate$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  PostRequestPromise$orderCreate$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.u60_1.c5y_1.b4v().o5e(this.v60_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PostRequestPromise$orderCreate$slambda.prototype.f5n = function (completion) {
    var i = new PostRequestPromise$orderCreate$slambda(this.u60_1, this.v60_1, completion);
    return i;
  };
  PostRequestPromise$orderCreate$slambda.$metadata$ = classMeta('PostRequestPromise$orderCreate$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PostRequestPromise$orderCreate$slambda_0(this$0, $request, resultContinuation) {
    var i = new PostRequestPromise$orderCreate$slambda(this$0, $request, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PostRequestPromise(client) {
    this.c5y_1 = client;
  }
  PostRequestPromise.prototype.login = function (request) {
    return wrapPromise(PostRequestPromise$login$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.message = function (request) {
    return wrapPromise(PostRequestPromise$message$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.category = function (request) {
    return wrapPromise(PostRequestPromise$category$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.collection = function (request) {
    return wrapPromise(PostRequestPromise$collection$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.product = function (request) {
    return wrapPromise(PostRequestPromise$product$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.admin = function (request) {
    return wrapPromise(PostRequestPromise$admin$slambda_0(this, request, null));
  };
  PostRequestPromise.prototype.uploads = function (files) {
    return wrapPromise(PostRequestPromise$uploads$slambda_0(this, files, null));
  };
  PostRequestPromise.prototype.orderCreate = function (request) {
    return wrapPromise(PostRequestPromise$orderCreate$slambda_0(this, request, null));
  };
  PostRequestPromise.$metadata$ = classMeta('PostRequestPromise');
  function PutRequestPromise$messageState$slambda(this$0, $id, $request, resultContinuation) {
    this.e61_1 = this$0;
    this.f61_1 = $id;
    this.g61_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$messageState$slambda.prototype.u5q = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$messageState$slambda.prototype.qi = function ($cont) {
    return this.u5q($cont);
  };
  PutRequestPromise$messageState$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.e61_1.h61_1.a4v().z5k(this.f61_1, this.g61_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$messageState$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$messageState$slambda(this.e61_1, this.f61_1, this.g61_1, completion);
    return i;
  };
  PutRequestPromise$messageState$slambda.$metadata$ = classMeta('PutRequestPromise$messageState$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$messageState$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$messageState$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.u5q($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$category$slambda(this$0, $id, $request, resultContinuation) {
    this.q61_1 = this$0;
    this.r61_1 = $id;
    this.s61_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$category$slambda.prototype.z5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$category$slambda.prototype.qi = function ($cont) {
    return this.z5p($cont);
  };
  PutRequestPromise$category$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.q61_1.h61_1.a4v().a5l(this.r61_1, this.s61_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$category$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$category$slambda(this.q61_1, this.r61_1, this.s61_1, completion);
    return i;
  };
  PutRequestPromise$category$slambda.$metadata$ = classMeta('PutRequestPromise$category$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$category$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$category$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.z5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$categoryState$slambda(this$0, $id, $request, resultContinuation) {
    this.b62_1 = this$0;
    this.c62_1 = $id;
    this.d62_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$categoryState$slambda.prototype.z5p = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$categoryState$slambda.prototype.qi = function ($cont) {
    return this.z5p($cont);
  };
  PutRequestPromise$categoryState$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.b62_1.h61_1.a4v().b5l(this.c62_1, this.d62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$categoryState$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$categoryState$slambda(this.b62_1, this.c62_1, this.d62_1, completion);
    return i;
  };
  PutRequestPromise$categoryState$slambda.$metadata$ = classMeta('PutRequestPromise$categoryState$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$categoryState$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$categoryState$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.z5p($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$collection$slambda(this$0, $id, $request, resultContinuation) {
    this.m62_1 = this$0;
    this.n62_1 = $id;
    this.o62_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$collection$slambda.prototype.v5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$collection$slambda.prototype.qi = function ($cont) {
    return this.v5o($cont);
  };
  PutRequestPromise$collection$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.m62_1.h61_1.a4v().c5l(this.n62_1, this.o62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$collection$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$collection$slambda(this.m62_1, this.n62_1, this.o62_1, completion);
    return i;
  };
  PutRequestPromise$collection$slambda.$metadata$ = classMeta('PutRequestPromise$collection$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$collection$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$collection$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$collectionState$slambda(this$0, $id, $request, resultContinuation) {
    this.x62_1 = this$0;
    this.y62_1 = $id;
    this.z62_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$collectionState$slambda.prototype.v5o = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$collectionState$slambda.prototype.qi = function ($cont) {
    return this.v5o($cont);
  };
  PutRequestPromise$collectionState$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.x62_1.h61_1.a4v().d5l(this.y62_1, this.z62_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$collectionState$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$collectionState$slambda(this.x62_1, this.y62_1, this.z62_1, completion);
    return i;
  };
  PutRequestPromise$collectionState$slambda.$metadata$ = classMeta('PutRequestPromise$collectionState$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$collectionState$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$collectionState$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5o($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$product$slambda(this$0, $id, $request, resultContinuation) {
    this.i63_1 = this$0;
    this.j63_1 = $id;
    this.k63_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$product$slambda.prototype.k5t = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$product$slambda.prototype.qi = function ($cont) {
    return this.k5t($cont);
  };
  PutRequestPromise$product$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.i63_1.h61_1.a4v().e5l(this.j63_1, this.k63_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$product$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$product$slambda(this.i63_1, this.j63_1, this.k63_1, completion);
    return i;
  };
  PutRequestPromise$product$slambda.$metadata$ = classMeta('PutRequestPromise$product$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$product$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$product$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.k5t($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$productState$slambda(this$0, $id, $request, resultContinuation) {
    this.t63_1 = this$0;
    this.u63_1 = $id;
    this.v63_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$productState$slambda.prototype.k5t = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$productState$slambda.prototype.qi = function ($cont) {
    return this.k5t($cont);
  };
  PutRequestPromise$productState$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.t63_1.h61_1.a4v().f5l(this.u63_1, this.v63_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$productState$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$productState$slambda(this.t63_1, this.u63_1, this.v63_1, completion);
    return i;
  };
  PutRequestPromise$productState$slambda.$metadata$ = classMeta('PutRequestPromise$productState$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$productState$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$productState$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.k5t($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$admin$slambda(this$0, $id, $request, resultContinuation) {
    this.e64_1 = this$0;
    this.f64_1 = $id;
    this.g64_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$admin$slambda.prototype.v5v = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$admin$slambda.prototype.qi = function ($cont) {
    return this.v5v($cont);
  };
  PutRequestPromise$admin$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.e64_1.h61_1.a4v().g5l(this.f64_1, this.g64_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$admin$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$admin$slambda(this.e64_1, this.f64_1, this.g64_1, completion);
    return i;
  };
  PutRequestPromise$admin$slambda.$metadata$ = classMeta('PutRequestPromise$admin$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$admin$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$admin$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.v5v($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$orderCustomer$slambda(this$0, $id, $request, resultContinuation) {
    this.p64_1 = this$0;
    this.q64_1 = $id;
    this.r64_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$orderCustomer$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$orderCustomer$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  PutRequestPromise$orderCustomer$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.p64_1.h61_1.a4v().h5l(this.q64_1, this.r64_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$orderCustomer$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$orderCustomer$slambda(this.p64_1, this.q64_1, this.r64_1, completion);
    return i;
  };
  PutRequestPromise$orderCustomer$slambda.$metadata$ = classMeta('PutRequestPromise$orderCustomer$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$orderCustomer$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$orderCustomer$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$orderNote$slambda(this$0, $id, $request, resultContinuation) {
    this.a65_1 = this$0;
    this.b65_1 = $id;
    this.c65_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$orderNote$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$orderNote$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  PutRequestPromise$orderNote$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.a65_1.h61_1.a4v().i5l(this.b65_1, this.c65_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$orderNote$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$orderNote$slambda(this.a65_1, this.b65_1, this.c65_1, completion);
    return i;
  };
  PutRequestPromise$orderNote$slambda.$metadata$ = classMeta('PutRequestPromise$orderNote$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$orderNote$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$orderNote$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise$orderState$slambda(this$0, $id, $request, resultContinuation) {
    this.l65_1 = this$0;
    this.m65_1 = $id;
    this.n65_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  PutRequestPromise$orderState$slambda.prototype.q5u = function ($cont) {
    var tmp = this.f5n($cont);
    tmp.lh_1 = Unit_getInstance();
    tmp.mh_1 = null;
    return tmp.sh();
  };
  PutRequestPromise$orderState$slambda.prototype.qi = function ($cont) {
    return this.q5u($cont);
  };
  PutRequestPromise$orderState$slambda.prototype.sh = function () {
    var suspendResult = this.lh_1;
    $sm: do
      try {
        var tmp = this.jh_1;
        switch (tmp) {
          case 0:
            this.kh_1 = 2;
            this.jh_1 = 1;
            suspendResult = this.l65_1.h61_1.a4v().j5l(this.m65_1, this.n65_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  PutRequestPromise$orderState$slambda.prototype.f5n = function (completion) {
    var i = new PutRequestPromise$orderState$slambda(this.l65_1, this.m65_1, this.n65_1, completion);
    return i;
  };
  PutRequestPromise$orderState$slambda.$metadata$ = classMeta('PutRequestPromise$orderState$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function PutRequestPromise$orderState$slambda_0(this$0, $id, $request, resultContinuation) {
    var i = new PutRequestPromise$orderState$slambda(this$0, $id, $request, resultContinuation);
    var l = function ($cont) {
      return i.q5u($cont);
    };
    l.$arity = 0;
    return l;
  }
  function PutRequestPromise(client) {
    this.h61_1 = client;
  }
  PutRequestPromise.prototype.messageState = function (id, request) {
    return wrapPromise(PutRequestPromise$messageState$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.category = function (id, request) {
    return wrapPromise(PutRequestPromise$category$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.categoryState = function (id, request) {
    return wrapPromise(PutRequestPromise$categoryState$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.collection = function (id, request) {
    return wrapPromise(PutRequestPromise$collection$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.collectionState = function (id, request) {
    return wrapPromise(PutRequestPromise$collectionState$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.product = function (id, request) {
    return wrapPromise(PutRequestPromise$product$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.productState = function (id, request) {
    return wrapPromise(PutRequestPromise$productState$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.admin = function (id, request) {
    return wrapPromise(PutRequestPromise$admin$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.orderCustomer = function (id, request) {
    return wrapPromise(PutRequestPromise$orderCustomer$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.orderNote = function (id, request) {
    return wrapPromise(PutRequestPromise$orderNote$slambda_0(this, id, request, null));
  };
  PutRequestPromise.prototype.orderState = function (id, request) {
    return wrapPromise(PutRequestPromise$orderState$slambda_0(this, id, request, null));
  };
  PutRequestPromise.$metadata$ = classMeta('PutRequestPromise');
  //region block: post-declaration
  $serializer.prototype.r3z = typeParametersSerializers;
  $serializer_0.prototype.r3z = typeParametersSerializers;
  $serializer_1.prototype.r3z = typeParametersSerializers;
  $serializer_2.prototype.r3z = typeParametersSerializers;
  $serializer_3.prototype.r3z = typeParametersSerializers;
  $serializer_4.prototype.r3z = typeParametersSerializers;
  $serializer_5.prototype.r3z = typeParametersSerializers;
  $serializer_6.prototype.r3z = typeParametersSerializers;
  $serializer_7.prototype.r3z = typeParametersSerializers;
  $serializer_8.prototype.r3z = typeParametersSerializers;
  $serializer_9.prototype.r3z = typeParametersSerializers;
  $serializer_10.prototype.r3z = typeParametersSerializers;
  $serializer_11.prototype.r3z = typeParametersSerializers;
  $serializer_12.prototype.r3z = typeParametersSerializers;
  $serializer_13.prototype.r3z = typeParametersSerializers;
  $serializer_14.prototype.r3z = typeParametersSerializers;
  $serializer_15.prototype.r3z = typeParametersSerializers;
  $serializer_16.prototype.r3z = typeParametersSerializers;
  $serializer_17.prototype.r3z = typeParametersSerializers;
  $serializer_18.prototype.r3z = typeParametersSerializers;
  $serializer_19.prototype.r3z = typeParametersSerializers;
  $serializer_20.prototype.r3z = typeParametersSerializers;
  $serializer_21.prototype.r3z = typeParametersSerializers;
  $serializer_22.prototype.r3z = typeParametersSerializers;
  $serializer_23.prototype.r3z = typeParametersSerializers;
  $serializer_24.prototype.r3z = typeParametersSerializers;
  $serializer_25.prototype.r3z = typeParametersSerializers;
  $serializer_26.prototype.r3z = typeParametersSerializers;
  $serializer_27.prototype.r3z = typeParametersSerializers;
  $serializer_28.prototype.r3z = typeParametersSerializers;
  $serializer_29.prototype.r3z = typeParametersSerializers;
  $serializer_30.prototype.r3z = typeParametersSerializers;
  $serializer_31.prototype.r3z = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    $com$keygenqt$shop.Greeting = Greeting;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.AdminCreateRequest = AdminCreateRequest;
    $com$keygenqt$shop$data$requests.AdminCreateRequest.AdminCreateRequest_init_$Create$ = AdminCreateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.AdminCreateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_4
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.AdminCreateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    $com$keygenqt$shop$data$requests.AdminUpdateRequest = AdminUpdateRequest;
    $com$keygenqt$shop$data$requests.AdminUpdateRequest.AdminUpdateRequest_init_$Create$ = AdminUpdateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.AdminUpdateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_5
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.AdminUpdateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_0
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.CategoryRequest = CategoryRequest;
    $com$keygenqt$shop$data$requests.CategoryRequest.CategoryRequest_init_$Create$ = CategoryRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.CategoryRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_6
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.CategoryRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_1
    });
    $com$keygenqt$shop$data$requests.CategoryStateRequest = CategoryStateRequest;
    $com$keygenqt$shop$data$requests.CategoryStateRequest.CategoryStateRequest_init_$Create$ = CategoryStateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.CategoryStateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_7
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.CategoryStateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_2
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.CollectionRequest = CollectionRequest;
    $com$keygenqt$shop$data$requests.CollectionRequest.CollectionRequest_init_$Create$ = CollectionRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.CollectionRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_8
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.CollectionRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_3
    });
    $com$keygenqt$shop$data$requests.CollectionStateRequest = CollectionStateRequest;
    $com$keygenqt$shop$data$requests.CollectionStateRequest.CollectionStateRequest_init_$Create$ = CollectionStateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.CollectionStateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_9
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.CollectionStateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_4
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.FileRequest = FileRequest;
    $com$keygenqt$shop$data$requests.FileRequest.FileRequest_init_$Create$ = FileRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.FileRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_10
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.FileRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_5
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.LoginRequest = LoginRequest;
    $com$keygenqt$shop$data$requests.LoginRequest.LoginRequest_init_$Create$ = LoginRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.LoginRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_11
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.LoginRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_6
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.MessageRequest = MessageRequest;
    $com$keygenqt$shop$data$requests.MessageRequest.MessageRequest_init_$Create$ = MessageRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.MessageRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_12
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.MessageRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_7
    });
    $com$keygenqt$shop$data$requests.MessageStateRequest = MessageStateRequest;
    $com$keygenqt$shop$data$requests.MessageStateRequest.MessageStateRequest_init_$Create$ = MessageStateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.MessageStateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_13
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.MessageStateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_8
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.OrderNoteRequest = OrderNoteRequest;
    $com$keygenqt$shop$data$requests.OrderNoteRequest.OrderNoteRequest_init_$Create$ = OrderNoteRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderNoteRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_14
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderNoteRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_9
    });
    $com$keygenqt$shop$data$requests.OrderCustomerRequest = OrderCustomerRequest;
    $com$keygenqt$shop$data$requests.OrderCustomerRequest.OrderCustomerRequest_init_$Create$ = OrderCustomerRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderCustomerRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_15
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderCustomerRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_10
    });
    $com$keygenqt$shop$data$requests.OrderStateRequest = OrderStateRequest;
    $com$keygenqt$shop$data$requests.OrderStateRequest.OrderStateRequest_init_$Create$ = OrderStateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderStateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_16
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderStateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_11
    });
    $com$keygenqt$shop$data$requests.OrderCreateRequest = OrderCreateRequest;
    $com$keygenqt$shop$data$requests.OrderCreateRequest.OrderCreateRequest_init_$Create$ = OrderCreateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderCreateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_17
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderCreateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_12
    });
    $com$keygenqt$shop$data$requests.OrderProductRequest = OrderProductRequest;
    $com$keygenqt$shop$data$requests.OrderProductRequest.OrderProductRequest_init_$Create$ = OrderProductRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderProductRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_18
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderProductRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_13
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$requests = $com$keygenqt$shop$data.requests || ($com$keygenqt$shop$data.requests = {});
    $com$keygenqt$shop$data$requests.OrderProduct = OrderProduct;
    $com$keygenqt$shop$data$requests.OrderProduct.values = values;
    $com$keygenqt$shop$data$requests.OrderProduct.valueOf = valueOf;
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderProduct, 'NEWEST', {
      configurable: true,
      get: OrderProduct_NEWEST_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderProduct, 'LOW', {
      configurable: true,
      get: OrderProduct_LOW_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.OrderProduct, 'HEIGHT', {
      configurable: true,
      get: OrderProduct_HEIGHT_getInstance
    });
    $com$keygenqt$shop$data$requests.ProductRequest = ProductRequest;
    $com$keygenqt$shop$data$requests.ProductRequest.ProductRequest_init_$Create$ = ProductRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.ProductRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_19
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.ProductRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_14
    });
    $com$keygenqt$shop$data$requests.ProductStateRequest = ProductStateRequest;
    $com$keygenqt$shop$data$requests.ProductStateRequest.ProductStateRequest_init_$Create$ = ProductStateRequest_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$requests.ProductStateRequest, 'Companion', {
      configurable: true,
      get: Companion_getInstance_20
    });
    Object.defineProperty($com$keygenqt$shop$data$requests.ProductStateRequest, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_15
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.AdminRole = AdminRole;
    $com$keygenqt$shop$data$responses.AdminRole.values = values_0;
    $com$keygenqt$shop$data$responses.AdminRole.valueOf = valueOf_0;
    Object.defineProperty($com$keygenqt$shop$data$responses.AdminRole, 'GUEST', {
      configurable: true,
      get: AdminRole_GUEST_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.AdminRole, 'MANAGER', {
      configurable: true,
      get: AdminRole_MANAGER_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.AdminRole, 'ADMIN', {
      configurable: true,
      get: AdminRole_ADMIN_getInstance
    });
    $com$keygenqt$shop$data$responses.AdminResponse = AdminResponse;
    $com$keygenqt$shop$data$responses.AdminResponse.AdminResponse_init_$Create$ = AdminResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.AdminResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_21
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.AdminResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_16
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.CategoryResponse = CategoryResponse;
    $com$keygenqt$shop$data$responses.CategoryResponse.CategoryResponse_init_$Create$ = CategoryResponse_init_$Create$_0;
    Object.defineProperty($com$keygenqt$shop$data$responses.CategoryResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_22
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.CategoryResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_17
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.CollectionResponse = CollectionResponse;
    $com$keygenqt$shop$data$responses.CollectionResponse.CollectionResponse_init_$Create$ = CollectionResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.CollectionResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_23
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.CollectionResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_18
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.DashboardCountResponse = DashboardCountResponse;
    $com$keygenqt$shop$data$responses.DashboardCountResponse.DashboardCountResponse_init_$Create$ = DashboardCountResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardCountResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_24
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardCountResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_19
    });
    $com$keygenqt$shop$data$responses.DashboardAmountResponse = DashboardAmountResponse;
    $com$keygenqt$shop$data$responses.DashboardAmountResponse.DashboardAmountResponse_init_$Create$ = DashboardAmountResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardAmountResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_25
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardAmountResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_20
    });
    $com$keygenqt$shop$data$responses.DashboardChartResponse = DashboardChartResponse;
    $com$keygenqt$shop$data$responses.DashboardChartResponse.DashboardChartResponse_init_$Create$ = DashboardChartResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardChartResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_26
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.DashboardChartResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_21
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.MessageResponse = MessageResponse;
    $com$keygenqt$shop$data$responses.MessageResponse.MessageResponse_init_$Create$ = MessageResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.MessageResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_27
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.MessageResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_22
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.OrderState = OrderState;
    $com$keygenqt$shop$data$responses.OrderState.values = values_1;
    $com$keygenqt$shop$data$responses.OrderState.valueOf = valueOf_1;
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderState, 'NEW', {
      configurable: true,
      get: OrderState_NEW_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderState, 'PENDING', {
      configurable: true,
      get: OrderState_PENDING_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderState, 'COMPLETED', {
      configurable: true,
      get: OrderState_COMPLETED_getInstance
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderState, 'CANCELED', {
      configurable: true,
      get: OrderState_CANCELED_getInstance
    });
    $com$keygenqt$shop$data$responses.OrderProductResponse = OrderProductResponse;
    $com$keygenqt$shop$data$responses.OrderProductResponse.OrderProductResponse_init_$Create$ = OrderProductResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderProductResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_28
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderProductResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_23
    });
    $com$keygenqt$shop$data$responses.OrderResponse = OrderResponse;
    $com$keygenqt$shop$data$responses.OrderResponse.OrderResponse_init_$Create$ = OrderResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_29
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.OrderResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_24
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.ProductCountResponse = ProductCountResponse;
    $com$keygenqt$shop$data$responses.ProductCountResponse.ProductCountResponse_init_$Create$ = ProductCountResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductCountResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_30
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductCountResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_25
    });
    $com$keygenqt$shop$data$responses.ProductPageResponse = ProductPageResponse;
    $com$keygenqt$shop$data$responses.ProductPageResponse.ProductPageResponse_init_$Create$ = ProductPageResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductPageResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_31
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductPageResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_26
    });
    $com$keygenqt$shop$data$responses.ProductResponse = ProductResponse;
    $com$keygenqt$shop$data$responses.ProductResponse.ProductResponse_init_$Create$ = ProductResponse_init_$Create$_0;
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_32
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_27
    });
    $com$keygenqt$shop$data$responses.ProductPricesResponse = ProductPricesResponse;
    $com$keygenqt$shop$data$responses.ProductPricesResponse.ProductPricesResponse_init_$Create$ = ProductPricesResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductPricesResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_33
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.ProductPricesResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_28
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$data = $com$keygenqt$shop.data || ($com$keygenqt$shop.data = {});
    var $com$keygenqt$shop$data$responses = $com$keygenqt$shop$data.responses || ($com$keygenqt$shop$data.responses = {});
    $com$keygenqt$shop$data$responses.UploadResponse = UploadResponse;
    $com$keygenqt$shop$data$responses.UploadResponse.UploadResponse_init_$Create$ = UploadResponse_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$data$responses.UploadResponse, 'Companion', {
      configurable: true,
      get: Companion_getInstance_34
    });
    Object.defineProperty($com$keygenqt$shop$data$responses.UploadResponse, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_29
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$exception = $com$keygenqt$shop.exception || ($com$keygenqt$shop.exception = {});
    $com$keygenqt$shop$exception.ResponseException = ResponseException;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$exception = $com$keygenqt$shop.exception || ($com$keygenqt$shop.exception = {});
    $com$keygenqt$shop$exception.ValidateViolation = ValidateViolation;
    $com$keygenqt$shop$exception.ValidateViolation.ValidateViolation_init_$Create$ = ValidateViolation_init_$Create$;
    Object.defineProperty($com$keygenqt$shop$exception.ValidateViolation, 'Companion', {
      configurable: true,
      get: Companion_getInstance_36
    });
    Object.defineProperty($com$keygenqt$shop$exception.ValidateViolation, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_31
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$utils = $com$keygenqt$shop.utils || ($com$keygenqt$shop.utils = {});
    var $com$keygenqt$shop$utils$constants = $com$keygenqt$shop$utils.constants || ($com$keygenqt$shop$utils.constants = {});
    Object.defineProperty($com$keygenqt$shop$utils$constants, 'AppConstants', {
      configurable: true,
      get: AppConstants_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$utils = $com$keygenqt$shop.utils || ($com$keygenqt$shop.utils = {});
    var $com$keygenqt$shop$utils$constants = $com$keygenqt$shop$utils.constants || ($com$keygenqt$shop$utils.constants = {});
    var $com$keygenqt$shop$utils$constants$impl = $com$keygenqt$shop$utils$constants.impl || ($com$keygenqt$shop$utils$constants.impl = {});
    Object.defineProperty($com$keygenqt$shop$utils$constants$impl, 'FormatConstants', {
      configurable: true,
      get: FormatConstants_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$utils = $com$keygenqt$shop.utils || ($com$keygenqt$shop.utils = {});
    var $com$keygenqt$shop$utils$constants = $com$keygenqt$shop$utils.constants || ($com$keygenqt$shop$utils.constants = {});
    var $com$keygenqt$shop$utils$constants$impl = $com$keygenqt$shop$utils$constants.impl || ($com$keygenqt$shop$utils$constants.impl = {});
    Object.defineProperty($com$keygenqt$shop$utils$constants$impl, 'LinksConstants', {
      configurable: true,
      get: LinksConstants_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$utils = $com$keygenqt$shop.utils || ($com$keygenqt$shop.utils = {});
    var $com$keygenqt$shop$utils$constants = $com$keygenqt$shop$utils.constants || ($com$keygenqt$shop$utils.constants = {});
    var $com$keygenqt$shop$utils$constants$impl = $com$keygenqt$shop$utils$constants.impl || ($com$keygenqt$shop$utils$constants.impl = {});
    Object.defineProperty($com$keygenqt$shop$utils$constants$impl, 'OtherConstants', {
      configurable: true,
      get: OtherConstants_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$services = $com$keygenqt$shop.services || ($com$keygenqt$shop.services = {});
    $com$keygenqt$shop$services.ServiceRequestJS = ServiceRequestJS;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$services = $com$keygenqt$shop.services || ($com$keygenqt$shop.services = {});
    var $com$keygenqt$shop$services$impl = $com$keygenqt$shop$services.impl || ($com$keygenqt$shop$services.impl = {});
    $com$keygenqt$shop$services$impl.DeleteRequestPromise = DeleteRequestPromise;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$services = $com$keygenqt$shop.services || ($com$keygenqt$shop.services = {});
    var $com$keygenqt$shop$services$impl = $com$keygenqt$shop$services.impl || ($com$keygenqt$shop$services.impl = {});
    $com$keygenqt$shop$services$impl.GetRequestPromise = GetRequestPromise;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$services = $com$keygenqt$shop.services || ($com$keygenqt$shop.services = {});
    var $com$keygenqt$shop$services$impl = $com$keygenqt$shop$services.impl || ($com$keygenqt$shop$services.impl = {});
    $com$keygenqt$shop$services$impl.PostRequestPromise = PostRequestPromise;
    var $com = _.com || (_.com = {});
    var $com$keygenqt = $com.keygenqt || ($com.keygenqt = {});
    var $com$keygenqt$shop = $com$keygenqt.shop || ($com$keygenqt.shop = {});
    var $com$keygenqt$shop$services = $com$keygenqt$shop.services || ($com$keygenqt$shop.services = {});
    var $com$keygenqt$shop$services$impl = $com$keygenqt$shop$services.impl || ($com$keygenqt$shop$services.impl = {});
    $com$keygenqt$shop$services$impl.PutRequestPromise = PutRequestPromise;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=shared.js.map
