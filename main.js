$(document).ready(function() {

    /*###################  #main_slide ##################### */

    // 대상 : prev , next 버튼 ("#main_slide .mainBtn .mainPrev" , .mainNext" )
    // 이벤트 : script
    // 이벤트 핸들러: slidewidow 대상은. "#main_slide .slideArea"(frame)


    // 문제점 append, prepend 가 안먹힘. 대상이 정확히 지정이 안되는 걸로 보임
    // 해결, function()에 적용을 시키지 않음. animate 진행하면서 기능을 넣어주세요. 라고 했어야 했음... 
        $("#main_slide .slideArea").prepend($("#main_slide .slideArea li:last"));
        $("#main_slide .slideArea").css({
            "marginLeft": "-1100px"
        });

        $("#main_slide .mainNext").click(function() {
            $("#main_slide .slideArea").animate({
                "marginLeft": "-=1100px"
            }, 500, "linear", function() {
                $("#main_slide .slideArea").append($("#main_slide .slideArea li:first"));
                $("#main_slide .slideArea").css({
                    "marginLeft": "-1100px"
                });
            });

        });


        // NEXT BTN 버튼 클릭 기능
        $("#main_slide .mainPrev").click(function() {
            $("#main_slide .slideArea").animate({
                "marginLeft": "+=1100px"
            }, 500, "linear", function() {
                $("#main_slide .slideArea").prepend($("#main_slide .slideArea li:last"));
                $("#main_slide .slideArea").css({
                    "marginLeft": "-1100px"
                });

            });

        });

        // NEXT BTN 자동으로 구현
        var sel = setInterval(function() {
            $("#main_slide .mainNext").click();
        }, 3500);

        // STOP BTN 클릭시 자동실행 멈춤
        $("#main_slide .mainStop").click(function() {
            clearInterval(sel);
        });
    /*################### newArt #####################*/
    // 대상: li의 다음 
    // 이벤트 : 클릭 
    // 이벤트 핸들러: 움직이면서 돌면서 크기 줄어들고, 옆으로 이동 ("transform":"rotate(360deg)") // 나중에 더 수정하는 걸로 우선


    $("#newart_img .imgList li").css({
        "transform": "scale(0.6)"
    });
    //$("#newart_img .imgList").append( $("#newart_img .imgList li:eq(0)") );

    $(".descList li").hide();
    $(".descList li:eq(0)").show();
    var imgDesc = $(".descList li");

    $("#newart_img .imgList li").next().click(function() {

        // li의 공간값을 활용한 기능
        var nums = $(this).index();
        //alert(nums);


        $("#newart_img .imgList li").css({
            "transform": "scale(0.6)"
        });
        $(this).css({
            "transform": "scale(1)"
        });

        $(".descList li").hide();
        $(".descList li").eq(nums).show();



        $(this).parent().animate({
            "marginLeft": "-=350px"
        }, 400, "linear", function() {
            $(this).css({
                "transform": "rotate(360deg)"
            });
        });


        //$(this).prev().animate({"marginLeft":"-350px"},500,"linear" ,function(){		

        //});

        //$("#newart_img .imgList li:eq(0)").css({"marginLeft":"-700px"})






    });




    /*################### 메인 아티스트 : 호석탄 section /sect_mainArtist #####################*/
    $("#art_box .cirBtn a:eq(0)").css({
        "backgroundColor": "#322876"
    });



    // 대상 : 동그라미 버튼 순서대로 
    // 이벤트 : css
    // 이벤트 핸들러: 선택되면 배경색상이 하양색에서 지정컬러 변경 
    // 나머지는 햐양색 컬러로 변경  


    // 동그라미버튼 1번 클릭시 
    $("#art_box .cirBtn a:eq(0)").bind("click focus", function() {
        $("#art_box .cirBtn a").css({
            "backgroundColor": "#fff"
        });
        $(this).css({
            "backgroundColor": "#322876"
        });

        $("#art_box .artistImg ul").css({
            "marginTop": "-660px"
        });
        $("#art_box .artistImg ul").animate({
            "marginTop": "0"
        }, 500, "linear");
    });

    // 동그라미버튼 2번 클릭시 
    $("#art_box .cirBtn a:eq(1)").bind("click focus", function() {
        $("#art_box .cirBtn a").css({
            "backgroundColor": "#fff"
        });
        $(this).css({
            "backgroundColor": "#322876"
        });

        $("#art_box .artistImg ul").animate({
            "marginTop": "-660px"
        }, 500, "linear");
    });

    $("#art_box .cirBtn a:eq(2)").bind("click focus", function() {
        $("#art_box .cirBtn a").css({
            "backgroundColor": "#fff"
        });
        $(this).css({
            "backgroundColor": "#322876"
        });

        $("#art_box .artistImg ul").animate({
            "marginTop": "-1320px"
        }, 500, "linear");
    });

    //var atag=$("#art_box .cirBtn a");
    //var atag2=atag.eq[i]


    /*################### ToDay's md 추천하는 작품/ sect_todaypick ##################### */

    /*
            대상 : .select_btn li
            이벤트 :클릭 
            이벤트 핸들러 : .select_btn li a 의 css 컬러,보더 색상이 변경되어야 함
            
            문제점: addClass가 안먹힘! , 검사창에서는 class가 변경되었는데, css그대로 상속 받는문제 발생
            해결: 우선 css로 해결함 (정리 필요할듯!!!)
            
        /*
    
        
    */
    
    var pickcont = $(".pick_cont ul");
    var selectbtn = $(".select_btn li");

    pickcont.hide().eq(0).show();
    selectbtn.eq(0).children().css({
        "color": "#7B75F3",
        "border": "1px solid #7B75F3"
    });

    selectbtn.click(function(e) {
        e.preventDefault(); 
        
        // btn의 공간번호 활용
        var target = $(this).index();
        selectbtn.find("a").css({
            "color": "#272848",
            "border": "1px solid #dddef5"
        });
        selectbtn.eq(target).children().css({
            "color": "#7B75F3",
            "border": "1px solid #7B75F3"
        });
        pickcont.hide();
        pickcont.eq(target).show();//btn의 공간번호 변수 호출

    });
    
    /*###################  sect_exhibition ##################### */

    $("#exhi_box .exhi_cont ul").prepend($("#exhi_box .exhi_cont li:last"));
    $("#exhi_box .exhi_cont ul").css({
        "marginLeft": "-900px"
    });

    // 다음 버튼 클릭시 이미지 slide 구현
    $("#exhi_box .BtnArea .nextBtn").click(function() {
        $("#exhi_box .exhi_cont ul").animate({
            "marginLeft": "-=900px"
        }, 300, "swing", function() {
            $("#exhi_box .exhi_cont ul").append($("#exhi_box .exhi_cont li:first"));
            $("#exhi_box .exhi_cont ul").css({
                "marginLeft": "-900px"
            });
        });
    // 버튼 클릭시 이미지 substring을 이용한 페이지 숫자 변경
        var numb = document.querySelector(".numb");
        // 이미지 공간값 0,1,2
        var num = $("#exhi_box .imgBox a").children("img").attr("src").substring(5, 6);
        
        // 출력 되어야 하는 번호 1,2,3
        
        // 마지막 공간값에 0+3=3을 출력받음
        numb.innerHTML = "<span>" + num + " / 3</span>";
        if (num == 0) {
            num = parseInt(num + 3);
        }
        numb.innerHTML = "<span>" + num + " / 3</span>";
        //console.log(num);   
    });
    
    

    $("#exhi_box .BtnArea .prevBtn").click(function() {
        $("#exhi_box .exhi_cont ul").animate({
            "marginLeft": "+=900px"
        }, 300, "swing", function() {
            $("#exhi_box .exhi_cont ul").prepend($("#exhi_box .exhi_cont li:last"));
            $("#exhi_box .exhi_cont ul").css({
                "marginLeft": "-900px"
            });
        });
        var numb = document.querySelector(".numb");
        var num = $("#exhi_box .imgBox a").children("img").attr("src").substring(5, 6);
        num = parseInt(num) + 1;
        numb.innerHTML = "<span>" + num + " / 3</span>";
    });


});