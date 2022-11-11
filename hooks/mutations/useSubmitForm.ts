import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

interface SubmitFormArgs{
    name: string
    email: string
    password: string
    occupation: string
    state: string
}

export interface SubmitFormRes extends SubmitFormArgs{
    id: string
}

interface Args {
    onSuccess: (data: SubmitFormRes) => void
    onError: () => void
}

export const useSubmitForm = ({ onSuccess, onError }: Args) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const submitForm = async (args: SubmitFormArgs) => {
        try{
            setLoading(true)
            const { data } = await axios.post<SubmitFormRes>('https://frontend-take-home.fetchrewards.com/form', args)
            setLoading(false)
            onSuccess(data)
            return data;
        }catch(err){
            console.error(err)
            onError()
            setLoading(false)
            setError(true)
        }
    }

    return { submitForm, loading, error }
}