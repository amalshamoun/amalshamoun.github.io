"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateamalec"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laylazi_bootstrap_rtl_scss_dist_css_bootstrap_rtl_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css */ \"./node_modules/@laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-jquery-ui */ \"./node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webpack-jquery-ui/css */ \"./node_modules/webpack-jquery-ui/css.js\");\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-ui-touch-punch/jquery.ui.touch-punch.min.js */ \"./node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js\");\n/* harmony import */ var jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_8__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(function() {\r\n\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  \r\n    $('.add-to-cart-btn').click(function() \r\n    {\r\n        alert('أضيف المُنتج إلى عربة الشراء');\r\n\r\n\r\n    });\r\n\r\n    $('#copyright').text(\"جميع الحقوق محفوظة للمتجر سنة\" + new Date().getFullYear());\r\n\r\n\r\n\r\n    $('.product-option input[type=\"radio\"]').change(function() {\r\n        $(this).parents('.product-option').siblings().removeClass('active');\r\n        $(this).parents('.product-option').addClass('active');\r\n      });\r\n      $('[data-remove-from-cart]').on( \"click\",function() { \r\n        $(this).parents('[data-product-info]').remove();\r\n  \r\n        // أعد حساب السعر الإجمالي بعد حذف أحد المنتجات\r\n        calculateTotalPrice();\r\n    });\r\n  \r\n    // عندما تتغير كمية المنتج\r\n    $('[data-product-quantity]').on( \"change\",function() \r\n    {\r\n    var newQuantity = $(this).val();\r\n  \r\n    // ابحث عن السطر الذي يحتوي معلومات هذا المنتج\r\n    var $parent = $(this).parents('[data-product-info]');\r\n  \r\n    // اجلب سعر القطعة الواحدة من معلومات المنتج\r\n    var pricePerUnit = $parent.attr('data-product-price');\r\n  \r\n    // السعر الإجمالي للمنتج هو سعر القطعة مضروبا بعددها\r\n    var totalPriceForProduct = newQuantity * pricePerUnit;\r\n  \r\n        // عين السعر الجديد ضمن خليّة السعر الإجمالي للمنتج في هذا السطر\r\n        $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');\r\n  \r\n        // حدث السعر الإجمالي لكل المنتجات\r\n        calculateTotalPrice();\r\n    });\r\n  \r\n    function calculateTotalPrice() {\r\n        \r\n      // أنشئ متغيّرا جديدا لحفظ السعر الإجمالي\r\n      var totalPriceForAllProducts = 0;\r\n  \r\n      // لكل سطر يمثل معلومات المنتج في الصفحة\r\n      $('[data-product-info]').each(function() {\r\n  \r\n          // اجلب سعر القطعة الواحدة من الخاصّية الموافقة\r\n          var pricePerUnit = $(this).attr('data-product-price');\r\n  \r\n          // اجلب كمية المنتج من حقل اختيار الكمية\r\n          var quantity = $(this).find('[data-product-quantity]').val();\r\n  \r\n          var totalPriceForProduct = pricePerUnit * quantity;\r\n  \r\n          // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه\r\n          totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);\r\n      });\r\n  \r\n        // حدث السعر الإجمالي لكل المنتجات في الصفحة\r\n      $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');\r\n    }\r\n  \r\n    var citiesByCountry = {\r\n        sa: ['الرياض','جدة'],\r\n        eg: ['الإسكندرية' ,'القاهرة'],\r\n        jo: ['الزرقاء','عمان'],\r\n        sy: ['دمشق','حماه','حلب']\r\n    };\r\n  \r\n        // عندما يتغير البلد\r\n     $('#form-checkout select[name=\"country\"]').change(function() {\r\n       // اجلب رمز البلد\r\n    var country = $(this).val();\r\n\r\n    // اجلب مدن هذا البلد من المصفوفة\r\n    var cities = citiesByCountry[country];\r\n\r\n    // فرّغ قائمة المدن\r\n    $('#form-checkout select[name=\"city\"]').empty();\r\n      //أضافة خيار اختر المدينه\r\n    $('#form-checkout select[name=\"city\"]').append(\r\n        '<option disabled selected value=\"\">اختر المدينة</option>'\r\n    );\r\n\r\n    // أضف المدن إلى قائمة المدن\r\n    cities.forEach(function(city) {\r\n      var newOption = $('<option></option>');\r\n      newOption.text(city);\r\n      newOption.val(city);\r\n      $('#form-checkout select[name=\"city\"]').append(newOption);\r\n    });\r\n  });\r\n     //عندما تتغير طريقة الدفع\r\n    $('#form-checkout input[name=\"payment_method\"]').change(function(){\r\n     // اجلب القيمة المختارة حاليا\r\n     var paymentMethod = $(this).val();\r\n\r\n     if (paymentMethod === 'on_delivery') {\r\n\r\n    // إذا كانت عند الاستلام، فعطل حقول بطاقة الائتمان\r\n    $('#credit-card-info input').prop('disabled', true);\r\n\r\n    } \r\n   else {\r\n\r\n    // وإلا ففعلها\r\n    $('#credit-card-info input').prop('disabled', false);\r\n    }\r\n\r\n    // بدل معلومات بطاقة الائتمان بين الظهور والإخفاء\r\n    $('#credit-card-info').toggle();\r\n     });\r\n  \r\n  \r\n      //مكون البحث حسب السعر   \r\n  $( \"#price-range\" ).slider\r\n  ({\r\n    range: true,\r\n    min: 50,\r\n    max: 1000,\r\n    step: 50,\r\n    values: [ 250, 800 ],\r\n    slide: function( event, ui ) {\r\n      $('#price-min').text(ui.values[0]);\r\n      $('#price-max').text(ui.values[1]);\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://amalec/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d9885b75e53c88927cd")
/******/ })();
/******/ 
/******/ }
);