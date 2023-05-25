
function calculatePrincipal() {
    let M = document.getElementById("monthlyPayment").value;
    let interestRate = document.getElementById("interestRate").value;
    let months = document.getElementById("months").value;
    let termUnit = document.getElementById("termUnit").value;

    if (termUnit === "year") {
        months *= 12; // 将年转换为月
    }

    let r = interestRate / 100;

    if (document.getElementById("method").value === "interestOnly") {
        P = calculateLoanAmountForInterestOnlyPayment(r, months, M);
    } else {
        P = calculateLoanAmountForEqualPayment(r, months, M);
    }
    // 保留两位小数
    var result = P.toLocaleString('en-US', { maximumFractionDigits: 2 });

    document.getElementById("amount").innerHTML = result;
}
// 本息同还
function calculateLoanAmountForInterestOnlyPayment(interestRate, loanTermInMonths, interestOnlyPayment) {
    const monthlyInterestRate = interestRate / 12;
    const loanAmount = interestOnlyPayment / monthlyInterestRate * (1 - Math.pow(1 + monthlyInterestRate, -loanTermInMonths));
    return loanAmount;
}
// 只还利息
function calculateLoanAmountForEqualPayment(interestRate, loanTermInMonths, equalPayment) {
    const monthlyInterestRate = interestRate / 12;
    const loanAmount = equalPayment / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths) / (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1));
    return loanAmount;
}
