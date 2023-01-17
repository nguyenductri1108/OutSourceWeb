import classNames from 'classnames/bind';
import styles from './PriceItem.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import svgs from 'src/assets/svg';

const cx = classNames.bind(styles);

const colors = {
    first: 'rgba(249, 249, 249, 0.9)',
    second: 'rgba(213, 32, 39, 0.8)',
    third: '#FFE351',
};

function PriceItem({ data }) {
    return (
        <div
            className={cx('c-4-custom priceitem-wrapper')}
            style={{
                backgroundColor: data.style == 'normal' ? colors.first : colors.second,
                color: data.style == 'normal' ? 'black' : 'white',
                marginTop: data.style == 'normal' ? 0 : '-20px',
            }}
        >
            <div className={cx('priceitem-title')}>{data.title}</div>
            <div className={cx('priceitem-price')}>{data.price}</div>

            <div
                className={cx('priceitem-separate')}
                style={{ backgroundColor: data.style == 'normal' ? colors.second : colors.third }}
            ></div>

            <div className={cx('priceitem-des')}>{data.des}</div>

            {data.des2 && <div className={cx('priceitem-des2')}>{data.des2}</div>}

            <div className={cx('priceitem-detail-list')}>
                {data.details.map((item, index) => {
                    return (
                        <div className={cx('priceitem-detail-item')}>
                            <CheckCircleIcon
                                className={cx('priceitem-detail-item-icon')}
                                fontSize="1.6rem"
                                style={{
                                    color: data.style == 'normal' ? colors.second : colors.third,
                                    marginRight: '10px',
                                }}
                            />
                            <div className={cx('priceitem-detail-item-title')}>{item.title}</div>
                        </div>
                    );
                })}
            </div>

            <button
                className={cx('price-register')}
                style={{ backgroundColor: data.style == 'normal' ? colors.second : colors.third, fontSize: '1.6rem' }}
            >
                <span
                    style={{
                        fontFamily: 'SofiaPro, Arial, Tahoma, PingFangSC, sans-serif',
                        color: data.style == 'normal' ? colors.first : colors.second,
                        fontWeight: 600,
                    }}
                >
                    Đăng kí tư vấn
                </span>

                <ArrowCircleRightOutlinedIcon
                    style={{ marginLeft: '10px', color: data.style == 'normal' ? colors.first : colors.second }}
                    fontSize="inherit"
                />
            </button>
            {data.style !== 'normal' && (
                <div className={cx('price-tag')}>
                    <span style={{ fontFamily: 'SofiaPro, Arial, Tahoma, PingFangSC, sans-serif', fontSize: '1.6rem' }}>
                        Nổi bật
                    </span>
                </div>
            )}
        </div>
    );
}

export default PriceItem;
