// function getCaseNumber(isCaseIncrease) {
//     const caseNumberElement = document.getElementById('case--filed');
//     const caseNumberString = caseNumberElement.value;
//     const caseNumber = parseInt(caseNumberString);
//     let newTotalCase;
//     if (isCaseIncrease) {
//         newTotalCase = caseNumber + 1;
//     }
//     else {
//         newTotalCase = caseNumber - 1;
//     }
//     caseNumberElement.value = newTotalCase;
//     return newTotalCase;
// }


function getTotalAmountId(amountId) {
    const subTotalElement = document.getElementById(amountId);
    const subTotalString = subTotalElement.innerText;
    const subTotal = parseFloat(subTotalString);
    // console.log(subTotal)
    return subTotal;
}

function taxElementById(amountId, value) {
    const taxAmount = document.getElementById(amountId);
    taxAmount.innerText = value;

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = newTotalAmount;
}

function calculationTotal() {
    //calculation total amount
    const totalMobileAmount = getTotalAmountId('mobile-amount')
    const totalCaseAmount = getTotalAmountId('case-amount')

    const newTotalAmount = totalMobileAmount + totalCaseAmount;
    taxElementById('sub-total', newTotalAmount);
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = newTotalAmount;

    //calculate Tax
    const taxAmount = newTotalAmount * 0.1; //10% tax
    taxElementById('tax', taxAmount);

    const finalAmount = newTotalAmount + taxAmount;
    taxElementById('final-total', finalAmount);
}

