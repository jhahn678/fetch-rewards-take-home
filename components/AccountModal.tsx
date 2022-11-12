import React from "react";
import styles from  "../styles/Success.module.css"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
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
            { user ?
                <List>
                    <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={"Name"} secondary={user.name}/>
                    <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={"Email"} secondary={user.email}/>
                    <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={"Account ID"} secondary={user.id}/>
                    <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={"Occupation"} secondary={user.occupation}/>
                    <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={"State"} secondary={user.state}/>
                </List> :
                <Typography variant={'subtitle2'}>No Account Available</Typography>  
            }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Dismiss</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AccountModal;
