import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-inner')}>
                <div className={cx('header-logo')}>BRAND</div>

                <div className={cx('header-menu')}>
                    <div className={cx('header-menu-item')}>Trang chủ</div>
                    <div className={cx('header-menu-item')}>Quy trình phát triển</div>
                    <div className={cx('header-menu-item')}>Đối tác & khách hàng</div>
                    <div className={cx('header-menu-item')}>Bảng giá</div>
                    <div className={cx('header-menu-item special')}>Liên hệ</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
