import React, { useState, useEffect } from 'react';
import useUserInfo from '../components/custom-hooks/UseUserInfo';

/**
 * @see https://react.docschina.org/docs/hooks-custom.html
 * 自定义hook的使用
 */

function UserInfo () {
    const [value, setValue] = useState('carltian');
    const userInfo = useUserInfo(value);
    console.log(userInfo);
    const str = JSON.stringify(
        userInfo,
        ['id', 'login', 'public_repos', 'repos_url', 'type'],
        '\t'
    );
    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <pre style={{ fontSize: 20 }}>{str}</pre>
        </>
    );
}

export default UserInfo;