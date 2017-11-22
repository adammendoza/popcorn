montageDefine("0bb0f9b","ui/loader.reel/loader",{dependencies:["../component","../../core/logger","../../core/event/event-manager"],factory:function(e,n,t){var i=e("../component"),o=i.Component,a=i.__root__,r=e("../../core/logger").logger("loader"),u=e("../../core/event/event-manager").defaultEventManager,m="montage-app-loader",s="montage-app-bootstrapping",d="montage-app-loading",l="montage-app-first-load",h="montage-app-loaded",c=0,p=1,g=2;n.Loader=o.specialize({mainModule:{value:"ui/main.reel"},mainName:{value:"Main"},includeFrameworkModules:{value:!1},minimumBootstrappingDuration:{value:0},minimumLoadingDuration:{value:0},minimumFirstLoadingDuration:{value:null},minimumFirstBootstrappingDuration:{value:null},_initializedModules:{value:null},element:{get:function(){if(!this._element){var e=document.getElementsByClassName("loading")[0];e||(e=document.createElement("div"),document.body.appendChild(e)),this.element=e}return this._element},set:function(e){Object.getOwnPropertyDescriptor(o.prototype,"element").set.call(this,e)}},initializedModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._initializedModules||this.includeFrameworkModules?this._initializedModules:this._initializedModules.slice(this._frameworkModuleCount-1)},set:function(e){this._initializedModules=e}},_requiredModules:{value:null},requiredModules:{dependencies:["includeFrameworkModules"],enumerable:!1,get:function(){return!this._requiredModules||this.includeFrameworkModules?this._requiredModules:this._requiredModules.slice(this._frameworkModuleCount-1)},set:function(e){this._requiredModules=e}},_currentStage:{value:c},currentStage:{get:function(){return this._currentStage},set:function(e){e!==this._currentStage&&(r.isDebug&&r.debug(this,"CURRENT STAGE: "+e),this._currentStage=e,p===e?(a.classList.remove(s),a.classList.add(d)):g===e&&(a.classList.remove(s),a.classList.remove(d),a.classList.add(h),this.needsDraw=!0))}},_readyToShowLoader:{value:!1},isLoadingMainComponent:{value:null},readyToShowLoader:{get:function(){return this._readyToShowLoader},set:function(e){e===this._readyToShowLoader&&(this._readyToShowLoader=e,this.needsDraw=!0)}},readyToShowMainComponent:{get:function(){return!!this._mainComponent}},_frameworkModuleCount:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!1},_mainComponent:{value:null},_mainComponentEnterDocument:{value:null},_showLoadingTimeout:{enumerable:!1,value:null},_showMainComponentTimeout:{enumerable:!1,value:null},enterDocument:{value:function(){r.isDebug&&r.debug(this,"enterDocument"),this._loadLoaderContext(),this._loadMainComponent(),this.readyToShowLoader=!0;var e=document._montageTiming,n=Date.now(),t=this.minimumBootstrappingDuration-(n-e.bootstrappingStartTime);if(t>0){r.isDebug&&r.debug(this,"still need to show bootstrapper for another "+t+"ms");var i=this;this._showLoadingTimeout=setTimeout(function(){e.bootstrappingEndTime=Date.now(),i._showLoadingTimeout=null,i._revealLoader()},t)}else e.bootstrappingEndTime=n,this._revealLoader()}},_loadLoaderContext:{value:function(){this.application.isFirstLoad&&(a.classList.add(l),null!==this.minimumFirstLoadingDuration&&(this.minimumLoadingDuration=this.minimumFirstLoadingDuration),null!==this.minimumFirstBootstrappingDuration&&(this.minimumBootstrappingDuration=this.minimumFirstBootstrappingDuration))}},_revealLoader:{value:function(){r.isDebug&&r.debug(this,"_revealLoader"),document._montageTiming.loadingStartTime=Date.now(),this.currentStage=p,this._waitForLoadingIndicatorIfNeeded();var e,n,t,i,o=document.getElementById(m);if(o)for(n=o.children,e=0;t=n[e];e++)(i=t.component)&&(i.attachToParentComponent(),i.needsDraw=!0)}},_revealMainComponent:{value:function(){r.isDebug&&r.debug(this,"_revealMainComponent"),this.currentStage=g}},_loadMainComponent:{value:function(){r.isDebug&&r.debug(this,"_loadMainComponent"),this.isLoadingMainComponent=!0;var e=this;return global.require.async(this.mainModule).then(function(n){if(!(e.mainName in n))throw new Error(e.mainName+" was not found in "+e.mainModule);return e._mainLoadedCallback(n)})}},_mainLoadedCallback:{value:function(e){return r.isDebug&&r.debug(this,"_mainLoadedCallback"),this._mainComponent=new e[this.mainName],this._mainComponentEnterDocument=this._mainComponent.enterDocument,this._mainComponent.enterDocument=this.mainComponentEnterDocument.bind(this),this._mainComponent.setElementWithParentComponent(document.createElement("div"),this),this._mainComponent.attachToParentComponent(),this._mainComponent._canDrawOutsideDocument=!0,this._mainComponent.needsDraw=!0,this}},mainComponentEnterDocument:{value:function(){var e=this._mainComponent;if(r.isDebug&&r.debug(this,"main preparing to draw"),this.isLoadingMainComponent=!1,this.childComponents=[this._mainComponent],this.element.parentElement.appendChild(this._mainComponent.element),this._waitForLoadingIndicatorIfNeeded(),u.unregisterEventHandlerForElement(this.element),e.attachToParentComponent(),e.enterDocument=this._mainComponentEnterDocument,e.enterDocument)return e.enterDocument.apply(e,arguments)}},_waitForLoadingIndicatorIfNeeded:{value:function(){if(!this._showMainComponentTimeout&&!this.isLoadingMainComponent&&!this._showLoadingTimeout){var e=document._montageTiming,n=Date.now(),t=this,i=this.minimumLoadingDuration-(n-e.loadingStartTime);i>0?(r.isDebug&&r.debug(this,"show loader for another "+i+"ms"),this._showMainComponentTimeout=setTimeout(function(){r.isDebug&&r.debug(this,"ok, shown loader long enough"),e.loadingEndTime=Date.now(),t._revealMainComponent()},i)):(e.loadingEndTime=n,this._revealMainComponent())}}},draw:{value:function(){g===this._currentStage&&(this._dispatchLoadEvent(),this.detachFromParentComponent(),this.element.parentElement.removeChild(this.element))}},_dispatchLoadEvent:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("componentLoaded",!0,!0,this._mainComponent),this.dispatchEvent(e,!0,!0)}}})}});