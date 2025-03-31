import { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const useAuth = () => {
    const [authState, setAuthState] = useState({ isLoggedIn: false, role: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = localStorage.getItem("id");
        const role = localStorage.getItem("role");
       

        if (id) {
            setAuthState({ isLoggedIn: true, role: role });
            //  setLoading(false);
        }
        setLoading(false)

    }, [])
    return { authState, loading }
}

const PrivateRouting = () => {

    const auth = useAuth();
   
    // console.log("load", auth.authState.loading)
    // console.log("isload", auth.isLoggedIn)
    // if(auth.loading == false){
    //     return <div>Loading...</div>
    // }
    //return auth.authState.isLoggedIn === true && auth.loading == false ? <Outlet /> : <Navigate to={'/signin'} />
    if (auth.loading) {
        return <div>Loading...</div>; // ✅ Show loading screen while checking auth
    }

    return auth.authState.isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
}
export default PrivateRouting;