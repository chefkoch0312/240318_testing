import { useState, useEffect } from 'react';
import { useDebugValue } from 'react';

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useDebugValue(user, user => `Dbg: Pass = ${user.pass}`)
    // useDebugValue(`user = ${user}`)
    // useDebugValue(user);
    // useDebugValue({ x: 5, y: 2, z: 3 });

    useEffect(() => {
        setTimeout(() => {
            setUser({ id: 1, username: 'exampleUser' });
            setIsLoading(false);
        }, 1000);
    }, []);

    const login = (username, password) => {
        setIsLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: username, pass: password });
            setIsLoading(false);
        }, 1000);
    };

    const logout = () => {
        setUser(null);
    };

    return { user, isLoading, login, logout };
};

export default useAuthentication;
