function hello(params) {
    return `hello epiPeer at ${Date()}`
}

async function insertPeerjs(){
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

async function createNode(id=crypto.randomUUID()){ // this node's id, which peer nodes need to know to call in. If not provided a new one will be created
    let node = new Peer(id)
    return node
}

async function connect(node,id,msg=`sent at ${Date}`){ // connecting this node with peer node with given id
    var conn = node.connect(id); 
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
      // here you have conn.id
      conn.send(msg);
    });
    return node
}

async function receive(node){ // receiveing messages from those knowing my id
    node.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print msg received
        console.log(data);
      });
    });
}

export {hello,insertPeerjs,createNode}