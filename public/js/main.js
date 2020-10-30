const getM = document.getElementById('getMsg');
const sendM = document.getElementById('sendMsg');
getM.addEventListener('click', getMessage);
sendM.addEventListener('click', sendMessage);

async function getMessage() {
    // Asynchronous function to send POST request to server at specified url
    const response = await fetch('/api/mqtt');
    // Wait until the response is received and then store it into data
    const data = await response.json();
    if (data) {
        console.log('Message Received');
        console.log(data);
    }
    const nodeMessage = data;
    document.getElementById("msg").textContent = nodeMessage;
}

async function sendMessage(e) {
    e.preventDefault(); // Need to prevent the default button action executed by the browser
    const message = document.getElementById('body').value;

    // Store the input into a JSON object
    const input = { message: message };

    // Set the fetch api options for our POST request
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    };

    // Asynchronous function to send POST request to server at specified url
    const response = await fetch('/api/mqtt', options);
    // Wait until the response is received and then store it into data
    const data = await response.json();

    if (data) {
        console.log("Server Response Received");
        console.log(data);
    }
    const status = data;    
    document.getElementById('status').textContent = status;

}
