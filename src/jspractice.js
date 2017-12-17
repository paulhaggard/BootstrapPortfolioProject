var myName = prompt("Hello. What is your name?");
alert("Hi, " + myName + ".  I can see you.");
var askName = prompt("Are you sure your name is " + myName + "?","No");
while (askName !== "Yes" && askName !=="yes" && askName !== "y") {
var myName = prompt("Hello. Who is this?");
var askName = prompt("Are you sure your name is " + myName + "?","No");
}
alert ("Hello, " + myName + ".  I thought it was you.");
if (myName === "Katelyn") {
/*	document.write("<div class="footer">");
  document.write("<div class="container">");
 document.write( "<span><h3>Greetings</h3><p>Hello, Katelyn</p></span>" );
 document.write(" </div> ");
 document.write("</div>");*/
alert("Hello, Katelyn.");
 }