// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    const imgStyle = {
        width: '150px', // Thay đổi kích thước theo yêu cầu
        height: '150px', // Thay đổi kích thước theo yêu cầu
        borderRadius: '50%', // Bo tròn hình ảnh
        objectFit: 'cover', // Đảm bảo hình ảnh không bị biến dạng
        transform: 'scale(1.5)', // Zoom hình ảnh lên
        objectPosition: 'center top',
    }

    return (
        <section className='header'>
            <img src={profile} alt="Ducy" style={imgStyle} />

            <div className='header__content'>
                <h1>Hi, I'm Ducy</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;