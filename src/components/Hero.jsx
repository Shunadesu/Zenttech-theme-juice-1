import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-mint-50 via-white to-lemon-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-mint-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-lemon-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-mint-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-mint-100 text-mint-700 rounded-full text-sm font-semibold mb-4">
                🌿 100% Tự nhiên
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
                Tươi mát
              </span>
              <br />
              từ thiên nhiên
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Khám phá hương vị tươi ngon của các loại nước ép tự nhiên, 
              được làm từ những nguyên liệu sạch nhất, mang đến năng lượng 
              và sức khỏe cho cuộc sống của bạn.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/order" className="btn-primary text-lg px-8 py-4">
                <span className="flex items-center justify-center">
                  🛒 Đặt hàng ngay
                </span>
              </Link>
              <Link to="/products" className="btn-secondary text-lg px-8 py-4">
                <span className="flex items-center justify-center">
                  😊 Xem sản phẩm
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-mint-600">100+</div>
                <div className="text-sm text-gray-500">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mint-600">50+</div>
                <div className="text-sm text-gray-500">Sản phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mint-600">5⭐</div>
                <div className="text-sm text-gray-500">Đánh giá</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-mint-100 to-mint-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  {/* Large Juice Image */}
                  <div className="w-64 h-80 mx-auto rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=400&fit=crop&crop=center&auto=format"
                      alt="Nước ép cam tươi"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-8xl" style={{display: 'none'}}>
                      🍊
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Nước ép cam tươi
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      100% tự nhiên, giàu vitamin C
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-mint-600">35.000đ</span>
                      <button className="bg-mint-500 hover:bg-mint-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-lemon-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-mint-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mint-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mint-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
