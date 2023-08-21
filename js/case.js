function getCaseNumber(isCaseIncrease) {
    const caseNumberElement = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberElement.value;
    const caseNumber = parseInt(caseNumberString);
    let newTotalCase;
    if (isCaseIncrease) {
        newTotalCase = caseNumber + 1;
    }
    else {
        newTotalCase = caseNumber - 1;
    }
    caseNumberElement.value = newTotalCase;
    return newTotalCase;
}


function getCaseAmount(newTotalCase) {
    const newTotalCaseAmount = newTotalCase * 425;
    const totalCaseNumberElement = document.getElementById('case-amount');
    totalCaseNumberElement.innerText = newTotalCaseAmount;
    // console.log(newTotalCaseAmount)
}




document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newTotalCase = getCaseNumber(true);
    getCaseAmount(newTotalCase)

    calculationTotal()


})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newTotalCase = getCaseNumber(false)
    getCaseAmount(newTotalCase)

    calculationTotal()

})
