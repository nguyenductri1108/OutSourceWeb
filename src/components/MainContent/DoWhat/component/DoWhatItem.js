import classNames from 'classnames/bind';
import styles from './DoWhatItem.scss';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

const cx = classNames.bind(styles);

function DoWhatItem({ opposite, data }) {
    return (
        <>
            {!opposite && (
                <Fade mirror={opposite}>
                    <div
                        className={cx('dowhat-img col c-6')}
                        style={{
                            backgroundImage: `url(${data.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </Fade>
            )}
            <div
                className={cx('dowhat-des-text col c-6')}
                style={{ backgroundImage: `url(${data.bgText})`, backgroundSize: 'cover' }}
            >
                <Zoom cascade mirror={opposite}>
                    <ul className={cx('dowhat-des-list')}>
                        {data.data.map((item, index) => {
                            return (
                                <li className={cx('dowhat-des-item')}>
                                    <Tada delay={1000}>
                                        <span>
                                            <DoneOutlineIcon
                                                style={{ fontSize: '30px' }}
                                                className={cx('dowhat-des-icon')}
                                            />
                                        </span>
                                    </Tada>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </Zoom>
            </div>

            {opposite && (
                <Fade mirror={!opposite}>
                    <div
                        className={cx('dowhat-img col c-6')}
                        style={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}
                    ></div>
                </Fade>
            )}
        </>
    );
}

export default DoWhatItem;
