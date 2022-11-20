
export const liberaCors = ()=> {
    // Listen on a specific host via the HOST environment variable
    var host = 'scdescala.s3-sa-east-1amazonaws.com';
    // Listen on a specific port via the PORT environment variable
    var port = 5173 || 8080;

    var cors_proxy = 'cors-anywhere';
    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2']
    }).listen(port, host, function () {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });


    (function () {
        var cors_api_host = 'scdescala.s3-sa-east-1.amazonaws.com';
        var cors_api_url = 'https://' + cors_api_host + '/';
        var slice = [].slice;
        var origin = window.location.protocol + '//' + window.location.host;
        var open = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            var args = slice.call(arguments);
            var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
            if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
                targetOrigin[1] !== cors_api_host) {
                args[1] = cors_api_url + args[1];
            }
            return open.apply(this, args);
        };
    })();
}