function gethistory()
{
    return document.getElementById("hisval").innerText;
}
function printhistory(num)
{
 document.getElementById("hisval").innerText=num;
}
function getoutput()
{
 return document.getElementById("opval").innerText;
}
function printoutput(num)
{
    if(num=="")
    {
        document.getElementById("opval").innerText=num;
    }
    else{
document.getElementById("opval").innerText=getformatednum(num);
    }

}
function getformatednum(num)
{
    var n = Number(num);
     var val = n.toLocaleString("en");
     return val;
}
function reversenum(num)
{
    return Number(num.replace(/,/g ,''))
}
var op =document.getElementsByClassName("operator");
for(var i=0;i<op.length;i++)
{
    op[i].addEventListener('click',function()
    {
 if(this.id=="clear")
 {
     printhistory("");
     printoutput("");
 }
 else if(this.id=="backspace")
 {
     var output=reversenum(getoutput()).toString();
     if(output)
     {
         output=output.substr(0,output.length-1);
         printoutput(output);
     }
 }
 else{
     var output = getoutput();
     var history= gethistory();
     if(output!="")
     {
         output=reversenum(output);
         history+=output;
         if(this.id=="=")
         {
             var result = eval(history);
             printoutput(result);
             printhistory("");
         }
else 
 {
     history+=this.id;
     printhistory(history);
     printoutput("");
 }
}
 
 }
    });
}

var number =document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function()
    {
        var output =reversenum(getoutput());
        if(output!=NaN)
        {
            output+=this.id;
            printoutput(output);
        }
    });
}