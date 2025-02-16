const btn = document.getElementById('btn')  //η document.querySelector('#btn')
btn.addEventListener('click', function(){  //μπορουμε με το addEventListener να κανουμε πολλα events. να τα καταχωρησουμε δηλαδη στο button
  alert('HelloWorld!')
}, false)    //μπορει να παρει και τριτη παραμετρο. απο default ειναι παντα false και σημαινει οτι θα κανει bubbling - δηλαδη αν εχουμε καταχωρησει ενα event στο button κι ενα στο div του, τοτε θα εκτελεστει πρωτα του button και μετα το div. ενω αν βαζαμε True, τοτε θα εκτελουνταν πρωτα του div και μετα του button. αυτο ειναι το capturing.
//εν ολιγοις: FALSE: bubbling
 //           TRUE: capturing

