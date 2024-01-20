const login = (userObj) => {
    return {
        type: 'LOG_IN',
        payload: userObj,
    }
}

const logout = () => {
    return {
        type: 'LOG_OUT',
    }
}

export default { login, logout};