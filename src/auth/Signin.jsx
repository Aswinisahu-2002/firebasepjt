import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utlis/Firebase";
import { useState } from "react";

const Signin = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handelSighin = async ()=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/home')
            alert("Login Successfully")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-3 rounded"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-3 rounded"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                />
                    <button
                        className="bg-blue-500 text-white w-full py-2 rounded"
                        onClick={handelSighin}
                    >
                        Sign In
                    </button>
            </div>
        </div>
    );
}

export default Signin