montageDefine("0bb0f9b","ui/number-field.reel/number-field",{dependencies:["ui/text-input","core/converter/range-enforcer"],factory:function(e,n,t){var r=e("ui/text-input").TextInput,i=e("core/converter/range-enforcer").RangeEnforcer,a=n.NumberField=r.specialize({enterDocument:{value:function(e){this["super"](e),this.converter=new i,this.converter.min=this.min,this.converter.max=this.max}},hasTemplate:{value:!1}});a.addAttributes({max:{dataType:"number"},min:{dataType:"number"},step:null})}});