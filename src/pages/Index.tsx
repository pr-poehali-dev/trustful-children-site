import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/b88efe89-80c5-4a3c-8226-e4fd96f703f4/files/4f4f85fb-7d0b-4a98-8ac4-8fcc3277133e.jpg";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { href: "#about", label: "О методике" },
    { href: "#programs", label: "Программы" },
    { href: "#schedule", label: "Расписание" },
    { href: "#trial", label: "Пробное занятие" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div style={{ backgroundColor: "var(--cream)" }}>

      {/* HEADER */}
      <header
        style={{
          backgroundColor: "rgba(251,248,243,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--beige-dark)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span
                className="font-display"
                style={{ fontSize: 22, fontWeight: 600, color: "var(--terracotta)", fontStyle: "italic" }}
              >
                Студия
              </span>
              <span style={{ fontSize: 11, color: "var(--warm-brown)", opacity: 0.6, fontWeight: 500, letterSpacing: "0.05em" }}>
                ТВОРЧЕСКОЕ РАЗВИТИЕ
              </span>
            </div>
          </a>

          <nav
            style={{ display: "flex", gap: 28, alignItems: "center" }}
            className="hidden md:flex"
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div className="hidden md:flex" style={{ display: "flex", gap: 8 }}>
              {[
                { label: "ВКонтакте", content: "ВК", isText: true, bg: "#0077FF" },
                { label: "Instagram", content: "📷", isText: false, bg: "#E1306C" },
                { label: "Маx", content: "МАХ", isText: true, bg: "#1A1A2E" },
                { label: "Одноклассники", content: "ОК", isText: true, bg: "#EE8208" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: s.bg, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: s.isText ? 10 : 15, textDecoration: "none",
                    color: "white", fontWeight: 800, letterSpacing: "0.01em",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.12)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                >
                  {s.content}
                </a>
              ))}
            </div>

            <a href="#trial" className="btn-primary hidden md:inline-block" style={{ padding: "10px 24px", fontSize: 14 }}>
              Записаться
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: 6, color: "var(--warm-brown)",
              }}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={26} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            style={{
              backgroundColor: "var(--cream)",
              borderTop: "1px solid var(--beige-dark)",
              padding: "16px 24px 24px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "var(--warm-brown)",
                  textDecoration: "none",
                  fontWeight: 500,
                  borderBottom: "1px solid var(--beige-dark)",
                  fontSize: 16,
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#trial"
              className="btn-primary"
              style={{ marginTop: 20, display: "block", textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Записаться бесплатно
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.38)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(61,43,31,0.7) 0%, rgba(196,98,58,0.4) 100%)",
            zIndex: 1,
          }}
        />

        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "white", marginBottom: 24 }}>
              пгт Бачатский • для детей 6–12 лет
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 600,
                color: "white",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Студия творческого развития для детей
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.65,
                marginBottom: 40,
                maxWidth: 560,
              }}
            >
              Помогаем стать увереннее, говорить свободно и мыслить смело — через актёрские техники и современные знания
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#trial" className="btn-primary" style={{ fontSize: 17, padding: "16px 40px" }}>
                Пробное занятие — бесплатно
              </a>
              <a
                href="#about"
                className="btn-outline"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", fontSize: 15 }}
              >
                Узнать больше
              </a>
            </div>

            <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
              {[
                { value: "7–16", label: "лет возраст" },
                { value: "8", label: "занятий в месяц" },
                { value: "0 ₽", label: "первое занятие" },
              ].map((f) => (
                <div key={f.value} style={{ color: "white" }}>
                  <div className="font-display" style={{ fontSize: 36, fontWeight: 600, lineHeight: 1 }}>{f.value}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Почему выбирают нас</div>
            <h2 className="section-title">Мы не просто занимаемся театром</h2>
            <p style={{ color: "var(--muted-foreground)", marginTop: 16, maxWidth: 560, margin: "16px auto 0" }}>
              Театральная методика — это инструмент, который меняет ребёнка изнутри
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "Heart",
                title: "Снимаем зажимы",
                desc: "Убираем телесные блоки и страх выступлений через мягкие упражнения и игры",
                color: "#FEE2E2",
                iconColor: "#DC2626",
              },
              {
                icon: "MessageCircle",
                title: "Развиваем речь",
                desc: "Работаем с голосом, дикцией и умением выражать мысли ясно и красиво",
                color: "#FEF3C7",
                iconColor: "#D97706",
              },
              {
                icon: "Smile",
                title: "Эмоциональный интеллект",
                desc: "Учим понимать свои и чужие эмоции — это база для общения и дружбы",
                color: "#DCFCE7",
                iconColor: "#16A34A",
              },
              {
                icon: "Users",
                title: "Маленькие группы",
                desc: "Бережный подход и внимание к каждому ребёнку — не потоковое обучение",
                color: "#EDE9FE",
                iconColor: "#7C3AED",
              },
            ].map((item) => (
              <div key={item.title} className="card-studio">
                <div
                  style={{
                    width: 52, height: 52, borderRadius: 16,
                    background: item.color, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon name={item.icon} size={26} style={{ color: item.iconColor }} />
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 17, marginBottom: 10, color: "var(--warm-brown)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--muted-foreground)", lineHeight: 1.6, fontSize: 15 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT METHODOLOGY */}
      <section id="about" style={{ padding: "80px 24px", backgroundColor: "var(--beige)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <div className="tag" style={{ marginBottom: 20 }}>О методике</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Почему театр — это не про сцену
              </h2>
              <p style={{ color: "var(--warm-brown)", lineHeight: 1.75, marginBottom: 20, fontSize: 16, opacity: 0.85 }}>
                Большинство думают, что театральная студия — это подготовка к спектаклям. На самом деле
                это тренажёр для жизни: через игру ребёнок учится управлять телом, голосом и эмоциями.
              </p>
              <p style={{ color: "var(--warm-brown)", lineHeight: 1.75, marginBottom: 32, fontSize: 16, opacity: 0.85 }}>
                Дети после курса увереннее отвечают у доски, легче знакомятся, умеют слушать и быть услышанными.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Импровизация и творческое мышление",
                  "Работа с голосом и дикцией",
                  "Эмоциональный интеллект",
                  "Командная работа и лидерство",
                  "Уверенность и публичные выступления",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 24, height: 24, borderRadius: "50%",
                        background: "var(--terracotta)", display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <Icon name="Check" size={14} style={{ color: "white" }} />
                    </div>
                    <span style={{ fontSize: 15, color: "var(--warm-brown)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 32,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(61,43,31,0.2)",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={HERO_IMAGE}
                  alt="Дети на занятии в студии"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute", bottom: 32, left: -20,
                  background: "white", borderRadius: 20,
                  padding: "16px 24px",
                  boxShadow: "0 8px 32px rgba(61,43,31,0.15)",
                }}
              >
                <div className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--terracotta)" }}>Авторская</div>
                <div style={{ fontSize: 13, color: "var(--warm-brown)", opacity: 0.7 }}>методика студии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Возрастные группы</div>
            <h2 className="section-title">Свой подход для каждого возраста</h2>
            <p style={{ color: "var(--muted-foreground)", marginTop: 16, maxWidth: 580, margin: "16px auto 0" }}>
              Студия работает с детьми от 7 до 16 лет — три группы с разными программами и темпом
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                age: "7–10 лет",
                emoji: "🌱",
                title: "Искорки",
                subtitle: "Младшая группа",
                desc: "Игровой формат: упражнения на раскрепощение, ритм, фантазию. Учимся выражать эмоции и не бояться быть на виду. Всё через сказку, движение и смех.",
                skills: ["Снятие зажимов через игру", "Первые выступления", "Развитие воображения"],
                bg: "#FEF3C7",
                accent: "#D97706",
                border: "#FCD34D",
              },
              {
                age: "11–13 лет",
                emoji: "🔥",
                title: "Огонь",
                subtitle: "Средняя группа",
                accent: "white",
                desc: "Работа с голосом, дикцией и сценическим образом. Этюды, импровизации, командные постановки. Подростки учатся говорить уверенно и слышать других.",
                skills: ["Голос и дикция", "Сценический образ", "Командные этюды"],
                bg: "linear-gradient(145deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                accentColor: "rgba(255,255,255,0.85)",
                isLight: false,
              },
              {
                age: "14–16 лет",
                emoji: "⭐",
                title: "Звёзды",
                subtitle: "Старшая группа",
                desc: "Серьёзная работа: публичные выступления, дебаты, управление аудиторией. Навыки, которые помогут на собеседовании, в университете и в жизни.",
                skills: ["Публичные выступления", "Управление аудиторией", "Лидерство и харизма"],
                bg: "#F0FDF4",
                accent: "#15803D",
                border: "#86EFAC",
              },
            ].map((g) => (
              <div
                key={g.age}
                className="card-studio"
                style={{
                  background: g.bg,
                  color: g.isLight === false ? "white" : "var(--warm-brown)",
                  position: "relative",
                  overflow: "hidden",
                  border: g.border ? `2px solid ${g.border}` : undefined,
                }}
              >
                {g.isLight === false && (
                  <div style={{
                    position: "absolute", top: -30, right: -30,
                    width: 140, height: 140, borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                  }} />
                )}
                <div style={{ fontSize: 40, marginBottom: 16 }}>{g.emoji}</div>
                <div
                  className="tag"
                  style={{
                    background: g.isLight === false ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.07)",
                    color: g.isLight === false ? "white" : g.accent,
                    marginBottom: 12,
                  }}
                >
                  {g.age}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 26, fontWeight: 600, marginBottom: 4 }}
                >
                  {g.title}
                </h3>
                <div
                  style={{
                    fontSize: 13, marginBottom: 16,
                    opacity: g.isLight === false ? 0.7 : 0.55,
                    fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em",
                  }}
                >
                  {g.subtitle}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, marginBottom: 24, opacity: g.isLight === false ? 0.9 : 0.8 }}>
                  {g.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {g.skills.map((s) => (
                    <div key={s} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div
                        style={{
                          width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                          background: g.isLight === false ? "rgba(255,255,255,0.25)" : g.accent,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Icon name="Check" size={11} style={{ color: g.isLight === false ? "white" : "white" }} />
                      </div>
                      <span style={{ fontSize: 13, opacity: g.isLight === false ? 0.9 : 0.8 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "80px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Программы и цены</div>
            <h2 className="section-title">Выберите направление</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>

            {/* Main studio */}
            <div
              className="card-studio"
              style={{
                background: "linear-gradient(145deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", top: -40, right: -40,
                  width: 160, height: 160, borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div className="tag" style={{ background: "rgba(255,255,255,0.2)", color: "white", marginBottom: 20 }}>
                🌟 Основной курс
              </div>
              <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>
                Творческая студия
              </h3>
              <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>Театральная методика • 7–12 лет</p>
              <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 4 }}>4 000 ₽</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 28 }}>в месяц • 8 занятий</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  "Раскрепощение и уверенность",
                  "Работа с голосом и ритмом",
                  "Импровизация и этюды",
                  "Выступление на публике",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 14, opacity: 0.9 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#trial"
                style={{
                  display: "block", textAlign: "center",
                  background: "rgba(255,255,255,0.2)", color: "white",
                  border: "2px solid rgba(255,255,255,0.5)",
                  padding: "13px 24px", borderRadius: 50,
                  fontWeight: 600, fontSize: 14, textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                Записаться
              </a>
            </div>

            {/* Finance */}
            <div className="card-studio">
              <div className="tag" style={{ marginBottom: 20 }}>💰 Финансовая грамотность</div>
              <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, color: "var(--warm-brown)" }}>
                Дети и деньги
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 8 }}>8–12 лет</p>
              <div style={{ fontSize: 36, fontWeight: 700, color: "var(--terracotta)", marginBottom: 4 }}>2 500 ₽</div>
              <div style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 28 }}>4 занятия • мини-курс</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  "Как копить и ставить цели",
                  "Умные покупки и траты",
                  "Защита от мошенников",
                  "Первые инвестиции",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div
                      style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: "var(--beige)", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Icon name="Check" size={12} style={{ color: "var(--sage)" }} />
                    </div>
                    <span style={{ fontSize: 14, color: "var(--warm-brown)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#trial" className="btn-primary" style={{ fontSize: 14, display: "block", textAlign: "center" }}>
                Записаться
              </a>
            </div>

            {/* AI */}
            <div className="card-studio">
              <div className="tag" style={{ marginBottom: 20 }}>🤖 Нейросети</div>
              <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, color: "var(--warm-brown)" }}>
                Мастер-класс по ИИ
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 8 }}>8–12 лет</p>
              <div style={{ fontSize: 36, fontWeight: 700, color: "var(--sage)", marginBottom: 4 }}>800 ₽</div>
              <div style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 28 }}>1 занятие • 2 часа</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  "Создаём картинки с помощью ИИ",
                  "Пишем тексты и истории",
                  "Генерируем музыку и голос",
                  "Придумываем идеи с нейросетью",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div
                      style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: "#DCFCE7", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Icon name="Check" size={12} style={{ color: "var(--sage)" }} />
                    </div>
                    <span style={{ fontSize: 14, color: "var(--warm-brown)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#trial" className="btn-outline" style={{ fontSize: 14, display: "block", textAlign: "center" }}>
                Записаться
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{ padding: "80px 24px", backgroundColor: "var(--cream)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Расписание</div>
            <h2 className="section-title">Когда занимаемся</h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(61,43,31,0.07)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table className="schedule-table" style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                <thead>
                  <tr>
                    <th>День</th>
                    <th>Время</th>
                    <th>Группа</th>
                    <th>Программа</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: "Понедельник", time: "16:00 – 17:30", group: "7–9 лет", program: "Творческая студия" },
                    { day: "Среда", time: "16:00 – 17:30", group: "10–12 лет", program: "Творческая студия" },
                    { day: "Суббота", time: "10:00 – 11:30", group: "6–8 лет", program: "Творческая студия" },
                    { day: "Суббота", time: "12:00 – 13:30", group: "8–12 лет", program: "Дети и деньги" },
                    { day: "По записи", time: "Индивидуально", group: "8–12 лет", program: "Мастер-класс по ИИ" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{row.day}</td>
                      <td>{row.time}</td>
                      <td>
                        <span className="tag">{row.group}</span>
                      </td>
                      <td>{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: 24, color: "var(--muted-foreground)", fontSize: 14 }}>
            Расписание может меняться — актуальное уточняйте по телефону или в мессенджерах.
          </p>
        </div>
      </section>

      {/* TRIAL FORM */}
      <section id="trial" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Пробное занятие</div>
            <h2 className="section-title">Запишитесь бесплатно</h2>
            <p style={{ color: "var(--muted-foreground)", marginTop: 16, fontSize: 16 }}>
              Первое занятие — бесплатно и ни к чему не обязывает. Ребёнок попробует, и вы вместе решите, продолжать ли.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                background: "linear-gradient(135deg, var(--sage) 0%, var(--sage-light) 100%)",
                borderRadius: 24,
                padding: "48px 40px",
                textAlign: "center",
                color: "white",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, marginBottom: 12 }}>
                Заявка принята!
              </h3>
              <p style={{ opacity: 0.9, fontSize: 16 }}>
                Мы свяжемся с вами в течение часа для подтверждения времени занятия.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { key: "parentName", label: "Имя родителя", placeholder: "Ваше имя", type: "text" },
                  { key: "childName", label: "Имя ребёнка", placeholder: "Имя вашего ребёнка", type: "text" },
                  { key: "age", label: "Возраст ребёнка", placeholder: "Например: 8 лет", type: "text" },
                  { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                  { key: "email", label: "Email", placeholder: "example@mail.ru", type: "email" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: 6,
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--warm-brown)",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.key]: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: 12,
                        border: "2px solid var(--beige-dark)",
                        fontSize: 15,
                        color: "var(--warm-brown)",
                        backgroundColor: "var(--cream)",
                        outline: "none",
                        transition: "border-color 0.2s",
                        boxSizing: "border-box",
                        fontFamily: "'Golos Text', sans-serif",
                      }}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--terracotta)")}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--beige-dark)")}
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", marginTop: 8, fontSize: 17, padding: "16px", textAlign: "center" }}
                >
                  Записаться на бесплатное занятие
                </button>
                <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted-foreground)" }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "80px 24px", backgroundColor: "var(--beige)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Контакты</div>
            <h2 className="section-title">Как нас найти</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, alignItems: "start" }}>
            <div>
              <div className="card-studio" style={{ marginBottom: 20 }}>
                <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 24, color: "var(--warm-brown)" }}>
                  Студия творческого развития
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { icon: "MapPin", text: "пгт Бачатский, Кемеровская область" },
                    { icon: "Phone", text: "+7 (XXX) XXX-XX-XX" },
                    { icon: "Mail", text: "studio@bachatsky.ru" },
                    { icon: "Clock", text: "Пн–Сб: 10:00 – 19:00" },
                  ].map((item) => (
                    <div key={item.icon} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 40, height: 40, borderRadius: 12,
                          background: "var(--beige)", flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        <Icon name={item.icon} size={18} style={{ color: "var(--terracotta)" }} />
                      </div>
                      <div style={{ paddingTop: 8, fontSize: 15, color: "var(--warm-brown)" }}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-studio">
                <h4 style={{ fontWeight: 600, marginBottom: 16, color: "var(--warm-brown)" }}>Мы в социальных сетях</h4>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {[
                    { label: "ВКонтакте", emoji: "ВК", href: "#", bg: "#0077FF", isText: true },
                    { label: "Instagram", emoji: "📷", href: "#", bg: "#E1306C", isText: false },
                    { label: "WhatsApp", emoji: "💬", href: "#", bg: "#25D366", isText: false },
                    { label: "Telegram", emoji: "✈️", href: "#", bg: "#0088CC", isText: false },
                    { label: "Одноклассники", emoji: "ОК", href: "#", bg: "#EE8208", isText: true },
                    { label: "Маx", emoji: "МАХ", href: "#", bg: "#1A1A2E", isText: true },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      title={s.label}
                      style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: s.bg, display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: s.isText ? 11 : 22, textDecoration: "none",
                        transition: "transform 0.2s, opacity 0.2s",
                        color: "white", fontWeight: 800, letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                    >
                      {s.emoji}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(61,43,31,0.1)",
                height: 420,
              }}
            >
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=87.07,54.30&z=13&l=map&text=%D0%BF%D0%B3%D1%82%20%D0%91%D0%B0%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Яндекс.Карта — Бачатский"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "var(--warm-brown)",
          color: "rgba(255,255,255,0.7)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="font-display"
            style={{ fontSize: 24, color: "var(--terracotta-light)", marginBottom: 8, fontStyle: "italic" }}
          >
            Студия творческого развития
          </div>
          <div style={{ fontSize: 13, marginBottom: 20 }}>пгт Бачатский, Кемеровская область</div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 13 }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ marginTop: 24, fontSize: 12, opacity: 0.4 }}>
            © 2024 Студия творческого развития
          </div>
        </div>
      </footer>

      {/* FLOATING MESSENGER BUTTONS */}
      <div className="floating-btn">
        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="float-icon"
          title="Telegram"
          style={{ background: "#0088CC" }}
        >
          ✈️
        </a>
        <a
          href="https://wa.me/7XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="float-icon"
          title="WhatsApp"
          style={{ background: "#25D366" }}
        >
          💬
        </a>
      </div>

    </div>
  );
}