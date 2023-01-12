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
    },
    {
        name: 'Web',
        img: images.Website,
        data: [
            'Thiết kế 1 chú Web gây bão toàn thế giới',
            'Thiết kế 1 chú Web gây bão toàn thế giới',
            'Thiết kế 1 chú Web gây bão toàn thế giới',
            'Thiết kế 1 chú Web gây bão toàn thế giới',
            'Thiết kế 1 chú Web gây bão toàn thế giới',
        ],
    },
];

function DoWhat() {
    return (
        <>
            <div className={cx('row dowhat-wrapper')}>
                <div className={cx('c-12')}>BRAND làm được những gì</div>
            </div>

            {dataDoWhat.map((item, index) => {
                return <DoWhatItem opposite={index % 2 !== 0} data={item}></DoWhatItem>;
            })}
        </>
    );
}

export default DoWhat;
