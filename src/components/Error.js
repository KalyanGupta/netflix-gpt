import { useRouteError } from "react-router-dom";
const Error = () =>{
    const errorMsg = useRouteError();
    console.log(errorMsg); 
    return(
        <>
            <h1>The requested route {errorMsg.statusText} with status code as {errorMsg.status}</h1>
        </>
    )
}
export default Error;

