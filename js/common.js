$(function() {
    $("#headers").load("common/header.html");
    $("#footers").load("common/footer.html");


    $("#headers").load("common/header.html", function() {
        var href = window.location.href
        if (href.includes("/about_story.html")) {
            jQuery("#headers nav li:eq(0)").addClass("on")
        };
        if (href.includes("/stay.html") || href.includes("/stay_take1.html") || href.includes("/stay_take2.html") || href.includes("/stay_take3.html") || href.includes("/stay_take4.html") || href.includes("/stay_takeX.html") || href.includes("/stay_take27.html")) {
            jQuery("#headers nav li:eq(1)").addClass("on")
        };
        if (href.includes("/stay_take1_single_loft_shower_detail.html") || href.includes("/stay_take1_single_shower_detail.html") || href.includes("/stay_take2_king_tub_detail.html") || href.includes("/stay_take2_king_shower_detail.html") || href.includes("/stay_take3_king_tub_detail.html") || href.includes("/stay_take3_king_shower_detail.html") || href.includes("/stay_take4_detail.html") || href.includes("/stay_takeX_white_detail.html") || href.includes("/stay_takeX_pink_detail.html") || href.includes("/stay_takeX_mint_detail.html") || href.includes("/stay_take27_detail.html")) {
            jQuery("#headers nav li:eq(1)").addClass("on")
        };
        if (href.includes("/play.html") || href.includes("/play_tag.html") || href.includes("/play_program.html") || href.includes("/play_original.html") || href.includes("/play_detail.html")) {
            jQuery("#headers nav li:eq(2)").addClass("on")
        };
        if (href.includes("/link_rent.html") || href.includes("/link_collabo.html") || href.includes("/link_collabo_detail.html") || href.includes("/link_neighborhood.html")) {
            jQuery("#headers nav li:eq(3)").addClass("on")
        };
        if (href.includes("/special_offer.html") || href.includes("/special_offer_package.html") || href.includes("/special_offer_package_detail.html") || href.includes("/special_offer_promotion.html") || href.includes("/special_offer_promotion_detail.html")) {
            jQuery("#headers nav li:eq(4)").addClass("on")
        };
        if (href.includes("/weddingmeet.html") || href.includes("/wedding_detail.html") || href.includes("/meet_detail.html")) {
            jQuery("#headers nav li:eq(5)").addClass("on")
        };
        if (href.includes("/eat_and_drink.html") || href.includes("/eat_detail.html") || href.includes("/drink_detail.html")) {
            jQuery("#headers nav li:eq(6)").addClass("on")
        };
        if (href.includes("/facility.html")) {
            jQuery("#headers nav li:eq(7)").addClass("on")
        };
        // if (href.includes("/membership.html")) {
        //     jQuery("#headers nav li:eq(7)").addClass("on")
        // };
        if (href.includes("/my_reservation.html") || href.includes("/my_favorite.html") || href.includes("/my_information.html") || href.includes("/my_empty.html") || href.includes("/my_no_login_reservation.html")) {
            jQuery("#headers nav li:eq(8)").addClass("on")
        };
        if (href.includes("/login.html") || href.includes("/join_step01.html") || href.includes("/join_step02.html") || href.includes("/join_step03.html") || href.includes("/join_us.html") || href.includes("/lost_password.html")) {
            jQuery("#headers nav li:eq(9)").addClass("on")
        };


    });


});