/**
 * Created by amit on 4/24/18.
 */


const progressiveWebAppScript = `
    <!-- Add this for progressive web app. -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                }).catch(function(err) {
                    console.log(err)
                });
            });
        } else {
            console.log('service worker is not supported');
        }
    </script>
    <!-- end service worker for progressive web app. -->
`;

const metaAndLinkTags = `
    <!--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0,minimum-scale=1,shrink-to-fit=no">
    <!-- Meta tags for progressive web app -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#7D50D7">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/img/favicon.png">
    <!-- End Meta tags for progressive web app -->
`;


// notice that this is not a react component, it only returns a string.
const Html = ({body, title, initialData}) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>${title}</title>
        <script>window.__initialData__ = ${initialData}</script>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${body}</div>
        <script src="/js/vendor.js"></script>
        <script src="/js/bundle.js"></script>
    </body>
    </html>
`;


export default Html;
