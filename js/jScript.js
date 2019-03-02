$(document).ready(function(){

    $('.nav-item').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $("#inventory").css({"display": "none"});
    $("#deliveries").css({"display": "none"});
    $("#donations").css({"display": "none"});
    $("#requests").css({"display": "none"});
    $("#volunteers").css({"display": "none"});
      
    $("#upperDashboard , #sideDashborad").on( "click", function() {
        $("#dashboard").css({"display": "block"});
        $("#inventory").css({"display": "none"});
        $("#deliveries").css({"display": "none"});
        $("#donations").css({"display": "none"});
        $("#requests").css({"display": "none"});
        $("#volunteers").css({"display": "none"});
    });

    $("#upperInventory , #sideInventory").on( "click", function() {
        $("#dashboard").css({"display": "none"});
        $("#inventory").css({"display": "block"});
        $("#deliveries").css({"display": "none"});
        $("#donations").css({"display": "none"});
        $("#requests").css({"display": "none"});
        $("#volunteers").css({"display": "none"});
    });
    
    $("#upperDeliveries , #sideDeliveries").on( "click", function() {
        $("#dashboard").css({"display": "none"});
        $("#inventory").css({"display": "none"});
        $("#deliveries").css({"display": "block"});
        $("#donations").css({"display": "none"});
        $("#requests").css({"display": "none"});
        $("#volunteers").css({"display": "none"});
    });
    
    $("#upperDonations , #sideDonations").on( "click", function() {
        $("#dashboard").css({"display": "none"});
        $("#inventory").css({"display": "none"});
        $("#deliveries").css({"display": "none"});
        $("#donations").css({"display": "block"});
        $("#requests").css({"display": "none"});
        $("#volunteers").css({"display": "none"});
    });

    $("#upperRequests , #sideRequests").on( "click", function() {
        $("#dashboard").css({"display": "none"});
        $("#inventory").css({"display": "none"});
        $("#deliveries").css({"display": "none"});
        $("#donations").css({"display": "none"});
        $("#requests").css({"display": "block"});
        $("#volunteers").css({"display": "none"});
    });
    
    $("#upperVolunteers , #sideVolunteers").on( "click", function() {
        $("#dashboard").css({"display": "none"});
        $("#inventory").css({"display": "none"});
        $("#deliveries").css({"display": "none"});
        $("#donations").css({"display": "none"});
        $("#requests").css({"display": "none"});
        $("#volunteers").css({"display": "block"});
    });

});//END READY