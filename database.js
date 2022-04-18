/* const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log("DB is connected"); 
    }
    catch(e){
        console.log("NOOOO SE CONECTÓ");
        console.log(e);
    }
    console.log("ENTRÓ");
}



exports = connect();
 */


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://camilo:q1w2e3@clustermaestrik.43cej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then(()=>{
    console.log("DB is connected...")
}).catch(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

