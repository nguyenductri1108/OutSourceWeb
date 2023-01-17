import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('grid footer-wrapper')}>
            <div className={cx('footer-logo')}>BRAND</div>
        </div>
    );
}

export default Footer;
