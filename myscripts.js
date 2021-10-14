function calc(){
    console.log("hello");
   var c=[],i;

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

  
  
   //function call to covert marks to grade
   for( var j=0;j<9;j++){
    getGrade(c[j]);
    }

    for(i=0;i<9;i++){
        console.log(c[i]);
    }


   //function marks to out of 10 
   function getGrade(item) {
    if (item < 40)
        return (c[j]=0);
    else if (item < 45 && item >=40)
        return(c[j]=4);
    else if (item < 50 && item >=45)
        return (c[j]=5);
    else if (item < 60 && item >=50)
        return (c[j]=6);
    else if (item < 70 && item >=60)
        return (c[j]=7);
    else if (item < 80 && item >=70)
        return (c[j]=8);
    else if (item < 90 && item >=80)
        return (c[j]=9);
    else if (item >=90)
        return (c[j]=10);
 }
 //subject credits
 let d=[3,4,4,3,3,3,2,2,1];
 let e=[];
 for(let k=0;k<9;k++){
    e[k]=(c[k]*d[k]);
 }
 for(let k=0;k<9;k++){
     console.log(d[k]);
 }

var result=total(e)/total(d);

document.getElementById("SGPAresult").innerHTML = result;


//function to calculate total
 function total(array) {
    var total = 0;

    array.forEach(function(item, index) {
        total += item;
    });

    return total;
}

 console.log(total(d));
 console.log(total(e));
 console.log(result);
}

