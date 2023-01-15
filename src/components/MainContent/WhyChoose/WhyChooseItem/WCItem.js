import classNames from 'classnames/bind';
import styles from './wcitem.scss';

const cx = classNames.bind(styles);

function WCItem({ data }) {
    return <div className={cx('c-2 wcitem-wrapper')}></div>;
}

export default WCItem;
