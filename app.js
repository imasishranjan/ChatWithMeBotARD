function talk() {
    var know = {
        "Who are you": "Hello, ASISH is here  ",
        "Hello": "Hello, Nice to meet you  ",
        "Hi": "Hello",
        "How are you": "Good :) tell me about yourself",
        "What can i do for you": "Search information for you and entertain you",
        "Your full name":
            "My full name is Asish Ranjan das and I am a Developer by passion",
        Ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}