import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import styles from './wcitem.scss';

const cx = classNames.bind(styles);

function WCItem({ delay, data }) {
    return (
        <Zoom bottom delay={delay}>
            <div className={cx('col c-3 wcitem-wrapper')}>
                <div
                    className={cx('wcitem-icon')}
                    style={{ width: '60px', height: '60px', backgroundImage: `url(${data.icon})` }}
                ></div>
                <div className={cx('wcitem-title')}>{data.title}</div>
            </div>
        </Zoom>
    );
}

export default WCItem;
