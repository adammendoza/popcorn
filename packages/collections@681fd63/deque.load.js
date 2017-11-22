montageDefine("681fd63","deque",{dependencies:["./shim-object","./generic-collection","./generic-order","./listen/range-changes"],factory:function(t,i,h){"use strict";function n(t,i){return this instanceof n?(this.capacity=this.snap(i),this.init(),this.length=0,this.front=0,void this.addEach(t)):new n(t,i)}function e(t,i,h,n,e){for(var s=0;s<e;++s)h[s+n]=t[s+i]}function s(t){return t>>>=0,t-=1,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t+1}t("./shim-object");var r=t("./generic-collection"),a=t("./generic-order"),o=t("./listen/range-changes");h.exports=n,Object.addEach(n.prototype,r.prototype),Object.addEach(n.prototype,a.prototype),Object.addEach(n.prototype,o.prototype),n.from=r.from,n.prototype.maxCapacity=1<<30|0,n.prototype.minCapacity=16,n.prototype.constructClone=function(t){return new this.constructor(t,this.capacity)},n.prototype.add=function(t){this.push(t)},n.prototype.push=function(t){var i=arguments.length,h=this.length;if(this.dispatchesRangeChanges){for(var n=new Array(i),e=0;e<i;++e)n[e]=arguments[e];var s=[];this.dispatchBeforeRangeChange(n,s,h)}if(i>1){var r=this.capacity;if(h+i>r)for(var e=0;e<i;++e){this.ensureCapacity(h+1);var a=this.front+h&this.capacity-1;this[a]=arguments[e],h++,this.length=h}else{for(var a=this.front,e=0;e<i;++e)this[a+h&r-1]=arguments[e],a++;this.length=h+i}}else if(1===i){this.ensureCapacity(h+1);var o=this.front+h&this.capacity-1;this[o]=t,this.length=h+1}return this.dispatchesRangeChanges&&this.dispatchRangeChange(n,s,h),this.length},n.prototype.pop=function(){var t=this.length;if(0!==t){var i=this.front+t-1&this.capacity-1,h=this[i];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[h],t-1),this[i]=void 0,this.length=t-1,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[h],t-1),h}},n.prototype.shift=function(){if(0!==this.length){var t=this.front,i=this[t];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[i],0),this[t]=void 0,this.front=t+1&this.capacity-1,this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[i],0),i}},n.prototype.unshift=function(t){var i=this.length,h=arguments.length;if(this.dispatchesRangeChanges){for(var n=new Array(h),e=0;e<h;++e)n[e]=arguments[e];var s=[];this.dispatchBeforeRangeChange(n,s,0)}if(h>1){var r=this.capacity;if(i+h>r)for(var e=h-1;e>=0;e--){this.ensureCapacity(i+1);var r=this.capacity,a=(this.front-1&r-1^r)-r;this[a]=arguments[e],i++,this.front=a,this.length=i}else{for(var o=this.front,e=h-1;e>=0;e--){var a=(o-1&r-1^r)-r;this[a]=arguments[e],o=a}this.front=o,this.length=i+h}}else if(1===h){this.ensureCapacity(i+1);var r=this.capacity,a=(this.front-1&r-1^r)-r;this[a]=t,this.length=i+1,this.front=a}return this.dispatchesRangeChanges&&this.dispatchRangeChange(n,s,0),this.length},n.prototype.clear=function(){this.length=0,this.front=0,this.init()},n.prototype.ensureCapacity=function(t){this.capacity<t&&this.grow(this.snap(1.5*this.capacity+16))},n.prototype.grow=function(t){var i=this.front,h=this.capacity,n=new Array(h),s=this.length;if(e(this,0,n,0,h),this.capacity=t,this.init(),this.front=0,i+s<=h)e(n,i,this,0,s);else{var r=s-(i+s&h-1);e(n,i,this,0,r),e(n,0,this,r,s-r)}},n.prototype.init=function(){for(var t=0;t<this.capacity;++t)this[t]="nil"},n.prototype.snap=function(t){return"number"!=typeof t?this.minCapacity:s(Math.min(this.maxCapacity,Math.max(this.minCapacity,t)))},n.prototype.one=function(){if(this.length>0)return this[this.front]},n.prototype.peek=function(){if(0!==this.length)return this[this.front]},n.prototype.poke=function(t){0!==this.length&&(this[this.front]=t)},n.prototype.peekBack=function(){var t=this.length;if(0!==t){var i=this.front+t-1&this.capacity-1;return this[i]}},n.prototype.pokeBack=function(t){var i=this.length;if(0!==i){var h=this.front+i-1&this.capacity-1;this[h]=t}},n.prototype.get=function(t){if(t===(0|t)&&(t<0&&(t+=this.length),!(t<0||t>=this.length)))return this[this.front+t&this.capacity-1]},n.prototype.indexOf=function(t,i){null==i&&(i=0),i<0&&(i+=this.length);for(var h=this.capacity-1;i<this.length;i++){var n=this.front+i&h;if(this[n]===t)return i}return-1},n.prototype.lastIndexOf=function(t,i){null==i&&(i=this.length-1),i<0&&(i+=this.length);for(var h=this.capacity-1;i>=0;i--){var n=this.front+i&h;if(this[n]===t)return i}return-1},n.prototype.find=function(t,i,h){i=i||Object.equals,null==h&&(h=0),h<0&&(h+=this.length);for(var n=this.capacity-1;h<this.length;h++){var e=this.front+h&n;if(i(t,this[e]))return h}return-1},n.prototype.findLast=function(t,i,h){i=i||Object.equals,null==h&&(h=this.length-1),h<0&&(h+=this.length);for(var n=this.capacity-1;h>=0;h--){var e=this.front+h&n;if(i(t,this[e]))return h}return-1},n.prototype.has=function(t,i){i=i||Object.equals;for(var h=this.capacity-1,n=0;n<this.length;n++){var e=this.front+n&h;if(this[e]===t)return!0}return!1},n.prototype.reduce=function(t,i){for(var h=arguments[2],n=this.capacity-1,e=0;e<this.length;e++){var s=this.front+e&n;i=t.call(h,i,this[s],e,this)}return i},n.prototype.reduceRight=function(t,i){for(var h=arguments[2],n=this.capacity-1,e=this.length-1;e>=0;e--){var s=this.front+e&n;i=t.call(h,i,this[s],e,this)}return i}}});