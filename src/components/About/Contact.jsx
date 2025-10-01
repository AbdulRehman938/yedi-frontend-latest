import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .required('Last name is required'),
    business: Yup.string()
        .min(2, 'Business name must be at least 2 characters')
        .required('Business name is required'),
    city: Yup.string()
        .min(2, 'City must be at least 2 characters')
        .required('City is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format')
        .required('Phone number is required')
})

const Contact = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        business: '',
        city: '',
        email: '',
        phone: ''
    }

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form values:', values)
        // Handle form submission here
        setTimeout(() => {
            setSubmitting(false)
            resetForm()
        }, 1000)
    }

    return (
        <>
            {/* Desktop View */}
            <div className='hidden sm:flex bg-[#efece9] w-full h-[60vw] rounded-b-[5rem] relative z-50 mb-[-10rem] 3xl:mb-[-5rem] mt-[-5rem] 3xl:mt-[-5rem] 4xl:mt-[-12rem]'>
                <div className='w-full h-[80%] flex items-center justify-center gap-5'>
                    <div className='w-[20%] h-full flex flex-col justify-between items-center'>
                        <div className='w-full h-[25%] flex flex-col justify-between items-start'>
                            <h1 className='text-2xl font-semibold text-[#6FA598]'>Other Contacts</h1>
                            <div className='w-full h-[60%] flex flex-col justify-between items-start'>
                                <h2 className='text-xl font-bold text-[#979797]'>Yedi Support Team</h2>
                                <p className='text-[#55887C] text-xl font-medium'>support@yedi.app?</p>
                                <p className='text-[#55887C] text-xl font-medium'>+1 (123) 123-1234</p>
                            </div>
                        </div>
                        <img src="/Dialog_Yedi.svg" alt="partner1" className='w-[10vw] h-auto object-contain ml-[-7vw]' />
                    </div>
                    <div className='w-[49%] h-full flex flex-col justify-between items-start'>
                        <h1 className='text-[#6FA598] text-3xl font-semibold'>Contact Us</h1>
                        <p className='text-[#676666] text-xl font-normal'>Whether you have a question, suggestion, or just want to say hi—we’d love to hear from you.</p>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form className='w-full h-[79%] flex flex-col justify-between items-center'>
                                    <div className='w-full h-[10%] flex justify-center gap-10 items-center'>
                                        <div className='flex flex-col h-full justify-between items-start w-[48%]'>
                                            <div className='flex items-center gap-5'>
                                                <label htmlFor="firstName" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>First Name</label>
                                                <ErrorMessage name="firstName" component="span" className='text-red-500 text-xs font-medium' />
                                            </div>
                                            <Field
                                                id='firstName'
                                                name='firstName'
                                                type="text"
                                                className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-transparent'
                                                    }`}
                                            />
                                        </div>
                                        <div className='flex flex-col h-full justify-between items-start w-[48%]'>
                                            <div className='flex items-center gap-5'>
                                                <label htmlFor="lastName" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>Last Name</label>
                                                <ErrorMessage name="lastName" component="span" className='text-red-500 text-xs font-medium' />
                                            </div>
                                            <Field
                                                id='lastName'
                                                name='lastName'
                                                type="text"
                                                className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-transparent'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col h-[10%] justify-between items-start w-full'>
                                        <div className='flex items-center gap-5'>
                                            <label htmlFor="business" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>Business Name</label>
                                            <ErrorMessage name="business" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='business'
                                            name='business'
                                            type="text"
                                            className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.business && touched.business ? 'border-red-500' : 'border-transparent'
                                                }`}
                                        />
                                    </div>
                                    <div className='flex flex-col h-[10%] justify-between items-start w-full'>
                                        <div className='flex items-center gap-5'>
                                            <label htmlFor="city" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>City</label>
                                            <ErrorMessage name="city" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='city'
                                            name='city'
                                            type="text"
                                            className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.city && touched.city ? 'border-red-500' : 'border-transparent'
                                                }`}
                                        />
                                    </div>
                                    <div className='flex flex-col h-[10%] justify-between items-start w-full'>
                                        <div className='flex items-center gap-5'>
                                            <label htmlFor="email" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>Email Address</label>
                                            <ErrorMessage name="email" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='email'
                                            name='email'
                                            type="email"
                                            className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.email && touched.email ? 'border-red-500' : 'border-transparent'
                                                }`}
                                        />
                                    </div>
                                    <div className='flex flex-col h-[10%] justify-between items-start w-full'>
                                        <div className='flex items-center gap-5'>
                                            <label htmlFor="phone" className='text-[#8C8C8C] text-sm font-bold ml-[1vw]'>Phone Number</label>
                                            <ErrorMessage name="phone" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='phone'
                                            name='phone'
                                            type="tel"
                                            className={`w-full h-full rounded-xl p-2 px-4 text-[#4C4C4C] font-bold text-xl mt-[0.5vw] focus:border-red-500 focus:outline-none border-2 ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'
                                                }`}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className='bg-[#B9B5A2] text-xl font-semibold text-white w-[40%] h-[12%] rounded-full cursor-pointer hover:scale-105 ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-5'
                                    >
                                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='flex sm:hidden bg-[#efece9] w-full h-[300vw] rounded-b-[3rem] relative z-50 mb-[-5rem] px-6 py-8'>
                <div className='w-full flex flex-col items-center justify-start gap-8'>

                    {/* Header Section */}
                    <div className='w-full flex flex-col items-start text-left gap-4'>
                        <h1 className='text-[#6FA598] text-2xl font-semibold text-left pl-4'>Contact Us</h1>
                        <p className='text-[#676666] text-base font-normal px-4'>Whether you have a question, suggestion, or just want to say hi—we'd love to hear from you.</p>
                    </div>

                    {/* Form Section */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className='w-full flex flex-col gap-6'>

                                {/* First Name and Last Name */}
                                <div className='flex gap-4'>
                                    <div className='flex flex-col gap-2 w-1/2'>
                                        <div className='flex items-center gap-3'>
                                            <label htmlFor="firstName-mobile" className='text-[#8C8C8C] text-sm font-bold'>First Name</label>
                                            <ErrorMessage name="firstName" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='firstName-mobile'
                                            name='firstName'
                                            type="text"
                                            className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-transparent'
                                                } bg-white`}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 w-1/2'>
                                        <div className='flex items-center gap-3'>
                                            <label htmlFor="lastName-mobile" className='text-[#8C8C8C] text-sm font-bold'>Last Name</label>
                                            <ErrorMessage name="lastName" component="span" className='text-red-500 text-xs font-medium' />
                                        </div>
                                        <Field
                                            id='lastName-mobile'
                                            name='lastName'
                                            type="text"
                                            className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-transparent'
                                                } bg-white`}
                                        />
                                    </div>
                                </div>

                                {/* Business Name */}
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-3'>
                                        <label htmlFor="business-mobile" className='text-[#8C8C8C] text-sm font-bold'>Business Name</label>
                                        <ErrorMessage name="business" component="span" className='text-red-500 text-xs font-medium' />
                                    </div>
                                    <Field
                                        id='business-mobile'
                                        name='business'
                                        type="text"
                                        className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.business && touched.business ? 'border-red-500' : 'border-transparent'
                                            } bg-white`}
                                    />
                                </div>

                                {/* City */}
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-3'>
                                        <label htmlFor="city-mobile" className='text-[#8C8C8C] text-sm font-bold'>City</label>
                                        <ErrorMessage name="city" component="span" className='text-red-500 text-xs font-medium' />
                                    </div>
                                    <Field
                                        id='city-mobile'
                                        name='city'
                                        type="text"
                                        className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.city && touched.city ? 'border-red-500' : 'border-transparent'
                                            } bg-white`}
                                    />
                                </div>

                                {/* Email Address */}
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-3'>
                                        <label htmlFor="email-mobile" className='text-[#8C8C8C] text-sm font-bold'>Email Address</label>
                                        <ErrorMessage name="email" component="span" className='text-red-500 text-xs font-medium' />
                                    </div>
                                    <Field
                                        id='email-mobile'
                                        name='email'
                                        type="email"
                                        className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.email && touched.email ? 'border-red-500' : 'border-transparent'
                                            } bg-white`}
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-3'>
                                        <label htmlFor="phone-mobile" className='text-[#8C8C8C] text-sm font-bold'>Phone Number</label>
                                        <ErrorMessage name="phone" component="span" className='text-red-500 text-xs font-medium' />
                                    </div>
                                    <Field
                                        id='phone-mobile'
                                        name='phone'
                                        type="tel"
                                        className={`w-full h-12 rounded-xl p-3 text-[#4C4C4C] font-medium text-base focus:border-red-500 focus:outline-none border-2 ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'
                                            } bg-white`}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='bg-[#B9B5A2] text-lg font-semibold text-white w-full h-12 rounded-full cursor-pointer hover:scale-105 ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4'
                                >
                                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <hr className='w-full h-[0.1rem] bg-[#4c4c4c] mt-10' />
                    {/* Other Contacts Section */}
                    <div className='w-full flex flex-col items-start gap-6 mt-8'>
                        <h2 className='text-[#6FA598] text-xl font-semibold'>Other Contacts</h2>
                        <div className='w-full flex flex-col items-start gap-3 bg-transparent rounded-2xl py-4 pl-0'>
                            <h3 className='text-[#979797] text-lg font-bold'>Yedi Support Team</h3>
                            <p className='text-[#55887C] text-base font-medium'>support@yedi.app?</p>
                            <p className='text-[#55887C] text-base font-medium'>+1 (123) 123-1234</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact