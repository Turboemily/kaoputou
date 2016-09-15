/**
 * Created by Administrator on 2016/7/11.
 */

(function () {
     function addListeners() {
         countdown();
         showMobileNav();
         picture();
         Swith();
     }

    function countdown() {
        var Container = document.getElementById("content1-div1");
        var endDate = new Date("2016/8/7");
        var now = new Date;
        var reg = /^\d{2}$/;
        var disc = endDate-now;

        var day = parseInt(disc/1000/60/60/24);

        var hour = parseInt(disc/1000/60/60%24);
        hour = !reg.test(hour) ? "0"+hour : hour;

        var minute = parseInt(disc/1000/60%60);
        minute = !reg.test(minute) ? "0"+minute : minute;

        var second = parseInt (disc / 1000 % 60);
        second = !reg.test(second) ? "0" + second : second;

        Container.innerHTML="融资倒计时:" + day + "天" +hour+"小时" +minute+"分" + second+"秒"
        var time= setInterval(countdown, 1000);

        if(now > endDate){
            clearInterval(time);
            Container.innerHTML = "融资时间已到!";
            return;
        }
    }

    function picture() {
        var Content1 = document.getElementsByClassName("content1");
        var Imgmouseover = document.getElementsByClassName("imgmouseover");
        for(var i =0; i < Content1.length; i++){
            var index = i;
           (function (i) {
                  Content1[i].onmouseover = function () {
                      Imgmouseover[i].style.width = "105%";
                      Imgmouseover[i].style.height = "105%";
                  }
                  Content1[i].onmouseout = function () {
                      Imgmouseover[i].style.width = "100%";
                      Imgmouseover[i].style.height = "100%";
                  }
           })(index);
        }
    }

    function showMobileNav() {
        var navImg2 = document.getElementById("nav-img2");
        var mobileContainer = document.getElementsByClassName("mobile-container")[0];
        navImg2.onclick = function () {
            mobileContainer.style.display = "block";

        }

        document.onclick = function (event) {
            e = event || event.window;
            console.log(e);
            x = e.clientX;
            console.log(x);
            if(x > 250){
                mobileContainer.style.display = "none";
            }
        }
    }
    
    
    function Swith() {
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

  
    addListeners();
})();