var e=document.querySelector("body");o(new Promise(function(e,n){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}));var n=new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(){e("Second promise was resolved"),o(new Promise(function(e){e("Third promise was resolved")}))})});function o(n){n.then(function(n){e.insertAdjacentHTML("beforeend",'<div class="success" data-qa="notification">'.concat(n,"</div>"))}).catch(function(n){e.insertAdjacentHTML("beforeend",'<div class="error" data-qa="notification">'.concat(n,"</div>"))})}o(n);
//# sourceMappingURL=index.5f6c08f5.js.map
