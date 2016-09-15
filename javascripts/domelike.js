/**
 * Created by mac on 16/7/15.
 */
(function () {
    function addListeners() {
        Switch();
        SwitchClassName();
    }
    
    function Switch() {
        var button = document.getElementsByClassName("demo-a4")[0];
        var button1 = document.getElementsByClassName("demo-a4")[1];
        var demo1div2 = document.getElementsByClassName("demo1-div2")[0];
        button.onclick = function () {

            this.style.display="none";
            button1.style.display = "block";
            demo1div2.style.height = "228px";
        }
        button1.onclick = function () {
            this.style.display="none";
            button.style.display="block";
            demo1div2.style.height = "100px";
        }
    }

    function SwitchClassName(){
        var demo1a1 = document.getElementsByClassName("demo1-a1")[0];
        var demo1a2 = document.getElementsByClassName("demo1-a2");
        for(var i=0; i < demo1a2.length; i++){
            demo1a2[i].onclick = function () {
                demo1a1.style.className = "demo1-a2";
                this.style.className = "demo1-a1";
            }
        }
    }

    addListeners();
})();