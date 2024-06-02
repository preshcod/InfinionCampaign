import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import SuccessModal from '../components/SuccessModal'
import { useNavigate } from 'react-router-dom';




function CreateCampaign() {
    const [isSuccessModal,setIsSuccessModal] = useState(false)
    


    const [formData,setFormData] = useState({
        campaignName: "",
        campaignDescription: "",
        campaignStatus: "Active",
        startDate: "",
        endDate: "",
        linkedKeywords: [ "string"],
        dailyDigest: "string"
        
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {value,name} = e.target
        setFormData((prevState)=>{
            return {...prevState,[name]:value}
        })
    }

    const handleSubmit = async (e) => {
            e.preventDefault()
        try {
           await axios.post(`https://infinion-test-int-test.azurewebsites.net/api/Campaign`,formData,{
            headers: {
                'Content-Type': 'application/json'
            }
           })
        //    toast.success('Campaign Created Successfully')
           setIsSuccessModal(true)
                
                            
        } catch (error) {
            console.log(error);
            toast.error('Error Occurred !!')
        }
    }


    
  

   
  return (
    <section className='px-[50px] py-4'>
        <ToastContainer />

        {isSuccessModal && <SuccessModal setIsSuccessModal={setIsSuccessModal}/>}
        <h2 className='text-[#247b7b] text-2xl font-semibold my-4'>Create New Campaign</h2>
    

        <form className='' onSubmit={handleSubmit}>
            <label className='block my-2 font-semibold' htmlFor="campaignName">Campaign Name:</label>
            <input className='block border w-full py-2 px-3 focus:outline-none' type="text" id="campaignName" name="campaignName" placeholder='e.g  The Future is now' onChange={(e)=>handleChange(e)}/>

            <label className='block my-2 font-semibold'  htmlFor="campaignDescription">Campaign Description</label>
            <textarea className='block border w-full h-[120px] py-2 px-3 focus:outline-none' name="campaignDescription" id="campaignDescription" placeholder='Please add a description to your campaign'onChange={(e)=>handleChange(e)} ></textarea>

            <div className='flex gap-4 justify-between mt-4'>

                <div className='flex-1'>
                    
                    <label className='block my-2 font-semibold' htmlFor="startDate">Start Date:</label>
                    <input className='block border py-2 px-3 w-full focus:outline-none' type="date" id="startDate" name="startDate"  placeholder='dd/mm/yyy' onChange={(e)=>handleChange(e)}/>
                </div>

                <div className='flex-1'>
                    <label className='block my-2 font-semibold' htmlFor="endDate">End Date:</label>
                    <input className='block border py-2 px-3 w-full focus:outline-none' type="date" id="endDate" name="endDate" placeholder='dd/mm/yyy' onChange={(e)=>handleChange(e)}/>
                </div>

            </div>

            <div className='flex items-center justify-between my-4 '>
             <p className='text-sm'>Want to receive daily digest about the campaign?</p>

                <div className='bg-black w-[50px] h-[25px] rounded-xl'></div>
            </div> 

           <label className='block my-2 w-full font-semibold focus:outline-none'  htmlFor="linkedWords">Linked Keywords</label>
           <textarea className="block border py-2 px-3 w-full h-[100px] focus:outline-none" placeholder='To add keywords, type your keyword and press enter'  name="linkedKeywords" id="linkedKeywords" onChange={(e)=>handleChange(e)}/>

            <p className='mt-4'>Kindly select how often you want to receive daily digest</p>

            <select className='block border mt-4 py-2 px-3 focus:outline-none w-[200px]'>
                <option value="">---Select----</option>
                <option value="read">read</option>
                <option value="active">active</option>
                <option value="allowed">allowed</option>
            </select>
            
        <div className='my-4 flex gap-4'>
            <button onClick={()=>navigate('/campaign')} className='border border-[#247B7B] p-2 cursor-pointer rounded-md' type='button'>Cancel</button>
            <button className='bg-[#247B7B] border border-[#247B7B] p-2 cursor-pointer rounded-md text-white opacity-[.85] hover:opacity-[1]' type='submit'>Create Campaign</button>
        </div>
        </form>
    </section>
  )
}

export default CreateCampaign