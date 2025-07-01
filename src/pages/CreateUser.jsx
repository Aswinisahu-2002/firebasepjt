import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utlis/Firebase";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [uName,setUName] = useState("")
    const [rollno,setRollNo] = useState("")
    const navigate = useNavigate()
    const addUserData =async ()=>{
        try {
            if(uName && rollno){
                console.log(uName,rollno)
                const stdList = collection(db,"student")
                await addDoc(stdList,{uName,rollno})
                alert("Std data added successfully");
                navigate("/showuser")
            }
            else{
                console.log("no data")
            }
        } catch (error) {
            
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add New Student</h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 w-full mb-2 rounded"
                    value={uName}
                    onChange={(e)=>setUName(e.target.value)}
                   
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    className="border p-2 w-full mb-4 rounded"
                    value={rollno}
                    onChange={(e)=>setRollNo(e.target.value)}
                   
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    onClick={addUserData}
              
                >
                    Add Student
                </button>
            </div>
        </div>
    );
};

export default CreateUser;
