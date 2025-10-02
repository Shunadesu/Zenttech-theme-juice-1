import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart, HiClock } from 'react-icons/hi'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Nước ép cam tươi",
      description: "Cam tươi 100% tự nhiên, giàu vitamin C",
      price: "35.000đ",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      benefits: ["Vitamin C", "Tăng sức đề kháng", "Tươi ngon"]
    },
    {
      id: 2,
      name: "Nước ép táo xanh",
      description: "Táo xanh tươi mát, tốt cho tiêu hóa",
      price: "40.000đ",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-mint-400 to-mint-600",
      bgColor: "bg-mint-50",
      benefits: ["Chất xơ", "Tốt cho tiêu hóa", "Ít đường"]
    },
    {
      id: 3,
      name: "Nước ép dứa",
      description: "Dứa thơm ngon, giải nhiệt mùa hè",
      price: "38.000đ",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-lemon-400 to-lemon-600",
      bgColor: "bg-lemon-50",
      benefits: ["Bromelain", "Giải nhiệt", "Thơm ngon"]
    },
    {
      id: 4,
      name: "Nước ép cà rốt",
      description: "Cà rốt tươi, tốt cho mắt và da",
      price: "32.000đ",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-orange-300 to-orange-500",
      bgColor: "bg-orange-50",
      benefits: ["Beta-carotene", "Tốt cho mắt", "Làm đẹp da"]
    },
    {
      id: 5,
      name: "Nước ép dưa hấu",
      description: "Dưa hấu mát lạnh, giải khát tuyệt vời",
      price: "30.000đ",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-mint-300 to-mint-500",
      bgColor: "bg-mint-50",
      benefits: ["Giải khát", "Mát lạnh", "Ít calo"]
    },
    {
      id: 6,
      name: "Nước ép nho đỏ",
      description: "Nho đỏ thơm ngon, chống oxy hóa",
      price: "45.000đ",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      benefits: ["Chống oxy hóa", "Tốt cho tim", "Thơm ngon"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white to-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
              Sản phẩm
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent ml-4">
              nổi bật
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập nước ép tươi ngon, được làm từ những nguyên liệu 
            tự nhiên tốt nhất, mang đến hương vị tuyệt vời và lợi ích sức khỏe.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} rounded-3xl p-6 card-hover shadow-lg border border-white/50`}
            >
              {/* Product Image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${product.color} flex items-center justify-center text-4xl`} style={{display: 'none'}}>
                    {product.name.includes('cam') ? '🍊' : 
                     product.name.includes('táo') ? '🍏' : 
                     product.name.includes('dứa') ? '🍍' : 
                     product.name.includes('cà rốt') ? '🥕' : 
                     product.name.includes('dưa hấu') ? '🍉' : 
                     product.name.includes('nho') ? '🍇' : '🥤'}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-gray-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    <span className="flex items-center">
                      <HiShoppingCart className="w-4 h-4 mr-1" />
                      Mua ngay
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-mint-500 to-mint-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Muốn thử tất cả hương vị?
            </h3>
            <p className="text-mint-100 mb-6 max-w-2xl mx-auto">
              Đặt combo 6 loại nước ép với giá ưu đãi đặc biệt. 
              Trải nghiệm đầy đủ hương vị tươi ngon từ thiên nhiên.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-3xl font-bold">199.000đ</div>
              <div className="text-mint-200 line-through">240.000đ</div>
              <Link to="/combo" className="btn-secondary">
                <span className="flex items-center">
                  <HiClock className="w-5 h-5 mr-2" />
                  Đặt combo ngay
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
