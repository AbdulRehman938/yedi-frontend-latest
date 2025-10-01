import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required'),
    city: Yup.string()
        .min(2, 'City name must be at least 2 characters')
        .required('City is required')
})

const Form = () => {
    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        // Simulate API call
        setTimeout(() => {
            // Store form data in localStorage
            const existingData = JSON.parse(localStorage.getItem('yediNewsAlerts') || '[]')
            const submissionData = {
                ...values,
                submittedAt: new Date().toISOString()
            }
            existingData.push(submissionData)
            localStorage.setItem('yediNewsAlerts', JSON.stringify(existingData))

            // Show success toast
            toast.success('Successfully subscribed to Yedi News Alerts!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })

            // Reset form
            resetForm()
            setSubmitting(false)
        }, 1000)
    }

    return (
        <>
            <ToastContainer />

            {/* Desktop View - Hidden on mobile */}
            <div className='hidden sm:flex w-full h-[60vh] bg-[#F7F6F4] items-start rounded-[5rem] relative z-50 mx-auto max-w-[90%] flex-row justify-between px-28 py-16'>
                <div className='w-[45%] h-[45%] flex flex-col justify-between items-start text-left'>
                    <h1 className='text-6xl font-black text-[#6FA598]'>Yedi News <br /> Alerts!</h1>
                    <p className='text-xl font-normal text-[#676666]'>Be the first to know when Yedi comes to your town, get <br /> special offers and discounts from partners, and more!</p>
                </div>

                <Formik
                    initialValues={{
                        email: '',
                        city: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <FormikForm className='w-[45%] h-[50%] mt-[14%] flex flex-col justify-between items-start'>
                            <div className='w-full'>
                                <Field
                                    type="email"
                                    name="email"
                                    className={`w-full h-16 bg-transparent border-2 rounded-full font-light text-xl px-10 focus:outline-none focus:ring-2 focus:ring-[#6FA598] transition-colors ${errors.email && touched.email
                                        ? 'border-red-500'
                                        : 'border-[#4c4c4c] hover:border-[#6FA598]'
                                        }`}
                                    placeholder='Email Address'
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>

                            <div className='w-full'>
                                <Field
                                    type="text"
                                    name="city"
                                    className={`w-full h-16 bg-transparent border-2 rounded-full font-light text-xl px-10 focus:outline-none focus:ring-2 focus:ring-[#6FA598] transition-colors ${errors.city && touched.city
                                        ? 'border-red-500'
                                        : 'border-[#4c4c4c] hover:border-[#6FA598]'
                                        }`}
                                    placeholder='City'
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`text-xl font-semibold text-white px-10 py-3 rounded-3xl transition-all duration-300 ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#6fa598] hover:scale-105 hover:bg-[#59a895] ease-in-out'
                                    }`}
                            >
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </FormikForm>
                    )}
                </Formik>
            </div>

            {/* Mobile View - Only visible on mobile */}
            <div className='flex sm:hidden w-full bg-[#F7F6F4] rounded-3xl relative z-50 mx-4 my-8 p-6'>
                <div className='w-full flex flex-col items-center text-center gap-6'>
                    <div className='w-full text-center'>
                        <h1 className='text-3xl font-black text-[#6FA598] mb-4'>Yedi News Alerts!</h1>
                        <p className='text-sm font-normal text-[#676666] leading-relaxed'>Be the first to know when Yedi comes to your town, get special offers and discounts from partners, and more!</p>
                    </div>

                    <Formik
                        initialValues={{
                            email: '',
                            city: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <FormikForm className='w-full flex flex-col gap-4'>
                                <div className='w-full text-left'>
                                    <Field
                                        type="email"
                                        name="email"
                                        className={`w-full h-12 bg-transparent border-2 rounded-full font-light text-base px-6 focus:outline-none focus:ring-2 focus:ring-[#6FA598] transition-colors ${errors.email && touched.email
                                            ? 'border-red-500'
                                            : 'border-[#4c4c4c] hover:border-[#6FA598]'
                                            }`}
                                        placeholder='Email Address'
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-xs text-left mt-1 ml-2"
                                    />
                                </div>

                                <div className='w-full text-left'>
                                    <Field
                                        type="text"
                                        name="city"
                                        className={`w-full h-12 bg-transparent border-2 rounded-full font-light text-base px-6 focus:outline-none focus:ring-2 focus:ring-[#6FA598] transition-colors ${errors.city && touched.city
                                            ? 'border-red-500'
                                            : 'border-[#4c4c4c] hover:border-[#6FA598]'
                                            }`}
                                        placeholder='City'
                                    />
                                    <ErrorMessage
                                        name="city"
                                        component="div"
                                        className="text-red-500 text-xs text-left mt-1 ml-2"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full text-lg font-semibold text-white py-3 rounded-3xl transition-all duration-300 mt-2 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#6fa598] hover:scale-105 hover:bg-[#59a895] ease-in-out'
                                        }`}
                                >
                                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                </button>
                            </FormikForm>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Form