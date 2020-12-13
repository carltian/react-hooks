import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
const prefix = 'https://api.github.com/users/';

const useUserInfo = (username = 'carltian') => {
    // const debounceFetch = debounce()
    const fetchRef = useRef(null);
    const [userInfo, setUserInfo] = useState({});
    const handleData = (data) => {
        setUserInfo(data);
    };
    useEffect(() => {
        const DELAYTIME_MS = 1000;
        const fetchData = (username) =>
            fetch(`${prefix}${username}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('fetch success');
                    handleData(data);
                });
        fetchRef.current = debounce(fetchData, DELAYTIME_MS);
    }, []);

    useEffect(
        () => {
            fetchRef.current(username);
        },
        [username]
    );
    return userInfo;
};

export default useUserInfo;
