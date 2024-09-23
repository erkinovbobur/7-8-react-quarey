import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuary = async (args, api, extraOptions) => {
    const { dispatch } = api;
    const rowBaseQuary = fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
        
            if (token) {
                headers.set("authorization", `Bearer ${token}`); 
            }
            return headers;
        }
        
    })
    const response = await rowBaseQuary(args, api, extraOptions)
    if (response.error) {
        const { status } = response.error;
        if (status === 401 || status === 403){
            localStorage.removeItem("token")
            // dispatch({ type: "Login/logout" })

        }
    }

    return response
}
const baseQuaryWidthRetry = retry(baseQuary,{maxRetries:0})

export const api = createApi({
    reducerPath:"api",
    baseQuery: baseQuaryWidthRetry,
    tagTypes: ["Products"],
    endpoints:() => ({})

})