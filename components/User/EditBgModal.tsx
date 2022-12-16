import {FC, useRef, useState} from "react";
import {Modal, Box, Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectMainState} from "../../store/selector/main";
import {selectAuth} from "../../store/selector/auth";
import {setEditBgModal} from "../../store/reducers/main";
import {Theme} from "@mui/system";
import {makeStyles} from "@mui/styles";
import {media} from "../../utility/media";
import {deleteAvatarUser, deleteBgUser} from "../../actions/user";
import axios from "axios";
import api from "../../http/api";
import { setProfile } from "../../store/reducers/auth";

const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        maxWidth: media(350, 270),
        height: '141px',
        width: '100%',
        position: 'absolute',
        left: '56%',
        top: '13%',
        transform: 'translate(-50%, -50%)',
        background: '#FFFBFE',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        border: 'none',
        outline: 'none',
    },
    buttonChange: {
        width: '100%',
        height: '100%',
        background: "#FFFBFE",
        color: "black",
        fontWeight: '38px',
        margin: "5px 0",
        paddingLeft: '15px',
    },
    buttonDelete: {
        width: '100%',
        height: '100%',
        background: "#FFFAF0",
        color: "#C53B3B",
        margin: "5px 0",
        paddingLeft: '15px',
    },
    line: {
        width: '100%',
        height: '1px',
        background: 'rgba(0, 0, 0, 0.3)'
    }
}))


const EditBgModal: FC = () => {
    const styles = useStyles();
    const mainState = useAppSelector(selectMainState);
    const authState = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    const modal = useRef(null);

    const handleClose = () => {
        dispatch(setEditBgModal(false))
    }

    interface IDeleteBGUser {
        uniqueId: string;
        bg: string | null;
    }

    interface IDeleteAvatar {
        uniqueId: string
        avatar: string | null
    }

    const bgUser = {
        uniqueId: authState.profile.uniqueId,
        bg: null,
    } as IDeleteBGUser

    const avatarUser = {
        uniqueId: authState.profile.uniqueId,
        avatar: null
    } as IDeleteAvatar
        
    const handleDeleteBg = () => {
        dispatch(deleteBgUser(bgUser))
        handleClose()
    }

    const handleDeleteAvatar = () => {
        dispatch(deleteAvatarUser(avatarUser))
        handleClose()
    }

    return (
        <Modal open={mainState.editBgModal} onClose={handleClose}>
            <Box ref={modal} className={styles.modal}>
                <Button className={styles.buttonChange}>Change background image</Button>
                <div className={styles.line}/>
                <Button
                    className={styles.buttonDelete}
                    onClick={() => {
                        handleDeleteBg()
                    }}
                >Delete background image
                </Button>
                <div className={styles.line}/>
                <Button className={styles.buttonDelete} onClick={() => {
                    handleDeleteAvatar()
                }}>Delete profile image</Button>
            </Box>
        </Modal>
    );
};

export default EditBgModal;