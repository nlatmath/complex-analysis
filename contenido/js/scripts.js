const darkModeToggle=document.getElementById("dark-mode-toggle");darkModeToggle.addEventListener("click",()=>{document.body.classList.toggle("latex-dark")});let darkModeIcon=document.getElementById("dark-mode-toggle");function toggleMode(){var e=document.getElementById("dark-mode-toggle");'<i class="fa-solid fa-moon"></i>'===e.innerHTML.trim()?e.innerHTML='<i class="fa-regular fa-sun"></i>':e.innerHTML='<i class="fa-solid fa-moon"></i>'}function scrollToElementWithOffset(e,n){var e=document.querySelector(e);e&&(e=e.getBoundingClientRect().top+window.scrollY-n,window.scrollTo({top:e,behavior:"smooth"}))}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.body.classList.add("latex-dark"),darkModeIcon.innerHTML='<i class="fa-solid fa-moon"></i>'):darkModeIcon.innerHTML='<i class="fa-regular fa-sun"></i>',document.getElementById("dark-mode-toggle").addEventListener("click",toggleMode);var links=document.querySelectorAll('a[href^="#"]');links.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),scrollToElementWithOffset(this.getAttribute("href"),50)})});let mybutton=document.getElementById("toTop");function scrollFunction(){mybutton.style.display="none",(500<document.body.scrollTop||500<document.documentElement.scrollTop)&&(mybutton.style.display="block")}function topFunction(){document.querySelectorAll(".toc-chapter a").forEach(e=>{e.classList.remove("highlight")}),document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};const leftLink=document.getElementById("prev-link"),rightLink=document.getElementById("next-link"),centerLink=document.getElementById("center-link");function handleLinkHover(e,n,t){n=centerLink.querySelector(n),t=centerLink.querySelector(t);n&&t&&("mouseenter"===e.type?(n.style.display="none",t.style.display="inline"):"mouseleave"===e.type&&(n.style.display="inline",t.style.display="none"))}leftLink&&(leftLink.addEventListener("mouseenter",e=>{handleLinkHover(e,".content-original",".content-hover-previous")}),leftLink.addEventListener("mouseleave",e=>{handleLinkHover(e,".content-original",".content-hover-previous")})),rightLink&&(rightLink.addEventListener("mouseenter",e=>{handleLinkHover(e,".content-original",".content-hover-next")}),rightLink.addEventListener("mouseleave",e=>{handleLinkHover(e,".content-original",".content-hover-next")})),centerLink&&(centerLink.addEventListener("mouseenter",e=>{handleLinkHover(e,".content-original",".content-hover")}),centerLink.addEventListener("mouseleave",e=>{handleLinkHover(e,".content-original",".content-hover")})),window.addEventListener("scroll",function(){var e=document.querySelectorAll('div[id^="section"]');let o=document.querySelectorAll(".toc-chapter a"),l=window.scrollY;e.forEach((e,n)=>{var t=e.offsetTop-100,e=t+e.clientHeight;l>=t&&l<e&&(o.forEach(e=>{e.classList.remove("highlight")}),o[n].classList.add("highlight"))})});let modal=document.getElementById("myModal"),span=document.getElementsByClassName("close")[0];function showMessage(){modal.style.display="block"}span.onclick=function(){modal.style.display="none",clearInterval(myInterval)},window.onclick=function(e){e.target==modal&&(modal.style.display="none",clearInterval(myInterval))};let myInterval=setInterval(function(){showMessage()},18e5);var iframeContainers=document.querySelectorAll(".iframeContainer");function includeHTML(){let e,n,t,o,l;for(e=document.getElementsByTagName("*"),n=0;n<e.length;n++)if(o=(t=e[n]).getAttribute("w3-include-html"))return(l=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(t.innerHTML=this.responseText),404==this.status&&(t.innerHTML="Page not found."),t.removeAttribute("w3-include-html"),includeHTML())},l.open("GET",o,!0),void l.send()}iframeContainers.forEach(function(e){e.addEventListener("mouseenter",function(){document.body.style.overflow="hidden"}),e.addEventListener("mouseleave",function(){document.body.style.overflow="auto"})}),includeHTML();