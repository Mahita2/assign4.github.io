(function(window) {
    var saybyee = new Object();
    var byee = "Good Bye";
    saybyee.speak = function speak(name) {
        console.log(byee + " " + name);
    };
    window.saybyee = saybyee;
})(window);