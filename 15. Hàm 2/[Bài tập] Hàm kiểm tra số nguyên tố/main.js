function kiemtra() {
    let display = document.getElementById('display').value;
    let prime = true;
    for(i = 2; i < Math.sqrt(display); i++) {
        if (display % i == 0) {
            prime = false;
        }
    };
    if(display == 2) {
        prime = true;
    }
    if (prime == true) {
        alert(display + ' là số nguyên tố')
    }
    else {
        alert(display + ' không phải là số nguyên tố')
    }
};


