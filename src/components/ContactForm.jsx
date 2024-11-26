import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-5">
            CONTACT
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            We’re always happy to meet face to face or start a conversation
            online.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-8 max-w-xl sm:mt-14"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                  className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-sm bg-[#FFBF00] px-3.5 py-2.5 text-center font-semibold shadow-sm hover:scale-105 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFBF00]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
