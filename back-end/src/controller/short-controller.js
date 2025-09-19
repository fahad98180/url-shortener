// import { response } from "express";
import {nanoid} from'nanoid';
import { addURL, getSmallToBig } from "../services/url-service.js";
import { request } from 'express';
export const getBigURL=async(request,response)=>{
  const {code} = request.params;
  console.log('code is',code);
//   response.json({message:'Rec code'});
try{

    const doc =await getSmallToBig(code);
    if(doc && doc._id){
        response.redirect(doc.bigurl);
    }
    else{
        response.json({message:'invalid small URL'})
    }
}
catch{
    console.log('Error is ',err);
        response.json({message:'invalid small URL',err});

}
}  
export const urlShort=async(request,response)=>{
    const bigUrl=request.body.bigurl;
    console.log('Big URL ',bigUrl);
    try{

        const num = nanoid(6);
       const doc= await addURL({email:'fahad@yaaho.com',shortid:num,bigurl:bigUrl});
       if(doc && doc._id){

           response.json({shorturl:process.env.BASE_URL+"small/"+num});
       }
       else{
        response.json({error:'somthing went wrong'});
       }
    }
       catch{
        console.log('error in short url',err);
        response.json({error:'somthing went wrong',err});

       }
}