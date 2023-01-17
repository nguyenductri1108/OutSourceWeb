import classNames from 'classnames/bind';
import icons from 'src/assets/icon';
import styles from './whychoose.scss';
import WCItem from './WhyChooseItem/WCItem';
import Zoom from 'react-reveal/Zoom';

const cx = classNames.bind(styles);

const dataWC = [
    {
        icon: icons.Wallet,
        title: 'Tối ưu chi phí và và tối đa giá trị của website',
    },
    {
        icon: icons.Time,
        title: 'Thời gian xây dựng nhanh và chuyên nghiệp',
    },
    {
        icon: icons.Gear,
        title: 'Dịch vụ hậu mãi tốt và trách nhiệm',
    },
];

function WhyChoose() {
    return (
        <>
            <div className={cx('row')}>
                <span className={cx('c-12 whychoose-wrapper-title')}>Vì sao BRAND là lựa chọn hàng đầu của bạn ?</span>
            </div>

            <div className={cx('row mobile-width')} style={{ justifyContent: 'center', margin: '0 -32px 32px' }}>
                {dataWC.map((item, index) => {
                    return <WCItem delay={100 + index * 200} data={item} />;
                })}
            </div>
        </>
    );
}

export default WhyChoose;
