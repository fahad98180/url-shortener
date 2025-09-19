import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { registerSchema } from '../validation/register-schema';
import { registerApiCall } from '../api/user-api';
// import { email } from 'zod';
export const useRegister = ()=>{
    const {register, handleSubmit,formState:{errors}} = useForm(
        {
            resolver : zodResolver(registerSchema),
            defaultValues:{
                email:'sample@example.com',
                password:'',
                name:''
            }
        }
    );
     const doSubmit =async (formData)=>{

        console.log("register form submit",formData);
        try{
            const response = await registerApiCall(formData);
            console.log("Response is",response);
        
        if(Response.data.id){
            alert("Register successFully");
        }
    
        else{
            alert("Register fail.....");
        }
        }
        catch(err){
            alert("register fail....");
            console.log('error ',err);
        }
    }

     return{doSubmit, register, handleSubmit, errors};

}