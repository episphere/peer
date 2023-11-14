const hello = `hello epiPeer at ${Date()}`

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

var nodes=[] // list of local nodes
var conns=[] // list of connections

async function createNode(id=crypto.randomUUID()){ // this node's id, which peer nodes need to know to call in. If not provided a new one will be created
    let node = new Peer(id)
	nodes.push(node)
    return node
}

async function createConnection(node,peerId,msg=`${node._id} connecting with ${peerId} at ${Date()}`){ // connecting this node with peer node with given id
    console.log(msg)
	var conn = node.connect(peerId); 
    // on open will be launch when you successfully connect to PeerServer
    // Send
    conn.on('open', function(c){
		console.log(`connection open`, conn)
		conn.on('data', function(data) {
		  console.log('Received', data);
		});
    });
    // receive
    //conn.on('data', function(data) {
	//  console.log('Received', data);
	//});
	conns.push(conn) // redundant, see comment above
    return conn
}

async function receive(node,fun=console.log){ // receiveing messages from those knowing the node's id
    node.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print msg received
        fun(data);
      });
    });
}

export {hello,insertPeerjs,createNode,nodes,conns,createConnection}