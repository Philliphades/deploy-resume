(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B0QU:function(t,n,i){"use strict";i.d(n,"a",function(){return s}),i.d(n,"b",function(){return e}),i.d(n,"c",function(){return r});var l=i("CcnG"),o=i("gI3B");class e{constructor(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1}}class s{constructor(t,n,i){this.elRef=n,this.document=i,this.onClick=new l.EventEmitter,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new l.EventEmitter,this._viewportChangedSubscriber=null,this.options=new e,this.defaultOptions=new e,this._lastPercent=0,this._gradientUUID=null,this.render=(()=>{this.options.lazy?this.isInViewport&&(this._lastPercent=this.options.percent):this._lastPercent=this.options.percent}),this.polarToCartesian=((t,n,i,l)=>{let o=l*Math.PI/180;return{x:t+Math.sin(o)*i,y:n-Math.cos(o)*i}}),this.draw=(t=>{let n=(t=void 0===t?this.options.percent:Math.abs(t))>100?100:t,i=2*this.options.radius+2*this.options.outerStrokeWidth;this.options.showBackground&&(i+=2*this.options.backgroundStrokeWidth+this.max(0,2*this.options.backgroundPadding));let l,o,e={x:i/2,y:i/2},s=e.x,r=e.y-this.options.radius,u=this.polarToCartesian(e.x,e.y,this.options.radius,360*(this.options.clockwise?n:100-n)/100);100===n&&(u.x=u.x+(this.options.clockwise?-.01:.01)),[l,o]=n>50?this.options.clockwise?[1,1]:[1,0]:this.options.clockwise?[0,1]:[0,0];let a=this.options.animateSubtitle?t:this.options.percent,h={x:e.x,y:e.y,textAnchor:"middle",color:this.options.titleColor,fontSize:this.options.titleFontSize,fontWeight:this.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.titleFormat&&"Function"===this.options.titleFormat.constructor.name){let n=this.options.titleFormat(this.options.animateTitle?t:this.options.percent);n instanceof Array&&(h.texts=[...n])}else"auto"===this.options.title||this.options.title instanceof Array&&(h.texts=[...this.options.title]);let d={x:e.x,y:e.y,textAnchor:"middle",color:this.options.subtitleColor,fontSize:this.options.subtitleFontSize,fontWeight:this.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.subtitleFormat&&"Function"===this.options.subtitleFormat.constructor.name){let t=this.options.subtitleFormat(a);t instanceof Array&&(d.texts=[...t])}else this.options.subtitle instanceof Array&&(d.texts=[...this.options.subtitle]);let c={text:`${this.options.units}`,fontSize:this.options.unitsFontSize,fontWeight:this.options.unitsFontWeight,color:this.options.unitsColor},p=0;if(this.options.showTitle&&(p+=h.texts.length),this.options.showSubtitle&&(p+=d.texts.length),this.options.showTitle)for(let g of h.texts);if(this.options.showSubtitle)for(let g of d.texts);null===this._gradientUUID&&(this._gradientUUID=this.uuid()),this.svg={viewBox:`0 0 ${i} ${i}`,width:this.options.responsive?"100%":i,height:this.options.responsive?"100%":i,backgroundCircle:{cx:e.x,cy:e.y,r:this.options.radius+this.options.outerStrokeWidth/2+this.options.backgroundPadding,fill:this.options.backgroundColor,fillOpacity:this.options.backgroundOpacity,stroke:this.options.backgroundStroke,strokeWidth:this.options.backgroundStrokeWidth},path:{d:`M ${s} ${r}\n        A ${this.options.radius} ${this.options.radius} 0 ${l} ${o} ${u.x} ${u.y}`,stroke:this.options.outerStrokeColor,strokeWidth:this.options.outerStrokeWidth,strokeLinecap:this.options.outerStrokeLinecap,fill:"none"},circle:{cx:e.x,cy:e.y,r:this.options.radius-this.options.space-this.options.outerStrokeWidth/2-this.options.innerStrokeWidth/2,fill:"none",stroke:this.options.innerStrokeColor,strokeWidth:this.options.innerStrokeWidth},title:h,units:c,subtitle:d,image:{x:e.x-this.options.imageWidth/2,y:e.y-this.options.imageHeight/2,src:this.options.imageSrc,width:this.options.imageWidth,height:this.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+this._gradientUUID,colorStop1:this.options.outerStrokeColor,colorStop2:"transparent"===this.options.outerStrokeGradientStopColor?"#FFF":this.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+this._gradientUUID,colorStop1:this.options.backgroundColor,colorStop2:"transparent"===this.options.backgroundGradientStopColor?"#FFF":this.options.backgroundGradientStopColor}}}),this.getAnimationParameters=((t,n)=>{let i,l,o,e=this.options.startFromZero?0:t<0?0:t,s=Math.abs(Math.round((n<0?0:this.min(n,this.options.maxPercent))-e));return s>=100?(i=100,l=this.options.animateTitle||this.options.animateSubtitle?Math.round(s/i):1):(i=s,l=1),(o=Math.round(this.options.animationDuration/i))<10&&(i=this.options.animationDuration/(o=10),l=!this.options.animateTitle&&!this.options.animateSubtitle&&s>100?Math.round(100/i):Math.round(s/i)),l<1&&(l=1),{times:i,step:l,interval:o}}),this.animate=((t,n)=>{let i=this.options.startFromZero?0:t,l=n,{step:e,interval:s}=this.getAnimationParameters(i,l),r=i;this._timerSubscription=Object(o.a)(0,s).subscribe(i<l?()=>{r+=e}:()=>{r-=e})}),this.emitClickEvent=(t=>{}),this.applyOptions=(()=>{for(let t of Object.keys(this.options))this.hasOwnProperty(t)&&void 0!==this[t]?this.options[t]=this[t]:this.templateOptions&&void 0!==this.templateOptions[t]&&(this.options[t]=this.templateOptions[t]);this.options.radius=Math.abs(+this.options.radius),this.options.space=+this.options.space,this.options.percent=+this.options.percent>0?+this.options.percent:0,this.options.maxPercent=Math.abs(+this.options.maxPercent),this.options.animationDuration=Math.abs(this.options.animationDuration),this.options.outerStrokeWidth=Math.abs(+this.options.outerStrokeWidth),this.options.innerStrokeWidth=Math.abs(+this.options.innerStrokeWidth),this.options.backgroundPadding=+this.options.backgroundPadding}),this.getRelativeY=((t,n)=>(1*(t-n/2)-.18).toFixed(2)+"em"),this.min=((t,n)=>t<n?t:n),this.max=((t,n)=>t>n?t:n),this.uuid=(()=>{var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?i:3&i|8).toString(16)})}),this.findSvgElement=function(){if(null===this.svgElement){let t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=(()=>{this.isInViewport=this.isElementInViewport(this.svgElement)}),this.onScroll=(t=>{}),this.loadEventsForLazyMode=(()=>{this.options.lazy&&null===this._viewportChangedSubscriber&&(this._viewportChangedSubscriber=this.onViewportChanged.subscribe(({oldValue:t,newValue:n})=>{}))}),this.unloadEventsForLazyMode=(()=>{null!==this._viewportChangedSubscriber&&(this._viewportChangedSubscriber=null)}),this.document=i,this.window=this.document.defaultView}isDrawing(){return this._timerSubscription&&!this._timerSubscription.closed}isElementInViewport(t){if(null===t||void 0===t)return!1;let n,i=t.getBoundingClientRect(),l=t.parentNode;do{if(i.top>=(n=l.getBoundingClientRect()).bottom)return!1;if(i.bottom<=n.top)return!1;if(i.left>=n.right)return!1;if(i.right<=n.left)return!1;l=l.parentNode}while(l!=this.document.body);return!(i.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||i.bottom<=0||i.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||i.right<=0)}ngOnInit(){}ngOnDestroy(){}ngOnChanges(t){}}class r{static forRoot(t={}){return{ngModule:r,providers:[{provide:e,useValue:t}]}}}},ITXy:function(t,n,i){"use strict";i.d(n,"a",function(){return e}),i.d(n,"b",function(){return C});var l=i("CcnG"),o=(i("B0QU"),i("Ip0R")),e=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),l["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.outerLinearGradient.id),t(n,1,0,i.svg.outerLinearGradient.colorStop1,1),t(n,2,0,i.svg.outerLinearGradient.colorStop2,1)})}function r(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),l["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.radialGradient.id),t(n,1,0,i.svg.radialGradient.colorStop1,1),t(n,2,0,i.svg.radialGradient.colorStop2,1)})}function u(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.backgroundCircle.cx,i.svg.backgroundCircle.cy,i.svg.backgroundCircle.r,i.svg.backgroundCircle.fill,i.svg.backgroundCircle.fillOpacity,i.svg.backgroundCircle.stroke,i.svg.backgroundCircle.strokeWidth)})}function a(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.backgroundCircle.cx,i.svg.backgroundCircle.cy,i.svg.backgroundCircle.r,l["\u0275inlineInterpolate"](1,"url(#",i.svg.radialGradient.id,")"),i.svg.backgroundCircle.fillOpacity,i.svg.backgroundCircle.stroke,i.svg.backgroundCircle.strokeWidth)})}function h(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](2,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,a)),l["\u0275did"](4,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){var i=n.component;t(n,2,0,!i.options.backgroundGradient),t(n,4,0,i.options.backgroundGradient)},null)}function d(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.circle.cx,i.svg.circle.cy,i.svg.circle.r,i.svg.circle.fill,i.svg.circle.stroke,i.svg.circle.strokeWidth)})}function c(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.path.d,i.svg.path.stroke,i.svg.path.strokeWidth,i.svg.path.strokeLinecap,i.svg.path.fill)})}function p(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.path.d,l["\u0275inlineInterpolate"](1,"url(#",i.svg.outerLinearGradient.id,")"),i.svg.path.strokeWidth,i.svg.path.strokeLinecap,i.svg.path.fill)})}function g(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](2,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,p)),l["\u0275did"](4,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){var i=n.component;t(n,2,0,!i.options.outerStrokeGradient),t(n,4,0,i.options.outerStrokeGradient)},null)}function f(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.title.x,i.svg.title.y,n.context.$implicit.dy,i.svg.title.fontSize,i.svg.title.fontWeight,i.svg.title.color),t(n,1,0,n.context.$implicit.span)})}function v(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](2,278528,null,0,o.k,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){t(n,2,0,n.component.svg.title.tspans)},null)}function m(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.units.fontSize,i.svg.units.fontWeight,i.svg.units.color),t(n,1,0,i.svg.units.text)})}function k(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.subtitle.x,i.svg.subtitle.y,n.context.$implicit.dy,i.svg.subtitle.fontSize,i.svg.subtitle.fontWeight,i.svg.subtitle.color),t(n,1,0,n.context.$implicit.span)})}function b(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,k)),l["\u0275did"](2,278528,null,0,o.k,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){t(n,2,0,n.component.svg.subtitle.tspans)},null)}function w(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,v)),l["\u0275did"](2,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](4,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,b)),l["\u0275did"](6,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var i=n.component;t(n,2,0,i.options.showTitle),t(n,4,0,i.options.showUnits),t(n,6,0,i.options.showSubtitle)},function(t,n){var i=n.component;t(n,0,0,i.svg.circle.cx,i.svg.circle.cy,i.svg.title.textAnchor)})}function x(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,function(t,n){var i=n.component;t(n,0,0,i.svg.image.height,i.svg.image.width,i.svg.image.src,i.svg.image.x,i.svg.image.y)})}function S(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],function(t,n,i){var l=!0;return"click"===n&&(l=!1!==t.component.emitClickEvent(i)&&l),l},null,null)),(t()(),l["\u0275eld"](1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](3,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](5,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](7,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](9,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](11,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,w)),l["\u0275did"](13,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,x)),l["\u0275did"](15,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var i=n.component;t(n,3,0,i.options.outerStrokeGradient),t(n,5,0,i.options.backgroundGradient),t(n,7,0,i.options.showBackground),t(n,9,0,i.options.showInnerStroke),t(n,11,0,i.options.percent-0!=0||i.options.showZeroOuterStroke),t(n,13,0,!i.options.showImage&&(i.options.showTitle||i.options.showUnits||i.options.showSubtitle)),t(n,15,0,i.options.showImage)},function(t,n){var i=n.component;t(n,0,0,i.svg.viewBox,i.svg.height,i.svg.width,i.options.class)})}function C(t){return l["\u0275vid"](0,[(t()(),l["\u0275and"](16777216,null,null,1,null,S)),l["\u0275did"](1,16384,null,0,o.l,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,1,0,n.component.svg)},null)}}}]);