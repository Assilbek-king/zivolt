//学员专区

//function clos() {
//    document.getElementById("name").value = "";
//    document.getElementById("tel").value = "";
//    document.getElementById("hy").value = "";
//    document.getElementById("cs").value = "";
//    document.getElementById("bt").value = "";
//    document.getElementById("nr").value = "";
//}


function checkform() {
    if (document.getElementById("Company").value == "") {
        Salert("", "Please enter your company name!");
        document.getElementById("Company").focus();

        return false;

    }
    if (document.getElementById("Province").value == "") {
        Salert("", "Please enter your State / Province!");
        document.getElementById("Province").focus();

        return false;
    }
    if (document.getElementById("name").value == "") {
        Salert("", "Please enter your name!");
        document.getElementById("name").focus();
        return;
    }

    if (document.getElementById("email").value == "") {
        Salert("", "Please enter your email address!");
        document.getElementById("email").focus();

        return false;


    }

    if (document.getElementById("email").value != "") {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("email").value)) {
            document.getElementById("email").focus();
            Salert("", "Please enter the correct email address!");

            return false;
        }
    }

    $.ajax({
        type: "post",
        url: "/AjaxAction/Edistributor.aspx?name=" + $("#name").val() + "&Company=" + $("#Company").val() + "&Province=" + $("#Province").val() + "&email=" + $("#email").val() + "&Website=" + $("#Website").val() + "&tel=" + $("#tel").val() + "&Skype=" + $("#Skype").val() + "&Information=" + $("#Information").val(),
        data: "",
        success: function (data) {

            if (data == "1") {
                Salert("", "Congratulations, your message has been submitted successfully!");
                setTimeout("location.href = document.URL", 2000);//延时2秒
            }
            else {
                Salert("", "Sorry, your message failed to submit, please try again!");
            }
        }

    });

}
function checkform1() {
    var options = $('#AreaId option:selected').val();//选中的值

    //Salert("", options);
    if (options == "" || options == "country") {
        Salert("", "Please select your country!");


        return false;
    }
    if (document.getElementById("name").value == "") {
        Salert("", "Please enter your name!");
        document.getElementById("name").focus();
        return;
    }
   

    //if (document.getElementById("Company").value == "") {
    //    Salert("", "Please enter your company name!");
    //    document.getElementById("Company").focus();

    //    return false;

    //}
    if (document.getElementById("email").value == "") {
        Salert("", "Please enter your email address!");
        document.getElementById("email").focus();

        return false;


    }
    if (document.getElementById("email").value != "") {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("email").value)) {
            document.getElementById("email").focus();
            Salert("", "Please enter the correct email address!");

            return false;
        }
    }
    //if (document.getElementById("tel").value == "") {
    //    Salert("", "Please enter your mobile number!");
    //    document.getElementById("tel").focus();
    //    return;
    //}
    //if (document.getElementById("tel").value != "") {
    //    var telReg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
    //    if (!telReg.test(document.getElementById("tel").value)) {
    //        document.getElementById("tel").focus();
    //        Salert("", "Please enter the correct contact number!");

    //        return false;
    //    }
    //}
    if (document.getElementById("City").value == "") {
        Salert("", "Please enter your City!");
        document.getElementById("City").focus();

        return false;
    }
    var options1 = $('#laiyuan option:selected').val();//选中的值

    //Salert("", options);
    if (options1 == "" || options1 == "Information sources") {
        Salert("", "Please select your information sources!");


        return false;
    }
    if (document.getElementById("nr").value == "") {
        Salert("", "Please enter your message!");
        document.getElementById("nr").focus();

        return false;
    }

    


    

    $.ajax({
        type: "post",
        url: "/AjaxAction/Econtact.aspx?name=" + $("#name").val() + "&tel=" + $("#tel").val() + "&Company=" + $("#Company").val() + "&country=" + $("#AreaId").find("option:selected").val() + "&ly=" + $("#laiyuan").find("option:selected").val() + "&email=" + $("#email").val() + "&City=" + $("#City").val() + "&nr=" + $("#nr").val(),
        data: "",
        success: function (data) {

            if (data == "1") {
                Salert("", "Congratulations, your message has been submitted successfully!");
                setTimeout("location.href = document.URL", 2000);//延时2秒
            }
            else {
                Salert("", "Sorry, your message failed to submit, please try again!");
            }
        }

    });

}
function checkform2() {
    var options = $('#AreaId option:selected').val();//选中的值

    //Salert("", options);
    if (options == "" || options == "country") {
        Salert("", "Please select your country!");


        return false;
    }
    if (document.getElementById("name").value == "") {
        Salert("", "Please enter your name!");
        document.getElementById("name").focus();
        return;
    }


    if (document.getElementById("email").value == "") {
        Salert("", "Please enter your email address!");
        document.getElementById("email").focus();

        return false;


    }
    if (document.getElementById("email").value != "") {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("email").value)) {
            document.getElementById("email").focus();
            Salert("", "Please enter the correct email address!");

            return false;
        }
    }

    if (document.getElementById("City").value == "") {
        Salert("", "Please enter your City!");
        document.getElementById("City").focus();

        return false;
    }
    var options1 = $('#laiyuan option:selected').val();//选中的值

    //Salert("", options);
    if (options1 == "" || options1 == "Information sources") {
        Salert("", "Please select your information sources!");


        return false;
    }
    if (document.getElementById("nr").value == "") {
        Salert("", "Please enter your message!");
        document.getElementById("nr").focus();

        return false;
    }






    $.ajax({
        type: "post",
        url: "/AjaxAction/EBranch.aspx?name=" + $("#name").val() + "&tel=" + $("#tel").val() + "&Company=" + $("#Company").val() + "&country=" + $("#AreaId").find("option:selected").val() + "&ly=" + $("#laiyuan").find("option:selected").val() + "&email=" + $("#email").val() + "&City=" + $("#City").val() + "&nr=" + $("#nr").val(),
        data: "",
        success: function (data) {

            if (data == "1") {
                Salert("", "Congratulations, your message has been submitted successfully!");
                setTimeout("location.href = document.URL", 2000);//延时2秒
            }
            else {
                Salert("", "Sorry, your message failed to submit, please try again!");
            }
        }

    });

}
//在线报名
function Salert(title, content) {
    var tmp = '<div class="ui-dialog show"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4>' + title + '</h4><div>' + content + '</div></div></div><div class="ui-dialog-ft ui-btn-group"><button type="button" class="select" onclick="closemsgs();">Confirm</button></div></div></div>';
    $("body").append(tmp);
}
function closemsgs() {
    $(".ui-dialog").each(function (i, item) {
        if ($(item).hasClass("show")) {
            $(item).removeClass("show").addClass("hide");
        }
    });
}

