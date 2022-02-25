
import ReactDOM from 'react-dom';
import { useState } from "react";
const axios = require('axios');

const NotifyMe = () => {
  /*
    const [email, setEmail] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The email you entered is: ${email}`)
        //code to submit to mailchimp directly but cors issues
        const url="https://zkx.us20.list-manage.com/subscribe/post?u=72f9d82da7b5eebdbce96aa7b&id=8a292131d1"
        axios
        .post(
          url,
          {
            EMAIL: email,
          },
          {
            headers: {
            },
          }
        )
        .then((response) => {
            console.log(response)
            alert(`Email Subscribed Successfully`)
        
        })
        .catch(error => {
          
            alert('Technical Issues ' + error.response.data)
        });        
      }
  */
  //code to submit to mailchimp api directly but cors issues
  //we have to write server side code
  /*
  const regionName = 'us1';
  const apiKey = 'xxxxxxxxxx';
  const listId = 'xxxxxxxxxx';
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`;

  axios
    .post(
      url,
      {
        status: 'subscribed',
        email_address: email,
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
        alert(`Email Subscribed Successfully`)
    
    })
    .catch(error => {
      
        alert('Technical Issues ' + error.response.data)
    });
  */

  return (
    <div class="container mx-auto lg:px-20 xl:px-20 px-4" id="notifysection">     
      <div class="mt-20  xl:mt-40 lg:mt-40 bg-[#1e2029] rounded-3xl xl:p-28 	pb-20  	pt-20 ">
        <h1 class="text-4xl text-white font-bold xl:text-center md:text-center lg:text-center text-left pl-5 lg:pl-0 xl:pl-0">Join the waitlist for early access</h1>
        <p class="text-white mt-6 font-semibold text-left md:text-center xl:text-center lg:text-center pl-5 lg:pl-0 xl:pl-0" >Sign up for early access and latest news from ZKX.</p>
        <div class="xl:flex md:flex items-center justify-center ">
          <div class="xl:flex border-gray-200 rounded pt-12 lg:pl-12 xl:pl-12 pl-0">

            {/*  <form onSubmit={handleSubmit}> 
              <input type="text" class="px-5 py-3 xl:w-80 md:w-80 lg:w-80 w-10/12  lg:py-3 xl:py-3 md:py-3 rounded-md" placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
              <input type="submit"  class="bg-[#00ff62] hover:bg-blue-700 text-white font-bold py-3 md:px-0 xl:ml-2 lg:ml-2 ml-0 xl:w-32 lg:w-32 px-4 mt-2 w-10/12 text-[#000] rounded items-center text-center" value="Notify Me" />

                </form>
            */}

            <form action="https://zkx.us20.list-manage.com/subscribe/post?u=72f9d82da7b5eebdbce96aa7b&id=8a292131d1" method="post">
              <input type="email" name="EMAIL"  class="outline-0	px-5 py-3 xl:w-80 md:w-80 lg:w-80 w-10/12  lg:py-3 xl:py-3 md:py-3 rounded-md" placeholder="Enter Your Email" required/>
              <button class="outline-0	bg-[#00ff62] hover:bg-white text-white font-bold py-3 md:px-0 xl:ml-2 lg:ml-2 ml-0 xl:w-32 lg:w-32 px-4 mt-2 w-10/12 text-[#000] rounded items-center text-center" type="submit">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotifyMe