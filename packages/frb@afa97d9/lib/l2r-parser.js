function makeLeftToRightParser(r,n,t){var e=function(u,o){return o?n(function(n){return n?r(function(r){return e(u,t(n,o,r))}):u(o)}):r(function(r){return e(u,r)})};return e}module.exports=makeLeftToRightParser;