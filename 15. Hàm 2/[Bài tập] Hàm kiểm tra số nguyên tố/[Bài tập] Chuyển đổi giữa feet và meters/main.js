function footToMeter() {
    let feet = document.getElementById('feet').value;
    // let meters = document.getElementById('meters').value;
    meters = 0.305 * feet
    alert('meters ' + meters)
 
}

function meterToFoot() {
    // let feet = document.getElementById('feet').value;
    let meters = document.getElementById('meters').value;
    feet = 3.279 * meters
    alert('feet = ' + feet)
}