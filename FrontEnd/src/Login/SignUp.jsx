import {useState} from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="p-10 w-full">
            <h2 className="mt-6 text-2xl font-bold text-gray-700">Get Started for free!</h2>
            <form className="mt-4 space-y-4">
                {/* Name Input */}
                <div>
                <label className="text-gray-500">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Email Input */}
                <div>
                <label className="text-gray-500">Email</label>
                <input
                    type="email"
                    placeholder="name@gmail.com"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Password Input */}
                <div className="relative">
                <label className="text-gray-500">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="6+ characters"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <AiOutlineEye
                    className="absolute right-3 top-10 text-gray-400 cursor-pointer"
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                    onMouseLeave={() => setShowPassword(false)}
                />
                </div>

                <p className="text-xs text-gray-400 mt-2">
                By signing up you agree to <span className="text-blue-500">terms and conditions</span>.
                </p>

                <button
                type="submit"
                className="w-full py-2 mt-4 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                Register
                </button>
            </form>

            <div className="mt-6 text-center text-gray-400">Or register using</div>
            <div className="flex justify-center mt-4 space-x-4">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FaGoogle className="text-gray-500" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <FaFacebookF className="text-gray-500" />
                </button>
            </div>
        </div>
    )
}

export default SignUp
