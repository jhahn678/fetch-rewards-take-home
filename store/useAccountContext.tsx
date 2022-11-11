import React, { useState, useContext, createContext, useEffect } from 'react'

interface UserAccount {
    id: string
    name: string
    email: string
    occupation: string
    state: string
}

interface AccountState {
    user: UserAccount | undefined
    setUser: React.Dispatch<React.SetStateAction<UserAccount | undefined>>
    reset: () => void
}

const initialState: AccountState = {
    user: undefined,
    setUser: () => {},
    reset: () => {}
}

const AccountContext = createContext<AccountState>(initialState)

const useAccountContext = () => useContext(AccountContext)

export default useAccountContext;

export const AccountContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<UserAccount | undefined>(undefined)

    const reset = () => setUser(undefined)

    return (
        <AccountContext.Provider value={{ user, setUser, reset }}>
            {children}
        </AccountContext.Provider>
    );
}