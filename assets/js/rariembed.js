/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
 var t,i,s,e;const o=globalThis.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,a=`<${l}>`,h=document,d=(t="")=>h.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u=/-->/g,f=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,b=/"/g,y=/^(?:script|style|textarea)$/i,w=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),x=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),S=new WeakMap,E=h.createTreeWalker(h,129,null,!1);class C{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let h=0,c=0;const v=t.length-1,w=this.parts,[x,$]=((t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",h=p;for(let i=0;i<s;i++){const s=t[i];let r,d,c=-1,v=0;for(;v<s.length&&(h.lastIndex=v,d=h.exec(s),null!==d);)v=h.lastIndex,h===p?"!--"===d[1]?h=u:void 0!==d[1]?h=f:void 0!==d[2]?(y.test(d[2])&&(o=RegExp("</"+d[2],"g")),h=m):void 0!==d[3]&&(h=m):h===m?">"===d[0]?(h=null!=o?o:p,c=-1):void 0===d[1]?c=-2:(c=h.lastIndex-d[2].length,r=d[1],h=void 0===d[3]?m:'"'===d[3]?b:g):h===b||h===g?h=m:h===u||h===f?h=p:(h=m,o=void 0);const w=h===m&&t[i+1].startsWith("/>")?" ":"";l+=h===p?s+a:c>=0?(e.push(r),s.slice(0,c)+"$lit$"+s.slice(c)+n+w):s+n+(-2===c?(e.push(void 0),i):w)}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==r?r.createHTML(d):d,e]})(t,i);if(this.el=C.createElement(x,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=E.nextNode())&&w.length<v;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n)){const s=$[c++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n),i=/([.?@])?(.*)/.exec(s);w.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?O:"?"===i[1]?T:"@"===i[1]?M:I})}else w.push({type:6,index:h})}for(const i of t)e.removeAttribute(i)}if(y.test(e.tagName)){const t=e.textContent.split(n),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),E.nextNode(),w.push({type:2,index:++h});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===l)w.push({type:2,index:h});else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)w.push({type:7,index:h}),t+=n.length-1}h++}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function k(t,i,s=t,e){var o,r,n,l;if(i===x)return i;let a=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const h=c(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a.O)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,s,e)),void 0!==e?(null!==(n=(l=s).Σi)&&void 0!==n?n:l.Σi=[])[e]=a:s.Σo=a),void 0!==a&&(i=k(t,a.S(t,i.values),a,e)),i}class R{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);E.currentNode=o;let r=E.nextNode(),n=0,l=0,a=e[0];for(;void 0!==a;){if(n===a.index){let i;2===a.type?i=new A(r,r.nextSibling,this,t):1===a.type?i=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(i=new L(r,this,t)),this.l.push(i),a=e[++l]}n!==(null==a?void 0:a.index)&&(r=E.nextNode(),n++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class A{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=k(this,t,i),c(t)?t===$||null==t||""===t?(this.H!==$&&this.R(),this.H=$):t!==this.H&&t!==x&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(h.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new R(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=S.get(t.strings);return void 0===i&&S.set(t.strings,i=new C(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new A(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class I{constructor(t,i,s,e,o){this.type=1,this.H=$,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill($),this.strings=s):this.H=$}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let r=!1;if(void 0===o)t=k(this,t,i,0),r=!c(t)||t!==this.H&&t!==x,r&&(this.H=t);else{const e=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=k(this,e[s+n],i,n),l===x&&(l=this.H[n]),r||(r=!c(l)||l!==this.H[n]),l===$?t=$:t!==$&&(t+=(null!=l?l:"")+o[n+1]),this.H[n]=l}r&&!e&&this.W(t)}W(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends I{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===$?void 0:t}}class T extends I{constructor(){super(...arguments),this.type=4}W(t){t&&t!==$?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class M extends I{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=k(this,t,i,0))&&void 0!==s?s:$)===x)return;const e=this.H,o=t===$&&e!==$||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==$&&(e===$||o);o&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){k(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,C,A),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
 /**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 const N=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol();class _{constructor(t,i){if(i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return N&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const j=new Map,z=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof _)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=j.get(s);return void 0===e&&j.set(s,e=new _(s,P)),e},U=(t,i)=>{N?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))},H=N?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new _(t+"",P))(i)})(t):t
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */;var B,W,G,D;const F={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},Z=(t,i)=>i!==t&&(i==i||t==t),V={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:Z};class J extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=V){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(H(t))}else void 0!==t&&i.push(H(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return U(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=V){var e,o;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:F.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null}}K(t,i){var s,e,o;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:F.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Z)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 var q,K,X,Y,Q,tt;J.finalized=!0,J.shadowRootOptions={mode:"open"},null===(W=(B=globalThis).reactiveElementPlatformSupport)||void 0===W||W.call(B,{ReactiveElement:J}),(null!==(G=(D=globalThis).reactiveElementVersions)&&void 0!==G?G:D.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(q=(tt=globalThis).litElementVersions)&&void 0!==q?q:tt.litElementVersions=[]).push("3.0.0-rc.1");class it extends J{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new A(i.insertBefore(d(),t),t,void 0,s)}return n.I(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x}}it.finalized=!0,it._$litElement$=!0,null===(X=(K=globalThis).litElementHydrateSupport)||void 0===X||X.call(K,{LitElement:it}),null===(Q=(Y=globalThis).litElementPlatformSupport)||void 0===Q||Q.call(Y,{LitElement:it});
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 const st=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
 /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */,et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function ot(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):et(t,i)}
 /**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 var rt=function(t,i,s,e){for(var o,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(i,s,n):o(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n};let nt=class extends it{render(){return w`<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`}};nt.styles=z`.lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:grey;animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0,0)}100%{transform:translate(24px,0)}}`,nt=rt([st("loader-element")],nt);
 /**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
 var lt=function(t,i,s,e){for(var o,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(i,s,n):o(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n};let at=class extends it{constructor(){super(...arguments),this.tokenAddress="",this.contractAddress="",this.tokenId="",this.blockchain="ETHEREUM",this.width="375px",this.height="250px",this.name="",this.illustrationUrl="",this.illustrationType="",this.objAttributes=[],this.collectionId="",this.collectionName="",this.collectionAvatar="",this.ownerId="",this.ownerName="",this.ownerAvatar="",this.owners=[],this.cryptoPrice="",this.cryptoCurrency="",this.usdPrice="",this.forSale=!1,this.saleType="",this.loading=!0,this.darkMode=!1}async connectedCallback(){super.connectedCallback(),this.blockchain=this.blockchain.toUpperCase(),this.width=this.width?this.width:"25%",this.height=this.height?this.height:"210px";try{let t=await async function(t,i,s="ETHEREUM"){let e=`${s.toUpperCase()}:${t}:${i}`;return await fetch(`https://api.rarible.org/v0.1/items/${e}`,{method:"GET",headers:{"Content-type":"application/json;"}}).then((t=>t.json())).then((t=>{if(t.status>=400&&t.status<600)throw new Error(`RARIBLE API ERROR: ${t.error}`);return t})).then((t=>t)).catch((t=>{throw console.log("error",t),new Error("RARIBLE API"+t)}))}(this.tokenAddress,this.tokenId,this.blockchain),{meta:i,contract:s}=t,{name:e,attributes:o,content:r}=i;this.name=e,this.contractAddress=s,this.objAttributes=o;let n=r.find((t=>"PREVIEW"===t.representation||"ORIGINAL"===t.representation));if(n&&(this.illustrationUrl=n.url,this.illustrationType=n["@type"],n.url.indexOf("ipfs://ipfs")>-1&&("IMAGE"===n["@type"]?this.illustrationUrl=`https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/${t.id.replace(":","-")}`:"VIDEO"===n["@type"]&&(this.illustrationUrl=`https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/${t.id.replace(":","-")}`))),void 0!==t.bestBidOrder){this.forSale=!0,this.saleType="bid";let i=t.bestBidOrder;this.cryptoPrice=i.takePrice,this.usdPrice=i.takePriceUsd,this.cryptoCurrency=t.blockchain}else if(void 0!==t.bestSellOrder){this.forSale=!0,this.saleType="sale";let i=t.bestSellOrder;this.cryptoPrice=i.makePrice,this.usdPrice=i.makePriceUsd,this.cryptoCurrency=t.blockchain}}catch(t){console.log("SOMETHING WENT WRONG",t)}try{let t=await async function(t,i,s="ETHEREUM"){let e=`${s.toUpperCase()}:${t}:${i}`;return await fetch(`https://api.rarible.org/v0.1/ownerships/byItem?itemId=${e}`,{method:"GET",headers:{"Content-type":"application/json;"}}).then((t=>t.json())).then((t=>{if(t.status>=400&&t.status<600)throw new Error(`RARIBLE API ERROR: ${t.error}`);return t})).then((t=>t.ownerships)).catch((t=>{throw console.log("error",t),new Error("RARIBLE API"+t)}))}(this.tokenAddress,this.tokenId,this.blockchain);if(t&&t.length>0){let i=t.map((t=>t.owner)),s=await async function(t){let i=t.map((t=>t.replace(":","-")));return await fetch("https://api-mainnet.rarible.com/marketplace/api/v4/profiles/list",{method:"POST",headers:{"Content-type":"application/json;"},body:JSON.stringify(i)}).then((t=>t.json())).then((t=>{if(t.status>=400&&t.status<600)throw new Error(`getOwnerDetails RARIBLE API ERROR: ${t.error}`);return t})).then((t=>t)).catch((t=>{throw console.log("error",t),new Error("getOwnerDetails RARIBLE API"+t)}))}(i.slice(0,3));console.log("ownerDetails",s),this.owners=s.map((t=>({name:t.name||t.id.slice(0,5)+"...",id:t.id,shortUrl:t.shortUrl||"",verified:t.badges.indexOf("VERIFIED")>-1,avatar:t.image?`https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/${t.id}/avatar/${t.image.replaceAll("ipfs://ipfs/","")}`:"https://theme.zdassets.com/theme_assets/10342982/bb8d2a7ec0e54ad27a114410b18e9716a3bf9883.png"})))}}catch(t){console.log("SOMETHING WENT WRONG",t)}await fetch(`https://hyd07vaa2c.execute-api.us-east-1.amazonaws.com/mainnet/marketplace/api/v4/collections/${this.blockchain}-${this.tokenAddress}`).then((t=>t.json())).then((t=>{if(t.status>=400&&t.status<600)throw new Error(`RARIBLE API ERROR: ${t.error}`);return t})).then((t=>{this.collectionName=t.name,this.collectionAvatar=t.pic?`https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/${this.contractAddress.replace(":","-")}/avatar/${t.pic.replaceAll("ipfs://ipfs/","")}`:"https://theme.zdassets.com/theme_assets/10342982/bb8d2a7ec0e54ad27a114410b18e9716a3bf9883.png"})).catch((t=>{console.log("error",t)})),this.loading=!1}renderLoader(){return console.log("loader"),w`<loader-element></loader-element>`}getCurrencySymbol(t){let i={symbol:"Ξ",name:"ETH"};switch(t){case"ETHEREUM":i={symbol:"Ξ",name:"ETH"};break;case"FLOW":i={symbol:"F",name:"FLOW"};break;case"TEZOS":i={symbol:"F",name:"XTZ"};break;default:return{symbol:"Ξ",name:"ETH"}}return i}renderPrice(t){return t?w`<div class="flex" style="align-items:center;gap:1px"><span style="font-size:25px">${parseFloat(this.cryptoPrice).toFixed(2)} ${this.getCurrencySymbol(this.cryptoCurrency).name}</span> <span style="color:grey">$${parseFloat(this.usdPrice).toFixed(2)} USD</span></div>`:w`<div class="flex"><p>Not for sale</p></div>`}renderCard(){return w`<div class="asset-container"><a href="https://rarible.com/token/${this.tokenAddress}:${this.tokenId}">${"IMAGE"===this.illustrationType?w`<img src="${this.illustrationUrl}" alt="${this.name}" title="${this.name}">`:w`<video loop autoplay muted height="100%" alt="${this.name}" title="${this.name}"><source src="${this.illustrationUrl}" type="video/mp4">Your browser does not support the video tag</video>`}</a></div><div class="details"><div class="ownershipAndCollection"><div><span class="sectionHeader">Collection</span><div class="collection"><div class="flex avatar-container"><img class="avatar" src="${this.collectionAvatar}" alt="${this.collectionName}" title="${this.collectionName}"></div><div class="desc-container"><a href="https://rarible.com/collection/${this.tokenAddress}" target="_blank"><span>${this.collectionName}</span></a></div></div></div>${this.owners&&this.owners.length>0?w`<div><span class="sectionHeader">Owner</span><div class="collection">${this.owners.map((t=>w`<div class="flex avatar-container"><img class="avatar" src="${t.avatar}" alt="${t.name}" title="${t.name}"> ${t.verified?w`<svg class="verifiedIcon" width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>`:""}</div><div class="desc-container"><a href="https://rarible.com/users/${t.shortUrl||t.id}" target="_blank"><span>${t.name}</span></a></div>`))}</div></div>`:""}</div><div class="flex"><p>${this.name}</p></div>${this.renderPrice(this.forSale)}<div style="margin-top:1px"><button class="button"><a target="_blank" href="https://rarible.com/token/${this.tokenAddress}:${this.tokenId}">See ❯</a></button></div></div>`}render(){return w`<style>@font-face{font-weight:100;font-family:'Circular Std';src:local('Circular Std Medium'),url(https://rarible.com/fb3a34fc1c30b5120300.woff) format('woff'),url(https://rarible.com/9eac4707a63fe42da7d6.woff2) format('woff2')}@font-face{font-weight:700;font-family:'Circular Std';src:local('Circular Std Black'),url(https://rarible.com/4af43345ede3fd952823.woff) format('woff'),url(https://rarible.com/0dd92fa15d777f537028.woff2) format('woff2')}</style><div class="card ${this.darkMode?"dark":"white"}" style="width:${this.width};height:${this.height}">${this.loading?this.renderLoader():this.renderCard()}</div>`}};at.styles=z`.dark{background-color:#121212;color:#fff}.white{background-color:#fff}.card{border-radius:16px;max-width:800px;max-height:250px;display:flex;flex-direction:row;align-items:center;font-family:'Circular Std',Helvetica,Arial,sans-serif;box-shadow:0 1px 6px rgba(0,0,0,.25)}.asset-container{border-right:1px solid rgba(4,4,5,.1);height:60%}.asset-image{background-size:contain;background-position:50%;background-repeat:no-repeat;height:100%;box-sizing:border-box}.asset-container img{border-top-left-radius:0px;border-bottom-left-radius:0px;height:100%}.asset-container video{border-top-left-radius:16px;border-bottom-left-radius:16px;height:100%}.details{display:flex;flex-direction:column;width:100%;padding:5px}.collection{display:flex;flex-direction:row;align-items:center}.avatar{width:0px;height:0px;object-fit:cover;border-radius:0px}.avatar-container{position:relative}.verifiedIcon{position:absolute;bottom:0;right:0}.desc-container{margin-left:0px}.desc-container span{font-weight:900;font-size:15px}.sectionHeader{font-weight:400;font-size:13px}.flex{display:flex}.ownershipAndCollection{display:inline-flex;flex-wrap:wrap;gap:15px}a{text-decoration:none;color:inherit}.button{border:none;width:100%;background-color:#fdd902;border-radius:6px;color:#000;margin-right:10px;padding:10px 10px 10px 10px;text-transform:uppercase}.button:hover{color:#fdd902;background-color:#000}`,lt([ot({type:String})],at.prototype,"tokenAddress",void 0),lt([ot({type:String})],at.prototype,"contractAddress",void 0),lt([ot({type:String})],at.prototype,"tokenId",void 0),lt([ot({type:String})],at.prototype,"blockchain",void 0),lt([ot({type:String})],at.prototype,"width",void 0),lt([ot({type:String})],at.prototype,"height",void 0),lt([ot({type:String})],at.prototype,"name",void 0),lt([ot({type:String})],at.prototype,"illustrationUrl",void 0),lt([ot({type:String})],at.prototype,"illustrationType",void 0),lt([ot({type:Array})],at.prototype,"objAttributes",void 0),lt([ot({type:String})],at.prototype,"collectionId",void 0),lt([ot({type:String})],at.prototype,"collectionName",void 0),lt([ot({type:String})],at.prototype,"collectionAvatar",void 0),lt([ot({type:String})],at.prototype,"ownerId",void 0),lt([ot({type:String})],at.prototype,"ownerName",void 0),lt([ot({type:String})],at.prototype,"ownerAvatar",void 0),lt([ot({type:[]})],at.prototype,"owners",void 0),lt([ot({type:String})],at.prototype,"cryptoPrice",void 0),lt([ot({type:String})],at.prototype,"cryptoCurrency",void 0),lt([ot({type:String})],at.prototype,"usdPrice",void 0),lt([ot({type:Boolean})],at.prototype,"forSale",void 0),lt([ot({type:String})],at.prototype,"saleType",void 0),lt([ot({type:Boolean})],at.prototype,"loading",void 0),lt([ot({type:Boolean})],at.prototype,"darkMode",void 0),at=lt([st("rari-embed")],at);export{at as RariEmbed};
  
