/**
 * Created by Maxine on 2017/1/11.
 */

    //小标题点击部分效果
    var subNav = document.getElementById("subnav");
    var links = subNav.children;
    links[0].className = "cl-current";
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            for (var i = 0; i < links.length; i++) {
                links[i].className = "";
            }
            this.className = "cl-current";
        };
    }


    //电梯导航部分
    var fixedNav = document.getElementById("fixed_nav");
    var lisNav = fixedNav.children;
    //获取content盒子
    var content = document.getElementById("content");
    var bgs = content.children;
    var timer =null;


    lisNav[0].className = "current";
    for (var i = 0; i < lisNav.length; i++) {
        lisNav[i].index = i;
        //给每个li设置点击事件,按钮变色，然后对应的将页面滚动到相应的bg[i]上
        lisNav[i].onclick = function () {
            //按钮变色,排他
            for (var i = 0; i < lisNav.length; i++) {
                lisNav[i].className = "";
            }
            //设置自己
            this.className = "current";


            //电梯导航
            var target = bgs[this.index].offsetTop;

            clearInterval(timer);//防止加速
            timer = setInterval(function () {
                var leader = myScroll().top;//当前位置卷曲的高度
                //缓动公式
                var step = (target - leader ) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                console.log(step);
                leader = leader + step;

                window.scrollTo(0, leader);

                //清除定时器
                if (leader == target) {
                    clearInterval(timer);
                    //左右的图片滑到中间
                    // var img1 = document.getElementById("s2_1");
                    // animate(img1,{"left": 530})
                }

            }, 20);

        };

    }

    function myScroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    //翻页箭头效果
    var arrs = document.getElementsByClassName("down_arr");
    for (var i = 0; i < arrs.length; i++) {
        arrs[i].index = i;
        arrs[i].onclick = function () {
            var target = bgs[this.index +1].offsetTop;
            clearInterval(timer);//防止加速
            timer = setInterval(function () {
                var leader = myScroll().top;//当前位置卷曲的高度
                //缓动公式
                var step = (target - leader ) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                console.log(step);

                leader = leader + step;

                window.scrollTo(0, leader);

                //清除定时器
                if (leader == target) {
                    clearInterval(timer);
                }

            }, 20);

        };
    }

    //最后一个翻页箭头点击效果
    var botBar = document.getElementById("bot_bar");
    arrs[arrs.length-1].onclick = function () {
        animate(botBar,{"bottom":0 })//立即体验下载的页面出现
    };


    window.onscroll = function () {
        var img2_1 = document.getElementById("s2_1");
        var img2_2 = document.getElementById("s2_2");

        var img3_1 = document.getElementById("s3_1");
        var img3_2 = document.getElementById("s3_2");

        var img4_1 = document.getElementById("s4_1");
        var img4_2 = document.getElementById("s4_2");

        //滚动页面，相应的左侧圆点导航变红，其余的变暗。
        if(myScroll().top >= 4*620){
            animate(botBar,{"bottom":0 });//立即体验下载的页面出现！！！！！
                   animate(img4_1,{"left": -461});
                   animate(img4_2,{"left": 1500});

        }else if(myScroll().top >= 3*620){
            for (var i = 0; i < lisNav.length; i++) {
                lisNav[i].className = "";
            }
            lisNav[3].className = "current";

            //设置左右两边画出图片盒子
            animate(img3_1,{"left": -461});
            animate(img3_2,{"left": 1500});

            animate(img4_1,{"left": 538});
            animate(img4_2,{"left": 538});





        }else if(myScroll().top >= 2*620){
            for (var i = 0; i < lisNav.length; i++) {
                lisNav[i].className = "";
            }
            lisNav[2].className = "current";

            //设置左右两边画出图片盒子

            animate(img2_1,{"left": -461});
            animate(img2_2,{"left": 1500});


            animate(img3_1,{"left": 538});
            animate(img3_2,{"left": 538});


        }else if(myScroll().top >= 620){
            for (var i = 0; i < lisNav.length; i++) {
                lisNav[i].className = "";
            }
            lisNav[1].className = "current";


            //设置左右两边画出图片盒子

            animate(img2_1,{"left": 538});
            animate(img2_2,{"left": 538});


        }else{
            for (var i = 0; i < lisNav.length; i++) {
                lisNav[i].className = "";
            }
            lisNav[0].className = "current";

            animate(img2_1,{"left": 538});
            animate(img2_2,{"left": 538});
        }
        //滚动页面，相应bg的动画效果出现


    };









