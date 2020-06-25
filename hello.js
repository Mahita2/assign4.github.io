(function(window) {
    var sayhello= new Object();
    var hello = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(hello + " " + name);
    };
    window.sayhello = sayhello;
})(window);
