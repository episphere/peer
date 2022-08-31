function hello(params) {
    return `hello epiPeer at ${Date()}`
}

async function checkPeerjs(){
    let msg = 'peerjs inserted'
    if(typeof(peerjs)=='undefined'){
        await import('https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js')
        // remember peerjs inserts itself into the scope ... not cool
    }else{
        msg='peerjs already in the scope'
    }
    console.log(msg)
    return msg
}

export {hello,checkPeerjs}