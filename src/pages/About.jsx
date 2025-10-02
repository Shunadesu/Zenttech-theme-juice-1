import React from 'react'
import { HiHeart, HiLightningBolt, HiShieldCheck, HiSparkles, HiUsers, HiStar, HiGlobe } from 'react-icons/hi'
import SEOHead from '../components/SEOHead.jsx'

const About = () => {
  const values = [
    {
      icon: <HiHeart className="w-8 h-8" />,
      title: "Tình yêu thiên nhiên",
      description: "Chúng tôi tin rằng thiên nhiên mang đến những điều tốt đẹp nhất cho sức khỏe con người."
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: "Năng lượng tích cực",
      description: "Mỗi ly nước ép đều được tạo ra với năng lượng tích cực và tâm huyết."
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Chất lượng đảm bảo",
      description: "Cam kết 100% nguyên liệu sạch, quy trình sản xuất an toàn và minh bạch."
    },
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "Sáng tạo không ngừng",
      description: "Luôn tìm tòi và phát triển những hương vị mới, phù hợp với khẩu vị Việt Nam."
    }
  ]

  const team = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc điều hành",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
      description: "Với hơn 10 năm kinh nghiệm trong ngành thực phẩm, anh A luôn đặt chất lượng lên hàng đầu."
    },
    {
      name: "Trần Thị B",
      position: "Chuyên gia dinh dưỡng",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face&auto=format",
      description: "Thạc sĩ Dinh dưỡng học, chuyên tư vấn về chế độ ăn uống lành mạnh."
    },
    {
      name: "Lê Văn C",
      position: "Trưởng phòng sản xuất",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format",
      description: "Chuyên gia về quy trình sản xuất, đảm bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Thành lập công ty",
      description: "Zenttech Juice được thành lập với sứ mệnh mang đến nước ép tươi ngon cho người Việt."
    },
    {
      year: "2021",
      title: "Mở rộng sản phẩm",
      description: "Phát triển thêm 20+ loại nước ép từ các loại trái cây và rau củ địa phương."
    },
    {
      year: "2022",
      title: "Chứng nhận hữu cơ",
      description: "Đạt chứng nhận hữu cơ quốc tế cho tất cả sản phẩm nước ép."
    },
    {
      year: "2023",
      title: "Mở rộng thị trường",
      description: "Mở thêm 5 cửa hàng tại TP.HCM và Hà Nội, phục vụ hơn 10,000 khách hàng."
    },
    {
      year: "2024",
      title: "Công nghệ mới",
      description: "Ứng dụng công nghệ ép lạnh để giữ nguyên dinh dưỡng và hương vị tự nhiên."
    }
  ]

  const stats = [
    { number: "50+", label: "Loại nước ép", icon: <HiSparkles className="w-6 h-6" /> },
    { number: "10K+", label: "Khách hàng", icon: <HiUsers className="w-6 h-6" /> },
    { number: "5★", label: "Đánh giá", icon: <HiStar className="w-6 h-6" /> },
    { number: "100%", label: "Tự nhiên", icon: <HiGlobe className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-white">
      <SEOHead 
        title="Về Chúng Tôi - Zenttech Juice"
        description="Tìm hiểu về Zenttech Juice - thương hiệu nước ép tươi ngon hàng đầu Việt Nam. Sứ mệnh 'Tươi mát từ thiên nhiên', cam kết chất lượng và sức khỏe."
        keywords="về chúng tôi, zenttech juice, thương hiệu nước ép, công ty nước ép, sứ mệnh, giá trị cốt lõi, đội ngũ, lịch sử phát triển"
        url="/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mint-500 to-mint-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Về chúng tôi
          </h1>
          <p className="text-xl text-mint-100 max-w-3xl mx-auto">
            Zenttech Juice - Nơi hương vị thiên nhiên gặp gỡ công nghệ hiện đại, 
            mang đến những ly nước ép tươi ngon nhất cho sức khỏe của bạn.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Từ một ý tưởng đơn giản về việc mang đến những ly nước ép tươi ngon 
                  cho gia đình, Zenttech Juice đã phát triển thành một thương hiệu 
                  được tin tưởng bởi hàng nghìn khách hàng.
                </p>
                <p>
                  Chúng tôi tin rằng mỗi ly nước ép không chỉ là một thức uống, 
                  mà còn là một món quà từ thiên nhiên, mang đến năng lượng 
                  và sức khỏe cho cuộc sống của bạn.
                </p>
                <p>
                  Với sứ mệnh "Tươi mát từ thiên nhiên", chúng tôi cam kết 
                  mang đến những sản phẩm chất lượng cao nhất, được làm từ 
                  nguyên liệu sạch và quy trình sản xuất an toàn.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-mint-100 to-mint-200 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center&auto=format"
                  alt="Về chúng tôi"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-80 bg-gradient-to-br from-mint-300 to-mint-500 rounded-2xl flex items-center justify-center text-6xl" style={{display: 'none'}}>
                  🥤
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-mint-50 to-mint-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-mint-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gradient-to-br from-mint-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con người tài năng và tâm huyết đằng sau Zenttech Juice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-mint-300 to-mint-500 flex items-center justify-center text-2xl" style={{display: 'none'}}>
                      👤
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-mint-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những cột mốc quan trọng trong quá trình xây dựng thương hiệu
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mint-200 to-mint-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-mint-500">
                      <div className="text-2xl font-bold text-mint-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-mint-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-mint-500 to-mint-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-mint-100 max-w-3xl mx-auto">
              Những con số thể hiện sự tin tưởng và ủng hộ từ khách hàng
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-mint-200 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-mint-100 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-mint-500 to-mint-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-xl text-mint-100 max-w-4xl mx-auto leading-relaxed mb-8">
              "Mang đến những ly nước ép tươi ngon nhất từ thiên nhiên, 
              góp phần xây dựng một cộng đồng khỏe mạnh và hạnh phúc. 
              Chúng tôi tin rằng mỗi sản phẩm không chỉ là thức uống, 
              mà còn là tình yêu và sự chăm sóc dành cho sức khỏe của bạn."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="bg-white text-mint-600 hover:bg-mint-50 font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                Khám phá sản phẩm
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-mint-600 font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
