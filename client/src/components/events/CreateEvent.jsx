import { useState } from "react";
function CreateEvent() {
   const [title, setTitle] = useState();
   const [description, setDescription] = useState();
   const [venue, setVenue] = useState();
   const [startTime, setStartTime] = useState();
   const [endTime, setEndTime] = useState();
   const [imgUrl, setImgUrl] = useState();

   return (
      <div className="">
         <div className="container h-full w-1/2 bg-slate-200">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
               <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-title"
                     >
                        Title
                     </label>
                     <input
                        value={title}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="grid-desc"
                        type="text"
                        placeholder="The event title..."
                        onChange={(e) => setTitle(e.target.value)}
                     />
                  </div>
                  <div className="md:w-1/2 px-3">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-desc"
                     >
                        Description
                     </label>
                     <textarea
                        value={description}
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-desc"
                        type="text"
                        placeholder="The description goes here..."
                        onChange={(e) => setDescription(e.target.value)}
                     />
                  </div>
               </div>
               <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-full px-3">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                     >
                        Venue
                     </label>
                     <input
                        value={venue}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        id="grid-password"
                        type="text"
                        placeholder="Cross Axis, Mumbai"
                        onChange={(e) => setVenue(e.target.value)}
                     />
                  </div>
               </div>
               <div className="-mx-3 md:flex mb-6">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-start-time"
                     >
                        Start Time
                     </label>
                     <input
                        value={startTime}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-start-time"
                        type="datetime-local"
                        onChange={(e) => setStartTime(e.target.value)}
                     />
                  </div>
                  <div className="md:w-1/2 px-3">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-end-time"
                     >
                        end time
                     </label>
                     <input
                        value={endTime}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-start-time"
                        type="datetime-local"
                        onChange={(e) => setEndTime(e.target.value)}
                     />
                  </div>
               </div>
               <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-full px-3">
                     <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-file"
                     >
                        Image
                     </label>
                     <input
                        value={imgUrl}
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-file"
                        type="file"
                        onChange={(e) => setImgUrl(e.target.value)}
                     />
                  </div>
               </div>
               <div className="-mx-3 md:flex mb-2 me-2 mt-4 items-center justify-end">
                  <button className="border-2 border-blue-700 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default CreateEvent;