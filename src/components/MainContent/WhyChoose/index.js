import classNames from 'classnames/bind';
import icons from 'src/assets/icon';
import styles from './whychoose.scss';

const cx = classNames.bind(styles);

const dataWC = [
    { icon: icons.Like, title: 'Được các khách hàng đã sử dụng hài lòng' },
    {
        icon: icons.Gear,
        title: 'Dịch vụ hậu mãi tốt và trách nhiệm',
    },
    {
        icon: icons.Time,
        title: 'Thời gian xây dựng nhanh và chuyên nghiệp',
    },
    {
        icon: icons.Wallet,
        title: 'To',
    },
];

function WhyChoose() {
    return (
        <>
            <div className={cx('row')}>
                <span className={cx('c-12 whychoose-wrapper-title')}>Vì sao BRAND là lựa chọn hàng đầu của bạn ?</span>
            </div>
            <div className={cx('row')}></div>
        </>
    );
}

export default WhyChoose;
