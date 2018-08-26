(function (window) {

var names = ["jatin", "faraz", "ujjwal", "johnny", "mohit", "jacky", "pranav", "kundan", "ram", "jaanu"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);