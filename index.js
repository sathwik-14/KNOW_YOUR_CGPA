$(document).ready(function(){
    $(".dropdown-menu li a").click(function(){
    $("#options").text($(this).text());
    });
});