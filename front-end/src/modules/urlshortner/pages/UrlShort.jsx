// import { Box ,Button ,Heading,Text,TextField} from "@radix-ui/themes";
// // import { useRegister } from "../../user/hooks/register-hook";
// import { useRef } from"react";
// import { apiClient } from "../../../shared/services/api-client";
//  export const UrlShort =()=>{
   
//     const url = useRef();
//     const takeURL=async()=>{
// const URL = url.current.value;
// try{
    
//     const response=await apiClient.post('/short-url',{bigurl:URL});
//     if(response && response.shorturl){
//         console.log("get the url ",URL);
//     console.log('small url is ',response.shorturl);
// }
// else{
//     console.log('some problem is short url')
// }
// }
// catch(err){
//     console.log('some problem is short url',err)

// };
//     return  (
//     <Box width="400px" height="64px"mx="auto"mt="6">
//     <Heading align="center">Url Shortener</Heading>
//     {/* <form onSubmit={handleSubmit(doSubmit)}> */}

//         {/* email */}
        
//         <Box>
//             <Text as="label" size="3" weight="medium">
//              UrlShort
//              </Text>
//              <TextField.Root ref={url} type="text" placeholder="Type Url Here"
//              />
//         <Button onClick={takeURL}type="button"variant="classic"size="3"style={{margin:3}}>Short Url</Button>
//         {/* <P></P> */}
// </Box>
// </Box>
// );
// };
import { Box, Button, Heading, Text, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import { apiClient } from "../../../shared/services/api-client.js";
import { useState } from "react";
export const UrlShort = () => {
  const url = useRef();
const [shortURL,setShortURL]=useState();
  const takeURL = async () => {
    const URL = url.current.value;
    try {
      const response = await apiClient.post("/short-url", { bigurl: URL });
     console.log('response',response);
      if (response && response.data.shorturl) {
        setShortURL(response.data.shorturl)
        console.log("small url is ", response.data.shorturl);
        console.log("get the url ", URL);
      } else {
        console.log("some problem in short url");
      }
    } catch (err) {
      console.log("some problem in short url", err);
    }
  };

  return (
    <Box width="400px" height="64px" mx="auto" mt="6">
      <Heading align="center">Url Shortener</Heading>

      <Box>
        <Text as="label" size="3" weight="medium">
          UrlShort
        </Text>
        <TextField.Root ref={url} type="text" placeholder="Type Url Here" />
        <Button
          onClick={takeURL}
          type="button"
          variant="classic"
          size="3"
          style={{ margin: 3 }}
        >
          Short Url
        </Button>
        <a href={shortURL}>{shortURL}</a>
      </Box>
    </Box>
  );
};
