'use client';

import { useState } from 'react';

const categories = [
  'Media sân khấu - sự kiện',
  'I - TVC',
  'Short Film - MV',
  'Look Book - Concept',
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toId = (c: string) =>
    c
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

  return (
    <div className="min-h-screen text-white" id="top">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/14035-254146872.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sticky Header */}
        <header className="absolute top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <a href="#top" className="text-2xl font-extrabold tracking-widest">Triangle Team</a>
              <button
                className="sm:hidden p-2 rounded-md border border-white/20"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle navigation"
              >
                ☰
              </button>
              <nav className="hidden sm:flex items-center gap-2 md:gap-4">
                {categories.map(c => (
                  <a
                    key={c}
                    href={`#${toId(c)}`}
                    className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm bg-white/10 hover:bg-white/20 border border-white/10 transition-colors uppercase tracking-wider"
                  >
                    {c}
                  </a>
                ))}
              </nav>
              <a href="#" className="hidden sm:block px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 font-semibold text-sm transition-colors">
                VÀO HỌC
              </a>
            </div>
            {menuOpen && (
              <div className="sm:hidden pb-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map(c => (
                    <a
                      key={c}
                      href={`#${toId(c)}`}
                      className="px-3 py-2 rounded-full text-sm bg-white/10 hover:bg-white/20 border border-white/10 transition-colors uppercase tracking-wider"
                      onClick={() => setMenuOpen(false)}
                    >
                      {c}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 drop-shadow-lg" style={{ fontFamily: 'cursive' }}>
            Triangle Team
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              KHÓA HỌC CỦA TÔI
            </button>
            <button className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors">
              ĐĂNG KÝ HỌC
            </button>
          </div>

          {/* Sponsor Logos */}
          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap opacity-80">
            <span className="text-lg font-semibold">SONY</span>
            <span className="text-lg font-semibold">Canon</span>
            <span className="text-lg font-semibold">DJI</span>
            <span className="text-lg font-semibold">FUJIFILM</span>
            <span className="text-lg font-semibold">SAMSUNG</span>
            <span className="text-lg font-semibold">OPPO</span>
            <span className="text-lg font-semibold">MI</span>
            <span className="text-lg font-semibold">VTV</span>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="relative py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Dự án nổi bật', desc: 'Tổng hợp những video được đầu tư hình ảnh và storytelling của Triangle Team, sản xuất công nghệ hàng lên nhất hàng...' },
              { title: 'Short Video', desc: 'Những video ngắn được tạo ra với mục đích giải trí, đạt độ chất lượng cao và khác biệt cho thương hiệu...' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-800">
                  <img
                    src={`https://picsum.photos/seed/work-${idx}/800/600`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-teal-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">Sản phẩm</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Khóa học', desc: 'Dự bạn đang sử dụng điện thoại hay muốn nâng cao kỹ năng soạn video...' },
              { title: 'Presets & Luts', desc: 'Những preset được tạo ra để giúp bạn có thể mang đặc tính riêng...' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-2xl transition-shadow group cursor-pointer">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-800">
                  <img
                    src={`https://picsum.photos/seed/product-${idx}/800/600`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {[
              { number: '38,760', label: 'Facebook followers' },
              { number: '14,856', label: 'Instagram followers' },
              { number: '112,287', label: 'YouTube subscribers' },
              { number: '443,238', label: 'Tiktok followers' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Triangle Team nổi bật với phong cách quay và biên tập video độc đáo của mình, anh đã truyền cảm hứng cho rất nhiều bạn trẻ theo công việc sáng tạo nội dung. Từ khi bắt đầu sự nghiệp vào năm 2017, tài năng chính sửa video của mình đã mang lại cho anh nhiều cơ hội lớn như hợp tác với các thương hiệu toàn cầu: Sony, Canon, Fujifilm, DJI, Samsung, XiaoMi, Oppo... và nhiều thương hiệu khác.
            </p>
            <p>
              Mình nói tiếng Anh và không ngừng vuốt lên giới hàng sáng tạo của mình. Cho dù là một video du lịch, đạo diễn thiết bị hoặc quảng cáo video, người xem luôn có thể mong đợi anh sẽ tạo ra nội dung độc đáo và khác biệt cho thương hiệu. Hợp tác với mình có nghĩa là có cơ hội tiếp cận một trong những đạo diễn đam mê du lịch, sáng tạo trên internet hiện nay.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((c, idx) => (
        <section key={c} id={toId(c)} className="relative py-16 sm:py-24 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-widest mb-12 uppercase">{c}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-2xl transition-shadow group cursor-pointer">
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-800">
                    <img
                      src={`https://picsum.photos/seed/${idx + 1}-${n}/800/600`}
                      alt={`${c} ${n}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{c} {n}</h3>
                    <p className="text-sm text-gray-300 mt-2">Mô tả ngắn cho mục nội dung này.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Khóa học</a></li>
                <li><a href="#" className="hover:text-white transition">Presets & Luts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Khóa học</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Khóa học</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Presets & Luts</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Presets & Luts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 uppercase text-sm">Liên hệ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-2xl font-bold mb-4 sm:mb-0" style={{ fontFamily: 'cursive' }}>Triangle Team</div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">YouTube</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">TikTok</a>
                <a href="#" className="hover:text-white transition">Facebook</a>
              </div>
              <div className="text-sm text-gray-400 mt-4 sm:mt-0">contact@triangleteam.com</div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Triangle Team. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
