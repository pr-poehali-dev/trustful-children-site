import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/b88efe89-80c5-4a3c-8226-e4fd96f703f4/files/4f4f85fb-7d0b-4a98-8ac4-8fcc3277133e.jpg";

const SOCIAL = [
  { label: "ВКонтакте", text: "ВК", href: "#", bg: "#0077FF" },
  { label: "МАХ", text: "МАХ", href: "#", bg: "#1A1A2E" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ parentName: "", childName: "", age: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const nav = [
    { href: "#method", label: "Методика" },
    { href: "#schedule", label: "Расписание" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div style={{ backgroundColor: "var(--milk)", fontFamily: "'Manrope', sans-serif" }}>

      {/* ────── HEADER ────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "rgba(246,241,235,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(200,200,184,0.4)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", display: "inline-flex", alignItems: "flex-start", gap: 2 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "var(--terracotta)", letterSpacing: "0.08em", textTransform: "uppercase", fontStyle: "normal", lineHeight: 1 }}>
              ИСКРА
            </span>
            <span style={{ color: "var(--sand)", fontSize: 16, lineHeight: 1, marginTop: -2 }}>✦</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: 28, display: "flex", alignItems: "center" }}>
            {nav.map(l => <a key={l.href} href={l.href} className="nav-link-iskra">{l.label}</a>)}
          </nav>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="#trial" className="btn-iskra hidden md:inline-block" style={{ padding: "10px 24px", fontSize: 13 }}>
              Записаться на пробное занятие
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "var(--warm-dark)" }}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: "var(--milk)", borderTop: "1px solid rgba(200,200,184,0.4)", padding: "16px 28px 24px" }}>
            {nav.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "13px 0", color: "var(--warm-dark)", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #EDE8DF", fontSize: 16 }}>
                {l.label}
              </a>
            ))}
            <a href="#trial" className="btn-iskra" style={{ marginTop: 20, display: "block", textAlign: "center" }} onClick={() => setMenuOpen(false)}>
              Записаться на пробное
            </a>
          </div>
        )}
      </header>

      {/* ────── HERO ────── */}
      <section style={{ minHeight: "95vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 20%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(43,43,40,0.78) 0%, rgba(85,99,87,0.5) 55%, rgba(43,43,40,0.25) 100%)", zIndex: 1 }} />

        {/* Decorative organic shape */}
        <div style={{
          position: "absolute", right: "-8%", top: "10%",
          width: "45vw", height: "80vh",
          background: "rgba(201,120,87,0.12)",
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          zIndex: 1,
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ color: "var(--sand)", fontSize: 20 }}>✦</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                пгт Бачатский · дети 7–16 лет
              </span>
            </div>

            <h1 className="heading-xl" style={{ color: "white", marginBottom: 12 }}>
              Театр для жизни,
            </h1>
            <h1 className="heading-xl" style={{ color: "var(--sand)", marginBottom: 32, fontStyle: "italic" }}>
              а не для сцены.
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, marginBottom: 48, maxWidth: 520, fontWeight: 300 }}>
              Развиваем уверенность, речь и самовыражение через театральные практики. Первое пробное занятие — бесплатно.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#trial" className="btn-iskra" style={{ fontSize: 16, padding: "18px 44px" }}>
                Записаться на пробное
              </a>
              <a href="#method" className="btn-iskra-ghost">
                Как мы работаем
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
              {[
                { val: "7–16", sub: "лет" },
                { val: "3", sub: "возрастные группы" },
                { val: "0 ₽", sub: "пробное занятие" },
              ].map(s => (
                <div key={s.val}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 500, color: "white", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── ABOUT ────── */}
      <section id="about" style={{ padding: "100px 28px", backgroundColor: "var(--milk)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 80, alignItems: "center" }}>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
                <span className="chip">О студии</span>
              </div>
              <h2 className="heading-lg" style={{ marginBottom: 28, color: "var(--warm-dark)" }}>
                Искра — это не<br/>театральный кружок
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--warm-mid)", marginBottom: 20, fontWeight: 300 }}>
                Мы — современная студия развития личности ребёнка через театральные практики. Наша главная цель — не подготовить артистов, а воспитать уверенных, свободных и думающих людей.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--warm-mid)", marginBottom: 40, fontWeight: 300 }}>
                Театральные инструменты помогают развить навыки, которые пригодятся в любой сфере жизни — от разговора с учителем до публичного выступления.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: "ShieldCheck", label: "Уверенность в себе" },
                  { icon: "MessageCircle", label: "Чёткая речь" },
                  { icon: "Star", label: "Навык выступлений" },
                  { icon: "Heart", label: "Эмоц. интеллект" },
                  { icon: "Users", label: "Работа в команде" },
                  { icon: "Sparkles", label: "Самовыражение" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 14px", background: "white", borderRadius: 14, boxShadow: "0 2px 12px rgba(43,43,40,0.05)" }}>
                    <Icon name={item.icon} size={16} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--warm-dark)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 40, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 32px 80px rgba(43,43,40,0.15)" }}>
                <img src={HERO_IMG} alt="Занятие в студии Искра" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              {/* Floating quote */}
              <div style={{
                position: "absolute", bottom: 40, left: -28,
                background: "var(--olive)", color: "white",
                borderRadius: 24, padding: "20px 28px",
                maxWidth: 240, boxShadow: "0 12px 40px rgba(85,99,87,0.3)",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, lineHeight: 1.4, fontStyle: "italic" }}>
                  «Учим быть собой»
                </div>
                <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Философия студии Искра</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── METHOD ────── */}
      <section id="method" style={{ padding: "100px 28px", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip chip-olive">Авторская методика</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)", marginBottom: 20 }}>
              Не играем в театр.<br/>
              <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Используем театр для жизни.</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--warm-mid)", maxWidth: 560, margin: "0 auto", lineHeight: 1.75, fontWeight: 300 }}>
              Каждое занятие — это тренажёр навыков, которые нужны в реальной жизни: уверенность, речь, способность слышать и быть услышанным.
            </p>
          </div>

          {/* Formula */}
          <div style={{
            background: "var(--olive-dark)",
            borderRadius: 32,
            padding: "40px 48px",
            textAlign: "center",
            marginBottom: 48,
            color: "white",
          }}>
            <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, marginBottom: 16, fontWeight: 600 }}>Наша формула</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 500 }}>
              Театр + Практика + Поддержка = <span style={{ color: "var(--sand)" }}>Уверенность на всю жизнь</span>
            </div>
            <div style={{ marginTop: 16, fontSize: 14, opacity: 0.6 }}>Без давления. Без соревнования. В атмосфере принятия и вдохновения.</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { emoji: "🎭", title: "Раскрепощение", desc: "Специальные упражнения убирают телесные зажимы и страх «быть на виду». Ребёнок учится занимать пространство свободно." },
              { emoji: "🗣️", title: "Голос и речь", desc: "Дикция, темп, интонация, паузы. Ребёнок начинает говорить так, чтобы его слышали и слушали." },
              { emoji: "🤝", title: "Взаимодействие", desc: "Этюды и импровизации в парах и группах — учим слышать партнёра, договариваться и поддерживать." },
              { emoji: "✨", title: "Самовыражение", desc: "Пространство, где можно проявляться без осуждения. Здесь нет «правильно» и «неправильно» — есть «своё»." },
            ].map(c => (
              <div key={c.title} className="card-iskra" style={{ boxShadow: "none", border: "1px solid rgba(200,200,184,0.5)" }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>{c.emoji}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 12, color: "var(--warm-dark)" }}>{c.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--warm-mid)", fontWeight: 300 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── AGE GROUPS ────── */}
      <section id="groups" style={{ padding: "100px 28px", backgroundColor: "var(--milk)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip">Возрастные группы</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)" }}>
              Свой подход для каждого возраста
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {[
              {
                range: "7–9 лет",
                name: "Искорки",
                bg: "#FBF3E4",
                accent: "var(--sand)",
                accentDark: "#A87830",
                icon: "🌱",
                tagStyle: "chip-sand",
                desc: "Игровой формат. Упражнения на раскрепощение, ритм, фантазию. Учимся выражать эмоции и не бояться быть на виду. Всё через сказку, движение и смех.",
                skills: ["Снятие зажимов через игру", "Первые выступления", "Развитие воображения", "Командная игра"],
              },
              {
                range: "10–12 лет",
                name: "Огонь",
                bg: "var(--olive)",
                accent: "white",
                accentDark: "rgba(255,255,255,0.7)",
                icon: "🔥",
                tagStyle: "",
                desc: "Работа с голосом и сценическим образом. Этюды, импровизации, командные постановки. Учимся говорить уверенно и слышать других.",
                skills: ["Голос и дикция", "Сценический образ", "Командные этюды", "Публичность"],
                isInverse: true,
              },
              {
                range: "13–16 лет",
                name: "Звёзды",
                bg: "#F0EDE8",
                accent: "var(--terracotta)",
                accentDark: "var(--warm-mid)",
                icon: "⭐",
                tagStyle: "chip-terra",
                desc: "Серьёзная работа: публичные выступления, управление вниманием аудитории, лидерство. Навыки, которые помогут в университете и карьере.",
                skills: ["Публичные выступления", "Управление аудиторией", "Лидерство и харизма", "Аргументация"],
              },
            ].map(g => (
              <div key={g.range} style={{
                background: g.bg,
                borderRadius: 36,
                padding: "40px 36px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(43,43,40,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {g.isInverse && (
                  <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
                )}
                <div style={{ fontSize: 44, marginBottom: 20 }}>{g.icon}</div>
                <span className={`chip ${g.tagStyle}`} style={g.isInverse ? { background: "rgba(255,255,255,0.18)", color: "white" } : {}}>{g.range}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 500, margin: "16px 0 8px", color: g.isInverse ? "white" : "var(--warm-dark)" }}>
                  {g.name}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: g.isInverse ? "rgba(255,255,255,0.75)" : "var(--warm-mid)", marginBottom: 28, fontWeight: 300 }}>
                  {g.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {g.skills.map(s => (
                    <div key={s} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        background: g.isInverse ? "rgba(255,255,255,0.2)" : g.accent,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon name="Check" size={11} style={{ color: g.isInverse ? "white" : (g.accent === "var(--sand)" ? "var(--warm-dark)" : "white") }} />
                      </div>
                      <span style={{ fontSize: 13, color: g.isInverse ? "rgba(255,255,255,0.85)" : "var(--warm-dark)", fontWeight: 500 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── PROGRAMS ────── */}
      <section id="programs" style={{ padding: "100px 28px", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip">Программы и цены</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)" }}>Выберите направление</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>

            <div className="card-iskra" style={{ background: "white" }}>
              <div className="chip chip-terra" style={{ marginBottom: 24 }}>🌟 Основной курс</div>
              <h3 className="heading-md" style={{ color: "var(--warm-dark)", marginBottom: 6 }}>Творческая студия</h3>
              <p style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 20 }}>Театральная методика · 7–16 лет</p>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 500, color: "var(--terracotta)", lineHeight: 1 }}>4 000 <span style={{ fontSize: 24 }}>₽</span></div>
              <div style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 28 }}>в месяц · 8 занятий</div>
              {["Раскрепощение и уверенность", "Работа с голосом и ритмом", "Импровизация и этюды", "Выступление на публике"].map(f => (
                <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <Icon name="Check" size={14} style={{ color: "var(--terracotta)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "var(--warm-mid)" }}>{f}</span>
                </div>
              ))}
              <a href="#trial" className="btn-iskra" style={{ marginTop: 28, display: "block", textAlign: "center" }}>Записаться</a>
            </div>

            <div className="card-iskra" style={{ background: "white" }}>
              <div className="chip chip-olive" style={{ marginBottom: 24 }}>💰 Финансовая грамотность</div>
              <h3 className="heading-md" style={{ color: "var(--warm-dark)", marginBottom: 6 }}>Дети и деньги</h3>
              <p style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 20 }}>8–16 лет</p>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 500, color: "var(--olive)", lineHeight: 1 }}>2 500 <span style={{ fontSize: 24 }}>₽</span></div>
              <div style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 28 }}>4 занятия · мини-курс</div>
              {["Как копить и ставить цели", "Умные покупки и траты", "Защита от мошенников", "Первые инвестиции"].map(f => (
                <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <Icon name="Check" size={14} style={{ color: "var(--olive)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "var(--warm-mid)" }}>{f}</span>
                </div>
              ))}
              <a href="#trial" className="btn-iskra-outline" style={{ marginTop: 28, display: "block", textAlign: "center" }}>Записаться</a>
            </div>

            <div className="card-iskra" style={{ background: "white" }}>
              <div className="chip chip-sand" style={{ marginBottom: 24 }}>🤖 Нейросети</div>
              <h3 className="heading-md" style={{ color: "var(--warm-dark)", marginBottom: 6 }}>Мастер-класс по ИИ</h3>
              <p style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 20 }}>8–16 лет</p>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 500, color: "var(--sand)", lineHeight: 1 }}>800 <span style={{ fontSize: 24 }}>₽</span></div>
              <div style={{ fontSize: 13, color: "var(--warm-mid)", marginBottom: 28 }}>1 занятие · 2 часа</div>
              {["Создаём картинки с помощью ИИ", "Пишем тексты и истории", "Придумываем идеи с нейросетью", "Практика с реальными инструментами"].map(f => (
                <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <Icon name="Check" size={14} style={{ color: "var(--sand)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "var(--warm-mid)" }}>{f}</span>
                </div>
              ))}
              <a href="#trial" className="btn-iskra-outline" style={{ marginTop: 28, display: "block", textAlign: "center", color: "var(--warm-dark)", borderColor: "var(--sand)" }}>Записаться</a>
            </div>

          </div>
        </div>
      </section>

      {/* ────── SCHEDULE ────── */}
      <section id="schedule" style={{ padding: "100px 28px", backgroundColor: "var(--milk)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip">Расписание</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)" }}>Когда занимаемся</h2>
          </div>

          <div style={{ background: "white", borderRadius: 32, overflow: "hidden", boxShadow: "0 8px 40px rgba(43,43,40,0.07)" }}>
            <div style={{ overflowX: "auto" }}>
              <table className="tbl" style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
                <thead>
                  <tr>
                    <th>День</th><th>Время</th><th>Группа</th><th>Программа</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: "Понедельник", time: "16:00 – 17:30", group: "7–9 лет", prog: "Искорки · Творческая студия" },
                    { day: "Среда", time: "16:00 – 17:30", group: "10–12 лет", prog: "Огонь · Творческая студия" },
                    { day: "Четверг", time: "17:00 – 18:30", group: "13–16 лет", prog: "Звёзды · Творческая студия" },
                    { day: "Суббота", time: "10:00 – 11:30", group: "8–16 лет", prog: "Дети и деньги" },
                    { day: "По записи", time: "Индивидуально", group: "8–16 лет", prog: "Мастер-класс по ИИ" },
                  ].map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{r.day}</td>
                      <td>{r.time}</td>
                      <td><span className="chip">{r.group}</span></td>
                      <td style={{ color: "var(--warm-mid)" }}>{r.prog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--warm-mid)" }}>
            Расписание уточняйте по телефону или в мессенджерах — оно может меняться.
          </p>
        </div>
      </section>

      {/* ────── TRIAL FORM ────── */}
      <section id="trial" style={{ padding: "100px 28px", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip">Пробное занятие</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)", marginBottom: 16 }}>Запишитесь бесплатно</h2>
            <p style={{ fontSize: 16, color: "var(--warm-mid)", lineHeight: 1.7, fontWeight: 300 }}>
              Первое занятие — бесплатно и ни к чему не обязывает. Ребёнок попробует, и вы вместе решите, продолжать ли.
            </p>
          </div>

          {sent ? (
            <div style={{ background: "var(--olive)", borderRadius: 32, padding: "56px 40px", textAlign: "center", color: "white" }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>✦</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 500, marginBottom: 14 }}>Заявка принята!</h3>
              <p style={{ opacity: 0.85, fontSize: 16, lineHeight: 1.6 }}>
                Мы свяжемся с вами в течение часа для подтверждения времени занятия.
              </p>
            </div>
          ) : (
            <div style={{ background: "white", borderRadius: 32, padding: "48px 40px", boxShadow: "0 8px 40px rgba(43,43,40,0.07)" }}>
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { key: "parentName", label: "Имя родителя", placeholder: "Ваше имя", type: "text" },
                    { key: "childName", label: "Имя ребёнка", placeholder: "Имя вашего ребёнка", type: "text" },
                    { key: "age", label: "Возраст ребёнка", placeholder: "Например: 9 лет", type: "text" },
                    { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                    { key: "email", label: "Email", placeholder: "example@mail.ru", type: "email" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", marginBottom: 7, fontSize: 13, fontWeight: 600, color: "var(--warm-mid)", letterSpacing: "0.02em" }}>
                        {f.label}
                      </label>
                      <input
                        className="iskra-input"
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <button type="submit" className="btn-iskra" style={{ width: "100%", marginTop: 8, fontSize: 16, padding: "18px" }}>
                    Записаться на бесплатное занятие
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "var(--sage-dark)" }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* ────── CONTACTS ────── */}
      <section id="contacts" style={{ padding: "100px 28px", backgroundColor: "var(--milk)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 20 }}>
              <span style={{ color: "var(--sand)", fontSize: 18 }}>✦</span>
              <span className="chip">Контакты</span>
            </div>
            <h2 className="heading-lg" style={{ color: "var(--warm-dark)" }}>Как нас найти</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              <div className="card-iskra">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 24, color: "var(--warm-dark)" }}>
                  Студия «Искра»
                </h3>
                {[
                  { icon: "MapPin", text: "пгт Бачатский, Кемеровская область" },
                  { icon: "Phone", text: "+7 (XXX) XXX-XX-XX" },
                  { icon: "Mail", text: "iskra@studio.ru" },
                  { icon: "Clock", text: "Пн–Сб: 10:00 – 19:00" },
                ].map(c => (
                  <div key={c.icon} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: "#F6F1EB", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={c.icon} size={16} style={{ color: "var(--terracotta)" }} />
                    </div>
                    <div style={{ paddingTop: 9, fontSize: 14, color: "var(--warm-mid)" }}>{c.text}</div>
                  </div>
                ))}
              </div>

              <div className="card-iskra">
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, marginBottom: 20, color: "var(--warm-dark)" }}>
                  Мы в социальных сетях
                </h4>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {SOCIAL.map(s => (
                    <a key={s.label} href={s.href} title={s.label}
                      style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "white", textDecoration: "none", letterSpacing: "0.02em", transition: "transform 0.2s, box-shadow 0.2s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                    >{s.text}</a>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 32, overflow: "hidden", boxShadow: "0 8px 40px rgba(43,43,40,0.1)", height: 460 }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=87.07,54.30&z=13&l=map&text=%D0%BF%D0%B3%D1%82%20%D0%91%D0%B0%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9"
                width="100%" height="100%" frameBorder="0" title="Яндекс.Карта — Бачатский"
                style={{ border: 0 }} allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ────── FOOTER ────── */}
      <footer style={{ background: "var(--olive-dark)", padding: "48px 28px", color: "rgba(255,255,255,0.65)", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "flex-start", gap: 3, marginBottom: 6, justifyContent: "center" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 700, color: "var(--sand)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>ИСКРА</span>
            <span style={{ color: "var(--sand)", fontSize: 16, lineHeight: 1, marginTop: -2, opacity: 0.8 }}>✦</span>
          </div>
          <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28, opacity: 0.5 }}>студия творческого развития</div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 13, marginBottom: 28 }}>
            {nav.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "white"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
              >{l.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28 }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} title={s.label}
                style={{ width: 36, height: 36, borderRadius: "50%", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "white", textDecoration: "none", opacity: 0.85, transition: "opacity 0.2s, transform 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >{s.text}</a>
            ))}
          </div>
          <div style={{ fontSize: 12, opacity: 0.3 }}>© 2024 Студия «Искра» · пгт Бачатский</div>
        </div>
      </footer>

      {/* ────── FLOATING MESSENGERS ────── */}
      <div className="floating-wrap">
        <a href="#" target="_blank" rel="noopener noreferrer" className="float-messenger" title="Написать в МАХ"
          style={{ background: "#1A1A2E", fontSize: 13, fontWeight: 800, color: "white" }}>МАХ</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="float-messenger" title="Написать ВКонтакте"
          style={{ background: "#0077FF", fontSize: 13, fontWeight: 800, color: "white" }}>ВК</a>
      </div>

    </div>
  );
}