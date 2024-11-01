//rafce: React Arrow Function Component Export. 
import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [signInForm, setSignINForm] = useState(true);
    const toggleSignIn = () => {
        setSignINForm(!signInForm);
    }
    return (
        <>
            <Header></Header>

            <div>
                <img
                    className="absolute w-full"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
                />
            </div>
            
            <form className="absolute my-24 mx-auto right-0 left-0  bg-black opacity-85 w-3/12 p-12 text-white rounded-lg">
               
                <h1 className="text-3xl font-bold py-4 mx-2">{signInForm? "Sign In": "Sign Up"}</h1>

                {!signInForm && <input type="text" placeholder="Enter Full Name" className="p-2 m-2 w-full rounded-lg bg-gray-700" />}


                <input type="text" placeholder="Email Address" className="p-2 m-2 w-full rounded-lg bg-gray-700" />
                <input type="password" placeholder="Password" className="p-2 m-2 w-full rounded-lg bg-gray-700" />

                {!signInForm && <input type="password" placeholder="Confirm Password" className="p-2 m-2 w-full rounded-lg bg-gray-700" />}


                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{signInForm? "Sign In" : "Sign Up"}</button>

                <p className="mx-2 cursor-pointer" onClick={toggleSignIn}>
                    {signInForm? "New to Netflix? SignUp now" : "Already having an account? SignIn now"}
                </p>
            </form>
        </>
    )
}
export default Login;




