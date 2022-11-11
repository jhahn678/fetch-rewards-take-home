import React from "react";
import styles from '../../styles/Success.module.css'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import List from '@mui/material/List';
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import useCreatedAccount from "../store/useAccountContext";

interface Props {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountModal = ({ visible, setVisible }: Props) => {

    const handleClose = () => setVisible(false)

    const { user } = useCreatedAccount()

    return (
        <Dialog onClose={handleClose} open={visible} classes={{ paper: styles.modal }}>
            <DialogTitle>My Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { user ?
                        <List>
                            <ListItemText primary={<Typography variant={'subtitle2'}>Name</Typography>} secondary={user.name}/>
                            <ListItemText primary={<Typography variant={'subtitle2'}>Email</Typography>} secondary={user.email}/>
                            <ListItemText primary={<Typography variant={'subtitle2'}>Account ID</Typography>} secondary={user.id}/>
                            <ListItemText primary={<Typography variant={'subtitle2'}>Occupation</Typography>} secondary={user.occupation}/>
                            <ListItemText primary={<Typography variant={'subtitle2'}>State</Typography>} secondary={user.state}/>
                        </List> :
                        <Typography variant={'subtitle2'}>No Account Available</Typography>  
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Dismiss</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AccountModal;
