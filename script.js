//Start of program
console.log("Working...");

//setting today as default date into the loan applied date
let loanAppliedDate = document.getElementById("LnApDate");

loanAppliedDate.value = formatDate();


//setting single digit numbers as "0"n
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  //formating date 
  function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

console.log(loanAppliedDate.value);
//----------------------------------------------

//setting up interest according to tenure
function interestSetup(){
    console.log("interest setup worrking");
    let interest = document.getElementById("roi");
    let tenure = document.getElementById("LnTen");
    switch (tenure.value) {
        case "46":
            interest.value = "22";
            break;
        case "52":
            interest.value = "19.6";
            break;
        case "69":
            interest.value = "29.4";
            break;
        case "78":
            interest.value = "20.7"
        default:
            break;
    }
}

//calculate function will be in use when user clicks on Check function
//it will get the value of loan amount, Rate of interest, Tenure and loan applied date.
function calculate() {
    //checking if function is working properly
    console.log("calculate working");
    //----------------------------------------------

    //Taking user input to the program
    let loanAmmount = document.getElementById("LnAmt").value;
    let rateOfInterest = document.getElementById("roi").value;
    let loanTenure = document.getElementById("LnTen").value;
    let startingDate = loanAppliedDate.value;

    appendRows(loanAmmount,loanTenure,rateOfInterest);

    //debugging input datas
    console.log(loanAmmount);
    console.log(rateOfInterest);
    console.log(loanTenure);
    console.log(startingDate);
    console.log(years);
}
//--------------------------

//calculating complex interest
function complexInterestCalculate(principle,rateofInterest,time) {
    const base = 1 + (rateofInterest/100);
    const interest = principle * Math.pow(base,time);
    return interest;
}
//---------------------------------------------


//calculate the extra floating values to get precise values
function precissionControl(principle,tenure) {
    const precissionControl = Math.floor(((principle/tenure) - Math.floor(principle/tenure)) * tenure);
    return precissionControl;
}

//adding rows to table
function appendRows(principle,tenure,interest,startDate) {
        const time = tenure / 52;
        let total = complexInterestCalculate(principle,interest,time);
        let extra = precissionControl(principle,tenure);
        const totalDays = tenure * 7;
        let absTotal = total + extra;
        let totalInterest = absTotal - principle;

        let tableFoot = document.getElementById("foot");
        let footRow = tableFoot.insertRow();
        footRow.innerHTML = "<td>Total Number of Days</td><td>" + totalDays + "</td><td>Total:</td><td>" + absTotal + "</td><td>" + totalInterest + "</td><td>" + principle + "</td><td></td><td></td>";

        
}