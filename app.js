// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // User Input & Conditional Statement | JAVASCRIPT

// // Page 2 of 4

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // User Input & Conditional Statement | JAVASCRIPT

// // Page 3 of 4

//  if("car" < "cat"){
// alert("car is smaller than cat");
// }





// Question # 01 
document.write ("Result: </br>");
document.write ("The Value of a is: 10 </br>");
document.write ("------------------------------" )

document.write ("</br></br>")

var a= 10;
++a;
a++;
--a;
a--;

document.write ("The Value of ++a is: " + ++a + "</br>");
document.write ("Now the Value of a is: "+ a + "</br>");

document.write ("</br></br></br>")

document.write ("The Value of a++ is: " + a++ + "</br>");
document.write ("Now the Value of a is: " + a + "</br>");

document.write ("</br></br></br>")

document.write ("The Value of --a is: " + --a + "</br>");
document.write ("Now the Value of a is: " + a + "</br>");

document.write ("</br></br></br>")

document.write ("The Value of a-- is: " + a-- + "</br>");
document.write ("Now the Value of a is: " + a-- + "</br>" )

document.write("</br>")
// Question # 02 
var a= 2;
var b= 1;
var result = --a - --b + ++b + b--;

document.write (--a + "</br>");
document.write (--a - --b + "</br>");
document.write (--a - --b + ++b + "</br>");
document.write (--a - --b + ++b + b-- + "</br>");
document.write ("a is " + a + "</br>");
document.write ("b is " + b + "</br>");
document.write ("Result is " + result);


document.write("</br>")
document.write("</br>")

// Question # 03
var username = prompt("Enter Your UserName");

document.write ("Hello " + username + "!" + " It's a pleasure to meet you");

document.write("</br>");
document.write("</br>");

// Question # 04 

var num = prompt("Enter a Number to print its multiplication table", 5) 
var i = 0; 
document.write('<table border="1" cellspacing="0">');
 for(i=1;i<=10;i++) 
 { document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>"); }
 document.write("</table>");

//  Question # 05
var subject1= prompt ("Enter Your Subject");
var subject2= prompt ("Enter Your Subject");
var subject3= prompt ("Enter Your Subject");
var TM= prompt ("Enter Your Total Marks");
var OB1= prompt("Enter Your 1 First Subject Marks");
var OB2= prompt("Enter Your Second Subject Marks");
var OB3= prompt("Enter Your Third Subject Marks");
var OBT= OB1+OB2+OB3;

document.write ("<table border= '1' cellspacing='0'>");
document.write("<tr><td>")
document.write ("<b>Subject</b> " +"</br>")

document.write (subject1 +"</br>");
document.write (subject2 +"</br>");
document.write (subject3 +"</br>");
document.write ("Total")
document.write("</td>")

document.write("<td>")
document.write ("<b>Total Marks</b>" +"</br>")
document.write (TM + "</br>")
document.write (TM + "</br>")
document.write (TM + "</br>")
document.write (TM * 3);
document.write("</td>")

document.write("<td>")
document.write ("<b>Obtained Marks</b>" + "</br>")
document.write (OB1 + "</br>");
document.write (OB2 + "</br>");
document.write (OB3 + "</br>");
document.write (OBT + "</br>");
document.write("</td>")

document.write("<td>")
document.write ("<b>Percentage</b>" + "</br>")
document.write (OB1 / TM * 100 + "%" +"</br>");
document.write (OB2 / TM * 100 + "%" + "</br>");
document.write (OB3 / TM * 100 + "%" + "</br>");
document.write (TM/ OBT * 100 + "%");
document.write("</td>")

document.write("</tr></table>");

  





