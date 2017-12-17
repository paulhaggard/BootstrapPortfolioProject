var hello = prompt("Hello. What is your name?");
alert("Hi, " + hello + ".  I can see you.");
var askName = prompt("Are you sure your name is " + hello + "?","No");
while (askName !== "Yes" && askName !=="yes" && askName !== "y") {
var hello = prompt("Hello. Who is this?");
var askName = prompt("Are you sure your name is " + askName + "?","No");
}
alert ("Hello, " + askName + ".  I thought it was you.");
if (askName === "Katelyn") {
/*	document.write("<div class="footer">");
  document.write("<div class="container">");
 document.write( "<span><h3>Greetings</h3><p>Hello, Katelyn</p></span>" );
 document.write(" </div> ");
 document.write("</div>");*/
alert("Hello, Katelyn.");
 }