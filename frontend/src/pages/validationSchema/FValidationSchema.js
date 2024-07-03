import * as Yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const FValidationSchemaRules = Yup.object().shape({
    name: Yup.string().required("Please enter name"),
    email: Yup.string().email("Please enter valid email").required("Required Field"),
    age: Yup.number().positive("Please enter your valid age").integer("Only integer value valid").required("Required Field"),
    cast: Yup.string().required("Please select cast"),
    address: Yup.string().required("Please enter address"),
    password: Yup.string().min(5).matches(passwordRules, "Please enter a strong password").required("Required Field"),
    confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password & Confirm Password Mismatch").required("Required Field"),
    qualification: Yup.boolean().oneOf([true], "Please select your qualification"),
    termsAndConditions: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
    photo: Yup.mixed().required("Required Field")
        .test('fileFormat', 'Only PDF files are allowed', value => {
            if (value) {
                const supportedFormats = ['pdf'];
                return supportedFormats.includes(value.name.split('.').pop());
            }
            return true;
        })
        .test('fileSize', 'File size must be less than 3MB', value => {
            if (value) {
                return value.size <= 3145728;
            }
            return true;
        }),
});

export default FValidationSchemaRules;