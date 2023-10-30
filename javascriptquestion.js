function gotoque(que) {
    document.getElementsByClassName('center')[0].style.display = 'none';
    document.getElementById(que).style.display = 'block';
}
function backtoque(que) {
    document.getElementById(que).style.display = 'none';
    document.getElementsByClassName('center')[0].style.display = 'flex';
}
function q1ans() {
    setTimeout(() => {
        let num1 = document.getElementById('q1num1').value;
        let num2 = document.getElementById('q1num2').value;
        let ans = Number(num1) + Number(num2);
        document.getElementById('q1ans').value = ans;
    }, 1);
}
function q2ans() {
    setTimeout(() => {
        let num1 = document.getElementById('q2num1').value;
        let num2 = document.getElementById('q2num2').value;
        let ans = Number(num1) > Number(num2) ? num1 : num2;
        document.getElementById('q2ans').value = ans;
    }, 1);
}
function q3ans() {
    setTimeout(() => {
        let num1 = document.getElementById('q3num1').value;
        let num2 = document.getElementById('q3num2').value;
        if (num1 != '' && num2 != '') {
            if (+num1 <= +num2) {
                document.getElementsByClassName('q3ans')[0].innerHTML = num1;
                document.getElementsByClassName('q3ans')[1].innerHTML = num2;
            } else {
                document.getElementsByClassName('q3ans')[0].innerHTML = num2;
                document.getElementsByClassName('q3ans')[1].innerHTML = num1;
            }
        }
        else {
            document.getElementsByClassName('q3ans')[0].innerHTML = '';
            document.getElementsByClassName('q3ans')[1].innerHTML = '';
        }
    }, 1);
}
function q4ans() {
    function checkPrime(num) {
        if (+num < 2 || +num == 4) {
            return 0;
        }
        else {
            let x = (+num) / 2;
            for (let i = 2; i < x; i++) {
                if (num % i == 0) {
                    return 0;
                }
            }
        }
        return 1;
    }
    setTimeout(() => {
        let num1 = document.getElementById('q4num1').value;
        let num2 = document.getElementById('q4num2').value;
        if (num1 == '' || num2 == '') {
            document.getElementById('q4ans').value = '';
            return;
        }
        let ans = '';
        for (let i = num1; i <= num2; i++) {
            if (checkPrime(i)) {
                ans += i + ' ';
            }
        }
        document.getElementById('q4ans').value = ans;
    }, 1);
}
function q5ans() {
    setTimeout(() => {
        let name = document.getElementById('q5name').value;
        let reversename = '';
        for (let i = (name.length) - 1; i >= 0; i--) {
            reversename += name[i];
        }
        document.getElementById('q5ans').value = reversename;
        if (name == reversename) {
            document.getElementById('q5ansyes').checked = true;
            document.getElementById('q5ansno').checked = false;
        }
        else {
            document.getElementById('q5ansno').checked = true;
            document.getElementById('q5ansyes').checked = false;
        }
    }, 1);
}
function q6ans() {
    setTimeout(() => {
        let temp = document.getElementById('q6temp').value;
        let fer = (temp * 9.0) / 5.0 + 32;
        if (temp == '')
            fer = '';
        document.getElementById('q6ans').value = fer;
    }, 1);
}
function q7ans() {
    function getTime() {
        var myDate = new Date();
        var myDay = myDate.getDay();
        var weekday = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];

        var hours = myDate.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var minutes = myDate.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var myTime = hours + " " + ampm + " : " + minutes +
            " : " + myDate.getSeconds();

        var ans = "Today is : " + weekday[myDay] + " and Current time is : " + myTime;
        document.getElementById('q7ans').innerText = ans;
    }
    getTime();
    let myInterval = setInterval(() => {
        getTime();
    }, 1000);
    setTimeout(() => {
        clearInterval(myInterval);
        document.getElementById('q7ans').innerText = '';
    }, 10000);
}
