import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext(); // creating the AuthCOntext ...

export const useAuth = () => useContext(AuthContext);// we are passing the AuthCOntext into 'useContext' React hook.

export const AuthProvider = ({ children }) => { // it gonna render all jsx that we pass into AuthProvider.
    const [loading, setLoading] = useState(true);
    const [user, setUser] =useState(null);
    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats');
            

        })
    },[user, history]) ;
    
    const value ={ user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}

        </AuthContext.Provider>
    )

};