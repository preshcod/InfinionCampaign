import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const SuccessModal = ({setIsSuccessModal}) => {
    const navigate = useNavigate()

    function handleClick () {
      setIsSuccessModal(false)
      navigate('/campaign')
    }
  return (
    <div className='fixed bg-black/60 top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center '>

    <div className='bg-white flex flex-col items-center w-[600px] p-10 rounded-lg'>
        <IoIosCheckmarkCircle className="text-[#247B7B] text-[150px]" />

        <p className='mt-6 text-center font-semibold'>Campaign Successfully Created!</p>

        <div className='mt-6 flex gap-3 items-center'>
            <button onClick={()=>handleClick()} className="bg-[#247B7B] rounded-md p-2 cursor-pointer opacity-[.85] hover:opacity-100 hover:bg-[#247B7B] text-white">
            Go back to campaign list
            </button>
         </div>
    </div>
</div>
  )
}

export default SuccessModal