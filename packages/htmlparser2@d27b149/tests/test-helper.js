var htmlparser=require(".."),Parser=htmlparser.Parser,CollectingHandler=htmlparser.CollectingHandler,chunkSize=5;exports.writeToParser=function(e,r,n){for(var t=new Parser(e,r),l=0;l<n.length;l+=chunkSize)t.write(n.substr(l,chunkSize));t.end(),t.parseComplete(n)},exports.getEventCollector=function(e){var r=new CollectingHandler({onerror:e,onend:function(){e(null,r.events.reduce(function(e,r){return"onerror"===r[0]||"onend"===r[0]||("ontext"===r[0]&&e.length&&"text"===e[e.length-1].event?e[e.length-1].data[0]+=r[1]:e.push({event:r[0].slice(2),data:r.slice(1)})),e},[]))}});return r};