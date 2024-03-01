// Function to prompt the user for their name
function askForName() {
    return prompt("What is your name?");
}

// Function to prompt the user for their age
function askForAge() {
    return prompt("How old are you?");
}

// Function to display a greeting message with the user's name and age
function displayGreeting(name, age) {
    alert("Hello, " + name + "! You are " + age + " years old. Welcome.");
}

// Function to handle when the user doesn't provide a name or age
function displayGenericGreeting() {
    alert("Hello! Welcome.");
}

// Main function to orchestrate the interaction
function main() {
    var name = askForName();

    if (name !== null && name !== "") {
        var age = askForAge();

        if (age !== null && age !== "") {
            displayGreeting(name, age);
        } else {
            displayGenericGreeting();
        }
    } else {
        displayGenericGreeting();
    }
}

// Call the main function to start the interaction
main();
