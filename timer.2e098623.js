parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yCUT":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){const t=new Date((new Date).getFullYear(),(new Date).getMonth()+1);function e(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function n(){const n=t-new Date;n<=0&&clearInterval(timerId);const d=n>0?Math.floor(n/1e3/60/60/24):0,l=n>0?Math.floor(n/1e3/60/60)%24:0,u=n>0?Math.floor(n/1e3/60)%60:0,i=n>0?Math.floor(n/1e3)%60:0;o.textContent=d<10?"0"+d:d,r.textContent=l<10?"0"+l:l,a.textContent=u<10?"0"+u:u,c.textContent=i<10?"0"+i:i,o.dataset.title=e(d,["день","дня","дней"]),r.dataset.title=e(l,["час","часа","часов"]),a.dataset.title=e(u,["минута","минуты","минут"]),c.dataset.title=e(i,["секунда","секунды","секунд"])}const o=document.querySelector(".timer__days"),r=document.querySelector(".timer__hours"),a=document.querySelector(".timer__minutes"),c=document.querySelector(".timer__seconds");n(),timerId=setInterval(n,1e3)});
},{}]},{},["yCUT"], null)
//# sourceMappingURL=/goit-js-hw-11/timer.2e098623.js.map