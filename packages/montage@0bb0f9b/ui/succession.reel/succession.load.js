montageDefine("0bb0f9b","ui/succession.reel/succession",{dependencies:["ui/component"],factory:function(t,e,n){var i=t("ui/component").Component;e.Succession=i.specialize({contentBuildInAnimation:{value:void 0},contentBuildOutAnimation:{value:void 0},content:{get:function(){return this.history.length?this.history[this.history.length-1]:void 0},set:function(t){t?this.history.push(t):this.history.clear()}},_firstComponent:{value:void 0},_history:{value:void 0},history:{get:function(){return this._history||(this._history=[],this._history.addBeforeRangeChangeListener(this),this._history.addRangeChangeListener(this)),this._history},set:function(t){t=Array.isArray(t)?t:[],this.history!==t&&(!this.history.length&&t.length&&(this._firstComponent=t[0]),this.history.splice.apply(this.history,[0,this.history.length].concat(t)))}},hasTemplate:{enumerable:!1,value:!1},_prepareForBuild:{value:function(t){t&&(this.contentBuildInAnimation&&(t.buildInAnimationOverride=this.contentBuildInAnimation),this.contentBuildOutAnimation&&(t.buildOutAnimationOverride=this.contentBuildOutAnimation))}},_updateDomContentWith:{value:function(t){if(t){var e;t.element?e=t.element:(e=document.createElement("div"),e.id=t.identifier||"appendDiv",t.element=e),this.domContent=e,t.needsDraw=!0}else this.domContent=null}},handleRangeWillChange:{value:function(t,e,n){this._prepareForBuild(this.content)}},handleRangeChange:{value:function(t,e,n){var i=this.history?this.history.length:0,s=t.length||e.length,o=s&&n+t.length===i,h=o&&!e.length&&n,a=o&&!t.length&&i,u=o&&!h&&!a&&i,r=o&&!i;o&&(this.classList[h?"add":"remove"]("montage-Succession--push"),this.classList[a?"add":"remove"]("montage-Succession--pop"),this.classList[u?"add":"remove"]("montage-Succession--replace"),this.classList[r?"add":"remove"]("montage-Succession--clear"),this._prepareForBuild(this.content),this.dispatchBeforeOwnPropertyChange("content",this.content),this._updateDomContentWith(this.content),this.dispatchOwnPropertyChange("content",this.content))}},handleBuildInEnd:{value:function(t){this.needsCssClassCleanup=!0,this.needsDraw=!0}},handleBuildOutEnd:{value:function(t){this.needsCssClassCleanup=!0,this.needsDraw=!0}},enterDocument:{value:function(t){var e=t&&this.extractDomArgument("content"),n=e&&e.component,i=this;n&&n.expandComponent().then(function(){i.history.push(n)}),t&&(this.addEventListener("buildInEnd",this),this.addEventListener("buildOutEnd",this))}},draw:{value:function(){this.needsCssClassCleanup&&(this.needsCssClassCleanup=!1,this.classList.deleteEach(["montage-Succession--push","montage-Succession--pop","montage-Succession--replace","montage-Succession--clear"]))}}})}});