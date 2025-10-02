import React from 'react'
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail, 
  HiClock,
  HiHeart
} from 'react-icons/hi'
import { 
  FaTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaInstagram 
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zenttech Juice</h3>
                <p className="text-gray-400 text-sm">Tươi mát từ thiên nhiên</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Chúng tôi cam kết mang đến những sản phẩm nước ép tươi ngon nhất, 
              được làm từ nguyên liệu sạch và quy trình sản xuất an toàn. 
              Hãy cùng chúng tôi trải nghiệm hương vị thiên nhiên thuần khiết.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaPinterest className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-mint-400 transition-colors duration-300">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-mint-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Đường ABC, Quận 1<br />
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-mint-400" />
                <p className="text-gray-300 text-sm">+84 123 456 789</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-mint-400" />
                <p className="text-gray-300 text-sm">info@zenttechjuice.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <HiClock className="w-5 h-5 text-mint-400" />
                <p className="text-gray-300 text-sm">8:00 - 22:00 (Hàng ngày)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Đăng ký nhận tin tức</h4>
            <p className="text-gray-300 text-sm mb-6">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-mint-500 focus:ring-1 focus:ring-mint-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zenttech Juice. Tất cả quyền được bảo lưu. | 
            <span className="ml-2 flex items-center justify-center">
              Được thiết kế với <HiHeart className="w-4 h-4 text-red-500 mx-1" /> tại Việt Nam
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

