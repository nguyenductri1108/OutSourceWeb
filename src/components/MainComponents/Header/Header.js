import classNames from 'classnames/bind';
import styles from './Header.scss';
import { OpenContext } from 'src/Context/Dialog/Dialog';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const ToggleOpenDialog = useContext(OpenContext);

    return (
        <header className={cx('header-wrapper')}>
            <div className={cx('header-inner')}>
                <div className={cx('header-logo')}>BRAND</div>

                <div className={cx('header-menu')}>
                    <div className={cx('header-menu-item')}>
                        <span>Trang chủ</span>
                    </div>
                    <a href="#DoWhat" className={cx('header-menu-item')}>
                        <span>Giải pháp công nghệ</span>
                    </a>
                    <a href="#Price" className={cx('header-menu-item')}>
                        <span>Bảng giá</span>
                    </a>
                    <div className={cx('header-menu-item')}>
                        <span>Đối tác & khách hàng</span>
                    </div>
                    <div onClick={ToggleOpenDialog} className={cx('header-menu-item special')}>
                        <span>Liên hệ</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
