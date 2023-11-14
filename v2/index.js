console.log(`${location.origin}${location.pathname}index.js loaded \n${Date()}`);

(async function(){
    pjs = await import('./epiPeer.mjs')
    pjs.demo()
    debugger
})()