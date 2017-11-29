"use strict";module.exports=function(t,e,r,n,o){var a=require("./util"),c=a.tryCatch;t.method=function(r){if("function"!=typeof r)throw new t.TypeError("expecting a function but got "+a.classString(r));return function(){var n=new t(e);n._captureStackTrace(),n._pushContext();var a=c(r).apply(this,arguments),u=n._popContext();return o.checkForgottenReturns(a,u,"Promise.method",n),n._resolveFromSyncValue(a),n}},t.attempt=t["try"]=function(r){if("function"!=typeof r)return n("expecting a function but got "+a.classString(r));var u=new t(e);u._captureStackTrace(),u._pushContext();var i;if(arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],s=arguments[2];i=a.isArray(l)?c(r).apply(s,l):c(r).call(s,l)}else i=c(r)();var p=u._popContext();return o.checkForgottenReturns(i,p,"Promise.try",u),u._resolveFromSyncValue(i),u},t.prototype._resolveFromSyncValue=function(t){t===a.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}};