import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../utlis/Firebase';

const UpdateUser = () => {
    const [uName, setUname] = useState("")
    const [rollno, setRollNo] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentRef = doc(db, "student", id)
                const snapshot = await getDoc(studentRef)
                setUname(snapshot.data().uName)
                setRollNo(snapshot.data().rollno)
                // console.log(snapshot.data())
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [id])

    // console.log(uName, rollno)

    const updateData = async () => {
        try {
            if (uName && rollno) {
                await updateDoc(doc(db,"student",id),{uName:uName,rollno:rollno})
                alert("Std data updated successfully");
                navigate("/showuser")
            }
            else {
                console.log("no data")
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Update Student</h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 w-full mb-2 rounded"
                    value={uName}
                    onChange={(e)=>setUname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    className="border p-2 w-full mb-4 rounded"
                    value={rollno}
                    onChange={(e)=>setRollNo(e.target.value)}

                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    onClick={updateData}
                >
                    Update Student
                </button>
            </div>
        </div>
    );
};

export default UpdateUser;
