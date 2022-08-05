var messages= document.getElementById("messages");
var textbox= document.getElementById("textbox");
var button= document.getElementById("button");

button.addEventListener("click", function(){
  var newMessage = document.createElement("li");
  newMessage.innerHtml = textbox.value;
  messages.appendChild(newMessage);
  textbox.value = "";

});