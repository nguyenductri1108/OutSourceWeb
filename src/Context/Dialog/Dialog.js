import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { createContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Dialog.scss';
import ClearIcon from '@mui/icons-material/Clear';

const cx = classNames.bind(styles);

export const OpenContext = createContext();

function HandleDialogProvider({ children }) {
    const [open, setOpen] = useState(false);

    const toogleOpenDialog = () => {
        setOpen(!open);
    };

    return (
        <OpenContext.Provider value={toogleOpenDialog}>
            {children}
            <Dialog
                PaperProps={{ padding: '20px' }}
                className={cx('dialog-wrapper')}
                open={open}
                onClose={(event, reason) => {
                    if (reason == 'backdropClick' && reason == 'escapeKeyDown') {
                        toogleOpenDialog();
                    }
                }}
            >
                <ClearIcon
                    onClick={toogleOpenDialog}
                    className={cx('dialog-cancel')}
                    style={{
                        color: '#fff',
                        fontSize: '3.6rem',
                        cursor: 'pointer',
                    }}
                />

                <DialogTitle
                    style={{
                        color: '#fff',
                    }}
                    className={cx('dialog-title')}
                >
                    Đăng ký tư vấn
                </DialogTitle>
                <DialogContentText
                    style={{
                        color: '#fff',
                        fontSize: '1.6rem',
                        fontFamily: 'ProximaNova, Arial, Tahoma, PingFangSC, sans-serif',
                    }}
                >
                    Để lại số điện thoại và chúng tôi sẽ liên hệ với bạn sau ít phút
                </DialogContentText>
                <DialogContent
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextField
                        label="Họ và tên"
                        variant="outlined"
                        style={{
                            fontSize: '1.6rem',
                        }}
                    ></TextField>
                    <TextField label="Số điện thoại" variant="outlined"></TextField>
                </DialogContent>

                <button onClick={toogleOpenDialog} className={cx('dialog-confirm')}>
                    <span>Xác nhận</span>
                </button>
            </Dialog>
        </OpenContext.Provider>
    );
}

export default HandleDialogProvider;
