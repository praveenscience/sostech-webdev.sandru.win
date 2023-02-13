var hashCode=function(r){function n(r,n){var t,o,e,u,a;return e=2147483648&r,u=2147483648&n,a=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(o=1073741824&n)?2147483648^a^e^u:t|o?1073741824&a?3221225472^a^e^u:1073741824^a^e^u:a^e^u}function t(r,t,o,e,u,a,f){return r=n(r,n(n(t&o|~t&e,u),f)),n(r<<a|r>>>32-a,t)}function o(r,t,o,e,u,a,f){return r=n(r,n(n(t&e|o&~e,u),f)),n(r<<a|r>>>32-a,t)}function e(r,t,o,e,u,a,f){return r=n(r,n(n(t^o^e,u),f)),n(r<<a|r>>>32-a,t)}function u(r,t,o,e,u,a,f){return r=n(r,n(n(o^(t|~e),u),f)),n(r<<a|r>>>32-a,t)}function a(r){var n,t="",o="";for(n=0;3>=n;n++)t+=(o="0"+(o=r>>>8*n&255).toString(16)).substr(o.length-2,2);return t}var f,i,C,h,c,g,d,v,S;for(f=function(r){for(var n,t=r.length,o=16*(((n=t+8)-n%64)/64+1),e=Array(o-1),u=0,a=0;a<t;)u=a%4*8,e[n=(a-a%4)/4]|=r.charCodeAt(a)<<u,a++;return e[n=(a-a%4)/4]|=128<<a%4*8,e[o-2]=t<<3,e[o-1]=t>>>29,e}(r=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var o=r.charCodeAt(t);128>o?n+=String.fromCharCode(o):(127<o&&2048>o?n+=String.fromCharCode(o>>6|192):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128)),n+=String.fromCharCode(63&o|128))}return n}(r)),g=1732584193,d=4023233417,v=2562383102,S=271733878,r=0;r<f.length;r+=16)i=g,C=d,h=v,c=S,g=t(g,d,v,S,f[r+0],7,3614090360),S=t(S,g,d,v,f[r+1],12,3905402710),v=t(v,S,g,d,f[r+2],17,606105819),d=t(d,v,S,g,f[r+3],22,3250441966),g=t(g,d,v,S,f[r+4],7,4118548399),S=t(S,g,d,v,f[r+5],12,1200080426),v=t(v,S,g,d,f[r+6],17,2821735955),d=t(d,v,S,g,f[r+7],22,4249261313),g=t(g,d,v,S,f[r+8],7,1770035416),S=t(S,g,d,v,f[r+9],12,2336552879),v=t(v,S,g,d,f[r+10],17,4294925233),d=t(d,v,S,g,f[r+11],22,2304563134),g=t(g,d,v,S,f[r+12],7,1804603682),S=t(S,g,d,v,f[r+13],12,4254626195),v=t(v,S,g,d,f[r+14],17,2792965006),g=o(g,d=t(d,v,S,g,f[r+15],22,1236535329),v,S,f[r+1],5,4129170786),S=o(S,g,d,v,f[r+6],9,3225465664),v=o(v,S,g,d,f[r+11],14,643717713),d=o(d,v,S,g,f[r+0],20,3921069994),g=o(g,d,v,S,f[r+5],5,3593408605),S=o(S,g,d,v,f[r+10],9,38016083),v=o(v,S,g,d,f[r+15],14,3634488961),d=o(d,v,S,g,f[r+4],20,3889429448),g=o(g,d,v,S,f[r+9],5,568446438),S=o(S,g,d,v,f[r+14],9,3275163606),v=o(v,S,g,d,f[r+3],14,4107603335),d=o(d,v,S,g,f[r+8],20,1163531501),g=o(g,d,v,S,f[r+13],5,2850285829),S=o(S,g,d,v,f[r+2],9,4243563512),v=o(v,S,g,d,f[r+7],14,1735328473),g=e(g,d=o(d,v,S,g,f[r+12],20,2368359562),v,S,f[r+5],4,4294588738),S=e(S,g,d,v,f[r+8],11,2272392833),v=e(v,S,g,d,f[r+11],16,1839030562),d=e(d,v,S,g,f[r+14],23,4259657740),g=e(g,d,v,S,f[r+1],4,2763975236),S=e(S,g,d,v,f[r+4],11,1272893353),v=e(v,S,g,d,f[r+7],16,4139469664),d=e(d,v,S,g,f[r+10],23,3200236656),g=e(g,d,v,S,f[r+13],4,681279174),S=e(S,g,d,v,f[r+0],11,3936430074),v=e(v,S,g,d,f[r+3],16,3572445317),d=e(d,v,S,g,f[r+6],23,76029189),g=e(g,d,v,S,f[r+9],4,3654602809),S=e(S,g,d,v,f[r+12],11,3873151461),v=e(v,S,g,d,f[r+15],16,530742520),g=u(g,d=e(d,v,S,g,f[r+2],23,3299628645),v,S,f[r+0],6,4096336452),S=u(S,g,d,v,f[r+7],10,1126891415),v=u(v,S,g,d,f[r+14],15,2878612391),d=u(d,v,S,g,f[r+5],21,4237533241),g=u(g,d,v,S,f[r+12],6,1700485571),S=u(S,g,d,v,f[r+3],10,2399980690),v=u(v,S,g,d,f[r+10],15,4293915773),d=u(d,v,S,g,f[r+1],21,2240044497),g=u(g,d,v,S,f[r+8],6,1873313359),S=u(S,g,d,v,f[r+15],10,4264355552),v=u(v,S,g,d,f[r+6],15,2734768916),d=u(d,v,S,g,f[r+13],21,1309151649),g=u(g,d,v,S,f[r+4],6,4149444226),S=u(S,g,d,v,f[r+11],10,3174756917),v=u(v,S,g,d,f[r+2],15,718787259),d=u(d,v,S,g,f[r+9],21,3951481745),g=n(g,i),d=n(d,C),v=n(v,h),S=n(S,c);return(a(g)+a(d)+a(v)+a(S)).toLowerCase()};

var GenerateCode = function (Email, Phone) {
  return hashCode(Email + "-" + Phone.substr(-10)) + Email.substr(0, 3);
};

$(function () {
  var CertMap = {
    "PART": "/Certificates/Participants/"
  };
  $("#claim").submit(function (e) {
    e.preventDefault();
    $(".btn-primary").prop("disabled", true).val("Checking...");
    $.post("https://apps.praveen.science/sandru/", $(this).serialize(), function (res) {
      var Email = $("#email").val().trim();
      var Phone = $("#number").val().trim();
      var Type = $("#type").val().trim();
      $(".btn-primary").prop("disabled", false);
      window.location.href = CertMap[Type] + GenerateCode(Email, Phone) + "-claim";
    });
  });
  $("#verify").submit(function (e) {
    e.preventDefault();
    $(".btn-primary").prop("disabled", true).val("Checking...");
    $.post("https://apps.praveen.science/sandru/", $(this).serialize(), function (res) {
      var Type = $("#vertype").val().trim();
      var CertID = $("#certid").val().trim();
      $(".btn-primary").prop("disabled", false);
      window.location.href = CertMap[Type] + CertID + "-verify";
    });
  });
});