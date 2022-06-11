let bill = document.querySelector("#bill-amount");
let percentage = document.querySelector("#percentage-tip");
let tip = document.querySelector("#tip-amount");
let total = document.querySelector("#total");
let calculate = document.querySelector("#calculate");



tottalBill = () => {
    let billAmount = parseInt(bill.value);
   let percentgAmount = parseInt(percentage.value);
   
     if(isNaN(billAmount) || billAmount <= 0 || billAmount === null){
         alert("Please enter a valid Bill Amount");
     }
     else if(isNaN(percentgAmount) || percentgAmount <= 0 || percentgAmount === null){
         alert("Please enter a valid Bill Amount");
     }
     else{
        
        let payment = (billAmount * percentgAmount) / 100;
        tip.value = payment;
        //console.log(payment);
 
        let tottalPayment = Math.round(billAmount + payment);
        total.value = tottalPayment;
        //console.log(tottalPayment);
     }


}
calculate.addEventListener("click", tottalBill);