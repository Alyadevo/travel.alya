

const mongoose=require('mongoose');


mongoose.set('strictQuery', false);
const mongoUrl='mongodb+srv://gotravell:1234@cluster0.gmvnank.mongodb.net/gotravelmern?retryWrites=true&w=majority'
const mongoDB=async()=>{
   await mongoose.connect(mongoUrl,{useNewUrlParser:true});
        console.log("connected");
//     const fetched_data= await mongoose.connection.db.collection("agence_items");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err){ console.log(err);}
//         else
//         {
//         console.log(data);}
        
//     })
    
// });
const client = await mongoose.connection.db;
const agenceItemsCollection = client.collection("agence_items");
const agenceCategoryCollection = client.collection("agenceCategory");
const agenceItemsData = await agenceItemsCollection.find({}).toArray();
const agenceCategoryData = await agenceCategoryCollection.find({}).toArray();
global.agence_items = agenceItemsData;
global.agenceCategory = agenceCategoryData;
}

module.exports=mongoDB;
