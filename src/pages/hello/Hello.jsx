import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelloApi } from "../../api/hello-api";
import HelloForm from "./components/HelloForm";


const Hello = () => {
    const dispatch = useDispatch();
    const jwtToken = useSelector((store) => store.USER.user.token);
  
    const [helloMessage, setHelloMessage] = useState("");
  
    const handlSubmit = async (formValue) => {
      const message = await callSayHello(jwtToken, formValue.name);
      setHelloMessage(message);
    };
  
    const callSayHello = async (jwtToken, name) => {
      console.log("callSayHello with : " + jwtToken);
  
      const response = await HelloApi.sayHello(jwtToken, name)
        .then((restResponse) => {
          console.log("Message : " + restResponse);
          return restResponse.data;
        })
        .catch((error) => {
          throw new Error("Error during the API call", error);
        });
      return response;
    };
  
    return (
      <div>
        <h2>Hello</h2>
  
        <HelloForm onSubmit={handlSubmit} />
  
        <div>Message : {helloMessage}</div>
      </div>
    );
  };
  
  export default Hello;

  