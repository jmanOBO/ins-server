const path=require("path");
const fsPromises=require("fs").promises;

module.exports= {

    getData: async()=>{
        try{
            const data= await fsPromises.readFile(path.join(__dirname, "db.txt"),"utf8")
            
            return data;
        }catch(err){
            console.log(err);
            return null;
        }
        
    },
    setData: async(data)=>{
        try{
             await fsPromises.appendFile(path.join(__dirname, "db.txt"), "\n"+data)
             return true;
        }catch(err){
            console.log(err);
            return null;
        }
    }
   }