import React from 'react'
import { Link } from 'react-router-dom'
import { GrChatOption } from "react-icons/gr";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";


export default function Login() {

    const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(userName, password);
	};


    return <>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full md:w-[800px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                   
                   {/*---------------------------- Login title -------------------------------*/}
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl flex items-center justify-center gap-2">
                        Login <span className='text-blue-500 flex items-center justify-center gap-2'> Chatiee  <GrChatOption /> </span>
                    </h1>
                    

                   {/*---------------------------- Login Form -------------------------------*/}

                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        
                  
                   {/*---------------------------- UserName field-------------------------------*/}
                        
                        <div>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                            <input type="text" 
                            name="userName" 
                            id="userName" 
                            value={userName}
							onChange={(e) => setUsername(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Enter username" />
                        </div>
                        
                   {/*---------------------------- password field -------------------------------*/}
                        
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" 
                            name="password" 
                            id="password"
                            value={password}
							onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>


                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {loading ? <span className='loading loading-spinner '></span> : "Login"}
                            </button>


                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                        </p>

                    </form>

                </div>
            </div>
        </div>

    </>


}
