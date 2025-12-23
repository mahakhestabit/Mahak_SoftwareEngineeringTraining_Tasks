'use client'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import background from './bgTeal.png' 

export default function SignIn() {
    function submit(e: any) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString() || '' 
        const email = formData.get('email')?.toString() || ''
        const password = formData.get('password')?.toString() || ''
        
        if (name && email && password.length >= 6) {
            alert('Form Submitted successfully')
        } else {
            alert('Please fill in all fields correctly.')
        }
    }

    return (
        <div className="min-h-screen w-full bg-gray-50 font-sans">
            
            <div className="relative w-full h-[520px]">
                
                <Image 
                    src={background}
                    alt="Teal Background"
                    fill
                    className="object-cover rounded-b-[30px]"
                    priority
                />
                <div className="relative z-10 h-full flex flex-col p-8 text-white">
                   
                    <div className="text-center mt-4">
                        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
                        <p className="opacity-80 max-w-lg mx-auto">
                            Use these awesome forms to login or create new account in your project for free.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. FLOATING FORM CARD (Negative Margin to overlap image) */}
            <div className="relative z-20 flex justify-center -mt-64 px-4 pb-12">
                <div className='flex flex-col justify-center items-center bg-white w-auto max-w-md shadow-2xl rounded-2xl pl-20 pr-20 pt-10 pb-10'>
                    <p className='font-bold text-teal-400 text-2xl'>Sign Up</p>
    
                    <form className='flex flex-col gap-4' onSubmit={submit}>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Name</label>
                            <Input
                                name='name'
                                placeholder='Your full name'
                                className='rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Email</label>
                            <Input
                                name='email'
                                placeholder='Your email address'
                                type="email"
                                className='rounded-xl border-gray-200 focus:border-teal-400 focus:ring-teal-400'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 ml-1 mb-1 block">Password</label>
                            <Input
                                name='password' 
                                placeholder='Your password'
                                type='password'
                                className='rounded-xl  border-gray-200 focus:border-teal-400 focus:ring-teal-400'
                            />
                        </div>
                        
                        <div className='flex items-center mt-2'>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="check" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-400"></div>
                                <span className="ml-3 text-sm font-medium text-gray-500">Remember me</span>
                            </label>
                        </div>
                        
                        <Button type='submit' className='w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 rounded-xl mt-4 shadow-lg shadow-teal-400/30 transition-all uppercase text-sm tracking-wider'>
                            SIGN UP
                        </Button>

                        <div className="text-center mt-4">
                            <p className="text-gray-500 text-sm">
                                Already have an account? 
                                <Link href="/dashboard/signin" className="text-teal-500 font-bold hover:text-teal-600">Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}