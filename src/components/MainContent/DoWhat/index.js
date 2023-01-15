import classNames from 'classnames/bind';
import styles from './DoWhat.scss';
import images from 'src/assets/img';
import DoWhatItem from './component/DoWhatItem';

const cx = classNames.bind(styles);

const dataDoWhat = [
    {
        name: 'AI',
        img: images.AI,
        data: [
            'Thiết kế 1 chú AI thống trị thế giới',
            'Thiết kế 1 chú AI thống trị thế giới',
            'Thiết kế 1 chú AI thống trị thế giới',
            'Thiết kế 1 chú AI thống trị thế giới',
            'Thiết kế 1 chú AI thống trị thế giới',
        ],
        bgText: images.AIBGText,
    },
    {
        name: 'Game',
        img: images.Game,
        data: [
            'Thiết kế 1 chú Game gây sốt toàn thế giới',
            'Thiết kế 1 chú Game gây sốt toàn thế giới',
            'Thiết kế 1 chú Game gây sốt toàn thế giới',
            'Thiết kế 1 chú Game gây sốt toàn thế giới',
            'Thiết kế 1 chú Game gây sốt toàn thế giới',
        ],
        bgText: images.GameBGText,
    },
    {
        name: 'Web',
        img: images.Website,
        data: [
            'Độc quyền khác biệt trên từng sản phẩm',
            'Lộng lẫy, mượt mà, tải nhanh',
            'Thích ứng tốt trên mọi thiết bị',
            'Chuẩn SEO dễ tìm kiếm',
        ],
        bgText: images.WebBGText,
    },
];

function DoWhat() {
    return (
        <>
            <div className={cx('row dowhat-wrapper')}>
                <div className={cx('c-12 dowhat-wrapper-title')}>BRAND làm được những gì</div>
                <div className={cx('c-12 dowhat-wrapper-des')}>
                    {' '}
                    BRAND luôn hướng tới chất lượng sản phẩm bao gồm thiết kế, tính năng và giao diện
                </div>
            </div>
            {dataDoWhat.map((item, index) => {
                return (
                    <div className={cx('row')} style={{ height: '300px' }}>
                        <DoWhatItem opposite={index % 2 !== 0} data={item}></DoWhatItem>
                    </div>
                );
            })}
        </>
    );
}

export default DoWhat;
