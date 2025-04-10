import React from 'react'
import { Link } from 'react-router-dom';

const LoginSection = () => {
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email...
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Password...
            </label>
            <input
              type="password"
              placeholder="Enter your password.."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password...?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
           <Link to="/home"> Login </Link>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-900">
          Don't have an account...?{" "}
          <a href="/signup" className="text-blue-800 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default LoginSection 

