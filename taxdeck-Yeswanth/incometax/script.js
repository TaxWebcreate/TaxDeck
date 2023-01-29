function expand(clicked_id) {
    var allMinus = document.getElementsByClassName("fa-minus");
    for (var i = 0; i < allMinus.length; i++)
        allMinus[i].style.visibility = "hidden";
    var allPlus = document.getElementsByClassName("fa-plus");
    for (var i = 0; i < allPlus.length; i++)
        allPlus[i].style.visibility = "visible";
    var ans;
    if (clicked_id == "q1") {
        ans = document.getElementById("a1");
    } else if (clicked_id == "q2") {
        ans = document.getElementById("a2");
    } else if (clicked_id == "q3") {
        ans = document.getElementById("a3");
    } else if (clicked_id == "q4") {
        ans = document.getElementById("a4");
    } else if (clicked_id == "q5") {
        ans = document.getElementById("a5");
    } else if (clicked_id == "q6") {
        ans = document.getElementById("a6");
    }
    var anss = document.getElementsByClassName("answer");
    for (var i = 0; i < anss.length; i++) {
        if (ans != anss[i])
            anss[i].style.display = "none";
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