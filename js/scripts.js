/*!
* Start Bootstrap - Blog Home v5.0.8 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
(function () {
    if (localStorage.getItem("SERVO_CD")) {
        document.getElementById("identity").style.display = "none";
        var dr = localStorage.getItem("SERVO_CD");
        var split = dr.split(",");
        // console.log(split);
        if (dr.length > 0) {

            var BuildHTML = '';
            for (var i = 0; i < split.length; i++) {
                BuildHTML = BuildHTML
                    + '<label for="customRange2" class="form-label">Controller ' + (i + 1) + '</label>'
                    + '        <div class="btn-group btn-group-toggle" data-toggle="buttons" style="margin-bottom:10px">'
                    + '            <label class="btn btn-secondary">'
                    + '                <input type="radio" name="options" id="option1" autocomplete="off" class="servo"'
                    + '                    value="0" onclick="myfuction(this)" data-servo="' + split[i] + '"> Left'
                    + '            </label>'
                    + '            <label class="btn btn-secondary">'
                    + '                <input type="radio" name="options" id="option2" autocomplete="off" class="servo"'
                    + '                    value="180" onclick="myfuction(this)" data-servo="' + split[i] + '"> Right'
                    + '            </label>'
                    + '        </div><br>'
            }

            document.getElementById("servo_form").innerHTML = BuildHTML
        }
    } else {
        document.getElementById("identity").style.display = "block";
    }
})();