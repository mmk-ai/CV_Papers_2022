//tealium universal tag - utag.34 ut4.0.201911192148, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;u.ev={"view":1};u.initialized=false;u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}
return true;};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:34");utag.DB(b);var c,d,e,f,_usabilla_data,_key;u.data={"base_url":"//w.usabilla.com/##utag_account_id##.js","account_id":"8d05fb3d7436","email":"","custom":{}};utag.DB("send:34:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data.hasOwnProperty(e[f])){u.data[e[f]]=b[d];}else{u.data.custom[e[f]]=b[d];}}}}
utag.DB("send:34:MAPPINGS");utag.DB(u.data);if(!u.data.account_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(!u.initialized){u.initialized=true;_usabilla_data={};if(u.data.email){_usabilla_data.email=u.data.email;}
if(!u.isEmptyObject(u.data.custom)){_usabilla_data.custom={};for(_key in u.data.custom){_usabilla_data.custom[_key]=u.data.custom[_key];}}
window.lightningjs||function(c){function g(b,d){d&&(d+=(/\?/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(/^\/\//,(g=="https:"?g:"http:")+"//"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head></head><",c,' onload="var d=',n,";d.getElementsByTagName('head')[0].",d,"(d.",g,"('script')).",i,"='",a.l,"'\"></",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement",i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;/MSIE[ ]+6/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain='"+h.domain+"';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t){f[i]=p+'d.write("'+b().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};a.l&&q()})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({});u.data.base_url=u.data.base_url.replace("##utag_account_id##",u.data.account_id);window.usabilla_live=lightningjs.require("usabilla_live",u.data.base_url);if(!u.isEmptyObject(_usabilla_data)){window.usabilla_live("data",_usabilla_data);}}
utag.DB("send:34:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("34","ieeexplore.main"));}catch(error){utag.DB(error);}
