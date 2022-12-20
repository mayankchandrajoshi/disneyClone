import React from 'react';

function Login() {
    return (
        <div className="h-[calc(100vh-70px)] px-[calc(3.5vw-5px)] bg-[url('C:\Users\mayan\Downloads\ReactSuperNoob\disneyplus\public\images\login-background.jpg')] bg-cover bg-fixed bg-top bg-no-repeat flex items-center justify-center ">
            <div className="max-w-[680px] w-[85vw] px-10 py-20 flex  flex-col">

                <img src="images\cta-logo-one.svg" alt="" />
                <a className="w-full bg-[#0063e5] font-bold py-4 text-[#f9f9f9] rounded-[4px] text-center cursor-pointer hover:bg-[#0483ee] transition tracking-[1.5px] mt-2 mb-3">GET ALL ITEMS</a>
                <p className="text-xs tracking-[1.5px] text-center leading-normal text-slate-50  mt-2 mb-3">
                    Get Premier Access to Raya and the Last Dragon for free with a Disney+ subscription. 
                    Lorem ipsum dolor sit amet consectetur a iste minus repellat non, porro sapiente aliquid soluta?
                </p>
                <img src="images\cta-logo-two.png" alt="" />
            </div>
        </div>
    )
}

export default Login;
