import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import {auth} from '../firebase';


 const Chats = () => { 

    const history = useHistory();

    const handleLogout = async()=>{
        await auth.signOut();
        history.push('/');

    }

  return (
    <div className="chats-page" >
        <div className="nav-bar" >
            <div className="logo-tab">
                Unichat
            </div>
            <div  onClick={handleLogout} className="logo-out">
                Logout
            </div>
            <ChatEngine
                height="calc(100vh-66px)"
                projectI="784bdb9e-8724-4f63-8ab6-3c10d59f74a7"
                userName='.'
                userSecret='.'
                />
        </div>

    </div>
  )
};

export default Chats;
