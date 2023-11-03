import * as Yup from 'yup'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



export const userRegisterFormValidation = Yup.object().shape({
    email:Yup.string()
    .required('Este campo es obligatorio')
    .matches(emailRegex, 'Ingresa una dirección de correo electrónico válida')
    .email('Ingresa una dirección de correo electrónico válida'),
    password: Yup.string()
    .required('Este campo es obligatorio')
    .min(8,"La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[A-Z])(?=.*\d)/, 'La contraseña debe contener al menos 1 letra mayúscula y 1 número'),
    confirm_password: Yup.string()
    .required('Este campo es obligatorio')
    .test('password confirmation', 'El password no coincide', function (value) {return value === this.parent.password }),
});

export const emailValidation = Yup.object().shape({
    email:Yup.string()
    .email('Ingresa una dirección de correo electrónico válida')
    .matches(emailRegex, 'Ingresa una dirección de correo electrónico válida')    
});

export const passwordValidation = Yup.object().shape({
    password: Yup.string()
    .required('Este campo es obligatorio')
    .min(8,"La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[A-Z])(?=.*\d)/, 'La contraseña debe contener al menos 1 letra mayúscula y 1 número'),
    confirm_password: Yup.string()
    .required('Este campo es obligatorio')
    .test('password confirmation', 'El password no coincide', function (value) {return value === this.parent.password }),
});

