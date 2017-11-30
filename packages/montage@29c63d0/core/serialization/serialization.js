var Montage=require("../core").Montage,MontageLabeler=require("./serializer/montage-labeler").MontageLabeler,MontageReviver=require("./deserializer/montage-reviver").MontageReviver,parse=require("frb/parse"),stringify=require("frb/stringify"),Serialization=Montage.specialize({_serializationString:{value:null},_serializationObject:{value:null},_serializationLabels:{value:null},initWithString:{value:function(i){return this._serializationString=i,this._serializationObject=null,this._serializationLabels=null,this}},initWithObject:{value:function(i){return this._serializationString=null,this._serializationObject=i,this._serializationLabels=null,this}},clone:{value:function(){var i=new Serialization;return i.initWithString(this.getSerializationString()),i}},getSerializationObject:{value:function(){return this._serializationObject||(this._serializationObject=JSON.parse(this._serializationString)),this._serializationObject}},getSerializationString:{value:function(){return this._serializationString||(this._serializationString=JSON.stringify(this._serializationObject)),this._serializationString}},getSerializationLabels:{value:function(){var i;return this._serializationLabels||(i=this.getSerializationObject())&&(this._serializationLabels=Object.keys(i)),this._serializationLabels}},getExternalObjectLabels:{value:function(){var i=this.getSerializationObject(),e=[];for(var a in i)0===Object.keys(i[a]).length&&e.push(a);return e}},hasSerializationLabel:{value:function(i){return i in this.getSerializationObject()}},isExternalObject:{value:function(i){var e=this.getSerializationObject();return!!(e&&i in e)&&0===Object.keys(e[i]).length}},isAlias:{value:function(i){var e=this.getSerializationObject();return!!(e&&i in e)&&"alias"in e[i]}},getElementId:{value:function(i){var e=this.getSerializationObject(),a=Montage.getPath.call(e,i+".values.element");if(a||(a=Montage.getPath.call(e,i+".properties.element")),a)return a["#"]}},getSerializationLabelsWithElements:{value:function(i){var e=new exports.SerializationInspector,a=[];return e.initWithSerialization(this),e.visitSerialization(function(e){"Element"===e.type&&i.indexOf(e.data)>=0&&(e=e.parent,!e||"values"!==e.name&&"properties"!==e.name||(e=e.parent,e&&"montageObject"===e.type&&a.push(e.label)))}),a}},renameElementReferences:{value:function(i){var e=new exports.SerializationInspector;e.initWithSerialization(this),e.visitSerialization(function(e){"Element"===e.type&&e.data in i&&(e.data=i[e.data])})}},renameSerializationLabels:{value:function(i){var e=new exports.SerializationInspector;e.initWithSerialization(this),e.visitSerialization(function(e){if(e.label){var a=e.label;a in i&&(e.label=i[a])}if("reference"===e.type){var t=e.data;t in i&&(e.data=i[t])}})}},mergeSerialization:{value:function(i,e){return exports.SerializationMerger.mergeSerializations(this,i,e)}},extractSerialization:{value:function(i,e){var a=new exports.SerializationExtractor;return a.initWithSerialization(this),a.extractSerialization(i,e)}}}),SerializationMerger=Montage.specialize(null,{mergeSerializations:{value:function(i,e,a){var t,n,l,r,o,s,c={};l=i.getSerializationLabels(),r=e.getSerializationLabels(),o=this._createCollisionTable(l,r,c,a&&a.labeler),a&&a.willMergeObjectWithLabel&&(s=this._willMergeObjectWithLabel(a,i,e,c),o=o||s),o&&(e=e.clone(),e.renameSerializationLabels(c),r=e.getSerializationLabels()),t=i.getSerializationObject(),n=e.getSerializationObject();for(var u,b=0;u=r[b];b++)l.indexOf(u)===-1&&(t[u]=n[u]);return i.initWithObject(t),c}},_willMergeObjectWithLabel:{value:function(i,e,a,t){var n,l,r,o,s,c=!1,u=a.getSerializationLabels();t&&(r=[],Object.keys(t).forEach(function(i){r.push(t[i])}));for(var b,z=0;b=u[z];z++)if(l=t&&t[b],n=i.willMergeObjectWithLabel(b,l),"string"==typeof n){if(o=this._isLabelValidInSerialization(n,e),o||(s=!this._isLabelValidInSerialization(n,a)&&r.indexOf(n)===-1),!o&&!s)throw new Error("willMergeObjectWithLabel either needs to return a label that exists in the destination serialization to indicate it's the same object or return a completely new label to rename the object being merged. \""+n+'"  destination: '+e.getSerializationString()+"\n source: "+a.getSerializationString()+"\n collision table: "+JSON.stringify(t,null,4));c=!0,t[b]=n}return c}},_isLabelValidInSerialization:{value:function(i,e){var a,t;return!!e.hasSerializationLabel(i)||(t=i.indexOf(":"),!!(t>0&&(a=i.slice(0,t),e.hasSerializationLabel(a))))}},_createCollisionTable:{value:function(i,e,a,t){t=t||new MontageLabeler;var n,l,r,o,s,c=!1,u=Object.create(null);for(s=0;s<i.length;s++)r=i[s],o=r.indexOf(":"),o>0&&(n=r.slice(0,o),t.addLabel(n),u[n]=1),t.addLabel(r),u[r]=1;for(s=0;r=e[s];s++)o=r.indexOf(":"),o>0?(n=r.slice(0,o),l=a[n],l?(a[r]=l+":"+r.slice(o+1),c=!0):n in u?(l=t.generateLabel(t.getLabelBaseName(n)),e.indexOf(n)>=0&&(a[n]=l),a[r]=l+r.slice(o),c=!0):t.addLabel(n)):r in u&&!(r in a)?(a[r]=t.generateLabel(t.getLabelBaseName(r)),c=!0):t.addLabel(r);return c}}}),SerializationInspector=Montage.specialize({initWithSerialization:{value:function(i){this._serialization=i}},visitSerialization:{value:function(i){var e=this._serialization.getSerializationObject();this._walkRootObjects(i,e),this._serialization.initWithObject(e)}},visitSerializationObject:{value:function(i,e){var a=this._serialization.getSerializationObject();if(!(i in a))throw new Error('Object "'+i+'" does not exist in '+this._serialization.getSerializationString());this._walkRootObject(e,a,i),this._serialization.initWithObject(a)}},changeLabel:{value:function(i,e){var a,t=this._serialization.getSerializationObject();a=t[i],delete t[i],t[e]=a}},_walkRootObjects:{value:function(i,e){for(var a in e)this._walkRootObject(i,e,a)}},_walkRootObject:{value:function(i,e,a){var t=e[a];"value"in t?this._walkObject(i,t,"value",a):this._walkCustomObject(i,e,a)}},_walkObject:{value:function(i,e,a,t,n){var l,r=e[a],o=MontageReviver.getTypeOf(r);if(l={type:o},t?l.label=t:l.name=a,n&&(l.parent=n),"number"===o||"string"===o||"null"===o)l.data=r,i(l),e[a]=l.data;else if("regexp"===o)l.data=r["/"],i(l),r["/"]=l.data;else if("reference"===o)l.data=r["@"],i(l),r["@"]=l.data;else if("Element"===o)l.data=r["#"],i(l),r["#"]=l.data;else if("array"===o){l.data=r,i(l),e[a]=r=l.data;for(var s=0,c=r.length;s<c;s++)this._walkObject(i,r,""+s,null,l)}else if("binding"===o)this._walkBinding(i,e,a,l);else if("object"===o){l.data=r,i(l),e[a]=r=l.data;for(var u in r)this._walkObject(i,r,u,null,l)}null!==t&&void 0!==t&&t!==l&&l.label!==t&&this.changeLabel(t,l.label)}},_walkCustomObject:{value:function(i,e,a){var t,n=e[a];t={type:"montageObject",label:a,data:n},i(t),e[a]=n=t.data,t.label!==a&&this.changeLabel(a,t.label),n.values?this._walkObject(i,n,"values",null,t):n.properties&&this._walkObject(i,n,"properties",null,t),n.bindings&&this._walkBindings(i,n,null,t),n.listeners&&this._walkObject(i,n,"listeners",null,t),n.localizations&&this._walkLocalizations(i,n,null,t)}},_walkBindings:{value:function(i,e,a){var t,n=e.bindings;t={type:"bindings",data:n,parent:a},i(t),e.bindings=n=t.data;for(var l in n)this._walkBinding(i,n,l,t)}},_walkBinding:{value:function(i,e,a,t){var n,l=e[a];n={type:"binding",name:a,data:l,parent:t},i(n),e[a]=l=n.data,this._walkBindingData(i,l,n)}},_walkBindingData:{value:function(i,e,a){var t,n,l=!1;t=e["<-"]||e["<->"],n=Object.clone(parse(t)),this._walksBindingReferences(n,function(e){var a={type:"reference",data:e.label};i(a),e.label!==a.data&&(e.label=a.data,l=!0)}),l&&("<-"in e?e["<-"]=stringify(n):e["<->"]=stringify(n)),e.converter&&this._walkObject(i,e,"converter",null,a)}},_walkLocalizations:{value:function(i,e,a){var t,n=e.localizations;t={type:"localizations",data:n,parent:a},i(t),e.localizations=n=t.data;for(var l in n)this._walkLocalization(i,n,l,t)}},_walkLocalization:{value:function(i,e,a,t){var n,l,r=e[a];if(n={type:"localization",name:a,data:r,parent:t},i(n),e[a]=r=n.data,"object"==typeof r.key&&this._walkBindingData(i,r.key,n),"object"==typeof r["default"]&&this._walkBindingData(i,r["default"],n),"object"==typeof r.data){l=r.data;for(var o in l)this._walkBindingData(i,l[o],n)}}},_walksBindingReferences:{value:function(i,e){var a=i.args;if("component"===i.type&&e(i),a)for(var t=0,n=a.length;t<n;t++)this._walksBindingReferences(a[t],e)}}}),SerializationExtractor=Montage.specialize({_serialization:{value:null},initWithSerialization:{value:function(i){this._serialization=i}},extractSerialization:{value:function(i,e){var a,t,n,l=new exports.SerializationInspector,r={},o=[];for(n=this._serialization.getSerializationObject(),l.initWithSerialization(this._serialization),a=0,t;t=i[a];a++)r[t]=n[t],l.visitSerializationObject(t,function(e){var a;"reference"===e.type&&(a=e.data,o.indexOf(a)===-1&&i.indexOf(a)===-1&&o.push(a))});if(e)for(a=0,t;t=e[a];a++)t in n&&!(t in r)&&(r[t]={});for(a=0,t;t=o[a];a++)r[t]={};return(new Serialization).initWithObject(r)}}});exports.Serialization=Serialization,exports.SerializationMerger=SerializationMerger,exports.SerializationInspector=SerializationInspector,exports.SerializationExtractor=SerializationExtractor;