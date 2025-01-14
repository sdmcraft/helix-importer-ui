/*! For license information please see spectrum-web-components.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,o,a={599:(t,e,r)=>{r.d(e,{o:()=>l});var o=r(392),a=r(338),s=Object.defineProperty;Object.getOwnPropertyDescriptor;const i=new Set;new MutationObserver((()=>{const t="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";i.forEach((e=>{e.setAttribute("dir",t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const c=t=>void 0!==t.startManagingContentDirection||"SP-THEME"===t.tagName;class l extends(function(t){class e extends t{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const t=this.getRootNode().activeElement;if(!t)return!1;try{return t.matches(":focus-visible")||t.matches(".focus-visible")}catch(e){return t.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!c(t);)t=t.assignedSlot||t.parentNode||t.host;const e=this.dir;if(this.dir="rtl"===t.dir?t.dir:this.dir||"ltr",e===this.dir&&this.setAttribute("dir",this.dir),t===document.documentElement)i.add(this);else{const{localName:e}=t;e.search("-")>-1&&!customElements.get(e)?customElements.whenDefined(e).then((()=>{t.startManagingContentDirection(this)})):t.startManagingContentDirection(this)}this._dirParent=t}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?i.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return((t,e,r,o)=>{for(var a,i=void 0,c=t.length-1;c>=0;c--)(a=t[c])&&(i=a(e,r,i)||i);i&&s(e,r,i)})([(0,a.Cb)({reflect:!0})],e.prototype,"dir"),e}(o.oi)){}},171:(t,e,r)=>{r.d(e,{i:()=>o});const o=t=>t.querySelector('button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])')},731:(t,e,r)=>{r.d(e,{G:()=>o});const o=(t,e,{position:r,prepareCallback:o}={position:"beforeend"})=>{let{length:a}=t;if(0===a)return()=>t;let s=1,i=0;("afterbegin"===r||"afterend"===r)&&(s=-1,i=a-1);const c=new Array(a),l=new Array(a),n=document.createComment("placeholder for reparented element");do{const a=t[i];o&&(l[i]=o(a)),c[i]=n.cloneNode();const u=a.parentElement||a.getRootNode();u&&u!==a&&u.replaceChild(c[i],a),e.insertAdjacentElement(r,a),i+=s}while(--a>0);return function(){return function(t,e,r=[]){for(let o=0;o<e.length;++o){const a=e[o],s=t[o],i=s.parentElement||s.getRootNode();r[o]&&r[o](a),i&&i!==s&&i.replaceChild(a,s),delete t[o]}return e}(c,t,l)}}},692:(t,e,r)=>{var o;r.d(e,{Al:()=>j,Jb:()=>C,Ld:()=>I,dy:()=>z,sY:()=>E});const a=window,s=a.trustedTypes,i=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,c=`lit$${(Math.random()+"").slice(9)}$`,l="?"+c,n=`<${l}>`,u=document,d=(t="")=>u.createComment(t),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,b=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,v=/>/g,f=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),x=/'/g,y=/"/g,k=/^(?:script|style|textarea|title)$/i,w=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),z=w(1),C=(w(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),q=new WeakMap,E=(t,e,r)=>{var o,a;const s=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:e;let i=s._$litPart$;if(void 0===i){const t=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:null;s._$litPart$=i=new U(e.insertBefore(d(),t),t,void 0,null!=r?r:{})}return i._$AI(t),i},S=u.createTreeWalker(u,129,null,!1),A=(t,e)=>{const r=t.length-1,o=[];let a,s=2===e?"<svg>":"",l=h;for(let e=0;e<r;e++){const r=t[e];let i,u,d=-1,m=0;for(;m<r.length&&(l.lastIndex=m,u=l.exec(r),null!==u);)m=l.lastIndex,l===h?"!--"===u[1]?l=g:void 0!==u[1]?l=v:void 0!==u[2]?(k.test(u[2])&&(a=RegExp("</"+u[2],"g")),l=f):void 0!==u[3]&&(l=f):l===f?">"===u[0]?(l=null!=a?a:h,d=-1):void 0===u[1]?d=-2:(d=l.lastIndex-u[2].length,i=u[1],l=void 0===u[3]?f:'"'===u[3]?y:x):l===y||l===x?l=f:l===g||l===v?l=h:(l=f,a=void 0);const p=l===f&&t[e+1].startsWith("/>")?" ":"";s+=l===h?r+n:d>=0?(o.push(i),r.slice(0,d)+"$lit$"+r.slice(d)+c+p):r+c+(-2===d?(o.push(void 0),e):p)}const u=s+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==i?i.createHTML(u):u,o]};class ${constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,i=0;const n=t.length-1,u=this.parts,[m,p]=A(t,e);if(this.el=$.createElement(m,r),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=S.nextNode())&&u.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(c)){const r=p[i++];if(t.push(e),void 0!==r){const t=o.getAttribute(r.toLowerCase()+"$lit$").split(c),e=/([.?@])?(.*)/.exec(r);u.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?F:"@"===e[1]?B:P})}else u.push({type:6,index:a})}for(const e of t)o.removeAttribute(e)}if(k.test(o.tagName)){const t=o.textContent.split(c),e=t.length-1;if(e>0){o.textContent=s?s.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],d()),S.nextNode(),u.push({type:2,index:++a});o.append(t[e],d())}}}else if(8===o.nodeType)if(o.data===l)u.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(c,t+1));)u.push({type:7,index:a}),t+=c.length-1}a++}}static createElement(t,e){const r=u.createElement("template");return r.innerHTML=t,r}}function _(t,e,r=t,o){var a,s,i,c;if(e===C)return e;let l=void 0!==o?null===(a=r._$Cl)||void 0===a?void 0:a[o]:r._$Cu;const n=m(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===n?l=void 0:(l=new n(t),l._$AT(t,r,o)),void 0!==o?(null!==(i=(c=r)._$Cl)&&void 0!==i?i:c._$Cl=[])[o]=l:r._$Cu=l),void 0!==l&&(e=_(t,l._$AS(t,e.values),l,o)),e}class T{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:o}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:u).importNode(r,!0);S.currentNode=a;let s=S.nextNode(),i=0,c=0,l=o[0];for(;void 0!==l;){if(i===l.index){let e;2===l.type?e=new U(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new D(s,this,t)),this.v.push(e),l=o[++c]}i!==(null==l?void 0:l.index)&&(s=S.nextNode(),i++)}return a}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{constructor(t,e,r,o){var a;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$C_=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),m(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):b(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==I&&m(this._$AH)?this._$AA.nextSibling.data=t:this.k(u.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:o}=t,a="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=$.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(r);else{const t=new T(a,this),e=t.p(this.options);t.m(r),this.k(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new $(t)),e}O(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new U(this.S(d()),this.S(d()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class P{constructor(t,e,r,o,a){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){const a=this.strings;let s=!1;if(void 0===a)t=_(this,t,e,0),s=!m(t)||t!==this._$AH&&t!==C,s&&(this._$AH=t);else{const o=t;let i,c;for(t=a[0],i=0;i<a.length-1;i++)c=_(this,o[r+i],e,i),c===C&&(c=this._$AH[i]),s||(s=!m(c)||c!==this._$AH[i]),c===I?t=I:t!==I&&(t+=(null!=c?c:"")+a[i+1]),this._$AH[i]=c}s&&!o&&this.P(t)}P(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends P{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===I?void 0:t}}const O=s?s.emptyScript:"";class F extends P{constructor(){super(...arguments),this.type=4}P(t){t&&t!==I?this.element.setAttribute(this.name,O):this.element.removeAttribute(this.name)}}class B extends P{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=_(this,t,e,0))&&void 0!==r?r:I)===C)return;const o=this._$AH,a=t===I&&o!==I||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==I&&(o===I||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const j={A:"$lit$",M:c,C:l,L:1,R:A,D:T,V:b,I:_,H:U,N:P,U:F,B,F:L,W:D},M=a.litHtmlPolyfillSupport;null==M||M($,U),(null!==(o=a.litHtmlVersions)&&void 0!==o?o:a.litHtmlVersions=[]).push("2.3.1")},338:(t,e,r)=>{r.d(e,{Cb:()=>a,IO:()=>c,vZ:()=>u,SB:()=>s});const o=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function a(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):o(t,e)}function s(t){return a({...t,state:!0})}const i=({finisher:t,descriptor:e})=>(r,o)=>{var a;if(void 0===o){const o=null!==(a=r.originalKey)&&void 0!==a?a:r.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(r.key)}:{...r,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const a=r.constructor;void 0!==e&&Object.defineProperty(r,o,e(o)),null==t||t(a,o)}};function c(t,e){return i({descriptor:r=>{const o={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[e]&&(this[e]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var l;const n=null!=(null===(l=window.HTMLSlotElement)||void 0===l?void 0:l.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function u(t,e,r){let o,a=t;return"object"==typeof t?(a=t.slot,o=t):o={flatten:e},r?function(t){const{slot:e,selector:r}=null!=t?t:{};return i({descriptor:o=>({get(){var o;const a="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(a),i=null!=s?n(s,t):[];return r?i.filter((t=>t.matches(r))):i},enumerable:!0,configurable:!0})})}({slot:a,flatten:e,selector:r}):i({descriptor:t=>({get(){var t,e;const r="slot"+(a?`[name=${a}]`:":not([name])"),s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==s?void 0:s.assignedNodes(o))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},796:(t,e,r)=>{r.d(e,{o:()=>a});var o=r(692);const a=t=>null!=t?t:o.Ld},392:(t,e,r)=>{r.d(e,{oi:()=>w,iv:()=>l,dy:()=>k.dy,Ld:()=>k.Ld,sY:()=>k.sY,FV:()=>a});const o=window,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class c{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new c(r,t,s)},n=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new c("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var u;const d=window,m=d.trustedTypes,p=m?m.emptyScript:"",b=d.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:g};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const o=this._$Ep(r,e);void 0!==o&&(this._$Ev.set(o,r),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){const a=this[t];this[e]=o,this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),a=o.litNonce;void 0!==a&&r.setAttribute("nonce",a),r.textContent=e.cssText,t.appendChild(r)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=v){var o;const a=this.constructor._$Ep(t,r);if(void 0!==a&&!0===r.reflect){const s=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:h).toAttribute(e,r.type);this._$El=t,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,e){var r;const o=this.constructor,a=o._$Ev.get(t);if(void 0!==a&&this._$El!==a){const t=o.getPropertyOptions(a),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:h;this._$El=a,this[a]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:f}),(null!==(u=d.reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.4.1");var x,y,k=r(692);class w extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,k.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return k.Jb}}w.finalized=!0,w._$litElement$=!0,null===(x=globalThis.litElementHydrateSupport)||void 0===x||x.call(globalThis,{LitElement:w});const z=globalThis.litElementPolyfillSupport;null==z||z({LitElement:w}),(null!==(y=globalThis.litElementVersions)&&void 0!==y?y:globalThis.litElementVersions=[]).push("3.2.2")}},s={};function i(t){var e=s[t];if(void 0!==e)return e.exports;var r=s[t]={exports:{}};return a[t].call(r.exports,r,r.exports,i),r.exports}i.m=a,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var a=Object.create(null);i.r(a);var s={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>s[t]=()=>r[t]));return s.default=()=>r,i.d(a,s),a},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,r)=>(i.f[r](t,e),e)),[])),i.u=t=>t+".spectrum-web-components.js",i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},o="helix-import-ui:",i.l=(t,e,a,s)=>{if(r[t])r[t].push(e);else{var c,l;if(void 0!==a)for(var n=document.getElementsByTagName("script"),u=0;u<n.length;u++){var d=n[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+a){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+a),c.src=t),r[t]=[e];var m=(e,o)=>{c.onerror=c.onload=null,clearTimeout(p);var a=r[t];if(delete r[t],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((t=>t(o))),e)return e(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),l&&document.head.appendChild(c)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.p="./js/dist/",(()=>{var t={179:0};i.f.j=(e,r)=>{var o=i.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,a)=>o=t[e]=[r,a]));r.push(o[2]=a);var s=i.p+i.u(e),c=new Error;i.l(s,(r=>{if(i.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,o[1](c)}}),"chunk-"+e,e)}};var e=(e,r)=>{var o,a,[s,c,l]=r,n=0;if(s.some((e=>0!==t[e]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);l&&l(i)}for(e&&e(r);n<s.length;n++)a=s[n],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0},r=globalThis.webpackChunkhelix_import_ui=globalThis.webpackChunkhelix_import_ui||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{var t=i(392);const e=t.iv`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400-rgb:34,184,51;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:68,202,73;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:105,220,99;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:142,235,127;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:148,192,8;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:166,211,18;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:184,229,37;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:205,245,71;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:228,194,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:244,213,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:249,232,92;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:252,246,187;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:222,61,130;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:237,87,149;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:249,114,167;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:255,143,185;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:205,57,206;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:223,81,224;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:235,110,236;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:244,140,242;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:157,87,243;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:172,111,249;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:187,135,251;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:202,159,252;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:104,109,244;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:124,129,251;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:145,149,255;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:167,170,255;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,158,152;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:3,178,171;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:54,197,189;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:93,214,207;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:234,56,41;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:246,88,67;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:255,117,94;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:255,149,129;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:244,129,12;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:254,154,46;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:255,181,88;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:253,206,136;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:18,162,108;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:43,180,125;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:67,199,143;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:94,217,162;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:52,143,244;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:84,163,246;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:114,183,249;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:143,202,252;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:29,29,29;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:38,38,38;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:50,50,50;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:63,63,63;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:84,84,84;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:112,112,112;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:144,144,144;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:178,178,178;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:209,209,209;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:235,235,235;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:255,255,255;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-75
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.5);--spectrum-alias-dropshadow-color:rgba(0,0,0,.5);--spectrum-alias-background-color-hover-overlay:hsla(0,0%,100%,.06);--spectrum-alias-highlight-hover:hsla(0,0%,100%,.07);--spectrum-alias-highlight-down:hsla(0,0%,100%,.1);--spectrum-alias-highlight-selected:rgba(84,163,246,.15);--spectrum-alias-highlight-selected-hover:rgba(84,163,246,.25);--spectrum-alias-text-highlight-color:rgba(84,163,246,.25);--spectrum-alias-background-color-quickactions:rgba(50,50,50,.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-600
);--spectrum-alias-border-color-translucent:hsla(0,0%,100%,.1);--spectrum-alias-radial-reaction-color-default:hsla(0,0%,92%,.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-50
);--spectrum-scrollbar-mac-s-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-scrollbar-mac-m-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-scrollbar-mac-l-track-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-slider-s-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-s-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-m-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-l-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-tick-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-editable-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-ramp-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-slider-xl-range-radial-reaction-color:hsla(0,0%,92%,.6);--spectrum-well-background-color:hsla(0,0%,92%,.02);--spectrum-well-border-color:hsla(0,0%,100%,.05)}:host,:root{--spectrum-overlay-opacity:0.5;--spectrum-neutral-background-color-default:var(--spectrum-gray-400);--spectrum-neutral-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-default:var(
--spectrum-gray-400
);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-300);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-200);--spectrum-neutral-subdued-background-color-key-focus:var(
--spectrum-gray-300
);--spectrum-accent-background-color-default:var(
--spectrum-accent-color-500
);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-400);--spectrum-accent-background-color-down:var(--spectrum-accent-color-300);--spectrum-accent-background-color-key-focus:var(
--spectrum-accent-color-400
);--spectrum-informative-background-color-default:var(
--spectrum-informative-color-500
);--spectrum-informative-background-color-hover:var(
--spectrum-informative-color-400
);--spectrum-informative-background-color-down:var(
--spectrum-informative-color-300
);--spectrum-informative-background-color-key-focus:var(
--spectrum-informative-color-400
);--spectrum-negative-background-color-default:var(
--spectrum-negative-color-500
);--spectrum-negative-background-color-hover:var(
--spectrum-negative-color-400
);--spectrum-negative-background-color-down:var(
--spectrum-negative-color-300
);--spectrum-negative-background-color-key-focus:var(
--spectrum-negative-color-400
);--spectrum-positive-background-color-default:var(
--spectrum-positive-color-500
);--spectrum-positive-background-color-hover:var(
--spectrum-positive-color-400
);--spectrum-positive-background-color-down:var(
--spectrum-positive-color-300
);--spectrum-positive-background-color-key-focus:var(
--spectrum-positive-color-400
);--spectrum-neutral-visual-color:var(--spectrum-gray-600);--spectrum-accent-visual-color:var(--spectrum-accent-color-900);--spectrum-informative-visual-color:var(--spectrum-informative-color-900);--spectrum-negative-visual-color:var(--spectrum-negative-color-700);--spectrum-notice-visual-color:var(--spectrum-notice-color-900);--spectrum-positive-visual-color:var(--spectrum-positive-color-800);--spectrum-gray-visual-color:var(--spectrum-gray-600);--spectrum-red-visual-color:var(--spectrum-red-700);--spectrum-orange-visual-color:var(--spectrum-orange-900);--spectrum-yellow-visual-color:var(--spectrum-yellow-1100);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-900);--spectrum-celery-visual-color:var(--spectrum-celery-800);--spectrum-green-visual-color:var(--spectrum-green-800);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-800);--spectrum-cyan-visual-color:var(--spectrum-cyan-900);--spectrum-blue-visual-color:var(--spectrum-blue-900);--spectrum-indigo-visual-color:var(--spectrum-indigo-900);--spectrum-purple-visual-color:var(--spectrum-purple-900);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-900);--spectrum-magenta-visual-color:var(--spectrum-magenta-900);--spectrum-drop-shadow-color:rgba(0,0,0,.5);--spectrum-background-base-color:var(--spectrum-gray-50);--spectrum-background-layer-1-color:var(--spectrum-gray-75);--spectrum-background-layer-2-color:var(--spectrum-gray-100);--spectrum-gray-50:#1d1d1d;--spectrum-gray-75:#262626;--spectrum-gray-100:#323232;--spectrum-gray-200:#3f3f3f;--spectrum-gray-300:#545454;--spectrum-gray-400:#707070;--spectrum-gray-500:#909090;--spectrum-gray-600:#b2b2b2;--spectrum-gray-700:#d1d1d1;--spectrum-gray-800:#ebebeb;--spectrum-gray-900:#fff;--spectrum-red-100:#7b0000;--spectrum-red-200:#8d0000;--spectrum-red-300:#a50000;--spectrum-red-400:#be0403;--spectrum-red-500:#d71913;--spectrum-red-600:#ea3829;--spectrum-red-700:#f65843;--spectrum-red-800:#ff755e;--spectrum-red-900:#ff9581;--spectrum-red-1000:#ffb0a1;--spectrum-red-1100:#ffc9bd;--spectrum-red-1200:#ffded8;--spectrum-red-1300:#fff1ee;--spectrum-red-1400:#fff;--spectrum-orange-100:#662500;--spectrum-orange-200:#752d00;--spectrum-orange-300:#893700;--spectrum-orange-400:#9e4200;--spectrum-orange-500:#b44e00;--spectrum-orange-600:#ca5d00;--spectrum-orange-700:#e16d00;--spectrum-orange-800:#f4810c;--spectrum-orange-900:#fe9a2e;--spectrum-orange-1000:#ffb558;--spectrum-orange-1100:#fdce88;--spectrum-orange-1200:#ffe1b3;--spectrum-orange-1300:#fff2dd;--spectrum-orange-1400:#fffdf9;--spectrum-yellow-100:#4c3600;--spectrum-yellow-200:#584000;--spectrum-yellow-300:#674c00;--spectrum-yellow-400:#775900;--spectrum-yellow-500:#886800;--spectrum-yellow-600:#9b7800;--spectrum-yellow-700:#ae8900;--spectrum-yellow-800:#c09c00;--spectrum-yellow-900:#d3ae00;--spectrum-yellow-1000:#e4c200;--spectrum-yellow-1100:#f4d500;--spectrum-yellow-1200:#f9e85c;--spectrum-yellow-1300:#fcf6bb;--spectrum-yellow-1400:#fff;--spectrum-chartreuse-100:#304000;--spectrum-chartreuse-200:#374a00;--spectrum-chartreuse-300:#415700;--spectrum-chartreuse-400:#4c6600;--spectrum-chartreuse-500:#597600;--spectrum-chartreuse-600:#680;--spectrum-chartreuse-700:#759a00;--spectrum-chartreuse-800:#84ad01;--spectrum-chartreuse-900:#94c008;--spectrum-chartreuse-1000:#a6d312;--spectrum-chartreuse-1100:#b8e525;--spectrum-chartreuse-1200:#cdf547;--spectrum-chartreuse-1300:#e7fe9a;--spectrum-chartreuse-1400:#fff;--spectrum-celery-100:#00450a;--spectrum-celery-200:#00500c;--spectrum-celery-300:#005e0e;--spectrum-celery-400:#006d0f;--spectrum-celery-500:#007f0f;--spectrum-celery-600:#009112;--spectrum-celery-700:#04a51e;--spectrum-celery-800:#22b833;--spectrum-celery-900:#44ca49;--spectrum-celery-1000:#69dc63;--spectrum-celery-1100:#8eeb7f;--spectrum-celery-1200:#b4f7a2;--spectrum-celery-1300:#ddfdd3;--spectrum-celery-1400:#fff;--spectrum-green-100:#044329;--spectrum-green-200:#004e2f;--spectrum-green-300:#005c38;--spectrum-green-400:#006c43;--spectrum-green-500:#007d4e;--spectrum-green-600:#008f5d;--spectrum-green-700:#12a26c;--spectrum-green-800:#2bb47d;--spectrum-green-900:#43c78f;--spectrum-green-1000:#5ed9a2;--spectrum-green-1100:#81e9b8;--spectrum-green-1200:#b1f4d1;--spectrum-green-1300:#dffaea;--spectrum-green-1400:#fefffc;--spectrum-seafoam-100:#12413f;--spectrum-seafoam-200:#0e4c49;--spectrum-seafoam-300:#045a57;--spectrum-seafoam-400:#006965;--spectrum-seafoam-500:#007a75;--spectrum-seafoam-600:#008c87;--spectrum-seafoam-700:#009e98;--spectrum-seafoam-800:#03b2ab;--spectrum-seafoam-900:#36c5bd;--spectrum-seafoam-1000:#5dd6cf;--spectrum-seafoam-1100:#84e6df;--spectrum-seafoam-1200:#b0f2ec;--spectrum-seafoam-1300:#dff9f6;--spectrum-seafoam-1400:#fefffe;--spectrum-cyan-100:#003d62;--spectrum-cyan-200:#00476f;--spectrum-cyan-300:#00557f;--spectrum-cyan-400:#006491;--spectrum-cyan-500:#0074a2;--spectrum-cyan-600:#0086b4;--spectrum-cyan-700:#0099c6;--spectrum-cyan-800:#0eadd7;--spectrum-cyan-900:#2cc1e6;--spectrum-cyan-1000:#54d3f1;--spectrum-cyan-1100:#7fe4f9;--spectrum-cyan-1200:#a7f1ff;--spectrum-cyan-1300:#d7faff;--spectrum-cyan-1400:#fff;--spectrum-blue-100:#003877;--spectrum-blue-200:#00418a;--spectrum-blue-300:#004da3;--spectrum-blue-400:#0059c2;--spectrum-blue-500:#0367e0;--spectrum-blue-600:#1379f3;--spectrum-blue-700:#348ff4;--spectrum-blue-800:#54a3f6;--spectrum-blue-900:#72b7f9;--spectrum-blue-1000:#8fcafc;--spectrum-blue-1100:#aedbfe;--spectrum-blue-1200:#cce9ff;--spectrum-blue-1300:#e8f6ff;--spectrum-blue-1400:#fff;--spectrum-indigo-100:#282c8c;--spectrum-indigo-200:#2f34a3;--spectrum-indigo-300:#393fbb;--spectrum-indigo-400:#464bd3;--spectrum-indigo-500:#555be7;--spectrum-indigo-600:#686df4;--spectrum-indigo-700:#7c81fb;--spectrum-indigo-800:#9195ff;--spectrum-indigo-900:#a7aaff;--spectrum-indigo-1000:#bcbeff;--spectrum-indigo-1100:#d0d2ff;--spectrum-indigo-1200:#e2e4ff;--spectrum-indigo-1300:#f3f3fe;--spectrum-indigo-1400:#fff;--spectrum-purple-100:#4c0d9d;--spectrum-purple-200:#5911b1;--spectrum-purple-300:#691cc8;--spectrum-purple-400:#7a2dda;--spectrum-purple-500:#8c41e9;--spectrum-purple-600:#9d57f3;--spectrum-purple-700:#ac6ff9;--spectrum-purple-800:#bb87fb;--spectrum-purple-900:#ca9ffc;--spectrum-purple-1000:#d7b6fe;--spectrum-purple-1100:#e4ccfe;--spectrum-purple-1200:#efdfff;--spectrum-purple-1300:#f9f0ff;--spectrum-purple-1400:#fffdff;--spectrum-fuchsia-100:#6b036a;--spectrum-fuchsia-200:#7b007b;--spectrum-fuchsia-300:#900091;--spectrum-fuchsia-400:#a50da6;--spectrum-fuchsia-500:#b925b9;--spectrum-fuchsia-600:#cd39ce;--spectrum-fuchsia-700:#df51e0;--spectrum-fuchsia-800:#eb6eec;--spectrum-fuchsia-900:#f48cf2;--spectrum-fuchsia-1000:#faa8f5;--spectrum-fuchsia-1100:#fec2f8;--spectrum-fuchsia-1200:#ffdbfa;--spectrum-fuchsia-1300:#ffeffc;--spectrum-fuchsia-1400:#fffdff;--spectrum-magenta-100:#76003a;--spectrum-magenta-200:#890042;--spectrum-magenta-300:#a0004d;--spectrum-magenta-400:#b6125a;--spectrum-magenta-500:#cb266d;--spectrum-magenta-600:#de3d82;--spectrum-magenta-700:#ed5795;--spectrum-magenta-800:#f972a7;--spectrum-magenta-900:#ff8fb9;--spectrum-magenta-1000:#ffacca;--spectrum-magenta-1100:#ffc6da;--spectrum-magenta-1200:#ffdde9;--spectrum-magenta-1300:#fff0f5;--spectrum-magenta-1400:#fffcfd}
`,r=["spectrum","express"],o=["medium","large","medium-express","large-express"],a=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"],s=class extends HTMLElement{constructor(){super(),this._dir="",this._theme="spectrum",this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const t=document.importNode(s.template.content,!0);this.shadowRoot.appendChild(t),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","theme","lang","dir"]}set dir(t){if(t===this.dir)return;this.setAttribute("dir",t),this._dir=t;const e="rtl"===t?t:"ltr";this.trackedChildren.forEach((t=>{t.setAttribute("dir",e)}))}get dir(){return this._dir}attributeChangedCallback(t,e,r){e!==r&&("color"===t?this.color=r:"scale"===t?this.scale=r:"lang"===t&&r?(this.lang=r,this._provideContext()):"theme"===t?this.theme=r:"dir"===t&&(this.dir=r))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get theme(){const t=s.themeFragmentsByKind.get("theme"),{name:e}=t&&t.get("default")||{};return this._theme||e||""}set theme(t){if(t===this._theme)return;const e=t&&r.includes(t)?t:this.theme;e!==this._theme&&(this._theme=e,this.requestUpdate()),e?this.setAttribute("theme",e):this.removeAttribute("theme")}get color(){const t=s.themeFragmentsByKind.get("color"),{name:e}=t&&t.get("default")||{};return this._color||e||""}set color(t){if(t===this._color)return;const e=t&&a.includes(t)?t:this.color;e!==this._color&&(this._color=e,this.requestUpdate()),e?this.setAttribute("color",e):this.removeAttribute("color")}get scale(){const t=s.themeFragmentsByKind.get("scale"),{name:e}=t&&t.get("default")||{};return this._scale||e||""}set scale(t){if(t===this._scale)return;const e=t&&o.includes(t)?t:this.scale;e!==this._scale&&(this._scale=e,this.requestUpdate()),e?this.setAttribute("scale",e):this.removeAttribute("scale")}get styles(){const t=[...s.themeFragmentsByKind.keys()],e=(t,e,r)=>{const o=r&&"theme"!==r&&"express"===this.theme?t.get(`${e}-express`):t.get(e),a="spectrum"===e||!r||this.hasAttribute(r);if(o&&a)return o.styles};return[...t.reduce(((t,r)=>{const o=s.themeFragmentsByKind.get(r);let a;if("app"===r||"core"===r)a=e(o,r);else{const{[r]:t}=this;a=e(o,t,r)}return a&&t.push(a),t}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((t=>{this.__resolve=t}))}onQueryTheme(t){if(t.defaultPrevented)return;t.preventDefault();const{detail:e}=t;e.color=this.color||void 0,e.scale=this.scale||void 0,e.lang=this.lang||document.documentElement.lang||navigator.language,e.theme=this.theme||void 0}connectedCallback(){if(this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),s.instances.add(this),!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!(t instanceof s);)t=t.assignedSlot||t.parentNode||t.host;this.dir="rtl"===t.dir?t.dir:"ltr"}}disconnectedCallback(){s.instances.delete(this)}startManagingContentDirection(t){this.trackedChildren.add(t)}stopManagingContentDirection(t){this.trackedChildren.delete(t)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const e=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[e,r]of s.themeFragmentsByKind)for(const[o,{styles:a}]of r){if("default"===o)continue;let r=a.cssText;s.defaultFragments.has(o)||(r=r.replace(":host",`:host([${e}='${o}'])`)),t.push(r)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(s.template,this.localName)}else if(t.FV){const t=[];for(const r of e)t.push(r.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else this.shadowRoot.querySelectorAll("style").forEach((t=>t.remove())),e.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.shadowRoot.appendChild(e)}))}static registerThemeFragment(t,e,r){const o=s.themeFragmentsByKind.get(e)||new Map;0===o.size&&(s.themeFragmentsByKind.set(e,o),o.set("default",{name:t,styles:r}),s.defaultFragments.add(t)),o.set(t,{name:t,styles:r}),s.instances.forEach((t=>t.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((t=>t(this.lang)))}_handleContextPresence(t){const e=t.composedPath()[0];if(this._contextConsumers.has(e))this._contextConsumers.delete(e);else{this._contextConsumers.set(e,t.detail.callback);const r=this._contextConsumers.get(e);r&&r(this.lang||document.documentElement.lang||navigator.language)}}};let c=s;c.themeFragmentsByKind=new Map,c.defaultFragments=new Set(["spectrum"]),c.instances=new Set;const l=t.iv`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-global-color-static-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-global-color-static-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-global-color-static-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-global-color-static-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-global-color-static-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-global-color-static-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:rgba(0,0,0,.1);--spectrum-global-color-static-transparent-black-300:rgba(0,0,0,.25);--spectrum-global-color-static-transparent-black-400:rgba(0,0,0,.4);--spectrum-global-color-static-transparent-black-500:rgba(0,0,0,.55);--spectrum-global-color-static-transparent-black-600:rgba(0,0,0,.7);--spectrum-global-color-static-transparent-black-700:rgba(0,0,0,.8);--spectrum-global-color-static-transparent-black-800:rgba(0,0,0,.9);--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-border-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-icon-color:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-status-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-text-color-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-text-color-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-text-color-small-hover:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-background-color:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-border-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-icon-color:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-status-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-text-color-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-text-color-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-key-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-background-color:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-border-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-icon-color:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-status-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-text-color-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-text-color-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-key-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-background-color:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-border-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-icon-color:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-status-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-text-color-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-text-color-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-cta-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-cta-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-emphasized-border-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-emphasized-border-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-emphasized-border-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-emphasized-border-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-900
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-code-margin-bottom:var(
--spectrum-global-font-multiplier-0
);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(
--spectrum-global-font-font-family-zhhans
);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(
--spectrum-global-font-font-family-condensed
);--spectrum-alias-button-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-2-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-2-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-2-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-3-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-3-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-3-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-component-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-component-border-radius-quiet:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-component-focusring-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-component-focusring-size-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-input-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-input-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-input-quiet-focusline-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-control-two-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-two-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-two-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-control-two-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-control-two-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-control-two-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-control-two-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-control-two-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-control-two-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-two-focus-ring-border-radius-m:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-control-two-focus-ring-border-radius-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-three-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-infieldbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-infieldbutton-fill-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-fill-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-fill-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-fill-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-infieldbutton-full-height-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-infieldbutton-full-height-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-infieldbutton-full-height-xl:var(
--spectrum-global-dimension-size-600
);--spectrum-alias-infieldbutton-half-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-infieldbutton-half-height-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-infieldbutton-half-height-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-infieldbutton-half-height-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-stepperbutton-width-m:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-width-l:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-stepperbutton-width-xl:var(
--spectrum-global-dimension-size-450
);--spectrum-alias-stepperbutton-icon-x-offset-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-x-offset-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-stepperbutton-icon-x-offset-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-clearbutton-icon-margin-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-clearbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-label-padding-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-label-padding-y-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-pickerbutton-label-padding-y-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-pickerbutton-label-padding-y-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-pickerbutton-border-radius-rounded:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-border-radius-rounded-sided:0;--spectrum-alias-search-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-thumbnail-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-actiongroup-button-gap:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-actiongroup-button-gap-compact:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-actiongroup-button-gap-quiet:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-actiongroup-button-gap-quiet-compact:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-search-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-search-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-search-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-gap-small:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-focus-ring-size-small:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-border-radius-xlarge:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-focus-ring-border-radius-xsmall:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-focus-ring-border-radius-small:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-focus-ring-border-radius-medium:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-focus-ring-border-radius-large:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-focus-ring-border-radius-xlarge:var(
--spectrum-global-dimension-size-350
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-workflow-icon-size-s:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-xl:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-tag-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-border-size-default:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-tag-border-size-key-focus:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-tag-border-size-disabled:var(
--spectrum-global-dimension-size-0
);--spectrum-alias-tag-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-tag-padding-right-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-padding-right-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-tag-padding-right-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-tag-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-tag-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-tag-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-tag-font-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-tag-font-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-tag-font-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-tag-text-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-tag-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-tag-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-tag-icon-margin-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-tag-icon-margin-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-tag-icon-margin-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-tag-icon-margin-right-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-tag-icon-margin-right-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-tag-icon-margin-right-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-tag-clearbutton-width-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-tag-clearbutton-width-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-tag-clearbutton-width-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-tag-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-tag-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-tag-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-tag-focusring-size:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-tag-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-tag-focusring-gap-selected:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-colorloupe-width:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-colorloupe-height:var(
--spectrum-global-dimension-static-size-800
)}:host,:root{--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(
--spectrum-alias-transparent-blue-background-color-hover
);--spectrum-alias-transparent-blue-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-transparent-red-background-color-hover:rgba(154,0,0,.15);--spectrum-alias-transparent-red-background-color-down:rgba(124,0,0,.3);--spectrum-alias-transparent-red-background-color-key-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color-mouse-focus:var(
--spectrum-alias-transparent-red-background-color-hover
);--spectrum-alias-transparent-red-background-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-component-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-component-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-key-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-mouse-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-default:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-hover:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-selected-down:var(
--spectrum-alias-component-text-color-down
);--spectrum-alias-component-text-color-selected-key-focus:var(
--spectrum-alias-component-text-color-key-focus
);--spectrum-alias-component-text-color-selected-mouse-focus:var(
--spectrum-alias-component-text-color-mouse-focus
);--spectrum-alias-component-text-color-selected:var(
--spectrum-alias-component-text-color-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-text-color-emphasized-selected-hover:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-down:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-error-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-component-text-color-error-hover:var(
--spectrum-semantic-negative-text-color-small-hover
);--spectrum-alias-component-text-color-error-down:var(
--spectrum-semantic-negative-text-color-small-down
);--spectrum-alias-component-text-color-error-key-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error-mouse-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error:var(
--spectrum-alias-component-text-color-error-default
);--spectrum-alias-component-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-component-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-component-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color:var(
--spectrum-alias-component-icon-color-default
);--spectrum-alias-component-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral-subdued
);--spectrum-alias-component-icon-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-down:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-quiet-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-selected-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-component-background-color-default:var(
--spectrum-global-color-gray-75
);--spectrum-alias-component-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-component-background-color-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-down:var(
--spectrum-global-color-gray-300
);--spectrum-alias-component-background-color-quiet-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet:var(
--spectrum-alias-component-background-color-quiet-default
);--spectrum-alias-component-background-color-quiet-selected-default:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-selected-hover:var(
--spectrum-alias-component-background-color-selected-hover
);--spectrum-alias-component-background-color-quiet-selected-down:var(
--spectrum-alias-component-background-color-selected-down
);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(
--spectrum-alias-component-background-color-selected-key-focus
);--spectrum-alias-component-background-color-quiet-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-background-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-background-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-background-color-emphasized-selected:var(
--spectrum-alias-component-background-color-emphasized-selected-default
);--spectrum-alias-component-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-component-border-color-quiet-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color:var(
--spectrum-alias-component-border-color-default
);--spectrum-alias-component-border-color-selected-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-selected-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-selected-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-selected:var(
--spectrum-alias-component-border-color-selected-default
);--spectrum-alias-component-border-color-quiet-default:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet:var(
--spectrum-alias-component-border-color-quiet-default
);--spectrum-alias-component-border-color-quiet-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet-selected:var(
--spectrum-alias-component-border-color-quiet-selected-default
);--spectrum-alias-component-border-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-border-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-border-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-border-color-emphasized-selected:var(
--spectrum-alias-component-border-color-emphasized-selected-default
);--spectrum-alias-tag-border-color-default:var(
--spectrum-alias-border-color-darker-default
);--spectrum-alias-tag-border-color-hover:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-alias-tag-border-color-down:var(
--spectrum-alias-border-color-darker-hover
);--spectrum-alias-tag-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-tag-border-color-error-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-border-color-error-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-border-color-error-down:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-border-color-error-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-tag-border-color-error-selected:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-border-color-selected:var(
--spectrum-alias-tag-background-color-selected-default
);--spectrum-alias-tag-border-color:var(
--spectrum-alias-tag-border-color-default
);--spectrum-alias-tag-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-tag-border-color-error:var(
--spectrum-alias-tag-border-color-error-default
);--spectrum-alias-tag-text-color-default:var(
--spectrum-alias-label-text-color
);--spectrum-alias-tag-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tag-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tag-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tag-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-tag-text-color:var(
--spectrum-alias-tag-text-color-default
);--spectrum-alias-tag-text-color-error-default:var(
--spectrum-global-color-red-600
);--spectrum-alias-tag-text-color-error-hover:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error-key-focus:var(
--spectrum-global-color-red-700
);--spectrum-alias-tag-text-color-error:var(
--spectrum-alias-tag-text-color-error-default
);--spectrum-alias-tag-text-color-selected:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tag-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tag-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tag-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tag-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-tag-icon-color:var(
--spectrum-alias-tag-icon-color-default
);--spectrum-alias-tag-icon-color-error:var(--spectrum-global-color-red-600);--spectrum-alias-tag-icon-color-selected:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-default:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color:var(
--spectrum-alias-tag-background-color-default
);--spectrum-alias-tag-background-color-error-default:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-tag-background-color-error-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-tag-background-color-error:var(
--spectrum-alias-tag-background-color-error-default
);--spectrum-alias-tag-background-color-error-selected-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-tag-background-color-error-selected-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-background-color-error-selected-down:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-tag-background-color-error-selected-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-alias-tag-background-color-error-selected:var(
--spectrum-alias-tag-background-color-error-selected-default
);--spectrum-alias-tag-background-color-selected-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-tag-background-color-selected-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-tag-background-color-selected-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tag-background-color-selected-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tag-background-color-selected:var(
--spectrum-alias-tag-background-color-selected-default
);--spectrum-alias-tag-focusring-border-color-default:transparent;--spectrum-alias-tag-focusring-border-color-key-focus:transparent;--spectrum-alias-tag-focusring-border-color-disabled:transparent;--spectrum-alias-tag-focusring-border-color-selected-key-focus:var(
--spectrum-alias-focus-ring-color
);--spectrum-alias-tag-focusring-border-color:var(
--spectrum-alias-tag-focusring-border-color-default
);--spectrum-alias-avatar-border-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color:var(
--spectrum-alias-avatar-border-color-default
);--spectrum-alias-avatar-border-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected:var(
--spectrum-alias-avatar-border-color-selected-default
);--spectrum-alias-avatar-border-color-selected-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-toggle-background-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color:var(
--spectrum-alias-toggle-background-color-default
);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(
--spectrum-global-color-blue-500
);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-toggle-background-color-emphasized-selected:var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
);--spectrum-alias-toggle-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-border-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color:var(
--spectrum-alias-toggle-border-color-default
);--spectrum-alias-toggle-icon-color-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-toggle-icon-color-emphasized-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-button-primary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-primary-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-button-primary-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color:var(
--spectrum-alias-button-primary-background-color-default
);--spectrum-alias-button-primary-border-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-border-color-hover:var(
--spectrum-alias-button-primary-background-color-hover
);--spectrum-alias-button-primary-border-color-down:var(
--spectrum-alias-button-primary-background-color-down
);--spectrum-alias-button-primary-border-color-key-focus:var(
--spectrum-alias-button-primary-background-color-key-focus
);--spectrum-alias-button-primary-border-color:var(
--spectrum-alias-button-primary-border-color-default
);--spectrum-alias-button-primary-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-default:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-hover:var(
--spectrum-alias-button-primary-text-color-hover
);--spectrum-alias-button-primary-icon-color-down:var(
--spectrum-alias-button-primary-text-color-down
);--spectrum-alias-button-primary-icon-color-key-focus:var(
--spectrum-alias-button-primary-text-color-key-focus
);--spectrum-alias-button-primary-icon-color:var(
--spectrum-alias-button-primary-icon-color-default
);--spectrum-alias-button-secondary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-secondary-background-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-secondary-background-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color:var(
--spectrum-alias-button-secondary-background-color-default
);--spectrum-alias-button-secondary-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-border-color-hover:var(
--spectrum-alias-button-secondary-background-color-hover
);--spectrum-alias-button-secondary-border-color-down:var(
--spectrum-alias-button-secondary-background-color-down
);--spectrum-alias-button-secondary-border-color-key-focus:var(
--spectrum-alias-button-secondary-background-color-key-focus
);--spectrum-alias-button-secondary-border-color:var(
--spectrum-alias-button-secondary-border-color-default
);--spectrum-alias-button-secondary-text-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-default:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-hover:var(
--spectrum-alias-button-secondary-text-color-hover
);--spectrum-alias-button-secondary-icon-color-down:var(
--spectrum-alias-button-secondary-text-color-down
);--spectrum-alias-button-secondary-icon-color-key-focus:var(
--spectrum-alias-button-secondary-text-color-key-focus
);--spectrum-alias-button-secondary-icon-color:var(
--spectrum-alias-button-secondary-icon-color-default
);--spectrum-alias-button-negative-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-negative-background-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-background-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color:var(
--spectrum-alias-button-negative-background-color-default
);--spectrum-alias-button-negative-border-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-border-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color:var(
--spectrum-alias-button-negative-border-color-default
);--spectrum-alias-button-negative-text-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-default:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-hover:var(
--spectrum-alias-button-negative-text-color-hover
);--spectrum-alias-button-negative-icon-color-down:var(
--spectrum-alias-button-negative-text-color-down
);--spectrum-alias-button-negative-icon-color-key-focus:var(
--spectrum-alias-button-negative-text-color-key-focus
);--spectrum-alias-button-negative-icon-color:var(
--spectrum-alias-button-negative-icon-color-default
);--spectrum-alias-input-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-input-border-color-quiet-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-alias-input-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-input-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-input-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-input-border-color-invalid-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-input-border-color-invalid-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-down:var(
--spectrum-semantic-negative-color-down
);--spectrum-alias-input-border-color-invalid-mouse-focus:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color-invalid:var(
--spectrum-alias-input-border-color-invalid-default
);--spectrum-alias-background-color-yellow-default:var(
--spectrum-global-color-static-yellow-300
);--spectrum-alias-background-color-yellow-hover:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-key-focus:var(
--spectrum-global-color-static-yellow-400
);--spectrum-alias-background-color-yellow-down:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-background-color-yellow:var(
--spectrum-alias-background-color-yellow-default
);--spectrum-alias-infieldbutton-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-infieldbutton-fill-border-color-default:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-infieldbutton-fill-border-color-hover:var(
--spectrum-alias-input-border-color-hover
);--spectrum-alias-infieldbutton-fill-border-color-down:var(
--spectrum-alias-input-border-color-down
);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(
--spectrum-alias-input-border-color-mouse-focus
);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(
--spectrum-alias-input-border-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(
--spectrum-alias-component-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(
--spectrum-alias-component-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(
--spectrum-alias-component-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-tabs-divider-background-color-default:var(
--spectrum-global-color-gray-300
);--spectrum-alias-tabs-divider-background-color-quiet:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-tabitem-text-color-default:var(
--spectrum-alias-label-text-color
);--spectrum-alias-tabitem-text-color-hover:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-down:var(
--spectrum-alias-text-color-down
);--spectrum-alias-tabitem-text-color-key-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color-mouse-focus:var(
--spectrum-alias-text-color-hover
);--spectrum-alias-tabitem-text-color:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-selected-default:var(
--spectrum-global-color-gray-900
);--spectrum-alias-tabitem-text-color-selected-hover:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-down:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-selected:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-text-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-text-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-default:var(
--spectrum-alias-tabitem-text-color-selected-default
);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-tabitem-icon-color-disabled:var(
--spectrum-alias-text-color-disabled
);--spectrum-alias-tabitem-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-tabitem-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-tabitem-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-tabitem-icon-color:var(
--spectrum-alias-tabitem-icon-color-default
);--spectrum-alias-tabitem-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral
);--spectrum-alias-tabitem-icon-color-emphasized:var(
--spectrum-alias-tabitem-text-color-default
);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(
--spectrum-alias-tabitem-text-color-emphasized-selected-default
);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-overlay-background-color:rgba(27,127,245,.1);--spectrum-alias-assetcard-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-hover:var(
--spectrum-global-color-blue-500
);--spectrum-alias-assetcard-border-color-selected-down:var(
--spectrum-global-color-blue-600
);--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-link-primary-text-color-default:var(
--spectrum-global-color-blue-600
);--spectrum-alias-link-primary-text-color-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-link-primary-text-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-link-primary-text-color-key-focus:var(
--spectrum-alias-text-color-key-focus
);--spectrum-alias-link-primary-text-color:var(
--spectrum-alias-link-primary-text-color-default
);--spectrum-alias-link-secondary-text-color-default:var(
--spectrum-alias-link-primary-text-color-default
);--spectrum-alias-link-secondary-text-color-hover:var(
--spectrum-alias-link-primary-text-color-hover
);--spectrum-alias-link-secondary-text-color-down:var(
--spectrum-alias-link-primary-text-color-down
);--spectrum-alias-link-secondary-text-color-key-focus:var(
--spectrum-alias-link-primary-text-color-key-focus
);--spectrum-alias-link-secondary-text-color:var(
--spectrum-alias-link-secondary-text-color-default
);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-darksquare-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-lightsquare-background-color:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected-neutral-subdued:var(
--spectrum-global-color-gray-800
);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
)}:host,:root{--spectrum-colorloupe-express-visibility:none;--spectrum-colorloupe-spectrum-visibility:block;--spectrum-colorloupe-outer-border-color:transparent;--spectrum-colorloupe-outer-border-size:0;--spectrum-colorloupe-outer-stroke-color:var(
--spectrum-global-color-static-transparent-black-200
);--spectrum-colorloupe-outer-stroke-width:var(
--spectrum-alias-border-size-thick
);--spectrum-colorhandle-background-offset:calc(var(--spectrum-global-dimension-static-size-25)*-1);--spectrum-colorhandle-inner-shadow-color:var(
--spectrum-colorhandle-outer-shadow-color
);--spectrum-colorhandle-outer-shadow-color:rgba(0,0,0,.42);--spectrum-colorhandle-outer-shadow-blur:0;--spectrum-colorhandle-outer-shadow-spread:var(
--spectrum-alias-border-size-thin
);--spectrum-colorcontrol-checkerboard-light-color:var(
--spectrum-global-color-static-white
);--spectrum-colorcontrol-checkerboard-dark-color:var(
--spectrum-global-color-static-gray-300
);--spectrum-slider-m-track-inside-border-radius:var(
--spectrum-slider-m-track-border-radius
);--spectrum-slider-label-text-size:var(
--spectrum-global-dimension-font-size-75
)}:host,:root{--spectrum-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-transparent-white-900:#fff;--spectrum-transparent-black-200:rgba(0,0,0,.1);--spectrum-transparent-black-300:rgba(0,0,0,.25);--spectrum-transparent-black-400:rgba(0,0,0,.4);--spectrum-transparent-black-500:rgba(0,0,0,.55);--spectrum-transparent-black-600:rgba(0,0,0,.7);--spectrum-transparent-black-700:rgba(0,0,0,.8);--spectrum-transparent-black-800:rgba(0,0,0,.9);--spectrum-transparent-black-900:#000;--spectrum-focus-ring-color:var(--spectrum-blue-800);--spectrum-static-white-focus-ring-color:var(--spectrum-white);--spectrum-static-black-focus-ring-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(
--spectrum-gray-800
);--spectrum-accent-content-color:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(
--spectrum-accent-color-1000
);--spectrum-negative-content-color:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(
--spectrum-negative-color-1000
);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(
--spectrum-negative-color-1000
);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(
--spectrum-transparent-white-500
);--spectrum-disabled-static-black-content-color:var(
--spectrum-transparent-black-500
);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(
--spectrum-transparent-white-200
);--spectrum-disabled-static-black-background-color:var(
--spectrum-transparent-black-200
);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(
--spectrum-transparent-white-300
);--spectrum-disabled-static-black-border-color:var(
--spectrum-transparent-black-300
);--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-black:#000;--spectrum-white:#fff;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-radio-button-selection-indicator:4px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-ring-thickness:2px;--spectrum-focus-ring-gap:2px;--spectrum-border-width-200:2px;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-CJK-line-height-100:1.5;--spectrum-CJK-line-height-200:1.7}:host,:root{--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-border-width-100:1px}:host,:root{--system-spectrum-actionbutton-background-color-default:var(
--spectrum-gray-75
);--system-spectrum-actionbutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-border-color-default:var(
--spectrum-gray-400
);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-content-color-default:var(
--spectrum-neutral-content-color-default
);--system-spectrum-actionbutton-content-color-hover:var(
--spectrum-neutral-content-color-hover
);--system-spectrum-actionbutton-content-color-down:var(
--spectrum-neutral-content-color-down
);--system-spectrum-actionbutton-content-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(
--spectrum-disabled-border-color
);--system-spectrum-actionbutton-content-color-disabled:var(
--spectrum-disabled-content-color
);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-actionbutton-quiet-background-color-focus:var(
--spectrum-gray-200
);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-background-color-default:var(
--spectrum-neutral-subdued-background-color-default
);--system-spectrum-actionbutton-selected-background-color-hover:var(
--spectrum-neutral-subdued-background-color-hover
);--system-spectrum-actionbutton-selected-background-color-down:var(
--spectrum-neutral-subdued-background-color-down
);--system-spectrum-actionbutton-selected-background-color-focus:var(
--spectrum-neutral-subdued-background-color-key-focus
);--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-selected-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-selected-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-selected-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-selected-background-color-disabled:var(
--spectrum-disabled-background-color
);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-emphasized-background-color-default:var(
--spectrum-accent-background-color-default
);--system-spectrum-actionbutton-selected-emphasized-background-color-hover:var(
--spectrum-accent-background-color-hover
);--system-spectrum-actionbutton-selected-emphasized-background-color-down:var(
--spectrum-accent-background-color-down
);--system-spectrum-actionbutton-selected-emphasized-background-color-focus:var(
--spectrum-accent-background-color-key-focus
);--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-background-color-down:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-background-color-focus:var(
--spectrum-transparent-black-300
);--system-spectrum-actionbutton-staticblack-border-color-default:var(
--spectrum-transparent-black-400
);--system-spectrum-actionbutton-staticblack-border-color-hover:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-border-color-down:var(
--spectrum-transparent-black-600
);--system-spectrum-actionbutton-staticblack-border-color-focus:var(
--spectrum-transparent-black-500
);--system-spectrum-actionbutton-staticblack-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticblack-focus-ring-color:var(
--spectrum-static-black-focus-ring-color
);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(
--spectrum-disabled-static-black-border-color
);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--system-spectrum-actionbutton-staticblack-selected-background-color-default:var(
--spectrum-transparent-black-800
);--system-spectrum-actionbutton-staticblack-selected-background-color-hover:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-background-color-down:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-background-color-focus:var(
--spectrum-transparent-black-900
);--system-spectrum-actionbutton-staticblack-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-selected-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticblack-selected-background-color-disabled:var(
--spectrum-disabled-static-black-background-color
);--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-background-color-down:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(
--spectrum-transparent-white-300
);--system-spectrum-actionbutton-staticwhite-border-color-default:var(
--spectrum-transparent-white-400
);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-border-color-down:var(
--spectrum-transparent-white-600
);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(
--spectrum-transparent-white-500
);--system-spectrum-actionbutton-staticwhite-content-color-default:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-down:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(
--spectrum-white
);--system-spectrum-actionbutton-staticwhite-focus-ring-color:var(
--spectrum-static-white-focus-ring-color
);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(
--spectrum-disabled-static-white-border-color
);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--system-spectrum-actionbutton-staticwhite-selected-background-color-default:var(
--spectrum-transparent-white-800
);--system-spectrum-actionbutton-staticwhite-selected-background-color-hover:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-background-color-down:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-background-color-focus:var(
--spectrum-transparent-white-900
);--system-spectrum-actionbutton-staticwhite-selected-content-color-default:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-content-color-hover:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-content-color-down:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-content-color-focus:var(
--spectrum-black
);--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled:var(
--spectrum-disabled-static-white-background-color
);--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled:transparent}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(
--spectrum-gray-200
);--system-spectrum-closebutton-background-color-down:var(
--spectrum-gray-300
);--system-spectrum-closebutton-background-color-focus:var(
--spectrum-gray-200
)}:host,:root{--system-spectrum-radio-button-border-color-default:var(
--spectrum-gray-600
);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-button-checked-border-color-default:var(
--spectrum-gray-700
);--system-spectrum-radio-button-checked-border-color-hover:var(
--spectrum-gray-800
);--system-spectrum-radio-button-checked-border-color-down:var(
--spectrum-gray-900
);--system-spectrum-radio-button-checked-border-color-focus:var(
--spectrum-gray-800
);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(
--spectrum-accent-color-900
);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(
--spectrum-accent-color-1000
);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(
--spectrum-accent-color-1100
);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(
--spectrum-accent-color-1000
)}:host,:root{--system:spectrum}:host,:root{--spectrum-animation-duration-100:130ms;--spectrum-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-line-height-large:1.7;--spectrum-line-height-medium:1.5;--spectrum-line-height-small:1.3;--spectrum-font-weight-thin:100;--spectrum-font-weight-ultra-light:200;--spectrum-font-weight-light:300;--spectrum-font-weight-regular:400;--spectrum-font-weight-medium:500;--spectrum-font-weight-semi-bold:600;--spectrum-font-weight-bold:700;--spectrum-font-weight-extra-bold:800;--spectrum-font-weight-black:900}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;c.registerThemeFragment("spectrum","theme",l),c.registerThemeFragment("dark","color",e);const n=t.iv`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-s:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-item-workflow-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-bottom-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-component-focusring-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-control-two-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-focus-ring-border-radius-regular:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-focus-ring-radius-default:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-workflow-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-chevron-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-chevron-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-chevron-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-chevron-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-50:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-checkmark-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-checkmark-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-dash-size-50:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-dash-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-400:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-dash-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-dash-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-cross-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-100:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-cross-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-400:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-500:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-cross-size-600:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-arrow-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-arrow-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-500:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-arrow-size-600:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-ui-icon-cornertriangle-size-100:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-300:var(
--spectrum-global-dimension-static-size-85
);--spectrum-alias-ui-icon-asterisk-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-asterisk-size-300:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-avatar-size-100:var(--spectrum-global-dimension-size-250);--spectrum-alias-avatar-size-400:var(--spectrum-global-dimension-size-350);--spectrum-alias-avatar-size-600:var(--spectrum-global-dimension-size-450);--spectrum-alias-tag-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-tag-focusring-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-l-neutral-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-s-primary-fill-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-m-primary-fill-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-l-primary-fill-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-xl-primary-fill-texticon-padding-left:21px;--spectrum-button-m-primary-outline-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-checkbox-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-dialog-confirm-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-confirm-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-confirm-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-listitem-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-listitem-m-textthumbnail-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-progressbar-s-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-m-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-xl-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progresscircle-s-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-m-border-size:3px;--spectrum-statuslight-s-info-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-l-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-info-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-xl-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-textfield-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tooltip-neutral-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}:host,:root{--spectrum-component-pill-edge-to-visual-75:10px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:21px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:7px;--spectrum-component-pill-edge-to-visual-only-200:10px;--spectrum-component-pill-edge-to-visual-only-300:13px;--spectrum-component-pill-edge-to-text-75:12px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:24px;--spectrum-component-edge-to-visual-50:6px;--spectrum-component-edge-to-visual-75:7px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:15px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:7px;--spectrum-component-edge-to-visual-only-200:10px;--spectrum-component-edge-to-visual-only-300:13px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:9px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:18px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:7px;--spectrum-component-top-to-workflow-icon-200:10px;--spectrum-component-top-to-workflow-icon-300:13px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:4px;--spectrum-field-label-top-margin-extra-large:4px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-in-line-alert-minimum-width:320px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-status-light-dot-size-small:8px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-toast-height:48px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-tooltip-width:8px;--spectrum-tooltip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-popover-top-to-content-area:4px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px;--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:18px;--spectrum-workflow-icon-size-200:20px;--spectrum-workflow-icon-size-300:22px;--spectrum-text-to-visual-50:6px;--spectrum-text-to-visual-75:7px;--spectrum-text-to-visual-100:8px;--spectrum-text-to-visual-200:9px;--spectrum-text-to-visual-300:10px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px}:host,:root{--spectrum-edge-to-visual-only-75:4px;--spectrum-edge-to-visual-only-100:7px;--spectrum-edge-to-visual-only-200:10px;--spectrum-edge-to-visual-only-300:13px}:host,:root{--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-corner-radius-75:2px;--spectrum-corner-radius-100:4px;--spectrum-corner-radius-200:8px;--spectrum-drop-shadow-x:0px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px}
`;c.registerThemeFragment("medium","scale",n),customElements.define("sp-theme",c);var u=i(599),d=i(338);const m=t.iv`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`;var p=Object.defineProperty,b=Object.getOwnPropertyDescriptor,h=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?b(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&p(e,r,s),s};class g extends u.o{static get styles(){return[m]}render(){return t.dy`
            <slot></slot>
        `}}let v;h([(0,d.Cb)()],g.prototype,"label",2),h([(0,d.Cb)({reflect:!0})],g.prototype,"size",2);const f=function(t,...e){return v?v(t,...e):e.reduce(((e,r,o)=>e+r+t[o+1]),t[0])},x=t=>{v=t};customElements.define("sp-icon-edit",class extends g{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Edit"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945ZM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-anchor-select",class extends g{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Anchor Select"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="m10 6 18 18H18l-8 8ZM8.5 2.054a.5.5 0 0 0-.5.5v32.78a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.147L18.524 26h13a.5.5 0 0 0 .354-.854L8.854 2.2a.49.49 0 0 0-.354-.146Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var y=Object.defineProperty,k=Object.getOwnPropertyDescriptor;function w(t,{validSizes:e=["s","m","l","xl"],noDefaultSize:r,defaultSize:o="m"}={}){class a extends t{constructor(){super(...arguments),this._size=o}get size(){return this._size||o}set size(t){const a=r?null:o,s=t&&t.toLocaleLowerCase(),i=e.includes(s)?s:a;if(i&&this.setAttribute("size",i),this._size===i)return;const c=this._size;this._size=i,this.requestUpdate("size",c)}update(t){!this.hasAttribute("size")&&!r&&this.setAttribute("size",this.size),super.update(t)}}return((t,e,r,o)=>{for(var a,s=k(e,r),i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&y(e,r,s)})([(0,d.Cb)({type:String,reflect:!0})],a.prototype,"size"),a}var z=i(796);class C{constructor(t,{target:e,config:r,callback:o,skipInitial:a}){this.t=!1,this.o=!1,this.callback=()=>!0,(this.i=t).addController(this),this.h=null===e||null!=e?e:this.i,this.t=null!=a?a:this.t,this.callback=null!=o?o:this.callback,window.IntersectionObserver?this.u=new IntersectionObserver((t=>{const e=this.o;this.o=!1,this.t&&e||(this.handleChanges(t),this.i.requestUpdate())}),r):console.warn("IntersectionController error: browser does not support IntersectionObserver.")}handleChanges(t){this.value=this.callback(t,this.u)}hostConnected(){this.h&&this.observe(this.h)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();t.length&&this.handleChanges(t)}observe(t){this.u.observe(t),this.o=!0}disconnect(){this.u.disconnect()}}let I=!0;try{document.body.querySelector(":focus-visible")}catch(h){I=!1,i.e(202).then(i.t.bind(i,202,19))}const q=t=>{var e;const r=Symbol("endPolyfillCoordination");return e=r,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),I||requestAnimationFrame((()=>{null==this[r]&&(this[r]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill&&t.shadowRoot&&self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus(),()=>{}})(this))}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),I||requestAnimationFrame((()=>{null!=this[r]&&(this[r](),this[r]=null)}))}}};var E=Object.defineProperty,S=Object.getOwnPropertyDescriptor,A=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?S(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&E(e,r,s),s};class $ extends(q(u.o)){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex)this.manipulatingTabindex=!1;else if(this.focusElement!==this){if(-1===t?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),-1===t||this.disabled)return this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),void(-1!==t&&this.manageFocusElementTabindex(t));this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}else if(t!==this.tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.setAttribute("tabindex",e)}}onPointerdownManagementOfTabIndex(){-1===this.tabIndex&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,null===t?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||"-1"!==this.getAttribute("tabindex"))&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const r=()=>this.focusElement!==this&&void 0!==this.focusElement.disabled;t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{requestAnimationFrame((()=>{this.manageAutoFocus()}))}))}}A([(0,d.Cb)({type:Boolean,reflect:!0})],$.prototype,"disabled",2),A([(0,d.Cb)({type:Boolean})],$.prototype,"autofocus",2),A([(0,d.Cb)({type:Number})],$.prototype,"tabIndex",1);class _{constructor(t,{direction:e,elementEnterAction:r,elements:o,focusInIndex:a,isFocusableElement:s,listenerScope:i}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();const e=t.composedPath();let r=-1;e.find((t=>(r=this.elements.indexOf(t),-1!==r))),this.currentIndex=r>-1?r:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=o,this.isFocusableElement=s||this.isFocusableElement,"string"==typeof e?this._direction=()=>e:"function"==typeof e&&(this._direction=e),this.elementEnterAction=r||this.elementEnterAction,"number"==typeof a?this._focusInIndex=()=>a:"function"==typeof a&&(this._focusInIndex=a),"object"==typeof i?this._listenerScope=()=>i:"function"==typeof i&&(this._listenerScope=i)}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t)}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){let e=this.elements[this.currentIndex];(!e||!this.isFocusableElement(e))&&(this.setCurrentIndexCircularly(1),e=this.elements[this.currentIndex]),e&&this.isFocusableElement(e)&&e.focus(t)}clearElementCache(t=0){delete this.cachedElements,this.offset=t}setCurrentIndexCircularly(t){const{length:e}=this.elements;let r=e,o=(e+this.currentIndex+t)%e;for(;r&&this.elements[o]&&!this.isFocusableElement(this.elements[o]);)o=(e+o+t)%e,r-=1;this.currentIndex=o}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}manage(){this.addEventListeners()}unmanage(){this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}class T extends _{constructor(){super(...arguments),this.managed=!0,this.manageIndexesAnimationFrame=0}set focused(t){t!==this.focused&&(super.focused=t,this.manageTabindexes())}get focused(){return super.focused}clearElementCache(t=0){cancelAnimationFrame(this.manageIndexesAnimationFrame),super.clearElementCache(t),this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame((()=>this.manageTabindexes())))}manageTabindexes(){this.focused?this.updateTabindexes((()=>({tabIndex:-1}))):this.updateTabindexes((t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1})))}updateTabindexes(t){this.elements.forEach((e=>{const{tabIndex:r,removeTabIndex:o}=t(e);if(!o)return void(e.tabIndex=r);e.removeAttribute("tabindex");const a=e;a.requestUpdate&&a.requestUpdate()}))}manage(){this.managed=!0,this.manageTabindexes(),super.manage()}unmanage(){this.managed=!1,this.updateTabindexes((()=>({tabIndex:0}))),super.unmanage()}hostUpdated(){this.host.hasUpdated||this.manageTabindexes()}}const U=t.iv`
:host([size=s]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-s-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-s-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-s-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-s-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-s-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-s-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-s-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-s-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-s-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-s-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-s-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-450)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-s-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-s-compact-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
)}:host([size=m]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-m-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-m-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-m-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-m-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-m-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-m-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-m-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-m-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-m-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-m-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-m-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-550)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-m-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-m-compact-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
)}:host([size=l]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-l-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-l-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-700)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-l-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-l-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-l-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-l-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-l-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-l-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-l-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-l-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-l-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-650)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-l-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-l-compact-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
)}:host([size=xl]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-800)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-xl-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-xl-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-xl-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-xl-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-xl-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-xl-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-xl-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-xl-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-750)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-xl-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-xl-compact-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
)}:host{--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-compact-textonly-height) - var(--spectrum-tabs-compact-textonly-divider-size))}#list{display:flex;margin:0;padding-bottom:0;padding-top:0;position:relative;vertical-align:top;z-index:0}:host([dir=ltr]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) #selection-indicator{left:0}:host([dir=rtl]) #selection-indicator{right:0}#selection-indicator{border-radius:var(--spectrum-tabs-textonly-divider-border-radius);position:absolute;transform-origin:top left;transition:transform var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) var(--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease);z-index:0}:host([compact]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-item-height
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction^=horizontal]) #list{align-items:center;border-bottom:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=horizontal]) ::slotted(:not([slot])){vertical-align:top}:host([dir=ltr][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([dir=rtl][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([direction^=horizontal]) #selection-indicator{bottom:0;bottom:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1);height:var(--spectrum-tabs-quiet-textonly-divider-size);position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([dir=ltr][direction^=vertical]) #list{border-left:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([dir=rtl][direction^=vertical]) #list{border-right:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])){margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([direction^=vertical]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-vertical-textonly-tabitem-gap);padding-bottom:0;padding-left:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-right:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-top:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([direction^=vertical]) .spectrum-Icon{height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height)}:host([direction^=vertical][compact]) #list ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-compact-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-compact-vertical-textonly-tabitem-gap)}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:0}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:0}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([direction^=vertical]) #selection-indicator{position:absolute;width:var(--spectrum-tabs-quiet-textonly-divider-size)}#list{border-bottom-color:var(
--spectrum-tabs-textonly-divider-background-color
)}:host([dir=ltr][direction^=vertical]) #list{border-left-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) #list{border-right-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}#selection-indicator{background-color:var(
--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected
)}:host([emphasized]) #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([emphasized]) ::slotted([selected]:not([slot])){color:var(
--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected
)}:host([emphasized]) ::slotted([selected]:not([slot])) .spectrum-Icon{color:var(
--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected
)}:host([quiet]) #list{border-bottom-color:var(
--spectrum-tabs-quiet-textonly-divider-background-color
)}:host([quiet]) #selection-indicator{background-color:var(
--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected
)}:host([quiet][emphasized]) #list #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical][compact]) #list,:host([dir=ltr][direction^=vertical][quiet]) #list{border-left-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][compact]) #list,:host([dir=rtl][direction^=vertical][quiet]) #list{border-right-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([direction^=vertical][compact]) #list #selection-indicator,:host([direction^=vertical][quiet]) #list #selection-indicator{background-color:var(
--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical][emphasized]) #list{border-left-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][emphasized]) #list{border-right-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([direction^=vertical][emphasized]) #list #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}@media (forced-colors:active){#list{--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:HighlightText;--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-icon-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-tabitem-text-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-text-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-text-color:ButtonText;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:Highlight;forced-color-adjust:none}::slotted(:not([slot])):before{background-color:ButtonFace}::slotted([selected]:not([slot])){color:HighlightText}::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}:host([emphasized]) #list ::slotted(:not([slot])):before{background-color:ButtonFace}:host([emphasized]) #list ::slotted([selected]:not([slot])){color:HighlightText}:host([emphasized]) #list ::slotted([selected]:not([slot])):before{background-color:Highlight;color:HighlightText}}:host{display:grid;grid-template-columns:100%}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([direction=vertical]){gap:var(--spectrum-tabs-textonly-tabitem-focus-ring-size)}#selection-indicator{border-radius:0;z-index:1}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host(:not([direction^=vertical])) #selection-indicator{bottom:0}:host([dir=ltr][direction=vertical]) #selection-indicator,:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:0}:host([dir=ltr][direction=vertical-right]) #selection-indicator,:host([dir=rtl][direction=vertical]) #selection-indicator{left:auto;right:0}:host([disabled]) #selection-indicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{--sp-tabs-list-background-direction:top;--sp-tabs-list-background-color:transparent;background:linear-gradient(to var(--sp-tabs-list-background-direction),var(--sp-tabs-list-background-color) 0,var(--sp-tabs-list-background-color) var(--spectrum-tabs-quiet-textonly-divider-size),transparent var(--spectrum-tabs-quiet-textonly-divider-size));border:none!important;justify-content:var(--swc-tabs-list-justify-content)}:host(:not([direction^=vertical])) #list{padding-bottom:var(--spectrum-tabs-quiet-textonly-divider-size)}:host(:not([quiet])) #list{--sp-tabs-list-background-color:var(
--spectrum-tabs-textonly-divider-background-color
)}:host([empasized]) #list{--sp-tabs-list-background-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host(:not([quiet])[direction^=vertical]) #list{--sp-tabs-list-background-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}:host([dir=ltr][direction=vertical]) #list,:host([dir=rtl][direction=vertical-right]) #list{--sp-tabs-list-background-direction:right;padding-left:var(--spectrum-tabs-quiet-textonly-divider-size)}:host([dir=ltr][direction=vertical-right]) #list,:host([dir=rtl][direction=vertical]) #list{--sp-tabs-list-background-direction:left;padding-right:var(--spectrum-tabs-quiet-textonly-divider-size)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selection-indicator,:host([direction=vertical]) #selection-indicator{height:1px;top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir][direction=horizontal]) #selection-indicator{width:1px}:host([dir=ltr][direction=vertical-right]) #list{border-left:0;border-right:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-right-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir=rtl][direction=vertical-right]) #list{border-left:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-left-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);border-right:0}:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:0;right:auto}#selection-indicator.first-position{transition:none}:host([dir=ltr][direction=vertical-right]) ::slotted(:not([slot])){margin-left:0;margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction=vertical-right]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2);margin-right:0}
`;var P=Object.defineProperty,L=Object.getOwnPropertyDescriptor,O=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?L(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&P(e,r,s),s};const F="transform: translateX(0px) scaleX(0) scaleY(0)";class B extends(w($)){constructor(){super(),this.auto=!1,this.compact=!1,this.direction="horizontal",this.emphasized=!1,this.label="",this.quiet=!1,this.selectionIndicatorStyle=F,this.shouldAnimate=!1,this._selected="",this._tabs=[],this.rovingTabindexController=new T(this,{focusInIndex:t=>{let e=0;return t.find(((t,r)=>{const o=this.selected?!t.disabled&&t.value===this.selected:!t.disabled;return e=r,o}))?e:-1},direction:()=>"horizontal"===this.direction?"horizontal":"vertical",elementEnterAction:t=>{!this.auto||(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find((t=>t.parentElement===this));!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if("Enter"===t.code||"Space"===t.code){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach((t=>{t.removeAttribute("selected")})),this.selected){const t=this.tabs.find((t=>t.value===this.selected));t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find((t=>t.selected));if(!t)return void(this.selectionIndicatorStyle=F);await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const e=t.getBoundingClientRect();if("horizontal"===this.direction){const r=e.width,o=t.offsetLeft;this.selectionIndicatorStyle=`transform: translateX(${o}px) scaleX(${r});`}else{const r=e.height,o=t.offsetTop;this.selectionIndicatorStyle=`transform: translateY(${o}px) scaleY(${r});`}},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){},new C(this,{config:{root:null,rootMargin:"0px",threshold:[0,1]},callback:()=>{this.updateSelectionIndicator()}})}static get styles(){return[U]}get selected(){return this._selected}set selected(t){const e=this.selected;t!==e&&(this._selected=t,this.shouldUpdateCheckedState(),this.requestUpdate("selected",e))}set tabs(t){t!==this.tabs&&(this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}manageAutoFocus(){const t=[...this.children].map((t=>void 0!==t.updateComplete?t.updateComplete:Promise.resolve(!0)));Promise.all(t).then((()=>super.manageAutoFocus()))}managePanels({target:t}){t.assignedElements().map((t=>{const{value:e,id:r}=t,o=this.querySelector(`[role="tab"][value="${e}"]`);o&&(o.setAttribute("aria-controls",r),t.setAttribute("aria-labelledby",o.id)),t.selected=e===this.selected}))}render(){return t.dy`
            <div
                aria-label=${(0,z.o)(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @sp-tab-contentchange=${this.updateSelectionIndicator}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${(0,z.o)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}willUpdate(t){if(!this.hasUpdated){const t=this.querySelector(":scope > [selected]");t&&this.selectTarget(t)}if(super.updated(t),t.has("selected")){if(t.get("selected")){const e=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);e&&(e.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&void 0!==t.get("shouldAnimate")&&(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const t=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=t)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise((t=>this.tabChangeResolver=t)),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.tabChangePromise,t}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}O([(0,d.Cb)({type:Boolean})],B.prototype,"auto",2),O([(0,d.Cb)({type:Boolean,reflect:!0})],B.prototype,"compact",2),O([(0,d.Cb)({reflect:!0})],B.prototype,"direction",2),O([(0,d.Cb)({type:Boolean,reflect:!0})],B.prototype,"emphasized",2),O([(0,d.Cb)()],B.prototype,"label",2),O([(0,d.Cb)({type:Boolean,reflect:!0})],B.prototype,"quiet",2),O([(0,d.Cb)({attribute:!1})],B.prototype,"selectionIndicatorStyle",2),O([(0,d.Cb)({attribute:!1})],B.prototype,"shouldAnimate",2),O([(0,d.IO)("#list")],B.prototype,"tabList",2),O([(0,d.Cb)({reflect:!0})],B.prototype,"selected",1),customElements.define("sp-tabs",B);class D{constructor(t,{target:e,config:r,callback:o,skipInitial:a}){this.t=!1,this.o=!1,this.callback=()=>!0,(this.i=t).addController(this),this.h=null===e||null!=e?e:this.i,this.l=r,this.t=null!=a?a:this.t,this.callback=null!=o?o:this.callback,window.MutationObserver?this.u=new MutationObserver((t=>{this.handleChanges(t),this.i.requestUpdate()})):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){this.value=this.callback(t,this.u)}hostConnected(){this.h&&this.observe(this.h)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.t&&this.o)&&this.handleChanges(t),this.o=!1}observe(t){this.u.observe(t,this.l),this.o=!0,this.i.requestUpdate()}disconnect(){this.u.disconnect()}}var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,H=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?M(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&j(e,r,s),s};const R=Symbol("assignedNodes");function N(t,e){var r;class o extends t{constructor(...t){super(t),this.slotHasContent=!1,new D(this,{config:{characterData:!0,subtree:!0},callback:t=>{for(const e of t)if("characterData"===e.type)return void this.manageTextObservedSlot()}})}manageTextObservedSlot(){if(!this[R])return;const t=[...this[R]].filter((t=>!!t.tagName||!!t.textContent&&t.textContent.trim()));this.slotHasContent=t.length>0}update(t){if(!this.hasUpdated){const{childNodes:t}=this,r=[...t].filter((t=>t.tagName?e?t.getAttribute("slot")===e:!t.hasAttribute("slot"):!!t.textContent&&t.textContent.trim()));this.slotHasContent=r.length>0}super.update(t)}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.manageTextObservedSlot()}))}}return r=R,H([(0,d.Cb)({type:Boolean,attribute:!1})],o.prototype,"slotHasContent",2),H([(0,d.vZ)(e,!0)],o.prototype,r,2),o}const V=Symbol("slotContentIsPresent");function K(t,e){var r;const o=Array.isArray(e)?e:[e];return r=V,class extends t{constructor(...t){super(t),this[r]=new Map,this.managePresenceObservedSlot=()=>{let t=!1;o.forEach((e=>{const r=!!this.querySelector(e),o=this[V].get(e)||!1;t=t||o!==r,this[V].set(e,!!this.querySelector(e))})),t&&this.updateComplete.then((()=>{this.requestUpdate()}))},new D(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(1===o.length)return this[V].get(o[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[V].has(t))return this[V].get(t)||!1;throw new Error(`The provided selector \`${t}\` is not being observed.`)}}}const G=t.iv`
:host{box-sizing:border-box;cursor:pointer;height:var(--spectrum-tabs-quiet-textonly-tabitem-height);line-height:var(--spectrum-tabs-quiet-textonly-tabitem-height);outline:none;position:relative;text-decoration:none;transition:color var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) ease-out;white-space:nowrap;z-index:1}:host([disabled]){cursor:default}:host([disabled]) #item-label{cursor:default}::slotted([slot=icon]){height:var(
--spectrum-tabs-quiet-textonly-tabitem-height
)}:host([dir=ltr]) slot[name=icon]+#item-label{margin-left:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#item-label{margin-right:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host:before{border:var(--spectrum-tabs-textonly-tabitem-focus-ring-size) solid transparent;border-radius:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-radius
);box-sizing:border-box;content:"";height:var(--spectrum-tabs-textonly-tabitem-focus-ring-height);margin-top:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-height)/-2);pointer-events:none;position:absolute;top:50%}#item-label{cursor:pointer;display:inline-block;font-size:var(--spectrum-tabs-texticon-tabitem-text-size);font-weight:var(--spectrum-tabs-textonly-tabitem-text-font-weight);text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host{color:var(
--spectrum-tabs-textonly-tabitem-text-color
)}::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color
)}:host(:hover){color:var(
--spectrum-tabs-textonly-tabitem-text-color-hover
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-hover
)}:host([selected]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected
)}:host(.focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(:focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host([disabled]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-disabled
)}:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-disabled
)}:host([disabled]){pointer-events:none}:host([vertical]){--sp-tab-vertial-margin-y:calc((var(
--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)
) - var(
--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)
))/2);align-items:center;display:flex;flex-direction:column;height:auto!important;justify-content:center}:host([vertical]):before{bottom:0;height:auto;left:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);margin-top:0!important;right:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);top:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0;height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);margin-top:var(--sp-tab-vertial-margin-y)}:host(:not([vertical])) ::slotted([slot=icon]){height:100%}:host([dir][vertical]) slot[name=icon]+#item-label{font-size:var(
--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){color:inherit;position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]):before{background-color:Highlight;color:HighlightText}:host([selected]) #item-label{color:HighlightText}}
`;var W=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Y(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&W(e,r,s),s};const X=class extends(q(N(K(u.o,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[G]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}handleContentChange(){this.dispatchEvent(new Event("sp-tab-contentchange",{bubbles:!0,composed:!0}))}render(){return t.dy`
            ${this.hasIcon?t.dy`
                      <slot name="icon"></slot>
                  `:t.dy``}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?t.dy``:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+X.instanceCount++),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(t){super.updated(t),t.has("label")&&void 0!==t.get("label")&&this.handleContentChange(),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}};let J=X;J.instanceCount=0,Z([(0,d.Cb)({type:Boolean,reflect:!0})],J.prototype,"disabled",2),Z([(0,d.Cb)({reflect:!0})],J.prototype,"label",2),Z([(0,d.Cb)({type:Boolean,reflect:!0})],J.prototype,"selected",2),Z([(0,d.Cb)({type:Boolean,reflect:!0})],J.prototype,"vertical",2),Z([(0,d.Cb)({type:String,reflect:!0})],J.prototype,"value",2),customElements.define("sp-tab",J);const Q=t.iv`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,rt=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?et(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&tt(e,r,s),s};const ot=class extends u.o{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+ot.instanceCount++)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}};let at=ot;at.styles=[Q],at.instanceCount=0,rt([(0,d.Cb)({type:Boolean,reflect:!0})],at.prototype,"selected",2),rt([(0,d.Cb)({type:String,reflect:!0})],at.prototype,"value",2),customElements.define("sp-tab-panel",at);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,ct=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?it(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&st(e,r,s),s};function lt(e){class r extends e{renderAnchor({id:e,className:r,ariaHidden:o,labelledby:a,tabindex:s,anchorContent:i=t.dy`<slot></slot>`}){return t.dy`<a
                    id=${e}
                    class=${(0,z.o)(r)}
                    href=${(0,z.o)(this.href)}
                    download=${(0,z.o)(this.download)}
                    target=${(0,z.o)(this.target)}
                    aria-label=${(0,z.o)(this.label)}
                    aria-labelledby=${(0,z.o)(a)}
                    aria-hidden=${(0,z.o)(o?"true":void 0)}
                    tabindex=${(0,z.o)(s)}
                    rel=${(0,z.o)(this.rel)}
                >${i}</a>`}}return ct([(0,d.Cb)({reflect:!0})],r.prototype,"download",2),ct([(0,d.Cb)()],r.prototype,"label",2),ct([(0,d.Cb)({reflect:!0})],r.prototype,"href",2),ct([(0,d.Cb)({reflect:!0})],r.prototype,"target",2),ct([(0,d.Cb)({reflect:!0})],r.prototype,"rel",2),r}var nt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,dt=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?ut(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&nt(e,r,s),s};class mt extends(lt(N(K($,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const e=[t.dy`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&e.unshift(t.dy`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),e}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return t.dy`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return t.dy`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;"Space"===e&&(t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0))}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;"Space"===e&&(this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click())}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?("button"===this.getAttribute("role")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||"link"===this.getAttribute("role"))&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}dt([(0,d.Cb)({type:Boolean,reflect:!0})],mt.prototype,"active",2),dt([(0,d.Cb)({type:String})],mt.prototype,"type",2),dt([(0,d.IO)(".anchor")],mt.prototype,"anchorElement",2);const pt=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(--spectrum-font-family-base);justify-content:center;line-height:var(--spectrum-line-height-small);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-animation-duration-100) ease-out,border-color var(--spectrum-animation-duration-100) ease-out,color var(--spectrum-animation-duration-100) ease-out,box-shadow var(--spectrum-animation-duration-100) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){max-block-size:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host{--spectrum-actionbutton-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-actionbutton-border-radius:var(--spectrum-corner-radius-100);--spectrum-actionbutton-border-width:var(--spectrum-border-width-100);--spectrum-actionbutton-focus-ring-gap:var(--spectrum-focus-ring-gap);--spectrum-actionbutton-focus-ring-thickness:var(
--spectrum-focus-ring-thickness
);--spectrum-actionbutton-focus-ring-color:var(--spectrum-focus-ring-color);--spectrum-actionbutton-focus-ring-border-radius:calc(var(--spectrum-actionbutton-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))}.spectrum-ActionButton--sizeXS{--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-50);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-actionbutton-font-size:var(--spectrum-font-size-50);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-50);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-50) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-50) - var(--spectrum-actionbutton-border-width))}:host([size=s]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-75)*2 + var(--spectrum-workflow-icon-size-75));--spectrum-actionbutton-height:var(--spectrum-component-height-75);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-actionbutton-font-size:var(--spectrum-font-size-75);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-small
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-75) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-75) - var(--spectrum-actionbutton-border-width))}:host([size=m]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-100)*2 + var(--spectrum-workflow-icon-size-100));--spectrum-actionbutton-height:var(--spectrum-component-height-100);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-actionbutton-font-size:var(--spectrum-font-size-100);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-medium
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-100) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-100) - var(--spectrum-actionbutton-border-width))}:host([size=l]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-200)*2 + var(--spectrum-workflow-icon-size-200));--spectrum-actionbutton-height:var(--spectrum-component-height-200);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-actionbutton-font-size:var(--spectrum-font-size-200);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-200) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-200) - var(--spectrum-actionbutton-border-width))}:host([size=xl]){--spectrum-actionbutton-min-width:calc(var(--spectrum-component-edge-to-visual-only-300)*2 + var(--spectrum-workflow-icon-size-300));--spectrum-actionbutton-height:var(--spectrum-component-height-300);--spectrum-actionbutton-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-actionbutton-font-size:var(--spectrum-font-size-300);--spectrum-actionbutton-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-actionbutton-edge-to-hold-icon:var(
--spectrum-action-button-edge-to-hold-icon-extra-large
);--spectrum-actionbutton-edge-to-visual:calc(var(--spectrum-component-edge-to-visual-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-text:calc(var(--spectrum-component-edge-to-text-300) - var(--spectrum-actionbutton-border-width));--spectrum-actionbutton-edge-to-visual-only:calc(var(--spectrum-component-edge-to-visual-only-300) - var(--spectrum-actionbutton-border-width))}@media (forced-colors:active){:host{--highcontrast-actionbutton-focus-ring-color:ButtonText}:host:after{forced-color-adjust:none}:host([selected]){--highcontrast-actionbutton-background-color-default:Highlight;--highcontrast-actionbutton-background-color-hover:Highlight;--highcontrast-actionbutton-background-color-focus:Highlight;--highcontrast-actionbutton-background-color-down:Highlight;--highcontrast-actionbutton-background-color-disabled:ButtonFace;--highcontrast-actionbutton-border-color-default:HighlightText;--highcontrast-actionbutton-border-color-hover:HighlightText;--highcontrast-actionbutton-border-color-focus:HighlightText;--highcontrast-actionbutton-border-color-down:HighlightText;--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-default:HighlightText;--highcontrast-actionbutton-content-color-hover:HighlightText;--highcontrast-actionbutton-content-color-focus:HighlightText;--highcontrast-actionbutton-content-color-down:HighlightText;--highcontrast-actionbutton-content-color-disabled:GrayText}:host([selected]) #label,:host([selected]) .hold-affordance,:host([selected]) ::slotted([slot=icon]){forced-color-adjust:none}}:host{background-color:var(
--highcontrast-actionbutton-background-color-default,var(
--mod-actionbutton-background-color-default,var(--spectrum-actionbutton-background-color-default)
)
);border-color:var(
--highcontrast-actionbutton-border-color-default,var(
--mod-actionbutton-border-color-default,var(--spectrum-actionbutton-border-color-default)
)
);border-radius:var(
--mod-actionbutton-border-radius,var(--spectrum-actionbutton-border-radius)
);border-width:var(
--mod-actionbutton-border-width,var(--spectrum-actionbutton-border-width)
);color:var(
--highcontrast-actionbutton-content-color-default,var(
--mod-actionbutton-content-color-default,var(--spectrum-actionbutton-content-color-default)
)
);height:var(--mod-actionbutton-height,var(--spectrum-actionbutton-height));min-inline-size:var(
--mod-actionbutton-min-width,var(--spectrum-actionbutton-min-width)
);padding-inline-end:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);padding-inline-start:var(
--mod-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)
);position:relative}:host(:hover){background-color:var(
--highcontrast-actionbutton-background-color-hover,var(
--mod-actionbutton-background-color-hover,var(--spectrum-actionbutton-background-color-hover)
)
);border-color:var(
--highcontrast-actionbutton-border-color-hover,var(
--mod-actionbutton-border-color-hover,var(--spectrum-actionbutton-border-color-hover)
)
);color:var(
--highcontrast-actionbutton-content-color-hover,var(
--mod-actionbutton-content-color-hover,var(--spectrum-actionbutton-content-color-hover)
)
)}:host(.focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host(:focus-visible){background-color:var(
--highcontrast-actionbutton-background-color-focus,var(
--mod-actionbutton-background-color-focus,var(--spectrum-actionbutton-background-color-focus)
)
);border-color:var(
--highcontrast-actionbutton-border-color-focus,var(
--mod-actionbutton-border-color-focus,var(--spectrum-actionbutton-border-color-focus)
)
);color:var(
--highcontrast-actionbutton-content-color-focus,var(
--mod-actionbutton-content-color-focus,var(--spectrum-actionbutton-content-color-focus)
)
)}:host([active]){background-color:var(
--highcontrast-actionbutton-background-color-down,var(
--mod-actionbutton-background-color-down,var(--spectrum-actionbutton-background-color-down)
)
);border-color:var(
--highcontrast-actionbutton-border-color-down,var(
--mod-actionbutton-border-color-down,var(--spectrum-actionbutton-border-color-down)
)
);color:var(
--highcontrast-actionbutton-content-color-down,var(
--mod-actionbutton-content-color-down,var(--spectrum-actionbutton-content-color-down)
)
)}:host([disabled]),:host([disabled]){background-color:var(
--highcontrast-actionbutton-background-color-disabled,var(
--mod-actionbutton-background-color-disabled,var(--spectrum-actionbutton-background-color-disabled)
)
);border-color:var(
--highcontrast-actionbutton-border-color-disabled,var(
--mod-actionbutton-border-color-disabled,var(--spectrum-actionbutton-border-color-disabled)
)
);color:var(
--highcontrast-actionbutton-content-color-disabled,var(
--mod-actionbutton-content-color-disabled,var(--spectrum-actionbutton-content-color-disabled)
)
)}::slotted([slot=icon]){color:inherit;height:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
);margin-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
))*-1);padding-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual,
var(--spectrum-actionbutton-edge-to-visual)
))*-1);width:var(
--mod-actionbutton-icon-size,var(--spectrum-actionbutton-icon-size)
)}slot[name=icon]+#label{padding-inline-end:0;padding-inline-start:var(
--mod-actionbutton-text-to-visual,var(--spectrum-actionbutton-text-to-visual)
)}.hold-affordance+::slotted([slot=icon]),slot[icon-only]::slotted([slot=icon]){margin-inline-end:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1);margin-inline-start:calc((var(
--mod-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--mod-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1)}#label{color:inherit;font-size:var(
--mod-actionbutton-font-size,var(--spectrum-actionbutton-font-size)
);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[dir=rtl] .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{color:inherit;inset-block-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));inset-inline-end:calc(var(
--mod-actionbutton-edge-to-hold-icon,
var(--spectrum-actionbutton-edge-to-hold-icon)
) - var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
));position:absolute}:host{transition:border-color var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host:after{border-radius:var(
--mod-actionbutton-focus-ring-border-radius,var(--spectrum-actionbutton-focus-ring-border-radius)
);content:"";inset:0;margin:calc((var(
--mod-actionbutton-focus-ring-gap,
var(--spectrum-actionbutton-focus-ring-gap)
) + var(
--mod-actionbutton-border-width,
var(--spectrum-actionbutton-border-width)
))*-1);pointer-events:none;position:absolute;transition:box-shadow var(
--mod-actionbutton-animation-duration,var(--spectrum-actionbutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-ring-thickness,var(--spectrum-actionbutton-focus-ring-thickness)
) var(
--highcontrast-actionbutton-focus-ring-color,var(
--mod-actionbutton-focus-ring-color,var(--spectrum-actionbutton-focus-ring-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-actionbutton-focus-ring-thickness,var(--spectrum-actionbutton-focus-ring-thickness)
) var(
--highcontrast-actionbutton-focus-ring-color,var(
--mod-actionbutton-focus-ring-color,var(--spectrum-actionbutton-focus-ring-color)
)
)}:host{--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-content-color-disabled
)}:host([quiet]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-quiet-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-quiet-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-quiet-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-quiet-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-quiet-border-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-quiet-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-quiet-border-color-disabled
)}:host([selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-selected-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-selected-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-selected-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-selected-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-selected-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-selected-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-selected-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-selected-content-color-focus
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-selected-border-color-disabled
)}:host([selected][emphasized]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-selected-emphasized-background-color-focus
)}:host([variant=black][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled
)}:host([variant=white][quiet]){--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled
)}:host([variant=black]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticblack-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticblack-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticblack-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticblack-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticblack-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticblack-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticblack-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticblack-content-color-focus
);--spectrum-actionbutton-focus-ring-color:var(
--system-spectrum-actionbutton-staticblack-focus-ring-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticblack-content-color-disabled
)}:host([variant=black][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-focus
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-border-color-disabled
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticblack-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticblack-selected-background-color-disabled
)}:host([variant=white]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-background-color-focus
);--spectrum-actionbutton-border-color-default:var(
--system-spectrum-actionbutton-staticwhite-border-color-default
);--spectrum-actionbutton-border-color-hover:var(
--system-spectrum-actionbutton-staticwhite-border-color-hover
);--spectrum-actionbutton-border-color-down:var(
--system-spectrum-actionbutton-staticwhite-border-color-down
);--spectrum-actionbutton-border-color-focus:var(
--system-spectrum-actionbutton-staticwhite-border-color-focus
);--spectrum-actionbutton-content-color-default:var(
--system-spectrum-actionbutton-staticwhite-content-color-default
);--spectrum-actionbutton-content-color-hover:var(
--system-spectrum-actionbutton-staticwhite-content-color-hover
);--spectrum-actionbutton-content-color-down:var(
--system-spectrum-actionbutton-staticwhite-content-color-down
);--spectrum-actionbutton-content-color-focus:var(
--system-spectrum-actionbutton-staticwhite-content-color-focus
);--spectrum-actionbutton-focus-ring-color:var(
--system-spectrum-actionbutton-staticwhite-focus-ring-color
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-border-color-disabled
);--spectrum-actionbutton-content-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-content-color-disabled
)}:host([variant=white][selected]){--spectrum-actionbutton-background-color-default:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-default
);--spectrum-actionbutton-background-color-hover:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-hover
);--spectrum-actionbutton-background-color-down:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-down
);--spectrum-actionbutton-background-color-focus:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-focus
);--spectrum-actionbutton-content-color-default:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-default
)
);--spectrum-actionbutton-content-color-hover:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-hover
)
);--spectrum-actionbutton-content-color-down:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-down
)
);--spectrum-actionbutton-content-color-focus:var(
--mod-actionbutton-static-content-color,var(
--system-spectrum-actionbutton-staticwhite-selected-content-color-focus
)
);--spectrum-actionbutton-background-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled
);--spectrum-actionbutton-border-color-disabled:var(
--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled
)}:host{display:inline-flex;flex-direction:row}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}@media (forced-colors:active){:host{--highcontrast-actionbutton-border-color-disabled:GrayText;--highcontrast-actionbutton-content-color-disabled:GrayText}}
`,bt=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;let ht;const gt=function(t,...e){return ht?ht(t,...e):e.reduce(((e,r,o)=>e+r+t[o+1]),t[0])},vt=t=>{ht=t};customElements.define("sp-icon-corner-triangle300",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`}});var ft=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,yt=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?xt(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&ft(e,r,s),s};const kt={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let wt;class zt extends(w(mt)){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{this.toggles&&(this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected))},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[pt,bt]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(t){0===t.button&&(this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),wt=setTimeout((()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))}),300))}onPointerup(){clearTimeout(wt),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:r}=t;("Space"===e||r&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:r}=t;("Space"===e||r&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const e=super.buttonContent;return this.holdAffordance&&e.unshift(t.dy`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${kt[this.size]}"
                ></sp-icon-corner-triangle300>
            `),e}updated(t){super.updated(t);const e="button"===this.role&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(e?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}yt([(0,d.Cb)({type:Boolean,reflect:!0})],zt.prototype,"emphasized",2),yt([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],zt.prototype,"holdAffordance",2),yt([(0,d.Cb)({type:Boolean,reflect:!0})],zt.prototype,"quiet",2),yt([(0,d.Cb)({reflect:!0})],zt.prototype,"role",2),yt([(0,d.Cb)({type:Boolean,reflect:!0})],zt.prototype,"selected",2),yt([(0,d.Cb)({type:Boolean,reflect:!0})],zt.prototype,"toggles",2),yt([(0,d.Cb)({reflect:!0})],zt.prototype,"variant",2),yt([(0,d.Cb)({type:String})],zt.prototype,"value",1),customElements.define("sp-action-button",zt);const Ct=t.iv`
:host{--spectrum-buttongroup-button-gap-reset:0}:host{display:flex}::slotted(*){flex-shrink:0}:host([dir=ltr]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([dir=rtl]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-of-type)){margin-top:var(
--spectrum-buttongroup-button-gap-y,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;var It=Object.defineProperty;Object.getOwnPropertyDescriptor;class qt extends u.o{constructor(){super(...arguments),this.vertical=!1}static get styles(){return[Ct]}render(){return t.dy`
            <slot></slot>
        `}}((t,e,r,o)=>{for(var a,s=void 0,i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&It(e,r,s)})([(0,d.Cb)({type:Boolean,reflect:!0})],qt.prototype,"vertical"),customElements.define("sp-button-group",qt);const Et=t.iv`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentcolor;stroke:currentcolor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;class St extends mt{static get styles(){return[Et]}}const At=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(
--spectrum-button-m-primary-fill-texticon-border-radius,
var(--spectrum-global-dimension-size-200)
) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-s-primary-fill-textonly-text-padding-bottom
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-s-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-s-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-s-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-s-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-s-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-s-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-s-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-s-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-s-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-s-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-675)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-s-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-s-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-s-primary-fill-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:calc(var(
--spectrum-button-s-primary-fill-textonly-text-padding-top,
var(--spectrum-global-dimension-static-size-50)
) - 1px)}:host([size=m]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-m-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-m-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-m-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-m-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-m-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-m-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-m-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-m-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-m-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-m-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-m-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-m-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-m-primary-fill-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-m-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-115)
) - 1px)}:host([size=l]){--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-l-primary-fill-textonly-text-padding-top
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-l-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-l-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-l-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-l-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-l-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-l-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-l-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-l-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-l-primary-fill-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-l-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-l-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1125)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-l-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-l-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-l-primary-fill-textonly-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-xl-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-xl-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-xl-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-xl-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-xl-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-xl-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-xl-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-xl-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-xl-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-xl-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-xl-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-xl-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-xl-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-xl-primary-fill-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-xl-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-175)
) - 1px)}:host{--spectrum-button-primary-fill-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-texticon-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-right) - var(--spectrum-button-primary-fill-texticon-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
)}:host([dir=rtl]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
)}:host{--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);border-radius:var(--spectrum-button-primary-fill-texticon-border-radius);border-style:solid;border-width:var(
--spectrum-button-primary-fill-texticon-border-size
);color:inherit;font-size:var(--spectrum-button-primary-fill-texticon-text-size);font-weight:var(--spectrum-button-primary-fill-texticon-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-fill-textonly-height);min-width:var(--spectrum-button-primary-fill-textonly-min-width);padding-bottom:0;padding-top:0}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}:host:after{border-radius:calc(var(--spectrum-button-primary-fill-texticon-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
))}#label{line-height:var(
--spectrum-button-primary-fill-texticon-text-line-height
);padding-bottom:calc(var(--spectrum-button-primary-fill-textonly-text-padding-bottom) - var(--spectrum-button-primary-fill-textonly-border-size));padding-top:calc(var(--spectrum-button-primary-fill-textonly-text-padding-top) - var(--spectrum-button-primary-fill-textonly-border-size))}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host([variant=white]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-white-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=black]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-black-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-black)
)}:host(:not([variant=white]):not([variant=black])[disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color-disabled,var(--spectrum-global-color-gray-500)
)}:host(:not([variant=white]):not([variant=black])[disabled]) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=white][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-white-texticon-background-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=black][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-black-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-black-texticon-background-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-black-texticon-border-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color,var(--spectrum-semantic-cta-background-color-default)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-hover,var(--spectrum-semantic-cta-background-color-hover)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-down,var(--spectrum-semantic-cta-background-color-down)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color,var(--spectrum-global-color-static-red-600)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-hover,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-down,var(--spectrum-global-color-static-red-800)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-400)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][disabled]){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color-disabled,transparent
)}:host([treatment=fill]:not([disabled])){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color,transparent
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-blue-background-color-hover)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-down,var(--spectrum-alias-transparent-blue-background-color-down)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-red-background-color-hover)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-down,var(--spectrum-alias-transparent-red-background-color-down)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color,var(--spectrum-global-color-gray-300)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-500)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
)}@media (forced-colors:active){:host{--spectrum-button-m-accent-fill-texticon-background-color-down:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-hover:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-key-focus:Highlight;--spectrum-button-m-accent-fill-texticon-background-color:ButtonText;--spectrum-button-m-accent-fill-texticon-icon-color:ButtonFace;--spectrum-button-m-accent-fill-texticon-text-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-accent-outline-texticon-border-color:ButtonText;--spectrum-button-m-accent-outline-texticon-border-color-down:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-accent-outline-texticon-icon-color:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-key-focus:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-fill-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-black-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-disabled:ButtonFace}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host([variant=accent]) #label{forced-color-adjust:none}}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}
`;var $t=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Tt=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?_t(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&$t(e,r,s),s};const Ut=["accent","primary","secondary","negative","white","black"];class Pt extends(w(St)){constructor(){super(...arguments),this._variant="accent",this.treatment="fill"}static get styles(){return[...super.styles,At]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":this._variant="white",this.treatment="outline";break;default:Ut.includes(t)?this._variant=t:this._variant="accent"}this.setAttribute("variant",this.variant)}}set quiet(t){this.treatment=t?"outline":"fill"}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant)}}Tt([(0,d.Cb)()],Pt.prototype,"variant",1),Tt([(0,d.Cb)({reflect:!0})],Pt.prototype,"treatment",2),Tt([(0,d.Cb)({type:Boolean})],Pt.prototype,"quiet",1),customElements.define("sp-button",Pt),customElements.define("sp-icon-asterisk100",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`}});const Lt=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(
--spectrum-alias-ui-icon-asterisk-size-200
)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-300
)}
`,Ot=t.iv`
:host([size=s]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-s-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-s-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-s-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=m]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-m-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-m-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-m-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=l]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-l-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-l-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-l-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-l-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host([size=xl]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-xl-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-xl-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-xl-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;display:block;font-size:var(--spectrum-fieldlabel-text-size);font-weight:var(--spectrum-fieldlabel-text-font-weight);line-height:var(--spectrum-fieldlabel-text-line-height);padding-bottom:var(--spectrum-fieldlabel-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-fieldlabel-padding-top);vertical-align:top}:host([dir=ltr]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}.required-icon{margin-bottom:0;margin-top:0}:host([dir=ltr][side-aligned=start]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=start]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=start]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=start]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl][side-aligned=start]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}:host([side-aligned=start]) .required-icon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-m-side-asterisk-margin-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=end]){text-align:right}:host([dir=rtl][side-aligned=end]){text-align:left}:host([dir=ltr][side-aligned=end]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=end]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=end]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([disabled]){color:var(
--spectrum-fieldlabel-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) .required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color,var(--spectrum-global-color-gray-600)
)}:host([side-aligned=start]) .required-icon{margin-top:0}
`;var Ft=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Dt=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Bt(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Ft(e,r,s),s};const jt=class extends(w(u.o)){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1}static get styles(){return[Ot,Lt]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),r=this.target,o=r.getRootNode(),a=o.host;o===e&&r.forceFocusVisible?r.forceFocusVisible():a&&a.forceFocusVisible&&a.forceFocusVisible()}async manageFor(){if(!this.for)return;const t=this.getRootNode(),e=t.querySelector(`#${this.for}`);return e?(e.localName.search("-")>0&&await customElements.whenDefined(e.localName),void 0!==e.updateComplete&&await e.updateComplete,this.target=e.focusElement||e,this.target&&(this.target.getRootNode()===t?this.target.setAttribute("aria-labelledby",this.id):this.target.setAttribute("aria-label",this.labelText)),Promise.resolve()):void 0}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map((t=>(t.textContent||"").trim())).join(" "):""}render(){return t.dy`
            <label>
                <slot @slotchange=${this.manageFor}></slot>
                ${this.required?t.dy`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:t.dy``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}willUpdate(t){this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${jt.instanceCount++}`),(t.has("for")||t.has("id"))&&this.manageFor()}};let Mt=jt;Mt.instanceCount=0,Dt([(0,d.Cb)({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2),Dt([(0,d.Cb)({type:String})],Mt.prototype,"id",2),Dt([(0,d.Cb)({type:String})],Mt.prototype,"for",2),Dt([(0,d.Cb)({type:Boolean,reflect:!0})],Mt.prototype,"required",2),Dt([(0,d.IO)("slot")],Mt.prototype,"slotEl",2),Dt([(0,d.Cb)({type:String,reflect:!0,attribute:"side-aligned"})],Mt.prototype,"sideAligned",2),customElements.define("sp-field-label",Mt);var Ht=i(692);const Rt=t=>(...e)=>({_$litDirective$:t,values:e});class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Vt}=Ht.Al,Kt=t=>void 0===t.strings,Gt={},Wt=Rt(class extends Nt{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!Kt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Ht.Jb||e===Ht.Ld)return e;const r=t.element,o=t.name;if(3===t.type){if(e===r[o])return Ht.Jb}else if(4===t.type){if(!!e===r.hasAttribute(o))return Ht.Jb}else if(1===t.type&&r.getAttribute(o)===e+"")return Ht.Jb;return((t,e=Gt)=>{t._$AH=e})(t),e}}),Yt=class{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=Yt.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return"internal"===this.mode}render(e){return t.dy`
            <div id=${(0,z.o)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${e?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=function(t,e,r){const o=Array.isArray(r)?r:[r],a=t.getAttribute(e),s=a?a.split(/\s+/):[];return o.every((t=>s.indexOf(t)>-1))?()=>{}:(s.push(...o),t.setAttribute(e,s.join(" ")),()=>function(t,e,r){const o=t.getAttribute(e);let a=o?o.split(/\s+/):[];a=a.filter((t=>!r.find((e=>t===e)))),a.length?t.setAttribute(e,a.join(" ")):t.removeAttribute(e)}(t,e,o))}(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){"negative-help-text"===t.name&&t.assignedElements().forEach((t=>t.variant="negative"))}};let Zt=Yt;Zt.instanceCount=0,customElements.define("sp-icon-checkmark100",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`}}),customElements.define("sp-icon-alert",class extends g{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Alert"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const Xt=t.iv`
:host{--spectrum-textfield-texticon-padding-left:var(
--spectrum-textfield-m-texticon-padding-left
);--spectrum-textfield-quiet-texticon-border-bottom-size:var(
--spectrum-textfield-m-quiet-texticon-border-bottom-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-quiet-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-border-radius:var(
--spectrum-textfield-m-quiet-texticon-border-radius,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-left:var(
--spectrum-textfield-m-quiet-texticon-padding-left,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-right:var(
--spectrum-textfield-m-quiet-texticon-padding-right,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-texticon-border-size:var(
--spectrum-textfield-m-texticon-border-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-texticon-text-line-height:var(
--spectrum-textfield-m-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-texticon-text-size:var(
--spectrum-textfield-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-textfield-texticon-placeholder-text-font-style:var(
--spectrum-textfield-m-texticon-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-texticon-placeholder-text-font-weight:var(
--spectrum-textfield-m-texticon-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-texticon-success-icon-height:var(
--spectrum-textfield-m-texticon-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-width:var(
--spectrum-textfield-m-texticon-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-invalid-icon-height:var(
--spectrum-textfield-m-texticon-invalid-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-width:var(
--spectrum-textfield-m-texticon-invalid-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-min-width:var(
--spectrum-textfield-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-texticon-border-radius:var(
--spectrum-textfield-m-texticon-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-texticon-padding-right:var(
--spectrum-textfield-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-height:var(
--spectrum-textfield-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textfield-texticon-padding-top:3px;--spectrum-textfield-texticon-padding-bottom:5px;--spectrum-textfield-texticon-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-texticon-icon-gap:var(
--spectrum-global-dimension-size-65
);--spectrum-textfield-quiet-texticon-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
)}#textfield{display:inline-flex;min-width:var(--spectrum-textfield-texticon-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) #textfield .input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:after{border-color:transparent;border-radius:calc(var(--spectrum-textfield-texticon-border-radius) + var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([quiet]) #textfield:after{border-radius:0}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);height:var(--spectrum-textfield-texticon-height);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;padding:var(--spectrum-textfield-texticon-padding-top) var(--spectrum-textfield-texticon-padding-right) var(--spectrum-textfield-texticon-padding-bottom) calc(var(--spectrum-textfield-texticon-padding-left) + 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-texticon-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}:host([dir=ltr][valid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=rtl][valid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=ltr][invalid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([dir=rtl][invalid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([quiet]) .input{border-bottom-width:var(
--spectrum-textfield-quiet-texticon-border-bottom-size
);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-texticon-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([dir=rtl][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([invalid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-invalid-icon-height)/2);height:var(--spectrum-textfield-texticon-invalid-icon-height);width:var(
--spectrum-textfield-texticon-invalid-icon-width
)}:host([dir=ltr][quiet][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([dir=rtl][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([valid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-success-icon-height)/2);height:var(--spectrum-textfield-texticon-success-icon-height);width:var(
--spectrum-textfield-texticon-success-icon-width
)}:host([dir=ltr][quiet][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-texticon-padding-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-texticon-padding-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-texticon-height)/2 - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
)/2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
);box-shadow:none}#textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#textfield:hover .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#textfield:active .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}#textfield:active .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([valid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-valid,var(--spectrum-semantic-positive-icon-color)
)}:host([invalid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-hover,var(--spectrum-alias-input-border-color-invalid-hover)
)}:host([disabled]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid-disabled,var(--spectrum-alias-background-color-transparent)
)}:host([disabled]) #textfield .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}.icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host([focused]) #textfield:after{box-shadow:0 0 0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([focused][quiet]) #textfield .input{box-shadow:none}:host([focused][quiet]) #textfield:after{border-bottom:2px solid var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);bottom:calc(var(
--spectrum-alias-input-quiet-focusline-gap,
var(--spectrum-global-dimension-static-size-10)
)*-1);box-shadow:none;margin:0}.input{background-color:var(
--spectrum-textfield-m-texticon-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
);color:var(
--spectrum-textfield-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}.input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input:focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}.input :disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
);color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.input:read-only,:host([readonly]) #textfield .input,:host([readonly]) #textfield:hover .input{-webkit-text-fill-color:var(--spectrum-global-color-gray-800);background-color:var(
--spectrum-alias-background-color-transparent,transparent
);border-color:var(
--spectrum-alias-background-color-transparent,transparent
);color:var(--spectrum-global-color-gray-800)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid][quiet]) #textfield .input{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}@media (forced-colors:active){#textfield{--spectrum-textfield-m-quiet-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-quiet-texticon-border-color-down:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-hover:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-down:Highlight;--spectrum-textfield-m-texticon-border-color-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-placeholder-text-color:GrayText;--spectrum-textfield-m-texticon-placeholder-text-color-disabled:GrayText;--spectrum-textfield-m-texticon-placeholder-text-color-hover:GrayText;--spectrum-textfield-m-texticon-text-color-disabled:GrayText;--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-focus-ring-border-width:2px}:host([focused]) #textfield:after{forced-color-adjust:none}}:host{display:inline-flex;flex-direction:column;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{width:100%}#textfield,textarea{resize:inherit}.input{min-width:var(--spectrum-textfield-texticon-min-width)}:host([focused]) .input{caret-color:var(--swc-test-caret-color);forced-color-adjust:var(--swc-test-forced-color-adjust)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;width:100%;word-break:break-word}:host([grows][quiet]) #sizer{border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-width:0 0 var(--spectrum-textfield-quiet-texticon-border-size) 0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline][focused]:not([quiet])) textarea,:host([multiline][focused]:not([quiet]):hover) textarea{box-shadow:0 0 0 calc(var(
--spectrum-textfield-m-texticon-focus-ring-border-width,
var(--spectrum-alias-component-focusring-size)
)) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)!important}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}
`,Jt=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;var Qt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ee=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?te(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Qt(e,r,s),s};const re=["text","url","tel","email","password"];class oe extends(function(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new Zt(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}($)){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[Xt,Jt]}get type(){var t;return null!=(t=re.find((t=>t===this._type)))?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,r="none"){this.inputElement.setSelectionRange(t,e,r)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}renderStateIcons(){return this.invalid?t.dy`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?t.dy`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:t.Ld}get displayValue(){return this.value.toString()}get renderMultiline(){return t.dy`
            ${this.grows&&!this.quiet?t.dy`
                      <div id="sizer">${this.value}&#8203;</div>
                  `:t.Ld}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,z.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,z.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,z.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,z.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,z.o)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return t.dy`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${(0,z.o)(this.invalid||void 0)}
                class="input"
                maxlength=${(0,z.o)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${(0,z.o)(this.minlength>-1?this.minlength:void 0)}
                pattern=${(0,z.o)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${Wt(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${(0,z.o)(this.autocomplete)}
            />
        `}renderField(){return t.dy`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return t.dy`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}update(t){(t.has("value")||t.has("required")&&this.required)&&this.updateComplete.then((()=>{this.checkValidity()})),super.update(t)}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),void 0!==this.minlength&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t),t}}ee([(0,d.Cb)({attribute:"allowed-keys"})],oe.prototype,"allowedKeys",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"focused",2),ee([(0,d.IO)(".input")],oe.prototype,"inputElement",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"invalid",2),ee([(0,d.Cb)()],oe.prototype,"label",2),ee([(0,d.Cb)()],oe.prototype,"placeholder",2),ee([(0,d.Cb)({attribute:"type",reflect:!0})],oe.prototype,"_type",2),ee([(0,d.SB)()],oe.prototype,"type",1),ee([(0,d.Cb)()],oe.prototype,"pattern",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"grows",2),ee([(0,d.Cb)({type:Number})],oe.prototype,"maxlength",2),ee([(0,d.Cb)({type:Number})],oe.prototype,"minlength",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"multiline",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"readonly",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"valid",2),ee([(0,d.Cb)({type:String})],oe.prototype,"value",1),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"quiet",2),ee([(0,d.Cb)({type:Boolean,reflect:!0})],oe.prototype,"required",2),ee([(0,d.Cb)({type:String,reflect:!0})],oe.prototype,"autocomplete",2);class ae extends oe{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}ee([(0,d.Cb)({type:String})],ae.prototype,"value",1),customElements.define("sp-textfield",ae);const se=(t,e)=>{var r,o;const a=t._$AN;if(void 0===a)return!1;for(const t of a)null===(o=(r=t)._$AO)||void 0===o||o.call(r,e,!1),se(t,e);return!0},ie=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===(null==r?void 0:r.size))},ce=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ue(e)}};function le(t){void 0!==this._$AN?(ie(this),this._$AM=t,ce(this)):this._$AM=t}function ne(t,e=!1,r=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(o))for(let t=r;t<o.length;t++)se(o[t],!1),ie(o[t]);else null!=o&&(se(o,!1),ie(o));else se(this,t)}const ue=t=>{var e,r,o,a;2==t.type&&(null!==(e=(o=t)._$AP)&&void 0!==e||(o._$AP=ne),null!==(r=(a=t)._$AQ)&&void 0!==r||(a._$AQ=le))};class de extends Nt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ce(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?null===(r=this.reconnected)||void 0===r||r.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),e&&(se(this,t),ie(this))}setValue(t){if(Kt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const me=["",()=>{}],pe=Rt(class extends de{constructor(){super(...arguments),this.start=me,this.streamInside=me,this.end=me,this.streamOutside=me,this.state="off",this.handleStart=t=>{this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleStream=t=>{this.callHandler(this.streamInside[1],t)},this.handleEnd=t=>{this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleBetween=t=>{this.callHandler(this.streamOutside[1],t)}}render(e){return t.Ld}update(t,[{start:e,end:r,streamInside:o=me,streamOutside:a=me}]){var s;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=(null==(s=t.options)?void 0:s.host)||this.element,this.start=e,this.end=r,this.streamInside=o,this.streamOutside=a,this.addListeners()}addListeners(t){this.state=t||this.state,"off"===this.state?(this.addListener(this.streamOutside[0],this.handleBetween),this.addListener(this.start[0],this.handleStart)):"on"===this.state&&(this.addListener(this.streamInside[0],this.handleStream),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){"function"==typeof t?t.call(this.host,e):t.handleEvent(e)}addListener(t,e){Array.isArray(t)?t.map((t=>{this.element.addEventListener(t,e)})):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map((t=>{this.element.removeEventListener(t,e)})):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleStream),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleBetween)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}});let be=new Map,he=!1;try{he="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(t){}let ge=!1;try{ge="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(t){}const ve={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class fe{format(t){let e="";if(e=he||null==this.options.signDisplay?this.numberFormatter.format(t):function(t,e,r){if("auto"===e)return t.format(r);if("never"===e)return t.format(Math.abs(r));{let o=!1;if("always"===e?o=r>0||Object.is(r,0):"exceptZero"===e&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):o=r>0),o){let e=t.format(-r),o=t.format(r),a=e.replace(o,"").replace(/\u200e|\u061C/,"");return 1!==[...a].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),e.replace(o,"!!!").replace(a,"+").replace("!!!",o)}return t.format(r)}}(this.numberFormatter,this.options.signDisplay,t),"unit"===this.options.style&&!ge){var r;let{unit:t,unitDisplay:o="short",locale:a}=this.resolvedOptions(),s=null===(r=ve[t])||void 0===r?void 0:r[o];e+=s[a]||s.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(t,e);if(e<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(e)}`}formatRangeToParts(t,e){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw new RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(t),o=this.numberFormatter.formatToParts(e);return[...r.map((t=>({...t,source:"startRange"}))),{type:"literal",value:" – ",source:"shared"},...o.map((t=>({...t,source:"endRange"})))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return he||null==this.options.signDisplay||(t={...t,signDisplay:this.options.signDisplay}),ge||"unit"!==this.options.style||(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=function(t,e={}){let{numberingSystem:r}=e;if(r&&-1===t.indexOf("-u-nu-")&&(t=`${t}-u-nu-${r}`),"unit"===e.style&&!ge){var o;let{unit:t,unitDisplay:r="short"}=e;if(!t)throw new Error('unit option must be provided with style: "unit"');if(!(null===(o=ve[t])||void 0===o?void 0:o[r]))throw new Error(`Unsupported unit ${t} with unitDisplay = ${r}`);e={...e,style:"decimal"}}let a=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():"");if(be.has(a))return be.get(a);let s=new Intl.NumberFormat(t,e);return be.set(a,s),s}(t,e),this.options=e}}const xe=new RegExp("^.*\\(.*\\).*$"),ye=["latn","arab","hanidec"];class ke{parse(t){return ze(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,e,r){return ze(this.locale,this.options,t).isValidPartialNumber(t,e,r)}getNumberingSystem(t){return ze(this.locale,this.options,t).options.numberingSystem}constructor(t,e={}){this.locale=t,this.options=e}}const we=new Map;function ze(t,e,r){let o=Ce(t,e);if(!t.includes("-nu-")&&!o.isValidPartialNumber(r))for(let a of ye)if(a!==o.options.numberingSystem){let o=Ce(t+(t.includes("-u-")?"-nu-":"-u-nu-")+a,e);if(o.isValidPartialNumber(r))return o}return o}function Ce(t,e){let r=t+(e?Object.entries(e).sort(((t,e)=>t[0]<e[0]?-1:1)).join():""),o=we.get(r);return o||(o=new Ie(t,e),we.set(r,o)),o}class Ie{parse(t){let e=this.sanitize(t);e=Ee(e,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let r=e?+e:NaN;return isNaN(r)?NaN:("accounting"===this.options.currencySign&&xe.test(t)&&(r*=-1),"percent"===this.options.style&&(r/=100,r=+r.toFixed((null!==(o=this.options.maximumFractionDigits)&&void 0!==o?o:0)+2)),r);var o}sanitize(t){return t=(t=t.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(t=Ee(t=(t=t.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(t=Ee(t,".",String.fromCharCode(8239))),t}isValidPartialNumber(t,e=-1/0,r=1/0){return(t=this.sanitize(t)).startsWith(this.symbols.minusSign)&&e<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&r>0&&(t=t.slice(this.symbols.plusSign.length)),!t.startsWith(this.symbols.group)&&0===(t=Ee(t,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}constructor(t,e={}){this.formatter=new Intl.NumberFormat(t,e),this.options=this.formatter.resolvedOptions(),this.symbols=function(t,e,r){var o,a,s,i;let c=t.formatToParts(-10000.111),l=t.formatToParts(10000.111),n=t.formatToParts(1);var u;let d=null!==(u=null===(o=c.find((t=>"minusSign"===t.type)))||void 0===o?void 0:o.value)&&void 0!==u?u:"-",m=null===(a=l.find((t=>"plusSign"===t.type)))||void 0===a?void 0:a.value;m||"exceptZero"!==(null==r?void 0:r.signDisplay)&&"always"!==(null==r?void 0:r.signDisplay)||(m="+");let p=null===(s=c.find((t=>"decimal"===t.type)))||void 0===s?void 0:s.value,b=null===(i=c.find((t=>"group"===t.type)))||void 0===i?void 0:i.value,h=c.filter((t=>!qe.has(t.type))).map((t=>Se(t.value))),g=n.filter((t=>!qe.has(t.type))).map((t=>Se(t.value))),v=[...new Set([...g,...h])].sort(((t,e)=>e.length-t.length)),f=0===v.length?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${v.join("|")}|[\\p{White_Space}]`,"gu"),x=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),y=new Map(x.map(((t,e)=>[t,e])));return{minusSign:d,plusSign:m,decimal:p,group:b,literals:f,numeral:new RegExp(`[${x.join("")}]`,"g"),index:t=>String(y.get(t))}}(this.formatter,this.options,e)}}const qe=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function Ee(t,e,r){return t.replaceAll?t.replaceAll(e,r):t.split(e).join(r)}function Se(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}function Ae(){return function(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}(/^iPhone/)}customElements.define("sp-icon-chevron75",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`}});const $e=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`,_e=t.iv`
:host{--spectrum-stepper-width:var(
--spectrum-global-dimension-size-900
);--spectrum-stepper-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-stepper-button-height:calc(var(
--spectrum-alias-single-line-height,
var(--spectrum-global-dimension-size-400)
)/2);--spectrum-stepper-button-width:calc(var(--spectrum-global-dimension-size-300) - var(--spectrum-stepper-border-size));--spectrum-stepper-button-padding:calc(var(--spectrum-global-dimension-size-150)/2);--spectrum-stepper-border-radius-reset:0;--spectrum-stepper-border-size-reset:0;--spectrum-stepper-icon-nudge-top:var(--spectrum-global-dimension-size-10);--spectrum-stepper-icon-nudge:var(--spectrum-global-dimension-size-25);--spectrum-stepper-quiet-width:var(--spectrum-global-dimension-size-600);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2 - var(--spectrum-alias-ui-icon-chevron-size-75)/2);--spectrum-stepper-quiet-button-width:calc(var(--spectrum-stepper-button-width) - var(--spectrum-stepper-button-offset))}#textfield{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
);display:inline-flex;flex-direction:row;flex-wrap:nowrap;line-height:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-stepper-width)}#textfield:before{content:""}:host([dir=ltr]) .buttons{border-top-left-radius:0}:host([dir=rtl]) .buttons{border-top-right-radius:0}:host([dir=ltr]) .buttons{border-top-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-top-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-bottom-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-left-radius:0}:host([dir=rtl]) .buttons{border-bottom-right-radius:0}.buttons{display:block;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown,.stepUp{border-width:var(--spectrum-stepper-border-size);box-sizing:border-box;display:flex;height:var(--spectrum-stepper-button-height);margin:0!important;min-width:0;position:relative;width:var(--spectrum-stepper-button-width)}.stepDown .stepper-icon,.stepUp .stepper-icon{margin:0!important;opacity:1}:host([dir=ltr]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepUp{border-bottom:none;padding-top:var(--spectrum-stepper-icon-nudge-top)}:host([dir=ltr]) .stepDown{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown{padding-bottom:var(
--spectrum-stepper-icon-nudge
)}.textfield{flex:1;width:auto}:host([dir=ltr]) .input{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .input{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.input,.textfield{min-width:0}:host([quiet]) #textfield{border-radius:var(
--spectrum-stepper-border-radius-reset
);width:var(--spectrum-stepper-quiet-width)}:host([quiet]) .buttons{border-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-left:none}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-right:none}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{padding-right:0}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{padding-left:0}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-radius:var(--spectrum-stepper-border-radius-reset);border-top:none;justify-content:flex-end;min-width:0;width:var(
--spectrum-stepper-quiet-button-width
)}:host([dir=ltr][quiet]) .stepDown:after,:host([dir=ltr][quiet]) .stepUp:after{right:calc(var(--spectrum-stepper-button-offset)*-1)}:host([dir=rtl][quiet]) .stepDown:after,:host([dir=rtl][quiet]) .stepUp:after{left:calc(var(--spectrum-stepper-button-offset)*-1)}:host([quiet]) .stepDown:after,:host([quiet]) .stepUp:after{content:"";height:100%;position:absolute;width:var(--spectrum-stepper-button-offset)}:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepDown,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
)}:host([focused]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .stepDown,:host([focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
);box-shadow:none}:host([focused][invalid]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .stepDown,:host([focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([keyboard-focused]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .input,:host([keyboard-focused]) #textfield .stepDown,:host([keyboard-focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused][invalid]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .stepDown,:host([keyboard-focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid]) #textfield .stepDown,:host([invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid][keyboard-focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid][keyboard-focused]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled]) #textfield .stepDown,:host([disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}.stepDown,.stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}.stepDown:disabled,.stepUp:disabled{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}:host([quiet][disabled]) #textfield .stepDown,:host([quiet][disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([quiet]) .stepDown:disabled,:host([quiet]) .stepUp:disabled{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .input{box-shadow:none}:host([quiet][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{box-shadow:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused]) #textfield .stepDown,:host([quiet][keyboard-focused]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused][invalid]) #textfield,:host([quiet][keyboard-focused][invalid]) #textfield{box-shadow:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .stepDown,:host([quiet][keyboard-focused][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}@media (forced-colors:active){#textfield{--spectrum-textfield-m-quiet-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-disabled:GrayText;--spectrum-textfield-m-texticon-border-color-hover:Highlight;--spectrum-textfield-m-texticon-border-color-invalid:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus:Highlight;--spectrum-textfield-m-texticon-border-color-key-focus:Highlight;--spectrum-textfield-m-texticon-border-color-mouse-focus:Highlight;--spectrum-textfield-m-texticon-focus-ring-border-width:2px}:host([keyboard-focused]) #textfield{outline:2px solid var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{--spectrum-textfield-m-texticon-border-color:ButtonText}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{outline:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);forced-color-adjust:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
);forced-color-adjust:none}}:host{width:var(--spectrum-stepper-width)}:host([quiet]){width:var(--spectrum-stepper-quiet-width)}#textfield,:host([quiet]) #textfield{width:100%}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}.buttons{--mod-actionbutton-background-color-disabled:var(
--spectrum-global-color-gray-200
)}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([hide-stepper]:not([quiet])) .input{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}:host([readonly]:not([disabled],[invalid],[focused],[keyboard-focused])) #textfield:hover .input{border-color:transparent}
`;var Te=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Pe=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Ue(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Te(e,r,s),s};const Le={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","、":",","，":",","。":".","．":".","％":"%","＋":"+",ー:"-"};class Oe extends oe{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.resolvedLanguage=document.documentElement.lang||navigator.language,this.managedInput=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.wasIndeterminate=!1}static get styles(){return[...super.styles,_e,$e]}set value(t){const e=this.validateInput(t);if(e===this.value)return;const r=this._value;this._value=e,this.requestUpdate("value",r)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){return this.numberParser.parse(t)}get _step(){var t;return void 0!==this.step?this.step:"percent"===(null==(t=this.formatOptions)?void 0:t.style)?.01:1}handlePointerdown(t){if(0!==t.button)return void t.preventDefault();this.managedInput=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),r=this.buttons.children[1].getBoundingClientRect();this.findChange=t=>{t.clientX>=e.x&&t.clientY>=e.y&&t.clientX<=e.x+e.width&&t.clientY<=e.y+e.height?this.change=t=>this.increment(t.shiftKey?this.stepModifier:1):t.clientX>=r.x&&t.clientY>=r.y&&t.clientX<=r.x+r.width&&t.clientY<=r.y+r.height&&(this.change=t=>this.decrement(t.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout((()=>{this.doNextChange(t)}),400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.managedInput=!1}doNextChange(t){return this.changeCount+=1,this.changeCount%5==0&&this.doChange(t),requestAnimationFrame((()=>{this.nextChange=this.doNextChange(t)}))}stepBy(t){if(this.disabled||this.readonly)return;const e=void 0!==this.min?this.min:0;let r=this.value;r+=t*this._step,isNaN(this.value)?this.value=e:this.value=r,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}}onScroll(t){t.preventDefault(),this.managedInput=!0;const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);0!==e&&!isNaN(e)&&this.stepBy(e*(t.shiftKey?this.stepModifier:1)),this.managedInput=!1}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!this.readonly&&!0,this.addEventListener("wheel",this.onScroll,{passive:!1})}onBlur(){super.onBlur(),this.keyboardFocused=!this.readonly&&!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!this.readonly&&!0,this.keyboardFocused=!this.readonly&&!0}handleFocusout(){this.focused=!this.readonly&&!1,this.keyboardFocused=!this.readonly&&!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))?this.indeterminate=!0:(this.value=t,super.handleChange())}handleInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace("-",""));const{value:t,selectionStart:e}=this.inputElement,r=t.split("").map((t=>Le[t]||t)).join("");if(this.numberParser.isValidPartialNumber(r)){const t=this.convertValueToNumber(r);return!r&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(t)),this._trackingValue=r,void(this.inputElement.value=r)}const o=r.length,a=(e||o)-(o-this._trackingValue.length);this.inputElement.value=this.indeterminate?"-":this._trackingValue,this.inputElement.setSelectionRange(a,a)}validateInput(t){if(void 0!==this.min&&(t=Math.max(this.min,t)),void 0!==this.max&&(t=Math.min(this.max,t)),this.step){const e=(t-(void 0!==this.min?this.min:0))%this.step;if(0===e||(1===Math.round(e/this.step)?t+=this.step-e:t-=e),void 0!==this.max)for(;t>this.max;)t-=this.step}return t}get displayValue(){const t=this.focused?"":"-";return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const{style:t,unit:e,unitDisplay:r,...o}=this.formatOptions;"unit"!==t&&(o.style=t),this._numberFormatterFocused=new fe(this.resolvedLanguage,o);try{this._numberFormatter=new fe(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch(r){"unit"===t&&(this._forcedUnit=e),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const{style:t,unit:e,unitDisplay:r,...o}=this.formatOptions;"unit"!==t&&(o.style=t),this._numberParserFocused=new ke(this.resolvedLanguage,o);try{this._numberParser=new ke(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch(r){"unit"===t&&(this._forcedUnit=e),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",t.dy`
            ${super.renderField()}
            ${this.hideStepper?t.dy``:t.dy`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${pe({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
                      >
                          <sp-action-button
                              class="stepUp"
                              label="Increment"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.max&&this.value===this.max}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronUp75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                          <sp-action-button
                              class="stepDown"
                              label="Decrement"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||void 0!==this.min&&this.value===this.min}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronDown75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                      </span>
                  `}
        `}update(t){if((t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),t.has("value")||t.has("max")||t.has("min")){const t=this.numberParser.parse(this.formattedValue.replace(this._forcedUnit,""));this.value=t}super.update(t)}willUpdate(){this.multiline=!1}firstUpdated(t){super.firstUpdated(t),this.addEventListener("keydown",this.handleKeydown)}updated(t){if(t.has("min")||t.has("formatOptions")){let t="numeric";const e=void 0!==this.min&&this.min<0,{maximumFractionDigits:r}=this.formatOptions,o=r&&r>0;Ae()?e?t="text":o&&(t="decimal"):function(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.userAgent)}(/Android/)&&(e?t="numeric":o&&(t="decimal")),this.inputElement.inputMode=t}}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:t=>{this.resolvedLanguage=t}},cancelable:!0});this.dispatchEvent(t)}}Pe([(0,d.IO)(".buttons")],Oe.prototype,"buttons",2),Pe([(0,d.Cb)({type:Boolean,reflect:!0})],Oe.prototype,"focused",2),Pe([(0,d.Cb)({type:Object,attribute:"format-options"})],Oe.prototype,"formatOptions",2),Pe([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"hide-stepper"})],Oe.prototype,"hideStepper",2),Pe([(0,d.Cb)({type:Boolean,reflect:!0})],Oe.prototype,"indeterminate",2),Pe([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],Oe.prototype,"keyboardFocused",2),Pe([(0,d.Cb)({type:Number})],Oe.prototype,"max",2),Pe([(0,d.Cb)({type:Number})],Oe.prototype,"min",2),Pe([(0,d.Cb)({attribute:!1})],Oe.prototype,"resolvedLanguage",2),Pe([(0,d.Cb)({type:Number})],Oe.prototype,"step",2),Pe([(0,d.Cb)({type:Number,reflect:!0,attribute:"step-modifier"})],Oe.prototype,"stepModifier",2),Pe([(0,d.Cb)({type:Number})],Oe.prototype,"value",1),customElements.define("sp-number-field",Oe);var Fe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,De=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Be(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Fe(e,r,s),s};class je extends ${constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const t=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return t.dy`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}De([(0,d.Cb)({type:Boolean,reflect:!0})],je.prototype,"checked",2),De([(0,d.Cb)({type:Boolean,reflect:!0})],je.prototype,"readonly",2),De([(0,d.IO)("#input")],je.prototype,"inputElement",2),customElements.define("sp-icon-checkmark75",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"
    />
  </svg>`}}),customElements.define("sp-icon-checkmark200",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"
    />
  </svg>`}}),customElements.define("sp-icon-checkmark300",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"
    />
  </svg>`}}),customElements.define("sp-icon-dash75",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z" />
  </svg>`}}),customElements.define("sp-icon-dash100",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </svg>`}}),customElements.define("sp-icon-dash200",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z" />
  </svg>`}}),customElements.define("sp-icon-dash300",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z" />
  </svg>`}});const Me=t.iv`
:host{align-items:flex-start;max-width:100%;min-height:var(--spectrum-checkbox-height);position:relative}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;width:100%;z-index:1}#input:disabled{cursor:default}#input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input.focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([size=s]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-s-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-s-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-s-box-size,var(--spectrum-alias-control-two-size-s)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-s-text-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-s-text-padding-top,var(--spectrum-global-dimension-static-size-50)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-s-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-s-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-75)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-s-height,var(--spectrum-global-dimension-size-300)
)}:host([size=m]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-m-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-m-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-m-box-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-m-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-m-height,var(--spectrum-global-dimension-size-400)
)}:host([size=l]){--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-l-text-padding-top
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-l-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-l-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-l-box-size,var(--spectrum-alias-control-two-size-l)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-l-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-l-text-gap,var(--spectrum-global-dimension-size-130)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-l-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-l-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-200)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-l-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-xl-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-xl-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-xl-box-size,var(--spectrum-alias-control-two-size-xl)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-xl-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-xl-text-gap,var(--spectrum-global-dimension-size-160)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-xl-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-xl-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-xl-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-300)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-xl-height,var(--spectrum-global-dimension-size-600)
)}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-checkbox-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-checkbox-text-gap
)}#label{font-size:var(--spectrum-checkbox-text-size);font-style:var(--spectrum-checkbox-text-font-style);font-weight:var(--spectrum-checkbox-text-font-weight);line-height:var(--spectrum-checkbox-text-line-height);margin-top:var(
--spectrum-checkbox-text-padding-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#box{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-checkbox-box-size);margin:calc((var(--spectrum-checkbox-height) - var(--spectrum-checkbox-box-size))/2) 0;position:relative;width:var(--spectrum-checkbox-box-size)}#box:before{border-radius:var(--spectrum-checkbox-box-border-radius);border-style:solid;border-width:var(--spectrum-checkbox-box-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-checkbox-box-size);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-checkbox-box-size);z-index:0}#box:after{border-radius:calc(var(--spectrum-checkbox-box-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transform:translate(0);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #checkmark,:host([dir=ltr]) #partialCheckmark{left:50%}:host([dir=rtl]) #checkmark,:host([dir=rtl]) #partialCheckmark{right:50%}#checkmark,#partialCheckmark{opacity:0;position:absolute;top:50%;transform:scale(0);transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) #checkmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #checkmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#checkmark{margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=ltr]) #partialCheckmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #partialCheckmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#partialCheckmark{display:none;margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#checkmark,#partialCheckmark{color:var(
--spectrum-checkbox-m-checkmark-color,var(--spectrum-alias-toggle-icon-color-selected)
)}#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
);forced-color-adjust:none}#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#input:checked+#box:before,:host([indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input:checked+#box:before,:host(:hover[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input:checked+#box:before,:host(:active[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host(:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host(:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([readonly]){border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([readonly]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host([readonly]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([readonly]:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host([readonly]:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([readonly]) #input:checked:disabled+#box:before,:host([readonly]) #input:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([readonly]) #input:checked:disabled~#label,:host([readonly]) #input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
);forced-color-adjust:none}#input:disabled+#box:before,:host([dir]) #input:checked:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color-disabled,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color-disabled,var(--spectrum-global-color-gray-400)
)}#input:checked:disabled~#label,#input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);forced-color-adjust:none}#input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:checked.focus-visible+#box:before,:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input:checked:focus-visible+#box:before,:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active) #input:checked+#box:before,:host([emphasized][indeterminate]:active) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([invalid][dir]) #box:before,:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #label{color:var(
--spectrum-checkbox-m-text-color-error,var(--spectrum-alias-component-text-color-error-default)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input:focus-visible+#box:before,:host([invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input.focus-visible~#label,:host([invalid][indeterminate]) #input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]) #input:focus-visible~#label,:host([invalid][indeterminate]) #input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:hover) #box:before,:host([invalid][dir]:hover) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:active) #box:before,:host([invalid]:active) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]:active) #label{color:var(
--spectrum-checkbox-m-text-color-error-down,var(--spectrum-alias-component-text-color-error-down)
)}@media (forced-colors:active){#input.focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}:host{--spectrum-checkbox-m-box-background-color-disabled:ButtonFace;--spectrum-checkbox-m-box-background-color:ButtonFace;--spectrum-checkbox-m-box-border-color-disabled:GrayText;--spectrum-checkbox-m-box-border-color-down:Highlight;--spectrum-checkbox-m-box-border-color-error-down:Highlight;--spectrum-checkbox-m-box-border-color-hover:Highlight;--spectrum-checkbox-m-box-border-color-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-box-border-color-selected-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected:Highlight;--spectrum-checkbox-m-box-border-color:ButtonText;--spectrum-checkbox-m-emphasized-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected:Highlight;--spectrum-checkbox-m-focus-ring-color-key-focus:FieldText;--spectrum-checkbox-m-text-color-disabled:GrayText;--spectrum-checkbox-m-text-color-down:FieldText;--spectrum-checkbox-m-text-color-error-down:FieldText;--spectrum-checkbox-m-text-color-error-hover:FieldText;--spectrum-checkbox-m-checkmark-color:HighlightText;--spectrum-checkbox-m-focus-ring-gap-key-focus:var(
--spectrum-global-dimension-static-size-25,2px
);--spectrum-checkbox-m-focus-ring-size:var(
--spectrum-global-dimension-static-size-40,3px
);--spectrum-checkbox-m-box-border-color-error:FieldText;--spectrum-checkbox-m-box-border-color-error-hover:FieldText;--spectrum-checkbox-m-text-color-error:FieldText;--spectrum-checkbox-m-text-color-hover:FieldText;--spectrum-checkbox-m-text-color-key-focus:FieldText;--spectrum-checkbox-m-text-color:FieldText}:host([invalid][dir]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([invalid][indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`,He=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Dash50{height:var(--spectrum-alias-ui-icon-dash-size-50);width:var(
--spectrum-alias-ui-icon-dash-size-50
)}.spectrum-UIIcon-Dash75{height:var(--spectrum-alias-ui-icon-dash-size-75);width:var(
--spectrum-alias-ui-icon-dash-size-75
)}.spectrum-UIIcon-Dash100{height:var(--spectrum-alias-ui-icon-dash-size-100);width:var(
--spectrum-alias-ui-icon-dash-size-100
)}.spectrum-UIIcon-Dash200{height:var(--spectrum-alias-ui-icon-dash-size-200);width:var(
--spectrum-alias-ui-icon-dash-size-200
)}.spectrum-UIIcon-Dash300{height:var(--spectrum-alias-ui-icon-dash-size-300);width:var(
--spectrum-alias-ui-icon-dash-size-300
)}.spectrum-UIIcon-Dash400{height:var(--spectrum-alias-ui-icon-dash-size-400);width:var(
--spectrum-alias-ui-icon-dash-size-400
)}.spectrum-UIIcon-Dash500{height:var(--spectrum-alias-ui-icon-dash-size-500);width:var(
--spectrum-alias-ui-icon-dash-size-500
)}.spectrum-UIIcon-Dash600{height:var(--spectrum-alias-ui-icon-dash-size-600);width:var(
--spectrum-alias-ui-icon-dash-size-600
)}
`;var Re=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ve=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Ne(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Re(e,r,s),s};const Ke={s:t.dy`
        <sp-icon-checkmark75
            id="checkmark"
            class="spectrum-UIIcon-Checkmark75"
        ></sp-icon-checkmark75>
    `,m:t.dy`
        <sp-icon-checkmark100
            id="checkmark"
            class="spectrum-UIIcon-Checkmark100"
        ></sp-icon-checkmark100>
    `,l:t.dy`
        <sp-icon-checkmark200
            id="checkmark"
            class="spectrum-UIIcon-Checkmark200"
        ></sp-icon-checkmark200>
    `,xl:t.dy`
        <sp-icon-checkmark300
            id="checkmark"
            class="spectrum-UIIcon-Checkmark300"
        ></sp-icon-checkmark300>
    `},Ge={s:t.dy`
        <sp-icon-dash75
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash75"
        ></sp-icon-dash75>
    `,m:t.dy`
        <sp-icon-dash100
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash100"
        ></sp-icon-dash100>
    `,l:t.dy`
        <sp-icon-dash200
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash200"
        ></sp-icon-dash200>
    `,xl:t.dy`
        <sp-icon-dash300
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash300"
        ></sp-icon-dash300>
    `};class We extends(w(je)){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[Me,Jt,He]}render(){return t.dy`
            ${super.render()}
            <span id="box">
                ${Ke[this.size]}
                ${Ge[this.size]}
            </span>
            <label id="label"><slot></slot></label>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),t.has("indeterminate")&&(this.indeterminate?this.inputElement.setAttribute("aria-checked","mixed"):this.inputElement.removeAttribute("aria-checked"))}}Ve([(0,d.Cb)({type:Boolean,reflect:!0})],We.prototype,"indeterminate",2),Ve([(0,d.Cb)({type:Boolean,reflect:!0})],We.prototype,"invalid",2),Ve([(0,d.Cb)({type:Boolean,reflect:!0})],We.prototype,"emphasized",2),customElements.define("sp-checkbox",We);const Ye=t.iv`
:host([size=s]){--spectrum-link-primary-text-size:var(
--spectrum-link-s-primary-text-size,var(--spectrum-global-dimension-font-size-75)
)}:host([size=m]){--spectrum-link-primary-text-size:var(
--spectrum-link-m-primary-text-size,var(--spectrum-global-dimension-font-size-100)
)}:host([size=l]){--spectrum-link-primary-text-size:var(
--spectrum-link-l-primary-text-size,var(--spectrum-global-dimension-font-size-200)
)}:host([size=xl]){--spectrum-link-primary-text-size:var(
--spectrum-link-xl-primary-text-size,var(--spectrum-global-dimension-font-size-300)
)}a{-webkit-text-decoration-skip:objects;background-color:transparent;cursor:pointer;font-size:var(--spectrum-link-primary-text-size);outline:none;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}a,a.focus-visible,a.focus-visible{text-decoration:underline}a.focus-visible{-webkit-text-decoration-style:double;text-decoration-style:double}a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([quiet]) a{text-decoration:none}:host([quiet]) a:hover{text-decoration:underline}a{color:var(
--spectrum-link-m-primary-text-color,var(--spectrum-alias-link-primary-text-color-default)
)}a:hover{color:var(
--spectrum-link-m-primary-text-color-hover,var(--spectrum-alias-link-primary-text-color-hover)
)}a:active{color:var(
--spectrum-link-m-primary-text-color-down,var(--spectrum-alias-link-primary-text-color-down)
)}a.focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-link-primary-text-color-key-focus)
)}a:focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-link-primary-text-color-key-focus)
)}:host([variant=secondary]) a{color:inherit}:host([variant=secondary]) a:hover{color:inherit}:host([variant=secondary]) a:active{color:inherit}:host([variant=secondary]) a:focus{color:inherit}:host([over-background]) a{color:var(
--spectrum-link-m-primary-overbackground-text-color,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:hover{color:var(
--spectrum-link-m-primary-overbackground-text-color-hover,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:active{color:var(
--spectrum-link-m-primary-overbackground-text-color-down,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:focus{color:var(
--spectrum-link-m-primary-overbackground-text-color-key-focus,var(--spectrum-alias-text-color-overbackground)
)}@media (forced-colors:active){:host([variant=secondary]) a{color:linktext}:host([variant=secondary]) a:hover{color:linktext}:host([variant=secondary]) a:active{color:linktext}:host([variant=secondary]) a:focus{color:linktext}}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([href]) a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}
`;var Ze=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Je=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Xe(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Ze(e,r,s),s};class Qe extends(w(lt($),{noDefaultSize:!0})){static get styles(){return[Ye]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}Je([(0,d.IO)("#anchor")],Qe.prototype,"anchorElement",2),Je([(0,d.Cb)({type:String,reflect:!0})],Qe.prototype,"variant",2),customElements.define("sp-link",Qe);const tr=t.iv`
:host{align-items:center;display:flex;height:100%;justify-content:center;width:100%}::slotted(*){max-height:100%;max-width:100%;object-fit:contain;transition:opacity var(--spectrum-global-animation-duration-100,.13s)}.file,.folder{height:100%;margin:var(
--spectrum-asset-icon-margin,var(--spectrum-global-dimension-size-250)
);max-width:var(
--spectrum-asset-icon-max-width,var(--spectrum-global-dimension-static-size-1000)
);min-width:var(
--spectrum-asset-icon-min-width,var(--spectrum-global-dimension-size-600)
);width:100%}.folderBackground{fill:var(
--spectrum-asset-folder-background-color,var(--spectrum-global-color-gray-300)
)}.fileBackground{fill:var(
--spectrum-asset-file-background-color,var(--spectrum-global-color-gray-50)
)}.fileOutline,.folderOutline{fill:var(
--spectrum-asset-icon-outline-color,var(--spectrum-global-color-gray-500)
)}
`;var er=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,or=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?rr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&er(e,r,s),s};class ar extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[tr]}render(){return"file"===this.variant?(e=this.label,t.dy`
    <svg
        class="file"
        role="img"
        viewBox="0 0 128 128"
        aria-label=${e||"File"}
    >
        <path
            class="fileBackground"
            d="M24,126c-5.5,0-10-4.5-10-10V12c0-5.5,4.5-10,10-10h61.5c2.1,0,4.1,0.8,5.6,2.3l20.5,20.4c1.5,1.5,2.4,3.5,2.4,5.7V116c0,5.5-4.5,10-10,10H24z"
        ></path>
        <path
            class="fileOutline"
            d="M113.1,23.3L92.6,2.9C90.7,1,88.2,0,85.5,0H24c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h80c6.6,0,12-5.4,12-12V30.4C116,27.8,114.9,25.2,113.1,23.3z M90,6l20.1,20H92c-1.1,0-2-0.9-2-2V6z M112,116c0,4.4-3.6,8-8,8H24c-4.4,0-8-3.6-8-8V12c0-4.4,3.6-8,8-8h61.5c0.2,0,0.3,0,0.5,0v20c0,3.3,2.7,6,6,6h20c0,0.1,0,0.3,0,0.4V116z"
        ></path>
    </svg>
`):"folder"===this.variant?(e=>t.dy`
    <svg
        class="folder"
        role="img"
        viewBox="0 0 32 32"
        aria-label=${e||"Folder"}
    >
        <path
            class="folderBackground"
            d="M3,29.5c-1.4,0-2.5-1.1-2.5-2.5V5c0-1.4,1.1-2.5,2.5-2.5h10.1c0.5,0,1,0.2,1.4,0.6l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3H29c1.4,0,2.5,1.1,2.5,2.5v18c0,1.4-1.1,2.5-2.5,2.5H3z"
        ></path>
        <path
            class="folderOutline"
            d="M29,6H18.3c-0.1,0-0.2,0-0.4-0.2l-3.1-3.1C14.4,2.3,13.8,2,13.1,2H3C1.3,2,0,3.3,0,5v22c0,1.6,1.3,3,3,3h26c1.7,0,3-1.4,3-3V9C32,7.3,30.7,6,29,6z M31,27c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7h28c1.1,0,2,0.9,2,2V27z"
        ></path>
    </svg>
`)(this.label):t.dy`
            <slot></slot>
        `;var e}}or([(0,d.Cb)({type:String,reflect:!0})],ar.prototype,"variant",2),or([(0,d.Cb)()],ar.prototype,"label",2),customElements.define("sp-asset",ar);const sr=t.iv`
:host{--spectrum-colorloupe-width-adjusted:calc(var(--spectrum-colorloupe-width, var(--spectrum-alias-colorloupe-width)) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-height-adjusted:calc(var(
--spectrum-colorloupe-height,
var(--spectrum-alias-colorloupe-height)
) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-offset:var(
--spectrum-global-dimension-static-size-200,16px
);--spectrum-colorloupe-animation-distance:var(
--spectrum-global-dimension-static-size-100,8px
)}:host{bottom:calc(50% + var(--spectrum-colorloupe-offset));height:var(--spectrum-colorloupe-height-adjusted);left:calc(50% - var(--spectrum-colorloupe-width-adjusted)/2);opacity:0;pointer-events:none;position:absolute;transform:translateY(var(--spectrum-colorloupe-animation-distance));transform-origin:bottom center;transition:transform .1s ease-in-out,opacity 125ms ease-in-out;width:var(--spectrum-colorloupe-width-adjusted)}:host([open]){opacity:1;transform:translate(0)}.outer{stroke-width:var(
--spectrum-colorloupe-outer-border-size,0
)}.spectrum-ColorLoupe-express{display:var(
--spectrum-colorloupe-express-visibility,none
)}.spectrum-ColorLoupe-spectrum{display:var(
--spectrum-colorloupe-spectrum-visibility,block
)}.outer{fill:var(
--spectrum-colorloupe-inner-border-color,var(--spectrum-global-color-static-white)
);stroke:var(--spectrum-colorloupe-outer-border-color,transparent)}.inner{fill:var(--spectrum-picked-color);stroke:var(
--spectrum-colorloupe-outer-stroke-color,var(--spectrum-global-color-static-transparent-black-200)
);stroke-width:var(
--spectrum-colorloupe-outer-stroke-width,var(--spectrum-alias-border-size-thick)
)}@media (forced-colors:active){:host{--spectrum-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}
`;var ir=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,lr=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?cr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&ir(e,r,s),s};class nr extends u.o{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[sr]}render(){return t.dy`
            <svg style="--spectrum-picked-color: ${this.color};">
                <defs>
                    <path
                        id="spectrum-inner-loupe"
                        class="inner"
                        d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                    <path
                        id="express-inner-loupe"
                        class="inner"
                        d="M-14330.692,18055.742A15.922,15.922,0,0,1-14334,18046a16,16,0,0,1,16-16,16,16,0,0,1,16,16,15.925,15.925,0,0,1-3.166,9.555c-.009.016-.018.029-.028.045-2.577,4.033-12.77,14.4-12.77,14.4S-14328.027,18059.484-14330.692,18055.742Z"
                    />

                    <g id="loupe-checkerboard">
                        <g transform="translate(338 285)">
                            <g transform="translate(-338 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                        </g>
                    </g>

                    <clipPath id="spectrum-loupe-clip">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-loupe-clip">
                        <use xlink:href="#express-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-checkerboard-loupe-clip">
                        <use
                            xlink:href="#express-inner-loupe"
                            transform="translate(14688 -17741)"
                        />
                    </clipPath>

                    <filter
                        id="loupe-shadow"
                        x="-16px"
                        y="-16px"
                        width="96"
                        height="128"
                        filterUnits="userSpaceOnUse"
                    >
                        <feOffset input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="2" result="d" />
                        <feFlood flood-opacity="0.302" />
                        <feComposite operator="in" in2="d" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>

                <g
                    transform="translate(4 4)"
                    class="spectrum-ColorLoupe-spectrum"
                >
                    <g clip-path="url(#spectrum-loupe-clip)">
                        <g transform="translate(-353.999 -289)">
                            <use xlink:href="#loupe-checkerboard" />
                        </g>
                    </g>
                    <g filter="url(#loupe-shadow)">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </g>
                    <path
                        class="outer"
                        d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                </g>

                <g
                    transform="translate(-290 -235)"
                    class="spectrum-ColorLoupe-express"
                >
                    <g
                        transform="translate(-58 -45)"
                        clip-path="url(#express-checkerboard-loupe-clip)"
                    >
                        <use xlink:href="#loupe-checkerboard" />
                    </g>
                    <g
                        transform="matrix(1, 0, 0, 1, 290, 238)"
                        filter="url(#loupe-shadow)"
                    >
                        <g transform="translate(14340 -18024)">
                            <use
                                xlink:href="#express-inner-loupe"
                                stroke-width="6"
                                stroke="rgba(0, 0, 0, 0.15)"
                                clip-path="url(#express-loupe-clip)"
                            />
                        </g>
                    </g>
                    <g transform="translate(14630 -17786)" fill="none">
                        <path
                            class="outer"
                            d="M -14317.9482421875 18067.111328125 C -14315.0771484375 18064.130859375 -14308.7626953125 18057.462890625 -14306.884765625 18054.529296875 L -14306.8466796875 18054.4609375 L -14306.76953125 18054.359375 C -14304.9580078125 18051.931640625 -14304.0009765625 18049.041015625 -14304.0009765625 18046 C -14304.0009765625 18042.26171875 -14305.45703125 18038.74609375 -14308.1025390625 18036.1015625 C -14310.7470703125 18033.45703125 -14314.2626953125 18032 -14318.0009765625 18032 C -14321.7392578125 18032 -14325.2548828125 18033.45703125 -14327.8994140625 18036.1015625 C -14330.544921875 18038.74609375 -14332.0009765625 18042.26171875 -14332.0009765625 18046 C -14332.0009765625 18049.115234375 -14331 18052.0625 -14329.107421875 18054.5234375 L -14329.0634765625 18054.58203125 C -14327.1025390625 18057.3359375 -14320.802734375 18064.087890625 -14317.9482421875 18067.111328125 M -14317.96484375 18070 C -14317.96484375 18070 -14328.02734375 18059.484375 -14330.6923828125 18055.7421875 C -14332.767578125 18053.044921875 -14334.0009765625 18049.666015625 -14334.0009765625 18046 C -14334.0009765625 18037.166015625 -14326.8359375 18030 -14318.0009765625 18030 C -14309.166015625 18030 -14302.0009765625 18037.166015625 -14302.0009765625 18046 C -14302.0009765625 18049.580078125 -14303.177734375 18052.888671875 -14305.1669921875 18055.5546875 C -14305.17578125 18055.5703125 -14305.1845703125 18055.583984375 -14305.1953125 18055.599609375 C -14307.7724609375 18059.6328125 -14317.96484375 18070 -14317.96484375 18070 Z"
                            stroke="none"
                            fill="#fff"
                        />
                    </g>
                </g>
            </svg>
        `}}lr([(0,d.Cb)({type:Boolean,reflect:!0})],nr.prototype,"open",2),lr([(0,d.Cb)({type:String})],nr.prototype,"color",2),customElements.define("sp-color-loupe",nr);const ur=t.iv`
:host{--spectrum-colorhandle-checkerboard-size:var(
--spectrum-global-dimension-static-size-100,8px
);--spectrum-colorhandle-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-hitarea-size:var(
--spectrum-global-dimension-size-300
)}:host(.focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host(:focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{background-position:var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
),var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)),calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)) calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))),calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
);background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-style:solid;border-width:var(
--spectrum-colorhandle-inner-border-size,var(--spectrum-global-dimension-static-size-25)
);box-sizing:border-box;display:block;height:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);position:absolute;transition:width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),height var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),border-width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-left var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-top var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing);width:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);z-index:1}:host,:host:after{border-radius:100%}:host:after{content:"";display:block;height:var(--spectrum-colorhandle-hitarea-size);left:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);position:absolute;top:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);width:var(--spectrum-colorhandle-hitarea-size)}:host([disabled]){pointer-events:none}.color{border-radius:100%;height:100%;width:100%}:host{background-color:var(
--spectrum-colorcontrol-checkerboard-light-color,var(--spectrum-global-color-static-white)
);background-image:linear-gradient(-45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(-45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%),linear-gradient(45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%);border-color:var(
--spectrum-colorhandle-inner-border-color,var(--spectrum-global-color-static-white)
);box-shadow:0 0 var(--spectrum-colorhandle-outer-shadow-blur,0) var(
--spectrum-colorhandle-outer-shadow-spread,var(--spectrum-alias-border-size-thin)
) var(--spectrum-colorhandle-outer-shadow-color,rgba(0,0,0,.42))}:host([disabled]){background:var(
--spectrum-colorhandle-fill-color-disabled,var(--spectrum-alias-track-color-disabled)
);border-color:var(
--spectrum-colorhandle-inner-border-color-disabled,var(--spectrum-global-color-gray-400)
);box-shadow:none}:host([disabled]) .color{display:none}.color{background-color:var(--spectrum-picked-color);box-shadow:inset 0 0 0 var(
--spectrum-colorhandle-outer-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorhandle-inner-shadow-color,var(--spectrum-colorhandle-outer-shadow-color)
)}@media (forced-colors:active){:host{--spectrum-colorhandle-inner-border-color-disabled:GrayText;--spectrum-colorhandle-fill-color-disabled:Canvas;--spectrum-colorhandle-inner-border-color:CanvasText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host(:focus){outline:none}
`;var dr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,pr=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?mr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&dr(e,r,s),s};class br extends u.o{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[ur]}handlePointerdown(t){"touch"===t.pointerType&&(this.open=!0),this.setPointerCapture(t.pointerId)}handlePointerup(t){this.open=!1,this.releasePointerCapture(t.pointerId)}render(){return t.dy`
            <div class="color" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}pr([(0,d.Cb)({type:Boolean,reflect:!0})],br.prototype,"disabled",2),pr([(0,d.Cb)({type:Boolean,reflect:!0})],br.prototype,"focused",2),pr([(0,d.Cb)({type:Boolean,reflect:!0})],br.prototype,"open",2),pr([(0,d.Cb)({type:String})],br.prototype,"color",2),customElements.define("sp-color-handle",br);const hr=Rt(class extends Nt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(e)}const a=t.element.classList;this.nt.forEach((t=>{t in e||(a.remove(t),this.nt.delete(t))}));for(const t in e){const r=!!e[t];r===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(r?(a.add(t),this.nt.add(t)):(a.remove(t),this.nt.delete(t)))}return Ht.Jb}}),gr=t.iv`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left-adjusted
);padding-right:var(--spectrum-picker-textonly-padding-right-adjusted)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right-adjusted);padding-right:var(
--spectrum-picker-textonly-padding-left-adjusted
)}#button{align-items:center;border-radius:var(--spectrum-picker-texticon-border-radius);border-style:solid;border-width:var(--spectrum-picker-texticon-border-size);display:flex;height:var(--spectrum-picker-texticon-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-texticon-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-texticon-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-texticon-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-texticon-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-texticon-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([dir=rtl]) #button #label+.icon{margin-right:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([size=s]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-s-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-s-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-s-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-s-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-s-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-s-texticon-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-s-texticon-height,var(--spectrum-global-dimension-size-300)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-s-texticon-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-s-texticon-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-s-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=m]){--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-m-texticon-padding-left
);--spectrum-picker-texticon-border-size:var(
--spectrum-picker-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-m-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-m-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-m-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-m-texticon-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-m-texticon-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=l]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-l-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-l-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-l-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-l-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-l-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-l-texticon-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-l-texticon-height,var(--spectrum-global-dimension-size-500)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-l-texticon-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-l-texticon-width,var(--spectrum-global-dimension-size-2500)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-l-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=xl]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-xl-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-xl-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-xl-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-xl-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-xl-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-xl-texticon-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-xl-texticon-height,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-xl-texticon-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-xl-texticon-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-xl-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host{--spectrum-picker-texticon-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-texticon-disabled-border-size:0;--spectrum-picker-texticon-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-texticon-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-picker-texticon-border-size-increase-focus:1px;--spectrum-picker-padding-left-adjusted:calc(var(--spectrum-picker-texticon-padding-left) - var(--spectrum-picker-texticon-border-size));--spectrum-picker-textonly-padding-left-adjusted:calc(var(--spectrum-picker-textonly-padding-left) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-textonly-padding-right-adjusted:calc(var(--spectrum-picker-textonly-padding-right) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-focus-ring-border-radius-adjusted:calc(var(--spectrum-picker-textonly-border-radius) + var(--spectrum-picker-focus-ring-gap))}:host{--spectrum-picker-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-picker-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-picker-focus-ring-color:var(
--spectrum-picker-m-textonly-focusring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#button{transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button:after{border-radius:var(--spectrum-picker-focus-ring-border-radius-adjusted);bottom:0;content:"";left:0;margin:calc((var(--spectrum-picker-focus-ring-gap) + var(--spectrum-picker-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button.focus-visible{box-shadow:none}#button:focus-visible{box-shadow:none}#button.focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}#button:focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}:host([quiet]){--spectrum-picker-texticon-border-size:0;--spectrum-picker-texticon-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0;--spectrum-picker-quiet-background-color-key-focus:transparent;--spectrum-picker-quiet-border-color-key-focus:var(
--spectrum-global-color-blue-400
)}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-texticon-text-size);height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);line-height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-texticon-placeholder-font-style);font-weight:var(
--spectrum-picker-texticon-placeholder-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validation-icon{margin-left:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=rtl]) .validation-icon{margin-right:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-texticon-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-texticon-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-texticon-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}#button{background-color:var(
--spectrum-picker-m-texticon-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-picker-m-texticon-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}#button:hover{background-color:var(
--spectrum-picker-m-texticon-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-picker-m-texticon-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-picker-m-texticon-border-color-down,var(--spectrum-alias-component-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(--spectrum-picker-quiet-border-color-key-focus);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(--spectrum-picker-quiet-border-color-key-focus);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-validation-icon-color-error,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-texticon-border-color-error-hover,var(--spectrum-semantic-negative-color-hover)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-down,var(--spectrum-semantic-negative-color-down)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}#label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color-down)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-background-color-key-focus
);box-shadow:0 2px 0 0 var(--spectrum-picker-quiet-border-color-key-focus)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-quiet-background-color-key-focus
);box-shadow:0 2px 0 0 var(--spectrum-picker-quiet-border-color-key-focus)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button.focus-visible:after,:host([quiet][focused]) #button:after{box-shadow:none}:host([quiet]) #button:focus-visible:after,:host([quiet][focused]) #button:after{box-shadow:none}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-background-color-key-focus
);box-shadow:0 2px 0 0 var(--spectrum-picker-quiet-border-color-key-focus)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-quiet-background-color-key-focus
);box-shadow:0 2px 0 0 var(--spectrum-picker-quiet-border-color-key-focus)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}@media (forced-colors:active){#button{--spectrum-picker-focus-ring-color:Highlight;--spectrum-picker-m-quiet-texticon-border-color-down:ButtonText;--spectrum-picker-m-quiet-texticon-border-color:ButtonText;--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus:GrayText;--spectrum-picker-m-texticon-border-color-error-key-focus:Highlight;--spectrum-picker-m-texticon-placeholder-text-color-disabled:GrayText;--spectrum-picker-m-texticon-placeholder-text-color-down:GrayText;--spectrum-picker-m-texticon-placeholder-text-color-hover:GrayText;--spectrum-picker-m-texticon-placeholder-text-color-key-focus:GrayText;--spectrum-picker-m-texticon-placeholder-text-color-mouse-focus:GrayText;--spectrum-picker-m-texticon-placeholder-text-color:GrayText;--spectrum-picker-m-texticon-text-color-disabled:GrayText;--spectrum-picker-m-texticon-text-color-key-focus:ButtonText;--spectrum-picker-m-texticon-text-color:ButtonText;--spectrum-picker-m-textonly-focusring-border-color-key-focus:Highlight;--spectrum-picker-quiet-border-color-key-focus:Highlight}#button.focus-visible{outline:2px solid Highlight}#button:focus-visible{outline:2px solid Highlight}#button:disabled,:host([disabled]) #button{border-color:GrayText;border-width:var(--spectrum-picker-texticon-border-size)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{box-shadow:0 1px 0 0 var(--spectrum-picker-focus-ring-color);forced-color-adjust:none;outline:0}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{box-shadow:0 1px 0 0 var(--spectrum-picker-focus-ring-color);forced-color-adjust:none;outline:0}}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;var vr=i(731);customElements.define("sp-icon-chevron100",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`}});const fr=async(t,e,r,o)=>{const{Overlay:a}=await i.e(749).then(i.bind(i,749));return a.open(t,e,r,o)};class xr extends Event{constructor({root:t}){super("sp-overlay-close",{bubbles:!0,composed:!0}),this.root=t}}const yr=t.iv`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.checkmark{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.chevron{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]){border-left:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-texticon-text-size);font-style:normal;font-weight:var(--spectrum-listitem-texticon-text-font-weight);margin:0;min-height:var(--spectrum-listitem-texticon-height);padding:var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-right) var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-left);position:relative;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-texticon-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap) - var(--spectrum-listitem-textthumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-texticon-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([selected]){color:var(
--spectrum-listitem-m-texticon-text-color-selected,var(--spectrum-alias-component-text-color-default)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-texticon-ui-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-texticon-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);cursor:default}@media (forced-colors:active){:host{--spectrum-listheading-text-color:ButtonText;--spectrum-listitem-m-texticon-background-color:ButtonFace;--spectrum-listitem-m-texticon-background-color-disabled:ButtonFace;--spectrum-listitem-m-texticon-background-color-down:ButtonFace;--spectrum-listitem-m-texticon-background-color-hover:Highlight;--spectrum-listitem-m-texticon-background-color-key-focus:Highlight;--spectrum-listitem-m-texticon-focus-indicator-color:Highlight;--spectrum-listitem-m-texticon-text-color:ButtonText;--spectrum-listitem-m-texticon-text-color-disabled:GrayText;--spectrum-listitem-m-texticon-text-color-hover:HighlightText;--spectrum-listitem-m-texticon-text-color-key-focus:HighlightText;--spectrum-listitem-m-texticon-text-color-selected:ButtonText;--spectrum-listitem-m-texticon-ui-icon-color-selected:Highlight;forced-color-adjust:none}:host(:not([disabled]).focus-visible),:host(:not([disabled]).is-highlighted),:host(:not([disabled]).is-open),:host(:not([disabled]):focus),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled]).is-highlighted),:host(:not([disabled]).is-open),:host(:not([disabled]):focus),:host(:not([disabled]):focus-visible),:host(:not([disabled]):hover),:host(:not([disabled])[focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:not([disabled]).focus-visible[selected]) .checkmark,:host(:not([disabled]).is-highlighted[selected]) .checkmark,:host(:not([disabled]).is-open[selected]) .checkmark,:host(:not([disabled]):focus[selected]) .checkmark,:host(:not([disabled]):hover[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark{color:HighlightText}:host(:not([disabled]).is-highlighted[selected]) .checkmark,:host(:not([disabled]).is-open[selected]) .checkmark,:host(:not([disabled]):focus-visible[selected]) .checkmark,:host(:not([disabled]):focus[selected]) .checkmark,:host(:not([disabled]):hover[selected]) .checkmark,:host(:not([disabled])[focused][selected]) .checkmark{color:HighlightText}}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}:host([disabled]){pointer-events:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}:host([dir=rtl]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap);padding-right:0}
`;var kr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,zr=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?wr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&kr(e,r,s),s};class Cr extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class Ir extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}const qr=new Ir,Er=new Cr,Sr=class extends(lt($)){constructor(){super(),this.isInSubmenu=!1,this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.handleSubmenuChange=()=>{var t;null==(t=this.menuData.selectionRoot)||t.selectOrToggleItem(this)},this.handleSubmenuPointerenter=()=>{this.leaveTimeout&&(clearTimeout(this.leaveTimeout),delete this.leaveTimeout)},this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0}),new D(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:()=>{this.breakItemChildrenCache()}})}static get styles(){return[yr,Jt,$e]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce(((t,e)=>t+(e.textContent||"").trim()),"")}get focusElement(){return this}get itemChildren(){if(this._itemChildren)return this._itemChildren;const t=this.shadowRoot.querySelector('slot[name="icon"]'),e=t?t.assignedElements().map((t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e})):[],r=this.shadowRoot.querySelector("slot:not([name])"),o=r?r.assignedNodes().map((t=>t.cloneNode(!0))):[];return this._itemChildren={icon:e,content:o},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return t.dy`
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?t.dy`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:t.dy``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):t.dy``}
            <slot
                hidden
                name="submenu"
                @slotchange=${this.manageSubmenu}
            ></slot>
            ${this.hasSubmenu?t.dy`
                      <sp-icon-chevron100
                          class="spectrum-UIIcon-ChevronRight100 chevron icon"
                      ></sp-icon-chevron100>
                  `:t.dy``}
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=this.open||!!e.length}handleRemoveActive(t){"pointerleave"===t.type&&this.hasSubmenu||this.hasSubmenu||this.open||(this.active=!1)}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id="sp-menu-item-"+Sr.instanceCount++),this.addEventListener("pointerenter",this.closeOverlaysForRoot)}closeOverlaysForRoot(){if(this.open)return;const t=new xr({root:this.menuData.focusRoot});this.dispatchEvent(t)}handleSubmenuClick(){this.openOverlay()}handlePointerenter(){if(this.leaveTimeout)return clearTimeout(this.leaveTimeout),void delete this.leaveTimeout;this.openOverlay()}handlePointerleave(){this.hasSubmenu&&this.open&&(this.leaveTimeout=setTimeout((()=>{delete this.leaveTimeout,this.closeOverlay&&this.closeOverlay()}),100))}async openOverlay(){if(!this.hasSubmenu||this.open||this.disabled)return;this.open=!0,this.active=!0;const t=this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements()[0];t.addEventListener("pointerenter",this.handleSubmenuPointerenter),t.addEventListener("change",this.handleSubmenuChange);const e=document.createElement("sp-popover"),r=(0,vr.G)([t],e,{position:"beforeend",prepareCallback:t=>{const e=t.slot;return t.tabIndex=0,t.removeAttribute("slot"),t.isSubmenu=!0,t=>{t.tabIndex=-1,t.slot=e,t.isSubmenu=!1}}}),o=fr(this,"click",e,{placement:this.isLTR?"right-start":"left-start",receivesFocus:"auto",root:this.menuData.focusRoot}),a=async()=>{delete this.closeOverlay,(await o)()};this.closeOverlay=a,this.addEventListener("sp-closed",(t=>{t.stopPropagation(),delete this.closeOverlay,r(),this.open=!1,this.active=!1}),{once:!0}),e.addEventListener("change",a)}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):("menuitemcheckbox"===t||"menuitemradio"===t)&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu?(this.addEventListener("click",this.handleSubmenuClick),this.addEventListener("pointerenter",this.handlePointerenter),this.addEventListener("pointerleave",this.handlePointerleave)):this.closeOverlay||(this.removeEventListener("click",this.handleSubmenuClick),this.removeEventListener("pointerenter",this.handlePointerenter),this.removeEventListener("pointerleave",this.handlePointerleave)))}connectedCallback(){super.connectedCallback(),this.isInSubmenu=!!this.closest('[slot="submenu"]'),!this.isInSubmenu&&(qr.reset(this),this.dispatchEvent(qr),this._parentElement=this.parentElement)}disconnectedCallback(){var t;Er.reset(this),this.isInSubmenu||null==(t=this._parentElement)||t.dispatchEvent(Er),this.isInSubmenu=!1,super.disconnectedCallback()}async triggerUpdate(){this.isInSubmenu||(await new Promise((t=>requestAnimationFrame(t))),qr.reset(this),this.dispatchEvent(qr))}};let Ar=Sr;Ar.instanceCount=0,zr([(0,d.Cb)({type:Boolean,reflect:!0})],Ar.prototype,"active",2),zr([(0,d.Cb)({type:Boolean,reflect:!0})],Ar.prototype,"focused",2),zr([(0,d.Cb)({type:Boolean,reflect:!0})],Ar.prototype,"selected",2),zr([(0,d.Cb)({type:String})],Ar.prototype,"value",1),zr([(0,d.Cb)({type:Boolean})],Ar.prototype,"hasSubmenu",2),zr([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],Ar.prototype,"noWrap",2),zr([(0,d.IO)(".anchor")],Ar.prototype,"anchorElement",2),zr([(0,d.Cb)({type:Boolean})],Ar.prototype,"open",2);const $r=t.iv`
:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-texticon-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-texticon-heading-text-font-weight:400;--spectrum-listitem-texticon-heading-text-transform:uppercase;--spectrum-listitem-texticon-heading-letter-spacing:0.06em;--spectrum-listitem-texticon-heading-margin:var(
--spectrum-global-dimension-size-75
) 0 0 0;--spectrum-listitem-texticon-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-texticon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-listitem-texticon-selectable-padding-right:calc(var(--spectrum-listitem-texticon-ui-icon-width) + var(--spectrum-listitem-texticon-ui-icon-gap) + var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
));--spectrum-listitem-texticon-label-line-height:1.3;--spectrum-listitem-texticon-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-texticon-padding-left:var(
--spectrum-listitem-m-texticon-padding-left
);--spectrum-listitem-textthumbnail-padding-left:var(
--spectrum-listitem-m-textthumbnail-padding-left
);--spectrum-listitem-texticon-text-size:var(
--spectrum-listitem-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-listitem-texticon-text-font-weight:var(
--spectrum-listitem-m-texticon-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-texticon-icon-gap:var(
--spectrum-listitem-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-divider-padding:var(
--spectrum-listitem-m-texticon-divider-padding,var(--spectrum-global-dimension-static-size-40)
);--spectrum-listitem-texticon-ui-icon-margin-top:var(
--spectrum-listitem-m-texticon-ui-icon-margin-top,var(--spectrum-global-dimension-size-125)
);--spectrum-listitem-texticon-ui-icon-width:var(
--spectrum-listitem-m-texticon-ui-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-listitem-texticon-ui-icon-gap:var(
--spectrum-listitem-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-padding-right:var(
--spectrum-listitem-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-listitem-texticon-focus-indicator-size:var(
--spectrum-listitem-m-texticon-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-height:var(
--spectrum-listitem-m-texticon-height,var(--spectrum-global-dimension-size-400)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap));width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){--swc-menu-width:100%}
`;var _r=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Ur=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Tr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&_r(e,r,s),s};function Pr(t,e){return!!e&&(t===e||t.contains(e))}class Lr extends u.o{constructor(){super(),this.isSubmenu=!1,this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[$r]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const t=e instanceof Ar?[e]:[...e.querySelectorAll("*")];for(const e of t)this.childItemSet.has(e)&&this.cachedChildItems.push(e)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e;t.item.menuData.focusRoot&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),"inherit"===this.selects?(this.resolvedSelects="inherit",this.resolvedRole=(null==(e=t.currentAncestorWithSelects)?void 0:e.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none")}onSelectableItemAddedOrUpdated(t){("single"===this.resolvedSelects||"multiple"===this.resolvedSelects||!this.selects&&"ignore"!==this.resolvedSelects)&&!t.item.menuData.selectionRoot&&(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t.item),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every((t=>t.disabled)))return;if(this.childItems.some((t=>t.menuData.focusRoot!==this)))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}onClick(t){if(t.defaultPrevented)return;const e=t.composedPath().find((t=>t instanceof Element&&t.getAttribute("role")===this.childRole));if(!(null==e?void 0:e.href)||!e.href.length){if((null==e?void 0:e.menuData.selectionRoot)!==this||!this.childItems.length)return;if(t.preventDefault(),e.hasSubmenu||e.open)return;this.selectOrToggleItem(e),this.prepareToCleanUp()}}handleFocusin(t){var e;const r=Pr(this,t.relatedTarget);if(r||this.childItems.some((t=>t.menuData.focusRoot!==this)))return;const o=this.getRootNode().activeElement,a=(null==(e=this.childItems[this.focusedItemIndex])?void 0:e.menuData.selectionRoot)||this;if((o!==a||!r)&&(a.focus({preventScroll:!0}),o&&0===this.focusedItemIndex)){const t=this.childItems.findIndex((t=>t===o));t>0&&this.focusMenuItemByOffset(t)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(Pr(this,t.relatedTarget))t.composedPath()[0].focused=!1;else{if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some((t=>t.menuData.focusRoot===this))){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,r=new Map(this.selectedItemsMap),o=this.selected.slice(),a=this.selectedItems.slice(),s=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],r=[];this.childItemSet.forEach((t=>{t.menuData.selectionRoot===this&&this.selectedItemsMap.has(t)&&(e.push(t.value),r.push(t))})),this.selected=e,this.selectedItems=r,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this.selected=o,this.selectedItems=a,this.selectedItemsMap=r,void(this.value=s);if("single"===e){for(const e of r.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,r=this.childItems[this.focusedItemIndex],o="ArrowDown"===e?1:-1,a=this.focusMenuItemByOffset(o);a!==r&&(t.preventDefault(),a.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const e=this.isLTR&&"ArrowRight"===t||!this.isLTR&&"ArrowLeft"===t,r=this.isLTR&&"ArrowLeft"===t||!this.isLTR&&"ArrowRight"===t;if(e){const t=this.childItems[this.focusedItemIndex];t.hasSubmenu&&(this.blur(),t.openOverlay())}else r&&this.isSubmenu&&this.dispatchEvent(new Event("close",{bubbles:!0}))}handleKeydown(t){var e;const{code:r}=t;if("Tab"!==r){if("Space"===r){const t=this.childItems[this.focusedItemIndex];if(t.hasSubmenu)return this.blur(),void t.openOverlay()}"Space"!==r&&"Enter"!==r?"ArrowDown"!==r&&"ArrowUp"!==r?this.navigateBetweenRelatedMenus(r):this.navigateWithinMenu(t):null==(e=this.childItems[this.focusedItemIndex])||e.click()}else this.prepareToCleanUp()}focusMenuItemByOffset(t){const e=t||1;this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let r=this.childItems[this.focusedItemIndex],o=this.childItems.length;for(;r.disabled&&o;)o-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,r=this.childItems[this.focusedItemIndex];return null!=r&&r.disabled||this.forwardFocusVisibleToItem(r),r}prepareToCleanUp(){document.addEventListener("focusout",(()=>{requestAnimationFrame((()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())}))}),{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,r=[],o=[];let a=this.childItems.length;for(;a;){a-=1;const s=this.childItems[a];s.menuData.selectionRoot===this&&(s.selected&&(t=a,e.set(s,!0),r.unshift(s.value),o.unshift(s)),a!==t&&(s.focused=!1))}o.map(((t,e)=>{e>0&&(t.focused=!1)})),this.selectedItemsMap=e,this.selected=r,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise((e=>t=e)),this._willUpdateItems=!0,window.requestAnimationFrame((()=>{void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()}))}}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return t.dy`
            <slot></slot>
        `}firstUpdated(t){if(super.firstUpdated(t),!this.hasAttribute("tabindex")){const t=this.getAttribute("role");"group"===t?this.tabIndex=-1:"none"!==t&&(this.tabIndex=0)}const e=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];[...this.children].forEach((t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)})),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise((t=>requestAnimationFrame((()=>t(!0)))))];this.childItemSet.forEach((e=>{t.push(e.triggerUpdate())})),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then((()=>this.updateItemFocus()))}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}Ur([(0,d.Cb)({type:String,reflect:!0})],Lr.prototype,"label",2),Ur([(0,d.Cb)({type:String,reflect:!0})],Lr.prototype,"selects",2),Ur([(0,d.Cb)({type:String})],Lr.prototype,"value",2),Ur([(0,d.Cb)({type:String,attribute:"value-separator"})],Lr.prototype,"valueSeparator",2),Ur([(0,d.Cb)({attribute:!1})],Lr.prototype,"selected",2),Ur([(0,d.Cb)({attribute:!1})],Lr.prototype,"selectedItems",2),Ur([(0,d.IO)("slot:not([name])")],Lr.prototype,"menuSlot",2),customElements.define("sp-menu",Lr);const Or=t.iv`
:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0ms linear calc(var(
--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)
) + var(
--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)
));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}
`;var Fr=Object.defineProperty;Object.getOwnPropertyDescriptor;class Br extends u.o{constructor(){super(...arguments),this.open=!1}static get styles(){return[Or]}render(){return t.dy``}}((t,e,r,o)=>{for(var a,s=void 0,i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&Fr(e,r,s)})([(0,d.Cb)({type:Boolean,reflect:!0})],Br.prototype,"open"),customElements.define("sp-underlay",Br);var Dr=i(171);class jr{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){this.media.addEventListener("change",this.onChange)}hostDisconnected(){this.media.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}const Mr=t.iv`
.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(
--spectrum-dialog-fullscreen-margin
);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;bottom:0;box-sizing:border-box;left:0;right:0;top:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
);height:100dvh}
`,Hr=t.iv`
:host([dir=ltr]){left:0}:host([dir=rtl]){right:0}:host{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}@media (max-width:375px){.spectrum-Tray{border-radius:var(--spectrum-tray-border-radius,0)}}.tray{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .tray{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-tray-margin-top:64px}:host([dir=ltr]) .spectrum-Tray-wrapper{left:0}:host([dir=rtl]) .spectrum-Tray-wrapper{right:0}.spectrum-Tray-wrapper{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}.tray{border-radius:var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(--spectrum-tray-border-radius,0) var(--spectrum-tray-border-radius,0);max-height:calc(100vh - var(--spectrum-tray-margin-top));max-width:var(--spectrum-tray-max-width,375px);min-height:var(
--spectrum-tray-min-height,var(--spectrum-global-dimension-static-size-800)
);outline:none;overflow:auto;padding:var(--spectrum-tray-padding-y,0) var(
--spectrum-tray-padding-x,var(--spectrum-global-dimension-static-size-100)
);transform:translateY(100%);transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms);width:var(--spectrum-tray-width,100%)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media (max-width:375px){.tray{border-radius:var(--spectrum-tray-border-radius,0)}}:host{align-items:flex-end;max-height:var(--swc-visual-viewport-height);position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain;padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var Rr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Vr=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Nr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Rr(e,r,s),s};class Kr extends u.o{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new jr(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve()}static get styles(){return[Mr,Hr]}focus(){const t=(0,Dr.i)(this);t?t.focus():1===this.children.length?this.tray.focus():super.focus()}overlayWillCloseCallback(){return!!this.open&&(this.close(),!0)}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.dispatchClosed(),this.resolveTransitionPromise())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(t){t.has("open")&&void 0!==t.get("open")&&this.prefersMotion.matches&&(this.transitionPromise=new Promise((t=>this.resolveTransitionPromise=t))),super.update(t)}render(){return t.dy`
            <sp-underlay
                ?open=${this.open}
                @click=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}}Vr([(0,d.Cb)({type:Boolean,reflect:!0})],Kr.prototype,"open",2),Vr([(0,d.IO)(".tray")],Kr.prototype,"tray",2),customElements.define("sp-tray",Kr);const Gr=t.iv`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(var(--spectrum-overlay-animation-distance)*-1))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:none;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{--sp-popover-tip-size:24px;max-height:100%;max-width:100%;min-width:min-content}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var Wr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Zr=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Yr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Wr(e,r,s),s};class Xr extends u.o{constructor(){super(...arguments),this.dialog=!1,this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[Gr]}renderTip(){return t.dy`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(t){if(!t.target||t.target!==this)return;const e=this.shadowRoot.querySelector("#tip");e&&(t.detail.overlayContentTipElement=e)}render(){return t.dy`
            <slot></slot>
            ${this.tip?this.renderTip():t.Ld}
        `}}Zr([(0,d.Cb)({type:Boolean,reflect:!0})],Xr.prototype,"dialog",2),Zr([(0,d.Cb)({type:Boolean,reflect:!0})],Xr.prototype,"open",2),Zr([(0,d.Cb)({reflect:!0})],Xr.prototype,"placement",2),Zr([(0,d.Cb)({type:Boolean,reflect:!0})],Xr.prototype,"tip",2),customElements.define("sp-popover",Xr);var Jr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,to=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Qr(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Jr(e,r,s),s};const eo={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class ro extends(w($)){constructor(){super(),this.isMobile=new jr(this,"(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)"),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,("ArrowDown"===t.code||"ArrowUp"===t.code)&&(t.preventDefault(),this.toggle(!0))},this.overlayOpenCallback=async()=>{this.updateMenuItems(),await this.itemsUpdated,await this.optionsMenu.updateComplete,requestAnimationFrame((()=>this.menuStateResolver()))},this.overlayCloseCallback=async()=>{this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.close(),requestAnimationFrame((()=>this.menuStateResolver()))},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.selectionPromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){t.stopPropagation();const e=t.target,[r]=e.selectedItems;this.setValueFromItem(r,t)}async setValueFromItem(t,e){const r=this.selectedItem,o=this.value;if(this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})))return e&&e.preventDefault(),this.setMenuItemSelected(this.selectedItem,!1),r&&this.setMenuItemSelected(r,!0),this.selectedItem=r,this.value=o,void(this.open=!0);r&&this.setMenuItemSelected(r,!1),this.setMenuItemSelected(t,!!this.selects)}setMenuItemSelected(t,e){null!=this.selects&&(t.selected=e)}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}async generatePopover(){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment()),(0,t.sY)(this.renderPopover,this.popoverFragment,{host:this}),this.popover=this.popoverFragment.children[0],this.optionsMenu=this.popover.children[1]}async openMenu(){let t=[];const e=this.querySelector(":scope > sp-menu");await this.generatePopover(),t=e?Array.from(e.children):Array.from(this.children).filter((t=>!t.hasAttribute("slot"))),0!==t.length?(this.restoreChildren=(0,vr.G)(t,this.optionsMenu,{position:"beforeend",prepareCallback:t=>(this.value===t.value&&this.setMenuItemSelected(t,!0),t=>{void 0!==t.focused&&(t.focused=!1)})}),this.sizePopover(this.popover),this.closeOverlay=oo.openOverlay(this,"modal",this.popover,{placement:this.isMobile.matches?"none":this.placement,receivesFocus:"auto"})):this.menuStateResolver()}sizePopover(t){this.isMobile.matches?t.style.setProperty("--swc-menu-width","100%"):this.quiet||t.style.setProperty("min-width",`${this.offsetWidth}px`)}async closeMenu(){if(this.closeOverlay){const t=this.closeOverlay;delete this.closeOverlay,(await t)()}}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(e){return this.value&&this.selectedItem?e:t.dy`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const e={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value};return[t.dy`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${hr(e)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?t.dy`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:t.Ld}
                <sp-icon-chevron100
                    class="picker ${eo[this.size]}"
                ></sp-icon-chevron100>
            `]}render(){return t.dy`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(t){this.selects&&(this.selects="single"),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("open")&&(this.open||void 0!==t.get("open"))&&(this.menuStatePromise=new Promise((t=>this.menuStateResolver=t)),this.open?this.openMenu():this.closeMenu()),t.has("value")&&!t.has("selectedItem")&&this.updateMenuItems(),super.update(t)}get dismissHelper(){return t.dy`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    arial-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}get renderPopover(){const e=t.dy`
            ${this.dismissHelper}
            <sp-menu
                id="menu"
                role="${this.listRole}"
                @change=${this.handleChange}
                .selects=${this.selects}
            ></sp-menu>
            ${this.dismissHelper}
        `;return this.isMobile.matches?t.dy`
                <sp-tray
                    id="popover"
                    role="dialog"
                    @sp-menu-item-added-or-updated=${this.updateMenuItems}
                    .overlayOpenCallback=${this.overlayOpenCallback}
                    .overlayCloseCallback=${this.overlayCloseCallback}
                >
                    ${e}
                </sp-tray>
            `:t.dy`
            <sp-popover
                id="popover"
                role="dialog"
                @sp-menu-item-added-or-updated=${this.updateMenuItems}
                .overlayOpenCallback=${this.overlayOpenCallback}
                .overlayCloseCallback=${this.overlayCloseCallback}
            >
                ${e}
            </sp-popover>
        `}updateMenuItems(t){if(this.open&&"sp-menu-item-removed"===(null==t?void 0:t.type)||this._willUpdateItems)return;this._willUpdateItems=!0,(null==t?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise((t=>e=t)),window.requestAnimationFrame((async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll('sp-menu-item:not([slot="submenu"] *)')],this.manageSelection(),e(),this._willUpdateItems=!1}))}async manageSelection(){if(null==this.selects)return;let t;await this.menuStatePromise,this.selectionPromise=new Promise((t=>this.selectionResolver=t)),this.menuItems.forEach((e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e})),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,await this.selectionPromise,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.close(),super.disconnectedCallback()}}ro.openOverlay=async(t,e,r,o)=>await fr(t,e,r,o),to([(0,d.IO)("#button")],ro.prototype,"button",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"disabled",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"focused",2),to([(0,d.Cb)({type:String,reflect:!0})],ro.prototype,"icons",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"invalid",2),to([(0,d.Cb)()],ro.prototype,"label",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"open",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"readonly",2),to([(0,d.Cb)()],ro.prototype,"placement",2),to([(0,d.Cb)({type:Boolean,reflect:!0})],ro.prototype,"quiet",2),to([(0,d.Cb)({type:String})],ro.prototype,"value",2),to([(0,d.Cb)({attribute:!1})],ro.prototype,"selectedItem",2);class oo extends ro{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),"ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);const r=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,o=this.value&&"ArrowRight"!==e?-1:1;let a=r+o;for(;this.menuItems[a]&&this.menuItems[a].disabled;)a+=o;!this.menuItems[a]||this.menuItems[a].disabled||(!this.value||a!==r)&&this.setValueFromItem(this.menuItems[a])}}static get styles(){return[gr,$e]}}customElements.define("sp-picker",oo),customElements.define("sp-menu-item",Ar);const ao=t.iv`
:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-s-vertical-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-m-vertical-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-l-vertical-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border:none;border-radius:var(--spectrum-divider-height);border-width:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}
`;var so=Object.defineProperty;Object.getOwnPropertyDescriptor;class io extends(w(u.o,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return t.dy``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}io.styles=[ao],((t,e,r,o)=>{for(var a,s=void 0,i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&so(e,r,s)})([(0,d.Cb)({type:Boolean,reflect:!0})],io.prototype,"vertical"),customElements.define("sp-divider",io);const co=t.iv`
:host{--spectrum-helptext-line-height:var(
--spectrum-line-height-100
);--spectrum-helptext-content-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-icon-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-disabled-content-color:var(
--spectrum-disabled-content-color
)}:host([variant=neutral]){--spectrum-helptext-content-color-default:var(
--spectrum-neutral-subdued-content-color-default
);--spectrum-helptext-icon-color-default:var(
--spectrum-neutral-subdued-content-color-default
)}:host([variant=negative]){--spectrum-helptext-content-color-default:var(
--spectrum-negative-content-color
);--spectrum-helptext-icon-color-default:var(
--spectrum-negative-content-color
)}:host([disabled]){--spectrum-helptext-content-color-default:var(
--spectrum-helptext-disabled-content-color
);--spectrum-helptext-icon-color-default:var(
--spectrum-helptext-disabled-content-color
)}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--spectrum-helptext-cjk-line-height:var(
--spectrum-CJK-line-height-100
)}:host([size=s]){--spectrum-helptext-min-height:var(
--spectrum-component-height-75
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-small
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host([size=m]){--spectrum-helptext-min-height:var(
--spectrum-component-height-75
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-medium
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-75
)}:host([size=l]){--spectrum-helptext-min-height:var(
--spectrum-component-height-100
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-helptext-font-size:var(--spectrum-font-size-100);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-large
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-100
)}:host([size=xl]){--spectrum-helptext-min-height:var(
--spectrum-component-height-200
);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-helptext-font-size:var(--spectrum-font-size-200);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-helptext-top-to-workflow-icon:var(
--spectrum-help-text-top-to-workflow-icon-extra-large
);--spectrum-helptext-bottom-to-workflow-icon:var(
--spectrum-helptext-top-to-workflow-icon
);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-helptext-bottom-to-text:var(
--spectrum-component-bottom-to-text-200
)}@media (forced-colors:active){:host{--highcontrast-helptext-content-color-default:CanvasText;--highcontrast-helptext-icon-color-default:CanvasText;forced-color-adjust:none}.icon,.text{forced-color-adjust:none}}:host{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
);display:flex;font-size:var(
--mod-helptext-font-size,var(--spectrum-helptext-font-size)
);min-height:var(
--mod-helptext-min-height,var(--spectrum-helptext-min-height)
)}.icon{flex-shrink:0;height:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));margin-inline-end:var(
--mod-helptext-text-to-visual,var(--spectrum-helptext-text-to-visual)
);padding-block-end:var(
--mod-helptext-bottom-to-workflow-icon,var(--spectrum-helptext-bottom-to-workflow-icon)
);padding-block-start:var(
--mod-helptext-top-to-workflow-icon,var(--spectrum-helptext-top-to-workflow-icon)
);width:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size))}.text{line-height:var(
--mod-helptext-line-height,var(--spectrum-helptext-line-height)
);padding-block-end:var(
--mod-helptext-bottom-to-text,var(--spectrum-helptext-bottom-to-text)
);padding-block-start:var(
--mod-helptext-top-to-text,var(--spectrum-helptext-top-to-text)
)}:host(:lang(ja)) .text,:host(:lang(ko)) .text,:host(:lang(zh)) .text{line-height:var(
--mod-helptext-cjk-line-height,var(--spectrum-helptext-cjk-line-height)
)}:host([variant=neutral]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([variant=neutral]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}:host([variant=negative]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([variant=negative]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}:host([disabled]) .text{color:var(
--highcontrast-helptext-content-color-default,var(
--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)
)
)}:host([disabled]) .icon{color:var(
--highcontrast-helptext-icon-color-default,var(
--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)
)
)}
`;var lo=Object.defineProperty,no=Object.getOwnPropertyDescriptor,uo=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?no(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&lo(e,r,s),s};class mo extends(w(u.o)){constructor(){super(...arguments),this.icon=!1,this.variant="neutral"}static get styles(){return[co]}render(){return t.dy`
            ${"negative"===this.variant&&this.icon?t.dy`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  `:t.Ld}
            <div class="text"><slot></slot></div>
        `}}uo([(0,d.Cb)({type:Boolean,reflect:!0})],mo.prototype,"icon",2),uo([(0,d.Cb)({reflect:!0})],mo.prototype,"variant",2),customElements.define("sp-help-text",mo);const po=t.iv`
:host{--spectrum-accordion-item-title-padding-y:var(
--spectrum-global-dimension-size-150
);--spectrum-accordion-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
)}:host{display:block;list-style:none;margin:0;padding:0}
`;var bo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,go=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?ho(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&bo(e,r,s),s};class vo extends u.o{constructor(){super(...arguments),this.allowMultiple=!1,this.focusGroupController=new _(this,{direction:"vertical",elements:()=>this.items,isFocusableElement:t=>!t.disabled})}static get styles(){return[po]}get items(){return[...this.defaultNodes||[]].filter((t=>void 0!==t.tagName))}focus(){this.focusGroupController.focus()}async onToggle(t){const e=t.target;if(await 0,this.allowMultiple||t.defaultPrevented)return;const r=[...this.items];r&&!r.length||r.forEach((t=>{t!==e&&(t.open=!1)}))}handleSlotchange(){this.focusGroupController.clearElementCache()}render(){return t.dy`
            <slot
                @slotchange=${this.handleSlotchange}
                @sp-accordion-item-toggle=${this.onToggle}
            ></slot>
        `}}go([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"allow-multiple"})],vo.prototype,"allowMultiple",2),go([(0,d.vZ)()],vo.prototype,"defaultNodes",2),customElements.define("sp-accordion",vo);const fo=t.iv`
:host([dir=ltr]) .indicator{left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{transform:matrix(-1,0,0,1,0,0)}.indicator{display:block;position:absolute;top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2);transition:transform ease var(--spectrum-accordion-animation-duration)}:host{border-bottom:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;display:list-item;margin:0;position:relative;z-index:inherit}:host(:first-of-type){border-top:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}#heading{box-sizing:border-box;margin:0}:host([dir=ltr]) #header{padding-left:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=rtl]) #header{padding-right:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=ltr]) #header{padding-right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #header{padding-left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr]) #header{text-align:left}:host([dir=rtl]) #header{text-align:right}#header{align-items:center;appearance:none;background-color:inherit;border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:var(
--spectrum-accordion-item-title-text-size,var(--spectrum-global-dimension-font-size-50)
);font-weight:500;justify-content:flex-start;letter-spacing:calc(var(
--spectrum-accordion-item-title-tracking,
var(--spectrum-global-font-letter-spacing-medium)
)/100);line-height:var(
--spectrum-accordion-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0;padding-bottom:var(--spectrum-accordion-item-title-padding-y);padding-top:var(--spectrum-accordion-item-title-padding-y);position:relative;text-overflow:ellipsis;text-transform:uppercase;width:100%}#header:focus{outline:none}:host([dir=ltr]) #header:focus:after{left:0}:host([dir=rtl]) #header:focus:after{right:0}#header:focus:after{bottom:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);content:"";position:absolute;top:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);width:var(
--spectrum-accordion-item-border-left-size,var(--spectrum-alias-border-size-thick)
)}#content{display:none;padding-bottom:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-left:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-right:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-top:0}:host([dir=ltr][open])>#heading>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#heading>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([dir=ltr][open])>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([open])>#content{display:block}:host([disabled]) #header{cursor:default}:host{border-color:var(
--spectrum-accordion-border-color,var(--spectrum-global-color-gray-300)
)}.indicator{color:var(
--spectrum-accordion-icon-color,var(--spectrum-global-color-gray-600)
)}#header{color:var(
--spectrum-accordion-text-color,var(--spectrum-global-color-gray-700)
)}#header:hover{background-color:var(
--spectrum-accordion-item-background-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-accordion-text-color-hover,var(--spectrum-global-color-gray-900)
)}#header:hover+.indicator{color:var(
--spectrum-accordion-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}#header.focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#header:focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([open]) #header:hover{background-color:transparent}:host([disabled]) #header,:host([disabled]) #header.focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header,:host([disabled]) #header:focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header+.indicator{color:var(
--spectrum-accordion-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}@media (forced-colors:active){#header.focus-visible{outline:3px solid CanvasText}#header:focus-visible{outline:3px solid CanvasText}}:host{--spectrum-accordion-item-header-height:46px}#indicator{top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2)}#heading{height:auto;position:relative}#header{min-height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([open])>#header:after{height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}
`;var xo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,ko=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?yo(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&xo(e,r,s),s};class wo extends ${constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}static get styles(){return[fo,$e]}get focusElement(){return this.shadowRoot.querySelector("#header")}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return t.dy`
            <h3 id="heading">
                <button
                    id="header"
                    @click=${this.onClick}
                    aria-expanded=${this.open}
                    aria-controls="content"
                    ?disabled=${this.disabled}
                >
                    ${this.label}
                </button>
                <sp-icon-chevron100
                    class="indicator spectrum-UIIcon-ChevronRight100"
                ></sp-icon-chevron100>
            </h3>
            <div id="content" role="region" aria-labelledby="header">
                <slot></slot>
            </div>
        `}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}ko([(0,d.Cb)({type:Boolean,reflect:!0})],wo.prototype,"open",2),ko([(0,d.Cb)({type:String,reflect:!0})],wo.prototype,"label",2),ko([(0,d.Cb)({type:Boolean,reflect:!0})],wo.prototype,"disabled",2),customElements.define("sp-accordion-item",wo);const zo=t.iv`
:host{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
)}:host{list-style-type:none;margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`,Co=t.iv`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-bottom:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
)}#item-link{align-items:center;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;cursor:pointer;display:inline-flex;font-size:var(
--spectrum-sidenav-item-text-size,var(--spectrum-alias-font-size-default)
);font-style:normal;font-weight:var(
--spectrum-sidenav-item-text-font-weight,var(--spectrum-global-font-weight-regular)
);-webkit-hyphens:auto;hyphens:auto;justify-content:left;min-height:var(
--spectrum-sidenav-item-height,var(--spectrum-alias-single-line-height)
);padding:var(--spectrum-sidenav-item-padding-y) var(
--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)
);position:relative;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out;width:100%;word-break:break-word}#item-link:focus{outline:none}#item-link:before{border:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #item-link ::slotted([slot=icon]){margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) #item-link ::slotted([slot=icon]){margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}#item-link ::slotted([slot=icon]){flex-shrink:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-right:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-left:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-left:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-right:0}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([selected])>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-selected,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-selected,var(--spectrum-alias-text-color-hover)
)}.is-active>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}:host([disabled]) #item-link{background-color:var(
--spectrum-sidenav-item-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default;pointer-events:none}#item-link{background-color:var(
--spectrum-sidenav-item-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color,var(--spectrum-alias-text-color)
)}#item-link:hover{background-color:var(
--spectrum-sidenav-item-background-color-hover,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#item-link:active{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}#item-link.focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link:focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link:focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}@media (forced-colors:active){:host{--spectrum-sidenav-item-text-color-selected:HighlightText;--spectrum-sidenav-item-background-color-selected:Highlight;--spectrum-sidenav-item-background-color-disabled:ButtonFace;--spectrum-sidenav-item-text-color-disabled:GrayText;--spectrum-sidenav-item-background-color:ButtonFace;--spectrum-sidenav-item-text-color:ButtonText;--spectrum-sidenav-item-background-color-hover:ButtonFace;--spectrum-sidenav-item-text-color-hover:ButtonText;--spectrum-sidenav-item-background-color-down:ButtonFace;--spectrum-sidenav-item-background-color-key-focus:ButtonFace;--spectrum-sidenav-item-text-color-key-focus:ButtonText;--spectrum-sidenav-item-border-color-key-focus:ButtonText;forced-color-adjust:none}}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,700
)}::slotted(sp-sidenav-item:not([multiLevel])){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,400
)}#item-link{font-weight:var(--spectrum-web-component-sidenav-font-weight);justify-content:start}:host([dir=ltr]) #item-link[data-level="1"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) #item-link[data-level="2"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="1"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="2"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}a ::slotted(sp-sidenav-item){display:none}
`;var Io=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Eo=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?qo(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Io(e,r,s),s};const So=class extends(lt($)){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[Co]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let t=0,e=this.parentElement;for(;e instanceof So;)t++,e=e.parentElement;return t}handleSideNavSelect(t){this.selected=t.target===this}handleClick(t){!this.href&&t&&t.preventDefault(),this.disabled||(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(t){const e=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:{value:t}});this.dispatchEvent(e)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <a
                href=${this.href||"#"}
                target=${(0,z.o)(this.target)}
                download=${(0,z.o)(this.download)}
                rel=${(0,z.o)(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${(0,z.o)(this.selected&&this.href?"page":void 0)}
            >
                <slot name="icon"></slot>
                ${this.label}
                <slot></slot>
            </a>
            ${this.expanded?t.dy`
                      <slot name="descendant"></slot>
                  `:t.dy``}
        `}updated(t){this.hasChildren&&this.expanded&&!this.selected&&(this.focusElement.tabIndex=-1),super.updated(t)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const t=this.parentSideNav;t&&(await t.updateComplete,t.startTrackingSelectionForItem(this),this.selected=null!=this.value&&this.value===t.value)}stopTrackingSelection(){const t=this.parentSideNav;t&&t.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}};let Ao=So;Eo([(0,d.Cb)()],Ao.prototype,"value",2),Eo([(0,d.Cb)({type:Boolean,reflect:!0})],Ao.prototype,"selected",2),Eo([(0,d.Cb)({type:Boolean,reflect:!0})],Ao.prototype,"expanded",2);const $o=t.iv`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host([dir=ltr]) #heading{margin-right:0}:host([dir=rtl]) #heading{margin-left:0}:host([dir=ltr]) #heading{margin-left:0}:host([dir=rtl]) #heading{margin-right:0}#heading{border-radius:var(
--spectrum-sidenav-heading-border-radius,var(--spectrum-alias-border-radius-regular)
);color:var(
--spectrum-sidenav-heading-text-color,var(--spectrum-global-color-gray-700)
);font-size:var(
--spectrum-sidenav-heading-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:normal;font-weight:var(
--spectrum-sidenav-heading-text-font-weight,var(--spectrum-global-font-weight-medium)
);height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);letter-spacing:var(
--spectrum-sidenav-heading-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);margin-bottom:var(
--spectrum-sidenav-heading-gap-bottom,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-sidenav-heading-gap-top,var(--spectrum-global-dimension-size-200)
);padding-bottom:0;padding-left:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-right:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-top:0;text-transform:uppercase}:host{display:block}
`;var _o=Object.defineProperty;Object.getOwnPropertyDescriptor;class To extends u.o{constructor(){super(...arguments),this.label=""}static get styles(){return[Co,$o]}update(t){this.hasAttribute("slot")||(this.slot="descendant"),super.update(t)}render(){return t.dy`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading">
                <slot name="descendant"></slot>
            </div>
        `}}((t,e,r,o)=>{for(var a,s=void 0,i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&_o(e,r,s)})([(0,d.Cb)({reflect:!0})],To.prototype,"label");var Uo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Lo=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?Po(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Uo(e,r,s),s};class Oo extends ${constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new T(this,{focusInIndex:t=>t.findIndex((t=>this.value?!t.disabled&&!this.isDisabledChild(t)&&t.value===this.value:!t.disabled&&!this.isDisabledChild(t))),direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:t=>!t.disabled&&!this.isDisabledChild(t)}),this.manageTabIndex=!1,this.value=void 0}static get styles(){return[zo]}startTrackingSelectionForItem(t){this.items.add(t),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(t){this.items.delete(t),this.rovingTabindexController.clearElementCache()}handleSelect(t){if(t.stopPropagation(),this.value===t.detail.value)return;const e=this.value;this.value=t.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach((e=>e.handleSideNavSelect(t))):(this.value=e,t.target.selected=!1,t.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(t){if(t.disabled)return!0;let e=t.parentElement;for(;e instanceof To||!e.disabled&&e instanceof Ao&&e.expanded;)e=e.parentElement;return e!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return t.dy`
            <nav @sidenav-select=${this.handleSelect}>
                <slot
                    name="descendant"
                    @slotchange=${this.handleSlotchange}
                ></slot>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){const t=this.querySelector("[selected]");t&&(this.value=t.value)}}updated(t){super.updated(t),t.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}Lo([(0,d.Cb)({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],Oo.prototype,"manageTabIndex",2),Lo([(0,d.Cb)({reflect:!0})],Oo.prototype,"value",2),customElements.define("sp-sidenav",Oo),customElements.define("sp-sidenav-heading",To),customElements.define("sp-sidenav-item",Ao);const Fo=t.iv`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(--spectrum-font-family-base);line-height:var(--spectrum-line-height-small);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-animation-duration-100) ease-out,border-color var(--spectrum-animation-duration-100) ease-out,color var(--spectrum-animation-duration-100) ease-out,box-shadow var(--spectrum-animation-duration-100) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-block-end:-2px;margin-block-start:-2px;padding:0}:host(:disabled){cursor:default}:host{--spectrum-closebutton-size-300:24px;--spectrum-closebutton-size-400:32px;--spectrum-closebutton-size-500:40px;--spectrum-closebutton-size-600:48px;--spectrum-closebutton-icon-color-default:var(
--spectrum-neutral-content-color-default
);--spectrum-closebutton-icon-color-hover:var(
--spectrum-neutral-content-color-hover
);--spectrum-closebutton-icon-color-down:var(
--spectrum-neutral-content-color-down
);--spectrum-closebutton-icon-color-focus:var(
--spectrum-neutral-content-color-key-focus
);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-closebutton-focus-ring-thickness:var(
--spectrum-focus-ring-thickness
);--spectrum-closebutton-focus-ring-gap:var(--spectrum-focus-ring-gap);--spectrum-closebutton-focus-ring-color:var(--spectrum-focus-ring-color);--spectrum-closebutton-height:var(--spectrum-component-height-100);--spectrum-closebutton-width:var(--spectrum-closebutton-height);--spectrum-closebutton-size:var(--spectrum-closebutton-size-400);--spectrum-closebutton-border-radius:var(--spectrum-closebutton-size-400);--spectrum-closebutton-animation-duration:var(
--spectrum-animation-duration-100
)}:host([variant=white]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-white-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-white-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-white);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-white-content-color
);--spectrum-closebutton-focus-ring-color:var(
--spectrum-static-white-focus-ring-color
)}:host([variant=black]){--spectrum-closebutton-static-background-color-default:transparent;--spectrum-closebutton-static-background-color-hover:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-static-background-color-down:var(
--spectrum-transparent-black-400
);--spectrum-closebutton-static-background-color-focus:var(
--spectrum-transparent-black-300
);--spectrum-closebutton-icon-color-default:var(--spectrum-black);--spectrum-closebutton-icon-color-disabled:var(
--spectrum-disabled-static-black-content-color
);--spectrum-closebutton-focus-ring-color:var(
--spectrum-static-black-focus-ring-color
)}@media (forced-colors:active){:host{--highcontrast-closebutton-icon-color-disabled:GrayText;--highcontrast-closebutton-icon-color-down:Highlight;--highcontrast-closebutton-icon-color-hover:Highlight;--highcontrast-closebutton-icon-color-focus:Highlight;--highcontrast-closebutton-background-color-default:ButtonFace;--highcontrast-closebutton-focus-ring-color:ButtonText}:host(.focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--mod-closebutton-focus-ring-thickness,var(--spectrum-closebutton-focus-ring-thickness)
) var(
--highcontrast-closebutton-focus-ring-color,var(
--mod-closebutton-focus-ring-color,var(--spectrum-closebutton-focus-ring-color)
)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--mod-closebutton-focus-ring-gap,var(--spectrum-closebutton-focus-ring-gap)
);position:absolute;right:0;top:0;transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host(:focus-visible):after{border-radius:100%;bottom:0;box-shadow:0 0 0 var(
--mod-closebutton-focus-ring-thickness,var(--spectrum-closebutton-focus-ring-thickness)
) var(
--highcontrast-closebutton-focus-ring-color,var(
--mod-closebutton-focus-ring-color,var(--spectrum-closebutton-focus-ring-color)
)
);content:"";display:block;forced-color-adjust:none;left:0;margin:var(
--mod-closebutton-focus-ring-gap,var(--spectrum-closebutton-focus-ring-gap)
);position:absolute;right:0;top:0;transition:opacity var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-out,margin var(
--mod-closebutton-animation-duraction,var(--spectrum-closebutton-animation-duration)
) ease-out}:host([variant=black]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:GrayText}:host([variant=white]){--highcontrast-closebutton-static-background-color-default:ButtonFace;--highcontrast-closebutton-icon-color-default:Highlight;--highcontrast-closebutton-icon-color-disabled:Highlight}}:host{align-items:center;border-color:transparent;border-radius:var(
--mod-closebutton-border-radius,var(--spectrum-closebutton-border-radius)
);border-width:0;color:inherit;display:inline-flex;flex-direction:row;height:var(
--mod-closebutton-height,var(--spectrum-closebutton-height)
);justify-content:center;padding:0;position:relative;transition:border-color var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out;width:var(--mod-closebutton-width,var(--spectrum-closebutton-width))}:host:after{border-radius:calc(var(--mod-closebutton-size, var(--spectrum-closebutton-size)) + var(
--mod-closebutton-focus-ring-gap,
var(--spectrum-closebutton-focus-ring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--mod-closebutton-focus-ring-gap,
var(--spectrum-closebutton-focus-ring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(
--mod-closebutton-animation-duration,var(--spectrum-closebutton-animation-duration)
) ease-in-out}:host(.focus-visible){box-shadow:none}:host(:focus-visible){box-shadow:none}:host(.focus-visible):after{box-shadow:0 0 0 var(
--mod-closebutton-focus-ring-thickness,var(--spectrum-closebutton-focus-ring-thickness)
) var(
--highcontrast-closebutton-focus-ring-color,var(
--mod-closebutton-focus-ring-color,var(--spectrum-closebutton-focus-ring-color)
)
)}:host(:focus-visible):after{box-shadow:0 0 0 var(
--mod-closebutton-focus-ring-thickness,var(--spectrum-closebutton-focus-ring-thickness)
) var(
--highcontrast-closebutton-focus-ring-color,var(
--mod-closebutton-focus-ring-color,var(--spectrum-closebutton-focus-ring-color)
)
)}:host(:not(:disabled)){background-color:var(
--highcontrast-closebutton-background-color-default,var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)
)}:host(:not(:disabled):hover){background-color:var(
--mod-closebutton-background-color-hover,var(--spectrum-closebutton-background-color-hover)
)}:host(:not(:disabled):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-hover,var(
--mod-closebutton-icon-color-hover,var(--spectrum-closebutton-icon-color-hover)
)
)}:host(:not(:disabled)[active]){background-color:var(
--mod-closebutton-background-color-down,var(--spectrum-closebutton-background-color-down)
)}:host(:not(:disabled)[active]) .icon{color:var(
--highcontrast-closebutton-icon-color-down,var(
--mod-closebutton-icon-color-down,var(--spectrum-closebutton-icon-color-down)
)
)}:host(:not(:disabled).focus-visible),:host(:not(:disabled)[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not(:disabled):focus-visible),:host(:not(:disabled)[focused]){background-color:var(
--mod-closebutton-background-color-focus,var(--spectrum-closebutton-background-color-focus)
)}:host(:not(:disabled).focus-visible) .icon,:host(:not(:disabled)[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not(:disabled):focus-visible) .icon,:host(:not(:disabled)[focused]) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:not(:disabled)) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host(:not(:disabled).is-focused) .icon,:host(:not(:disabled):focus) .icon{color:var(
--highcontrast-closebutton-icon-color-focus,var(
--mod-closebutton-icon-color-focus,var(--spectrum-closebutton-icon-color-focus)
)
)}:host(:disabled){background-color:var(
--mod-closebutton-background-color-default,var(--spectrum-closebutton-background-color-default)
)}:host(:disabled) .icon{color:var(
--highcontrast-closebutton-icon-color-disabled,var(
--mod-closebutton-icon-color-disabled,var(--spectrum-closebutton-icon-color-disabled)
)
)}:host([variant=black]:not(:disabled)),:host([variant=white]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-default,var(
--mod-closebutton-static-background-color-default,var(--spectrum-closebutton-static-background-color-default)
)
)}:host([variant=black]:not(:disabled):hover),:host([variant=white]:not(:disabled):hover){background-color:var(
--highcontrast-closebutton-static-background-color-hover,var(
--mod-closebutton-static-background-color-hover,var(--spectrum-closebutton-static-background-color-hover)
)
)}:host([variant=black]:not(:disabled):hover) .icon,:host([variant=white]:not(:disabled):hover) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black][active]:not(:disabled)),:host([variant=white][active]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-down,var(
--mod-closebutton-static-background-color-down,var(--spectrum-closebutton-static-background-color-down)
)
)}:host([variant=black][active]:not(:disabled)) .icon,:host([variant=white][active]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled).focus-visible),:host([variant=black][focused]:not(:disabled)),:host([variant=white]:not(:disabled).focus-visible),:host([variant=white][focused]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([variant=black]:not(:disabled):focus-visible),:host([variant=black][focused]:not(:disabled)),:host([variant=white]:not(:disabled):focus-visible),:host([variant=white][focused]:not(:disabled)){background-color:var(
--highcontrast-closebutton-static-background-color-focus,var(
--mod-closebutton-static-background-color-focus,var(--spectrum-closebutton-static-background-color-focus)
)
)}:host([variant=black]:not(:disabled).focus-visible) .icon,:host([variant=black][focused]:not(:disabled)) .icon,:host([variant=white]:not(:disabled).focus-visible) .icon,:host([variant=white][focused]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled):focus-visible) .icon,:host([variant=black][focused]:not(:disabled)) .icon,:host([variant=white]:not(:disabled):focus-visible) .icon,:host([variant=white][focused]:not(:disabled)) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled)) .is-focused .icon,:host([variant=black]:not(:disabled):focus) .icon,:host([variant=white]:not(:disabled)) .is-focused .icon,:host([variant=white]:not(:disabled):focus) .icon{color:var(
--highcontrast-closebutton-icon-color-default,var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)
)}:host([variant=black]:not(:disabled)) .icon,:host([variant=white]:not(:disabled)) .icon{color:var(
--mod-closebutton-icon-color-default,var(--spectrum-closebutton-icon-color-default)
)}:host([variant=black]:disabled) .icon,:host([variant=white]:disabled) .icon{color:var(
--highcontrast-closebutton-icon-disabled,var(
--mod-closebutton-icon-color-disabled,var(--spectrum-closebutton-icon-color-disabled)
)
)}.icon{margin:0}:host{--spectrum-closebutton-background-color-default:var(
--system-spectrum-closebutton-background-color-default
);--spectrum-closebutton-background-color-hover:var(
--system-spectrum-closebutton-background-color-hover
);--spectrum-closebutton-background-color-down:var(
--system-spectrum-closebutton-background-color-down
);--spectrum-closebutton-background-color-focus:var(
--system-spectrum-closebutton-background-color-focus
)}
`;customElements.define("sp-icon-cross75",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`}}),customElements.define("sp-icon-cross100",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`}}),customElements.define("sp-icon-cross200",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`}}),customElements.define("sp-icon-cross300",class extends g{render(){return vt(t.dy),gt`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`}});const Bo=t.iv`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}
`;var Do=Object.defineProperty;Object.getOwnPropertyDescriptor;const jo={s:()=>t.dy`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>t.dy`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>t.dy`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>t.dy`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class Mo extends(w(St)){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,Fo,Bo]}get buttonContent(){return[jo[this.size]()]}}((t,e,r,o)=>{for(var a,s=void 0,i=t.length-1;i>=0;i--)(a=t[i])&&(s=a(e,r,s)||s);s&&Do(e,r,s)})([(0,d.Cb)({reflect:!0})],Mo.prototype,"variant"),customElements.define("sp-close-button",Mo),customElements.define("sp-icon-info",class extends g{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Info"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-checkmark-circle",class extends g{render(){return x(t.dy),(({width:t=24,height:e=24,hidden:r=!1,title:o="Checkmark Circle"}={})=>f`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${t}"
    height="${e}"
    viewBox="0 0 36 36"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});const Ho=t.iv`
:host{--spectrum-toast-icon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-toast-neutral-content-padding-top:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-content-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-button-margin-right:var(
--spectrum-global-dimension-size-130
)}:host([dir=ltr]){padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]){padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]){padding-left:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]){padding-right:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host{-webkit-font-smoothing:antialiased;align-items:stretch;border-radius:var(
--spectrum-toast-neutral-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-toast-neutral-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-neutral-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);padding-bottom:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
);padding-top:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .type{margin-right:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl]) .type{margin-left:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=ltr]) .type{margin-left:0}:host([dir=rtl]) .type{margin-right:0}.type{flex-grow:0;flex-shrink:0;margin-bottom:var(--spectrum-toast-icon-padding-y);margin-top:var(--spectrum-toast-icon-padding-y)}:host([dir=ltr]) .content{padding-right:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .content{padding-left:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=ltr]) .content{padding-left:0}:host([dir=rtl]) .content{padding-right:0}:host([dir=ltr]) .content{text-align:left}:host([dir=rtl]) .content{text-align:right}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;font-size:var(
--spectrum-toast-info-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-info-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:var(
--spectrum-toast-info-text-line-height,var(--spectrum-alias-component-text-line-height)
);padding-bottom:var(--spectrum-toast-content-padding-bottom);padding-top:var(
--spectrum-toast-neutral-content-padding-top,var(--spectrum-global-dimension-size-65)
)}.buttons{align-items:flex-start;display:flex;flex:0 0 auto}:host([dir=ltr]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=ltr]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=ltr]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=ltr]) .buttons slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=rtl]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=rtl]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=rtl]) .buttons slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}.body{align-self:center;flex:1 1 auto}:host([dir=ltr]) .body ::slotted([slot=action]){float:right}:host([dir=rtl]) .body ::slotted([slot=action]){float:left}:host([dir=ltr]) .body ::slotted([slot=action]){margin-right:var(
--spectrum-toast-button-margin-right
)}:host([dir=rtl]) .body ::slotted([slot=action]){margin-left:var(
--spectrum-toast-button-margin-right
)}:host([dir=ltr]) .body+.buttons{padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .body+.buttons{padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .body+.buttons{border-left-width:1px}:host([dir=rtl]) .body+.buttons{border-right-width:1px}:host([dir=ltr]) .body+.buttons{border-left-style:solid}:host([dir=rtl]) .body+.buttons{border-right-style:solid}:host{background-color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.content{color:var(
--spectrum-toast-neutral-text-color,var(--spectrum-global-color-static-white)
)}.type{color:#fff}:host([dir=ltr]) .buttons{border-left-color:hsla(0,0%,100%,.2)}:host([dir=rtl]) .buttons{border-right-color:hsla(0,0%,100%,.2)}:host([variant=error]),:host([variant=negative]){background-color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
);color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton.focus-visible:not(:active),:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton:focus-visible:not(:active),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=info]){background-color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
);color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=positive]),:host([variant=success]){background-color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
);color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active),:host([variant=success]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active),:host([variant=success]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}@media (forced-colors:active){:host{border:1px solid transparent}}.content{line-height:1.5}:host(:not([open])){display:none}
`;var Ro=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Vo=(t,e,r,o)=>{for(var a,s=o>1?void 0:o?No(e,r):e,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Ro(e,r,s),s};const Ko=["negative","positive","info","error","warning"];class Go extends u.o{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[Ho]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,r=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",r)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;Ko.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(e){switch(e){case"info":return t.dy`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return t.dy`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return t.dy`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return t.dy``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return t.dy`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    variant="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}Vo([(0,d.Cb)({type:Boolean,reflect:!0})],Go.prototype,"open",2),Vo([(0,d.Cb)({type:Number})],Go.prototype,"timeout",1),Vo([(0,d.Cb)({type:String})],Go.prototype,"variant",1),customElements.define("sp-toast",Go)})()})();