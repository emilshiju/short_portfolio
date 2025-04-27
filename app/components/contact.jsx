'use client';
import { useRouter } from 'next/navigation';

const Contact = ()=>{


  const router = useRouter(); 

  const handleGitNavigate=()=>{
  
    router.push('https://github.com/emilshiju')
  }

  const handleLinkedinNavigate=()=>{
    router.push('https://www.linkedin.com/in/emil-shiju-619615277/')
  }

    return (

        <div>
        <h1 className="text-[24px] text-black  font-bold text-start sm:text-left">Connect with me</h1>
        <hr className="border-t-2 " />
        <div className="flex flex-wrap space-x-10 justify-start mt-8">
          <button onClick={handleLinkedinNavigate} className="border-2 border-black bg-white     py-2 px-4 rounded-lg  hover:bg-black    transition mb-4  text-[16px] text-black   hover:text-white   font-bold">
            Linkedin
          </button>
          <button onClick={handleGitNavigate}  className="border-2 border-black bg-white    py-2 px-4 rounded-lg  hover:bg-black   transition mb-4  text-[16px] text-black   hover:text-white   font-bold">
          GitHub
          </button>
          <button  className="border-2 border-black bg-white  py-2 px-4 rounded-lg  hover:bg-black    transition mb-4  text-[16px] text-black  hover:text-white   font-bold">

            Instagram
          </button>
        </div>
      </div>
      
    )
}

export default Contact