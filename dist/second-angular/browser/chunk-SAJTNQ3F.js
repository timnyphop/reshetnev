import{$a as ee,Aa as Gt,Fa as Jt,Ga as nt,Ha as Yt,Ia as qt,Ja as Kt,K as S,Ka as ot,L as A,La as Qt,Ma as st,N as Ut,Na as $,O as Bt,Oa as Xt,P as zt,Q as jt,Qa as rt,Ra as te,S as tt,T,Ua as at,V as m,Va as N,W as Lt,Xa as U,Ya as ct,Z as E,Za as ut,_ as Zt,aa as et,bb as pt,ca as g,da as Vt,db as ie,ma as Wt,q as R,qa as it,r as X,s as Nt}from"./chunk-Q57TSLD7.js";import{B as O,Ba as _,Da as Ft,E as vt,Ga as k,J as V,K as D,Lb as l,Mb as x,Ob as At,Q as W,Qa as Mt,U as yt,Ua as Ot,V as Ht,W as w,Wa as J,X as G,Y as Dt,Z as bt,_b as Q,ca as P,cb as y,d as ft,db as wt,g as j,gb as b,h as L,ia as o,ib as Pt,jb as f,jc as Et,k as Z,lb as It,m as v,ma as Tt,nb as _t,oa as I,ob as kt,oc as $t,pb as xt,q as h,qa as u,sb as Y,ub as q,vb as K,w as mt,x as gt,xa as Ct,xb as Rt,yb as St,z as H}from"./chunk-NXHEDAB2.js";import{a as lt,b as dt}from"./chunk-JHI3MBHO.js";function he({currentTarget:e,relatedTarget:p}){return!et(p)||!et(e)||!e.contains(p)}var C=(()=>{class e extends ft{constructor(){super(t=>this.stream$.subscribe(t)),this.el=g(),this.zone=o(k),this.stream$=H(m(this.el,"mouseenter").pipe(h(Nt)),m(this.el,"mouseleave").pipe(h(X)),m(this.el,"mouseout").pipe(O(he),h(X))).pipe(D(),E(this.zone))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac})}}return e})();function le(e,p){e&1&&Y(0)}var de=["*"];function fe(e,p){if(e&1&&xt(0,"span",1),e&2){let t=p.polymorpheusOutlet;f("innerHTML",t,Mt)}}var me=e=>({$implicit:e});function ge(e,p){e&1&&Y(0)}function ve(e,p){if(e&1&&(_t(0,"div",1),b(1,ge,1,0,"ng-container",2),kt()),e&2){let t=p.$implicit;f("@tuiParentAnimation",void 0)("tuiActiveZoneParent",t.activeZone||null),J(),f("polymorpheusOutlet",t.component)("polymorpheusOutletContext",At(4,me,t))}}var ye=Bt(()=>Fe),se=(()=>{class e extends L{constructor(){super([])}add(t){this.next(this.value.concat(t))}remove(t){this.value.includes(t)&&this.next(this.value.filter(i=>i!==t))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),He=(()=>{class e extends Xt{constructor(){super(...arguments),this.type="hint"}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=_(e)))(n||e)}})()}static{this.\u0275dir=u({type:e,standalone:!0,features:[y]})}}return e})(),ne=["bottom-left","bottom","bottom-right","top-left","top","top-right","left-top","left","left-bottom","right-top","right","right-bottom"],De={direction:"bottom-left",showDelay:500,hideDelay:200,appearance:"",icon:"@tui.circle-help"},F=Ut(De);var hi=(()=>{class e{constructor(){this.options=o(F,{skipSelf:!0}),this.direction=this.options.direction,this.appearance=this.options.appearance,this.showDelay=this.options.showDelay,this.hideDelay=this.options.hideDelay,this.icon=this.options.icon,this.change$=new j}ngOnChanges(){this.change$.next()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=u({type:e,selectors:[["","tuiHintContent",""]],inputs:{content:[0,"tuiHintContent","content"],direction:[0,"tuiHintDirection","direction"],appearance:[0,"tuiHintAppearance","appearance"],showDelay:[0,"tuiHintShowDelay","showDelay"],hideDelay:[0,"tuiHintHideDelay","hideDelay"]},standalone:!0,features:[l([jt(F,e)]),Ct]})}}return e})(),ht=(()=>{class e extends st{constructor(){super(t=>this.stream$.subscribe(t)),this.el=g(),this.hovered$=o(C),this.options=o(F),this.visible=!1,this.toggle$=new j,this.stream$=H(this.toggle$.pipe(w(t=>v(t).pipe(V(t?0:this.tuiHintHideDelay))),G(this.hovered$),W()),this.hovered$.pipe(w(t=>v(t).pipe(V(t?this.tuiHintShowDelay:this.tuiHintHideDelay))),G(this.toggle$),W())).pipe(O(()=>this.enabled),h(t=>t&&(this.el.hasAttribute("tuiHintPointer")||!pt(this.el))),bt(t=>{this.visible=t})),this.parent=o(e,{optional:!0,skipSelf:!0}),this.tuiHintShowDelay=this.options.showDelay,this.tuiHintHideDelay=this.options.hideDelay,this.type="hint",this.enabled=!0}toggle(t=!this.visible){this.toggle$.next(t),this.parent?.toggle(t)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=u({type:e,inputs:{tuiHintShowDelay:"tuiHintShowDelay",tuiHintHideDelay:"tuiHintHideDelay"},exportAs:["tuiHintHover"],standalone:!0,features:[l([$(e),C]),y]})}}return e})(),d=8,B=22,s=0,r=1,re=(()=>{class e extends Jt{constructor(){super(...arguments),this.viewport=o(it),this.accessor=Yt("hint")(o(nt),o(ae)),this.points=ne.reduce((t,i)=>dt(lt({},t),{[i]:[0,0]}),{}),this.direction=o(F).direction,this.type="hint"}getPosition({width:t,height:i}){let n=this.accessor.getClientRect()??R,c=n.left+n.width/2,a=n.top+n.height/2;if(this.points["top-left"][s]=n.top-i-d,this.points["top-left"][r]=c-t+B,this.points.top[s]=this.points["top-left"][s],this.points.top[r]=c-t/2,this.points["top-right"][s]=this.points["top-left"][s],this.points["top-right"][r]=c-B,this.points["bottom-left"][s]=n.bottom+d,this.points["bottom-left"][r]=this.points["top-left"][r],this.points.bottom[s]=this.points["bottom-left"][s],this.points.bottom[r]=this.points.top[r],this.points["bottom-right"][s]=this.points["bottom-left"][s],this.points["bottom-right"][r]=this.points["top-right"][r],this.points["left-top"][s]=a-i+B,this.points["left-top"][r]=n.left-t-d,this.points.left[s]=a-i/2,this.points.left[r]=this.points["left-top"][r],this.points["left-bottom"][s]=a-B,this.points["left-bottom"][r]=this.points["left-top"][r],this.points["right-top"][s]=this.points["left-top"][s],this.points["right-top"][r]=n.right+d,this.points.right[s]=this.points.left[s],this.points.right[r]=this.points["right-top"][r],this.points["right-bottom"][s]=this.points["left-bottom"][s],this.points["right-bottom"][r]=this.points["right-top"][r],this.checkPosition(this.points[this.direction],t,i))return this.points[this.direction];let z=ne.find(M=>this.checkPosition(this.points[M],t,i));return this.points[z||this.fallback]}get fallback(){return this.points.top[s]>this.viewport.getClientRect().bottom-this.points.bottom[s]?"top":"bottom"}checkPosition([t,i],n,c){let a=this.viewport.getClientRect();return t>d/4&&i>d/4&&t+c<a.bottom-d/4&&i+n<a.right-d/4}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=_(e)))(n||e)}})()}static{this.\u0275dir=u({type:e,inputs:{direction:[0,"tuiHintDirection","direction"]},standalone:!0,features:[y]})}}return e})(),ae=(()=>{class e{constructor(){this.service=o(se),this.appearance=o(F).appearance,this.component=o(N),this.el=g(),this.activeZone=o(ct,{optional:!0}),this.type="hint"}set tuiHint(t){this.content=t,t||this.toggle(!1)}ngOnDestroy(){this.toggle(!1)}getClientRect(){return this.el.getBoundingClientRect()}toggle(t){t&&this.content?this.service.add(this):this.service.remove(this)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=u({type:e,selectors:[["","tuiHint","",5,"ng-container",5,"ng-template"]],inputs:{context:[0,"tuiHintContext","context"],appearance:[0,"tuiHintAppearance","appearance"],tuiHint:"tuiHint"},standalone:!0,features:[l([ot(e),Qt(e),{provide:N,deps:[ye,Tt],useClass:N}]),wt([He,{directive:ht,inputs:["tuiHintHideDelay","tuiHintHideDelay","tuiHintShowDelay","tuiHintShowDelay"]},{directive:re,inputs:["tuiHintDirection","tuiHintDirection"]}])]})}}return e})(),be=(()=>{class e extends ht{constructor(){super(...arguments),this.currentRect=R}getClientRect(){return this.currentRect}onMove({clientX:t,clientY:i}){this.currentRect=Vt(t,i)}static{this.\u0275fac=(()=>{let t;return function(n){return(t||(t=_(e)))(n||e)}})()}static{this.\u0275dir=u({type:e,selectors:[["","tuiHint","","tuiHintPointer",""]],hostBindings:function(i,n){i&1&&K("mousemove.silent",function(a){return n.onMove(a)})},standalone:!0,features:[l([ot(e),$(e)]),y]})}}return e})(),Te=(()=>{class e{constructor(){this.context=at()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=I({type:e,selectors:[["ng-component"]],hostVars:1,hostBindings:function(i,n){i&2&&q("@tuiParentAnimation",void 0)},standalone:!0,features:[x],decls:1,vars:1,consts:[[4,"polymorpheusOutlet"]],template:function(i,n){i&1&&b(0,le,1,0,"ng-container",0),i&2&&f("polymorpheusOutlet",n.context.$implicit.content)},dependencies:[U],encapsulation:2,data:{animation:[ut]},changeDetection:0})}}return e})();var oe=4,Ce=[rt,C,qt("hint",re),Kt("hint",ae)],Fe=(()=>{class e{constructor(){this.el=g(),this.hover=o(ht),this.vvs=o(te),this.viewport=o(it),this.options=ie(o(Wt)),this.pointer=o(be,{optional:!0}),this.accessor=o(nt),this.hint=at().$implicit,this.appearance=this.hint.appearance||this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme"),o(rt).pipe(Dt(()=>this.hint.el.isConnected),h(t=>this.vvs.correct(t)),A()).subscribe({next:([t,i])=>this.update(t,i),complete:()=>this.hover.toggle(!1)}),o(C).pipe(A()).subscribe(t=>this.hover.toggle(t))}get content(){return this.hint.component.component===Te?"":this.hint.content}onClick(t){(!t.closest("tui-hint")&&!this.hint.el.contains(t)||pt(this.hint.el))&&this.hover.toggle(!1)}apply(t,i,n,c){this.el.style.top=t,this.el.style.left=i,this.el.style.setProperty("--top",n),this.el.style.setProperty("--left",c)}update(t,i){let{height:n,width:c}=this.el.getBoundingClientRect(),a=this.accessor.getClientRect(),z=this.viewport.getClientRect();if(a===R||!n||!c)return;let M=S(i,oe,z.width-c-oe),[ce,ue]=this.vvs.correct([a.top+a.height/2-t,a.left+a.width/2-M]);this.apply(T(Math.round(t)),T(Math.round(M)),T(Math.round(S(ce,1,n-1))),T(Math.round(S(ue,1,c-1))))}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=I({type:e,selectors:[["tui-hint"]],hostVars:5,hostBindings:function(i,n){i&1&&K("click",function(a){return n.onClick(a.target)},!1,Ot),i&2&&(q("@tuiFadeIn",n.options),Pt("data-appearance",n.appearance)("tuiTheme",n.appearance),It("_untouchable",n.pointer))},standalone:!0,features:[l(Ce),x],ngContentSelectors:de,decls:2,vars:2,consts:[[3,"innerHTML",4,"polymorpheusOutlet","polymorpheusOutletContext"],[3,"innerHTML"]],template:function(i,n){i&1&&(Rt(),St(0),b(1,fe,1,1,"span",0)),i&2&&(J(),f("polymorpheusOutlet",n.content)("polymorpheusOutletContext",n.hint.context))},dependencies:[U],styles:['[_nghost-%COMP%]{position:absolute;max-inline-size:18rem;min-block-size:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word;line-height:1.25rem}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.5rem;block-size:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-status-negative)}[data-appearance=dark][_nghost-%COMP%]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}'],data:{animation:[ee]},changeDetection:0})}}return Z([tt],e.prototype,"apply",null),e})(),li=(()=>{class e extends st{constructor(){super(t=>this.stream$.subscribe(t)),this.doc=o(Et),this.el=g(),this.zone=o(k),this.id$=new L(""),this.stream$=this.id$.pipe(D(),Lt(()=>mt(this.doc,"keydown",{capture:!0}),zt),w(()=>this.focused?v(!1):H(m(this.doc,"keyup"),m(this.element,"blur")).pipe(h(()=>this.focused))),vt(t=>t?gt(1e3,Zt(this.zone)):v(null)),Ht(!1),D(),yt(1),E()),this.type="hint"}set tuiHintDescribe(t){this.id$.next(t||"")}get element(){return this.doc.getElementById(this.id$.value||"")||this.el}get focused(){return Gt(this.element)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275dir=u({type:e,selectors:[["","tuiHintDescribe",""]],inputs:{tuiHintDescribe:"tuiHintDescribe"},standalone:!0,features:[l([$(e)]),y]})}}return Z([tt],e.prototype,"element",null),e})();var di=(()=>{class e{constructor(){this.hints$=o(se),this.destroyRef=o(Ft),this.cdr=o(Q),this.hints=[]}ngOnInit(){this.hints$.pipe(A(this.destroyRef)).subscribe(t=>{this.hints=t,this.cdr.detectChanges()})}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=I({type:e,selectors:[["tui-hints"]],hostAttrs:["aria-live","polite"],standalone:!0,features:[x],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(i,n){i&1&&b(0,ve,2,6,"div",0),i&2&&f("ngForOf",n.hints)},dependencies:[$t,U,ct],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}"],data:{animation:[ut]}})}}return e})();export{hi as a,ht as b,ae as c,Fe as d,li as e,di as f};
