import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    city: Yup.string().min(2, 'Too short').required('City is required'),
})

const HomeForm = () => {
    return (
        <>
            {/* ===== Newsletter Form Section (Desktop + Tablet) ===== */}
            <div className="newsletter-section hidden sm:flex w-full z-40 bg-secondary rounded-[3rem] lg:rounded-t-[6rem] mt-16 lg:mt-24 px-4 lg:px-8 py-12 lg:py-16 flex-col lg:flex-row justify-center lg:justify-around items-center gap-8 lg:gap-12">
                {/* Text content */}
                <div className="newsletter-text w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
                    <h1 className="newsletter-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary">
                        Yedi News Alerts!
                    </h1>
                    <p className="newsletter-subtext text-base lg:text-lg xl:text-xl text-gray-600">
                        Be the first to know when Yedi comes to your town, get special offers and discounts
                        from partners, and more!
                    </p>
                </div>

                {/* Form */}
                <Formik
                    initialValues={{ email: '', city: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        alert(`Submitted: ${JSON.stringify(values, null, 2)}`)
                        resetForm()
                    }}
                >
                    {() => (
                        <Form className="newsletter-form w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6">
                            <div className="form-field w-full">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-input py-3 px-4 w-full border-2 border-third text-third text-base lg:text-lg xl:text-xl rounded-full bg-transparent focus:outline-none focus:border-primary"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="form-error text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>
                            <div className="form-field w-full">
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="form-input py-3 px-4 w-full border-2 border-third text-third text-base lg:text-lg xl:text-xl rounded-full bg-transparent focus:outline-none focus:border-primary"
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="form-error text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="form-submit-btn py-3 px-8 lg:px-12 text-white text-base lg:text-lg xl:text-xl rounded-full bg-primary hover:bg-third transition duration-300 self-center lg:self-start"
                            >
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* ===== Mobile-only Layout ===== */}
            <div className="hidden sm:hidden w-full bg-red-500 px-4 py-8 mt-12 rounded-3xl">
                <h1 className="text-white font-black text-4xl text-center mb-6 pt-4">
                    Yedi News Alerts!
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Be the first to know when Yedi comes to your town, get special offers and discounts
                    from partners, and more!
                </p>

                <Formik
                    initialValues={{ email: '', city: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        alert(`Submitted: ${JSON.stringify(values, null, 2)}`)
                        resetForm()
                    }}
                >
                    {() => (
                        <Form className="flex flex-col gap-4">
                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="py-3 px-4 w-full border-2 border-third text-third text-base rounded-full bg-transparent focus:outline-none focus:border-primary"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="py-3 px-4 w-full border-2 border-third text-third text-base rounded-full bg-transparent focus:outline-none focus:border-primary"
                                />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 ml-4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-8 text-white text-base rounded-full bg-primary hover:bg-third transition duration-300 mx-auto"
                            >
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default HomeForm
