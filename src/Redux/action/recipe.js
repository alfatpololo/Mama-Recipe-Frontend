import axios from "axios";

export const insertRecipe = (addForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: "ADD_RECIPE_PENDING"})
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, addForm)
        dispatch({type: "ADD_RECIPE_SUCCESS"})
        navigate("/profile")
    } catch (error) {
        console.log(error)
        dispatch({type: "ADD_RECIPE_FAILED"})
    }
}

export const updateRecipe = (addForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: "UPDATE_RECIPE_PENDING"})
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe/update/id`, addForm)
        dispatch({type: "UPDATE_RECIPE_SUCCESS"})
        navigate("/profile")
    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATE_RECIPE_FAILED"})
    }
}

