import classNames from 'classnames/bind';
import styles from './DoWhatItem.scss';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const cx = classNames.bind(styles);

function DoWhatItem({ opposite, data }) {
    return (
        <div className={cx('row')} style={{ height: '400px' }}>
            {!opposite && (
                <div
                    className={cx('dowhat-img col c-6')}
                    style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}
                ></div>
            )}
            <div className={cx('dowhat-des-text col c-6')}>
                <ul className={cx('dowhat-des-list')}>
                    {data.data.map((item, index) => {
                        return (
                            <li className={cx('dowhat-des-item')}>
                                <span>
                                    <DoneOutlineIcon style={{ fontSize: '30px' }} className={cx('dowhat-des-icon')} />
                                </span>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {opposite && (
                <div
                    className={cx('dowhat-img col c-6')}
                    style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}
                ></div>
            )}
        </div>
    );
}

export default DoWhatItem;
