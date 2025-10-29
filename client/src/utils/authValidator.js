import axios from "axios";

export default async function isAuthenticated(){
    try {
        const response = await axios.post("http://localhost:3000/users/is-Authenticated",{},{
            withCredentials:true
        })
        return response.status == 200;
    } catch (error) {
        console.log(`Error Found: ${error}`);
        return false;
    }
}