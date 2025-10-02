import React from 'react';

const Ingredients = () => {
  const features = [
    {
      icon: "🌱",
      title: "Nguyên liệu hữu cơ",
      description: "Chúng tôi chỉ sử dụng trái cây và rau củ hữu cơ, không có thuốc trừ sâu và hóa chất độc hại."
    },
    {
      icon: "🚚",
      title: "Vận chuyển tươi",
      description: "Nguyên liệu được vận chuyển trong vòng 24h từ nông trại đến cửa hàng để đảm bảo độ tươi ngon."
    },
    {
      icon: "⚡",
      title: "Ép tươi hàng ngày",
      description: "Mỗi ngày chúng tôi ép tươi tất cả sản phẩm, không sử dụng chất bảo quản hay phụ gia."
    },
    {
      icon: "🔬",
      title: "Kiểm tra chất lượng",
      description: "Mọi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt trước khi đến tay khách hàng."
    },
    {
      icon: "💧",
      title: "Nước tinh khiết",
      description: "Sử dụng nước tinh khiết RO để đảm bảo hương vị thuần khiết và an toàn cho sức khỏe."
    },
    {
      icon: "🌍",
      title: "Thân thiện môi trường",
      description: "Bao bì thân thiện với môi trường, có thể tái chế 100% để bảo vệ hành tinh xanh."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Chọn lọc nguyên liệu",
      description: "Chọn lọc kỹ càng những trái cây tươi ngon nhất từ các nông trại uy tín."
    },
    {
      step: "02", 
      title: "Rửa sạch và sơ chế",
      description: "Rửa sạch bằng nước tinh khiết và sơ chế cẩn thận để loại bỏ tạp chất."
    },
    {
      step: "03",
      title: "Ép tươi ngay lập tức",
      description: "Ép tươi ngay sau khi sơ chế để giữ nguyên hương vị và dinh dưỡng."
    },
    {
      step: "04",
      title: "Đóng gói và bảo quản",
      description: "Đóng gói trong bao bì thân thiện môi trường và bảo quản ở nhiệt độ thích hợp."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-mint-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent">
              Nguyên liệu
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent ml-4">
              sạch & tự nhiên
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến những sản phẩm nước ép chất lượng cao nhất, 
            được làm từ nguyên liệu sạch và quy trình sản xuất an toàn.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-mint-100"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-mint-500 to-mint-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Quy trình sản xuất
            </h3>
            <p className="text-mint-100 text-lg max-w-2xl mx-auto">
              Từ nguyên liệu tươi ngon đến sản phẩm hoàn thiện, 
              mỗi bước đều được thực hiện với sự cẩn thận và tâm huyết.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/30 transform translate-x-4"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-mint-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600">Tự nhiên</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-2">
              0%
            </div>
            <div className="text-gray-600">Chất bảo quản</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-lemon-500 to-lemon-700 bg-clip-text text-transparent mb-2">
              24h
            </div>
            <div className="text-gray-600">Tươi ngon</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-mint-600 to-mint-800 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600">Nông trại đối tác</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;

