function expand(clicked_id) {
    var allMinus = document.getElementsByClassName("fa-minus");
    for (var i = 0; i < allMinus.length; i++)
        allMinus[i].style.visibility = "hidden";
    var allPlus = document.getElementsByClassName("fa-plus");
    for (var i = 0; i < allPlus.length; i++)
        allPlus[i].style.visibility = "visible";
    var ans;
    var anss = document.getElementsByClassName("answer");
    var qstn = document.getElementsByClassName("question");
    for (var i = 0; i < qstn.length; i++) {
        if (clicked_id == qstn[i].id) {
            ans = document.getElementById(anss[i].id);
        } else {
            anss[i].style.display = "none";
        }
    }
    var sym = document.getElementById(clicked_id).getElementsByClassName("fa");
    for (var i = 0; i < sym.length; i++)
        sym[i].style.visibility = "hidden";
    if (ans.style.display == "none") {
        sym[1].style.visibility = "visible";
        ans.style.display = "block";
    }
    else {
        sym[0].style.visibility = "visible";
        ans.style.display = "none";
    };
}