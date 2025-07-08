// Toggle Case of Each Character in String

function toggleCase(str) {
    var toggledStr = str.split("").map(function (char) {

        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }

    })
    return toggledStr.join("");
}

console.log("Toggled Case:", toggleCase("Hello World!")); // Output: hELLO wORLD!