(()=>{"use strict";var e,n,r,o,i,t,d,a;o=document.getElementById("nomeLeo"),i=document.getElementById("nomeDev"),t=document.getElementById("nomeDsg"),d="Desenvolvedor Web<br>Front End",a="Web<br>Designer",e=function(){var e=window.innerWidth;e<880&&(o.innerHTML="Leonardo Rodrigues<br>da Silva",i.innerHTML=d,t.innerHTML=a),e>=880&&(o.innerHTML="Leonardo Rodrigues da Silva",i.innerHTML="Desenvolvedor Web Front End",t.innerHTML="Web Designer"),e>=1e3&&(i.innerHTML=d,t.innerHTML=a)},r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,o),n=null}),200)},["DOMContentLoaded","resize"].forEach((function(e){window.addEventListener(e,r)}))})();