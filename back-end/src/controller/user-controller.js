import { response } from "express";
import { LoginUser, registerUser } from "../services/user-service.js";
// import { registerUser } from "../services/user-service";

export const home =(request,response)=>{
    response.send('<h1>URL shortner project</h1>'); 

}

export const login = async (request,response)=>{
      const userInfo =request.body;
    try{

        const doc =await LoginUser(userInfo);
        response.json({message:'login  succesfully ', id: doc._id, email:doc.email,
        });
    }
catch(err){
    response.json({error:'something went wrong during login',err:err});
   console.log('login fail ',err);
}

}
export const register =async (request,response )=>{
    const userInfo =request.body;
    try{

        const doc =await registerUser(userInfo);
        response.json({message:'register succesfully ',id: doc._id});
    }
catch(err){
    response.json({error:'something went wrong during register',err:err});
   console.log('register fail',err);
}

    //     console.log('user info ',userInfo);
//    response.send('<h1> Register </h1>');
}
















// chat gpt code


// import { LoginUser, registerUser } from "../services/user-service.js";

// export const home = (request, response) => {
//   response.send("<h1>URL shortner project</h1>");
// };

// export const login = async (request, response) => {
//   const userInfo = request.body;
//   try {
//     const doc = await LoginUser(userInfo);

//     // Handle invalid login
//     if (!doc) {
//       return response.status(401).json({
//         error: "Invalid email or password",
//       });
//     }

//     // Success
//     response.json({
//       message: "Login successfully",
//       id: doc._id,
//       email: doc.email,
//     });
//   } catch (err) {
//     console.log("login fail", err);
//     response.status(500).json({
//       error: "Something went wrong during login",
//       details: err.message,
//     });
//   }
// };

// export const register = async (request, response) => {
//   const userInfo = request.body;
//   try {
//     const doc = await registerUser(userInfo);
//     response.json({ message: "register successfully", id: doc._id });
//   } catch (err) {
//     console.log("register fail", err);
//     response.status(500).json({
//       error: "Something went wrong during register",
//       details: err.message,
//     });
//   }
// };
