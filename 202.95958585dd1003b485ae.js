(self.webpackChunkpro_gamin=self.webpackChunkpro_gamin||[]).push([[202],{3202:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ListModule:()=>q});var n=r(1116),a=r(3337),s=r(1922),o=r(5366),i=r(4670),m=r(2935),d=r(9199),c=r(7064),f=r(9861),p=r(3169),l=r(6136);function h(t,e){if(1&t&&(o.O4$(),o._UZ(0,"circle",3)),2&t){const t=o.oxw();o.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),o.uIk("r",t._getCircleRadius())}}function g(t,e){if(1&t&&(o.O4$(),o._UZ(0,"circle",3)),2&t){const t=o.oxw();o.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),o.uIk("r",t._getCircleRadius())}}function u(t,e){if(1&t&&(o.O4$(),o._UZ(0,"circle",3)),2&t){const t=o.oxw();o.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),o.uIk("r",t._getCircleRadius())}}function k(t,e){if(1&t&&(o.O4$(),o._UZ(0,"circle",3)),2&t){const t=o.oxw();o.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),o.uIk("r",t._getCircleRadius())}}const _=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class x{constructor(t){this._elementRef=t}}const A=(0,c.pj)(x,"primary"),w=new o.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let S=(()=>{class t extends A{constructor(e,r,n,a,s){super(e),this._elementRef=e,this._document=n,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const o=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),o.has(n.head)||o.set(n.head,new Set([100])),this._fallbackAnimation=r.EDGE||r.TRIDENT,this._noopAnimations="NoopAnimations"===a&&!!s&&!s._forceAnimations,s&&(s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=(0,f.su)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=(0,f.su)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,(0,f.su)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=(0,p.kV)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const t=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,r=this._diameter,n=t._diameters;let a=n.get(e);if(!a||!a.has(r)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),t.textContent=this._getAnimationText(),e.appendChild(t),a||(a=new Set,n.set(e,a)),a.add(r)}}_getAnimationText(){const t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(p.t4),o.Y36(n.K0,8),o.Y36(l.Qb,8),o.Y36(w))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(o.uIk("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),o.Udp("width",e.diameter,"px")("height",e.diameter,"px"),o.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[o.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(o.O4$(),o.TgZ(0,"svg",0),o.YNc(1,h,1,9,"circle",1),o.YNc(2,g,1,7,"circle",2),o.qZA()),2&t&&(o.Udp("width",e.diameter,"px")("height",e.diameter,"px"),o.Q6J("ngSwitch","indeterminate"===e.mode),o.uIk("viewBox",e._getViewBox()),o.xp6(1),o.Q6J("ngSwitchCase",!0),o.xp6(1),o.Q6J("ngSwitchCase",!1))},directives:[n.RF,n.n9],styles:[_],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t})(),y=(()=>{class t extends S{constructor(t,e,r,n,a){super(t,e,r,n,a),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(p.t4),o.Y36(n.K0,8),o.Y36(l.Qb,8),o.Y36(w))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(o.Udp("width",e.diameter,"px")("height",e.diameter,"px"),o.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[o.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(o.O4$(),o.TgZ(0,"svg",0),o.YNc(1,u,1,9,"circle",1),o.YNc(2,k,1,7,"circle",2),o.qZA()),2&t&&(o.Udp("width",e.diameter,"px")("height",e.diameter,"px"),o.Q6J("ngSwitch","indeterminate"===e.mode),o.uIk("viewBox",e._getViewBox()),o.xp6(1),o.Q6J("ngSwitchCase",!0),o.xp6(1),o.Q6J("ngSwitchCase",!1))},directives:[n.RF,n.n9],styles:[_],encapsulation:2,changeDetection:0}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.BQ,n.ez],c.BQ]}),t})();function C(t,e){1&t&&(o.TgZ(0,"th",11),o._uU(1," NAME "),o.qZA())}function v(t,e){if(1&t&&(o.TgZ(0,"td",12),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.name," ")}}function U(t,e){1&t&&(o.TgZ(0,"th",11),o._uU(1," AUTHORS "),o.qZA())}function E(t,e){if(1&t&&(o.TgZ(0,"td",12),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.authors," ")}}function R(t,e){1&t&&(o.TgZ(0,"th",11),o._uU(1," COUNTRY "),o.qZA())}function T(t,e){if(1&t&&(o.TgZ(0,"td",12),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.country," ")}}function N(t,e){1&t&&(o.TgZ(0,"th",11),o._uU(1," PUBLISHER "),o.qZA())}function Z(t,e){if(1&t&&(o.TgZ(0,"td",12),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.publisher," ")}}function D(t,e){1&t&&o._UZ(0,"tr",13)}function L(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tr",14),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw(2).handleRowClick(e)}),o.qZA()}}function Y(t,e){if(1&t&&(o.ynx(0),o.TgZ(1,"table",2),o.ynx(2,3),o.YNc(3,C,2,0,"th",4),o.YNc(4,v,2,1,"td",5),o.BQk(),o.ynx(5,6),o.YNc(6,U,2,0,"th",4),o.YNc(7,E,2,1,"td",5),o.BQk(),o.ynx(8,7),o.YNc(9,R,2,0,"th",4),o.YNc(10,T,2,1,"td",5),o.BQk(),o.ynx(11,8),o.YNc(12,N,2,0,"th",4),o.YNc(13,Z,2,1,"td",5),o.BQk(),o.YNc(14,D,1,0,"tr",9),o.YNc(15,L,1,0,"tr",10),o.qZA(),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("dataSource",t.data$),o.xp6(13),o.Q6J("matHeaderRowDef",t.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",t.displayedColumns)}}function B(t,e){1&t&&(o.TgZ(0,"div",15),o._UZ(1,"mat-spinner"),o.qZA())}const O=[{path:"",component:(()=>{class t{constructor(t,e){this.booksSvc=t,this.dialog=e,this.data$=this.booksSvc.getBooks("https://www.anapioficeandfire.com/api/books?page=1&pageSize=50"),this.displayedColumns=["name","authors","country","publisher"]}ngOnInit(){}handleRowClick(t){console.dir(t),this.dialog.open(s.d,{data:t})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.y),o.Y36(m.uw))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-list"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["matSpinner",""],["mat-table","",1,"mat-elevation-z8","list",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","mat-cell","",4,"matCellDef"],["matColumnDef","authors"],["matColumnDef","country"],["matColumnDef","publisher"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","matRipple","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-header-cell",""],["mat-cell","","mat-cell",""],["mat-header-row",""],["mat-row","","matRipple","",3,"click"],[1,"centered",2,"height","100vh"]],template:function(t,e){if(1&t&&(o.YNc(0,Y,16,3,"ng-container",0),o.ALo(1,"async"),o.YNc(2,B,2,0,"ng-template",null,1,o.W1O)),2&t){const t=o.MAs(3);o.Q6J("ngIf",o.lcZ(1,2,e.data$))("ngIfElse",t)}},directives:[n.O5,d.BZ,d.w1,d.fO,d.Dz,d.as,d.nj,d.ge,d.ev,d.XQ,d.Gk,c.wG,y],pipes:[n.Ov],styles:[".list[_ngcontent-%COMP%]{width:100%}.centered[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"]}),t})()}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),t})();var I=r(2693),Q=r(4369),X=r(148),W=r(6278),$=r(7307);let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.ez,V,I.JF,d.p0,c.si,m.Is,Q.ot,X.N,W.t,$.Ps,b]]}),t})()}}]);