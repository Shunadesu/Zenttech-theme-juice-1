import React, { useState, useMemo } from 'react'
import { HiShoppingCart, HiSearch, HiFilter, HiX } from 'react-icons/hi'
import SEOHead from '../components/SEOHead.jsx'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: 1,
      name: "Nước ép cam tươi",
      description: "Cam tươi 100% tự nhiên, giàu vitamin C",
      price: 35000,
      category: "citrus",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      benefits: ["Vitamin C", "Tăng sức đề kháng", "Tươi ngon"]
    },
    {
      id: 2,
      name: "Nước ép táo xanh",
      description: "Táo xanh tươi mát, tốt cho tiêu hóa",
      price: 40000,
      category: "apple",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-mint-400 to-mint-600",
      bgColor: "bg-mint-50",
      benefits: ["Chất xơ", "Tốt cho tiêu hóa", "Ít đường"]
    },
    {
      id: 3,
      name: "Nước ép dứa",
      description: "Dứa thơm ngon, giải nhiệt mùa hè",
      price: 38000,
      category: "tropical",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-lemon-400 to-lemon-600",
      bgColor: "bg-lemon-50",
      benefits: ["Bromelain", "Giải nhiệt", "Thơm ngon"]
    },
    {
      id: 4,
      name: "Nước ép cà rốt",
      description: "Cà rốt tươi, tốt cho mắt và da",
      price: 32000,
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-orange-300 to-orange-500",
      bgColor: "bg-orange-50",
      benefits: ["Beta-carotene", "Tốt cho mắt", "Làm đẹp da"]
    },
    {
      id: 5,
      name: "Nước ép dưa hấu",
      description: "Dưa hấu mát lạnh, giải khát tuyệt vời",
      price: 30000,
      category: "summer",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-mint-300 to-mint-500",
      bgColor: "bg-mint-50",
      benefits: ["Giải khát", "Mát lạnh", "Ít calo"]
    },
    {
      id: 6,
      name: "Nước ép nho đỏ",
      description: "Nho đỏ thơm ngon, chống oxy hóa",
      price: 45000,
      category: "grape",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      benefits: ["Chống oxy hóa", "Tốt cho tim", "Thơm ngon"]
    },
    {
      id: 7,
      name: "Nước ép dâu tây",
      description: "Dâu tây ngọt ngào, giàu chất chống oxy hóa",
      price: 42000,
      category: "berry",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      benefits: ["Chống oxy hóa", "Vitamin C", "Ngọt ngào"]
    },
    {
      id: 8,
      name: "Nước ép xoài",
      description: "Xoài thơm ngon, giàu vitamin A",
      price: 36000,
      category: "tropical",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center&auto=format",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      benefits: ["Vitamin A", "Thơm ngon", "Tăng cường miễn dịch"]
    }
  ]

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'citrus', label: 'Cam quýt' },
    { value: 'apple', label: 'Táo' },
    { value: 'tropical', label: 'Nhiệt đới' },
    { value: 'vegetable', label: 'Rau củ' },
    { value: 'summer', label: 'Mùa hè' },
    { value: 'grape', label: 'Nho' },
    { value: 'berry', label: 'Quả mọng' }
  ]

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-30':
          filtered = filtered.filter(product => product.price < 30000)
          break
        case '30-40':
          filtered = filtered.filter(product => product.price >= 30000 && product.price <= 40000)
          break
        case 'over-40':
          filtered = filtered.filter(product => product.price > 40000)
          break
        default:
          break
      }
    }

    // Sort
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return filtered
  }, [searchTerm, selectedCategory, priceRange, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setPriceRange('all')
    setSortBy('name')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      <SEOHead 
        title="Sản Phẩm Nước Ép Tươi Ngon"
        description="Khám phá bộ sưu tập nước ép tươi ngon đa dạng: cam, táo, dứa, cà rốt, dưa hấu, nho. Nguyên liệu sạch 100% tự nhiên, tốt cho sức khỏe. Đặt hàng online dễ dàng."
        keywords="nước ép tươi, nước ép cam, nước ép táo, nước ép dứa, nước ép cà rốt, nước ép dưa hấu, nước ép nho, đồ uống healthy, vitamin C, chất chống oxy hóa"
        url="/products"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mint-500 to-mint-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sản phẩm nước ép
          </h1>
          <p className="text-xl text-mint-100 max-w-2xl mx-auto">
            Khám phá bộ sưu tập nước ép tươi ngon, được làm từ những nguyên liệu tự nhiên tốt nhất.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-mint-100 text-mint-700 rounded-lg hover:bg-mint-200 transition-colors"
            >
              <HiFilter className="w-5 h-5" />
              <span>Bộ lọc</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Danh mục
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Giá
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
                  >
                    <option value="all">Tất cả</option>
                    <option value="under-30">Dưới 30.000đ</option>
                    <option value="30-40">30.000đ - 40.000đ</option>
                    <option value="over-40">Trên 40.000đ</option>
                  </select>
                </div>

                {/* Sort Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sắp xếp
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
                  >
                    <option value="name">Theo tên</option>
                    <option value="price-low">Giá thấp đến cao</option>
                    <option value="price-high">Giá cao đến thấp</option>
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <HiX className="w-4 h-4" />
                  <span>Xóa bộ lọc</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Hiển thị {filteredProducts.length} sản phẩm
            {searchTerm && ` cho "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} rounded-3xl p-6 card-hover shadow-lg border border-white/50`}
            >
              {/* Product Image */}
              <div className="text-center mb-4">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`w-full h-full bg-gradient-to-br ${product.color} flex items-center justify-center text-3xl`} style={{display: 'none'}}>
                    {product.name.includes('cam') ? '🍊' : 
                     product.name.includes('táo') ? '🍏' : 
                     product.name.includes('dứa') ? '🍍' : 
                     product.name.includes('cà rốt') ? '🥕' : 
                     product.name.includes('dưa hấu') ? '🍉' : 
                     product.name.includes('nho') ? '🍇' : 
                     product.name.includes('dâu') ? '🍓' : 
                     product.name.includes('xoài') ? '🥭' : '🥤'}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/70 rounded-full text-xs font-medium text-gray-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
                    {product.price.toLocaleString()}đ
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">
                    <span className="flex items-center">
                      <HiShoppingCart className="w-4 h-4 mr-1" />
                      Mua
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-gray-500 mb-4">
              Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
            <button
              onClick={clearFilters}
              className="btn-primary"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
