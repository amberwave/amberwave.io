const getM = document.getElementById('getMessage');
const sendM = document.getElementById('sendMessage');
getMessage.addEventListener('click', getPosts);
sendMessage.addEventListener('submit', addPost);

async function getMessage() {

    // Asynchronous function to send POST request to server at specified url
    const response = await fetch('/api', options);
    // Wait until the response is received and then store it into data
    const data = await response.json();

    const { nodeMessage } = data;
    document.getElementById("mess").textContent = nodeMessage;
}

async function sendMessage() {

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

    let output = ''; // holds the inserted html

    // Asynchronous function to send POST request to server at specified url
    const response = await fetch('/api', options);
    // Wait until the response is received and then store it into data
    const data = await response.json();

    // If data has been received then insert the html into page
    if (data) {
        console.log("Server Response Received");
        for (i = 0; i < data.length; i++) { 
            output += 
            `<tr>
                <th>${data[i].county}</th>
                <th>${data[i].totalcountconfirmed}</th>
                <th>${data[i].totalcountdeaths}</th>
                <th>${data[i].newcountconfirmed}</th>
                <th>${data[i].newcountdeaths}</th>
                <th>${data[i].date}</th>
            </tr>`
            ;
        }
    }

}
