montageDefine("825a7f5","ui/select.reel/select",{dependencies:["montage/ui/base/abstract-select"],factory:function(e,t,n){var i=e("montage/ui/base/abstract-select").AbstractSelect;t.Select=i.specialize({constructor:{value:function(){this["super"](),this.classList.add("digit-Select")}},enterDocument:{value:function(e){this["super"](e),e&&this.element.addEventListener("change",this,!1)}},handleChange:{value:function(){var e=this.contentController.organizedContent,t=this.element.selectedIndex;this.value=e[t]}},draw:{value:function(){var e,t=this.contentController.organizedContent;this._contentIsDirty&&(this.drawOptions(),this._contentIsDirty=!1),e=t.indexOf(this.value),e==-1&&(e=0),this.element.selectedIndex!==e&&(this.element.selectedIndex=e)}},drawOptions:{value:function(){for(var e,t,n=this.contentController.organizedContent,i=document.createDocumentFragment(),s=0,a=n.length;s<a;s++)e=document.createElement("option"),t=n[s],e.textContent=t&&t[this.labelPropertyName],i.appendChild(e);this.element.innerHTML="",this.element.appendChild(i)}}})}});