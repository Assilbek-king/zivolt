
//只有确定按钮的提示框
//参数   (标题,文本内容)
function Salert(title,content){
    var tmp = '<div class="ui-dialog show"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4>' + title + '</h4><div>' + content + '</div></div></div><div class="ui-dialog-ft ui-btn-group"><button type="button" class="select" onclick="closemsgs();">Confirm</button></div></div></div>';
    $("body").append(tmp);
}
//自由的确认框
//参数  (标题,文本内容,左按钮文本,右按钮文本,左按钮执行方法,右按钮执行方法);
function Sconfirm(title, content, LbuttonVal, RbuttonVal, LbuttonClick, RbuttonClick) {
    var tmp = '<div class="ui-dialog show"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4>' + title + '</h4><div>' + content + '</div></div></div><div class="ui-dialog-ft ui-btn-group"><button type="button" class="select" onclick="' + LbuttonClick + '();">' + LbuttonVal + '</button><button type="button" class="select" onclick="' + RbuttonClick + '();">' + RbuttonVal + '</button></div></div></div>';
    $("body").append(tmp);
}
//确定和取消按钮的提示框（确定按钮绑定的没带参数的点击事件）
//参数   (标题,文本内容,左边确认按钮要执行的点击操作方法名（不带参数）)
function Sconform1(title,content,LbuttonClick){
    var tmp = '<div class="ui-dialog show"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4>' + title + '</h4><div>' + content + '</div></div></div><div class="ui-dialog-ft ui-btn-group"><button type="button" class="select" onclick="' + LbuttonClick + '();">Confirm</button><button type="button" class="select" onclick="closemsgs();">Cancel</button></div></div></div>';
    $("body").append(tmp);
}
//确定和取消按钮的提示框（确定按钮绑定的有带参数的点击事件（带参数））
function Sconform2(title,content,LbuttonClick){
    var tmp = '<div class="ui-dialog show"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div><h4>' + title + '</h4><div>' + content + '</div></div></div><div class="ui-dialog-ft ui-btn-group"><button type="button" class="select" onclick="' + LbuttonClick + ';">Confirm</button><button type="button" class="select" onclick="closemsgs();">Cancel</button></div></div></div>';
    $("body").append(tmp);
}

//关闭对话框
function closemsgs() {
    $(".ui-dialog").each(function (i, item) {
        if ($(item).hasClass("show")) {
            $(item).removeClass("show").addClass("hide");
        }
    });
}