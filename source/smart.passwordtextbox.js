
/* Smart HTML Elements v7.6.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function s(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=83)}({83:function(e,t){Smart("smart-password-text-box",class extends Smart.BaseElement{static get properties(){return{autoFocus:{value:!1,type:"boolean"},hint:{value:"",reflectToAttribute:!0,type:"string"},label:{value:"",reflectToAttribute:!0,type:"string"},maxLength:{value:null,type:"number?"},minLength:{value:2,type:"number"},messages:{value:{en:{passwordStrength:"Password strength",short:"Short",weak:"Weak",far:"Far",good:"Good",strong:"Strong",showPassword:"Show password"}},type:"object",extend:!0},name:{value:"",type:"string"},passwordStrength:{value:null,type:"function?",reflectToAttribute:!1},placeholder:{value:"",type:"string"},selectAllOnFocus:{value:!1,type:"boolean"},showPasswordIcon:{value:!1,type:"boolean"},showPasswordStrength:{value:!1,type:"boolean"},tooltipArrow:{value:!1,type:"boolean"},tooltipDelay:{value:0,type:"number"},tooltipPosition:{allowedValues:["bottom","top","left","right","absolute"],value:"top",type:"string"},tooltipTemplate:{value:null,type:"string?"},type:{value:"password",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",reflectToAttribute:!1,type:"string"}}}static get listeners(){return{"document.up":"_documentUpHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","passwordIcon.down":"_showPassword","input.change":"_textBoxChangeHandler","input.paste":"_textBoxChangeHandler","input.keyup":"_textBoxChangeHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}static get requires(){return{"Smart.Tooltip":"smart.tooltip.js"}}static get styleUrls(){return["smart.textbox.css","smart.passwordtextbox.css"]}template(){return'<div id="container" role="presentation"><span id="label" inner-h-t-m-l="[[label]]" class="smart-hidden smart-label"></span><div id="innerContainer" class="smart-content" role="presentation"><input class="smart-input" type="password" id="input"\n                    disabled="[[disabled]]"\n                    maxlength="[[maxLength]]"\n                    minlength="[[minLength]]"\n                    name="[[name]]"\n                    placeholder="[[placeholder]]"\n                    readonly="[[readonly]]"\n                    value="[[value]]"><span id="passwordIcon" title="Show Password" class="smart-password-icon smart-hidden" role="button" aria-label="Show Password"></span></div><span id="hint" inner-h-t-m-l="[[hint]]" class="smart-hint smart-hidden"></span><smart-tooltip id="tooltip"\n                    open-mode="manual"\n                    arrow="[[tooltipArrow]]"\n                    right-to-left="[[rightToLeft]]"\n                    tooltip-template="[[tooltipTemplate]]"\n                    position="[[tooltipPosition]]"\n                    delay="[[tooltipDelay]]"></smart-tooltip></div>'}propertyChangedHandler(e,t,s){const a=this;let o;switch(e){case"locale":case"messages":case"passwordStrength":o=a._evaluatePasswordStrength(),a._updateTooltipString(o),a.$.passwordIcon.setAttribute("title",a.localize("showPassword")),a._updatePasswordStrengthStyles(o);break;case"tooltipPosition":a.$.tooltip.position=a.tooltipPosition;break;case"tooltipTemplate":a.$.tooltip.tooltipTemplate=a.tooltipTemplate;break;case"value":o=a._evaluatePasswordStrength(),a._updateTooltipString(o),a._updatePasswordStrengthStyles(o);break;case"disabled":case"unfocusable":a._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(e,t,s)}}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.$.input.tabIndex=-1:e.$.input.removeAttribute("tabindex")}render(){this._createElement(),super.render()}focus(){this.$.input.focus()}blur(){that.$.input.blur()}reset(){this.$.input.value=this.value=this._initializationValue}_createElement(){const e=this;e.autoFocus&&e.$.input.focus(),e.$.addClass("smart-input"),e._setFocusable(),e.$.tooltip.selector=e.$.innerContainer,e.$.passwordIcon.setAttribute("title",e.localize("showPassword")),e._updateTooltipString("short"),e._updatePasswordStrengthStyles(),e._initializationValue=e.value,e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e._handleHintContainer(),e.hint||(e.hint=e.placeholder),e.shadowRoot&&(e.$.tooltip.style.display="none",requestAnimationFrame(()=>e.$.tooltip.style.display="")),e.$.label.id||(e.$.label.id=e.id+"Label"),e.$.hint.id||(e.$.hint.id=e.id+"Hint"),e.hint||(e.hint=e.placeholder),e.setAttribute("role","presentation"),e.$.innerContainer.removeAttribute("aria-describedby"),e.$.input.setAttribute("aria-describedby",e.$.tooltip.id+" "+e.$.hint.id),e.$.input.setAttribute("aria-labelledby",e.$.label.id)}_handleHintContainer(){const e=this;if(!e.hint)return;const t=e.$.hint;if("function"==typeof e.hint){const s=e.value;e.hint(s,t)?e.$.addClass("invalid"):e.$.removeClass("invalid")}else"string"==typeof e.hint&&(t.innerHTML=e.hint,e.$.removeClass("invalid"))}_focusHandler(){const e=this;e.disabled||(e.selectAllOnFocus&&e.$.input.select(),e.showPasswordIcon&&e.$passwordIcon.removeClass("smart-hidden"),e.setAttribute("focus",""),e._valueBeforeChange=e.value,e.showPasswordStrength&&(e._tooltipOpened||(e.$.tooltip.open(),e._tooltipOpened=!0),e.$.fireEvent("focus")))}_blurHandler(){const e=this;e.disabled||e._passwordIconPressed||(e._valueBeforeChange!==e.value&&(e.$.fireEvent("change",{newValue:e.value,oldValue:e._valueBeforeChange}),e._valueBeforeChange=""),e.showPasswordIcon&&e.$passwordIcon.addClass("smart-hidden"),e.removeAttribute("focus"),e.value.length>0?e.$.addClass("has-value"):e.$.removeClass("has-value"),e.$.fireEvent("blur"),e._tooltipOpened&&(e.$.tooltip.close(),e._tooltipOpened=!1))}_showPassword(){!this.disabled&&this.showPasswordIcon&&(this.$.input.type="text",this._passwordIconPressed=!0)}_documentUpHandler(){!this.disabled&&this.showPasswordIcon&&this._passwordIconPressed&&(this.$.input.type="password",this._passwordIconPressed=!1,this.$.input.focus())}_textBoxChangeHandler(){if(this.disabled||this.readonly)return;this.value=this.$.input.value;let e=this._evaluatePasswordStrength();this._updateTooltipString(e),this._updatePasswordStrengthStyles(e)}_updatePasswordStrengthStyles(e){const t=this,s=["short","weak","far","good","strong"];e=e||"short";for(let e=0;e<s.length;e++)t.$container.removeClass("smart-password-"+s[e]);t.disabled||t.$container.addClass("smart-password-"+e)}_evaluatePasswordStrength(){const e=this,t=e.$.input.value,s=t.length;if(e.disabled)return;if(e.passwordStrength)return e.passwordStrength(t,"<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=");let a=0,o=0,n=0,r=0;for(var l=0;l<s;l++){const e=t.charAt(l),s=t.charCodeAt(l);s>64&&s<91||s>96&&s<123||s>127&&s<155||s>159&&s<166?a+=1:!1!==isNaN(e)?-1==="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".indexOf(e)||(n+=1):o+=1}return r=a+o+2*n+a*o/2+s,s<8?"short":r<20?"weak":r<30?"far":r<40?"good":"strong"}_keyUpHandler(){}_mouseWheelHandler(){}_resizeHandler(){}_selectStartHandler(){}_setDropDownSize(){}_styleChangedHandler(){}_mouseEventsHandler(e){"mouseenter"===e.type?this.setAttribute("hover",""):this.removeAttribute("hover")}_updateTooltipString(e){this.$.tooltip.value='<span class="password-strength-label">'+this.localize("passwordStrength")+': </span><span class="password-strength-value">'+this.localize(e)+"</span>"}})}});