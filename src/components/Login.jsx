import React from 'react'
import fondologin from '../assets/fondologin.jpg'
import Footer from './Footer';



export default function Login() {
    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full mt-12' >
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={fondologin}></img>
            </div>
            <div className='bg-[#ffe4b8] flex flex-col justify-center'>
                <form className='max-w-[500px] w-full mx-auto bg-[#e6d1b1] p-8 px-8 rounded-lg' >
                    <h2 className='text-4xl dark:text-white font-normal'>Acceder</h2>
                    <div className='flex flex-col text-black py-2'>
                        <label>Nombre de usuario</label>
                        <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="text"></input>
                    </div>
                    <div className='flex flex-col text-black py-2'>
                        <label>Contraseña</label>
                        <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="password"></input>
                    </div>
                    <div className='flex justify-between  text-black py-2'>
                        <p>Olvidé mi contraseña</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-yellow-50 rounded-lg' >Entrar</button>
                </form>
            </div>
        </div>    
        <Footer></Footer>  
        </>
    );
}
