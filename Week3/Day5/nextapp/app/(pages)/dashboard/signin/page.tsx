'use client'
// I've added curly braces { } here. If this errors, remove them.
// But this is the most common fix for component errors.
import Input  from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import { User, Lock } from 'lucide-react'
import singUpImage from '../../../../public/chakra.jpeg'
import Image from 'next/image'
import Link from 'next/link'

// Ensure there is NO 'async' keyword here
export default function SignIn() {
    function submit(e: any) {
        e.preventDefault() 
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')?.toString() || '' 
        const password = formData.get('password')?.toString() || ''
        
        if (email.length >= 3 && password.length >= 6) {
            alert('Successfully Logged In')
        } else {
            alert('Login Failed. Please check your credentials.')
        }
    }

    return (
        <div className='flex w-full min-h-screen bg-white'>
            
            {/* Left Side: Form Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center' >
                <div className='border-1 border-gray-300 shadow-gray-400 shadow-lg p-10 rounded-lg'>
                    <div className='w-full max-w-[400px] flex flex-col gap-1 mb-8'>
                        <h1 className='text-teal-400 font-bold text-4xl'>Welcome Back</h1>
                        <p className='text-gray-400 font-bold text-sm'>Enter your email and password to sign in</p>
                    </div>

                    <form className='w-full max-w-[400px] flex flex-col gap-6' onSubmit={submit}>
                        <div>
                            <label className='text-sm text-gray-700 mb-2 block ml-1'>Email</label>
                            <Input
                                name='email'
                                placeholder='Your email address'
                                className='rounded-xl border-gray-200 focus:ring-teal-400 focus:border-teal-400'
                            />
                        </div>
                        
                        <div>
                            <label className='text-sm text-gray-700 mb-2 block ml-1'>Password</label>
                            <Input
                                name='password'
                                placeholder='Your password'
                                type='password'
                                className='rounded-xl border-gray-200 focus:ring-teal-400 focus:border-teal-400'
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id='check' className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-400"></div>
                                <span className="ml-3 text-sm font-bold text-gray-500">Remember me</span>
                            </label>
                        </div>

                        <Button type='submit' className='w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-md transition-all uppercase text-xs tracking-wider'>
                            SIGN IN
                        </Button>
                        
                        <div className="text-center mt-2">
                            <p className="text-gray-400 text-sm font-bold">
                                Don't have an account? 
                                <Link href="/dashboard/signup" className="text-teal-400 ml-1 font-bold hover:text-teal-500">Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side: Image Section */}
            <div className='hidden md:block md:w-1/2 relative h-screen'>
                 <div className='absolute inset-0 h-full w-full rounded-bl-[120px] overflow-hidden'>
                    <Image
                        src={singUpImage}
                        alt='sign up image'
                        fill
                        className='object-cover'
                        priority
                    />
                 </div>
            </div>
        </div>
    )
}