import { Dispatch, useEffect, useReducer } from 'react'

type Action = 
| { type: 'NAME', value: string }
| { type: 'EMAIL', value: string }
| { type: 'PASSWORD', value: string }
| { type: 'OCCUPATION', value: string }
| { type: 'STATE', value: string }
| { type: 'VALIDATE_FORM' }
| { type: 'RESET_FORM' }
| { type: 'RESET' }

interface FormState {
    name: {
        touched: boolean
        valid: boolean
        value: string
    },
    email: {
        touched: boolean
        valid: boolean
        value: string
    },
    password: {
        touched: boolean
        valid: boolean
        value: string
    },
    occupation: {
        touched: boolean
        valid: boolean
        value: string
    },
    state: {
        touched: boolean
        valid: boolean
        value: string
    },
    form: {
        valid: boolean
    }
}

const initialState: FormState = {
    name: {
        value: '',
        touched: false,
        valid: false
    },
    email: {
        value: '',
        touched: false,
        valid: false
    },
    password: {
        value: '',
        touched: false,
        valid: false
    },
    occupation: {
        value: '',
        touched: false,
        valid: false
    },
    state: {
        value: '',
        touched: false,
        valid: false
    },
    form: {
        valid: false
    }
}

const reducer = (formState: FormState, action: Action) => {
    if(action.type === 'NAME'){
        const { name } = formState;
        name.touched = true;
        name.value = action.value;
        name.valid = action.value.length > 0;
        return { ...formState, name };
    }else if(action.type === 'EMAIL'){
        const { email } = formState;
        email.touched = true;
        email.value = action.value;
        email.valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(action.value);
        return { ...formState, email };
    }else if(action.type === 'PASSWORD'){
        const { password } = formState;
        password.touched = true;
        password.value = action.value;
        password.valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(action.value);
        return { ...formState, password };
    }else if(action.type === 'OCCUPATION'){
        const { occupation } = formState;
        occupation.touched = true;
        occupation.value = action.value;
        occupation.valid = true;
        return { ...formState, occupation}
    }else if(action.type === 'STATE'){
        const { state } = formState;
        state.touched = true;
        state.value = action.value;
        state.valid = true;
        return { ...formState, state }
    }else if(action.type === 'VALIDATE_FORM'){
        const { form } = formState;
        form.valid = Boolean(
            formState.name.valid &&
            formState.email.valid &&
            formState.password.valid &&
            formState.occupation.valid &&
            formState.state.valid
        )
        return { ...formState, form }
    }else if(action.type === 'RESET_FORM'){
        return initialState;
    }else{
        return formState;
    }
}

export const useFormReducer = (): [FormState, Dispatch<Action>] => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => dispatch({ type: 'VALIDATE_FORM' }),[
        state.email.valid,
        state.name.valid,
        state.password.valid,
        state.state.valid,
        state.occupation.valid
    ])

    return [state, dispatch];
}