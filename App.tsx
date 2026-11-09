import { useEffect, useState } from 'react';

function GirlWithLotus() {
  return (
    <svg className="girl-svg" viewBox="0 0 220 330" role="img" aria-label="Cô gái đội nón lá cầm hoa sen, minh họa SVG">
      <defs>
        <linearGradient id="ao" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#b94f37" /><stop offset="1" stopColor="#85352b" /></linearGradient>
        <linearGradient id="non" x1="0" x2="1"><stop stopColor="#f4ddb0" /><stop offset="1" stopColor="#cba56d" /></linearGradient>
      </defs>
      <ellipse cx="107" cy="316" rx="58" ry="9" fill="#3b2412" opacity=".18" />
      <path d="M81 142c-16 34-17 79-8 119h70c7-40 6-84-9-119z" fill="url(#ao)" stroke="#6b2b25" strokeWidth="3" />
      <path d="M76 163c-16 25-26 51-31 78M137 163c14 29 22 55 26 78" fill="none" stroke="#8b352b" strokeWidth="17" strokeLinecap="round" />
      <path d="M76 237c14 14 28 20 69 0l-4 70H75z" fill="#e5c58e" stroke="#91693c" strokeWidth="3" />
      <path d="M82 307l-5 9M126 307l8 9" stroke="#3b2412" strokeWidth="7" strokeLinecap="round" />
      <circle cx="108" cy="114" r="37" fill="#c8875f" stroke="#6b4a2e" strokeWidth="3" />
      <path d="M79 108c7-23 53-28 63 4-6-5-13-8-21-8-15 0-26 7-42 4z" fill="#2f3521" />
      <path d="M76 105L110 38l45 72c-25 11-55 10-79-5z" fill="url(#non)" stroke="#8a6a22" strokeWidth="3" />
      <path d="M110 39v66M91 52l18 53M131 54l-21 51" stroke="#b1844f" strokeWidth="2" opacity=".65" />
      <path d="M94 123q14 9 28 0" fill="none" stroke="#6b2b25" strokeWidth="2" strokeLinecap="round" />
      <circle cx="94" cy="112" r="2.5" fill="#3b2412" /><circle cx="123" cy="112" r="2.5" fill="#3b2412" />
      <path d="M55 201C76 225 88 242 103 273" fill="none" stroke="#6d8a52" strokeWidth="4" />
      <path d="M55 212c-16-12-23-4-28 8 13 5 22 2 28-8zM70 232c15-14 25-5 29 7-13 5-22 2-29-7z" fill="#617548" />
      <path d="M49 188c-10-11-9-27 5-34 14 7 16 22 6 34z" fill="#e98ca1" stroke="#a84868" strokeWidth="2" />
      <path d="M55 188c2-14 2-23-1-34M55 188c7-12 11-19 15-24M55 188c-7-10-12-16-18-20" stroke="#a84868" strokeWidth="2" fill="none" />
    </svg>
  );
}

function LotusMark() {
  return <span className="lotus-mark" aria-hidden="true">✾</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -45px' });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Về đầu trang">
          <LotusMark />
          <span><strong>Bến đợi</strong><small>người thương</small></span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">☰</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button className="active" onClick={() => scrollTo('top')}>Trang nhà</button>
          <button onClick={() => scrollTo('stories')}>Câu chuyện</button>
          <button onClick={() => scrollTo('characters')}>Nhân vật</button>
          <button onClick={() => scrollTo('letter')}>Gửi đôi lời</button>
        </nav>
        <button className="quiet-login" onClick={() => setMessage('Cánh cửa đang khép hờ — phần đăng nhập sẽ mở khi bến có chủ.')}>Đăng nhập</button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-content reveal reveal-left">
            <p className="eyebrow"><span /> một góc nhỏ bên hồ sen</p>
            <h1 id="hero-title">Bến đợi<br /><em>người thương</em></h1>
            <p className="hero-lede">Sen nở bên hồ, người thương chưa tới.<br />Cứ ngồi đây đợi.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo('letter')}><LotusMark /> Ghé vào bến</button>
              <button className="text-button" onClick={() => scrollTo('stories')}>Nghe chuyện kể <span>↗</span></button>
            </div>
          </div>
          <div className="hero-girl reveal reveal-girl" aria-hidden="true"><GirlWithLotus /></div>
          <div className="hero-caption">Sớm mai ở lại<br /><strong>cho những người biết đợi</strong></div>
          <div className="scroll-note"><span className="scroll-line" /> cuộn xuống</div>
        </section>

        <section className="intro section-pad reveal-section">
          <p className="section-kicker">01 / Lời ngỏ</p>
          <div className="intro-grid">
            <h2 className="reveal reveal-left">Một nơi để<br /><em>chậm lại.</em></h2>
            <div className="intro-copy reveal reveal-right"><p>Có những ngày lòng mình chỉ muốn tìm một bờ vai yên, một mặt nước phẳng, và một câu chuyện được kể thật khẽ.</p><p>Bến này dành cho những điều chưa kịp nói — những nhân vật, câu chuyện và lời nhắn gửi đang đợi được gặp bạn.</p></div>
          </div>
        </section>

        <section id="stories" className="feature-section section-pad">
          <div className="section-heading reveal"><div><p className="section-kicker">02 / Tủ sách</p><h2>Chuyện kể bên hiên</h2></div><button className="outline-button">Xem tất cả <span>↗</span></button></div>
          <div className="story-cards"><article className="story-card featured reveal reveal-card"><div className="story-number">01</div><p className="card-kicker">truyện ngắn</p><h3>Mùa sen chờ gió</h3><p>Một buổi sớm, cô gái đặt chiếc nón bên thềm và nghe mặt hồ kể về những cuộc gặp đã lỡ.</p><span className="card-arrow">→</span></article><article className="story-card reveal reveal-card reveal-delay-1"><div className="story-number">02</div><p className="card-kicker">tản văn</p><h3>Qua bến đò xưa</h3><p>Những con chữ mang theo mùi nắng, mùi bùn non và một lời hẹn chưa thành.</p><span className="card-arrow">→</span></article><article className="story-card dark reveal reveal-card reveal-delay-2"><div className="story-number">03</div><p className="card-kicker">thư gửi</p><h3>Gửi người chưa tới</h3><p>“Nếu đi ngang qua đây, xin hãy ngồi lại một lát.”</p><span className="card-arrow">→</span></article></div>
        </section>

        <section id="characters" className="characters section-pad"><div className="character-art reveal reveal-orbit"><div className="ring ring-one" /><div className="ring ring-two" /><div className="character-lotus">✾</div></div><div className="reveal reveal-right"><p className="section-kicker">03 / Người trong bến</p><h2>Ai cũng có một<br /><em>câu chuyện riêng.</em></h2><p className="body-copy">Những người ghé qua bến mang theo một dáng hình, một ký ức và một điều chưa nói. Hãy làm quen với họ qua từng mẩu chuyện nhỏ.</p><button className="outline-button">Gặp các nhân vật <span>↗</span></button></div></section>

        <section id="letter" className="letter section-pad"><div className="letter-inner reveal"><p className="section-kicker">04 / Sổ tay bên bến</p><h2>Để lại một lời<br /><em>cho người sau.</em></h2><p>Không cần ký tên. Chỉ cần viết điều bạn muốn bến này nhớ.</p><div className="letter-form"><input aria-label="Lời nhắn" placeholder="Hôm nay bạn muốn nói gì?" onChange={(e) => setMessage(e.target.value)} /><button onClick={() => setMessage(message.trim() ? 'Đã cất lời nhắn của bạn vào sổ tay.' : 'Hãy viết một điều nho nhỏ trước nhé.')}>Gửi lời</button></div>{message && <small className="form-note">{message}</small>}</div></section>
      </main>
      <footer><div className="footer-brand"><LotusMark /> Bến đợi người thương</div><p>Sen nở bên hồ, người thương chưa tới.</p><span>© 2026</span></footer>
    </div>
  );
}
