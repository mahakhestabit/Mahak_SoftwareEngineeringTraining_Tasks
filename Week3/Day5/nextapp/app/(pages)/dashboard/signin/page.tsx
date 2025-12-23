'use client'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import { User, Lock } from 'lucide-react'
import singUpImage from './signUp.jpg'
import Image from 'next/image'

export default function SignIn() {
    function submit(e: any) {
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username')?.toString() || ''
        const password = formData.get('password')?.toString() || ''
        if (username?.length >= 3 && password?.length >= 6) {
            alert('Successfully Logged In')
        } else {
            alert('Login Failed. Please check your credentials.')
        }
    }

    return (
        <>
            <div className='flex justify-center items-center bg-teal h-full w-full gap-10 min-h-screen p-4'>
                <div className='border-2 border-solid border-gray-100 shadow-lg rounded-lg'>
                    <div className='p-4'>
                        <p className='text-teal-400 text-500 text-4xl'>Welcome Back</p>
                        <p className='text-gray-300'>Enter your email and password to sing In</p>
                        <form className='p-10 flex flex-col gap-5' onSubmit={submit}>
                            <Input
                                name='email'
                                placeholder='Your Email address'
                                icon={<User size={16} />}
                                className=''
                            />
                            <Input
                                name='password'
                                placeholder='Password'
                                type='password'
                                icon={<Lock size={16} />}
                                className=''
                                description='Password must be at least 6 characters.'
                            />
                            <div className='flex justify-between items-center'>
                                <div>
                                    <input type='checkbox' id='check' className='border-1 border-gray-100 m-2' />
                                    <label htmlFor='check' className='text-gray-300 text-sm'>
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <Button type='submit' className='w-full'>
                                SIGN IN
                            </Button>
                        </form>
                    </div>
                </div>
                <div>
                    <Image
                        src={singUpImage}
                        alt='sign up image'
                        height={800}
                        width={500}
                        className='rounded-xl shadow-all shadow-black'
                    />
                </div>
            </div>
        </>
    )
}
