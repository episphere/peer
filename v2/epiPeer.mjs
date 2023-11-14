console.log(`${location.origin}${location.pathname}epiPeer.js loaded \n${Date()}`)

import peerjs from 'https://cdn.jsdelivr.net/npm/peerjs@1.4.7/+esm'

const hello = `hello world at ${Date()}`

async function demo(div){
    if(!div){
        div=document.createElement('div')
        document.body.appendChild(div)
    }
    div.innerHTML=Date()
    peerjs
    4
    
    //debugger
}
//demo()

export {
    hello,
    demo
}