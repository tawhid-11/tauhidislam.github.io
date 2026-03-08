export const environment = {
    production: false,
    apiUrl: newFunction()
}

function newFunction() {
    return 'https://portfolio-8c8b9-default-rtdb.firebaseio.com';
}
