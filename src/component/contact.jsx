import React from 'react'
import { motion } from 'framer-motion'
// import FaEnvelope from 'react-icons'
import { FaDribbble, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaEnvelope} from 'react-icons/fa'

const contact = () => {
  return (
    <motion.div  initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 1, ease: 'easeOut'}}
              viewport={{once: false, amount:0.2}} id='contact' className='py-20 bg-dark-200'> 
        
        <div className='container mx-auto px-6'>
                 <h2 className='text-3xl font-bold text-center mb-4'>
                  Get In
                  <span className='text-purple'>Touch</span>
                 </h2>
                 <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborator? lets talk</p>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                      <div>
                        <form className='space-y-6'>
                          <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>your name</label>
                            <input 
                            className='w-fll bg-dark-300 boder border-dark-400 rounded-lg px-4 py-3 outline-none'
                            type="text" />
                          </div>
                        </form>
                      </div>

                        <div>
                        <form className='space-y-6'>
                          <div>
                            <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                            <input 
                            className='w-fll bg-dark-300 boder border-dark-400 rounded-lg px-4 py-3 outline-none'
                            type="email" />
                          </div>
                        </form>
                      </div>

                        <div>
                        <form className='space-y-6'>
                          <div>
                            <label htmlFor="message" className='block text-gray-300 mb-2'>your message</label>
                            <textarea
                            className='w-fll h-40  bg-dark-300 boder border-dark-400 rounded-lg px-4 py-3 outline-none'
                            type="text" />
                          </div>
                        </form>
                      </div>
                      <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                              send
                      </button>


                        {/* contact info */}

                             <div className='space-y-8'>
                              <div className='flex items-start'>
                                   <div className='text-purple text-2xl mr-4'> 
                                       <FaMapMarkerAlt />
                                   </div>
                                   <div>
                                      <h3 className='text-lg font-semibold'>
                                        Lcation
                                      </h3>
                                      <p className='text-gray-400'>New Delhi, Ashok Nagar</p>
                                   </div>
                              </div>

                                  <div className='flex items-start'>
                                   <div className='text-purple text-2xl mr-4'> 
                                       <FaEnvelope />
                                   </div>
                                   <div>
                                      <h3 className='text-lg font-semibold'>
                                        Email
                                      </h3>
                                      <p className='text-gray-400'>aakash@example.com</p>
                                   </div>
                              </div>

                                 <div className='flex items-start'>
                                   <div className='text-purple text-2xl mr-4'> 
                                       <FaPhone />
                                   </div>
                                   <div>
                                      <h3 className='text-lg font-semibold'>
                                        Phone
                                      </h3>
                                      <p className='text-gray-400'> 91 0000000000</p>
                                   </div>
                              </div>

                              <div className='pt-4'>
                                 <h3 className='text-lg font-semibold mb-4'>follow me</h3>
                                 <div className='flex space-x-4'> 
                                       <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex item-center justify-center text-purple hover:bg-purple hover:-text-white'>
                                             <FaGithub />
                                       </a>
                                 </div>

                                    <div className='flex space-x-4'> 
                                       <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex item-center justify-center text-white hover:bg-blue-400 hover:-text-white'>
                                             <FaGithub />
                                       </a>

                                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex item-center justify-center text-blue-400 hover:bg-blue-400 hover:-text-white'>
                                             <FaLinkedin />
                                       </a>

                                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex item-center justify-center text-purple hover:bg-purple hover:-text-white'>
                                             <FaTwitter />
                                       </a>

                                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex item-center justify-center text-pink hover:bg-pink hover:-text-white'>
                                             <FaDribbble />
                                       </a>


                                 </div>

                                 
                              </div>

                             </div>

                    </div>
        </div>
        
    </motion.div>
  )
}

export default contact