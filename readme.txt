 npm i axios react-router-dom react-hot-toast sass

 create basic frontend....

the use axios.

in function .........

EX:- axios.post("post_url")...

       axios.post(`${server}/users/new`,
        {name , email ,password},
        {
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true,
        }
        ); 

then use a toster for showing status...

import {Toaster}
then add it in app.jsx.

import a toast where axios is use...
toast.success("message");

createContext........6:02:37
in main.jsx

create a Context function which can be used anywere in app

then create a AppWrapper component which take value then call it..

use isAuthenticated in header.....

then create loader and setLoader for disable/unable the button.

.........................................save login(prevent login status)......................
create a useEffect in app file. 

