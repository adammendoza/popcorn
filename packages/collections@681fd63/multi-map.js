"use strict";function MultiMap(t,e,p,i){return this instanceof MultiMap?(this.bucket=e||this.bucket,void Map.call(this,t,p,i,function(t){var e=this.bucket(t);return Map.prototype.set.call(this,t,e),e})):new MultiMap(t,e,p,i)}var Map=require("./map").CollectionsMap;module.exports=MultiMap,MultiMap.MultiMap=MultiMap,MultiMap.prototype=Object.create(Map.prototype),MultiMap.prototype.constructor=MultiMap,MultiMap.prototype.constructClone=function(t){return new this.constructor(t,this.bucket,this.contentEquals,this.contentHash)},MultiMap.prototype.set=function(t,e){var p=this.get(t);p.swap(0,p.length,e)},MultiMap.prototype.bucket=function(t){return[]};