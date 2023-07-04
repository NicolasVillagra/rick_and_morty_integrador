export const validate = (inputs) =>{
    const errores = {}
    const array = Object.values(errores)
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regexEmail.test(inputs.email)) {
        errores.email = 'Debe ser un correo electrónico';
     }
     else if(inputs.email === ""){
        errores.email = 'El Correo es Obligatorio'
     }
     else if(inputs.email.length> 35){
        errores.email = 'Tiene que tener menos de 35 caracteres'
     }
     if (!inputs.password) {
      errores.password = 'La contraseña no puede estar vacía';
    } else if (!/\d/.test(inputs.password)) {
      errores.password = 'La contraseña debe contener al menos un número';
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
      errores.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }
     return errores
}