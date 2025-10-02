import React, { useState } from 'react'
import { HiShoppingCart, HiPlus, HiMinus, HiCheck, HiStar, HiGift, HiClock } from 'react-icons/hi'
import SEOHead from '../components/SEOHead.jsx'

const Combo = () => {
  const [selectedCombo, setSelectedCombo] = useState(null)
  const [quantities, setQuantities] = useState({})

  const combos = [
    {
      id: 1,
      name: "Combo Sức Khỏe",
      description: "Bộ sưu tập nước ép tốt cho sức khỏe tổng thể",
      originalPrice: 240000,
      salePrice: 199000,
      discount: 17,
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center&auto=format",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      products: [
        { name: "Nước ép cam tươi", price: 35000, image: "🍊" },
        { name: "Nước ép cà rốt", price: 32000, image: "🥕" },
        { name: "Nước ép táo xanh", price: 40000, image: "🍏" },
        { name: "Nước ép dưa hấu", price: 30000, image: "🍉" },
        { name: "Nước ép nho đỏ", price: 45000, image: "🍇" },
        { name: "Nước ép dứa", price: 38000, image: "🍍" }
      ],
      benefits: ["Tăng cường miễn dịch", "Tốt cho tim mạch", "Làm đẹp da", "Giải độc cơ thể"],
      popular: true
    },
    {
      id: 2,
      name: "Combo Giảm Cân",
      description: "Hỗ trợ giảm cân an toàn và hiệu quả",
      originalPrice: 200000,
      salePrice: 169000,
      discount: 15,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&crop=center&auto=format",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      products: [
        { name: "Nước ép dưa hấu", price: 30000, image: "🍉" },
        { name: "Nước ép táo xanh", price: 40000, image: "🍏" },
        { name: "Nước ép dứa", price: 38000, image: "🍍" },
        { name: "Nước ép cà rốt", price: 32000, image: "🥕" },
        { name: "Nước ép dâu tây", price: 42000, image: "🍓" }
      ],
      benefits: ["Đốt cháy mỡ thừa", "Tăng cường trao đổi chất", "Giảm cảm giác thèm ăn", "Cung cấp năng lượng"],
      popular: false
    },
    {
      id: 3,
      name: "Combo Làm Đẹp",
      description: "Chăm sóc da và tóc từ bên trong",
      originalPrice: 220000,
      salePrice: 189000,
      discount: 14,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&crop=center&auto=format",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      products: [
        { name: "Nước ép cà rốt", price: 32000, image: "🥕" },
        { name: "Nước ép dâu tây", price: 42000, image: "🍓" },
        { name: "Nước ép nho đỏ", price: 45000, image: "🍇" },
        { name: "Nước ép cam tươi", price: 35000, image: "🍊" },
        { name: "Nước ép xoài", price: 36000, image: "🥭" }
      ],
      benefits: ["Làm đẹp da", "Chống lão hóa", "Tăng cường collagen", "Cải thiện tóc"],
      popular: false
    },
    {
      id: 4,
      name: "Combo Năng Lượng",
      description: "Tăng cường năng lượng cho ngày làm việc",
      originalPrice: 180000,
      salePrice: 159000,
      discount: 12,
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&crop=center&auto=format",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      products: [
        { name: "Nước ép cam tươi", price: 35000, image: "🍊" },
        { name: "Nước ép xoài", price: 36000, image: "🥭" },
        { name: "Nước ép dứa", price: 38000, image: "🍍" },
        { name: "Nước ép táo xanh", price: 40000, image: "🍏" }
      ],
      benefits: ["Tăng cường năng lượng", "Cải thiện tập trung", "Giảm mệt mỏi", "Tăng sức bền"],
      popular: true
    }
  ]

  const updateQuantity = (comboId, change) => {
    setQuantities(prev => ({
      ...prev,
      [comboId]: Math.max(0, (prev[comboId] || 0) + change)
    }))
  }

  const getTotalPrice = () => {
    return Object.entries(quantities).reduce((total, [comboId, quantity]) => {
      const combo = combos.find(c => c.id === parseInt(comboId))
      return total + (combo ? combo.salePrice * quantity : 0)
    }, 0)
  }

  const getTotalItems = () => {
    return Object.values(quantities).reduce((total, quantity) => total + quantity, 0)
  }

  const handleOrder = () => {
    const selectedItems = Object.entries(quantities)
      .filter(([_, quantity]) => quantity > 0)
      .map(([comboId, quantity]) => {
        const combo = combos.find(c => c.id === parseInt(comboId))
        return { ...combo, quantity }
      })

    if (selectedItems.length === 0) {
      alert('Vui lòng chọn ít nhất một combo!')
      return
    }

    console.log('Combo order:', selectedItems)
    alert(`Đặt hàng thành công! Tổng cộng ${getTotalItems()} combo với giá ${getTotalPrice().toLocaleString()}đ`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      <SEOHead 
        title="Combo Nước Ép Tiết Kiệm"
        description="Đặt combo nước ép tiết kiệm 12-17%: Combo Sức Khỏe, Combo Giảm Cân, Combo Làm Đẹp, Combo Năng Lượng. Nguyên liệu sạch, giao hàng tận nơi."
        keywords="combo nước ép, combo sức khỏe, combo giảm cân, combo làm đẹp, combo năng lượng, tiết kiệm, đặt hàng combo, nước ép tươi"
        url="/combo"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mint-500 to-mint-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Đặt combo ngay
          </h1>
          <p className="text-xl text-mint-100 max-w-3xl mx-auto">
            Tiết kiệm hơn với các gói combo được thiết kế đặc biệt, 
            mang đến hương vị đa dạng và lợi ích sức khỏe tối ưu.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Combo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {combos.map((combo) => (
            <div key={combo.id} className={`${combo.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative`}>
              {/* Popular Badge */}
              {combo.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  <HiStar className="w-4 h-4 mr-1" />
                  Phổ biến
                </div>
              )}

              {/* Combo Image */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={combo.image} 
                    alt={combo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${combo.color} flex items-center justify-center text-4xl`} style={{display: 'none'}}>
                    🥤
                  </div>
                </div>
              </div>

              {/* Combo Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {combo.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {combo.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-mint-600">
                      {combo.salePrice.toLocaleString()}đ
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {combo.originalPrice.toLocaleString()}đ
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{combo.discount}%
                    </span>
                  </div>
                </div>

                {/* Products List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Bao gồm:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {combo.products.map((product, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-lg">{product.image}</span>
                        <span className="text-gray-700">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Lợi ích:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {combo.benefits.map((benefit, index) => (
                      <span key={index} className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-gray-700">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <button
                    onClick={() => updateQuantity(combo.id, -1)}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <HiMinus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-bold w-8 text-center">
                    {quantities[combo.id] || 0}
                  </span>
                  <button
                    onClick={() => updateQuantity(combo.id, 1)}
                    className="w-10 h-10 bg-mint-500 hover:bg-mint-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <HiPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sticky bottom-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Tóm tắt đơn hàng
              </h3>
              <p className="text-gray-600">
                {getTotalItems()} combo được chọn
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center sm:text-right">
                <div className="text-3xl font-bold text-mint-600">
                  {getTotalPrice().toLocaleString()}đ
                </div>
                <div className="text-sm text-gray-500">
                  Tiết kiệm: {Object.entries(quantities).reduce((total, [comboId, quantity]) => {
                    const combo = combos.find(c => c.id === parseInt(comboId))
                    return total + (combo ? (combo.originalPrice - combo.salePrice) * quantity : 0)
                  }, 0).toLocaleString()}đ
                </div>
              </div>

              <button
                onClick={handleOrder}
                disabled={getTotalItems() === 0}
                className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center"
              >
                <HiShoppingCart className="w-5 h-5 mr-2" />
                {getTotalItems() === 0 ? 'Chọn combo' : 'Đặt hàng ngay'}
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Combo */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tại sao nên chọn combo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lợi ích đặc biệt khi đặt combo từ Zenttech Juice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiGift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tiết kiệm chi phí
              </h3>
              <p className="text-gray-600">
                Giảm giá từ 12-17% so với mua lẻ từng sản phẩm
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Được chọn lọc
              </h3>
              <p className="text-gray-600">
                Mỗi combo được thiết kế để mang lại lợi ích tối ưu
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tiện lợi
              </h3>
              <p className="text-gray-600">
                Đặt một lần, thưởng thức đa dạng hương vị
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Combo
