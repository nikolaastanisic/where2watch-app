import React, { useState } from "react";

import "@scss/SignInPage.scss";

function password({getPassword}) {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
     password: "",
  });
 
  const handlePasswordChange = (e) => {
     const newPassword = e.target.value;
     setData({ ...data, password: newPassword });
     getPassword(newPassword); 
  };
 
  return (
     <div className="password">
       <div>
         <input
           id="pass"
           placeholder="Enter Password"
           type={showPassword ? "text" : "password"}
           value={data.password}
           onChange={handlePasswordChange}
         />
         <br />
         <br />
         <div className="show-password-all">
           <span className="show-password" htmlFor="check">
             Show Password
           </span>
           <input
             className="checkbox"
             id="check"
             type="checkbox"
             value={showPassword}
             onChange={() => setShowPassword((prev) => !prev)}
           />
         </div>
       </div>
       <br />
     </div>
  );
 }
 
 export default password;
 
