import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import useScrollWithBody from 'src/hooks/useScrollWithBody';

import styles from './stickyTextDes.scss';

const cx = classNames.bind(styles);

function StickyTextDes() {
    const [list, setList] = useState();
    const [listHeight, setListHeight] = useState(0);

    const listRef = useRef();

    useEffect(() => {
        if (listRef) {
            setList(listRef.current);
            setListHeight(listRef.current.offsetHeight);
            console.log(listRef.current.offsetHeight);
        }
    }, [listRef]);

    const diffHeight = useScrollWithBody(list);

    useEffect(() => {
        console.log(diffHeight);

        const list = Array.prototype.slice.call(listRef.current.children);
        console.log(list);

        list.forEach((e, i, arr) => {
            const coreDistance = (2.4 + 0.3 * (arr.length - 1)) / list.length;
            let maxOpacityPos = 1 - ((2 * i + 1) * coreDistance) / 2;
            let maxOpacityRange = Math.abs(diffHeight - maxOpacityPos);
            e.style.opacity = maxOpacityRange < 0.5 ? 1 - maxOpacityRange : 0.15;
            if (i == 0) {
                console.log(e.style.opacity);
            }
        });
    }, [diffHeight]);

    useEffect(() => {
        const list = Array.prototype.slice.call(listRef.current.children);
        console.log(list);

        list.forEach((e, i, arr) => {
            const coreDistance = (1.5 + 0.2 * (arr.length - 1)) / list.length;
            let maxOpacityPos = 0.5 - ((2 * i + 1) * coreDistance) / 2;
            let maxOpacityRange = Math.abs(diffHeight - maxOpacityPos);
            e.style.opacity = maxOpacityRange < maxOpacityPos ? 1 - maxOpacityPos : 0.15;
            if (i == arr.length - 1) {
                if (diffHeight - maxOpacityPos < 0.5) e.style.opacity = 1;
            }
        });
    }, []);

    return (
        <div className={cx('grid')} style={{ backgroundColor: 'black' }}>
            <div className={cx('grid wide')}>
                <ul ref={listRef} style={{ height: 'auto' }} className={cx('text-list')}>
                    <li className={cx('text-item')}>
                        BRAND thi???t k??? v?? tri???n khai trang web cho ri??ng b???n trang web cho ri??ng b???n.&nbsp;
                    </li>
                    <li className={cx('text-item')}>
                        BRAND l??m n???i b???t l??n n??t ri??ng c???a b???n trong thi???t k??? web.&nbsp;
                    </li>
                    <li className={cx('text-item')}>
                        BRAND gi??p b???n qu???ng b?? th????ng hi???u r???t t???t v???i thi???t k??? chu???n SEO.&nbsp;
                    </li>
                    <li className={cx('text-item')}>
                        BRAND ?????ng h??nh c??ng b???n trong su???t th???i gian web ho???t ?????ng.&nbsp;
                    </li>
                </ul>
            </div>
            <div style={{ height: `50vh` }}></div>
        </div>
    );
}

export default StickyTextDes;
