(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports={responsivePoster:"responsivePoster_ylwnA"}},150:function(e){e.exports=JSON.parse('{"a":[{"name":"Inter","variants":[400,600,700]},{"name":"Playfair Display","variants":[400,700]},{"name":"Roboto","variants":[400]}]}')},205:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(35),o=n.n(l),i=n(88),c=n(24),s=n(3),u=(n(29),n(41),n(42),n(43),n(33),n(46),n(27),n(34),n(48),n(49),n(50),n(1)),m=n.n(u);function f(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=Object(r.createContext)(),b=function(e){var t=e.children,n=p(Object(r.useState)([]),2),l=n[0],o=n[1],i=p(Object(r.useState)(0),2),c=i[0],s=i[1];return a.a.createElement(g.Provider,{value:{movieList:l,getMovieList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return l.length<t*e?[]:f(l.slice(t*e-t,t*e))},setMovieList:o,movieMaxPage:c,setMovieMaxPage:s}},t)};b.propTypes={children:m.a.node.isRequired};n(51),n(80),n(118),n(120),n(121),n(81),n(82),n(176),n(127);var y=function(e){var t=e.onSearchValueChange;return a.a.createElement("div",{className:"max-w-sm w-full mx-auto flex flex-row justify-center align-center relative"},a.a.createElement("input",{type:"text",className:"shadow-md rounded-md p-2 h-8 flex-grow focus:outline-none font-roboto text-xs",placeholder:"Search movie...",onInput:function(e){t(e.target.value)}}),a.a.createElement("div",{className:"absolute right-0 top-0 mt-1 mr-1 bg-white p-1"},a.a.createElement("svg",{className:"h-4 text-black",viewBox:"0 0 52.966 52.966"},a.a.createElement("defs",null),a.a.createElement("path",JSON.parse('{"d":"M51.704 51.273L36.845 35.82c3.79-3.801 6.138-9.041 6.138-14.82 0-11.58-9.42-21-21-21s-21 9.42-21 21 9.42 21 21 21c5.083 0 9.748-1.817 13.384-4.832l14.895 15.491a.998.998 0 001.414.028 1 1 0 00.028-1.414zM21.983 40c-10.477 0-19-8.523-19-19s8.523-19 19-19 19 8.523 19 19-8.524 19-19 19z"}')))))};y.propTypes={onSearchValueChange:m.a.func.isRequired};n(84),n(177),n(128),n(61),n(180);var h=n(209);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function w(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=Object(r.createContext)({parent:{}}),N=function(e){var t=e.show,n=e.enter,r=void 0===n?"":n,l=e.enterFrom,o=void 0===l?"":l,i=e.enterTo,c=void 0===i?"":i,s=e.leave,u=void 0===s?"":s,m=e.leaveFrom,f=void 0===m?"":m,p=e.leaveTo,d=void 0===p?"":p,v=e.appear,g=e.children,b=r.split(" ").filter((function(e){return e.length})),y=o.split(" ").filter((function(e){return e.length})),x=c.split(" ").filter((function(e){return e.length})),E=u.split(" ").filter((function(e){return e.length})),j=f.split(" ").filter((function(e){return e.length})),O=d.split(" ").filter((function(e){return e.length})),N=function(e,t){var n;return t.length&&(n=e.classList).add.apply(n,w(t))},S=function(e,t){var n;return t.length&&(n=e.classList).remove.apply(n,w(t))};return a.a.createElement(h.a,{appear:v,unmountOnExit:!0,in:t,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},onEnter:function(e){N(e,[].concat(w(b),w(y)))},onEntering:function(e){S(e,y),N(e,x)},onEntered:function(e){S(e,[].concat(w(x),w(b)))},onExit:function(e){N(e,[].concat(w(E),w(j)))},onExiting:function(e){S(e,j),N(e,O)},onExited:function(e){S(e,[].concat(w(O),w(E)))}},g)};N.propTypes={show:m.a.bool.isRequired,appear:m.a.bool.isRequired,children:m.a.any.isRequired,enter:m.a.string,enterFrom:m.a.string,enterTo:m.a.string,leave:m.a.string,leaveFrom:m.a.string,leaveTo:m.a.string};var S=function(e){var t=e.show,n=e.appear,l=E(e,["show","appear"]),o=Object(r.useContext)(O).parent,i=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){e.current=!1}),[]),e.current}();return void 0===t?a.a.createElement(N,x({appear:o.appear||!o.isInitialRender,show:o.show},l)):a.a.createElement(O.Provider,{value:{parent:{show:t,isInitialRender:i,appear:n}}},a.a.createElement(N,x({appear:n,show:t},l)))};S.propTypes={show:m.a.bool.isRequired,appear:m.a.bool.isRequired};var A=S,I=n.p+"img/35uJ6i0.svg",P=n.p+"img/1uNC7i9.png",k=n.p+"img/tidiqpt.png",q=n.p+"img/3sF5xUd.jpg",L=n(28),M=n.n(L);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=e.movieList,n=e.isLoading,l=void 0!==n&&n,o=e.limit,i=void 0===o?12:o,s=e.fallbackText,u=void 0===s?"Movies are not available right now":s,m=R(Object(r.useState)(0),2),f=m[0],p=m[1];return Object(r.useEffect)((function(){p(t.length-i<0?0:t.length-i)}),[t]),t.length<1?a.a.createElement("div",{className:"px-16 text-light-grey font-roboto text-2xl flex flex-col justify-center items-center mx-auto"},a.a.createElement("div",{className:"flex"},a.a.createElement("img",{src:k,alt:"Film",className:"animate-spin"}),a.a.createElement("img",{src:k,alt:"Film",className:"animate-spin"})),a.a.createElement("img",{src:P,alt:"Camera",className:"ml-3 mb-6"}),a.a.createElement("span",null,u)):a.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16 px-16"},t.map((function(e,t){var n=e.title,r=e.release_date,l=e.vote_average,o=e.poster_path,i=e.id;return a.a.createElement(c.b,{key:i,to:"/movie/".concat(i)},a.a.createElement(A,JSON.parse('{"show":true,"appear":true,"enter":"transition ease duration-500 transform","enterFrom":"opacity-0 scale-50","enterTo":"opacity-100 scale-100","leave":"transition ease-in duration-350 transform","leaveFrom":"opacity-100 scale-100","leaveTo":"opacity-0 scale-50"}'),a.a.createElement("div",{style:{transitionDelay:"".concat(150*(t-f),"ms")},className:"flex flex-col max-w-xs w-full mx-auto shadow-md rounded-xxl sm:rounded-xl xl:rounded-lg overflow-hidden relative select-none"},a.a.createElement("div",{style:{backgroundImage:"url(".concat(q,")")},className:"w-full flex-grow bg-cover absolute top-0 left-0 z-0 ".concat(M.a.responsiveImage," ")}),a.a.createElement("div",{style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w342").concat(o,")")},className:"w-full flex-grow bg-cover absolute top-0 left-0 z-10 ".concat(M.a.responsiveImage)}),a.a.createElement("div",{className:"w-full flex-grow bg-cover ".concat(M.a.responsiveImage)}),a.a.createElement("div",{className:"bg-white text-black relative ".concat(M.a.responsiveDescription)},a.a.createElement("div",{className:"absolute w-full h-full top-0 left-0 p-3 font-playfairDisplay text-black flex flex-col justify-center"},a.a.createElement("span",{className:"font-bold text-xxs truncate"},n),a.a.createElement("span",{className:"font-normal text-xxxs"},new Date(r).toDateString("en-US"))),a.a.createElement("div",{className:"absolute p-1 top-0 right-0 flex items-center space-x-0"},a.a.createElement("span",{className:"font-normal text-xxxs font-playfairDisplay"},l),a.a.createElement("img",{src:I,alt:"Rate"}))))))})),l&&function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=[],n=0;n<e;n++)t.push(a.a.createElement("div",{key:n,className:"flex flex-col max-w-xs w-full mx-auto shadow-md rounded-xxl sm:rounded-xl xl:rounded-lg overflow-hidden"},a.a.createElement("div",{className:"w-full flex-grow bg-cover bg-light-grey animate-pulse ".concat(M.a.responsiveImage)}),a.a.createElement("div",{className:"bg-white text-black relative ".concat(M.a.responsiveDescription)},a.a.createElement("div",{className:"absolute w-full h-full top-0 left-0 p-3 font-playfairDisplay text-black flex flex-col justify-center space-y-1"},a.a.createElement("span",{className:"font-bold text-xxs bg-light-grey w-16 h-2 rounded-full animate-pulse"}),a.a.createElement("span",{className:"font-normal text-xxxs bg-light-grey w-12 h-1 rounded-full animate-pulse"})),a.a.createElement("div",{className:"absolute p-1 top-0 right-0 flex items-center space-x-0"},a.a.createElement("span",{className:"font-normal text-xxxs font-playfairDisplay bg-light-grey h-1 w-4 rounded-full animate-pulse"})))));return a.a.createElement(a.a.Fragment,null,t)}())};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}D.propTypes={movieList:m.a.array.isRequired,isLoading:m.a.bool,limit:m.a.number,fallbackText:m.a.string};var C=function(e){return a.a.createElement("div",_({className:"flex flex-col max-w-xs mx-auto pt-20 items-center font-roboto font-bold text-light-grey uppercase"},e),a.a.createElement("span",{className:"text-xs"},"Scroll down to load more"),a.a.createElement("svg",{viewBox:"0 0 24 24",className:"animate-bounce w-6 h-6w-10 h-10 text-gray-900 mt-3 fill-current"},a.a.createElement("defs",null),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),a.a.createElement("svg",{viewBox:"0 0 24 24",className:"animate-bounce w-10 h-10 text-gray-900 -m-8 fill-current"},a.a.createElement("defs",null),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})))},F=n(147),U=n.n(F),z=n(63),J=n.n(z);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=U.a.create({baseURL:"https://api.themoviedb.org/3",headers:{Accept:"application/json","Content-Type":"application/json"}});V.interceptors.response.use((function(e){return J.a.done(),e}),(function(e){return J.a.done(),Promise.reject(e)})),V.interceptors.request.use((function(e){return e.params=W(W({},e.params),{},{api_key:"123e71e7edaff309e3eda6e9b6509955",language:"en-US"}),J.a.start(),e}));var $=function(e){return V.get("/movie/now_playing",{params:e})},Q=function(e){return V.get("/search/movie",{params:{query:e}})},Z=function(e){return V.get("/movie/".concat(e))},G=function(e){return V.get("/movie/".concat(e,"/credits"))},K=n(148);function X(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||re(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var le=function(){var e=Object(r.useContext)(g),t=e.movieList,n=e.getMovieList,l=e.setMovieList,o=e.movieMaxPage,i=e.setMovieMaxPage,c={results:[],nextRequestId:1,displayedRequestId:0},s=ne(Object(r.useState)(!0),2),u=s[0],m=s[1],f=ne(Object(r.useState)(1),2),p=f[0],d=f[1],v=ne(Object(r.useState)([]),2),b=v[0],h=v[1],x=ne(Object(r.useState)(""),2),E=x[0],w=x[1],j=ne(Object(r.useState)(ee({},c)),2),O=j[0],N=j[1],S=function(){m(!0),$({page:p}).then((function(e){var n=e.data,r=n.results,a=n.total_pages;l([].concat(X(t),X(r))),i(a)})).finally((function(){m(!1)}))};Object(r.useEffect)((function(){return S(),function(){m(!0),d(1),h([]),w(""),N(ee({},c)),l([])}}),[]),Object(r.useEffect)((function(){var e=n(p);e.length<1?!u&&p<o&&S():(h((function(t){return[].concat(X(t),X(e))})),d(p+1))}),[t]),Object(r.useEffect)((function(){if(E.length<1)N(ee({},c));else{m(!0);var e=O.nextRequestId;N((function(t){return ee(ee({},t),{},{nextRequestId:e+1})})),Q(E).then((function(t){var n=t.data.results;e<O.displayedRequestId||N((function(t){return ee(ee({},t),{},{displayedRequestId:e,results:n})}))})).finally((function(){return m(!1)}))}}),[E]);var A=function(e){u||t.length<-12+p||p>=o||E.length>0||e.deltaY<20||document.getElementById("scroller").getBoundingClientRect().bottom-5<window.innerHeight&&S()};return a.a.createElement(K.a,{onSwiped:A},a.a.createElement("div",{onWheel:A,className:"py-10 flex w-full flex-col space-y-12"},a.a.createElement("h1",{className:"w-full text-center font-bold font-playfairDisplay text-4xl"},"Welcome to Movies World"),a.a.createElement(y,{onSearchValueChange:function(e){w(e)}}),E.length>0?a.a.createElement(D,{movieList:O.results,isLoading:u,limit:20,fallbackText:"No movies found"}):u&&t.length<1?a.a.createElement("div",{className:"px-16 text-light-grey font-roboto text-2xl flex justify-center items-center mx-auto"},a.a.createElement("img",{src:k,alt:"Film",className:"animate-spin mr-4"}),a.a.createElement("span",null,"Loading movies...")):a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{movieList:b,isLoading:u}),t.length>=-12+p&&!u&&p<o&&a.a.createElement(C,{id:"scroller"}))))},oe=n.p+"img/3S7x3OJ.png",ie=n.p+"img/1rS0gFh.png",ce=n.p+"img/5yKjQ1o.png",se=n.p+"img/2O5Xkwk.png",ue=n.p+"img/nEko7zi.png",me=n.p+"img/2fkkTzf.png",fe=function(e){var t=e.img;return a.a.createElement("div",{className:"cursor-pointer w-12 h-12 overflow-hidden rounded-full hover:shadow-xl m-4"},a.a.createElement("img",{className:"w-full h-full",src:t,alt:"Social"}))};fe.propTypes={img:m.a.any.isRequired};var pe=function(){return a.a.createElement("div",{className:"flex w-full flex-col px-4"},a.a.createElement("h1",{className:"text-center text-4xl font-bold font-playfairDisplay text-light-title my-20"},"Meet Our Team"),a.a.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10"},a.a.createElement("img",{src:oe,alt:"Try to hack!",className:"mx-auto"}),a.a.createElement("div",{className:"font-inter text-sm space-y-4"},a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo quam, egestas eget dapibus vestibulum, rhoncus eget elit. Aenean tempor odio quis enim finibus, vitae varius augue pulvinar. Pellentesque arcu magna, faucibus eget pellentesque at, blandit eget lorem. Donec sed mollis arcu. Etiam quis odio tellus. Phasellus varius pharetra tincidunt. Pellentesque finibus consectetur lorem nec pulvinar. Nulla dolor augue, sollicitudin consectetur suscipit ut, maximus a est. Pellentesque nec lacus dictum, semper quam in, dapibus nulla. Sed id tortor quis nisi molestie finibus. Vestibulum nec turpis ut ligula pellentesque cursus. Phasellus id commodo mi. Nulla eu odio eros."),a.a.createElement("p",null,"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas malesuada nulla quis suscipit varius. Proin eleifend, purus nec luctus ullamcorper, arcu nibh ultricies lacus, sit amet facilisis velit massa sed dolor. Curabitur a interdum leo. Suspendisse eu purus non tellus mattis feugiat id non mauris. Praesent pharetra bibendum quam vel bibendum. Vestibulum quam purus, blandit vitae lectus vel, aliquam scelerisque magna. Ut feugiat faucibus eleifend. Duis iaculis tellus eros, vel viverra est viverra et. Morbi rutrum ex at efficitur interdum. Suspendisse pulvinar bibendum faucibus. Fusce egestas molestie maximus. Mauris sit amet elit vitae turpis finibus egestas eu id massa."))),a.a.createElement("div",{className:"flex w-full justify-center flex-wrap my-32"},a.a.createElement(fe,{img:ie}),a.a.createElement(fe,{img:ce}),a.a.createElement(fe,{img:se}),a.a.createElement(fe,{img:ue}),a.a.createElement(fe,{img:me})))},de=(n(138),n(139),n(202),n(203),n(140),n(204),n(149)),ve=n.n(de),ge=n.p+"img/1Ordo9Q.svg";function be(e){return function(e){if(Array.isArray(e))return Ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||xe(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t,n,r,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||xe(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e,t){if(e){if("string"==typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var we=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return a.a.createElement("div",{className:"bg-light-badge rounded-xxl p-2 font-inter text-sm w-30 ".concat(r)},t)};we.propTypes={children:m.a.node.isRequired,className:m.a.string};var je=function(e){var t=e.match.params.id,n=he(Object(r.useState)(!0),2),l=n[0],o=n[1],i=he(Object(r.useState)({}),2),c=i[0],u=i[1],m=he(Object(r.useState)(!1),2),f=m[0],p=m[1];return Object(r.useEffect)((function(){Z(t).then(function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r,a,l,i,c,s,m,f,d,v,g,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===n.status){e.next=2;break}return e.abrupt("return",p(!0));case 2:return r=n.data,a=r.overview,l=r.vote_average,i=r.poster_path,c=r.production_companies,s=r.title,m=r.genres,f=r.release_date,d=r.runtime,e.next=5,G(t);case 5:v=e.sent,g=v.data.cast,b=m.reduce((function(e,t){return e.push(t.name),e}),[]),u({genres:b.join(", "),release_date:f.replace(/-/gim,"/"),runtime:"".concat(Math.round(d/60),"h ").concat(d%60,"m"),overview:a,vote_average:l,poster_path:i,production_companies:c,credits:be(g.splice(0,4)),title:s}),o(!1);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){ye(l,r,a,o,i,"next",e)}function i(e){ye(l,r,a,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(){return p(!0)}))}),[]),f?a.a.createElement(s.a,{to:"/"}):l?a.a.createElement("span",null,"Loading..."):a.a.createElement("div",{className:"flex justify-center items-center py-10 flex-col xl:flex-row xl:justify-between overflow-hidden"},a.a.createElement("div",{className:"flex flex-col flex-grow max-w-xs space-y-6 w-40 mb-20 xl:mb-0",style:{minWidth:"348px"}},a.a.createElement("div",{className:"w-full overflow-hidden rounded-xxl bg-cover ".concat(ve.a.responsivePoster),style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w342").concat(c.poster_path,")")}}),a.a.createElement("button",{className:"w-full bg-light-secondary text-white flex justify-center items-center py-3 rounded-xxl space-x-9 font-inter font-semibold text-xl focus:outline-none focus:border-none hover:shadow-xl"},a.a.createElement("svg",{width:"29",height:"35",viewBox:"0 0 29 35",fill:"none",className:"fill-current"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.87097 1L28 17.5L1.87097 34L1 1H1.87097Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),a.a.createElement("span",null,"Watch now"))),a.a.createElement("div",{className:"max-w-xxl flex-grow space-y-10 xl:ml-20 px-10 xl:px-0 xl:pr-10"},a.a.createElement("h1",{className:"text-light-title font-playfairDisplay font-bold text-4xl"},c.title),a.a.createElement("div",{className:"space-y-8 flex w-full flex-col"},a.a.createElement("div",{className:"flex space-x-5 items-center"},a.a.createElement(we,null,c.release_date),a.a.createElement(we,null,c.genres),a.a.createElement(we,null,c.runtime),a.a.createElement(we,{className:"flex items-center space-x-2 text-light-secondary fill-current font-bold cursor-pointer select-none hover:shadow-md"},a.a.createElement("svg",{width:"12",height:"16",viewBox:"0 0 29 35",fill:"none",className:"fill-current"},a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.87097 1L28 17.5L1.87097 34L1 1H1.870  97Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),a.a.createElement("span",null,"Play trailer"))),a.a.createElement("div",{className:"flex space-x-5 items-center"},a.a.createElement(we,{className:"bg-light-yellow text-black font-inter font-extrabold text-xl py-0 m-0"},"IMDb"),a.a.createElement("span",{className:"text-light-title font-roboto text-2xl"},c.vote_average," ",a.a.createElement("span",{className:"text-base"},"/10"))),a.a.createElement("div",{className:"text-light-title font-inter"},a.a.createElement("h1",{className:"font-bold text-lg"},"Overview"),a.a.createElement("p",{className:"font-normal text-base text-black"},c.overview)),a.a.createElement("hr",{className:"text-light-grey"}),a.a.createElement("div",{className:"flex w-full space-x-10 justify-center"},c.credits.map((function(e,t){return a.a.createElement("div",{key:t,className:"flex flex-col font-inter text-sm text-center items-center"},a.a.createElement("div",{className:"rounded-full overflow-hidden h-12 w-12"},a.a.createElement("img",{className:"w-full h-auto",src:e.profile_path?"".concat("https://image.tmdb.org/t/p/w342").concat(e.profile_path):ge,alt:"Avatar"})),a.a.createElement("h1",{className:"font-bold"},e.character),a.a.createElement("span",null,e.name))}))))))};je.propTypes={match:m.a.object};var Oe=n.p+"img/230y2US.svg",Ne=function(){return a.a.createElement("div",{className:"flex items-center select-none"},a.a.createElement("span",{className:"font-inter font-bold text-2xl"},"AppliedMovies"),a.a.createElement("img",{src:Oe,alt:"AM",className:"h-6 w-6 mx-2"}))},Se=function(){return a.a.createElement("div",{className:"py-6 flex w-full justify-between items-center"},a.a.createElement(c.b,{to:"/"},a.a.createElement(Ne,null)),a.a.createElement("div",{className:"flex space-x-6"},[{name:"Home",to:"/"},{name:"About",to:"/about"}].map((function(e,t){var n=e.name,r=e.to;return a.a.createElement(c.c,{to:r,key:t,exact:!0,activeClassName:"border-b-2 border-light-primary font-bold",className:"transition duration-500 ease-in-out font-inter font-normal text-sm px-1"},n)}))))},Ae=n(150),Ie=Ae.a.reduce((function(e,t){return e="".concat(e,"family=").concat(t.name.replace(" ","+"),":wght@").concat(t.variants.join(";"),"&")}),"?"),Pe=(n(205),n(206),function(){return a.a.createElement(i.b,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"AppliedMovies"),a.a.createElement("link",{href:"".concat("https://fonts.googleapis.com/css2").concat(Ie,"display=swap"),rel:"stylesheet"})),a.a.createElement("div",{className:"min-h-screen w-full bg-light-bg"},a.a.createElement("div",{className:"container mx-auto px-4"},a.a.createElement(b,null,a.a.createElement(c.a,null,a.a.createElement(Se,null),a.a.createElement(s.d,null,a.a.createElement(s.b,{exact:!0,path:"/",component:le}),a.a.createElement(s.b,{exact:!0,path:"/about",component:pe}),a.a.createElement(s.b,{path:"/movie/:id",render:function(e){return a.a.createElement(je,e)}})))))))});o.a.render(a.a.createElement(Pe,null),document.getElementById("root"))},28:function(e,t,n){e.exports={responsiveImage:"responsiveImage_2q9G-",responsiveDescription:"responsiveDescription_jJ8QJ"}}},[[207,29,30,3,1,21,2,4,12,18,14,17,13,24,5,6,7,8,9,10,11,15,16,19,20,22,23,25,26,27,28]]]);