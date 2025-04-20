


const Contact = ()=>{

    return (

        <div>
        <h1 className="text-[24px] text-black dark:text-white font-bold text-start sm:text-left">Connect with me</h1>
        <hr className="border-t-2 dark:border-white" />
        <div className="flex flex-wrap space-x-10 justify-start mt-8">
          <button className="border-2 border-black bg-white  dark:border-white dark:bg-black  py-2 px-4 rounded-lg  hover:bg-black dark:hover:bg-gray-100   transition mb-4  text-[16px] text-black dark:text-white  hover:text-white dark:hover:text-black  font-bold">
            Linkedin
          </button>
          <button  className="border-2 border-black bg-white  dark:border-white dark:bg-black  py-2 px-4 rounded-lg  hover:bg-black dark:hover:bg-gray-100   transition mb-4  text-[16px] text-black dark:text-white  hover:text-white dark:hover:text-black  font-bold">
          GitHub
          </button>
          <button  className="border-2 border-black bg-white  dark:border-white dark:bg-black  py-2 px-4 rounded-lg  hover:bg-black dark:hover:bg-gray-100   transition mb-4  text-[16px] text-black dark:text-white  hover:text-white dark:hover:text-black  font-bold">

            Instagram
          </button>
        </div>
      </div>
      
    )
}

export default Contact