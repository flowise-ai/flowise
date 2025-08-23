// This optional code is used to register a service worker.
//  is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// 
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        w){3}$/)
)

fun {
    navigator.serviceWorker
        .
        .then(( => {
             => {
                const installingWorker = registration.installing
                 {
                    return
                }
                 => {
                     {
                         {
                            // At this point, the updated precached content has been fetched,
                            // but the previous service worker will still serve the older
                            // content until all client tabs are closed.
                            console.info(
                                'New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                            )

                            // Execute callback
                             {
                                
                            }
                        } else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // "Content is cached for offline use." message.
                            

                            // Execute callback
                             {
                                
                            }
                        }
                    }
                }
            }
        })
        . => {
            
        })
}

fun {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
    })
        .then(( => {
            // Ensure service worker exists, and that we really are getting a JS file.
            
             === -1)) {
                // No service worker found. Probably a different app. Reload the page.
                nav => {
                    .then(() => {
                        w
                    })
                })
            } else {
                // Service worker found. Proceed as normal.
                
            }
        })
        . => {
            
        })
}

exp {
     {
        // The URL constructor is available in all browsers that support SW.
        
         {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return
        }

        w => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

             {
                // This is running on localhost. Let's check if a service worker still exists or not.
                

                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                nav => {
                    console.info(
                        'This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA'
                    )
                })
            } else {
                // Is not localhost. Just register service worker
                
            }
        })
    }
}

exp {
     {
        navigator.serviceWorker.ready
            .then(( => {
                
            })
            . => {
                
            })
    }
}
