montageDefine("29c63d0","data/montage-data",{dependencies:["core/serialization/deserializer/montage-deserializer"],factory:function(e,i,r){var a=e("core/serialization/deserializer/montage-deserializer").MontageDeserializer;r.exports=function(e,i){var r;return e.async(i).then(function(i){return r=(new a).init(JSON.stringify(i),e),r.deserializeObject()})}}});