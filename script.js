function sendMessage() {
    let input = document.getElementById("userInput").value;
    let message = input.toLowerCase();
    let reply = "";

    if (message.includes("about")) {
        reply = "This is Bright Future Academy. We provide courses in Web Development, AI, Machine Learning and Data Science.";
    }
    else if (message.includes("course")) {
        reply = "We offer HTML, CSS, JavaScript, Artificial Intelligence, Machine Learning and Data Science.";
    }
    else if (message.includes("contact")) {
        reply = "You can contact us at info@education.com";
    }
    else {
        reply = "Sorry, I did not understand. Please ask about courses or academy.";
    }

    document.getElementById("chatResponse").innerText = reply;
}
