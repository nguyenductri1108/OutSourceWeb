import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import Intro from 'src/components/MainContent/Introdution/Intro';
import DoWhat from 'src/components/MainContent/DoWhat';
import styles from './Home.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('grid wide')}>
                <div style={{ height: '100px' }}></div>
                <Intro></Intro>
            </div>

            <div className="grid" style={{ borderTop: '1px solid #ccc' }}>
                <DoWhat></DoWhat>
            </div>
        </div>
    );
}

export default Home;
