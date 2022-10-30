function moveIntro() {
  if(document.getElementById("menu_show").checked){
    document.getElementsByClassName("main")[0].style.marginTop = "17vh";
  }else {
    document.getElementsByClassName("main")[0].style.marginTop = "2vh";
  }

}
