const form = document.getElementById('form')
const password1EL = document.getElementById('password1')
const password2EL = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

// Event Listener
let isValid = false

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity()
    // Style main message for an error
    message.textContent = 'Please fill out all fields'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
}

function processFormData(e) {
    e.preventDefault()
    validateForm()
}

form.addEventListener('submit', processFormData)