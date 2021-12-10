function calccgpa() {
    var c =[],i;
   
    //pushing input to an array
    c[0]=(document.getElementById("text1").value);
    c[1]=(document.getElementById("text2").value);
    c[2]=(document.getElementById("text3").value);
    c[3]=(document.getElementById("text4").value);
    c[4]=(document.getElementById("text5").value);
    c[5]=(document.getElementById("text6").value);
    c[6]=(document.getElementById("text7").value);
    c[7]=(document.getElementById("text8").value);
   
    var credSum=0;
    if(c[0]>0)        
    {credSum+=24;}
    else{c[0]=0;}
    if(c[1]>0)
    {credSum+=24;}
    else{c[1]=0;}
    if(c[2]>0)
    {credSum+=28;}
    else{c[2]=0;}
    if(c[3]>0)
    {credSum+=28;}
    else{c[3]=0;}
    if(c[4]>0)
    {credSum+=26;}
    else{c[4]=0;}
    if(c[5]>0)
    {credSum+=26;}
    else{c[5]=0;}
    if(c[6]>0)
    {credSum+=24;}
    else{c[6]=0;}
    if(c[7]>0)
    {credSum+=20;}
    else{c[7]=0;}
    for(var i=0;i<8;i++){
        console.log(c[i]);
    }
    var r1=(24*c[0])+(24*c[1])+(28*c[2])+(28*c[3])+(26*c[4])+(26*c[5])+(22*c[6])+(21*c[7]);
    console.log(r1);
    console.log(credSum);
    var result=(r1/credSum);
    console.log(result);
    document.getElementById("result").innerHTML = result.toFixed(2);
   // var percentage=(r1-0.75)*10;
   // document.getElementById("percentage").innerHTML = percentage.toFixed(2);
    
}
