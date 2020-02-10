function setChildValue() {
    let val1 = document.getElementsByClassName('pomoTime')[0].value;
    let val2 = document.getElementsByClassName('breakTime')[0].value;
    let val3 = document.getElementsByClassName('bigbreakTime')[0].value;

    const val1N = "Pomo Time"
    const val2N = "Break Time"
    const val3N = "Big Break Time"

    let listVal = [];
    let listValN = [];

    listVal.push(val1);
    listVal.push(val2);
    listVal.push(val3);

    listValN.push(val1N);
    listValN.push(val2N);
    listValN.push(val3N);

    if(valiCheck(val1) && valiCheck(val2) && valiCheck(val3)) {
        let r = confirm("Do you want to set the time?");
        if(r == true) {
            sessionStorage.setItem("timeSetting", listVal);
            window.location.href='main.html';
        }
    } else {
        alert(validationDetector(listValN, listVal))
    }
}

function valiCheck(data) {
    if(data !== undefined && data !== '' && data !== null && Number.isInteger(parseInt(data))) {
        return true;
    }
    return false;
}

function validationDetector(inputId, data2) {
    let result = '';
    data2.some((el,idx) => {
        if(parseInt(el) === '' || !Number.isInteger(parseInt(el))) {
            result = `Please input on ${inputId[idx]} as a number`;
            return true;
        }
        if(parseInt(el) < 0 && parseInt(el) > 1440) {
            result = `Please input on ${inputId[idx]} between the range as a number`;
            return true;
        }
    });
    return result;
}