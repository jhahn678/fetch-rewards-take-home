import Head from "next/head";
import React, { useState } from "react";
import styles from '../../styles/Success.module.css'
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import useAccountContext from "../../store/useAccountContext";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountModal from "../../components/AccountModal"
import { useRouter } from "next/router";

const Success = () => {

    const { user } = useAccountContext()

    const [accountModalVisible, setAccountModalVisible] = useState(false)
    const handleOpenAccountModal = () => setAccountModalVisible(true)

    const router = useRouter()

    const handleNavigateHome = () => router.push('/')

    return (
        <div className={styles.page}>
            <Head>
                <title>Fetch Rewards - Account Created</title>
                <meta name="description" content="Account creation successful" />
                <link rel="icon" href="https://partners.fetchrewards.com/favicon.png" />
            </Head>

            <Image src={'/fetch-logo.png'} height={100} width={100} alt={'Fetch Rewards Logo'} className={styles.logo}/>
            <Typography variant="h6" color={'var(--primary)'}>
                {user ? 'Account Successfully Created!' : 'No Account Registered'}
            </Typography>
            <Typography variant="body1" color={'var(--primary)'} textAlign={'center'}>
                { user ? 
                    `We're glad to have you on board, ${user.name}!` 
                    : "Return to the form and create your account"
                }
            </Typography>
            <Stack marginTop={2} direction={'row'} gap={2}>
                <Button 
                    variant="outlined" 
                    endIcon={<HomeIcon/>}
                    onClick={handleNavigateHome}
                >Take Me Home</Button>
                <Button 
                    variant="outlined" 
                    endIcon={<AccountBoxIcon/>} 
                    onClick={handleOpenAccountModal}
                >View My Profile</Button>
            </Stack>
            <AccountModal visible={accountModalVisible} setVisible={setAccountModalVisible}/>
        </div>
    );
};

export default Success;
