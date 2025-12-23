"use client"
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { User, Lock } from 'lucide-react'

export default function loginPage() {
    function submit(e:any) {
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')?.toString() || '';
        const password = formData.get('password')?.toString() || '';
        if(username?.length >= 3 && password?.length >= 6) {
            alert("Successfully Logged In");
        }
        else{
            alert("Login Failed. Please check your credentials.");
        }

    }    
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
                <form className='p-10 flex flex-col gap-5 border-2 border-solid border-gray-100 shadow-lg rounded-lg' onSubmit={submit}>
                    <Input
                        name='username'
                        placeholder='Username'
                        icon={<User size={16} />}
                        className=''
                    />
                    <Input
                        name='password'
                        placeholder='Password'
                        type='password'
                        icon={<Lock size={16} />}
                        className=''
                        description="Password must be at least 6 characters."
                    />
                    <div className='flex justify-between items-center'>
                        <div>
                            <input type='checkbox' id='check' className='border-1 border-gray-100 m-2' />
                            <label htmlFor='check' className='text-gray-300 text-sm'>
                                Remember Me
                            </label>
                        </div>
                        <div className='hover:text-blue-400 text-sm text-gray-300 cursor-pointer italic'>
                            Forgot Password?
                        </div>
                    </div>
                    <Button type="submit" className='w-20'>LOGIN</Button>

                </form>  
        </div>
    )
}
