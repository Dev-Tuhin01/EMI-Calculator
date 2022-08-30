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

    let years = loanTenure / 52


    //debugging input datas
    console.log(loanAmmount);
    console.log(rateOfInterest);
    console.log(loanTenure);
    console.log(startingDate);
    console.log(years);
}


//calculating complex interest
function complexInterestCalculate(principle,rateofInterest,time) {
    const base = 1 + (rateofInterest/100);
    const interest = principle * Math.pow(base,time);
    return interest;
}
//---------------------------------------------