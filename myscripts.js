//getting the values like branch sem and scheme from index.html
var branch = localStorage.getItem("branch");
console.log(branch);
var sem = localStorage.getItem("sem");
console.log(sem);
var scheme = localStorage.getItem("scheme");
console.log(scheme);
//18 scheme
//calculation of sgpa based on branch sem and scheme
if (((branch = "cs") || (branch = "ec") || (branch = "me") || (branch = "cv")) && ((sem == "1st Semester") || (sem == "2nd Semester")) && scheme == "18") {
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
else if (branch == "cs" && sem == "7th Semester" && scheme == "18") {
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
