import React, { useState } from 'react'
import { HiShoppingCart, HiPlus, HiMinus, HiTrash, HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import SEOHead from '../components/SEOHead.jsx'

const Order = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Nước ép cam tươi",
      price: 35000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=100&h=100&fit=crop&crop=center&auto=format"
    },
    {
      id: 2,
      name: "Nước ép táo xanh",
      price: 40000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=100&h=100&fit=crop&crop=center&auto=format"
    }
  ])

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    note: ''
  })

  const [deliveryMethod, setDeliveryMethod] = useState('delivery')
  const [paymentMethod, setPaymentMethod] = useState('cash')

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getDeliveryFee = () => {
    return deliveryMethod === 'delivery' ? 15000 : 0
  }

  const getFinalTotal = () => {
    return getTotalPrice() + getDeliveryFee()
  }

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert('Giỏ hàng trống!')
      return
    }
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!')
      return
    }
    
    const orderData = {
      cart,
      customerInfo,
      deliveryMethod,
      paymentMethod,
      total: getFinalTotal()
    }
    
    console.log('Order submitted:', orderData)
    alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ lại sớm nhất có thể.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      <SEOHead 
        title="Đặt Hàng Nước Ép - Zenttech Juice"
        description="Đặt hàng nước ép tươi ngon online dễ dàng. Chọn sản phẩm, điền thông tin giao hàng, thanh toán an toàn. Giao hàng tận nơi TP.HCM & Hà Nội."
        keywords="đặt hàng nước ép, mua nước ép online, giỏ hàng, thanh toán, giao hàng tận nơi, đặt hàng online, zenttech juice"
        url="/order"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mint-500 to-mint-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Đặt hàng ngay
          </h1>
          <p className="text-xl text-mint-100 max-w-2xl mx-auto">
            Chọn sản phẩm yêu thích và đặt hàng để thưởng thức hương vị tươi ngon từ thiên nhiên.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <HiShoppingCart className="w-6 h-6 mr-2 text-mint-600" />
                Giỏ hàng ({cart.length} sản phẩm)
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Giỏ hàng trống
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Hãy thêm sản phẩm vào giỏ hàng để đặt hàng
                  </p>
                  <a href="/products" className="btn-primary">
                    Xem sản phẩm
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-16 h-16 bg-gradient-to-br from-mint-300 to-mint-500 rounded-lg flex items-center justify-center text-2xl" style={{display: 'none'}}>
                        🥤
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-mint-600 font-bold">{item.price.toLocaleString()}đ</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          <HiMinus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-mint-500 hover:bg-mint-600 text-white rounded-full flex items-center justify-center transition-colors"
                        >
                          <HiPlus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-gray-800">
                          {(item.price * item.quantity).toLocaleString()}đ
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <HiTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông tin giao hàng</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
                    placeholder="Nhập email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Địa chỉ giao hàng *
                  </label>
                  <textarea
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors resize-none"
                    placeholder="Nhập địa chỉ chi tiết"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ghi chú
                  </label>
                  <textarea
                    name="note"
                    value={customerInfo.note}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors resize-none"
                    placeholder="Ghi chú thêm cho đơn hàng"
                  />
                </div>

                {/* Delivery Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Phương thức giao hàng
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        value="delivery"
                        checked={deliveryMethod === 'delivery'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="mr-3"
                      />
                      <span>Giao hàng tận nơi (+15.000đ)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        value="pickup"
                        checked={deliveryMethod === 'pickup'}
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        className="mr-3"
                      />
                      <span>Tự lấy tại cửa hàng</span>
                    </label>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Phương thức thanh toán
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <span>Thanh toán khi nhận hàng</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={paymentMethod === 'bank'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <span>Chuyển khoản ngân hàng</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tóm tắt đơn hàng</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Tạm tính:</span>
                    <span className="font-semibold">{getTotalPrice().toLocaleString()}đ</span>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Phí giao hàng:</span>
                    <span className="font-semibold">
                      {getDeliveryFee() === 0 ? 'Miễn phí' : `${getDeliveryFee().toLocaleString()}đ`}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Tổng cộng:</span>
                      <span className="text-mint-600">{getFinalTotal().toLocaleString()}đ</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={cart.length === 0}
                className="w-full bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none"
              >
                {cart.length === 0 ? 'Giỏ hàng trống' : 'Đặt hàng ngay'}
              </button>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Liên hệ hỗ trợ</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <HiPhone className="w-4 h-4 mr-2 text-mint-600" />
                    <span>+84 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <HiMail className="w-4 h-4 mr-2 text-mint-600" />
                    <span>info@zenttechjuice.com</span>
                  </div>
                  <div className="flex items-center">
                    <HiLocationMarker className="w-4 h-4 mr-2 text-mint-600" />
                    <span>123 Đường ABC, Quận 1, TP.HCM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
