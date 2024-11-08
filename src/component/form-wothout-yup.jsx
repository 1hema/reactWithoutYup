import { useState } from "react"


const FormWithoutYup= () => {
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        age: "",
        gender:"",
        interest:[],
        birthDate:"",

    });

    const handleSubmit= () => {}
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>First Name : </label>
        <input 
        type="text"
        name="firstname" 
        value={formData.firstName}
        placeholder="Enter your firstname"
        />
        </div>

        <div>
        <label>Last Name : </label>
        <input 
        type="text"
        name="lastname" 
        value={formData.lastName}
        placeholder="Enter your lastname"
        />
        </div>

        <div>
        <label>Email: </label>
        <input 
        type="email"
        name="email" 
        value={formData.email}
        placeholder="Enter your email"
        />
        </div>
        <div>
        <label>Phone Number : </label>
        <input 
        type="text"
        name="phoneNumber" 
        value={formData.phoneNumber}
        placeholder="Enter your phonenumber"
        />
        </div>
        <div>
        <label>Password : </label>
        <input 
        type="password"
        name="password" 
        value={formData.password}
        placeholder="Enter your password"
        />
         </div>
         <div>
        <label>Confirm Password : </label>
        <input 
        type="password"
        name="password" 
        value={formData.confirmPassword}
        placeholder="Enter your confirmpassword"
        />
         </div>
         <div>
        <label>Age : </label>
        <input 
        type="number"
        name="age" 
        value={formData.age}
        placeholder="Enter your age"
        />
         </div>
         <div>
        <label>Gender : </label>
        <select name="gender"  value={formData.gender}>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="other">Other</option>
      
         
       
        placeholder="Enter your gender"
        </select>
         </div>




    </form>
  )
}

export default FormWithoutYup