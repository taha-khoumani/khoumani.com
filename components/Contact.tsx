import React, { ChangeEvent, FormEvent, useState } from 'react'
import Notification from './Notification';
import { nanoid } from 'nanoid';

type Props = {}

export default function Contact({}: Props) {
  const [allNotifications,setAllNotification] = useState<(React.JSX.Element[])>([])

  const [formData,setFormData] = useState({
    email:'',
    message:'',
  })

  const [didUserClicked,updateDidUserClicked] = useState(false)

  function changeHeight (e:FormEvent){
    const el = e.target as HTMLElement
    el.style.height = "";
    el.style.height = `${el.scrollHeight}px`;
  }

  function onInputHandler(e:FormEvent){
    const el = e.target as HTMLInputElement
    const property = el.name
    const value = el.value
    setFormData(prev=>({
      ...prev,
      [property]:value,
    }))
  }

  async function onSubmitHandler(e:FormEvent){
    e.preventDefault()

    const result = await fetch('/api/hello',{
      method: "POST",
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json',
      }
    })
    const jsonResult = await result.json()

    const notif = <Notification key={nanoid()} />
    setAllNotification(prev=>[...prev,notif])
    setTimeout(()=>setAllNotification(prev=> prev.slice(0,-1)),6000)
  }

  function copy(text:string) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}


  function onCopyHandler(){
    copy('khoumanitaha23@gmail.com')
    updateDidUserClicked(true)
    setTimeout(()=>updateDidUserClicked(false),3500)
  }

  return (
    <>
      <div className='w-full flex justify-center' id='contact'>
        <div className='general-margins bg-white rounded-2xl w-160 p-8 sm:py-16 sm:px-16 lg:py-16 '>
          <div className='text-center mb-10 sm:mb-16' >
            <h2 className='headings' >Let's Connect</h2>
            <p className='sub-headings'>Reach Out and Say Hello</p>
          </div>
          <div className='flex flex-col gap-8 sm:gap-12'>
            <form 
              className='flex flex-col gap-8 sm:gap-12'
              onSubmit={onSubmitHandler}
            >
              <p className='contact-sub-headings'>Contact me using the form on this page :</p>
              <div className='inputDiv'>
                <label className='label' htmlFor="email">Email :</label>
                <input 
                  onInput={onInputHandler} 
                  name='email' 
                  className='input' 
                  required
                  type="email" 
                  value={formData.email}
                />
              </div>
              <div className='inputDiv'>
                <label className='label' htmlFor="email">Message :</label>
                <textarea 
                  className='input resize-none overflow-y-hidden' 
                  onChange={(e)=>changeHeight(e)}
                  rows={3}
                  onInput={onInputHandler}
                  name='message'
                  required
                  value={formData.message}
                />
              </div>   
              <button className='btn w-full gap-2 sm:gap-3 font-medium px-1 text-sm sm:text-lg'>
                Let's get started !
                <i aria-hidden className="fa-regular fa-paper-plane"></i>
              </button>       
            </form>
            <div className='flex gap-4 items-center'>
              <div className='w-full h-1px bg-black bg-opacity-50' ></div>   
              <p className='font-bold sm:text-xl'>OR</p>   
              <div className='w-full h-1px bg-black bg-opacity-50' ></div>   
            </div>
            <div className='flex flex-col gap-8 sm:gap-10'>
              <p className='contact-sub-headings'>Copy my email here :</p>
              <button 
                className='btn w-full gap-2 sm:gap-3 font-medium text-sm sm:text-lg'
                onClick={onCopyHandler}
              >
                {didUserClicked ? 'Email Copied' : 'Click Me !'}
                <i 
                  aria-hidden className={didUserClicked ? `fa-solid fa-check`:`fa-regular fa-hand-pointer`}
                >
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='allnotifications' className='fixed flex gap-4 flex-col-reverse right-0 py-3 px-5 sm:py-4 sm:px-6 '>
        {allNotifications}
      </div>
    </>
  )
}