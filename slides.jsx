// slides.jsx — 8 slides de Instagram 1080x1080 para Inomark
// Cada slide explora un tratamiento visual diferente del teal,
// desde casi ausente hasta expresivo.

const SLIDE_SIZE = 1080;

// ─── Tokens ────────────────────────────────────────────────
const tokens = {
  dark: {
    bg: '#0B1120',
    surface: '#162032',
    border: '#1E2D42',
    text: '#F1F5F9',
    muted: '#94A3B8',
    tagline: '#2D4A6B',
    teal: '#5EEAD4',
    tealDark: '#0D7A6B',
  },
  light: {
    bg: '#F0F4FF',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    text: '#0B1120',
    muted: '#475569',
    tagline: '#94A3B8',
    teal: '#0D7A6B',
    tealDark: '#0D7A6B',
  },
};

// ─── Isotipo inline (controlable) ──────────────────────────
function Isotipo({ size = 72, surface, teal, opacity = 1 }) {
  const s = size;
  const r = s * 0.16; // border radius
  return (
    <svg width={s} height={s} viewBox="0 0 200 200" style={{ display: 'block', opacity }}>
      <rect width="200" height="200" rx={r * (200 / s)} fill={surface} />
      <circle cx="100" cy="100" r="20" fill={teal} />
      <line x1="100" y1="38" x2="100" y2="56" stroke={teal} strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="100" cy="38" r="5.5" fill={teal} />
      <line x1="144" y1="100" x2="162" y2="100" stroke={teal} strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="162" cy="100" r="4" fill={teal} opacity="0.65" />
      <line x1="100" y1="144" x2="100" y2="158" stroke={teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
      <line x1="38" y1="100" x2="56" y2="100" stroke={teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
      <line x1="152" y1="48" x2="138" y2="62" stroke={teal} strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
      <line x1="48" y1="152" x2="62" y2="138" stroke={teal} strokeWidth="2" strokeLinecap="round" opacity="0.18" />
    </svg>
  );
}

// Wordmark
function Wordmark({ size = 32, textColor, tealColor, letterSpacing = -1 }) {
  return (
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
      fontSize: size,
      letterSpacing,
      lineHeight: 1,
      display: 'inline-block',
    }}>
      <span style={{ color: textColor }}>ino</span>
      <span style={{ color: tealColor }}>mark</span>
    </span>
  );
}

// ─── Common: header with brand + page counter ──────────────
function SlideHeader({ t, idx, total, label }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '44px 56px 0', fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Isotipo size={36} surface={t.surface} teal={t.teal} />
        <Wordmark size={22} textColor={t.text} tealColor={t.teal} letterSpacing={-0.8} />
      </div>
      <div style={{
        fontSize: 13, color: t.muted, letterSpacing: 1.2,
        textTransform: 'uppercase', fontWeight: 500,
      }}>
        {label || `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}
      </div>
    </div>
  );
}

// ─── Common: footer ────────────────────────────────────────
function SlideFooter({ t, text = 'inomark.com.ar', right = '@inomark.ar' }) {
  return (
    <div style={{
      position: 'absolute', bottom: 44, left: 56, right: 56,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: "'Inter', sans-serif",
      fontSize: 13, color: t.muted, letterSpacing: 0.2,
    }}>
      <span>{text}</span>
      <span>{right}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 01 — Cover. Tipográfico fuerte, teal apenas presente.
// ═══════════════════════════════════════════════════════════
function Slide01_Cover({ t }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={0} total={8} label="presentación" />

      {/* Subtle grid lines */}
      <div style={{
        position: 'absolute', inset: '160px 56px 160px 56px',
        borderLeft: `1px solid ${t.border}`,
        display: 'flex', alignItems: 'flex-end',
      }}>
        <div style={{ padding: '0 0 40px 40px' }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, color: t.teal, letterSpacing: 3,
            textTransform: 'uppercase', fontWeight: 500,
            marginBottom: 28,
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: t.teal, verticalAlign: 'middle', marginRight: 16 }} />
            marketing digital
          </div>

          <h1 style={{
            fontSize: 140, fontWeight: 700, letterSpacing: -5,
            lineHeight: 0.95, margin: 0, marginBottom: 32,
            color: t.text,
          }}>
            a qué<br />
            nos <span style={{ fontWeight: 400, fontStyle: 'italic', color: t.teal }}>dedicamos</span>.
          </h1>

          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22, color: t.muted, fontWeight: 400,
            maxWidth: 720, lineHeight: 1.5,
          }}>
            Pauta, contenido y reportería para e-commerce y B2B.
            Sin relato, con resultados medibles.
          </div>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 02 — El problema. Tipografía editorial grande.
// ═══════════════════════════════════════════════════════════
function Slide02_Problem({ t }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={1} total={8} />

      <div style={{ padding: '80px 72px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500,
          marginBottom: 40,
        }}>
          01 · el problema
        </div>

        <h2 style={{
          fontSize: 84, fontWeight: 500, letterSpacing: -3,
          lineHeight: 1.02, margin: 0, marginBottom: 48, color: t.text,
        }}>
          Invertís en ads<br />
          pero no sabés si<br />
          <span style={{ color: t.muted, fontWeight: 400, fontStyle: 'italic' }}>realmente</span> están<br />
          funcionando.
        </h2>

        {/* diagrama minimalista: plata que entra vs retorno difuso */}
        <div style={{ display: 'flex', gap: 20, marginTop: 60, alignItems: 'center' }}>
          <div style={{
            padding: '20px 28px',
            border: `1px solid ${t.border}`,
            borderRadius: 10,
            fontFamily: "'Inter', sans-serif",
            fontSize: 16, color: t.muted,
          }}>
            <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: t.tagline, marginBottom: 6 }}>entra</div>
            <div style={{ color: t.text, fontWeight: 500 }}>$ pauta</div>
          </div>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${t.teal}00, ${t.teal}, ${t.teal}00)` }} />
          <div style={{
            padding: '20px 28px',
            border: `1px dashed ${t.border}`,
            borderRadius: 10,
            fontFamily: "'Inter', sans-serif",
            fontSize: 16, color: t.muted, fontStyle: 'italic',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: t.tagline, marginBottom: 6, fontStyle: 'normal' }}>¿sale?</div>
            <div>??? retorno</div>
          </div>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 03 — Qué hacemos. Layout de 3 servicios como tarjetas.
// ═══════════════════════════════════════════════════════════
function Slide03_Services({ t }) {
  const services = [
    { n: '01', title: 'Paid Media', desc: 'Meta, Google y TikTok Ads. Campañas enfocadas en ventas.' },
    { n: '02', title: 'Gestión de redes', desc: 'Contenido, copy y community para Instagram y LinkedIn.' },
    { n: '03', title: 'Reportería', desc: 'Dashboards en Looker Studio + análisis en GA4.' },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={2} total={8} />

      <div style={{ padding: '72px 56px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500, marginBottom: 24,
        }}>
          02 · qué hacemos
        </div>
        <h2 style={{
          fontSize: 64, fontWeight: 700, letterSpacing: -2,
          lineHeight: 1.02, margin: 0, marginBottom: 56, color: t.text,
        }}>
          Tres servicios. Un<br />objetivo: que vendas más.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'stretch',
              background: t.surface,
              borderRadius: 14,
              overflow: 'hidden',
              borderLeft: `3px solid ${t.teal}`,
            }}>
              <div style={{
                padding: '28px 32px',
                display: 'flex', alignItems: 'center',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 500, color: t.teal,
                letterSpacing: 1.2,
              }}>
                {s.n}
              </div>
              <div style={{ padding: '28px 32px 28px 0', flex: 1 }}>
                <div style={{
                  fontSize: 28, fontWeight: 500, letterSpacing: -0.8,
                  color: t.text, marginBottom: 6,
                }}>{s.title}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16, color: t.muted, lineHeight: 1.5,
                }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 04 — Paid Media. Dashboard real con barras y métricas.
// Momento expresivo — teal usado para destacar datos.
// ═══════════════════════════════════════════════════════════
function Slide04_PaidMedia({ t }) {
  // 14 días de barras
  const bars = [32, 48, 41, 67, 52, 78, 85, 71, 94, 82, 96, 112, 98, 128];
  const max = 130;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={3} total={8} />

      <div style={{ padding: '60px 56px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500, marginBottom: 16,
        }}>
          03 · servicio uno
        </div>
        <h2 style={{
          fontSize: 72, fontWeight: 500, letterSpacing: -2.4,
          lineHeight: 0.98, margin: 0, marginBottom: 12, color: t.text,
        }}>
          Paid Media.
        </h2>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 19, color: t.muted, lineHeight: 1.5,
          marginBottom: 40, maxWidth: 820,
        }}>
          Setup, segmentación, creatividades y optimización continua
          en Meta, Google y TikTok Ads.
        </div>

        {/* Dashboard card */}
        <div style={{
          background: t.surface, borderRadius: 18,
          padding: 32, border: `1px solid ${t.border}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
            <div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 12,
                color: t.tagline, letterSpacing: 1.6, textTransform: 'uppercase',
                fontWeight: 500, marginBottom: 6,
              }}>Conversiones · últimos 14 días</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.2, color: t.text }}>
                1.284 <span style={{ color: t.teal, fontSize: 18, fontWeight: 500, letterSpacing: 0 }}>↑ 42%</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 28 }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: t.tagline, letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 4 }}>ROAS</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: t.text, letterSpacing: -0.5 }}>4.8x</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: t.tagline, letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 4 }}>CPA</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: t.text, letterSpacing: -0.5 }}>$ 1.240</div>
              </div>
            </div>
          </div>

          {/* Bars chart */}
          <div style={{ height: 180, display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: 16 }}>
            {bars.map((v, i) => {
              const isLast = i === bars.length - 1;
              const isHighlight = isLast || i === bars.length - 3;
              return (
                <div key={i} style={{
                  flex: 1,
                  height: `${(v / max) * 100}%`,
                  background: isHighlight ? t.teal : `${t.teal}33`,
                  borderRadius: 4,
                  position: 'relative',
                }}>
                  {isLast && (
                    <div style={{
                      position: 'absolute', bottom: '100%', left: '50%',
                      transform: 'translateX(-50%)', marginBottom: 8,
                      background: t.teal, color: t.bg,
                      fontSize: 11, fontWeight: 600,
                      padding: '3px 8px', borderRadius: 4,
                      fontFamily: "'Inter', sans-serif", letterSpacing: 0.2,
                    }}>128</div>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: "'Inter', sans-serif", fontSize: 11,
            color: t.tagline, letterSpacing: 0.8,
          }}>
            <span>03 abr</span><span>10 abr</span><span>hoy</span>
          </div>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 05 — Gestión de redes. Grid tipo feed + calendario.
// ═══════════════════════════════════════════════════════════
function Slide05_Social({ t }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  // calendario: valores 0-3 = intensidad
  const calendar = [
    [1, 2, 0, 3, 1, 0, 0],
    [2, 1, 3, 2, 2, 1, 0],
    [1, 3, 1, 2, 3, 0, 0],
    [2, 2, 3, 1, 2, 1, 0],
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={4} total={8} />

      <div style={{ padding: '60px 56px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500, marginBottom: 16,
        }}>
          04 · servicio dos
        </div>
        <h2 style={{
          fontSize: 72, fontWeight: 500, letterSpacing: -2.4,
          lineHeight: 0.98, margin: 0, marginBottom: 12, color: t.text,
        }}>
          Gestión<br />de redes.
        </h2>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 19, color: t.muted, lineHeight: 1.5,
          marginBottom: 36, maxWidth: 820,
        }}>
          Calendario editorial, copy, diseño de contenido y community
          management para Instagram y LinkedIn.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20 }}>
          {/* Calendario */}
          <div style={{
            background: t.surface, borderRadius: 18,
            padding: 26, border: `1px solid ${t.border}`,
          }}>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11,
              color: t.tagline, letterSpacing: 1.6, textTransform: 'uppercase',
              fontWeight: 500, marginBottom: 18,
            }}>Calendario · abril</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, marginBottom: 10 }}>
              {days.map((d, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  fontFamily: "'Inter', sans-serif", fontSize: 11,
                  color: t.muted, fontWeight: 500,
                }}>{d}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: 8 }}>
              {calendar.map((week, wi) => (
                <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                  {week.map((v, di) => (
                    <div key={di} style={{
                      aspectRatio: '1',
                      borderRadius: 6,
                      background: v === 0
                        ? `${t.border}55`
                        : v === 1
                        ? `${t.teal}26`
                        : v === 2
                        ? `${t.teal}66`
                        : t.teal,
                    }} />
                  ))}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 20, display: 'flex', gap: 10, alignItems: 'center',
              fontFamily: "'Inter', sans-serif", fontSize: 11, color: t.tagline,
            }}>
              <span>menos</span>
              <div style={{ display: 'flex', gap: 3 }}>
                {[0, 1, 2, 3].map((v, i) => (
                  <div key={i} style={{
                    width: 10, height: 10, borderRadius: 2,
                    background: v === 0 ? `${t.border}55` : v === 1 ? `${t.teal}26` : v === 2 ? `${t.teal}66` : t.teal,
                  }} />
                ))}
              </div>
              <span>más posts</span>
            </div>
          </div>

          {/* Feed grid */}
          <div style={{
            background: t.surface, borderRadius: 18,
            padding: 26, border: `1px solid ${t.border}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11,
                color: t.tagline, letterSpacing: 1.6, textTransform: 'uppercase',
                fontWeight: 500,
              }}>Feed · vista previa</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11,
                color: t.teal, fontWeight: 500,
              }}>@cliente</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
              {Array.from({ length: 9 }).map((_, i) => {
                // patrones distintos — algunos con el isotipo, otros con tipo, otros sólidos
                const patterns = [
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: t.teal }} />
                  </div>,
                  <div key={i} style={{ background: t.teal, aspectRatio: '1', display: 'flex', alignItems: 'flex-end', padding: 8, fontSize: 9, fontWeight: 700, color: t.bg, letterSpacing: -0.3 }}>
                    roas
                  </div>,
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', border: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: t.muted, fontWeight: 500 }}>
                    tip
                  </div>,
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 14, height: 2, background: t.teal }} />
                  </div>,
                  <div key={i} style={{ background: t.surface === t.bg ? t.border : `${t.teal}22`, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: t.teal, fontWeight: 700, letterSpacing: 0.4 }}>
                    CASE
                  </div>,
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 4, height: 4, background: t.teal, opacity: 0.6 }} />
                  </div>,
                  <div key={i} style={{ background: t.teal, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: t.bg }}>
                    ↑
                  </div>,
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', border: `1px solid ${t.border}`, display: 'flex', alignItems: 'flex-start', padding: 6, fontSize: 8, color: t.muted }}>
                    —
                  </div>,
                  <div key={i} style={{ background: t.bg, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 8, height: 8, border: `1.5px solid ${t.teal}`, borderRadius: '50%' }} />
                  </div>,
                ];
                return patterns[i];
              })}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 06 — Reportería. Dashboard KPIs + line chart.
// ═══════════════════════════════════════════════════════════
function Slide06_Reports({ t }) {
  // puntos de la línea (0-100)
  const line = [22, 28, 24, 35, 32, 44, 40, 52, 58, 54, 68, 72, 80];
  const w = 720, h = 160;
  const stepX = w / (line.length - 1);
  const pts = line.map((v, i) => [i * stepX, h - (v / 100) * h]);
  const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const areaPath = `${path} L${w},${h} L0,${h} Z`;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={5} total={8} />

      <div style={{ padding: '60px 56px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500, marginBottom: 16,
        }}>
          05 · servicio tres
        </div>
        <h2 style={{
          fontSize: 72, fontWeight: 500, letterSpacing: -2.4,
          lineHeight: 0.98, margin: 0, marginBottom: 12, color: t.text,
        }}>
          Reportería.
        </h2>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 19, color: t.muted, lineHeight: 1.5,
          marginBottom: 32, maxWidth: 820,
        }}>
          Dashboards en Looker Studio, análisis en GA4 y reportes
          ejecutivos mensuales con próximos pasos concretos.
        </div>

        {/* KPIs row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
          {[
            { l: 'Ingresos', v: '$ 8.4M', d: '+ 34%' },
            { l: 'Pedidos', v: '1.284', d: '+ 42%' },
            { l: 'Ticket', v: '$ 6.540', d: '– 3%' },
            { l: 'ROAS', v: '4.8x', d: '+ 12%' },
          ].map((k, i) => (
            <div key={i} style={{
              background: t.surface, borderRadius: 12,
              padding: '18px 20px', border: `1px solid ${t.border}`,
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 11,
                color: t.tagline, letterSpacing: 1.4, textTransform: 'uppercase',
                fontWeight: 500, marginBottom: 8,
              }}>{k.l}</div>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.8, color: t.text, marginBottom: 2 }}>{k.v}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: 12,
                color: k.d.startsWith('–') ? t.muted : t.teal,
                fontWeight: 500,
              }}>{k.d}</div>
            </div>
          ))}
        </div>

        {/* Line chart */}
        <div style={{
          background: t.surface, borderRadius: 18,
          padding: 26, border: `1px solid ${t.border}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18, alignItems: 'center' }}>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11,
              color: t.tagline, letterSpacing: 1.6, textTransform: 'uppercase',
              fontWeight: 500,
            }}>Evolución mensual · ingresos</div>
            <div style={{ display: 'flex', gap: 14, fontFamily: "'Inter', sans-serif", fontSize: 11, color: t.muted }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 2, background: t.teal, display: 'inline-block' }} /> este año
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 2, background: t.border, display: 'inline-block' }} /> año anterior
              </span>
            </div>
          </div>

          <svg viewBox={`0 0 ${w} ${h + 20}`} width="100%" style={{ display: 'block' }}>
            {/* grid */}
            {[0, 1, 2, 3].map((g) => (
              <line key={g} x1="0" y1={(h / 3) * g} x2={w} y2={(h / 3) * g} stroke={t.border} strokeWidth="1" strokeDasharray="2 4" />
            ))}
            {/* previous year — flat-ish */}
            <path
              d="M0,140 L60,134 L120,138 L180,128 L240,130 L300,122 L360,124 L420,118 L480,120 L540,112 L600,116 L660,110 L720,108"
              fill="none" stroke={t.border} strokeWidth="2" strokeDasharray="4 4"
            />
            {/* current year area */}
            <path d={areaPath} fill={t.teal} fillOpacity="0.12" />
            {/* current year line */}
            <path d={path} fill="none" stroke={t.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* last point */}
            <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="6" fill={t.teal} />
            <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="12" fill={t.teal} fillOpacity="0.2" />
          </svg>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 07 — Cómo se ve un mes con nosotros. Timeline.
// ═══════════════════════════════════════════════════════════
function Slide07_Process({ t }) {
  const steps = [
    { w: 'semana 01', title: 'Diagnóstico', desc: 'Auditamos cuentas, analizamos histórico y definimos objetivos.' },
    { w: 'semana 02', title: 'Setup & plan', desc: 'Estructura de campañas, calendario editorial y creatividades.' },
    { w: 'semana 03', title: 'Optimización', desc: 'Ajustes diarios de pauta y publicación de contenido.' },
    { w: 'semana 04', title: 'Reporte', desc: 'Dashboards al día, reunión ejecutiva y próximos pasos.' },
  ];
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif" }}>
      <SlideHeader t={t} idx={6} total={8} />

      <div style={{ padding: '72px 72px 0' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: t.teal, letterSpacing: 2.4,
          textTransform: 'uppercase', fontWeight: 500, marginBottom: 20,
        }}>
          06 · cómo trabajamos
        </div>
        <h2 style={{
          fontSize: 60, fontWeight: 700, letterSpacing: -1.8,
          lineHeight: 1.02, margin: 0, marginBottom: 56, color: t.text,
        }}>
          Así se ve un mes<br />con Inomark.
        </h2>

        <div style={{ position: 'relative' }}>
          {/* línea vertical */}
          <div style={{
            position: 'absolute', left: 11, top: 6, bottom: 6,
            width: 2, background: t.border,
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 28, position: 'relative' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: t.bg, border: `2px solid ${t.teal}`,
                  flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', zIndex: 1,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.teal }} />
                </div>
                <div style={{ flex: 1, paddingTop: -2 }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 12,
                    color: t.teal, letterSpacing: 2, textTransform: 'uppercase',
                    fontWeight: 500, marginBottom: 6,
                  }}>{s.w}</div>
                  <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: -0.8, color: t.text, marginBottom: 4 }}>
                    {s.title}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 16,
                    color: t.muted, lineHeight: 1.5, maxWidth: 620,
                  }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter t={t} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDE 08 — CTA. Expresivo. Isotipo gigante.
// ═══════════════════════════════════════════════════════════
function Slide08_CTA({ t }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: t.bg, color: t.text, fontFamily: "'DM Sans', sans-serif", overflow: 'hidden' }}>
      {/* Isotipo gigante recortado al fondo */}
      <div style={{
        position: 'absolute', right: -160, top: -160,
        opacity: 1, pointerEvents: 'none',
      }}>
        <Isotipo size={700} surface={t.surface} teal={t.teal} />
      </div>
      {/* velo para que no compita con el texto */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${t.bg} 40%, ${t.bg}cc 60%, transparent 100%)`,
      }} />

      <div style={{ position: 'relative' }}>
        <SlideHeader t={t} idx={7} total={8} label="último" />

        <div style={{ padding: '140px 72px 0' }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, color: t.teal, letterSpacing: 2.4,
            textTransform: 'uppercase', fontWeight: 500, marginBottom: 28,
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: t.teal, verticalAlign: 'middle', marginRight: 14 }} />
            siguiente paso
          </div>

          <h2 style={{
            fontSize: 108, fontWeight: 700, letterSpacing: -4,
            lineHeight: 0.96, margin: 0, marginBottom: 36, color: t.text,
          }}>
            Pedinos tu<br />
            <span style={{ color: t.teal, fontWeight: 400, fontStyle: 'italic' }}>propuesta</span><br />
            personalizada.
          </h2>

          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 20, color: t.muted, fontWeight: 400,
            maxWidth: 620, lineHeight: 1.5, marginBottom: 56,
          }}>
            Te armamos un plan concreto con diagnóstico,
            estrategia y presupuesto en menos de 48hs.
          </div>

          {/* CTA "card" */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            background: t.teal, color: t.bg,
            padding: '22px 32px', borderRadius: 14,
            fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 500,
            letterSpacing: -0.4,
          }}>
            hola@inomark.com.ar
            <span style={{
              width: 34, height: 34, borderRadius: '50%',
              background: t.bg, color: t.teal,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 500,
            }}>→</span>
          </div>

          <div style={{
            marginTop: 28,
            fontFamily: "'Inter', sans-serif", fontSize: 16,
            color: t.muted,
          }}>
            whatsapp · <span style={{ color: t.text, fontWeight: 500 }}>+54 9 381 573 4287</span>
            <span style={{ margin: '0 14px', color: t.tagline }}>·</span>
            instagram · <span style={{ color: t.text, fontWeight: 500 }}>@inomark.ar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Registry
// ═══════════════════════════════════════════════════════════
const SLIDES = [
  { id: '01', label: 'cover · a qué nos dedicamos', Comp: Slide01_Cover },
  { id: '02', label: 'problema · ads sin retorno claro', Comp: Slide02_Problem },
  { id: '03', label: 'servicios · los tres pilares', Comp: Slide03_Services },
  { id: '04', label: 'paid media · con dashboard real', Comp: Slide04_PaidMedia },
  { id: '05', label: 'redes · calendario + feed', Comp: Slide05_Social },
  { id: '06', label: 'reportería · KPIs + evolución', Comp: Slide06_Reports },
  { id: '07', label: 'proceso · un mes con inomark', Comp: Slide07_Process },
  { id: '08', label: 'cta · propuesta personalizada', Comp: Slide08_CTA },
];

Object.assign(window, {
  SLIDES, SLIDE_SIZE, tokens,
  Isotipo, Wordmark,
});
