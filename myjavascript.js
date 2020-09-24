function hideForm(){
    document.getElementById("bookingForm").style.display = "none";
    //the call the funtion on the body by onLaod="hide"
}
function showForm(){
    document.getElementById("bookingForm").style.display = "block";
}
function Document(){
    var Document = document.getElementById("inputDocument").value;
    if (Document = "" ){
        document.write("Please upload prove of payment")
    }
    else{
      document.write("sumit")  
    }
}

function information() {
    var surName = document.getElementById("inputsurName01").value;
    var firstName = document.getElementById("inputfirstName02").value;
    var lastName = document.getElementById("inputlastName03").value;
    var age = document.getElementById("inputage06").value;
    var currentCity = document.getElementById("inputcc04").value;
    var amountPaid = document.getElementById("inputamount05").value;

if (currentCity == "" || age == "" || amountPaid == "" ) {
    alert("Important fields are empty");
    document.getElementById("inputsurName01").style.borderColor = "red";
}else if(currentCity !== "Makurdi"){
    alert("You should be Makurdi");
}
else if(age < 18){
    alert("18 years and above is needed");
}
else if (amountPaid < 2500){
    alert("2500 and above is the amount, please refresh and rebook ");
}
else{
    alert("Congratulation! and thanks for booking with us")
    print();
}
}
