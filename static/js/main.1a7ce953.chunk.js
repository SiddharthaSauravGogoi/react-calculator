(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,function(e,t,_){"use strict";_.d(t,"a",(function(){return l})),_.d(t,"c",(function(){return r})),_.d(t,"b",(function(){return a})),_.d(t,"d",(function(){return s}));var a=[1,2,3,"Add(+)",4,5,6,"Subtract(-)",7,8,9,"Multiply(*)","Clear",0,"=","Divide(/)"],s=["square","square root","\xb1"],l=function(e){return e.join("")},u=function(e,t,_){var a=e.split("");return _+t+(e=a.reverse().join(""))},r=function(e,t,_,a){for(var s,r=l(e),c="",o=!1,i=r.length-1;0!==i;i--){if("+"===r[i]){s=r[i],o=!0;break}if("*"===r[i]){s=r[i],o=!0;break}if("-"===r[i]){s=r[i],o=!0;break}if("/"===r[i]){s=r[i],o=!0;break}c+=r[i]}var n={number:c,sign:s};return o?"finalResult"===a?u(c,s,t||_):n:"finalResult"===a?c:n}},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),_components_CalculatorButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),_components_ScientificMode_ScientificMode__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1);function App(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!1),_React$useState2=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),scientificMode=_React$useState2[0],updateScientificMode=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!1),_React$useState4=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState3,2),dark=_React$useState4[0],setDark=_React$useState4[1],_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState2=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),stack=_useState2[0],updateStack=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState4=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),intermediateResult=_useState4[0],updateIntermediateResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState6=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),swapDisplay=_useState6[0],updateSwapDisplay=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState8=Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),displayResult=_useState8[0],updateDisplayResult=_useState8[1],toggleScientificMode=function(){updateScientificMode(!scientificMode)},toggle=function(e){if("light"===e){localStorage.setItem("dark",JSON.stringify(!1)),setDark(!1)}else{localStorage.setItem("dark",JSON.stringify(!0)),setDark(!0)}};react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect((function(){var e="true"===localStorage.getItem("dark");setDark(e)}),[dark]);var themes={dark:{backgroundColor:"#666",color:"#fff",pageColor:"#000"},light:{backgroundColor:"#f0f0f0",color:"#000",pageColor:"#fff"}},getInput=function getInput(input){if("Add(+)"===input){if("+"!==stack[stack.length-1]){updateStack([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(stack),["+"]));var tempResult=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);updateDisplayResult([]),updateIntermediateResult(eval(tempResult))}}else if("Subtract(-)"===input){if("-"!==stack[stack.length-1]){updateStack([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(stack),["-"]));var _tempResult=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);updateDisplayResult([]),updateIntermediateResult(eval(_tempResult))}}else if("Multiply(*)"===input){if("*"!==stack[stack.length-1]){updateStack([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(stack),["*"]));var _tempResult2=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);updateDisplayResult([]),updateIntermediateResult(eval(_tempResult2))}}else if("Divide(/)"===input){if("/"!==stack[stack.length-1]){updateStack([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(stack),["/"]));var _tempResult3=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);updateDisplayResult([]),updateIntermediateResult(eval(_tempResult3))}}else if("="===input){if(stack.length){var _tempResult4=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);if("+"===_tempResult4[_tempResult4.length-1]||"-"===_tempResult4[_tempResult4.length-1]||"*"===_tempResult4[_tempResult4.length]||"/"===_tempResult4[_tempResult4.length])alert("Needs an operand!");else{var sum=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.c)(stack,intermediateResult,swapDisplay,"finalResult");updateDisplayResult([]),updateIntermediateResult(eval(sum))}}}else if("Clear"===input)updateStack([]),updateIntermediateResult(0),updateDisplayResult([]),updateSwapDisplay(null);else{if(updateStack([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(stack),[input])),intermediateResult)updateSwapDisplay(intermediateResult),updateIntermediateResult(null);else if(displayResult)updateIntermediateResult(null);else{var _tempResult5=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(stack);updateIntermediateResult(_tempResult5)}updateDisplayResult([].concat(Object(_Users_siddhut_Desktop_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(displayResult),[input]))}},performScientificOperations=function(e){if("\xb1"===e)if(displayResult.length){var t=-1*parseInt(Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(displayResult));updateDisplayResult([t]),updateStack([])}else{updateIntermediateResult(-1*intermediateResult),updateStack([])}else if("square"===e){var _;displayResult.length?(_=parseInt(Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(displayResult)),updateDisplayResult([_*=_]),updateStack([])):(updateIntermediateResult(_=intermediateResult*intermediateResult),updateStack([]))}else{var a;displayResult.length?(a=Math.sqrt(parseInt(Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)(displayResult))).toFixed(2),updateDisplayResult([a]),updateStack([])):(a=Math.sqrt(intermediateResult).toFixed(2),updateIntermediateResult(a),updateStack([]))}},theme=dark?themes.dark:themes.light,themeDark=dark?themes.light:themes.dark;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"container",style:{backgroundColor:theme.pageColor,color:theme.color}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:toggleScientificMode,style:{backgroundColor:theme.backgroundColor,color:theme.color}},"Scientifc Mode"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"toggle-theme-buttons"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{className:"toggle-button",onClick:function(){return toggle("light")},style:{backgroundColor:theme.backgroundColor,color:theme.color}},"Light"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{className:"toggle-button",onClick:function(){return toggle("dark")},style:{backgroundColor:themeDark.backgroundColor,color:themeDark.color}},"Dark")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"calulator-wrapper result-display",style:{backgroundColor:theme.backgroundColor,color:theme.color}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"stack-display"},stack),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"current-input"},displayResult,"  ",intermediateResult)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"calculator-wrapper"},_utils__WEBPACK_IMPORTED_MODULE_6__.b.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CalculatorButton__WEBPACK_IMPORTED_MODULE_4__.a,{key:t,style:{backgroundColor:theme.backgroundColor},getInput:getInput},e)}))),scientificMode?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ScientificMode_ScientificMode__WEBPACK_IMPORTED_MODULE_5__.a,{style:{backgroundColor:theme.backgroundColor,color:theme.color},calculations:{performScientificOperations:performScientificOperations}}):null))}__webpack_exports__.a=App},function(e,t,_){"use strict";var a=_(0),s=_.n(a);t.a=function(e){return s.a.createElement("div",{className:"square",onClick:function(){return e.getInput(e.children)},style:{backgroundColor:e.style.backgroundColor}},e.children)}},function(e,t,_){"use strict";var a=_(0),s=_.n(a),l=_(1);t.a=function(e){return s.a.createElement("div",{className:"calculator-wrapper"},l.d.map((function(t,_){return s.a.createElement("div",{className:"square",key:_,onClick:function(){return e.calculations.performScientificOperations(t)},style:{color:e.style.color,backgroundColor:e.style.backgroundColor}},t)})))}},function(e,t,_){e.exports=_(10)},function(e,t,_){"use strict";_.r(t);var a=_(0),s=_.n(a),l=_(5),u=_.n(l),r=(_(15),_(6));u.a.render(s.a.createElement(r.a,null),document.getElementById("root"))},,,,,function(e,t,_){},function(e,t,_){}],[[9,1,2]]]);
//# sourceMappingURL=main.1a7ce953.chunk.js.map