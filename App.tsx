
import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, ArrowRight, Instagram, Youtube, X, MapPin, Truck, PenTool } from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { InquiryType } from './types';

// --- Header Component ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-stone/10 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-charcoal" />
            </button>
          </div>

          <a href="#" className="flex flex-col items-center group relative z-10">
            <span className="text-3xl font-serif font-bold tracking-tight text-moss">소장원</span>
            <span className="text-[10px] font-sans text-stone tracking-[0.3em] uppercase mt-2 group-hover:text-moss transition-colors">
              Sojangwon
            </span>
          </a>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-charcoal cursor-pointer hover:text-moss transition-colors" />
            <ShoppingBag className="w-5 h-5 text-charcoal cursor-pointer hover:text-moss transition-colors" />
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-cream z-[60] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-8 h-8 text-moss" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          {['Products', 'Classes', 'Exhibitions', 'Collaborations', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-charcoal hover:text-moss transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* Updated Image: Minimal Bonsai aesthetic */}
        <img 
          src="https://images.unsplash.com/photo-1612363228122-f6984e902b1f?q=80&w=2000&auto=format&fit=crop" 
          alt="Bonsai workspace" 
          className="w-full h-full object-cover opacity-90 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-cream/30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-transparent to-cream"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6 mt-12">
        <p className="text-stone tracking-[0.2em] mb-4 text-sm md:text-base font-medium">
          ARTIST: GUIYEON
        </p>
        <h1 className="text-6xl md:text-8xl font-serif font-medium text-charcoal mb-6 leading-tight break-keep">
          시간이 깃든 나무
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-stone/80 mb-12">
          Timed Plants, Made to Live Slowly
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" className="min-w-[180px]">Shop Collection</Button>
          <Button variant="outline" className="min-w-[180px] bg-cream/50 backdrop-blur-sm">Join Class</Button>
        </div>
      </div>
    </div>
  );
};

// --- Quick Tabs Section ---
const QuickTabs = () => {
  const tabs = [
    // Image: Bonsai Close-up (Pine/Juniper)
    { title: 'Products', desc: '도심 속 자연의 조각', img: 'https://images.unsplash.com/photo-1678726462006-2536b3c95971?q=80&w=800&auto=format&fit=crop' },
    // Image: Gardening Tools / Workshop
    { title: 'Classes', desc: '귀연의 원데이 클래스', img: 'https://images.unsplash.com/photo-1416879595881-1d7918286f12?q=80&w=800&auto=format&fit=crop' },
    // Image: Exhibition Space / Minimal
    { title: 'Exhibitions', desc: '빌딩 숲 속의 전시', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop' },
    // Image: Texture / Ceramics
    { title: 'Collaborations', desc: '현대적 감각의 조화', img: 'https://images.unsplash.com/photo-1463320726281-696a41370361?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tabs.map((tab, idx) => (
          <div key={idx} className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer shadow-md">
            <img 
              src={tab.img} 
              alt={tab.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss_dark/90 via-moss_dark/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-serif text-2xl mb-1">{tab.title}</h3>
              <p className="text-white/80 text-sm font-sans mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {tab.desc}
              </p>
              <div className="w-8 h-8 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Featured Section ---
const Featured = () => {
  const items = [
    // Image: Bonsai Silhouette / Product
    { type: 'Product', title: 'Urban Pine No.07', subtitle: '380,000 KRW', img: 'https://images.unsplash.com/photo-1579613103214-25e188e30a7e?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[4/5]' },
    // Image: Hands / Care
    { type: 'Class', title: 'Winter Care Class', subtitle: 'Every Sat/Sun in Dec', img: 'https://images.unsplash.com/photo-1621513222857-817c18151478?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[4/5]' },
    // Image: Nature / Exhibition mood
    { type: 'Exhibition', title: 'Time in City', subtitle: '2025.01.15–02.02', img: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1200&auto=format&fit=crop', aspect: 'aspect-[16/9] md:col-span-2' },
    // Image: Ceramics / Pot
    { type: 'Collab', title: 'Architect SUH Edition', subtitle: 'Structure Pot Collection', img: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=800&auto=format&fit=crop', aspect: 'aspect-[4/5]' },
  ];

  return (
    <Section className="bg-white/50 rounded-3xl my-10">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-moss mb-4">Featured</h2>
          <p className="text-stone max-w-md">
            소장원이 제안하는 이달의 주요 작품과 소식을 만나보세요.
          </p>
        </div>
        <Button variant="text" className="hidden md:inline-flex">View All</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className={`group cursor-pointer ${item.aspect === 'aspect-[16/9] md:col-span-2' ? 'md:col-span-2' : ''}`}>
            <div className={`relative overflow-hidden rounded-xl mb-4 ${item.aspect} bg-sand/30 shadow-sm`}>
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-moss">
                {item.type}
              </div>
            </div>
            <h3 className="text-2xl font-serif text-charcoal group-hover:text-moss transition-colors">{item.title}</h3>
            <p className="text-stone mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Philosophy Section ---
const Philosophy = () => {
  return (
    <div className="py-32 overflow-hidden bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-moss/20 text-[10vw] md:text-[12vw] font-serif leading-[0.8] tracking-tighter hover:text-moss transition-colors duration-700 select-none cursor-default">
            observe
          </span>
          <span className="text-moss/40 text-[10vw] md:text-[12vw] font-serif leading-[0.8] tracking-tighter hover:text-moss transition-colors duration-700 select-none ml-[15vw] cursor-default">
            craft
          </span>
          <span className="text-moss/20 text-[10vw] md:text-[12vw] font-serif leading-[0.8] tracking-tighter hover:text-moss transition-colors duration-700 select-none mr-[15vw] cursor-default">
            grow
          </span>
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl text-stone leading-relaxed font-serif break-keep">
            "자연의 리듬을 관찰하여 형태를 찾고,<br/> 
            시간을 들여 손으로 완성하며,<br/> 
            집 안의 시간이 함께 자라나도록 설계합니다."
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Story Section ---
const Story = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Card A: Class - Image: Detailed Juniper/Pine */}
        <div className="bg-[#EAE4D6] rounded-[40px] p-8 flex flex-col items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-b-[50%] -translate-y-12 transition-transform group-hover:-translate-y-8"></div>
          <div className="w-48 h-56 rounded-t-full overflow-hidden mb-6 relative z-10 shadow-lg mt-8">
            <img src="https://images.unsplash.com/photo-1599598424606-d50d0d885a67?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Class" />
          </div>
          <h3 className="text-2xl font-serif text-charcoal mb-2">Winter Class Open</h3>
          <p className="text-stone text-sm mb-6 flex-grow px-4 break-keep">
            겨울 시즌 수강생에게 분재 키트 20% 할인 혜택을 드립니다.
          </p>
          <Button variant="outline" className="bg-transparent border-charcoal text-charcoal hover:bg-charcoal hover:text-cream">
            Reserve Now
          </Button>
        </div>

        {/* Card B: Newsletter */}
        <div className="bg-moss rounded-[40px] p-8 flex flex-col items-center text-center text-cream relative overflow-hidden shadow-xl shadow-moss/20">
          <div className="w-full h-full absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 flex flex-col h-full justify-center items-center py-10">
            <h3 className="text-4xl font-serif mb-4">Stay in the Loop</h3>
            <p className="text-white/80 mb-8 max-w-xs break-keep">
              전시, 클래스, 협업 소식을 가장 먼저 받아보세요.
            </p>
            <div className="w-full max-w-xs bg-white/10 p-1.5 rounded-full flex backdrop-blur-sm border border-white/20">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent flex-grow px-4 outline-none text-white placeholder-white/50 text-sm"
              />
              <button className="bg-white text-moss rounded-full px-4 py-2 text-sm font-bold hover:bg-cream transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

        {/* Card C: Popup - Image: Urban Tree/City */}
        <div className="bg-white border border-sand rounded-[40px] p-8 flex flex-col items-center text-center relative overflow-hidden group">
           <div className="w-48 h-48 rounded-full overflow-hidden mb-6 mt-8 shadow-inner border-4 border-cream">
            <img src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Popup" />
          </div>
          <h3 className="text-2xl font-serif text-moss mb-2">We Pop Up!</h3>
          <p className="text-stone text-sm mb-6 flex-grow px-4 break-keep">
            소장원 × Architect SUH<br/>성수동 팝업 전시가 열립니다.
          </p>
          <Button variant="text">자세히 보기</Button>
        </div>
      </div>
    </Section>
  );
};

// --- Category Index ---
const CategoryIndex = () => {
  const categories = [
    { name: 'Bonsai', link: '#', sub: 'Minimal Pine, Maple' },
    { name: 'Editions', link: '#', sub: 'Limited Pots' },
    { name: 'Tools & Soil', link: '#', sub: 'Scissors, Tweezers' },
    { name: 'Books & Zines', link: '#', sub: 'Care Guides' },
    { name: 'Classes', link: '#', sub: 'One-day, Regular' },
    { name: 'Exhibitions', link: '#', sub: 'Past & Upcoming' },
    { name: 'Collaborations', link: '#', sub: 'With Artists' },
  ];

  return (
    <Section className="py-24">
      <div className="border-t border-b border-moss/20 py-12">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-16">
          {categories.map((cat, idx) => (
            <a key={idx} href={cat.link} className="group flex flex-col items-center">
              <span className="font-serif text-3xl md:text-5xl text-charcoal/80 group-hover:text-moss transition-colors duration-300">
                {cat.name}
              </span>
              <span className="text-xs text-stone mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300">
                {cat.sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- Bottom Utility ---
const BottomUtility = () => {
  return (
    <div className="bg-white py-16">
      <Section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-stone/20">
          <div className="text-center px-4 pt-8 md:pt-0">
            <div className="w-12 h-12 mx-auto bg-cream rounded-full flex items-center justify-center text-moss mb-4">
              <MapPin size={20} />
            </div>
            <h4 className="font-serif text-xl mb-2">Studio Pickup</h4>
            <p className="text-sm text-stone leading-relaxed break-keep">
              화~토 13:00–18:00<br/>
              서울시 성동구 성수동 1가 12-3<br/>
              <span className="text-moss text-xs">*현장 케어팁 제공</span>
            </p>
          </div>
          
          <div className="text-center px-4 pt-8 md:pt-0">
             <div className="w-12 h-12 mx-auto bg-cream rounded-full flex items-center justify-center text-moss mb-4">
              <Truck size={20} />
            </div>
            <h4 className="font-serif text-xl mb-2">Nationwide Delivery</h4>
            <p className="text-sm text-stone leading-relaxed break-keep">
              실내형 분재, 미니 화분류<br/>
              주문 후 3~5일 소요<br/>
              <span className="text-moss text-xs">*전용 안전 박스 포장</span>
            </p>
          </div>

          <div className="text-center px-4 pt-8 md:pt-0">
             <div className="w-12 h-12 mx-auto bg-cream rounded-full flex items-center justify-center text-moss mb-4">
              <PenTool size={20} />
            </div>
            <h4 className="font-serif text-xl mb-2">Commission Guide</h4>
            <p className="text-sm text-stone leading-relaxed break-keep">
              상담 → 견적 → 제작 (2~6주)<br/>
              공간 맞춤형 분재 의뢰<br/>
              <a href="#" className="underline text-moss text-xs">가이드 다운로드</a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- Contact Form ---
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: InquiryType.PURCHASE,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. (Demo)');
  };

  return (
    <Section id="contact" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto bg-[#FAF7F2] border border-stone/10 p-8 md:p-12 rounded-3xl shadow-xl shadow-stone/5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-moss mb-4">Let's Talk</h2>
          <p className="text-stone break-keep">
            소장원과의 협업, 클래스, 작품 구매 문의를 남겨주세요.<br/>
            귀연이 직접 확인 후 회신드립니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone uppercase tracking-wide">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white border-b-2 border-stone/20 px-4 py-3 outline-none focus:border-moss transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-white border-b-2 border-stone/20 px-4 py-3 outline-none focus:border-moss transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-stone uppercase tracking-wide">Inquiry Type</label>
            <div className="relative">
              <select 
                className="w-full bg-white border-b-2 border-stone/20 px-4 py-3 outline-none focus:border-moss appearance-none cursor-pointer"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value as InquiryType})}
              >
                {Object.values(InquiryType).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone">
                <ArrowRight size={14} className="rotate-90" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-stone uppercase tracking-wide">Message</label>
            <textarea 
              rows={5}
              required
              className="w-full bg-white border-b-2 border-stone/20 px-4 py-3 outline-none focus:border-moss resize-none transition-colors"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="pt-4 text-center">
            <Button variant="primary" className="w-full md:w-auto min-w-[200px]">Send Message</Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8 text-xs text-stone/60 pt-6 border-t border-stone/10">
            <span>sojangwon@gmail.com</span>
            <span>@sojangwon</span>
            <span>Kakao: 귀연 | 소장원</span>
          </div>
        </form>
      </div>
    </Section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-charcoal text-[#FAF7F2] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="text-4xl font-serif font-bold text-moss block mb-6">소장원</a>
            <p className="text-white/70 max-w-sm leading-relaxed break-keep">
              소장원은 분재를 통해 자연의 리듬과 인간의 시간을 연결하는 디자인 스튜디오입니다.
              <br/><br/>
              Artist 귀연은 느림의 미학을 연구하며, 식물을 통해 형태와 시간을 조형하는 나무 디자이너입니다.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-moss hover:border-moss transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-moss hover:border-moss transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="font-serif text-lg mb-6 text-moss">Menu</h4>
             <ul className="space-y-3 text-white/60">
               <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Classes</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Exhibitions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Collaborations</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-serif text-lg mb-6 text-moss">Support</h4>
             <ul className="space-y-3 text-white/60">
               <li><a href="#" className="hover:text-white transition-colors">교환 및 환불</a></li>
               <li><a href="#" className="hover:text-white transition-colors">케어 가이드</a></li>
               <li><a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2025 소장원 (Sojangwon). All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Designed by Guiyeon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Layout Assembly ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal selection:bg-moss selection:text-white">
      {/* Decorative Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-noise z-[1]"></div>
      
      <div className="relative z-[2]">
        <Header />
        <main>
          <Hero />
          <QuickTabs />
          <Featured />
          <Philosophy />
          <Story />
          <CategoryIndex />
          <BottomUtility />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
