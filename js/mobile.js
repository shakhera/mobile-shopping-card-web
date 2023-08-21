function getMobileNUmber(isIncrease) {
    const totalMobileElement = document.getElementById('mobile-number-field');
    const PreTotalMobileString = totalMobileElement.value;
    const totalMobile = parseInt(PreTotalMobileString);
    let newTotalMobile;
    if (isIncrease) {
        newTotalMobile = totalMobile + 1;
    }
    else {
        newTotalMobile = totalMobile - 1;
    }
    totalMobileElement.value = newTotalMobile;
    return newTotalMobile;
}

function getMobileAmount(newTotalMobile) {
    const totalMobileAmount = newTotalMobile * 75720;
    const totalAmountElement = document.getElementById('mobile-amount');
    totalAmountElement.innerText = totalMobileAmount;
    // console.log(totalMobileAmount);
    return totalMobileAmount;
}


document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const newTotalMobile = getMobileNUmber(true)
    getMobileAmount(newTotalMobile)
    calculationTotal()

})

document.getElementById('btn-phn-minus').addEventListener('click', function () {
    const newTotalMobile = getMobileNUmber(false)
    getMobileAmount(newTotalMobile)

    calculationTotal()

})

