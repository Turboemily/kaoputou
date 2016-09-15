/**
 * Created by mac on 16/7/15.
 */
(function () {
    function addListeners() {
        showVideo();
    }
    function showVideo() {
        var rich1div4 = document.getElementsByClassName("rich1-div4")[0];
        var rich1vdcontainer = document.getElementById("rich1-vdcontainer");
        var rich1close = document.getElementsByClassName("rich1-close")[0];
        var rich1shadow = document.getElementsByClassName("rich1-shadow")[0];
        rich1div4.onclick = function (event) {
            e = event||evnet.window;
            e.preventDefault();
            rich1vdcontainer.style.display = "block";
            rich1shadow.style.display = "block";
        }
        rich1close.onclick = function (event) {
            e = event||evnet.window;
            e.preventDefault();
            rich1vdcontainer.style.display = "none";
            rich1shadow.style.display = "none";
        }
    }
    addListeners();
})();
