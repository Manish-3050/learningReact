const Login = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                    <div className="flex justify-center mb-8">
                        {/* <img src={icon} className='h-20' alt='logo'/> */}
                    </div>
                    <h5 className='font-semibold mb-3'>Sign In with your email and password</h5>
                    <form >
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            // value={formData.email}
                            // onBlur={handleChange}
                            // onChange={(e) => handleChange(e)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                            placeholder="Enter your email"
                        />
                        {/* <div className="text-red-700">{formError.email}</div> */}

                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            // value={formData.password}
                            // onBlur={handleChange}
                            // onChange={(e) => handleChange(e)}
                            className="w-full p-2 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                            placeholder="Enter your password"
                        />
                        {/* <div className="text-red-700">{formError.password}</div> */}

                        <div className="text-left mb-4">
                            {/* <a href="#" className="text-primary text-sm hover:underline">
            Forgot your password?
          </a> */}
                        </div>
                        <button
                            type="submit"
                            style={{ backgroundColor: 'rgb(37, 41, 99)' }}
                            className="w-full py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 "
                        >
                            Sign in
                        </button>


                    </form>
                </div>
            </div>
        </>
    )
}

export { Login }