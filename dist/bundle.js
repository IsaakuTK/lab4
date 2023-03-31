(()=>{"use strict";var n={814:(n,t,r)=>{r.d(t,{Z:()=>c});var e=r(81),o=r.n(e),a=r(645),i=r.n(a)()(o());i.push([n.id,'.card {\r\n    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);\r\n    width: 300px;\r\n    height: 254px;\r\n    padding: 5px;\r\n    border-radius: 1rem;\r\n    overflow: visible;\r\n    background: #f7ba2b;\r\n    background: var(--background);\r\n    position: relative;\r\n    z-index: 1;\r\n   }\r\n   \r\n   .card::after {\r\n    position: absolute;\r\n    content: "";\r\n    top: 30px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    height: 100%;\r\n    width: 100%;\r\n    transform: scale(0.8);\r\n    filter: blur(25px);\r\n    background: #f7ba2b;\r\n    background: var(--background);\r\n    transition: opacity .5s;\r\n   }\r\n   \r\n   .card-info {\r\n    --color: #181818;\r\n    background: var(--color);\r\n    color: var(--color);\r\n    display: flex;\r\n    \r\n    justify-content: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: visible;\r\n    border-radius: .7rem;\r\n   }\r\n\r\n   .card-text{\r\n    width: 200px;\r\n    height: 200px; \r\n    margin-left: 5px;\r\n   }\r\n   \r\n   .card .title {\r\n    font-weight: bold;\r\n    letter-spacing: .1em;\r\n   }\r\n   \r\n\r\n   .card:hover::after {\r\n    opacity: 0;\r\n   }\r\n   \r\n   .card:hover .card-info {\r\n    color: #f7ba2b;\r\n    transition: color 1s;\r\n   }',""]);const c=i},424:(n,t,r)=>{r.d(t,{Z:()=>c});var e=r(81),o=r.n(e),a=r(645),i=r.n(a)()(o());i.push([n.id,".card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var h=[].concat(n[d]);e&&i[h[0]]||(void 0!==a&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=a),r&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=r):h[2]=r),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),t.push(h))}},t}},81:n=>{n.exports=function(n){return n[1]}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n,t=r(814);!function(n){n.name="name",n.height="height",n.date_of_death="date_of_death",n.hair_color="hair_color",n.date_of_birth="date_of_birth",n.gender="gender"}(n||(n={}));class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({name:null,height:null,date_of_death:null,hair_color:null,date_of_birth:null,gender:null})}connectedCallback(){this.render()}attributeChangedCallback(n,t,r){this[n]=r,this.render()}render(){var n;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n                <section class="card">\n                    <section class="card-info">\n                    <section class="card-text">\n                    <h1>Name: ${this.name}</h1>\n                    <p>Height: ${this.height}</p>\n                    <p>Date of death: ${this.date_of_death}</p>\n                    <p>Hair color: ${this.hair_color}</p>\n                    <p>Birth year: ${this.date_of_birth}</p>\n                    <p>Gender: ${this.gender}</p>\n                    </section>\n                    </section>\n                </section>\n                `;const r=this.ownerDocument.createElement("style");r.innerHTML=t.Z,null===(n=this.shadowRoot)||void 0===n||n.appendChild(r)}}}customElements.define("my-card",e);var o=r(424);class a extends HTMLElement{constructor(){super(),this.cardss=[],this.attachShadow({mode:"open"})}connectedCallback(){return t=this,r=void 0,o=function*(){const t=yield function(){return n=this,t=void 0,e=function*(){try{const n=[],t=10;for(let r=1;r<=t;r++){const t=yield fetch("https://lotrapi.co/api/v1/characters/"+r),e=yield t.json();console.log(e),n.push(e)}return n}catch(n){console.log(n)}},new((r=void 0)||(r=Promise))((function(o,a){function i(n){try{s(e.next(n))}catch(n){a(n)}}function c(n){try{s(e.throw(n))}catch(n){a(n)}}function s(n){var t;n.done?o(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,c)}s((e=e.apply(n,t||[])).next())}));var n,t,r,e}();console.log(t),null==t||t.forEach((t=>{const r=this.ownerDocument.createElement("my-card");r.setAttribute(n.name,t.name),r.setAttribute(n.height,t.height),r.setAttribute(n.date_of_death,t.date_of_death),r.setAttribute(n.hair_color,t.hair_color),r.setAttribute(n.date_of_birth,t.date_of_birth),r.setAttribute(n.gender,t.gender),this.cardss.push(r)})),this.render(this.cardss)},new((e=void 0)||(e=Promise))((function(n,a){function i(n){try{s(o.next(n))}catch(n){a(n)}}function c(n){try{s(o.throw(n))}catch(n){a(n)}}function s(t){var r;t.done?n(t.value):(r=t.value,r instanceof e?r:new e((function(n){n(r)}))).then(i,c)}s((o=o.apply(t,r||[])).next())}));var t,r,e,o}render(n){var t,r;this.shadowRoot&&(this.shadowRoot.innerHTML="");const e=this.ownerDocument.createElement("style");e.innerHTML=o.Z,null===(t=this.shadowRoot)||void 0===t||t.appendChild(e);const a=this.ownerDocument.createElement("section");a.className="card";for(let t=0;t<n.length;t++)a.appendChild(n[t]);null===(r=this.shadowRoot)||void 0===r||r.appendChild(a)}}customElements.define("app-container",a)})()})();