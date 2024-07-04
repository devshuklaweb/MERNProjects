import React from 'react'
import { useFormik } from 'formik';

import FValidationSchemaRules from './validationSchema/FValidationSchema';

export default function FValidation() {
    const onSubmit = async (values,actions) => {
        console.log(values,"values of inputs");
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve,1000));
        actions.resetForm();

    }
    //const formik = useFormik({
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            age: '',
            gender: '',
            cast: '',
            termsAndConditions: false,
            qualification: false,
            address: '',
            photo: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        validationSchema: FValidationSchemaRules,
        onSubmit,
    });
    const error = errors.error;
   console.log(errors, "errors")
    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2>
                        <u>Form Validations</u>
                    </h2>
                    <div className='row d-flex justify-content-center'>
                        <form className='col-md-6' onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className={errors.name && touched.name ? 'form-control is-invalid' : 'form-control'} name="name" defaultValue={values.name} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.name && touched.name && (
                                        <div className="text-start error text-danger">{errors.name}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="age" className="col-sm-4 col-form-label">Age {touched.age}</label>
                                <div className="col-sm-8">
                                    <input type="number" className={errors.age && touched.age ? 'form-control is-invalid' : 'form-control'} name="age" defaultValue={values.age} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.age && touched.age && (
                                        <div className="text-start error text-danger">{errors.age}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="gender" className="col-sm-4 col-form-label">Gender</label>
                                <div className="col-sm-8" style={{ textAlign: "left" }}>
                                    <input type="radio" name="gender" defaultValue="Male" style={{ marginRight: '5px' }} checked="checked" onChange={handleChange} />
                                    <label className="col-sm-2 col-form-label"> Male </label>
                                    <input type="radio" name="gender" defaultValue="Female" style={{ marginRight: '5px' }} onChange={handleChange} />
                                    <label className="col-sm-2 col-form-label"> Female </label>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="cast" className="col-sm-4 col-form-label">Cast</label>
                                <div className="col-sm-8">
                                    <select name="cast" className={errors.cast && touched.cast ? 'form-control is-invalid' : 'form-control'} onChange={handleChange} onBlur={handleBlur} >
                                        <option value="">Select</option>
                                        <option value="General">General</option>
                                        <option value="ST">ST</option>
                                        <option value="SC">SC</option>
                                        <option value="OBC">OBC</option>
                                    </select>
                                    {errors.cast && touched.cast && (
                                        <div className="text-start error text-danger">{errors.cast}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="qualification" className="col-sm-4 col-form-label">Qualification</label>
                                <div className="col-sm-8" style={{ textAlign: "left" }}>
                                    <input type="checkbox" name="qualification[]" defaultValue="Male" style={{ marginRight: '5px' }} onChange={handleChange} onBlur={handleBlur} />
                                    <label className="col-sm-2 col-form-label"> BCA </label>
                                    <input type="checkbox" name="qualification[]" defaultValue="Female" style={{ marginRight: '5px' }} onChange={handleChange} onBlur={handleBlur} />
                                    <label className="col-sm-2 col-form-label"> MCA </label>
                                    <input type="checkbox" name="qualification[]" defaultValue="PGDCA" style={{ marginRight: '5px' }} onChange={handleChange} onBlur={handleBlur} />
                                    <label className="col-sm-2 col-form-label"> PGDCA </label>
                                    {errors.qualification && touched.qualification && (
                                        <div className="text-start error text-danger">{errors.qualification}</div>
                                    )}
                                </div>

                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                                <div className="col-sm-8">
                                    <textarea name="address" className={errors.address && touched.address ? 'form-control is-invalid' : 'form-control'} onChange={handleChange} onBlur={handleBlur} defaultValue={values.address}></textarea>
                                    {errors.address && touched.address && (
                                        <div className="text-start error text-danger">{errors.address}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="photo" className="col-sm-4 col-form-label">Photo</label>
                                <div className="col-sm-8">
                                    <input type="file" accept='.pdf' className="form-control" name="photo" onChange={handleChange} onBlur={handleBlur} />
                                    {errors.photo && touched.photo && (
                                        <div className="text-start error text-danger">{errors.photo}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="text" className={errors.email && touched.email ? 'form-control is-invalid' : 'form-control'} name="email" onChange={handleChange} onBlur={handleBlur} defaultValue={values.email} />
                                    {errors.email && touched.email && (
                                        <div className="text-start error text-danger">{errors.email}</div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="password" onChange={handleChange} defaultValue={values.password} className={errors.password && touched.password ? 'form-control is-invalid' : 'form-control'} name="password" onBlur={handleBlur} />
                                    {errors.password && touched.password && (
                                        <div className="text-start error text-danger">{errors.password}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="confirmpassword" className="col-sm-4 col-form-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="password" onChange={handleChange} defaultValue={values.confirmpassword} className={errors.confirmpassword && touched.confirmpassword ? 'form-control is-invalid' : 'form-control'} name="confirmpassword" onBlur={handleBlur} />
                                    {errors.confirmpassword && touched.confirmpassword && (
                                        <div className="text-start error text-danger">{errors.confirmpassword}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="confirmpassword" className="col-sm-12 col-form-label">
                                    
                                    <input type="checkbox" name="termsAndConditions" id='termsAndConditions' style={{ marginRight: '5px' }} onChange={handleChange} onBlur={handleBlur} /> 
                                    Terms and conditions
                                </label>
                                {errors.termsAndConditions && touched.termsAndConditions && (
                                    <div className="text-start error text-danger">{errors.termsAndConditions}</div>
                                )}
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <button disabled={isSubmitting} type="submit" className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
