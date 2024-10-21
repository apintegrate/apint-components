(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=globalThis,E=v.trustedTypes,B=E?E.createPolicy("lit-html",{createHTML:o=>o}):void 0,D="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+x,Z=`<${F}>`,$=document,w=()=>$.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",R=Array.isArray,q=o=>R(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,O=/>/g,m=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,U=/"/g,W=/^(?:script|style|textarea|title)$/i,G=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=G(1),_=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),j=new WeakMap,b=$.createTreeWalker($,129);function V(o,t){if(!R(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return B!==void 0?B.createHTML(t):t}const K=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",r=y;for(let c=0;c<e;c++){const a=o[c];let p,d,l=-1,g=0;for(;g<a.length&&(r.lastIndex=g,d=r.exec(a),d!==null);)g=r.lastIndex,r===y?d[1]==="!--"?r=I:d[1]!==void 0?r=O:d[2]!==void 0?(W.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=m):d[3]!==void 0&&(r=m):r===m?d[0]===">"?(r=i??y,l=-1):d[1]===void 0?l=-2:(l=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?m:d[3]==='"'?U:P):r===U||r===P?r=m:r===I||r===O?r=y:(r=m,i=void 0);const f=r===m&&o[c+1].startsWith("/>")?" ":"";n+=r===y?a+Z:l>=0?(s.push(p),a.slice(0,l)+D+a.slice(l)+x+f):a+x+(l===-2?c:f)}return[V(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class k{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const c=t.length-1,a=this.parts,[p,d]=K(t,e);if(this.el=k.createElement(p,s),b.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=b.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(D)){const g=d[r++],f=i.getAttribute(l).split(x),T=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:T[2],strings:f,ctor:T[1]==="."?J:T[1]==="?"?Q:T[1]==="@"?X:M}),i.removeAttribute(l)}else l.startsWith(x)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(W.test(i.tagName)){const l=i.textContent.split(x),g=l.length-1;if(g>0){i.textContent=E?E.emptyScript:"";for(let f=0;f<g;f++)i.append(l[f],w()),b.nextNode(),a.push({type:2,index:++n});i.append(l[g],w())}}}else if(i.nodeType===8)if(i.data===F)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(x,l+1))!==-1;)a.push({type:7,index:n}),l+=x.length-1}n++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function A(o,t,e=o,s){var r,c;if(t===_)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=A(o,i._$AS(o,t.values),i,s)),t}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??$).importNode(e,!0);b.currentNode=i;let n=b.nextNode(),r=0,c=0,a=s[0];for(;a!==void 0;){if(r===a.index){let p;a.type===2?p=new N(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new tt(n,this,t)),this._$AV.push(p),a=s[++c]}r!==(a==null?void 0:a.index)&&(n=b.nextNode(),r++)}return b.currentNode=$,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):q(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=k.createElement(V(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const r=new Y(i,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=j.get(t.strings);return e===void 0&&j.set(t.strings,e=new k(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new N(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=A(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const c=t;let a,p;for(t=n[0],a=0;a<n.length-1;a++)p=A(this,c[s+a],e,a),p===_&&(p=this._$AH[a]),r||(r=!H(p)||p!==this._$AH[a]),p===h?t=h:t!==h&&(t+=(p??"")+n[a+1]),this._$AH[a]=p}r&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class J extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Q extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class X extends M{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===_)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const S=v.litHtmlPolyfillSupport;S==null||S(k,N),(v.litHtmlVersions??(v.litHtmlVersions=[])).push("3.2.1");const C=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new N(t.insertBefore(w(),n),n,void 0,e??{})}return i._$AI(o),i};class et extends HTMLElement{constructor(){super(),this.type="secondary",this.size="medium",this.onClick=void 0,this.attachShadow({mode:"open"})}connectedCallback(){this.update()}static get observedAttributes(){return["type","size","onClick"]}attributeChangedCallback(t,e,s){s!==e&&(this[t]=s,this.update())}style(){return`
      .button {
        display: inline-block;
        cursor: pointer;
        border: 0;
        margin-left: 14px;
        border-radius: 3em;
        font-weight: 700;
        line-height: 1;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      .button--primary {
        background-color: #1ea7fd;
        color: white;
      }
      .button--secondary {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        background-color: transparent;
        color: #333;
      }
      .button--small {
        padding: 10px 16px;
        font-size: 12px;
      }
      .button--medium {
        padding: 11px 20px;
        font-size: 14px;
      }
      .button--large {
        padding: 12px 24px;
        font-size: 16px;
      }

    `}template(){return u`
      <style>
        ${this.style()}
      </style>
      <button
        type="button"
        class=${["button",`button--${this.size||"medium"}`,"button--"+this.type].join(" ")}
        @click=${this.onClick}
      >
        ${this.textContent}
      </button>
    `}update(){C(this.template(),this.shadowRoot,{host:this})}}customElements.define("apint-button",et);class it extends HTMLElement{constructor(){super(),this.title="",this.image="",this.bylineleft="",this.bylineright="",this.bylinerightimage="",this.description="",this.href="",this.toplefttext="",this.attachShadow({mode:"open"})}connectedCallback(){this.update()}static get observedAttributes(){return["title","image","bylineleft","bylineright","bylinerightimage","description","href","toplefttext"]}attributeChangedCallback(t,e,s){s!==e&&(this[t]=s,this.update())}style(){return`
      a {
        text-decoration: none;
      }

      .card {
        display: block;
        color: black;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
        padding: 16px 20px;
        transition: box-shadow 0.2s ease 0s;
        width: 246px;
        height: 378px;
        margin: 14px;
        position: relative;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .card:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
        cursor: pointer;
      }

      .card_top_detail {
        display: flex;
        color: #444746;
        flex-direction: row;
        font-family: Google Sans, Roboto, Arial, sans-serif;
        font-size: .875rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.25rem;
        padding: 12px 4px;
        white-space: nowrap;
        width: 100%;
        justify-content: space-between;
      }

      .card_hero {
        display: block;
        border-radius: 7px;
        overflow: hidden;
        width: 100%;
        height: 144px;
        line-height: 0;
        margin: 0 0px;
        object-fit: cover;
      }

      .card_title {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        max-height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .card_byline {
        margin-top: 2px;
        margin-right: 1px;
        font-size: 13px;
        font-weight: 300;
        color: rgb(0,0,0,.66);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card_byline_right_image {
        height: 18px;
        position: relative;
        top: 4px;
      }

      .card_description {
        color: #444746;
        font-size: 13px;
        line-height: 20px;
        margin-top: 8px;
        max-height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .card_footer {
        display: flex; 
        width: 90%;
        position: absolute;
        bottom: 10px;
      }

      .likes_box {
        width: 10%;
      }

      .wait {
        cursor: wait;
      }

      .likes_box:hover {
        fill: orange;
        color: orange;
      }

      .likes_number {
        color: gray;
        position: absolute;
        bottom: -2px;
        right: 26px;
      }

      .likes_active {
        fill: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        /* font-weight: bold; */
      }

      .likes_user {
        /* fill: #3367d6;
        color: #3367d6; */

        fill: #e78300;
        color: #e78300;
      }

      /* .likes_number:hover {
        color: orange;
      } */

      .likes_icon {
        position: absolute;
        bottom: 2px;
        right: 0px;
      }

      /* .likes_icon:hover {
        fill: orange;
      } */

      .tags_box {

        width: 85%;
        display: flex;
        flex-wrap: wrap;
      }

      .tag {
        padding: 2px 8px 2px 8px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: bold;
        color: white;
        margin-right: 6px;
        margin-bottom: 4px;
      }

      .tag_green {
        background-color: rgb(85, 153, 85);
      }

      .tag_red {
        background-color: rgb(240, 74, 74);
      }

      .tag_orange {
        background-color: orange;
      }

      .tag_blue {
        background-color: #3367d6;
      }
    `}template(){return u`
      <style>
        ${this.style()}
      </style>
      <a href=${this.href} class="card" target="_blank">
        <div class="card_top_detail">
          ${this.toplefttext}
        </div>
        <img src=${this.image} class="card_hero"></img>
        <div class="card_title">
          ${this.title}
        </div>
        <div class="card_byline">
          ${this.bylineleft?u`<span>${this.bylineleft}</span>`:""}
          ${this.bylinerightimage?u`<img src=${this.bylinerightimage} class="card_byline_right_image"></img>`:""}
          ${this.bylineright?u`<span>${this.bylineright}</span>`:""}
        </div>
        <div class="card_description">
          ${this.description}
        </div>
      </a>
    `}update(){C(this.template(),this.shadowRoot,{host:this})}}customElements.define("apint-card",it);class st extends HTMLElement{constructor(){super(),this.count=0,this.attachShadow({mode:"open"})}static get observedAttributes(){return["count"]}attributeChangedCallback(t,e,s){s!==e&&(this[t]=s,this.update())}connectedCallback(){this.update()}inc(){this.count++,this.update()}dec(){this.count--,this.update()}style(){return`
      * {
        font-size: 200%;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `}template(){return u`
      <style>
        ${this.style()}
      </style>
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `}update(){C(this.template(),this.shadowRoot,{host:this})}}customElements.define("apint-counter",st);class nt extends HTMLElement{constructor(){super(),this.title="Apint.org",this.supportuser="false",this.user=void 0,this.onLogin=void 0,this.onLogout=void 0,this.onCreateAccount=void 0,this.attachShadow({mode:"open"})}connectedCallback(){this.update()}static get observedAttributes(){return["title","supportuser","user","onLogin","onLogout","onCreateAccount"]}attributeChangedCallback(t,e,s){s!==e&&(this[t]=s,this.update())}inc(){this.count++,this.update()}dec(){this.count--,this.update()}style(){return`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .header svg {
        display: inline-block;
        vertical-align: top;
      }

      .header h1 {
        display: inline-block;
        vertical-align: top;
        margin: 6px 0 6px 10px;
        font-weight: 700;
        font-size: 20px;
        line-height: 1;
      }

      .header button + button {
        margin-left: 10px;
      }

      .header .welcome {
        margin-right: 10px;
        color: #333;
        font-size: 14px;
      }
    `}template(){return u`
      <style>
        ${this.style()}
      </style>
      <header>
        <div class="header">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
                />
                <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
                />
                <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
                />
              </g>
            </svg>
            <h1>${this.title}</h1>
          </div>
          <div>
            ${this.supportuser==="true"&&this.user?u`<apint-button type="primary">Log out</apint-button>`:this.supportuser==="true"&&!this.user?u`<apint-button>Log in</apint-button><apint-button type="primary">Sign up</apint-button>`:""}
          </div>
        </div>
      </header>
    `}update(){C(this.template(),this.shadowRoot,{host:this})}}customElements.define("apint-header",nt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rt=o=>(...t)=>({_$litDirective$:o,values:t});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class z extends at{constructor(t){if(super(t),this.it=h,t.type!==ot.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}z.directiveName="unsafeHTML",z.resultType=1;const lt=rt(z);class ht extends HTMLElement{constructor(){super(),this.title="Apint.org",this.attachShadow({mode:"open"})}connectedCallback(){this.update()}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,s){s!==e&&(this[t]=s,this.update())}style(){return`
      .page {
        margin: 0 auto;
        padding: 14px 20px;
        max-width: 944px;
        color: #333;
        font-size: 14px;
        line-height: 24px;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .page h2 {
        display: inline-block;
        vertical-align: top;
        font-weight: 700;
        font-size: 32px;
        line-height: 1;
        width: 100%;
        margin-left: 10px;
      }

      .page .container_wrap {
        display: flex;
        flex-flow: row wrap;
        margin: 4px 4px 14px 4px;
        width: 100%;
        justify-content: center;
      }

      .page p {
        margin: 1em 0;
      }

      .page a {
        color: #1ea7fd;
        text-decoration: none;
      }

      .page ul {
        margin: 1em 0;
        padding-left: 30px;
      }

      .page li {
        margin-bottom: 8px;
      }

      .page .tip {
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
        border-radius: 1em;
        background: #e7fdd8;
        padding: 4px 12px;
        color: #66bf3c;
        font-weight: 700;
        font-size: 11px;
        line-height: 12px;
      }

      .page .tip-wrapper {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 13px;
        line-height: 20px;
      }

      .page .tip-wrapper svg {
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
        margin-right: 4px;
        width: 12px;
        height: 12px;
      }

      .page .tip-wrapper svg path {
        fill: #1ea7fd;
      }

    `}template(){return u`
      <style>
        ${this.style()}
      </style>
      <article>
        
        <apint-header title=${this.title}></apint-header>

        <section class="page">
          ${lt(this.getHTML())}
        </section>
      </article>
    `}update(){C(this.template(),this.shadowRoot,{host:this})}}customElements.define("apint-page",ht);
