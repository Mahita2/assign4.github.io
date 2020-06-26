/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["mahitha", "John", "Jane", "Jenisha", "swara", "tilak", "nathasha", "sanika", "shakti", "Jason"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            saybyee.speak(names[i]);
        } else {
            sayhello.speak(names[i]);
        }
    }
})();