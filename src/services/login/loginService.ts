
// async function login(user, setLogin) {
//     try {
//       let response = await fetch(`${URI}/api/users/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: user.email,
//           password: user.password,
//         }),
//       });

import { URI } from "../../utils/endpoints"

//       if (response.status === 200) {
//         const responseData = await response.json();
//         console.log(responseData);
//         toastAlert(
//           'success',
//           `Hola ${responseData.user.first_name} 👋🏻. ¿Cómo estás?`
//         );
//         setUser(responseData.user);

//         setLogin(false);
//       } else {
//         setErrorLogin(true);
//         toastAlert('error', 'Error al login');
//         throw new Error('error');
//       }
//     } catch (error) {
//       toastAlert('error', 'Error al login');
//     }
//   }

interface Params {
    email: string,
    password: string
}

export const loginFromService = async ({email, password}: Params) => {

    const url = `${URI}/api/users/login`
console.log('del service', email, password)
const response = await fetch(url,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email,
                  password
                }),
})

return response
}