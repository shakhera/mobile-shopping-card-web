document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const totalMobileElement = document.getElementById('mobile-number-field');
    const totalMobileString = totalMobileElement.value;
    const preTotalMobile = parseInt(totalMobileString);
    // console.log(totalMobileString);
    // console.log(typeof totalMobileString)
    // console.log(preTotalMobile);
    // console.log(typeof preTotalMobile);

    const totalMobile = preTotalMobile + 1;
    totalMobileElement.value = totalMobile;
})

document.getElementById('btn-phn-minus').addEventListener('click', function () {
    const totalMobileNumber = document.getElementById('mobile-number-field');
    const mobileNumberString = totalMobileNumber.value;
    const mobileNumber = parseInt(mobileNumberString);
    // console.log(mobileNumber);
    const currentMobileNumber = mobileNumber - 1;
    totalMobileNumber.value = currentMobileNumber;
})

document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const totalAmountElement = document.getElementById('mobile-amount');
    const totalAmountString = totalAmountElement.innerText;
    const preTotalAmount = parseFloat(totalAmountString);
    // console.log(totalAmountString);
    // console.log(typeof totalAmountString)
    // console.log(preTotalAmount);
    // console.log(typeof preTotalAmount);

    const totalAmount = preTotalAmount + 75720;
    totalAmountElement.innerText = totalAmount;
    // console.log(totalAmount);
})
document.getElementById('btn-phn-minus').addEventListener('click', function () {
    const totalAmountElement = document.getElementById('mobile-amount');
    const totalAmountString = totalAmountElement.innerText;
    const preTotalAmount = parseFloat(totalAmountString);
    // console.log(totalAmountString);
    // console.log(typeof totalAmountString)
    // console.log(preTotalAmount);
    // console.log(typeof preTotalAmount);

    const totalAmount = preTotalAmount - 75720;
    totalAmountElement.innerText = totalAmount;
})