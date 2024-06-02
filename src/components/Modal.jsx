import React from 'react'

const Modal = ({deleteCampaign,setIsModal,campaignId}) => {
   

   function handleClick () {
        deleteCampaign(campaignId)
        setIsModal(false)
    }
  return (
    <div className='fixed bg-black/60 top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center '>

        <div className='bg-white flex flex-col items-center p-5 rounded-lg'>
            <h5>Stop Campaign</h5>

            <p className='mt-6 text-center'>Are You sure you want to delete MTN campaign? <br />
            This action cannot be undone.</p>

            <div className='mt-6 flex gap-3 items-center'>
                <button className='border border-gray-700 rounded-md p-2 cursor-pointer hover:bg-green-700 hover:text-white' onClick={()=>setIsModal(false)}>Cancel</button>
                <button className='border border-gray-700 rounded-md p-2 cursor-pointer bg-red-700 text-white opacity-[.85] hover:opacity-[1]' onClick={()=>handleClick()}>Delete Campaign</button>
            </div>
        </div>
    </div>
  )
}

export default Modal