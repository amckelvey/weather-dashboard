var requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ba73c9062a1905b9cfc5d9bc217c4118"

console.log(requestUrl);

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            // Check the console first to see the response.status
            console.log(response.status);
            // Then write the conditional based on that response.status value
            if (response.status === 404) {
                // Make sure to display the response on the page
                responseText.textContent = response.status;
            }

        })
        .then(function (data) {
            console.log(data);
        });
}
