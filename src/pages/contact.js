import React from "react";
import { Mail, MapPin, MessageSquare, Phone } from "react-feather";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
        description="this is the contact page"
      />
      <section className="relative py-6 md:pt-20 min-w-screen animation-fade animation-delay">
        <div className="container h-full max-w-5xl mx-auto overflow-hidden sm:shadow">
            <div className="h-full sm:flex">
                <aside className="w-full p-10 rounded-none sm:rounded md:w-1/3 sm:bg-primary-green-300">
                    <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-writing-black sm:text-2xl sm:leading-9">Contact Us</h2>
                    <p className="mt-2 mb-5 text-sm text-gray-600">You can find our contact info below or you can feel free to leave us a quick message in the form.</p>
                    <div className="flex items-start py-3 pt-5">
                        <div className="flex-shrink">
                          <Phone className="w-8 h-8 mt-1 text-gray-700"/>
                        </div>
                        <div className="flex-grow ml-10 md:ml-5">
                            <div className="text-base font-medium mb-">Phone</div>
                            <span className="text-gray-500 text-md"> <a href="tel:+263292886611">+263 (292) 886 611</a></span><br/>
                            <span className="text-gray-500 text-md"> <a href="tel:+263292881070">+263 (292) 881 070</a></span>
                        </div>
                    </div>
                    <div className="flex items-start py-3 pt-5">
                        <div className="flex-shrink">
                          <Mail className="w-8 h-8 mt-1 text-gray-700"/>
                        </div>
                        <div className="flex-grow ml-10 md:ml-5">
                            <div className="text-base font-medium mb-">Email</div>
                            <span className="text-gray-500 text-md"> <a href="mailto:sales@bhe.co.zw">sales@bhe.co.zw</a></span>
                        </div>
                    </div>
                    <div className="flex items-start py-3">
                        <div className="flex-shrink">
                            <MapPin className="w-8 h-8 mt-1 text-gray-700"/>
                        </div>
                        <div className="flex-grow ml-10 md:ml-5">
                            <div className="text-base font-medium">Address</div>
                            <span className="text-gray-500 text-md">6 Birmingham Rd, Belmont, Bulawayo, Zimbabwe</span>
                        </div>
                    </div>
                </aside>
                <div className="flex items-center justify-center w-full p-10 bg-white md:w-2/3">
                    <form className="w-full" name="contact" data-netlify="true" method='POST' data-netlify-honeypot="bot-field">
                        <>
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                        </>
                        <div className="pb-3">
                            <input className="" type="text" placeholder="Name" name="name"/>
                        </div>
                        <div className="py-3">
                            <input className="" type="text" placeholder="Email" name="email"/>
                        </div>
                        <div className="py-3">
                            <textarea row="4" className="h-40" name="message" placeholder="Your message here..."></textarea>
                        </div>
                        <div className="pt-3">
                            <button className="flex items-center justify-center w-full px-6 py-2 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent md:w-2/6 bg-primary-green-500 hover:bg-primary-green-600 focus:outline-none focus:border-primary-green-700 focus:shadow-outline-green md:py-3 md:text-lg md:px-8" type="submit">
                                <MessageSquare/>
                                <span className="self-center float-left ml-3 text-base font-medium"> Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
