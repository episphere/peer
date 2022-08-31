(async function(){
    epiPeer = await import('./methods.js')
    // if commonJS require is being used
    if(typeof(define)!='undefined'){
        define(epiPeer)
    }
    // acknowledge
    console.log('epiPeer.js loaded')
})()