montageDefine("29c63d0","data/model/data-query",{dependencies:["montage"],factory:function(e,i,t){var r=e("montage").Montage;i.DataQuery=r.specialize({type:{value:void 0},criteria:{get:function(){return this._criteria||(this._criteria={}),this._criteria},set:function(e){this._criteria=e}},_criteria:{value:void 0},orderings:{get:function(){return this._orderings||(this._orderings=[]),this._orderings},set:function(e){this._orderings=e}},_orderings:{value:void 0},selectBindings:{value:void 0},selectExpression:{value:void 0},prefetchExpressions:{value:null}},{withTypeAndCriteria:{value:function(e,i){var t;return t=new this,t.type=e,t.criteria=i,t}}})}});