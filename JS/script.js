let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});


function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}

//Função do Menu em outras pages.
function loadPage(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
