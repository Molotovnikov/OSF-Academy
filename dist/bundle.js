!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);n(1);let t=(new Date).getFullYear();$(".burger-icon").on("click",(function(){$(".header-nav").slideToggle(),$(".burger-menu").toggleClass("burger-menu--opened")})),$(".first-carousel").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),$(".carousel-wrapper-second").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,dots:!1,arrows:!0,prevArrow:$(".prev"),nextArrow:$(".next")}),$(".current-year").text(t),$(".Loadmore").on("click",(function(){$.ajax({url:"./data.json",dataType:"json",crossDomain:!0,method:"GET",success:function(e){}})}))},function(e,r,n){}]);