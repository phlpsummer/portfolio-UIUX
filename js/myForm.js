let num = /[0-9]/;
let eng = /[a-zA-Z]/;
let spc = /[~!@#$%^&+]/;
let kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힝]/;

/* scroll bar */
// $("textarea").mCustomScrollbar({
//     theme: "minimal-dark",
//     mouseWheel:{
//         enable: true,
//     }
// });


$("input[type=submit]").on("click",function(e){

    if(!isName(2)) { e.preventDefault();}
    if(!isTxt("userid",8)) { e.preventDefault();}
    if(!isPwd(8)) { e.preventDefault();}
    if(!isChecked("terms_agree")) { e.preventDefault();}
    if(!isChecked("privacy_agree")) { e.preventDefault();}
});


function isTxt(name, len){

    if(len === undefined) len = 5;
    let txt = $("[name="+name+"]").val();

    if(txt.length >= len) {
        $("[name="+name+"]").parent().find("p").remove();
        return true;
    } else {
        $("[name="+name+"]").parent().find("p").remove();
        $("[name="+name+"]").parent().append(
            "<p>해당 입력 항목에는 "+len+"자리 이상 입력하실 수 있습니다.</p>"
        );
        return false;
    }
}

function isName(len) {

    if(len === undefined) len = 2;
    let name = $("[name=username]").val();

    if(name.length>=len && (eng.test(name)||kor.test(name))){
        $("[name=username]").parent().find("p").remove();
        return true;
    } else {
        $("[name=username").parent().find("p").remove();
        $("[name=username").parent().append(
            "<p>이름에는 2자리 이상의 한글과 영문만 입력하실 수 있습니다.</p>"
        );
        return false;
    }
}

function isPwd(len) {

    if (len === undefined) len = 8;
    let pwd1 = $("[name=userpwd]").val();
    let pwd2 = $("[name=userpwd2]").val();

    if(pwd1 == pwd2 && pwd1.length>=len && num.test(pwd1)&&eng.test(pwd1)&&spc.test(pwd1)) {
        $("[name=userpwd]").parent().find("p").remove();
        return true;
    } else {
        $("[name=userpwd]").parent().find("p").remove();
        $("[name=userpwd]").parent().append(
            "<p>비밀번호는 영문,특수문자,숫자를 포함하여 "+len+"글자 이상 입력해주세요.</p>"
        );
        return false;
    }
}

function isChecked(id){
    let isCheck = $("[id="+id+"]").is(".checked");

    if(isCheck){
        $("[id="+id+"]").parent().find("p").remove();
        return true;
    } else {
        $("[id="+id+"]").parent().find("p").remove();
        $("[id="+id+"]").parent().append(
            "<p>필수 약관에 동의해주세요.</p>"
        );
        return false;
    }
}