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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_css_bootstrap_rtl_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css */ \"./node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(function() {\r\n\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  \r\n    $('.add-to-cart-btn').click(function() {\r\n        alert('أضيف المُنتج إلى عربة الشراء');\r\n\r\n\r\n    });\r\n\r\n    $('#copyright').text(\"جميع الحقوق محفوظة للمتجر سنة\" + new Date().getFullYear());\r\n\r\n\r\n\r\n    $('.product-option input[type=\"radio\"]').change(function() {\r\n        $(this).parents('.product-option').siblings().removeClass('active');\r\n        $(this).parents('.product-option').addClass('active');\r\n      });\r\n      $('[data-remove-from-cart]').on( \"click\",function() { \r\n        $(this).parents('[data-product-info]').remove();\r\n  \r\n        // أعد حساب السعر الإجمالي بعد حذف أحد المُنتجات\r\n        calculateTotalPrice();\r\n    });\r\n  \r\n    // عندما تتغير كمية المنتج\r\n    $('[data-product-quantity]').on( \"change\",function() {\r\n        \r\n        // اجلب الكمية الجديدة\r\n        var newQuantity = $(this).val();\r\n  \r\n        // ابحث عن السّطر الّذي يحتوي معلومات هذا المُنتج\r\n        var $parent = $(this).parents('[data-product-info]');\r\n  \r\n        // اجلب سعر القطعة الواحدة من معلومات المنتج\r\n        var pricePerUnit = $parent.attr('data-product-price');\r\n  \r\n        // السعر الإجمالي للمنتج هو سعر القطعة مضروبًا بعددها\r\n        var totalPriceForProduct = newQuantity * pricePerUnit;\r\n  \r\n        // عين السعر الجديد ضمن خليّة السّعر الإجمالي للمنتج في هذا السطر\r\n        $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');\r\n  \r\n        // حدث السعر الإجمالي لكل المُنتجات\r\n        calculateTotalPrice();\r\n    });\r\n  \r\n    function calculateTotalPrice() {\r\n        \r\n      // أنشئ متغيّرًا جديدًا لحفظ السعر الإجمالي\r\n      var totalPriceForAllProducts = 0;\r\n  \r\n      // لكل سطر يمثل معلومات المُنتج في الصّفحة\r\n      $('[data-product-info]').each(function() {\r\n  \r\n          // اجلب سعر القطعة الواحدة من الخاصّية الموافقة\r\n          var pricePerUnit = $(this).attr('data-product-price');\r\n  \r\n          // اجلب كمية المنتج من حقل اختيار الكمية\r\n          var quantity = $(this).find('[data-product-quantity]').val();\r\n  \r\n          var totalPriceForProduct = pricePerUnit * quantity;\r\n  \r\n          // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه\r\n          totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);\r\n      });\r\n  \r\n        // حدث السعر الإجمالي لكل المُنتجات في الصفحة\r\n      $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');\r\n    }\r\n  \r\n    var citiesByCountry = {\r\n        sa: ['الرياض','جدة'],\r\n        eg: ['القاهرة','الإسكندرية'],\r\n        jo: ['عمان','الزرقاء'],\r\n        sy: ['دمشق','حلب','حماه']\r\n    };\r\n  \r\n\r\n});\n\n//# sourceURL=webpack://amalec/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("514189b08d31266ac3aa")
/******/ })();
/******/ 
/******/ }
);