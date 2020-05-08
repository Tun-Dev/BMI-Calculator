function BMI(){
    var h = document.getElementById('Height').value;
    var w = document.getElementById('Weight').value;
    var bm = w/(h/100*h/100);
    var bmi = (bm.toFixed(2));

    if (h === "" || w === ""){
        window.alert("Please type in your Height and Weight");
        return;
    }

    document.getElementById("Result").innerHTML= "Your BMI is " + bmi + "<br><h5>BMI Categories:</h5><h6>Underweight = <18.5</h6><h6>Normal weight = 18.5 - 24.9</h6><h6>Overweight = 25 - 29.9</h6><h6>Obesity = BMI of 30 or higher</h6>";

    
}

//BMI Categories:
//Underweight = <18.5
//Normal weight = 18.5–24.9
//Overweight = 25–29.9
//Obesity = BMI of 30 or greater