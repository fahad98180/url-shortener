import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
// import { registerSchema } from '../validation/register-schema';
import {useNavigate} from 'react-router-dom';
import { loginApiCall } from '../api/user-api';
import { loginSchema } from '../validation/login-schema';
// import { email } from 'zod';
export const useLogin = ()=>{
   const navigate = useNavigate();
    const {register, handleSubmit,formState:{errors}} = useForm(
        {
            resolver : zodResolver(loginSchema),
            defaultValues:{
                email:'sample@example.com',
                password:'',
            }
        }
    );
     const doSubmit = async (formData)=>{

        console.log("login form submit",formData);
        try{
            const response = await loginApiCall(formData);
            console.log("Response is",response);
        
        if(response.data.id){
            localStorage.email=response.data.email;
            alert("Login successFully");
            navigate('/dashboard');
        }
    
        else{
            alert(response.data.message);
        }
        }
        catch(err){
            alert("Login fail....");
            console.log('error ',err);
        }
    }

     return{doSubmit, register, handleSubmit, errors};

}




// const doSubmit = async (formData) => {
//   console.log("login form submit", formData);
//   try {
//     const response = await loginApiCall(formData);
//     console.log("Response is", response);

//     if (response.data?.id) {
//       alert("Login successFully");
//     } else {
//       alert("Login failed: no id returned");
//     }
//   } catch (err) {
//     console.error("login error", err);
//     if (err.response) {
//       alert("Login failed: " + (err.response.data?.error || "Invalid credentials"));
//     } else {
//       alert("Login failed: network error");
//     }
//   }
// };
//  return { doSubmit, register, handleSubmit, errors };
// };
