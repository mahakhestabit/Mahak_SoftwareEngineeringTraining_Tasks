import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { User, Lock } from 'lucide-react'

export default function loginPage() {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='p-10 flex flex-col gap-5 border-2 border-solid border-gray-100 shadow-lg rounded-lg'>
                <Input
                    placeholder='Username'
                    icon={<User size={16} />}
                    className=''
                />
                <Input
                    placeholder='Password'
                    type='password'
                    icon={<Lock size={16} />}
                    className=''
                />
                <div className='flex justify-between items-center'>
                    <div>
                        <input type='checkbox' id='check' className='border-1 border-gray-100 m-2' />
                        <label htmlFor='check' className='text-gray-300 text-sm'>
                            Remember Me
                        </label>
                    </div>
                    <div className='text-sm text-gray-300 cursor-pointer italic'>
                        Forgot Password?
                    </div>
                </div>
                <Button className='w-20'>LOGIN</Button>
            </div>
        </div>
    )
}
