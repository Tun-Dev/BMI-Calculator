function BMI(){
    var h = document.getElementById('Height').value;
    var w = document.getElementById('Weight').value;
    var bm = w/(h/100*h/100);
    var bmi = (bm.toFixed(2));

    if (h === "0" || w === "0" ||h === "" || w === ""){
        window.alert("Please type in your Height and Weight");
        return
    }

    document.getElementById("Result").innerHTML= "Your BMI is " + bmi;

    
}
