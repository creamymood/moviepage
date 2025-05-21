import { useContext, useEffect, useState } from "react"
import { useSupabaseAuth } from "../supabase"
import { UserContext } from "./UserContext"

export function UserContextProvider ({children}) {
     const [user, setUser] = useState(null)
     const {getUserInfo} = useSupabaseAuth()
     const [loggedIn, setLoggedIn] = useState(null)
   
     useEffect(()=>{
        const fetchUser = async () => {
         const UserInfo =  await getUserInfo()
         if (UserInfo?.user) {
          setUser(UserInfo.user); // 전역 상태에 저장
          setLoggedIn(true)
        }
         else {
            setUser(null);
            setLoggedIn(false); // 비로그인 상태
          }
          
        }
        fetchUser()
    },[])

    return <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn}}>{children}</UserContext.Provider>

}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error('UserContext가 초기화되지 않았습니다.')
    return context }