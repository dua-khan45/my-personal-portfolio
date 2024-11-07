import React from 'react'

const Contact = () => {
  return (
    
      <section id='contact' className="text-gray-400 bg-yellow-800 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-yellow-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9493008095346!2d67.02578657322056!3d24.8997109290686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb3dc654e2b%3A0x9400452baa1de0e9!2sNazimabad%20No%201!5e0!3m2!1sen!2s!4v1730047399357!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.16)" }}
      />
      <div className="bg-yellow-700 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           Nazimabad No #01 , Karachi.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-white leading-relaxed">dua40zadi@gmail.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+92172283507</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
        Contact
      </h2>
      <p className="leading-relaxed mb-5">
       Feel Free to Contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-300 rounded border border-yellow-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-300 rounded border border-gray-700  h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white border-0 white bg-zinc-500 py-2 px-6 focus:outline-none hover:bg-zinc-800 rounded text-lg">
      
        Send message
      </button>
     
    </div>
  </div>
</section>

    
  )
}

export default Contact