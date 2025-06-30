import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
            <div className="flex justify-end space-x-4 mb-6">
                <Link to='/signup'>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"

                    >
                        Sign Up
                    </button>
                </Link>
                <Link to='/signin'>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Sign In
                    </button>
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Dashboard</h1>
            <p className="max-w-xl mx-auto text-center text-gray-700">
                This is a simple dashboard page demonstrating React routing and Firebase Authentication.
                Click the SignUp or SignIn buttons to navigate. After successful login or signup,
                you'll be redirected back here to the Dashboard.
            </p>

            <div className="flex justify-center mt-8">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"

                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard