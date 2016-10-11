/**
 * Call the API
 * @param request       The request URL relative to API_ROOT
 * @param method        The HTTP method
 * @returns {Promise}   A promise which should be resolved with the response
 */
export default function connectToAPI(request, method, data) {
    return new Promise((resolve, reject) => {
        let xhttp;

        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    try {
                        resolve(JSON.parse(xhttp.responseText));
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    reject('Could not connect to API');
                }
            }
        };
        xhttp.open(method, request, true);
        xhttp.send(data);
    });
}
