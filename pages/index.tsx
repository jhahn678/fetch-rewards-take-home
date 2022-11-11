import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSubmitForm } from '../hooks/mutations/useSubmitForm'
import { useValidateForm } from '../hooks/utils/useValidateForm'
import { useEffect, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { toast, ToastContainer } from 'react-toastify'
import useCreatedAccount from '../store/useAccountContext'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem'

interface Props {
    occupations: string[],
    states: {
        name: string
        abbreviation: string
    }[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await axios.get<Props>('https://frontend-take-home.fetchrewards.com/form')
  return { props: { ...data } };
}

const Home: NextPage<Props> = ({ occupations, states }) => {

  const router = useRouter()
  const { user, reset, setUser } = useCreatedAccount()
  const [formState, dispatch] = useValidateForm()

  const { submitForm } = useSubmitForm({
    onSuccess: (user) => { 
        console.log('On Success being called')
        dispatch({ type: 'RESET_FORM' });
        setUser(user); 
        router.push('/success');
    },
    onError: () => toast.error('There was an error creating your account')
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { name, email, password, occupation, state } = formState;
    if(!occupation.value || !state.value) return toast.error('All fields are required to continue')
    submitForm({
      name: name.value,
      email: email.value,
      password: password.value,
      occupation: occupation.value,
      state: state.value
    })
  }

  useEffect(() => {
    // fake logout
    // resets state if navigating back from succcess page
    if(user) reset()
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch Rewards User Registration</title>
        <meta name="description" content="Registering Users for Fetch Rewards" />
        <link rel="icon" href="https://partners.fetchrewards.com/favicon.png" />
      </Head>

      <Image src={'/fetch-logo.png'} height={100} width={100} alt={'Fetch Rewards Logo'} className={styles.logo}/>
      <form className={styles.form}>
          <TextField 
            label={'Name'} 
            variant={'standard'} 
            color={formState.name.valid ? 'success' : 'primary'}
            error={formState.name.touched && !formState.name.valid}
            value={formState.name.value} 
            onChange={e => dispatch({ type: 'NAME', value: e.target.value })}
          />
          <TextField 
            label={'Email'}
            type={'email'} 
            variant={'standard'} 
            color={formState.email.valid ? 'success' : 'primary'}
            error={formState.email.touched && !formState.email.valid}
            value={formState.email.value} 
            onChange={e => dispatch({ type: 'EMAIL', value: e.target.value })}
          />
          <TextField 
            label={'Password'}
            variant={'standard'} 
            type={showPassword ? 'text' : 'password'}
            color={formState.password.valid ? 'success' : 'primary'}
            error={formState.password.touched && !formState.password.valid}
            helperText={'Minimum 8 characters • 1 uppercase • 1 number'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(x => !x)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            value={formState.password.value} 
            onChange={e => dispatch({ type: 'PASSWORD', value: e.target.value })}
          />

          <TextField 
            label="Occupation"
            variant={'standard'}
            id='occupation-select'
            select={true}
            value={formState.occupation.value}
            onChange={(e) => dispatch({ type: 'OCCUPATION', value: e.target.value })}
            color={formState.occupation.valid ? 'success' : 'primary'}
            error={formState.occupation.touched && !formState.state.valid}
          >
            {occupations.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
          </TextField>
          <TextField 
            label="State"
            variant={'standard'} 
            id='state-select'
            select={true}
            value={formState.state.value}
            onChange={(e) => dispatch({ type: 'STATE', value: e.target.value })}
            color={formState.state.valid ? 'success' : 'primary'}
            error={formState.state.touched && !formState.state.valid}
          >
            {states.map(x => <MenuItem key={x.name} value={x.name}>{x.name}</MenuItem>)}
          </TextField>
          <Button 
            variant='contained' 
            size='large' 
            onClick={handleSubmitForm} 
            classes={{ root: styles.button }}
            disabled={!formState.form.valid}
          >Create Account</Button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Home;