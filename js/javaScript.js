function typingMode2(id, speed, stop) {
    x = document.getElementById(id).innerHTML;
    count = 0;
    dir = 0;
    intervalVar = setInterval(function () {
        if (dir == 0) {
            count++;
        } else {
            count--;
        }
        document.getElementById(id).innerHTML = "|" + x.substr(0, count);
        if (count > x.length) {
            setTimeout(function () {
                dir = 1;
            }, stop);
        }
        if (count < 0) {
            dir = 0;
        }
    }, speed);
}

function cheshmak(id, speed) {
    c = 0;
    cheshmakObj = document.getElementById(id);
    setInterval(function () {
        if (c == 0) {
            cheshmakObj.classList.remove('hide');
            cheshmakObj.classList.add('show');
            c = 1;
        } else {
            cheshmakObj.classList.remove('show');
            cheshmakObj.classList.add('hide');
            c = 0;
        }
    }, speed);
}

typingMode2('heading-title', 100, 2000);
cheshmak('cheshmak-txt', 2000);

function formvalidate() {
    x = document.forms["myform"]["fname"].value;
    len = x.length;
    if (len < 3) {
        fname.style.borderBottom = "1px solid red";
    }
    else{
        fname.style.borderBottom="1px solid green";
    }
   y = document.forms["myform"]["fmail"].value;
    vemail = y.includes("@");
    indexdot=y.lastIndexOf(".");
    indexmail=y.indexOf("@");
    if (vemail == false || indexdot<indexmail) {
        fmail.style.borderBottom = "1px solid red";
    }
    else{
        fmail.style.borderBottom="1px solid green";
    }


}
