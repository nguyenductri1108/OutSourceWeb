import classNames from 'classnames/bind';
import styles from './Intro.scss';
import Fade from 'react-reveal/Fade';

const cx = classNames.bind(styles);

function Intro() {
    return (
        <div className={cx('intro-wrapper row')}>
            <Fade left cascade>
                <div className={cx('intro-text intro-mobile col c-6')}>
                    <h1 className={cx('intro-title')}>Dịch vụ thiết kế website chuyên nghiệp </h1>
                    <span className={cx('intro-des')}>
                        BRAND cung cấp giải pháp thiết kế website tổng thể cho mọi doanh nghiệp Việt.
                    </span>
                    <br></br>
                    <span className={cx('intro-des')}>
                        Với mong muốn giúp mọi người có thể tạo được website hoàn chỉnh, an toàn, đầy đủ chức năng một
                        cách dễ dàng, nhanh chóng, chi phí phải chăng.
                    </span>
                </div>
            </Fade>

            <Fade right>
                <div className={cx('intro-img-wrapper intro-mobile col c-5 c-o-1')}></div>
            </Fade>
        </div>
    );
}

export default Intro;
