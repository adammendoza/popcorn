montageDefine("a6a7572","core/converter/kebab-case-converter",{dependencies:["./converter","lodash.kebabcase"],factory:function(e,r,n){var t,o=e("./converter").Converter,c=e("lodash.kebabcase"),a=r.KebabCaseConverter=o.specialize({constructor:{value:function(){return this.constructor===a?(t||(t=this),t):this}},convert:{value:c}});Object.defineProperty(r,"singleton",{get:function(){return t||(t=new a),t}})}});