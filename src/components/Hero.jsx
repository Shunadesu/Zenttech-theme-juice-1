import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Zent Tech Juice
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Khám phá hương vị tươi mới với những ly nước ép trái cây tự nhiên, 
          được chế biến từ những nguyên liệu tươi ngon nhất.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Đặt hàng ngay
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition duration-300">
            Xem menu
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
