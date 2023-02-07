import classNames from 'classnames/bind';
import styles from './Price.scss';
import PriceItem from './PriceItem/PriceItem';

const cx = classNames.bind(styles);

const priceData = [
    {
        style: 'normal',
        title: 'STANDARD',
        price: '> 12.500.000 VNĐ',
        des: 'Doanh nghiệp nhỏ mới khởi nghiệp',
        details: [
            {
                title: 'Thiết kế giao diện (Layout Design) 5 kiểu trang PC',
                special: false,
            },
            {
                title: 'Thiết kế 1 phương án, chỉnh sửa tối đa 3 lần',
                special: false,
            },
            {
                title: 'Thời gian bàn giao: 15-20 ngày',
                special: false,
            },
            {
                title: 'Bảo hành trọn đời website',
                special: false,
            },
            {
                title: 'Cam kết tốc độ tải trang dưới 3s.',
                special: false,
            },
            {
                title: 'Hỗ trợ nhập 20 nội dung sản phẩm',
                special: false,
            },
            {
                title: 'Tối ưu chuẩn SEO. Giao diện tương thích Mobile, Tablet',
                special: false,
            },
            {
                title: 'Miễn phí Email doanh nghiệp 5GB (ten@tenmiencongty.com)',
                special: true,
            },
            {
                title: 'Tặng kèm 1 năm tên miền .COM trị giá 330.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Tặng Hosting 3GB/1 năm trị giá 1.782.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Bàn giao mã nguồn website',
                special: false,
            },
            {
                title: 'Cam kết hoàn 100% phí nếu khách hàng không hài lòng',
                special: true,
            },
        ],
    },
    {
        style: 'special',
        title: 'ENTERPRISE',
        price: '> 15.000.000 VNĐ',
        des: 'Dành cho các Doanh Nghiệp vừa và nhỏ',
        des2: 'GÓI ĐƯỢC SỬ DỤNG NHIỀU NHẤT',
        details: [
            {
                title: 'Thiết kế giao diện (Layout Design) 8 kiểu trang PC',
                special: false,
            },
            {
                title: 'Thiết kế 1 phương án, chỉnh sửa tối đa 5 lần',
                special: false,
            },
            {
                title: 'Thời gian bàn giao: 20-25 ngày',
                special: false,
            },
            {
                title: 'Bảo hành trọn đời website',
                special: false,
            },
            {
                title: 'Cam kết tốc độ tải trang dưới 3s.',
                special: false,
            },
            {
                title: 'Hỗ trợ nhập 20 nội dung sản phẩm',
                special: false,
            },
            {
                title: 'Tối ưu chuẩn SEO. Giao diện tương thích Mobile, Tablet',
                special: false,
            },
            {
                title: 'Miễn phí Email doanh nghiệp 5GB (ten@tenmiencongty.com)',
                special: true,
            },
            {
                title: 'Tặng kèm 1 năm tên miền .COM trị giá 330.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Tặng Hosting 5GB/1 năm trị giá 2.772.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Bàn giao mã nguồn website',
                special: false,
            },
            {
                title: 'Cam kết hoàn 100% phí nếu khách hàng không hài lòng',
                special: true,
            },
        ],
    },
    {
        style: 'normal',
        title: 'PROFESSIONAL',
        price: 'Liên hệ báo giá',
        des: 'Thiết kế một bộ giao diện độc quyền & Tính năng theo yêu cầu',
        details: [
            {
                title: 'Thiết kế giao diện (Layout Design) PC & Mobile riêng',
                special: false,
            },
            {
                title: 'Thiết kế 2 phương án, chỉnh sửa đến khi hài lòng',
                special: false,
            },
            {
                title: 'Thời gian bàn giao: > 30 ngày',
                special: false,
            },
            {
                title: 'Bảo hành trọn đời website',
                special: false,
            },
            {
                title: 'Cam kết tốc độ tải trang dưới 3s.',
                special: false,
            },
            {
                title: 'Hỗ trợ nhập 20 nội dung sản phẩm',
                special: false,
            },
            {
                title: 'Tối ưu chuẩn SEO. Giao diện tương thích Mobile, Tablet',
                special: false,
            },
            {
                title: 'Miễn phí Email doanh nghiệp 5GB (ten@tenmiencongty.com)',
                special: true,
            },
            {
                title: 'Tặng kèm 1 năm tên miền .COM trị giá 330.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Tặng Hosting 5GB/1 năm trị giá 2.772.000 VNĐ (đã bao gồm VAT 10%)',
                special: false,
            },
            {
                title: 'Bàn giao mã nguồn website',
                special: false,
            },
            {
                title: 'Cam kết hoàn 100% phí nếu khách hàng không hài lòng',
                special: true,
            },
        ],
    },
];

function Price() {
    return (
        <div className="price-wrapper">
            <div className={cx('price-title row')}>Bảng giá thiết kế Website theo yêu cầu</div>

            <div className={cx('price-inner row')}>
                {priceData.map((item, index) => {
                    return <PriceItem key={index} data={item}></PriceItem>;
                })}
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default Price;
