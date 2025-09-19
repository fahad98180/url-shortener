import { Box,
    Heading,
    Text,
    TextField,
     Button,
     Flex
     } from "@radix-ui/themes"; 
      import { useRegister } from "../hooks/register-hook";

const Register = () =>{

    const {doSubmit, register, handleSubmit, errors} = useRegister();
return(
   <Box width="400px" height="64px"mx="auto"mt="6">
    <Heading align="center">Register</Heading>
    <form onSubmit={handleSubmit(doSubmit)}>

        {/* email */}
        
        <Box>
            <Text as="label" size="3" weight="medium">
             Email
             </Text>
             <TextField.Root {...register('email')} type="email" placeholder="Type Email Here"/>
             {errors.email && <Text color="red">{errors.email.message}</Text>}
        </Box>

        {/* password */}

        <Box>    
            <Text as="label" size="3" weight="medium">
             Password
             </Text>
             <TextField.Root {...register('password')} type="password" placeholder="Type Password Here"/>
             {errors.password && <Text color="red">{errors.password.message}</Text>}
             
        </Box>

{/* name */}

         <Box>
            <Text as="label" size="3" weight="medium">
             Name
             </Text>
             <TextField.Root {...register('name')} type="text" placeholder="Type Name Here"/>
             {errors.name && <Text color="red">{errors.name.message}</Text>}
              
        </Box>
<Flex gap="3">
<Box>
    <Button type="submit"variant="soft"size="3" style={{margin:3}}>Register</Button>
</Box>

<Box>
    <Button type="button"variant="soft"size="3"style={{margin:3}}>Reset</Button>
</Box>
</Flex>
    </form>

   </Box>
);
};
export default Register;