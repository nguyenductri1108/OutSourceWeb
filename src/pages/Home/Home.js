import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import Intro from 'src/components/MainContent/Introdution/Intro';
import DoWhat from 'src/components/MainContent/DoWhat';
import styles from './Home.scss';
import WhyChoose from 'src/components/MainContent/WhyChoose';
import Price from 'src/components/MainContent/Price/Price';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div
            onScroll={(e) => {
                console.log(e);
            }}
            className={cx('home-wrapper')}
        >
            <div className={cx('grid')} style={{ backgroundColor: '#f7f7f7' }}>
                <div className={cx('grid wide')}>
                    <div style={{ height: '100px', marginBottom: '100px' }}></div>
                    <Intro></Intro>
                    <div style={{ height: '100px', marginBottom: '50px' }}></div>
                </div>
            </div>

            <div
                className="grid superwide"
                style={{ position: 'relative', borderTop: '1px solid #ccc', marginBottom: '100px' }}
            >
                <DoWhat></DoWhat>
                <span id="DoWhat" className={cx('address')} style={{ position: 'absolute', top: '-100px' }}></span>
            </div>

            <div style={{ borderTop: '1px solid #ccc', backgroundColor: '#f7f7f7' }}>
                <div className="grid wide">
                    <WhyChoose></WhyChoose>
                </div>
            </div>

            <div style={{ position: 'relative', borderTop: '1px solid #ccc', backgroundColor: '#fff' }}>
                <div className="grid wide">
                    <Price></Price>
                    <span id="Price" className={cx('address')} style={{ position: 'absolute', top: '-100px' }}></span>
                </div>
            </div>
        </div>
    );
}

export default Home;
