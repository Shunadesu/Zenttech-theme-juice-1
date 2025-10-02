import React, { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import SEOHead from '../components/SEOHead.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Xử lý gửi form
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      <SEOHead 
        title="Liên Hệ - Zenttech Juice"
        description="Liên hệ Zenttech Juice để đặt hàng nước ép tươi ngon. Hotline: +84 123 456 789, Email: info@zenttechjuice.com. Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM."
        keywords="liên hệ, đặt hàng nước ép, hotline, email, địa chỉ, zenttech juice, tư vấn, hỗ trợ khách hàng"
        url="/contact"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mint-500 to-mint-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-mint-100 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin để chúng tôi có thể liên hệ lại.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi tin nhắn</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                    placeholder="Nhập email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chủ đề
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="order">Đặt hàng</option>
                    <option value="product">Sản phẩm</option>
                    <option value="delivery">Giao hàng</option>
                    <option value="complaint">Khiếu nại</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tin nhắn *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors resize-none"
                  placeholder="Nhập tin nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông tin liên hệ</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-mint-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">
                      123 Đường ABC, Quận 1<br />
                      TP. Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiPhone className="w-6 h-6 text-mint-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Điện thoại</h3>
                    <p className="text-gray-600">+84 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-6 h-6 text-mint-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@zenttechjuice.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiClock className="w-6 h-6 text-mint-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Giờ làm việc</h3>
                    <p className="text-gray-600">
                      Thứ 2 - Chủ nhật: 8:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Theo dõi chúng tôi</h2>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaFacebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaTwitter className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-mint-600 hover:bg-mint-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaPinterest className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Vị trí cửa hàng</h2>
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker className="w-12 h-12 text-mint-600 mx-auto mb-2" />
                  <p className="text-gray-600">Bản đồ sẽ được hiển thị tại đây</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
