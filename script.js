/* ── DATA ─────────────────────────────────────────── */
const flavors = {
  original: {
    name:  'Telor Gabus Original Asin Gurih',
    tag:   'Klasik',
    badge: 'Best Seller',
    price: 25000,
    img:   'foto-gulamerah.png',
    desc:  'Cita rasa gurih asin klasik yang tak pernah lekang waktu. Tambahan keju diadonannya menambah rasa gurih sempurna di setiap gigitan — cocok dinikmati kapan saja bersama keluarga.',
    tags:  ['🧂 Gurih Asin', '🌾 Tekstur Renyah', '👶 Aman Anak']
  },
  gulamerah: {
    name:  'Telor Gabus Gula Merah',
    tag:   'Favorit',
    badge: 'Populer',
    price: 27000,
    img:   'foto-original.png',
    desc:  'Manisnya gula merah alami yang khas berpadu dengan tekstur renyah telor gabus. Aroma karamel yang hangat bikin nagih dari gigitan pertama — sempurna untuk yang suka manis legit.',
    tags:  ['🍯 Gula Merah Asli', '🍮 Manis Legit', '🌟 Wangi Karamel']
  },
  gulaputih: {
    name:  'Telor Gabus Gula Putih',
    tag:   'Manis',
    badge: 'Lembut',
    price: 26000,
    img:   'foto-gulaputih.png',
    desc:  'Lapisan gula putih kristal yang ringan dan lembut di lidah. Manis bersih tanpa rasa berat — pilihan sempurna untuk anak-anak dan mereka yang menyukai rasa manis yang lebih halus.',
    tags:  ['🍬 Manis Lembut', '✨ Balutan Gula Kristal', '👨‍👩‍👧 Favorit Keluarga']
  }
};

const testimonials = [
  { name: 'Siti Rahayu',    loc: 'Bandung',    emoji: '👩',    stars: 5, text: '"Beneran enak banget! Yang rasa gula merahnya juara, manisnya pas dan renyahnya luar biasa. Udah order lebih dari 5x dan selalu puas!"' },
  { name: 'Budi Santoso',   loc: 'Bandung',    emoji: '👨',    stars: 5, text: '"Pertama kali nyobain yang original, langsung jatuh cinta sama cita rasa autentiknya. Wijen-nya bikin beda dari yang lain. Pasti repeat order!"' },
  { name: 'Dewi Kurnia',    loc: 'Bandung',   emoji: '👩‍🦱', stars: 5, text: '"Beli buat hampers lebaran, semua orang suka! Yang rasa gula putih disukai anak-anak, yang original disukai bapak-bapak. Perfect!"' },
  { name: 'Rizal Fauzan',   loc: 'Bandung', emoji: '🧑',    stars: 5, text: '"Kirimnya cepet, packaging rapi, sampai masih krispy! Cobain ketiga rasa sekaligus, favorit aku yang gula merah. Aromanya harum banget."' },
  { name: 'Anisa Maharani', loc: 'Bandung',     emoji: '👩‍🦰', stars: 5, text: '"Telor gabus terenak yang pernah aku makan! Stok rumah harus selalu ada nih. Yang gula putih cocok banget buat teman nonton."' },
  { name: 'Hendra Wijaya',  loc: 'Bandung',      emoji: '👨‍🦲', stars: 4, text: '"Harga terjangkau untuk kualitas premium. Dibawa oleh-oleh ke kantor habis dalam 10 menit! Teman-teman langsung minta info ordernya."' },
];

const faqs = [
  { q: 'Berapa lama ketahanan kue telor gabus ini?',           a: 'Dalam kemasan tertutup yang rapat, kue telor gabus kami tahan hingga 14–21 hari pada suhu ruang normal. Pastikan pouch selalu tertutup rapat setelah dibuka untuk menjaga kerenyahannya.' },
  { q: 'Apa perbedaan rasa gula merah dan gula putih?',        a: 'Rasa gula merah menggunakan gula aren asli yang memberikan cita rasa manis legit dengan aroma karamel yang khas. Rasa gula putih menggunakan lapisan gula kristal putih yang menghasilkan rasa manis bersih dan ringan, cocok untuk anak-anak.' },
  { q: 'Apakah bisa dikirim ke luar kota Bandung?',            a: 'Bisa! Kami melayani pengiriman ke seluruh Jawa Barat melalui JNE, J&T, SiCepat, dan Gosend (khusus Pangalengan). Untuk luar kota, mohon maaf kami belum bisa mengirim ke luar kota' },
  { q: 'Apakah ada pilihan hampers atau gift packaging?',       a: 'Tentu! Kami menyediakan kemasan hampers cantik untuk lebaran, ulang tahun, atau acara spesial lainnya. Bisa juga custom label nama. Hubungi kami via WhatsApp untuk info lebih lanjut.' },
  { q: 'Apakah produk ini halal dan aman untuk anak-anak?',    a: 'Ya! Semua produk kami menggunakan bahan-bahan halal, tanpa pengawet buatan, tanpa pewarna sintetis. Aman dikonsumsi oleh anak-anak dan seluruh keluarga.' },
  { q: 'Bagaimana cara pemesanan dan metode pembayaran?',       a: 'Pemesanan dilakukan via WhatsApp. Pembayaran tersedia melalui transfer bank (BCA, Mandiri, BRI), dompet digital (GoPay, OVO, DANA, ShopeePay), dan COD untuk area Bandung tertentu.' },
];

/* ── NAVBAR ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── MOBILE MENU ─────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
document.querySelectorAll('.mm-link').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

/* ── REVEAL ON SCROLL ────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (i % 6) * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── PRODUCT SHOWCASE ────────────────────────────── */
let currentFlavor = 'original';
let qty = 1;

function fmt(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function renderProduct(key) {
  const f   = flavors[key];
  const img = document.getElementById('productImg');

  // smooth image swap
  img.classList.add('switching');
  setTimeout(() => {
    img.src = f.img;
    img.alt = f.name;
    img.classList.remove('switching');
  }, 200);

  document.getElementById('productBadge').textContent = f.badge;
  document.getElementById('productTag').textContent   = f.tag;
  document.getElementById('productName').textContent  = f.name;
  document.getElementById('productDesc').textContent  = f.desc;
  document.getElementById('productTags').innerHTML    =
    f.tags.map(t => `<span class="p-tag">${t}</span>`).join('');
  document.getElementById('priceDisplay').textContent = fmt(f.price);
  document.getElementById('qtyVal').textContent       = qty;
  document.getElementById('totalPrice').textContent   = fmt(f.price * qty);

  const msg = encodeURIComponent(
    `Halo, saya mau pesan:\n• ${f.name} x${qty} toples\nTotal: ${fmt(f.price * qty)}\n\nMohon infokan ketersediaan stok 🙏`
  );
  document.getElementById('orderBtn').href = `https://wa.me/6282118846783?text=${msg}`;
}

document.getElementById('flavorTabs').addEventListener('click', e => {
  const btn = e.target.closest('.flavor-tab');
  if (!btn) return;
  document.querySelectorAll('.flavor-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFlavor = btn.dataset.flavor;
  qty = 1;
  renderProduct(currentFlavor);
});

document.getElementById('qtyMinus').addEventListener('click', () => {
  if (qty > 1) { qty--; renderProduct(currentFlavor); }
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  if (qty < 99) { qty++; renderProduct(currentFlavor); }
});

renderProduct('original');

/* ── TESTIMONIALS SLIDER ─────────────────────────── */
const track  = document.getElementById('testiTrack');
const dotsEl = document.getElementById('testiDots');

testimonials.forEach(t => {
  const card = document.createElement('div');
  card.className = 'testi-card';
  card.innerHTML = `
    <div class="testi-stars">${'★'.repeat(t.stars)}</div>
    <p class="testi-text">${t.text}</p>
    <div class="testi-author">
      <div class="testi-avatar">${t.emoji}</div>
      <div>
        <div class="testi-name">${t.name}</div>
        <div class="testi-loc">📍 ${t.loc}</div>
      </div>
    </div>`;
  track.appendChild(card);
});

let testiIdx = 0;
function getPerPage()  { return window.innerWidth < 769 ? 1 : window.innerWidth < 1025 ? 2 : 3; }
function totalPages()  { return Math.ceil(testimonials.length / getPerPage()); }

function buildDots() {
  dotsEl.innerHTML = '';
  for (let i = 0; i < totalPages(); i++) {
    const d = document.createElement('button');
    d.className = 'testi-dot' + (i === testiIdx ? ' active' : '');
    d.addEventListener('click', () => goTesti(i));
    dotsEl.appendChild(d);
  }
}

function goTesti(idx) {
  testiIdx = Math.max(0, Math.min(idx, totalPages() - 1));
  const cards = track.querySelectorAll('.testi-card');
  const cardW = cards[0] ? cards[0].offsetWidth + 24 : 0;
  track.style.transform = `translateX(-${testiIdx * getPerPage() * cardW}px)`;
  document.querySelectorAll('.testi-dot').forEach((d, i) =>
    d.classList.toggle('active', i === testiIdx)
  );
}

document.getElementById('prevBtn').addEventListener('click', () => goTesti(testiIdx - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTesti(testiIdx + 1));
window.addEventListener('resize', () => { buildDots(); goTesti(0); });

let autoTimer = setInterval(() => goTesti((testiIdx + 1) % totalPages()), 4500);
track.addEventListener('mouseenter', () => clearInterval(autoTimer));
track.addEventListener('mouseleave', () => {
  autoTimer = setInterval(() => goTesti((testiIdx + 1) % totalPages()), 4500);
});

buildDots();

/* ── FAQ ACCORDION ───────────────────────────────── */
const faqList = document.getElementById('faqList');
faqs.forEach(f => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-q">
      <span>${f.q}</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-a">
      <div class="faq-a-inner">${f.a}</div>
    </div>`;
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
  faqList.appendChild(item);
});

/* ── BACK TO TOP ─────────────────────────────────── */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 400));
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
