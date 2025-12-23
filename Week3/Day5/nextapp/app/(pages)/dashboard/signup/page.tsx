// 'use client'
// import Input from '../../../components/ui/Input'
// import Button from '../../../components/ui/Button'
// import { User, Lock, Facebook } from 'lucide-react'
// import singUpImage from './signUp.jpg'
// import Image from 'next/image'
// import background from './background.jpeg'


// export default function SignIn() {
//     function submit(e: any) {
//         const formData = new FormData(e.currentTarget)
//         const username = formData.get('username')?.toString() || ''
//         const password = formData.get('password')?.toString() || ''
//         if (username?.length >= 3 && password?.length >= 6) {
//             alert('Successfully Logged In')
//         } else {
//             alert('Login Failed. Please check your credentials.')
//         }
//     }

//     return (
//         <>

//             <div className="relative hidden md:block w-1/2 h-full"> 
//                 <Image 
//                     src={background}
//                     alt="background"
//                     fill 
//                     className="object-cover" 
//                     priority
//                 />

//             </div>
//              <div className='border-2 border-solid border-gray-100 shadow-lg rounded-lg flex flex-col justify-center items-center'>
//                         <div className="text-teal-400 font-3xl pt-9 font-bold">Register With</div>
//                         <form className='p-10 flex flex-col gap-5' onSubmit={submit}>
//                             <label htmlFor="name">Name</label>
//                             <Input
//                                 name='name'
//                                 placeholder='Username'
//                                 icon={<User size={16} />}
//                                 className=''
//                             />
//                             <label htmlFor="email">Email</label>
//                             <Input
//                                 name='email'
//                                 placeholder='Email'
//                                 icon={<User size={16} />}
//                                 className=''
//                             />
//                             <label htmlFor="password">Password</label>
//                             <Input
//                                 name='password' 
//                                 placeholder='Password'
//                                 type='password'
//                                 icon={<Lock size={16} />}
//                                 className=''
//                                 description='Password must be at least 6 characters.'
//                             />
//                             <div className='flex justify-between items-center'>
//                                 <div>
//                                     <input type='checkbox' id='check' className='border-1 border-gray-100 m-2' />
//                                     <label htmlFor='check' className='text-gray-300 text-sm'>
//                                         Remember Me
//                                     </label>
//                                 </div>
//                             </div>
//                             <Button type='submit' className='w-full'>
//                                 SIGN UP
//                             </Button>
//                         </form>
//                     </div>


           
//         </>
//     )
// }
