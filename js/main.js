var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

window.onload = function() {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })


    // modal 
    $("#booking .agreement .tos-box input[type='button']").click(function() {
        $(".popTos-bg").addClass("show");
        $("#modal.tos-modal").addClass("show");
    });

    $("#modal .modalHeader button").click(function() {
        $(".modal-bg").removeClass("show");
        $("#modal").removeClass("show");
        $("#modal.tos-modal").removeClass("show");
    });
    $("#modal .modalFooter input").click(function() {
        $(".modal-bg").removeClass("show");
        $("#modal").removeClass("show");
        $("#modal.tos-modal").removeClass("show");
    });


    // 21/11/10 mypage modal common 
    $("#mypage .information table .edit-btn").click(function() {
        $(".modalWrap").show();
    });
    $("#modal .modalHeader .hide-btn").click(function() {
        $(".modalWrap").hide();
    });

    var modals = document.getElementsByClassName("edit-modal");
    var btns = document.getElementsByClassName("edit-btn");
    var hide_btn01 = document.getElementsByClassName("hide-btn");
    var funcs = [];

    function Modal(num) {
        return function() {

            btns[num].onclick = function() {
                modals[num].style.display = "block";
            };
            hide_btn01[num].onclick = function() {
                modals[num].style.display = "none";
            };
        };
    }

    for (var i = 0; i < btns.length; i++) {
        funcs[i] = Modal(i);
    }
    for (var j = 0; j < btns.length; j++) {
        funcs[j]();
    }

    //////////////////////////////////////////////////////
    // detail_popup

    var popups = document.getElementsByClassName("zoom-popup");
    var img_link = document.getElementsByClassName("zoom-thum");
    var m_hide_btn = document.getElementsByClassName("mButton");
    var funcs = [];

    function count_popup(num) {
        return function() {

            img_link[num].onclick = function() {
                popups[num].style.display = "block";
            };
            m_hide_btn[num].onclick = function() {
                popups[num].style.display = "none";
            };
        };
    }

    for (var i = 0; i < img_link.length; i++) {
        funcs[i] = count_popup(i);
    }
    for (var j = 0; j < img_link.length; j++) {
        funcs[j]();
    }
    $(document).mouseup(function(e) {
        var img_zoom_popup = $(".zoom-popup");
        if (img_zoom_popup.has(e.target).length === 0) {
            img_zoom_popup.hide();
            $("html,body").removeClass("hidden");
        }
    });


    // 21/11/10 mypage modal tag
    $("#modal .modalBody .tag-form .tag-list input+label").click(function() {
        $("#modal .modalBody .tag-form .tag-list input+label").removeClass("on");
        $(this).addClass("on")
    });

    // thum-vertical common 
    $(".thum-vertical .fa-heart").click(function() {
        $(this).toggleClass("on");

    });

    // 21/11/03 line 128 alert 추가 및 animation 추가
    $("#booking .option-select .next-btn").click(function() {

        $("#booking .customer-info").addClass("show");
        var scrollPosition = $("#booking .customer-info").offset().top;
        $("body,html").animate({
            scrollTop: scrollPosition
        }, 500);

        return false;

    });


    $("#modal.noti-modal .modalFooter input").click(function() {
        $("#modal.noti-modal").removeClass("show");
        $("#booking .agreement").addClass("show");
        $("#booking .total-price").show();

        var scrollPosition = $("#booking .agreement").offset().top;
        $("body,html").animate({
            scrollTop: scrollPosition
        }, 500);

        return false;
    });
    ///////////////////////////////////////////////////////////////

    // booking tab_menu 
    $("#booking .room-type .tab-menu input").click(function() {
        $("#booking .room-type .tab-menu input").removeClass("on");
        $(this).addClass("on");
        $("#booking .room-type .tabContent").removeClass("show");
        var this_tabContent = $(this).index();
        $("#booking .room-type .tabContent:eq(" + this_tabContent + ")").addClass("show");
    });

    // booking room_select 
    var room_type = $("#booking .room-type .room-info");

    $(room_type).click(function() {

        $(this).toggleClass("on")

        if ($(this).hasClass("on")) {
            $(this).next().show();
            $(this).find("i").attr('class', 'fas fa-angle-down');

        } else {
            $(this).next().hide();
            $(this).find("i").attr('class', 'fas fa-angle-right');
        }

    });

    var room_option = $("#booking .room-type .room-option");

    $($(room_option).children()).click(function() {
        $("#booking .room-type .room-option li").removeClass("on");
        $(this).addClass("on");
    });

    // booking tooltip 
    $("#booking .cm-box .thead button").mouseenter(function() {
        $(this).find("#toolTip").show();
    });

    $("#booking .cm-box .thead button").mouseleave(function() {
        $(this).find("#toolTip").hide();
    });

    $(".wrapContent .tag-area input[type='button']").click(function() {
        $(".wrapContent .tag-area input[type='button']").removeClass("on")
        $(this).addClass("on");
    });


    // 2021/07/20 line 221 추가

    $("#play .tag-area input[type='button']").on("click", function() {
        var tag_Name = $(this).val();
        var tag_title = $("#play .inner-content .tagTitle");

        tag_title.text(tag_Name)

        var tag_active = $(this).attr("data-tab");

        $("#play .tag-area input[type='button']").removeClass("on");
        $("#play .tag-content .wrap-content").removeClass("current");

        $(this).addClass("on");
        $("." + tag_active).addClass("current");
    });

    var tit_Name = $("#play .inner-content .tagTitle");
    if (location.hash == "#couple") {
        $("#play .tab-menu").find("input[type='button']").eq(0).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab01").addClass("current");
        tit_Name.text("#커플");
    }

    if (location.hash == "#creator") {
        $("#play .tab-menu").find("input[type='button']").eq(1).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab02").addClass("current");
        tit_Name.text("#크리에이터");
    }
    if (location.hash == "#friend") {
        $("#play .tab-menu").find("input[type='button']").eq(2).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab03").addClass("current");
        tit_Name.text("#친구랑");
    }
    if (location.hash == "#family") {
        $("#play .tab-menu").find("input[type='button']").eq(3).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab04").addClass("current");
        tit_Name.text("#가족");
    }
    if (location.hash == "#wellness") {
        $("#play .tab-menu").find("input[type='button']").eq(4).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab05").addClass("current");
        tit_Name.text("#웰니스");
    }
    if (location.hash == "#business") {
        $("#play .tab-menu").find("input[type='button']").eq(5).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab06").addClass("current");
        tit_Name.text("#비즈니스");
    }
    if (location.hash == "#network") {
        $("#play .tab-menu").find("input[type='button']").eq(6).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab07").addClass("current");
        tit_Name.text("#네트워킹");
    }
    if (location.hash == "#refresh") {
        $("#play .tab-menu").find("input[type='button']").eq(7).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab08").addClass("current");
        tit_Name.text("#리프레시");
    }
    if (location.hash == "#restaurant") {
        $("#play .tab-menu").find("input[type='button']").eq(8).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab09").addClass("current");
        tit_Name.text("#맛집");
    }
    if (location.hash == "#shopping") {
        $("#play .tab-menu").find("input[type='button']").eq(9).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab10").addClass("current");
        tit_Name.text("#쇼핑");
    }
    if (location.hash == "#class") {
        $("#play .tab-menu").find("input[type='button']").eq(10).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab11").addClass("current");
        tit_Name.text("#클래스");
    }
    if (location.hash == "#activity") {
        $("#play .tab-menu").find("input[type='button']").eq(11).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab12").addClass("current");
        tit_Name.text("#액티비티");
    }
    if (location.hash == "#kids") {
        $("#play .tab-menu").find("input[type='button']").eq(12).addClass("on").siblings().removeClass("on");
        $("#play .tag-content").find(".tab13").addClass("current");
        tit_Name.text("#Kids");
    }


    // play_detail
    var add_wish = $("#play .pr-content .user-indi button");
    $(add_wish).click(function() {
        $(this).toggleClass("add-wish")
        if ($(this).hasClass("add-wish")) {
            $(this).find("i").attr("class", "fas fa-heart");
        } else {
            $(this).find("i").attr("class", "far fa-heart");
        }
    })

    // 21/09/13 line 292 추가 
    $("#facility nav ul li").on("click", function() {

        var tag_active = $(this).attr("data-tab");

        $("#facility .table-row").removeClass("current");
        $("." + tag_active).addClass("current");

    });

    // link_neighborhood
    $("#link .introduce section .head").click(function() {
        $(this).next().slideToggle(550);
        $("#link .introduce section .head").not(this).next().slideUp(550);

        $(this).parents("section").toggleClass("open");
        $("#link .introduce section .head").not(this).parents("section").removeClass("open");

    });

    // about_faq 

    $("#about .faqContent .q-box").click(function() {
        $(this).next().slideToggle(300);
        $("#about .faqContent .q-box").not(this).next().slideUp(300);

    });

    // popup

    $("#link .table-simple .table-row").click(function() {
        $("#popup").show();
        $("html,body").addClass("hidden");
    });

    $("#popup .popContent .mButton").click(function() {
        $("#popup").hide();
        $("html,body").removeClass("hidden");
    });

    // popup scroll 적용 

    (function($) {
        $(window).on("load", function() {
            $("#popup .popContent").mCustomScrollbar({
                axis: "y",
                theme: "light"
            });
            $(".selectBox .list").mCustomScrollbar({
                axis: "y",
            });
            $("select").mCustomScrollbar({
                axis: "y",
                theme: "dark-thick"
            });
        });
    })

    $(".selectric-items").addClass("mCustomScrollbar");

    // index : tag_area

    var bannerLeft = 0;
    var first = 1;
    var last;
    var tagCnt = 0;
    var $tag_box = $("#tag-area .rolling .tag-box");
    var $first;
    var $last;

    $tag_box.each(function() {
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).outerWidth() + 10;
        $(this).attr("id", "banner" + (++tagCnt));
    });

    last = tagCnt;
    startAction();

    $("#tag-area .rolling .tag-box").hover(
        function() { stopAction(); },
        function() { startAction(); }
    );

    function startAction() {

        interval = setInterval(function() {
            if (tagCnt > 4) {

                $tag_box.each(function() {
                    $(this).css("left", $(this).position().left - 2);
                });
                $first = $("#banner" + first);
                $last = $("#banner" + last);
                if ($first.position().left < -200) {
                    $first.css("left", $last.position().left + $last.outerWidth() + 10);
                    first++;
                    last++;
                    if (last > tagCnt) {
                        last = 1;
                    }
                    if (first > tagCnt) {
                        first = 1;
                    }
                }
            }
        }, 50);
    }

    function stopAction() {
        clearInterval(interval);
    }

    // 2021/08/02 tag-search tab 활성화
    $("#tagSearch .tagContents .wrap-content").removeClass("current");
    $("#tagSearch .tab-menu input[type='button']").on("click", function() {

        var search_Name = $(this).val();

        var sch_title = $("#tagSearch h1");
        sch_title.text(search_Name)

        var sch_tab_active = $(this).attr("data-tab");

        $("#tagSearch .tab-menu input[type='button']").removeClass("on");
        $("#tagSearch .tagContents .wrap-content").removeClass("current");

        $(this).addClass("on");
        $("." + sch_tab_active).addClass("current");
    });

    var tagSearch_Name = $("#tagSearch h1");

    if (location.hash == "#tb-couple") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(0).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab01").addClass("current");
        tagSearch_Name.text("#커플");
    }
    if (location.hash == "#tb-creator") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(1).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab02").addClass("current");
        tagSearch_Name.text("#크리에이터");
    }
    if (location.hash == "#tb-friend") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(2).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab03").addClass("current");
        tagSearch_Name.text("#친구랑");
    }
    if (location.hash == "#tb-family") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(3).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab04").addClass("current");
        tagSearch_Name.text("#가족");
    }
    if (location.hash == "#tb-wellness") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(4).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab05").addClass("current");
        tagSearch_Name.text("#웰니스");
    }
    if (location.hash == "#tb-business") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(5).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab06").addClass("current");
        tagSearch_Name.text("#비즈니스");
    }
    if (location.hash == "#tb-network") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(6).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab07").addClass("current");
        tagSearch_Name.text("#네트워킹");
    }
    if (location.hash == "#tb-refresh") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(7).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab08").addClass("current");
        tagSearch_Name.text("#리프레시");
    }
    if (location.hash == "#tb-restaurant") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(8).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab09").addClass("current");
        tagSearch_Name.text("#맛집");
    }
    if (location.hash == "#tb-shopping") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(9).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab10").addClass("current");
        tagSearch_Name.text("#쇼핑");
    }
    if (location.hash == "#tb-class") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(10).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab11").addClass("current");
        tagSearch_Name.text("#클래스");
    }
    if (location.hash == "#tb-activity") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(11).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab12").addClass("current");
        tagSearch_Name.text("#액티비티");
    }
    if (location.hash == "#tb-kids") {
        $("#tagSearch .tab-menu").find("input[type='button']").eq(12).addClass("on").siblings().removeClass("on");
        $("#tagSearch .tagContents").find(".tab13").addClass("current");
        tagSearch_Name.text("#Kids");
    }





    // pc 감지
    if (!isMobile) {

    };

    // mobile 감지
    if (isMobile) {


        $(document).on("click", "header .m-menu", function(e) {
            $("#open-menu").show();
            $("html, body").addClass("hidden");
            $('#open-menu .menu-bg').animate({ right: "0" }, 200, "linear");
        });
        $(document).on("click", "header .depthArea a", function(e) {
            $("#open-menu").hide();
            $('#open-menu .menu-bg').animate({ right: "-100%" }, 200, "linear");

        });

        $(document).mouseup(function(e) {
            var mobileMenu = $("#open-menu");
            if (mobileMenu.has(e.target).length === 0) {
                mobileMenu.hide();
            }
            $("html, body").removeClass("hidden");
        });


    };


};