document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberElement = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberElement.value;
    const caseNumber = parseInt(caseNumberString);
    // console.log(caseNumber);
    // console.log(typeof caseNumber);
    const newCaseNumber = caseNumber + 1;
    caseNumberElement.value = newCaseNumber;
    // console.log(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-filed');
    const totalCaseString = caseNumberField.value;
    // console.log(totalCaseString);
    const totalCase = parseInt(totalCaseString);
    // console.log(totalCase);
    const newCaseMinus = totalCase - 1;
    caseNumberField.value = newCaseMinus;

})