!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,a=(()=>{const e=document.querySelector("#container"),t=[{name:"Sandwich",desc:"The very best sandwich created by Sandwich Maker himself!",imgs:"assets/sandwich.jpg",imga:"Gorgeous sandwich"},{name:"Steak",desc:"Supreme steak of a perfectly normal beast.",imgs:"assets/steak.jpg",imga:"Juicy steak"},{name:"Pizza",desc:"Pizza. What else should we add?",imgs:"assets/pizza.jpg",imga:"Delicious Pizza"}];return{render:()=>{let n=document.createElement("div");n.classList.add("menu");let a=document.createElement("h3");a.textContent="Today's menu:",n.appendChild(a),t.forEach(e=>{n.appendChild((e=>{let t=document.createElement("div");t.classList.add("item");let n=document.createElement("h4"),r=document.createElement("p"),a=document.createElement("img");return n.textContent=e.title,r.textContent=e.desc,a.src=e.imgs,a.alt=e.imga,t.appendChild(n),t.appendChild(a),t.appendChild(r),t})(e))}),r=n,e.appendChild(r)}}})();(()=>{const e=document.querySelector("#container")})();(()=>{const e=document.querySelector("#container")})();a.render()}]);