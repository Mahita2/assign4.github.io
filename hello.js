(function(window) {
    var sayhello= new Object();
    var hello = "Hello";
    sayhello.speak = function(name) {
        console.log(hello + " " + name);
    };
    window.sayhello = sayhello;
})(window);
