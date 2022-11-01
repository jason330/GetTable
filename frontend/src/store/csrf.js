async function csrfFetch(url, options = {}) {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};
    
    // if the options.method is not 'GET', then set the "Content-Type" header to
    // "application/json" and the "X-CSRF-Token" header to the value of the 
    // "X-CSRF-Token" cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }
    
    const res = await fetch(url, options);
    
    // if the response status code is 400 or above, then throw an error with the
    // error being the response
    if (res.status >= 400) throw res;
    
    // if the response status code is under 400, then return the response to the
    // next promise chain
    return res;
}

// export async function restoreCSRF() {
//     const response = await csrfFetch("/api/session");
//     storeCSRFToken(response);
//     return response;
// }

export default csrfFetch;