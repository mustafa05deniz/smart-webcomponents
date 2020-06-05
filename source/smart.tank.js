
/* Smart HTML Elements v7.6.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function a(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=97)}({97:function(e,t){Smart("smart-tank",class extends Smart.BaseElement{static get properties(){return{coerce:{value:!1,type:"boolean"},customInterval:{value:!1,type:"boolean"},customTicks:{reflectToAttribute:!1,value:["0","50","100"],type:"array"},dateLabelFormatString:{value:"d",type:"string"},decimalSeparator:{value:".",type:"string"},interval:{value:"1",type:"any"},inverted:{value:!1,type:"boolean"},labelFormatFunction:{value:null,type:"function?"},labelsVisibility:{value:"all",allowedValues:["all","endPoints","none"],type:"string"},logarithmicScale:{value:!1,type:"boolean"},max:{value:"100",type:"any"},mechanicalAction:{value:"switchWhileDragging",allowedValues:["switchUntilReleased","switchWhenReleased","switchWhileDragging"],type:"string"},messages:{value:{en:{missingReference:"{{elementType}}: Missing reference to {{files}}.",significantPrecisionDigits:"{{elementType}}: the properties significantDigits and precisionDigits cannot be set at the same time.",invalidMinOrMax:"{{elementType}}: Invalid {{property}} value. Max cannot be lower than Min.",noInteger:'{{elementType}}: precisionDigits could be set only on "floatingPoint" scaleType.'}},type:"object",extend:!0},min:{value:"0",type:"any"},mode:{value:"numeric",allowedValues:["numeric","date"],type:"string"},name:{value:"",type:"string"},orientation:{value:"vertical",allowedValues:["horizontal","vertical"],type:"string"},precisionDigits:{value:null,type:"number?"},scalePosition:{value:"near",allowedValues:["near","far","both","none"],type:"string"},scaleType:{value:"floatingPoint",allowedValues:["floatingPoint","integer"],type:"string"},scientificNotation:{value:!1,type:"boolean"},showThumbLabel:{value:!1,type:"boolean"},showTooltip:{value:!1,type:"boolean"},showUnit:{value:!1,type:"boolean"},significantDigits:{value:null,type:"number?"},thumbLabelPosition:{value:"near",allowedValues:["near","far"],type:"string"},ticksPosition:{value:"scale",allowedValues:["scale","track"],type:"string"},ticksVisibility:{value:"minor",allowedValues:["major","minor","none"],type:"string"},tooltipPosition:{value:"near",allowedValues:["near","far"],type:"string"},unit:{value:"kg",type:"string"},validation:{value:"strict",allowedValues:["strict","interaction"],type:"string"},value:{value:"0",type:"any"},wordLength:{value:"int32",allowedValues:["int8","uint8","int16","uint16","int32","uint32","int64","uint64"],type:"string"}}}static get listeners(){return{"track.down":"_trackDownHandler","track.move":"_trackMoveHandler","document.move":"_documentMoveHandler","document.up":"_documentUpHandler",keydown:"_keydownHandler",resize:"_resizeHandler",styleChanged:"_styleChangedHandler","document.selectstart":"_selectStartHandler","track.mouseenter":"_trackOnMouseEnterHandler","track.mouseleave":"_trackOnMouseLeaveHandler"}}static get requires(){return{"Smart.Utilities.BigNumber":"smart.math.js","Smart.Utilities.NumericProcessor":"smart.numeric.js","Smart.Utilities.TickIntervalHandler":"smart.tickintervalhandler.js"}}static get styleUrls(){return["smart.tank.css"]}template(){return'<div id="container" class="smart-container" role="presentation">\n                    <div id="scaleNear" class="smart-scale smart-scale-near" role="presentation" aria-hidden="true"></div>\n                    <div id="track" class="smart-track" role="presentation">\n                        <div id="fill" class="smart-value" role="presentation">\n                            <div id="bubbleContainer" class="smart-bubble-container" role="presentation"></div>\n                            <div id="tooltip" class="smart-tooltip" role="tooltip"><div id="tooltipContent" class="smart-tooltip-content smart-unselectable" role="presentation"></div></div>\n                            <div id="thumb" class="smart-thumb">\n                                <div class="smart-thumb-label-container">\n                                    <span id="thumbLabel" class="smart-thumb-label"></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div id="trackTicksContainer" class="smart-track-ticks-container smart-hidden" role="presentation"></div>\n                    </div>\n                    <div id="scaleFar" class="smart-scale smart-scale-far" role="presentation" aria-hidden="true"></div>\n                    <input id="hiddenInput" type="hidden" name="[[name]]">\n                </div>'}ready(){super.ready();this._redefineProperty("customTicks"),this.checkLicense()}render(){const e=this;e.setAttribute("role","slider"),this._createElement(),e.enableShadowDOM&&e.$.hiddenInput&&e.appendChild(e.$.hiddenInput),super.render()}_createElement(){const e=this;e.$.tooltip.id||(e.$.tooltip.id=e.id+"Tooltip"),e.setAttribute("aria-describedby",e.$.tooltip.id),e.$.fill.style.transition="none","numeric"===e.mode?e._getEventValue=function(){return e.value}:e._handleDateScale(),e._setSettingsObject(),e._setDrawVariables(),e._getLayoutType(),e._numericProcessor=new Smart.Utilities.NumericProcessor(e,"scaleType"),e._numberRenderer=new Smart.Utilities.NumberRenderer,e._isVisible()?(e._renderingSuspended=!1,e._setInitialComponentDisplay(),e._measurements={},e._wordLengthNumber=e._numericProcessor.getWordLength(e.wordLength),e._validateInitialPropertyValues(),e._setTicksAndInterval(),e._validate(!0),e._updateTooltipValue(e._drawValue),e._setFocusable(),e._setTrackSize(),e._setBubbles(),e.$.fill.style.transition="",e.$.hiddenInput.value=e._getEventValue(),e.setAttribute("aria-orientation",e.orientation),e._setAriaValue("valuenow")):e._renderingSuspended=!0}val(e){const t=this;if(void 0===e)return t._getEventValue();if("date"===t.mode){let a=Smart.Utilities.DateTime.validateDate(e);return a=a.getTimeStamp(),0!==a.compare(t.value)?void t._validate(!1,a,void 0,!0):t._valueDate}if(t.value.toString().toUpperCase()===e.toString().toUpperCase())return t.value="string"==typeof e?e:e.toString();{e=e.toString().replace(/\s/g,""),t._numericProcessor.regexScientificNotation.test(e)&&(e=t._numericProcessor.scientificToDecimal(e));const a=t._discardDecimalSeparator(e.toString());t._validate(!1,a,void 0,!0),delete t._valueBeforeCoercion}}_setBubbles(){if(!this.hasAnimation)return;let e,t=document.createDocumentFragment();for(let a=0;a<5;a++)e=document.createElement("div"),e.classList.add("bubble"),e.classList.add("bubble"+(a+1)),t.appendChild(e);this.$.bubbleContainer.appendChild(t)}_setTrackSize(){const e=this;"vertical"===e.orientation?e._trackSize=e.$.track.offsetWidth:e._trackSize=e.$.track.offsetHeight}getOptimalSize(){const e=this;if(e._renderingSuspended)return{width:0,height:0};let t,a,i;switch(e.labelsVisibility){case"all":a=e._numericProcessor._longestLabelSize;break;case"endPoints":a=Math.max(e._tickIntervalHandler.labelsSize.minLabelOtherSize,e._tickIntervalHandler.labelsSize.maxLabelOtherSize);break;case"none":a=0}switch(e.orientation){case"horizontal":return t={marginA:"marginBottom",marginB:"marginTop",nearScaleDistance:"bottom",farScaleDistance:"top",paddingA:"paddingBottom",paddingB:"paddingTop",offset:"offsetWidth",distance:"left"},e._orientationChanged&&(t.offset="offsetHeight",e._trackChanged=!0),i=e._getSize(a,t),{width:i.optimalOtherSize,height:i.optimalSize};case"vertical":return t={marginA:"marginLeft",marginB:"marginRight",nearScaleDistance:"right",farScaleDistance:"left",paddingA:"paddingLeft",paddingB:"paddingRight",offset:"offsetHeight",distance:"top"},e._orientationChanged&&(t.offset="offsetWidth",e._trackChanged=!0),i=e._getSize(a,t),{width:i.optimalSize,height:i.optimalOtherSize}}}propertyChangedHandler(e,t,a){super.propertyChangedHandler(e,t,a);const i=this;if(i._isVisible()&&!i._renderingSuspended)if(a!=t)switch(e){case"labelsVisibility":case"ticksVisibility":return void i._updateScaleWidth(i._numericProcessor._longestLabelSize);case"coerce":if(a){const e=i.value,t=a=i.logarithmicScale?Math.pow(10,i._numericProcessor.getCoercedValue(Math.log10(e))):i._numericProcessor.getCoercedValue(e);i._validate(!1,t,!0,!0),i._valueBeforeCoercion=e}else void 0!==i._valueBeforeCoercion&&i._validate(!1,i._valueBeforeCoercion,!1,!0);return;case"interval":{i._numericProcessor.validateInterval(a);const e=a=i.logarithmicScale?Math.pow(10,i._numericProcessor.getCoercedValue(Math.log10(i.value))):i._numericProcessor.getCoercedValue(i.value);i._validate(!1,e,i.coerce,!0);break}case"min":case"max":{"date"===i.mode&&(delete i._dateInterval,i[e]=Smart.Utilities.DateTime.validateDate(a).getTimeStamp()),i._validateMinMax(e,!1,t);const r=i._numericProcessor.createDescriptor(i._discardDecimalSeparator(i.value,i.decimalSeparator),void 0,!0,"strict"===i.validation);i._setTicksAndInterval(),i._numericProcessor.updateValue(r);let n=i.getOptimalSize(),s=i.getBoundingClientRect(),o=i.$.track.getBoundingClientRect();n.width>s.width&&o.width<20&&(i.style.width=n.width+"px",i.style.height=n.height+"px");break}case"inverted":case"rightToLeft":{i._getLayoutType(),i._normalLayout&&(i.$.fill.style[i._settings.margin]="0px");let e=i._numericProcessor.createDescriptor(i.value),t=i._numericProcessor.validate(e,i._minObject,i._maxObject);i._setTicksAndInterval(),i._numericProcessor.updateValue(t);break}case"orientation":{const e=i.$.fill.style,t=i.$.container.style;switch(!0!==i._orientationChanged&&(i._orientationChanged=!0),i._tankSizeBeforeOrientation={width:i.offsetWidth,height:i.offsetHeight},i._setSettingsObject(),i._getLayoutType(),i.rightToLeft&&(e.marginLeft="0"),i.inverted&&(e.marginTop="0",e.marginLeft="0"),i.orientation){case"vertical":i.inverted||(e.marginTop="auto",e.marginLeft="0"),e.width="100%",t.paddingLeft="0",t.paddingRight="0";break;case"horizontal":(!i.inverted||!i.inverted&&!i.rightToLeft||i.rightToLeft&&i.inverted)&&(e.marginTop="0",e.marginLeft="auto"),e.height="100%",t.paddingTop="0",t.paddingBottom="0"}i._validateMinMax("both");const r=i._numericProcessor.createDescriptor(i.value),n=i._numericProcessor.validate(r,i._minObject,i._maxObject);i._setTicksAndInterval(),i._setTicksAndInterval(),i._numericProcessor.updateValue(n),i._trackChanged=!0,i.setAttribute("aria-orientation",a);break}case"significantDigits":case"precisionDigits":if("date"===i.mode)return;if("precisionDigits"===e&&"integer"===i.scaleType&&i.error(i.localize("noInteger",{elementType:i.nodeName.toLowerCase(),property:e})),"significantDigits"===e&&null!==i.precisionDigits?i.precisionDigits=null:"precisionDigits"===e&&null!==i.significantDigits&&(i.significantDigits=null),i._validateInitialPropertyValues(),i._setTicksAndInterval(),"horizontal"===i.orientation&&(i.inverted||i.rightToLeft)){const e=i._numericProcessor.valueToPx(i._numericProcessor.getCoercedValue(i._drawValue));i.updateFillSizeAndPosition(e,i._settings.margin,a,!1)}break;case"decimalSeparator":{if("integer"===i.scaleType||"date"===i.mode)return;const e=i._discardDecimalSeparator(i.value,t),a=i._applyDecimalSeparator(e);i.value=e,delete i._valueBeforeCoercion,i._numericProcessor.addTicksAndLabels(),i._updateTooltipValue(a);break}case"value":if(i.value=t,null===a)return;if("date"===i.mode){let e=Smart.Utilities.DateTime.validateDate(a);return e=e.getTimeStamp(),void(0!==e.compare(t)&&i._validate(!1,e,void 0,!0))}if(a.toString().toUpperCase()!==t.toString().toUpperCase()){let e=void 0!==a?a.toString().replace(/\s/g,""):t.toString().replace(/\s/g,"");i._numericProcessor.regexScientificNotation.test(e)&&(e=i._numericProcessor.scientificToDecimal(e)),i._validate(!1,e,void 0,!0),delete i._valueBeforeCoercion}else i.value="string"==typeof a?a:a.toString();break;case"scaleType":if("date"===i.mode)return void(i.scaleType="integer");i._changeScaleType(t,a);break;case"disabled":case"unfocusable":i._setFocusable();break;case"showUnit":case"unit":i._setTicksAndInterval(),i._moveThumbBasedOnValue(i._drawValue);break;case"tooltipPosition":break;case"wordLength":{if("date"===i.mode)return void(i.wordLength="uint64");i._wordLengthNumber=i._numericProcessor.getWordLength(a),i._validateMinMax("both");const e=i._numericProcessor.createDescriptor(i.value),t=i._numericProcessor.validate(e,i._minObject,i._maxObject);i._setTicksAndInterval(),i._numericProcessor.updateValue(t);break}case"scalePosition":i._setInitialComponentDisplay(),i._setTicksAndInterval(),i._moveThumbBasedOnValue(i._drawValue);break;case"labelFormatFunction":case"scientificNotation":{if("date"===i.mode&&"scientificNotation"===e)return;const t=i._discardDecimalSeparator(i.value,i.decimalSeparator);i._setTicksAndInterval(),i._updateTooltipValue(t);break}case"logarithmicScale":if("date"===i.mode)return void(i.logarithmicScale=!1);i._validateMinMax("both"),i._setTicksAndInterval(),i._validate(!1,i.value,void 0,!0);break;case"ticksPosition":"scale"===a?(i.$trackTicksContainer.addClass("smart-hidden"),i.$.trackTicksContainer.innerHTML=""):i.$trackTicksContainer.removeClass("smart-hidden"),i._numericProcessor.addTicksAndLabels();break;case"customInterval":a?(i._customTicks&&(i.customTicks=i._customTicks),i._numericProcessor.validateCustomTicks()):"date"===i.mode&&(i._customTicks=i.customTicks),i._setTicksAndInterval(),i._coerceCustomInterval();break;case"customTicks":if("date"===i.mode&&!i.customInterval)return i._customTicks=a,void(i.customTicks=t);i._numericProcessor.validateCustomTicks(),i.customInterval&&(i._setTicksAndInterval(),i._coerceCustomInterval());break;case"dateLabelFormatString":"date"===i.mode&&i._setTicksAndInterval();break;case"mode":i.mode=t;break;case"showThumbLabel":a&&i.showTooltip&&(i.showTooltip=!1);break;case"showTooltip":a&&i.showThumbLabel&&(i.showThumbLabel=!1);break;case"validation":"strict"===a&&i._validate(!1,i.value)}else i[e]=t;else i._renderingSuspended=!0}_setSettingsObject(){const e=this;"horizontal"===e.orientation?e._settings={clientSize:"clientWidth",dimension:"width",leftOrTop:"left",margin:"marginLeft",offset:"offsetLeft",otherSize:"offsetHeight",size:"offsetWidth",page:"pageX"}:e._settings={clientSize:"clientHeight",dimension:"height",leftOrTop:"top",margin:"marginTop",offset:"offsetTop",otherSize:"offsetWidth",size:"offsetHeight",page:"pageY"}}_setInitialComponentDisplay(){const e=this;switch(e.scalePosition){case"near":e.$scaleNear.removeClass("smart-hidden"),e.$scaleFar.addClass("smart-hidden");break;case"far":e.$scaleNear.addClass("smart-hidden"),e.$scaleFar.removeClass("smart-hidden");break;case"both":e.$scaleFar.removeClass("smart-hidden"),e.$scaleNear.removeClass("smart-hidden");break;case"none":e.$scaleFar.addClass("smart-hidden"),e.$scaleNear.addClass("smart-hidden")}e.$tooltip.addClass("smart-hidden"),"track"===e.ticksPosition&&e.$trackTicksContainer.removeClass("smart-hidden")}_styleChangedHandler(){const e=this;e._isVisible()?e._renderingSuspended?e._createElement():e._renderingSuspended||(e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue)):e._renderingSuspended=!0}_validateInitialPropertyValues(){const e=this,t=typeof e.value===String?e.value.replace(/\s/g,""):e.value.toString().replace(/\s/g,"");"numeric"===e.mode&&e._numericProcessor.regexScientificNotation.test(t)&&(e.value=e._numericProcessor.scientificToDecimal(t),delete e._valueBeforeCoercion),e.significantDigits=null!==e.significantDigits?Math.min(Math.max(e.significantDigits,1),21):null,null===e.significantDigits&&null===e.precisionDigits?e.significantDigits=8:null!==e.significantDigits&&null!==e.precisionDigits&&e.error(e.localize("significantPrecisionDigits",{elementType:e.nodeName.toLowerCase()})),e._validateMinMax("both",!0),e.showTooltip&&e.showThumbLabel&&(e.showTooltip=!1)}_validateMinMax(e,t,a){const i=this;let r="min"===e||"both"===e,n="max"===e||"both"===e;function s(e,a){i._numericProcessor.validateMinMax("min"===e||t,"max"===e||t);const s=i["_"+e+"Object"];("min"===e?i._numericProcessor.compare(i.max,s,!0)<=0:i._numericProcessor.compare(i.min,s,!0)>0)?a?(i._numberRenderer=new Smart.Utilities.NumberRenderer(a),"min"===e?r=!1:n=!1,i[e]=a,i["_"+e+"Object"]=a):i.error(i.localize("invalidMinOrMax",{elementType:i.nodeName.toLowerCase(),property:e})):(i._numberRenderer=new Smart.Utilities.NumberRenderer(s),i[e]=i["_"+e+"Object"])}void 0===typeof t&&(t=!1),"both"===e?(s("min",a),s("max",a)):s(e,a),i.logarithmicScale?i._validateOnLogarithmicScale(r,n,a):(i._drawMin=i.min,i._drawMax=i.max),i.min=i.min.toString(),i.max=i.max.toString(),i._minObject=i._numericProcessor.createDescriptor(i.min),i._maxObject=i._numericProcessor.createDescriptor(i.max),"date"===i.mode&&(i._minDate=Smart.Utilities.DateTime.fromFullTimeStamp(i.min),i._maxDate=Smart.Utilities.DateTime.fromFullTimeStamp(i.max)),i._numericProcessor.validateInterval(i.interval),i.customInterval&&i._numericProcessor.validateCustomTicks(),i._setAriaValue("valueminmax")}_calculateTickInterval(){const e=this;let t=e._tickIntervalHandler.getInterval("linear",e._drawMin,e._drawMax,e.$.track,e.logarithmicScale);t.major!==e._majorTicksInterval?(e._intervalHasChanged=!0,e._majorTicksInterval=t.major):e._intervalHasChanged=!0,e._minorTicksInterval=t.minor,"date"===e.mode&&e._calculateDateInterval(t.major)}_calculateDateInterval(e){const t=this,a={month:"2628000000000000000000000000000",day:"86400000000000000000000000000",hour:"3600000000000000000000000000",minute:"60000000000000000000000000",second:"1000000000000000000000000"};let i="year",r=new Smart.Utilities.BigNumber("31536000000000000000000000000000"),n=r.subtract(e).abs(),s=new Smart.Utilities.BigNumber(t.min).subtract(t.max).abs(),o=s.divide(e).toString();o<2&&(e=s.divide(3));for(let t in a)if(a.hasOwnProperty(t)){const s=new Smart.Utilities.BigNumber(a[t]),o=s.subtract(e).abs();if(-1!==o.compare(n))break;i=t,r=s,n=o}if("second"===i){if(t._numberRenderer.numericValue=parseFloat(e),t._numberRenderer.numericValue<1e3)return t._dateIncrementMethod="addYoctoseconds",void(t._dateIntervalNumber=1);let a=t._numberRenderer.toScientific(10);return a=a.charAt(a.length-1),t._dateIncrementMethod=t._unitToMethod[a],void(t._dateIntervalNumber=Math.pow(10,t._numericProcessor.prefixesToPowers[a]))}t._dateInterval=!0;const l=!t.customInterval;let c,d,m;switch(l&&(c=[new Smart.Utilities.BigNumber(t.min)],d=s.divide(r).toString(),m=Math.max(1,Math.floor(d/o))),i){case"year":if(l)for(let e=t._minDate.year()+m;e<t._maxDate.year();e+=m)c.push(new Smart.Utilities.BigNumber(new Smart.Utilities.DateTime(e,1,1).getTimeStamp()));t._dateIncrementMethod="addYears";break;case"month":if(l)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month()+m,1);-1===e.compare(t._maxDate);e.addMonths(m,!1))c.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addMonths";break;case"day":if(l)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day()+m);-1===e.compare(t._maxDate);e.addDays(m,!1))c.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addDays",t._dateIntervalNumber=864e26;break;case"hour":if(l)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day(),t._minDate.hour()+m);-1===e.compare(t._maxDate);e.addHours(m,!1))c.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addHours",t._dateIntervalNumber=36e26;break;case"minute":if(l)for(let e=new Smart.Utilities.DateTime(t._minDate.year(),t._minDate.month(),t._minDate.day(),t._minDate.hour(),t._minDate.minute()+m);-1===e.compare(t._maxDate);e.addMinutes(m,!1))c.push(new Smart.Utilities.BigNumber(e.getTimeStamp()));t._dateIncrementMethod="addMinutes",t._dateIntervalNumber=6e25}l&&(-1===c[c.length-1].compare(t.max)&&c.push(new Smart.Utilities.BigNumber(t.max)),t.customTicks=c)}_formatNumber(e){const t=this;if("date"===t.mode){return Smart.Utilities.DateTime.fromFullTimeStamp(e).toString(t.dateLabelFormatString)}const a=t._numberRenderer;let i=parseFloat(e);if(a.numericValue=e,t.scientificNotation)i=t._numberRenderer.toScientific(t.significantDigits,t.precisionDigits);else switch(t.scaleType){case"floatingPoint":i=t._applyDecimalSeparator(a.toDigits(t.significantDigits,t.precisionDigits));break;case"integer":i=a.isENotation(i)?Math.round(a.largeExponentialToDecimal(i)):Math.round(i),i=a.toDigits(t.significantDigits,0)}return i}_formatLabel(e,t){const a=this;let i;return a.labelFormatFunction&&("date"===a.mode&&(e=Smart.Utilities.DateTime.fromFullTimeStamp(e)),i=a.labelFormatFunction(e),void 0!==i&&""!==i)||(i=a._formatNumber(e),a._numberRenderer=new Smart.Utilities.NumberRenderer(i),a.showUnit&&(i+=!1!==t?' <span class="smart-unselectable">'+a.unit+"</span>":" "+a.unit)),i}_layout(){const e=this,t=e.$.container.style,a=e._tickIntervalHandler.labelsSize.minLabelSize/2+"px",i=e._tickIntervalHandler.labelsSize.maxLabelSize/2+"px";switch(e.orientation){case"horizontal":if("none"===e.scalePosition){t.paddingLeft="",t.paddingRight="";break}!e.inverted&&!e.rightToLeft||e.rightToLeft&&e.inverted?(t.paddingLeft=a,t.paddingRight=i):(t.paddingLeft=i,t.paddingRight=a);break;case"vertical":if("none"===e.scalePosition){t.paddingTop="",t.paddingBottom="";break}e.inverted?(t.paddingBottom=i,t.paddingTop=a):(t.paddingBottom=a,t.paddingTop=i)}e._measurements.trackLength=e.$.track[this._settings.clientSize]}_trackDownHandler(e){const t=this;t.disabled||t.readonly||!Smart.Utilities.Core.isMobile&&0!==e.button||("switchUntilReleased"===t.mechanicalAction&&(t._cachedValue={},t._cachedValue._number=t._number,t._cachedValue._drawValue=t._drawValue,t._cachedValue.value=t.value,t._valueDate&&(t._cachedValue._valueDate=t._valueDate)),t._getTrackStartAndEnd(),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==t.mechanicalAction),t._thumbDragged=!0,t.$track.addClass("smart-dragged"),t.showTooltip&&t.$tooltip.removeClass("smart-hidden"))}_trackMoveHandler(e){"touchmove"===e.originalEvent.type&&e.originalEvent.preventDefault()}_documentMoveHandler(e){const t=this;t._thumbDragged&&(e.originalEvent.preventDefault(),t._moveThumbBasedOnCoordinates(e,!0,"switchWhenReleased"!==t.mechanicalAction),t.$fill.addClass("disable-animation"))}_documentUpHandler(e){const t=this;if(t._thumbDragged){if("switchWhenReleased"===t.mechanicalAction)t._moveThumbBasedOnCoordinates(e,!0,!0);else if("switchUntilReleased"===t.mechanicalAction&&t._numericProcessor.compare(t._number,t._cachedValue._number)){const e=t._getEventValue();t._number=t._cachedValue._number,t._drawValue=t._cachedValue._drawValue,t._cachedValue._valueDate&&(t._valueDate=t._cachedValue._valueDate),t.value=t._cachedValue.value,t._moveThumbBasedOnValue(t._drawValue);const a=t._getEventValue();t.$.fireEvent("change",{value:a,oldValue:e}),t.$.hiddenInput.value=a,t._setAriaValue("valuenow")}t.showTooltip&&t.$tooltip.addClass("smart-hidden"),t._thumbDragged=!1,t.$track.removeClass("smart-dragged"),t.$fill.removeClass("disable-animation")}}_selectStartHandler(e){this._thumbDragged&&e.preventDefault()}_resizeHandler(){const e=this;e._isVisible()?e._renderingSuspended?e._createElement():e._renderingSuspended||(!0!==e._orientationChanged&&(e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue)),e._trackChanged&&(e._measurements.trackLength=e.$.track[this._settings.clientSize],e._setTicksAndInterval(),e._moveThumbBasedOnValue(e._drawValue)),e._setTrackSize(),delete e._orientationChanged,delete e._trackChanged):e._renderingSuspended=!0}_moveThumbBasedOnCoordinates(e,t,a){const i=this;let r=t?Math.min(Math.max(e[i._settings.page],i._trackStart),i._trackEnd):e[i._settings.page],n=i._numericProcessor.pxToValue(r);i.logarithmicScale?(i._drawValue=Math.log10(n),n=i._numericProcessor.getCoercedValue(i._drawValue)):(i._drawValue=n,n=i._numericProcessor.getCoercedValue(n)),r=Math.min(Math.max(i._numericProcessor.valueToPx(n)+i._trackStart,i._trackStart),i._trackEnd);const s=r-i._trackStart;i.updateFillSizeAndPosition(s,i._settings.margin,n,!0,a),e.originalEvent&&e.originalEvent.stopPropagation()}_moveThumbBasedOnValue(e){const t=this._numericProcessor.valueToPx(this._numericProcessor.getCoercedValue(e));this.updateFillSizeAndPosition(t,this._settings.margin,e,!0)}updateFillSizeAndPosition(e,t,a,i,r){const n=this,s=n.$.fill.style;if(n._normalLayout?s[n._settings.dimension]=e+"px":(s[n._settings.dimension]=Math.min(n._measurements.trackLength,Math.max(0,n._measurements.trackLength-e))+"px",s[t]=e+"px"),i){const e=n.value;delete n._valueBeforeCoercion,n._numericProcessor.updateToolTipAndValue(a,e,r)}}_updateTooltipValue(e){const t=this;void 0===e&&(e=t.value),t.logarithmicScale&&(e=Math.pow(10,e.toString())),e=t._formatLabel(e),t.$.tooltipContent.innerHTML=e,t.$.thumbLabel.innerHTML=e}_getSize(e,t){const a=this,i=window.getComputedStyle(a),r=window.getComputedStyle(a.$.track),n=a._trackSize+parseFloat(r[t.marginA])+parseFloat(r[t.marginB]);let s,o,l,c,d,m,u;function _(e,t){const a=e.getElementsByClassName("smart-label");s=a[0],o=a[a.length-1];const i=window.getComputedStyle(a[0])[t];l+=parseFloat(i)}switch(l=n,a.scalePosition){case"none":return l+=parseFloat(i[t.paddingA])+parseFloat(i[t.paddingB]),c=void 0!==a._tankSizeBeforeOrientation?"horizontal"===a.orientation?a._tankSizeBeforeOrientation.height:a._tankSizeBeforeOrientation.width:"horizontal"===a.orientation?parseFloat(r.width):parseFloat(r.height),!0!==a._trackChanged&&(a._trackChanged=!0),{optimalSize:l,optimalOtherSize:c};case"near":l+=e,_(a.$.scaleNear,t.nearScaleDistance);break;case"far":l+=e,_(a.$.scaleFar,t.farScaleDistance);break;case"both":l+=2*e,_(a.$.scaleNear,t.nearScaleDistance),_(a.$.scaleFar,t.farScaleDistance)}return l+=parseFloat(i[t.paddingA])+parseFloat(i[t.paddingB]),d=s.getBoundingClientRect(),m=o.getBoundingClientRect(),c=a[t.offset],u=d[t.distance]+s[t.offset]-m[t.distance],u>0&&(c=s[t.offset]+o[t.offset]),{optimalSize:l,optimalOtherSize:c}}_getRange(){const e=this;e.logarithmicScale?e._range=e._drawMax-e._drawMin:"floatingPoint"===e.scaleType?e._range=(e._drawMax-e._drawMin).toString():e._range=new Smart.Utilities.BigNumber(e._drawMax).subtract(e._drawMin).toString()}_getTrackStartAndEnd(){let e,t=this.$.track.getBoundingClientRect();if("horizontal"===this.orientation){const a=document.body.scrollLeft||document.documentElement.scrollLeft;e=t.left+a}else{const a=document.body.scrollTop||document.documentElement.scrollTop;e=t.top+a}const a=e+this._measurements.trackLength,i=a-e;this._trackStart=e,this._trackEnd=a,this._valuePerPx=this._numericProcessor.getValuePerPx(this._range,i)}_updateScaleWidth(e){const t=this;let a="track"===t.ticksPosition?4:12;switch(t.labelsVisibility){case"all":e=t._numericProcessor._longestLabelSize;break;case"endPoints":e=Math.max(t._tickIntervalHandler.labelsSize.minLabelOtherSize,t._tickIntervalHandler.labelsSize.maxLabelOtherSize);break;case"none":e=0}let i=a+e,r=window.getComputedStyle(t.$.track);if(Boolean(r.getPropertyValue("--smart-tank-scale-size")))t.$.container.style.setProperty("--smart-tank-scale-size",i+"px");else{const e=window.getComputedStyle(t),a=t.$.scaleNear.style,n=t.$.scaleFar.style,s=t.$.track.style,o=parseFloat(r.getPropertyValue("min-width"));let l,c,d,m,u,_=(parseFloat(r.getPropertyValue("outline-width"))||0)+(parseFloat(r.getPropertyValue("outline-offset"))||0);switch(t.orientation){case"horizontal":l="height",c="width",d=t.offsetHeight,u=parseFloat(e.getPropertyValue("padding-top"))+parseFloat(e.getPropertyValue("padding-bottom")),m=parseFloat(r.getPropertyValue("margin-top"))+parseFloat(r.getPropertyValue("margin-bottom"));break;case"vertical":l="width",c="height",d=t.offsetWidth,u=parseFloat(e.getPropertyValue("padding-left"))+parseFloat(e.getPropertyValue("padding-right")),m=parseFloat(r.getPropertyValue("margin-left"))+parseFloat(r.getPropertyValue("margin-right"))}switch(t.scalePosition){case"near":a.setProperty(l,i+"px"),s.setProperty(l,Math.max(isNaN?0:o,d-u-i-4-m-_)+"px");break;case"far":n.setProperty(l,i+"px"),s.setProperty(l,Math.max(isNaN?0:o,d-u-i-4-m-_)+"px");break;case"both":a.setProperty(l,i+"px"),n.setProperty(l,i+"px"),s.setProperty(l,Math.max(isNaN?0:o,d-u-2*i-4-m-_)+"px");break;case"none":s.setProperty(l,"")}s.setProperty(c,"100%"),a.setProperty(c,"100%"),n.setProperty(c,"100%")}}_appendTicksAndLabelsToScales(e,t){const a=this;function i(i){i.innerHTML=t,"scale"===a.ticksPosition&&(i.innerHTML+=e)}switch(a.scalePosition){case"near":i(a.$.scaleNear);break;case"far":i(a.$.scaleFar);break;case"both":i(a.$.scaleNear),i(a.$.scaleFar)}"track"===a.ticksPosition&&(a.$.trackTicksContainer.innerHTML=e)}_discardDecimalSeparator(e,t){if(void 0===t&&(t=this.decimalSeparator),"."!==t){let a=new RegExp(t,"g");return"string"==typeof e?e.replace(a,"."):e.toString().replace(a,".")}return e}_applyDecimalSeparator(e){const t=this;return"string"!=typeof e&&(e=e.toString()),"."!==t.decimalSeparator&&(e=e.replace(/\./g,t.decimalSeparator)),e}_validate(e,t,a,i){const r=this;let n,s,o;r._programmaticValueIsSet=i&&"interaction"===r.validation,n=e?r.value:t,!0!==a&&r.coerce?(s=r._numericProcessor.createDescriptor(n,!0,!0,!0),s=r.logarithmicScale?Math.pow(10,r._numericProcessor.getCoercedValue(Math.log10(s))):r._numericProcessor.getCoercedValue(s),o=s):"strict"===r.validation||!e&&!r._programmaticValueIsSet?(s=r._numericProcessor.createDescriptor(n,!0,!0,!0),o=s):(s=r._numericProcessor.createDescriptor(n,!0,!0,!1),o=r._numericProcessor.validate(s,r._minObject,r._maxObject)),r._numericProcessor.regexScientificNotation.test(o)&&(o=r._numericProcessor.scientificToDecimal(o)),o=r._discardDecimalSeparator(o,r.decimalSeparator),e?(r._number=o,r._drawValue=r.logarithmicScale?Math.log10(o):o,"numeric"===r.mode?r.value=s.toString():(r._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(s),r.value=s),delete r._valueBeforeCoercion,r._moveThumbBasedOnValue(r._drawValue)):r._numericProcessor.updateValue(s),r._programmaticValueIsSet=!1}_changeScaleType(){this._numericProcessor=new Smart.Utilities.NumericProcessor(this,"scaleType"),this._validateMinMax("both"),this._setTicksAndInterval(),this._scaleTypeChangedFlag=!0,this._validate(!0,this._number.toString()),this._scaleTypeChangedFlag=!1}_setTicksAndInterval(){const e=this;if(!e._isVisible()||e._renderingSuspended)return void(e._renderingSuspended=!0);let t=e._formatLabel(e.min),a=e._formatLabel(e.max);e._getRange(),e._tickIntervalHandler=new Smart.Utilities.TickIntervalHandler(e,t,a,"smart-label",e._settings.size,"integer"===e.scaleType,e.logarithmicScale),e._layout(),e.customInterval?("date"===e.mode&&e._calculateTickInterval(),e._intervalHasChanged=!0,e._numericProcessor.addCustomTicks()):(e._calculateTickInterval(),e._dateInterval?(e._intervalHasChanged=!0,e._numericProcessor.addCustomTicks()):e._numericProcessor.addTicksAndLabels())}_setFocusable(){const e=this;e.disabled||e.unfocusable?e.removeAttribute("tabindex"):e.tabIndex=e.tabIndex>0?e.tabIndex:0}_keyIncrementDecrement(e,t){const a=this,i="add"===e?1:-1,r=void 0===t;if(r&&(t=a.logarithmicScale?new Smart.Utilities.BigNumber(a._drawValue):a._drawValue),a.customInterval&&a.coerce){let n,s;r&&(a.logarithmicScale&&(t=a.value),"numeric"===a.mode&&(t=t.toString())),"numeric"===a.mode?(n=-1!==a.customTicks.indexOf(a.min)?a.customTicks.slice(0):[a.min].concat(a.customTicks),s=n.indexOf(t)):(n=-1!==a.customTicks.findIndex((function(e){return 0===e.compare(a._drawMin)}))?a.customTicks.slice(0):[a._drawMin].concat(a.customTicks),s=n.findIndex((function(e){return 0===e.compare(t)})));const o=n[s+1*i];return void 0!==o?o:t===a.max&&"subtract"===e?n[n.length-2]:t}if("numeric"===a.mode){let i=a._numericProcessor.incrementDecrement(t,e,a._validInterval);return a.logarithmicScale&&(a._drawValue=i,i=Math.pow(10,Math.round(i))),i}return"interaction"!==a.validation||-1!==a._valueDate.compare(a._minDate)&&1!==a._valueDate.compare(a._maxDate)||(a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),a._valueDate[a._dateIncrementMethod](i*parseFloat(a.interval),!1),a._drawValue=new Smart.Utilities.BigNumber(a._valueDate.getTimeStamp()),-1===a._drawValue.compare(a._drawMin)&&(a._drawValue=new Smart.Utilities.BigNumber(a._drawMin),a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),1===a._drawValue.compare(a._drawMax)&&(a._drawValue=new Smart.Utilities.BigNumber(a._drawMax),a._valueDate=Smart.Utilities.DateTime.fromFullTimeStamp(a._drawValue)),a._drawValue}_keydownHandler(e){const t=this;if(t.disabled||t.readonly)return;const a=e.charCode?e.charCode:e.which;if(-1===[35,36,37,38,39,40].indexOf(a))return;const i=[35,38,39].indexOf(a)>-1,r=[36,37,40].indexOf(a)>-1;if(e.preventDefault(),"floatingPoint"===t.scaleType){if(parseFloat(t.value)<=parseFloat(t.min)&&r||parseFloat(t.value)>=parseFloat(t.max)&&i)return}else{let e=new Smart.Utilities.BigNumber(t._drawValue);if(1!==e.compare(t._drawMin)&&r||-1!==e.compare(t._drawMax)&&i)return}let n;switch(a){case 40:case 37:n=t._keyIncrementDecrement("subtract");break;case 38:case 39:n=t._keyIncrementDecrement("add");break;case 36:t._drawValue=t._drawMin,n=t.min;break;case 35:t._drawValue=t._drawMax,n=t.max}return t._validate(!1,n,a),!1}_setDrawVariables(){const e=this;e.logarithmicScale?(e._drawValue=Math.log10(e.value),e._drawMin=Math.log10(e.min),e._drawMax=Math.log10(e.max)):(e._drawValue=e.value,e._drawMin=e.min,e._drawMax=e.max)}_validateOnLogarithmicScale(e,t){const a=this;function i(e){return Math.pow(10,Math.round(Math.log10(e)-Math.log10(5.5)+.5))}if(e)if(a.min<=0)a.min=1,a._drawMin=0;else if(Math.log10(a.min)%1!=0){let e=i(parseFloat(a.min));e>a.min&&(e/=10),a._drawMin=Math.log10(a.min)}else a._drawMin=Math.log10(a.min);if(t)if(a.max<=0)a.max=1,a._drawMax=0;else if(Math.log10(a.max)%1!=0){let e=i(parseFloat(a.max));e<a.max&&(e*=10),a._drawMax=Math.log10(a.max)}else a._drawMax=Math.log10(a.max);"integer"===a.scaleType&&(a._drawMin<0&&(a._drawMin=0,a.min=1),a._drawMax<0&&(a._drawMax=1,a.max=10)),a._drawMax===a._drawMin&&(a._drawMax=a._drawMin+1)}_getLayoutType(){const e=this.orientation,t=this.inverted,a=this.rightToLeft;this._normalLayout="horizontal"===e&&(!t&&!a||a&&t)||"vertical"===e&&t}_trackOnMouseEnterHandler(){const e=this;e.readonly||e.disabled||(e.$track.addClass("track-hovered"),e.$.track.setAttribute("hover",""))}_trackOnMouseLeaveHandler(){const e=this;e.readonly||e.disabled||(e.$track.removeClass("track-hovered"),e.$.track.removeAttribute("hover"))}_isVisible(){return!!(this.offsetWidth||this.offsetHeight||this.getClientRects().length)}_coerceCustomInterval(){if(!this.coerce)return;const e=this._valueBeforeCoercion,t=this.logarithmicScale?Math.pow(10,this._numericProcessor.getCoercedValue(Math.log10(this.value))):this._numericProcessor.getCoercedValue(this.value);this._validate(!1,t,!0,!0),this._valueBeforeCoercion=e}_handleDateScale(){const e=this,t=Smart.Utilities.DateTime;t||e.error(e.localize("missingReference",{elementType:e.nodeName.toLowerCase(),files:"smart.date.js"})),e._customTicks=e.customTicks,e._unitToMethod={Y:"addSeconds",Z:"addMilliseconds",E:"addMicroseconds",P:"addNanoseconds",T:"addPicoseconds",G:"addFemtoseconds",M:"addAttoseconds",k:"addZeptoseconds"},e._minDate=t.validateDate(e.min),e.min=e._minDate.getTimeStamp(),e._maxDate=t.validateDate(e.max),e.max=e._maxDate.getTimeStamp(),e.rangeSlider||(e._valueDate=t.validateDate(e.value),e.value=e._valueDate.getTimeStamp()),e._properties.min.serialize="_serializeMin",e._properties.max.serialize="_serializeMax",e._properties.value.serialize="_serializeValue",e.scaleType="integer",e.logarithmicScale=!1,e.wordLength="uint64";const a=["min","max","value"];for(let t=0;t<a.length;t++){const i=a[t];Object.defineProperty(e,i,{get:function(){return e.context===e?e.properties[i].value:e["_"+i+"Date"]},set(t){e.updateProperty(e,e._properties[i],t)}})}e._getEventValue=function(t){return t?(e.setAttribute("aria-valuetext",e._valueDate.toString("f")),e.value.toString()):e._valueDate.clone()}}_serializeMin(){return this._minDate.toString()}_serializeMax(){return this._maxDate.toString()}_serializeValue(){return this._valueDate.toString()}_redefineProperty(e){const t=this;Object.defineProperty(t,e,{get:function(){return t.properties[e].value},set(a){function i(e,t){return t instanceof Smart.Utilities.BigNumber?t.toString():t}const r=t.properties[e].value;if(JSON.stringify(r,i)!==JSON.stringify(a,i)&&(t.properties[e].value=a,t.isReady&&(!t.ownerElement||t.ownerElement&&t.ownerElement.isReady)&&t.context!==t)){const i=t.context;t.context=t,t.propertyChangedHandler(e,r,a),t.context=i}}})}_setAriaValue(e){const t=this;"valuenow"===e?t.setAttribute("aria-valuenow",t._getEventValue(!0)):(t.setAttribute("aria-valuemin",t.min.toString()),t.setAttribute("aria-valuemax",t.max.toString()))}})}});