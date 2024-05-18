import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import { GrChatOption } from "react-icons/gr";
import useSignup from "../../hooks/useSignup";

export default function Signup() {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '', // Ensure this matches the state key
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full md:w-[800px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl flex items-center justify-center gap-2">
            Sign Up <span className='text-blue-500 flex items-center justify-center gap-2'> Chatiee  <GrChatOption /> </span>
          </h1>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
              <input type="text"
                name="fullName"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Shehab Saeed"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input type="text"
                name="userName" 
                id="userName" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="shehab01"
                value={inputs.userName}
                onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

            <button type="submit" 
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
