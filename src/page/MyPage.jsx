
import { useUser } from "../context/UserContextProvider";


function MyPage ( ) {
    const { user } = useUser();
   

    return(
        <>
            
                
            <p>안녕하세요, {user.userName}님!</p>
            <p>안녕하세요, {user.userName}님!</p>
            <p>안녕하세요, {user.userName}님!</p>
            <p>안녕하세요, {user.userName}님!</p>
            <p>안녕하세요, {user.userName}님!</p>


  
            


                
            
        </>
    )
}

export default MyPage