import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const Body = () =>{

    const appRouter = createBrowserRouter([
        {
           path: "/",
           element: <Login></Login> ,
           errorElement: <Error></Error>
        },
        {
            path: "/browse",
            element: <Browse></Browse>
        }
    ])

    return(
        <>
           <RouterProvider router={appRouter}></RouterProvider>
        </>
    )
}
export default Body;


