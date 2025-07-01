import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../utlis/Firebase";

const ShowUsers = () => {
    const [user,setuser] = useState([])
    const navigate = useNavigate()
    const fetchData = async ()=>{
        const stdcollection = collection(db,"student")

        //!addDoc for getting data to the db
        const getData = await getDocs(stdcollection)
        const data = getData.docs.map((doc)=>{
            return {...doc.data(),id: doc.id}
            // console.log(doc.data())
            // setuser([...user,doc.data()])
        })
        console.log(data)
        setuser(data)
        // console.log(getData.docs[0].data())
    }

    useEffect(()=>{
        fetchData()
    },[])


    //!Deletion part
    const deleteUser = async (id)=>{
        //!DeleteDoc accepts the reference and it will delete thougrougly
        await deleteDoc(doc(db,"student",id))
        fetchData();
    }
  
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">🎓 Student Records</h1>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
               
            >
                <Link to="/creteuser">Add New Student</Link>
            </button>

            <div className="overflow-x-auto w-full max-w-3xl">
                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Roll Number</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((student) => (
                            <tr key={student.id} className="text-center">
                                <td className="py-2 px-4 border">{student.uName}</td>
                                <td className="py-2 px-4 border">{student.rollno}</td>
                                <td className="py-2 px-4 border flex justify-center gap-2">
                                    <button
                                        className="bg-yellow-400 px-2 py-1 rounded text-sm"
                                        onClick={()=>navigate(`/updateuser/${student.id}`)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                                        onClick={()=>deleteUser(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {user.length === 0 && (
                            <tr>
                                <td colSpan="3" className="py-4">
                                    No student records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowUsers;
