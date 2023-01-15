import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import Intro from 'src/components/MainContent/Introdution/Intro';
import DoWhat from 'src/components/MainContent/DoWhat';
import styles from './Home.scss';
import WhyChoose from 'src/components/MainContent/WhyChoose';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home-wrapper')}>
            <div className={cx('grid')} style={{ backgroundColor: '#f7f7f7' }}>
                <div className={cx('grid wide')}>
                    <div style={{ height: '100px', marginBottom: '100px' }}></div>
                    <Intro></Intro>
                    <div style={{ height: '100px', marginBottom: '50px' }}></div>
                </div>
            </div>

            <div className="grid superwide" style={{ borderTop: '1px solid #ccc', marginBottom: '100px' }}>
                <DoWhat></DoWhat>
            </div>

            <div style={{ borderTop: '1px solid #ccc', backgroundColor: '#f7f7f7' }}>
                <div className="grid wide">
                    <WhyChoose></WhyChoose>
                </div>
            </div>
        </div>
    );
}

export default Home;
