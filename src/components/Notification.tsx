import { Alert } from "@mui/material";
import { AlertColor } from "../types/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { uiActions } from "../store/ui-slice";

const Notification: React.FC<{type: AlertColor, [key: string]: string}> = ({type, message}) => {
    const dispatch = useDispatch()
    const notification = useSelector((state: RootState) => state.ui.notification)

    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }
  return (
    <div>
        {notification && notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}

    </div>
    
    )
}

export default Notification