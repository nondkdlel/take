$(function () {
    $("#headers").load("common/header.html");
    $("#footers").load("common/footer.html");


    $("#headers").load("common/header.html", function () {
        var href = window.location.href

        if (href.indexOf("/about_story.html") >= 0) {
            jQuery("#headers nav li:eq(0)").addClass("on");
        };
        if (href.indexOf("/stay.html") >= 0 || href.indexOf("/stay_take1.html") >= 0 || href.indexOf("/stay_take2.html") >= 0 || href.indexOf("/stay_take3.html") >= 0 || href.indexOf("/stay_take4.html") >= 0 || href.indexOf("/stay_takeX.html") >= 0 || href.indexOf("/stay_take27.html") >= 0) {
            jQuery("#headers nav li:eq(1)").addClass("on");
        };
        if (href.indexOf("/stay_take1_single_loft_shower_detail.html") >= 0 || href.indexOf("/stay_take1_single_shower_detail.html") >= 0 || href.indexOf("/stay_take2_king_tub_detail.html") >= 0 || href.indexOf("/stay_take2_king_shower_detail.html") >= 0 || href.indexOf("/stay_take3_king_tub_detail.html") >= 0 || href.indexOf("/stay_take3_king_shower_detail.html") >= 0 || href.indexOf("/stay_take4_detail.html") >= 0 || href.indexOf("/stay_takeX_white_detail.html") >= 0 || href.indexOf("/stay_takeX_pink_detail.html") >= 0 || href.indexOf("/stay_takeX_mint_detail.html") >= 0 || href.indexOf("/stay_take27_detail.html") >= 0) {
            jQuery("#headers nav li:eq(1)").addClass("on")
        };
        if (href.indexOf("/play.html") >= 0 || href.indexOf("/play_tag.html") >= 0 || href.indexOf("/play_program.html") >= 0 || href.indexOf("/play_original.html") >= 0 || href.indexOf("/play_detail.html") >= 0) {
            jQuery("#headers nav li:eq(2)").addClass("on")
        };
        if (href.indexOf("/link_rent.html") >= 0 || href.indexOf("/link_collabo.html") >= 0 || href.indexOf("/link_collabo_detail.html") >= 0 || href.indexOf("/link_neighborhood.html") >= 0) {
            jQuery("#headers nav li:eq(3)").addClass("on");

        };
        if (href.indexOf("/special_offer.html") >= 0 || href.indexOf("/special_offer_package.html") >= 0 || href.indexOf("/special_offer_package_detail.html") >= 0 || href.indexOf("/special_offer_promotion.html") >= 0 || href.indexOf("/special_offer_promotion_detail.html") >= 0) {
            jQuery("#headers nav li:eq(4)").addClass("on")
        };
        if (href.indexOf("/weddingmeet.html") >= 0 || href.indexOf("/wedding_detail.html") >= 0 || href.indexOf("/meet_detail.html") >= 0) {
            jQuery("#headers nav li:eq(5)").addClass("on")
        };
        if (href.indexOf("/eat_and_drink.html") >= 0 || href.indexOf("/eat_detail.html") >= 0 || href.indexOf("/drink_detail.html") >= 0) {
            jQuery("#headers nav li:eq(6)").addClass("on")
        };
        if (href.indexOf("/facility.html") >= 0) {
            jQuery("#headers nav li:eq(7)").addClass("on")
        };
        if (href.indexOf("/my_reservation.html") >= 0 || href.indexOf("/my_favorite.html") >= 0 || href.indexOf("/my_information.html") >= 0 || href.indexOf("/my_empty.html") >= 0 || href.indexOf("/my_no_login_reservation.html") >= 0) {
            jQuery("#headers nav li:eq(8)").addClass("on")
        };
        if (href.indexOf("/login.html") >= 0 || href.indexOf("/join_step01.html") >= 0 || href.indexOf("/join_step02.html") >= 0 || href.indexOf("/join_step03.html") >= 0 || href.indexOf("/join_us.html") >= 0 || href.indexOf("/lost_password.html") >= 0) {
            jQuery("#headers nav li:eq(9)").addClass("on");
        };


    });


});