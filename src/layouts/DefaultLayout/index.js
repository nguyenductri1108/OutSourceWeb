import { Box } from '@mui/system';
import classNames from 'classnames/bind';
import Footer from 'src/components/MainComponents/Footer/Footer';
import Header from '../../components/MainComponents/Header/Header';
import styles from './DefaultLayout.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Box classnames={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </Box>
    );
}

export default DefaultLayout;
