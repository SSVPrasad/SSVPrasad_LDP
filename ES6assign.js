// Udemy's Final Project Rewritten using ES6 Notations
const names =
    [
        {
            firstName: "Shiva",
            lastName: "Ambati"
          },
          {
            firstName: "Arjun",
            lastName: "Rao"
          },
          {
            firstName: "Sweety",
            lastName: "Nissan"
          },
          {
            firstName: "Nick",
            lastName: "Jonas"
          },
          {
            firstName: "Bunny",
            lastName: "Srivasthav"
          }
    ]

//random generator function.
const randomGenerator=(min, max)=> {
    let rand = Math.floor( parseInt(min) + parseInt(Math.random() * (max - min + 1)))
    return rand;
}
//random number between 1-100
const functn1=()=> {
    let a = randomGenerator(1, 100)
    document.getElementById("p1").innerHTML = a;
}
//random number between "Start" and "End"
const functn2=()=> {
    let minN = document.getElementById("min").value
    let maxN = document.getElementById("max").value
    let a = randomGenerator(minN, maxN)
    document.getElementById("p2").innerHTML = a;
    if (minN == "" || maxN == "") {
        document.getElementById("p2").innerHTML = "Please fill those textboxes.";
    }
}

//long Lorem Ipsum String
const functn3=()=> {
    document.getElementById("p3").innerHTML = lorem;
}

//Lorem Ipsum String based on the number or sentences specified
const functn4=()=> {
    let	number = document.getElementById("num1").value
    let newLorem = lorem.split(".");
    let a = ""
    for (var i = 0; i < number; i++) {
        a = a + newLorem[i] + " | \n";
    }
    document.getElementById("p4").innerHTML = a;
    console.log(a)
    if (number == "") 
        document.getElementById("p4").innerHTML = "Enter a number in the textbox.";

}

//Lorem Ipsum String based on the number or character specified
const functn5=()=> {
    let	number = document.getElementById("num2").value
    let newLorem = lorem.split("");
    let a = ""
    for (var i = 0; i < number; i++) {
        a = a + newLorem[i] + " - \n";
    }
    document.getElementById("p5").innerHTML = a;
    console.log(a)
    if (number == "") document.getElementById("p5").innerHTML = "Enter a number in the textbox.";

}

//formatted current date
const functn6=()=> {
    var dat = new Date();
    var a = dat + "\n --- And the normal date is :" + dat.getDay() + "-" + dat.getMonth() + "-" + dat.getFullYear();
    document.getElementById("p6").innerHTML = a;

}
//formatted current time
const functn7=()=> {
    var dat = new Date()
    var hr = dat.getHours()
    var min = dat.getMinutes()
    var ampm
    if (hr < 12){
        ampm = "AM"
        if (hr < 10) 
            hr = "0" + hr
    } 
    else if (hr > 12)
    {
        ampm = "PM"
        hr = hr - 12
    }    
    if (min < 10) min = "0" + min
    let a = hr + ":" + min + " " + ampm;
    document.getElementById("p7").innerHTML = a;
}

// Converts Inches to Feet
const InchToFeets=()=> {
    let	inn = document.getElementById("i2f").value
    let a = inn * 0.08334
    document.getElementById("p8").innerHTML = a;
}

//Converts Feet to Inches
const FeetsToInch=()=> {
    let feet = document.getElementById("f2i").value
    let a = feet * 12
    document.getElementById("p9").innerHTML = a;
}

//Compares if two words are of same length
const sameLengthComparison=()=> {
    let comp1 = document.getElementById("comp1").value
    let comp2 = document.getElementById("comp2").value
    comp1 = parseInt(comp1.length)
    comp2 = parseInt(comp2.length)

    console.log(comp1 + " " + comp2)
    if (comp1 > comp2) {
        document.getElementById("p10").innerHTML = "String 1 is greater in length."
        console.log("String 1 is greater in length.")
    }
    else if (comp1 < comp2) {
        document.getElementById("p10").innerHTML = "String 2 is greater in length."
        console.log("String 2 is greater in length.")
    }
    else if (comp1 == comp2) {
        document.getElementById("p10").innerHTML = "String 1 and String 2 are equal in length."
        console.log("String 1 and String 2 are equal in length.")
    }
}

//returns a random password
const randomPassword=() =>{
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    chars = chars.split("")
    console.log(chars)
    //lenght 8
    let a = ""
    for (let i = 0; i < 8; i++) {
        var m = randomGenerator(1, 64)
        console.log(chars[m])
        if (chars[m] == undefined) {
            a = a + "L"
            continue
        }
        a = a + chars[m];
    }
    document.getElementById("p11").innerHTML = a + "   ---Size of password using .lenght " + a.length
}

//checks if the number is even or odd
    const evenOdd=()=> {
    let check = document.getElementById("evenodd").value
    if ((check == NaN) || (check == "") || (check == " ")) {
        a = "Enter an integer value not a character or string."
    }
    if ((check % 2) == 1) a = "It is an Odd Number"
    if ((check % 2) == 0) a = "It is an Even Number"


    document.getElementById("p12").innerHTML = a
}

//returns random color
const randomColorGen=()=> {
    let ran = randomGenerator(0, 6)
    console.log(ran)
    document.getElementById("p13").innerHTML = colors[ran]
}

//returns a random first name and last name
const randomNames=()=> {
    min = Math.ceil(0)
    max = Math.floor(names.length)
    var num = Math.floor(Math.random() * (max - min)) + min
    document.getElementById("p14").innerHTML = " First Name: " + names[num].firstName + " Last Name: " + names[num].lastName
}