function clickHandler(e,n,t){for(var c=0,i=e.length;c<i;c++){e[c].className=""}t.className="focus";var l=t.getAttribute("tabSrc");for(var r=0,a=n.length;r<a;r++){var s=n[r],o=s.getAttribute("id");s.onclick=function(){this.style.zoom=1};if(o!=l){s.style.zIndex=1}else{s.style.zIndex=200}}}function switchTab(e){var n=$G(e).children,t=n[0].children,c=n[1].children;for(var i=0,l=t.length;i<l;i++){var r=t[i];if(r.className==="focus")clickHandler(t,c,r);r.onclick=function(){clickHandler(t,c,this)}}}switchTab("helptab");document.getElementById("version").innerHTML=parent.UE.version;