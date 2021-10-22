

//getting the values like branch sem and scheme from index.html
var branch = localStorage.getItem("branch");
console.log(branch);
var sem = localStorage.getItem("sem");
console.log(sem);
var scheme = localStorage.getItem("scheme");
console.log(scheme);

const d1=document.getElementById("s1");
const d2=document.getElementById("s2");
const d3=document.getElementById("s3");
const d4=document.getElementById("s4");
const d5=document.getElementById("s5");
const d6=document.getElementById("s6");
const d7=document.getElementById("s7");
const d8=document.getElementById("s8");
const d9=document.getElementById("s9");


//18 scheme
//calculation of sgpa based on branch sem and scheme
if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && ((sem == "1st Semester") || (sem == "2nd Semester")) && scheme == "18") {


    //on loading page
    window.onload = function(){

        if ( sem == "1st Semester"){
        
            document.getElementById("ct1").textContent="18**11";
            document.getElementById("ct2").textContent="18**12";
            document.getElementById("ct3").textContent="18**13";
            document.getElementById("ct4").textContent="18**14";
            document.getElementById("ct5").textContent="18**15";
            document.getElementById("ct6").textContent="18**16";
            document.getElementById("ct7").textContent="18**17";
            document.getElementById("ct8").textContent="18**18";
            document.getElementById("s9").style.display="none";
            
        }
        else{
        
            document.getElementById("ct1").textContent="18**21";
            document.getElementById("ct2").textContent="18**22";
            document.getElementById("ct3").textContent="18**23";
            document.getElementById("ct4").textContent="18**24";
            document.getElementById("ct5").textContent="18**25";
            document.getElementById("ct6").textContent="18**26";
            document.getElementById("ct7").textContent="18**27";
            document.getElementById("ct8").textContent="18**28";
            document.getElementById("s9").style.display="none";
            
        }
       
    }

    //calling cacl() when calculate is clicked
    function calc() {
        var c = [], i;
        //pushing input to an array
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        //check whether the entered marks are correct
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        //function call to covert marks to grade
        for (var j = 0; j < 8; j++) {
            getGrade(c[j]);
        }
        //for the dev
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        //function marks to out of 10
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        //subject credits
        let d = [4, 4, 3, 3, 3, 1, 1, 1];
        let e = [];
        //calculate creits*converted marks
        for (let k = 0; k < 8; k++) {
            e[k] = (c[k] * d[k]);
        }
        //for the dev
        for (let k = 0; k < 8; k++) {
            console.log(d[k]);
        }
        //final sgpa calculation and storing the value in result
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        //function to calculate total
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        //for the dev
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && ((sem == "3rd Semester") || (sem == "4th Semester")) && scheme == "18") {

    //on loading page
    window.onload = function(){


        if (sem == "3rd Semester"){
        document.getElementById("ct1").textContent="18**31";
        document.getElementById("ct2").textContent="18**32";
        document.getElementById("ct3").textContent="18**33";
        document.getElementById("ct4").textContent="18**34";
        document.getElementById("ct5").textContent="18**35";
        document.getElementById("ct6").textContent="18**36";
        document.getElementById("ct7").textContent="18**37";
        document.getElementById("ct8").textContent="18**38";
        document.getElementById("ct9").textContent="18**39";
        }
        
        else{
            document.getElementById("ct1").textContent="18**41";
            document.getElementById("ct2").textContent="18**42";
            document.getElementById("ct3").textContent="18**43";
            document.getElementById("ct4").textContent="18**44";
            document.getElementById("ct5").textContent="18**45";
            document.getElementById("ct6").textContent="18**46";
            document.getElementById("ct7").textContent="18**47";
            document.getElementById("ct8").textContent="18**48";
            document.getElementById("ct9").textContent="18**49";
            }
        

   
}

    function calc() {
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [3, 4, 3, 3, 3, 3, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "5th Semester" && scheme == "18") {

//on loading page
window.onload = function(){

    
    document.getElementById("ct1").textContent="18**51";
    document.getElementById("ct2").textContent="18**52";
    document.getElementById("ct3").textContent="18**53";
    document.getElementById("ct4").textContent="18**54";
    document.getElementById("ct5").textContent="18**55";
    document.getElementById("ct6").textContent="18**56";
    document.getElementById("ct7").textContent="18**57";
    document.getElementById("ct8").textContent="18**58";
    document.getElementById("ct9").textContent="18**59";
    

}

    function calc() {
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [3, 4, 4, 3, 3, 3, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "6th Semester" && scheme == "18") {
  
    //on loading page
    window.onload = function(){

        document.getElementById("ct1").textContent="18**61";
        document.getElementById("ct2").textContent="18**62";
        document.getElementById("ct3").textContent="18**63";
        document.getElementById("ct4").textContent="18**64X";
        document.getElementById("ct5").textContent="18**65X";
        document.getElementById("ct6").textContent="18**66";
        document.getElementById("ct7").textContent="18**67";
        document.getElementById("ct8").textContent="18**68";
        document.getElementById("s9").style.display="none";
        
    
    }
    function calc() {
    
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 8; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 8; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 3, 3, 2, 2, 2];
        let e = [];
        for (let k = 0; k < 8; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 8; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}

else if (branch == "cs" && sem == "7th Semester" && scheme == "18") {

//on loading page
window.onload = function(){

    document.getElementById("ct1").textContent="18**71";
    document.getElementById("ct2").textContent="18**72";
    document.getElementById("ct3").textContent="18**73X";
    document.getElementById("ct4").textContent="18**74X";
    document.getElementById("ct5").textContent="18**75X";
    document.getElementById("ct6").textContent="18**76";
    document.getElementById("ct7").textContent="18**77";
    document.getElementById("ct8").textContent="18**78";
    document.getElementById("s9").style.display="none";
    

}

    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 7; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 7; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 3, 3, 3, 2, 1];
        let e = [];
        for (let k = 0; k < 7; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 7; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;

            array.forEach(function (item, index) {
                total += item;
            });

            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "7th Semester" && scheme == "18") {

//on loading page
window.onload = function(){

    document.getElementById("ct1").textContent="18**71";
    document.getElementById("ct2").textContent="18**72";
    document.getElementById("ct3").textContent="18**73X";
    document.getElementById("ct4").textContent="18**74X";
    document.getElementById("ct5").textContent="18**75X";
    document.getElementById("ct6").textContent="18**76";
    document.getElementById("ct7").textContent="18**77";
    document.getElementById("ct8").textContent="18**78";
    document.getElementById("s9").style.display="none";
    

}

    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 7; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 7; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [3, 3, 3, 3, 3, 2, 1];
        let e = [];
        for (let k = 0; k < 7; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 7; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "8th Semester" && scheme == "18") {

//on loading page
window.onload = function(){

    document.getElementById("ct1").textContent="18**81";
    document.getElementById("ct2").textContent="18**82X";
    document.getElementById("ct3").textContent="18**P83";
    document.getElementById("ct4").textContent="18**S84";
    document.getElementById("ct5").textContent="18**I85";
    document.getElementById("s6").style.display="none";
    document.getElementById("s8").style.display="none";
    document.getElementById("s9").style.display="none";
    document.getElementById("s7").style.display="none";
    

}

    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 5; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [3, 3, 8, 1, 3];
        let e = [];
        for (let k = 0; k < 5; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 5; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;

            array.forEach(function (item, index) {
                total += item;
            });

            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
//17 scheme
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && ((sem == "1st Semester") || (sem == "2nd Semester")) && scheme == "17") {
    window.onload = function(){

        if ( sem == "1st Semester"){
        
            document.getElementById("ct1").textContent="17**5";
            document.getElementById("ct2").textContent="17**52";
            document.getElementById("ct3").textContent="17**53";
            document.getElementById("ct4").textContent="17**54";
            document.getElementById("ct5").textContent="17**55";
            document.getElementById("ct6").textContent="17**56";
            document.getElementById("ct7").textContent="17**57";
            document.getElementById("ct8").textContent="17**58";
            document.getElementById("s9").style.display="none";
            
        }
        else{
        
            document.getElementById("ct1").textContent="17**21";
            document.getElementById("ct2").textContent="17**22";
            document.getElementById("ct3").textContent="17**23";
            document.getElementById("ct4").textContent="17**24";
            document.getElementById("ct5").textContent="17**25";
            document.getElementById("ct6").textContent="17**26";
            document.getElementById("ct7").textContent="17**27";
            document.getElementById("ct8").textContent="17**28";
            document.getElementById("s9").style.display="none";
            
        }
       
    }
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 7; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 7; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 4, 4, 2, 2];
        let e = [];
        for (let k = 0; k < 7; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 7; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "cv")) && sem == "3rd Semester" && scheme == "17") {
    window.onload = function(){
            document.getElementById("ct1").textContent="17**31";
            document.getElementById("ct2").textContent="17**32";
            document.getElementById("ct3").textContent="17**33";
            document.getElementById("ct4").textContent="17**34";
            document.getElementById("ct5").textContent="17**35";
            document.getElementById("ct6").textContent="17**36";
            document.getElementById("ct7").textContent="17**37";
            document.getElementById("ct8").textContent="17**38";
            document.getElementById("ct9").textContent="17**39";
    }
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 4, 3, 4, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (branch = "me" && sem == "3rd Semester" && scheme == "17") {
    window.onload = function(){
        document.getElementById("ct1").textContent="17**31";
        document.getElementById("ct2").textContent="17**32";
        document.getElementById("ct3").textContent="17**33";
        document.getElementById("ct4").textContent="17**34";
        document.getElementById("ct5").textContent="17**35";
        document.getElementById("ct6").textContent="17**36";
        document.getElementById("ct7").textContent="17**37";
        document.getElementById("ct8").textContent="17**38";
        document.getElementById("ct9").textContent="17**39"; 
}
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 4, 4, 3, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (branch = "ec" && sem == "3rd Semester" && scheme == "17") {
    window.onload = function(){
        document.getElementById("ct1").textContent="17**31";
        document.getElementById("ct2").textContent="17**32";
        document.getElementById("ct3").textContent="17**33";
        document.getElementById("ct4").textContent="17**34";
        document.getElementById("ct5").textContent="17**35";
        document.getElementById("ct6").textContent="17**36";
        document.getElementById("ct7").textContent="17**37";
        document.getElementById("ct8").textContent="17**38";
        document.getElementById("ct9").textContent="17**39"; 
}
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 3, 4, 4, 4, 4, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "cv")) && sem == "4th Semester" && scheme == "17") {
    window.onload = function(){
        document.getElementById("ct1").textContent="17**41";
        document.getElementById("ct2").textContent="17**42";
        document.getElementById("ct3").textContent="17**43";
        document.getElementById("ct4").textContent="17**44";
        document.getElementById("ct5").textContent="17**45";
        document.getElementById("ct6").textContent="17**46";
        document.getElementById("ct7").textContent="17**47";
        document.getElementById("ct8").textContent="17**48";
        document.getElementById("ct9").textContent="17**49"; 
}
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 3, 4, 4, 4, 4, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "ec") || (branch = "me")) && sem == "4th Semester" && scheme == "17") {
    window.onload = function(){
        document.getElementById("ct1").textContent="17**41";
        document.getElementById("ct2").textContent="17**42";
        document.getElementById("ct3").textContent="17**43";
        document.getElementById("ct4").textContent="17**44";
        document.getElementById("ct5").textContent="17**45";
        document.getElementById("ct6").textContent="17**46";
        document.getElementById("ct7").textContent="17**47";
        document.getElementById("ct8").textContent="17**48";
        document.getElementById("ct9").textContent="17**49"; 
}
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 9; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 9; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 4, 4, 3, 2, 2, 1];
        let e = [];
        for (let k = 0; k < 9; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 9; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && ((sem == "5th Semester") || (sem == "6th Semester")) && scheme == "17") {
    window.onload = function(){

        if ( sem == "5th Semeste"){
        
            document.getElementById("ct1").textContent="17**51";
            document.getElementById("ct2").textContent="17**52";
            document.getElementById("ct3").textContent="17**53";
            document.getElementById("ct4").textContent="17**54";
            document.getElementById("ct5").textContent="17**55X";
            document.getElementById("ct6").textContent="17**56X";
            document.getElementById("ct7").textContent="17**57";
            document.getElementById("ct8").textContent="17**58";
            document.getElementById("s9").style.display="none";
            
        }
        else{
        
            document.getElementById("ct1").textContent="17**61";
            document.getElementById("ct2").textContent="17**62";
            document.getElementById("ct3").textContent="17**63";
            document.getElementById("ct4").textContent="17**64";
            document.getElementById("ct5").textContent="17**65X";
            document.getElementById("ct6").textContent="17**66X";
            document.getElementById("ct7").textContent="17**67";
            document.getElementById("ct8").textContent="17**68";
            document.getElementById("s9").style.display="none";
            
        }
       
    }
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 8; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 8; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 4, 3, 3, 2, 2];
        let e = [];
        for (let k = 0; k < 8; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 8; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "7th Semester" && scheme == "17") {
    window.onload = function(){
    document.getElementById("ct1").textContent="17**71";
    document.getElementById("ct2").textContent="17**72";
    document.getElementById("ct3").textContent="17**73";
    document.getElementById("ct4").textContent="17**74X";
    document.getElementById("ct5").textContent="17**75X";
    document.getElementById("ct6").textContent="17**76";
    document.getElementById("ct7").textContent="17**77";
    document.getElementById("ct8").textContent="17**78";
    document.getElementById("s9").style.display="none";
    }
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 8; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 8; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 4, 3, 3, 2, 2, 2];
        let e = [];
        for (let k = 0; k < 8; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 8; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && sem == "8th Semester" && scheme == "17") {
    window.onload = function(){
        document.getElementById("ct1").textContent="17**81";
        document.getElementById("ct2").textContent="17**82";
        document.getElementById("ct3").textContent="17**83X";
        document.getElementById("ct4").textContent="17**84";
        document.getElementById("ct5").textContent="17**P85";
        document.getElementById("ct6").textContent="17**S86";
        document.getElementById("s7").style.display="none";
        document.getElementById("s8").style.display="none";
        document.getElementById("s9").style.display="none";
        }
    function calc() {
        console.log("hello");
        var c = [], i;
        c.push(document.getElementById("text1").value);
        c.push(document.getElementById("text2").value);
        c.push(document.getElementById("text3").value);
        c.push(document.getElementById("text4").value);
        c.push(document.getElementById("text5").value);
        c.push(document.getElementById("text6").value);
        c.push(document.getElementById("text7").value);
        c.push(document.getElementById("text8").value);
        c.push(document.getElementById("text9").value);
        for (var z = 0; z < 9; z++) {
            if (c[z] < 0 || c[z] > 100) {
                alert("enter valid marks");
                process.exit(1);
            }
        }
        for (var j = 0; j < 6; j++) {
            getGrade(c[j]);
        }
        for (i = 0; i < 6; i++) {
            console.log(c[i]);
        }
        function getGrade(item) {
            if (item < 40)
                return (c[j] = 0);
            else if (item < 45 && item >= 40)
                return (c[j] = 4);
            else if (item < 50 && item >= 45)
                return (c[j] = 5);
            else if (item < 60 && item >= 50)
                return (c[j] = 6);
            else if (item < 70 && item >= 60)
                return (c[j] = 7);
            else if (item < 80 && item >= 70)
                return (c[j] = 8);
            else if (item < 90 && item >= 80)
                return (c[j] = 9);
            else if (item >= 90)
                return (c[j] = 10);
        }
        let d = [4, 4, 3, 2, 6, 1];
        let e = [];
        for (let k = 0; k < 6; k++) {
            e[k] = (c[k] * d[k]);
        }
        for (let k = 0; k < 6; k++) {
            console.log(d[k]);
        }
        var result = total(e) / total(d);
        document.getElementById("SGPAresult").innerHTML = result.toFixed(2);
        function total(array) {
            var total = 0;
            array.forEach(function (item, index) {
                total += item;
            });
            return total;
        }
        console.log(total(d));
        console.log(total(e));
        console.log(result);
    }
}
else {
    console.log("working");
}
