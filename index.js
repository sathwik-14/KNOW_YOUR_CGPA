$(document).ready(function () {
    $(".dropdown-menu li a").click(function () {
        $("#options").text($(this).text());
    });
});
function selectbranch() {
    var e = document.getElementById("branch");
    let value1 = e.options[e.selectedIndex].value;

    console.log(value1);
    localStorage.setItem("branch", value1);
}

function selectsem() {
    var e = document.getElementById("sem");
    let value2 = e.options[e.selectedIndex].value;

    console.log(value2);
    localStorage.setItem("sem", value2);
}
function selectscheme() {
    var e = document.getElementById("scheme");
    let value3 = e.options[e.selectedIndex].value;

    console.log(value3);
    localStorage.setItem("scheme", value3);
}
