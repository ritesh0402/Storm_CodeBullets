import axios from 'axios';

const URL = "http://localhost:5000";


export const authenticateSignup = async (data) => {
   try {

      return await axios.post(`${URL}/signup`, data);
   }
   catch (error) {
      console.log("error while authenticating signup : ", error);
   }
}

export const authenticateLogin = async (data) => {
   try {
      return await axios.post(`${URL}/login`, data);
   }
   catch (error) {
      console.log("error while authenticating login : ", error);
      return error.response;
   }
}

export const payUsingPaytm = async (data) => {
   try {
      let response = await axios.post(`${URL}/payment`, data);
      return response.data;
   }
   catch (error) {
      console.log("error while calling paytm api ", error);
   }
}

export const addToCart = async (productId, isDec, auth_token) => {
   try {
      let response = await axios.post(`${URL}/addCart`, { productId, isDec }, {
         headers: {
            'auth_token': auth_token
         }
      })
      console.log(response);
      return response.data;
   }
   catch (error) {
      console.log("error while adding to cart : ", error)
   }
}

export const removeFromCart = async (productId, auth_token) => {
   try {
      let response = await axios.delete(`${URL}/deleteCartProd/${productId}`, {
         headers: {
            'auth_token': auth_token
         }
      })
      console.log(response)
      return response;
   }
   catch (error) {
      console.log("error while removing products : ", error.message);
   }
}
export const getEvents = async () => {
   let events = [[], []];

   // "https://127.0.0.1:5000/getAllEvents"
   await axios.get("https://127.0.0.1:5000/getAllEvents")
      .then((res) => {
         console.log("rhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaes")
         console.log(res)
         res.data.forEach((x) => {
            if (x.time < Date.now()) {
               events[0].push(x);
            } else {
               events[1].push(x);
            }
         });

         // console.log(pastEvents);
         // console.log(upcommingEvents);

      })
      .catch((err) => {
         console.log("An error occured");
         console.log(err);
      });

   return events
}