var cbpAnimatedHeader=function(){var e=document.documentElement,n=document.querySelector(".cbp-af-header"),a=!1,c=30;function d(){(window.pageYOffset||e.scrollTop)>=c?classie.add(n,"cbp-af-header-shrink"):classie.remove(n,"cbp-af-header-shrink"),a=!1}window.addEventListener("scroll",function(e){a||(a=!0,setTimeout(d,50))},!1)}();