import useScroll from 'src/hooks/useScroll';
import classNames from 'classnames/bind';
import styles from './stickyMainDes.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function StickyMainDes() {
    const [parent, setParent] = useState();
    const [mainTitle, setMainTitle] = useState();

    const parentRef = useRef();
    const mainTitleRef = useRef();

    useEffect(() => {
        if (mainTitleRef) setMainTitle(mainTitleRef.current);
        if (parentRef) setParent(parentRef.current);
    }, [parentRef, mainTitleRef]);

    const [diffHeight, diffGrow] = useScroll(mainTitleRef.current, parentRef.current, 1);

    const scaleCalc = (diffHeight) => {
        if (diffHeight < 0.3 || diffHeight > 0.8) {
            return 0;
        } else {
            return 0.4 + diffHeight * 2;
        }
    };

    const opacityCalc = (diffHeight) => {
        if (diffHeight < 0.3 || diffHeight > 0.8) {
            return 0;
        } else {
            if (diffHeight < 0.8 && diffHeight > 0.6) return 4 - 5 * diffHeight;
            else return 1;
        }
    };

    let mainScale = scaleCalc(diffHeight);
    let mainOpacity = opacityCalc(diffHeight);

    useEffect(() => {}, [diffHeight]);

    return (
        <div className={cx('grid')} ref={parentRef} style={{ backgroundColor: 'black', height: '1500px' }}>
            <h1
                className={cx('main-title')}
                ref={mainTitleRef}
                style={{ scale: `${mainScale}`, opacity: `${mainOpacity}` }}
            >
                Welcome to BRAND
            </h1>
        </div>
    );
}

export default StickyMainDes;
