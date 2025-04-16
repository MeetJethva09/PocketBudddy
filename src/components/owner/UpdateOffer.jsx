// import axios from 'axios'
// import React, { useEffect ,} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { data, useParams} from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { toast , Bounce , ToastContainer} from 'react-toastify'
// export const UpdateOffer = () => {

//       const navigate = useNavigate();

//       const offerId = useParams().offerid;

//       const {register , handleSubmit , formState : {errors}} = useForm({
//         defaultValues : async () =>{
//           const res = await axios.get("/getofferbyofferid/" + offerId);
//           return res.data.data;
//         }
//       })

//         const submitHandler = async (data) =>{
//             const res = await axios.put("/updateofferbyid/" + offerId , data)
//             console.log(res.data);
//             toast.success(res.data.message);
//             setTimeout(()=>{
//                 navigate("/viewoffer")
//             },1200)
//         }
  
//   return (
//     <div>

//           <ToastContainer
//           position="top-right"
//           autoClose={900}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick={false}
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//           transition={Bounce}
//           />
       
//        <div className="form-container">
//       <form className="offer-form" onSubmit={handleSubmit(submitHandler)}>
//         <h2>Update Offer</h2>
        
//         {/* Offer Title */}
//         <div className="form-group">
//           <label htmlFor="offerTitle">Offer Title</label>
//           <input
//             type="text"
//             id="offerTitle"
//             name="offerTitle"
//             {...register("offerTitle")}
//             placeholder="Enter offer title"
//             required
//           />
//         </div>
        
//         {/* Offer Description */}
//         <div className="form-group">
//           <label htmlFor="offerDescription">Description</label>
//           <textarea
//             id="offerDescription"
//             name="offerDescription"
//             {...register("offerDesc")}
//             placeholder="Enter offer details"
//             rows="4"
//             required
//           ></textarea>
//         </div>
        
//         {/* Offer Image */}
//         <div className="form-group">
//           <label htmlFor="offerImage">Offer Image</label>
//           <div className="file-upload">
//             <label  className="upload-btn">
//             Select Image
//             </label>
//             <input
//               type="file"
//               id="offerImage"
//               name="offerImage"
//               accept="image/*"
//               {...register("offerImage")}
//               className="file-input"
//             />
         
             
            
//           </div>
//         </div>
        
//         {/* Status */}
//         <div className="form-group">
//           <label htmlFor="status">Status</label>
//           <select id="status" name="status"  {...register("offerStatus")} required>
//             <option value="">Select status</option>
//             <option value="Available">Available</option>
//             <option value="Unavailable">Currently Unavailable</option>
           
//           </select>
//         </div>
        
//         {/* Food Type */}
//         <div className="form-group">
//           <label htmlFor="foodType">Food Type</label>
//           <select id="foodType" name="foodType"  {...register("foodType")}required>
//             <option value="" selected disabled >Select Foodtype</option>
//             <option value="AvaiSpecial Kathiyavadi">Special Khathiyavadi</option>
//               <option value="Italian">Italian</option>
//               <option value="Gujarati Thali">Gujarati Thali</option>
//               <option value="Punjabi Tadka">Punjabi Tadka</option>
//               <option value="Mexican Masala">Mexican Masala</option>
//               <option value="Rajashthani Special">Rajashthani Special</option>
//               <option value="Chienese Food">Chienese Food</option>
//               <option value="Special South Indian">Special South Indian</option>
//           </select>
//         </div>
        
//         {/* Date Range */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="startDate">Start Date</label>
//             <div className="date-input">
             
//               <input
//                 type="datetime"
//                 id="startDate"
//                 name="startDate"
//                 {...register("offerStart")}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="endDate">End Date</label>
//             <div className="date-input">
            
//               <input
//                 type="datetime"
//                 id="endDate"
//                 name="endDate"
//                 {...register("offerEnd")}
//                 required
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* Submit Button */}
//         <button type="submit" className="submit-btn">
//        Update Offer
//         </button>
//       </form>
      
//       <style jsx>{`
//         .form-container {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 24px;
//         }
        
//         .offer-form {
//           background: white;
//           border-radius: 12px;
//           padding: 32px;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//         }
        
//         .offer-form h2 {
//           margin-top: 0;
//           margin-bottom: 24px;
//           color: #2d3436;
//           font-size: 1.8rem;
//         }
        
//         .form-group {
//           margin-bottom: 20px;
//         }
        
//         .form-group label {
//           display: block;
//           margin-bottom: 8px;
//           font-weight: 500;
//           color: #2d3436;
//         }
        
//         .form-group input,
//         .form-group textarea,
//         .form-group select {
//           width: 100%;
//           padding: 12px 16px;
//           border: 1px solid #dfe6e9;
//           border-radius: 8px;
//           font-size: 1rem;
//           transition: border-color 0.2s;
//         }
        
//         .form-group input:focus,
//         .form-group textarea:focus,
//         .form-group select:focus {
//           outline: none;
//           border-color: #0984e3;
//         }
        
//         .form-group textarea {
//           resize: vertical;
//           min-height: 100px;
//         }
        
//         .file-upload {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }
        
//         .upload-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 16px;
//           background: #f8f9fa;
//           border: 1px dashed #b2bec3;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
        
//         .upload-btn:hover {
//           background: #f0f2f5;
//         }
        
//         .file-input {
//           display: none;
//         }
        
//         .image-preview {
//           width: 100%;
//           max-width: 300px;
//           border-radius: 8px;
//           overflow: hidden;
//         }
        
//         .image-preview img {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//         }
        
//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }
        
//         .date-input {
//           position: relative;
//           display: flex;
//           align-items: center;
//         }
        
//         .date-input svg {
//           position: absolute;
//           left: 12px;
//           color: #636e72;
//         }
        
//         .date-input input {
//           padding-left: 40px;
//         }
        
//         .submit-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 24px;
//           background: #0984e3;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           font-size: 1rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: background 0.2s;
//         }
        
//         .submit-btn:hover {
//           background: #0767b3;
//         }
        
//         @media (max-width: 768px) {
//           .form-row {
//             grid-template-columns: 1fr;
//           }
          
//           .offer-form {
//             padding: 24px;
//           }
//         }
//       `}</style>
//     </div>

//     </div>
//   )
// }
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast, Bounce, ToastContainer } from 'react-toastify'
import { Upload, Calendar } from 'lucide-react'
import { OnlySide } from './OnlySide'

export const UpdateOffer = () => {
  const navigate = useNavigate();
  const offerId = useParams().offerid;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: async () => {
      const res = await axios.get("/getofferbyofferid/" + offerId);
      return res.data.data;
    }
  })

  const submitHandler = async (data) => {
    const res = await axios.put("/updateofferbyid/" + offerId, data)
    console.log(res.data);
    toast.success(res.data.message);
    setTimeout(() => {
      navigate("/viewoffer")
    }, 1200)
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-lg focus:outline-none"
      >
        {isSidebarOpen ? (
          <i className="fas fa-times text-gray-700 text-lg"></i>
        ) : (
          <i className="fas fa-bars text-gray-700 text-lg"></i>
        )}
      </button>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed h-full w-64 flex-shrink-0 z-30 md:z-0 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <OnlySide/>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto md:ml-64 p-4 md:p-8 flex items-center justify-center">
        <ToastContainer
          position="top-right"
          autoClose={900}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <div className="w-full max-w-2xl">
          <form 
            onSubmit={handleSubmit(submitHandler)}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-500">
              <h2 className="text-2xl font-bold text-white">Update Offer</h2>
            </div>

            <div className="p-6 space-y-5">
              {/* Offer Title */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Offer Title</label>
                <input
                  type="text"
                  {...register("offerTitle")}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter offer title"
                  required
                />
              </div>

              {/* Offer Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  {...register("offerDesc")}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[120px]"
                  placeholder="Enter offer details"
                  required
                />
              </div>

              {/* Offer Image */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Offer Image</label>
                <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <Upload className="w-8 h-8 mb-2 text-purple-500" />
                    <p className="text-sm">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400">PNG, JPG, GIF (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    {...register("offerImage")}
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Status */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    {...register("offerStatus")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Currently Unavailable</option>
                  </select>
                </div>

                {/* Food Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Food Type</label>
                  <select
                    {...register("foodType")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Select Foodtype</option>
                    <option value="AvaiSpecial Kathiyavadi">Special Khathiyavadi</option>
                    <option value="Italian">Italian</option>
                    <option value="Gujarati Thali">Gujarati Thali</option>
                    <option value="Punjabi Tadka">Punjabi Tadka</option>
                    <option value="Mexican Masala">Mexican Masala</option>
                    <option value="Rajashthani Special">Rajashthani Special</option>
                    <option value="Chienese Food">Chienese Food</option>
                    <option value="Special South Indian">Special South Indian</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Start Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="datetime"
                      {...register("offerStart")}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* End Date */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="datetime"
                      {...register("offerEnd")}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Update Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}