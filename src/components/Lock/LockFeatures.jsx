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
            {/* Desktop & Tablet Layout */}
            <div className="hidden sm:flex w-full bg-transparent justify-center items-center py-16">
                <div className="w-full max-w-5xl bg-secondary rounded-[3rem] px-8 py-12 shadow-md flex flex-col items-center">
                    <h1 className="text-5xl font-black text-primary mb-4">
                        Yedi News Alerts!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 text-center">
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
                            <Form className="flex flex-col gap-4 w-[60%]">
                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="py-3 px-4 w-full border-2 border-third text-third text-lg rounded-full bg-transparent focus:outline-none focus:border-primary"
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
                                        className="py-3 px-4 w-full border-2 border-third text-third text-lg rounded-full bg-transparent focus:outline-none focus:border-primary"
                                    />
                                    <ErrorMessage
                                        name="city"
                                        component="div"
                                        className="text-red-500 text-sm mt-1 ml-4"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="py-3 px-8 text-white text-lg rounded-full bg-primary hover:bg-third transition duration-300 self-center"
                                >
                                    SUBMIT
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden w-full flex flex-col gap-6 px-4 py-12 bg-secondary rounded-2xl shadow-md">
                <h2 className="text-3xl font-black text-primary text-center">
                    Yedi News Alerts!
                </h2>
                <p className="text-base text-gray-600 text-center">
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
                                className="py-3 px-6 text-white text-base rounded-full bg-primary hover:bg-third transition duration-300 self-center"
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
