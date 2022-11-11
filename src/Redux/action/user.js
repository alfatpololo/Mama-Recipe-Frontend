import axios from "axios";

export const userRegister = (form, navigate) => async(dispatch) => {
    try {
        dispatch({type: "REGISTER_PENDING"})
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)
        dispatch({type: "REGISTER_SUCCESS"})
        navigate("/login")

    } catch (error) {
        console.log(error)
        dispatch({type: "REGISTER_FAILED"})
    }
}

export const userLogin = (form, navigate) => async(dispatch) => {
    try {
        dispatch({type: "LOGIN_PENDING"})
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        const userData = result.data.token
        console.log(userData)
        localStorage.setItem("token", userData.token)
        localStorage.setItem("userdata", JSON.stringify(userData.data))
        localStorage.setItem("username", JSON.stringify(userData.data.username))
        dispatch({type: "LOGIN_SUCCESS", payload: userData})
        navigate("/")

    } catch (error) {
        console.log(error)
        dispatch({type: "LOGIN_FAILED"})
    }
}