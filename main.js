

const function5 = () => {
    const url = "https://github.com/rauchg/chat-example/blob/master/index.html";
    console.log(555);
    fetch(url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the JSON from our response
        document.body.innerHTML = html
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
};