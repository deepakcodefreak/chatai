const messages = [
    "Hello! How can I assist you today?",
    "Good morning! What can I do for you?",
    "Hi there! Need any help?",
    "Greetings! How may I help you?",
    "Hello! What brings you here today?",
    "Good day! How can I be of service?",
    "Hi! Do you have any questions for me?",
    "Hello! How's your day going?",
    "Hey! What can I do for you?",
    "Hi! Is there something you need assistance with?",
    "Hello! What do you need help with?",
    "Good afternoon! How can I assist you?",
    "Hello! Do you need any information?",
    "Hi! What would you like to know?",
    "Hello! How can I make your day better?",
    "Hey! Need any support?",
    "Hi there! How can I assist you today?",
    "Hello! Feel free to ask me anything.",
    "Hi! I'm here to help you.",
    "Greetings! How may I assist you today?"
];


export function getAIMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            resolve(messages[randomIndex])
        }, 500);
    })
}