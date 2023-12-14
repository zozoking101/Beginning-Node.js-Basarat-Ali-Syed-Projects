// Listing 2-47.

function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed
        throw new Error('connection failed');

        // Notify callback that connection succeeded?
        callback(null, connection);
    }
    catch (error) {
        // Notify callback about error?
        callback(error, null);
    }
}

// Usage
getConnection(function (error, connection) {
    if (error) {
    console.log('Error:', error.message);
    }
    else {
    console.log('Connection succeeded:', connection);
    }
});