import { Box } from '@mui/system';
import classNames from 'classnames/bind';
import Header from '../../components/MainComponents/Header/Header';
import styles from './DefaultLayout.scss';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (<Box classNames={cx('wrapper')}>
        <Header/>
        {children}
    </Box>  );
}

export default DefaultLayout;