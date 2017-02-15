/**
 * Created by Maxine on 2017/2/3.
 */
console.log(document.getElementById("slider_nav"));
var lisNav = document.getElementById("slider_nav").children; //????null???


for (var i = 0; i < lisNav.length; i++) {
  lisNavs[i].onmouseenter = function () {
      for (var j = 0; j < lisNav.length; j++) {
          lisNav[i].className="";

      }
      this.className = "selected";
  };

}