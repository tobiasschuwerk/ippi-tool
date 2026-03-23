import { useState } from "react";

const items = {
  en: [
    { id: "IP10",   text: "I often have the feeling that others don't understand me.", factor: 1, reverse: false },
    { id: "IP13_r", text: "People's facial expressions are very reliable sources of information.", factor: 1, reverse: true },
    { id: "IP17",   text: "I like to wear the same outfit over and over again to make me feel at ease.", factor: 1, reverse: false },
    { id: "IP18",   text: "Other people misinterpret my facial expressions or gestures.", factor: 1, reverse: false },
    { id: "IP24",   text: "I have a hard time guessing how another person might understand the things I say.", factor: 1, reverse: false },
    { id: "IP25",   text: "It is calming to repeat movements over and over again.", factor: 2, reverse: false },
    { id: "IP28",   text: "It ruins my whole day, if things don't happen as expected.", factor: 2, reverse: false },
    { id: "IP29",   text: "I don't like talking on the phone because I can't tell when the other person is going to say something.", factor: 2, reverse: false },
    { id: "IP34",   text: "When people ask me questions, I often don't know what they are actually getting at and how exactly I should answer.", factor: 1, reverse: false },
    { id: "IP37",   text: "It would stress me out if I had to spontaneously take a different route to school/work.", factor: 2, reverse: false },
    { id: "IP38",   text: 'It takes a lot of strength for me to appear "normal" to others.', factor: 1, reverse: false },
    { id: "IP39",   text: "I often find it difficult to determine which information is relevant to me at the moment.", factor: 1, reverse: false },
    { id: "IP44",   text: "I am completely upset if just one little thing doesn't go according to plan.", factor: 2, reverse: false },
    { id: "IP47",   text: "If several people are talking at the same time, I can't really listen to any of them.", factor: 1, reverse: false },
    { id: "IP50",   text: "During a stressful situation, I often don't realise how stressed I actually am and why exactly.", factor: 1, reverse: false },
    { id: "IP58",   text: "Often I feel overwhelmed by sounds, smells or colours.", factor: 1, reverse: false },
    { id: "IP60",   text: "It takes a long time for me to recover from everyday challenges.", factor: 2, reverse: false },
    { id: "IP62",   text: "For me, communication is often associated with frustration and/or stress.", factor: 1, reverse: false },
  ],
  de: [
    { id: "IP10",   text: "Ich habe oft das Gefühl, dass andere mich nicht verstehen.", factor: 1, reverse: false },
    { id: "IP13_r", text: "Die Gesichtsausdrücke von Menschen sind sehr zuverlässige Informationsquellen.", factor: 1, reverse: true },
    { id: "IP17",   text: "Ich trage sehr oft dasselbe Outfit, um mich sicher zu fühlen.", factor: 1, reverse: false },
    { id: "IP18",   text: "Andere Menschen interpretieren meine Gesichtsausdrücke oder Gesten falsch.", factor: 1, reverse: false },
    { id: "IP24",   text: "Ich kann nur schlecht einschätzen, wie mein Gegenüber die Dinge versteht, die ich sage.", factor: 1, reverse: false },
    { id: "IP25",   text: "Bewegungen immer wieder zu wiederholen beruhigt mich.", factor: 2, reverse: false },
    { id: "IP28",   text: "Wenn Dinge nicht wie erwartet eintreten, ist mein ganzer Tag ruiniert.", factor: 2, reverse: false },
    { id: "IP29",   text: "Ich telefoniere nicht gerne, weil ich nicht weiß, wann die andere Person was sagen wird.", factor: 2, reverse: false },
    { id: "IP34",   text: "Wenn Menschen mir Fragen stellen, weiß ich oft nicht, worauf sie eigentlich hinauswollen und wie ich genau antworten muss.", factor: 1, reverse: false },
    { id: "IP37",   text: "Es würde mich stressen, wenn ich spontan einen anderen Weg zur Schule/Arbeit nehmen müsste.", factor: 2, reverse: false },
    { id: "IP38",   text: "Es kostet mich sehr viel Kraft, auf andere \u201enormal\u201c zu wirken.", factor: 1, reverse: false },
    { id: "IP39",   text: "Es fällt mir oft schwer zu entscheiden, welche Informationen gerade relevant für mich sind.", factor: 1, reverse: false },
    { id: "IP44",   text: "Es bringt mich komplett aus der Fassung, wenn nur eine Kleinigkeit nicht nach Plan läuft.", factor: 2, reverse: false },
    { id: "IP47",   text: "Wenn mehrere Personen gleichzeitig reden, kann ich keiner davon zuhören.", factor: 1, reverse: false },
    { id: "IP50",   text: "Während einer Stresssituation merke ich oft gar nicht, wie gestresst ich eigentlich bin und warum genau.", factor: 1, reverse: false },
    { id: "IP58",   text: "Oft fühle ich mich von Geräuschen, Gerüchen oder Farben regelrecht überflutet.", factor: 1, reverse: false },
    { id: "IP60",   text: "Ich brauche sehr lange, um mich von alltäglichen Herausforderungen zu erholen.", factor: 2, reverse: false },
    { id: "IP62",   text: "Kommunikation ist für mich oft mit Frust und/oder Stress verbunden.", factor: 1, reverse: false },
  ],
};

const ref = {
  total: { asc: { m: 103.43, sd: 17.34 }, nt: { m: 49.08, sd: 19.26 }, min: 18, max: 126 },
  f1:    { asc: { m: 70.33,  sd: 9.89  }, nt: { m: 33.80, sd: 14.86 }, min: 12, max: 84  },
  f2:    { asc: { m: 33.10,  sd: 6.34  }, nt: { m: 15.28, sd: 7.38  }, min: 6,  max: 42  },
};

const ui = {
  en: {
    title: "IPPI",
    subtitle: "18-item validated version",
    fullName: "Introspective Predictive Processing Inventory (IPPI)",
    welcomeSmall: "Welcome",
    intro: "This tool allows you to complete the Introspective Predictive Processing Inventory (IPPI) and receive a summary of your scores compared to the autistic and non-autistic reference samples from the validation study.",
    disclaimerHead: "Important notice",
    disclaimerBody: "The IPPI measures introspective experiences theoretically linked to predictive processing differences. A high score should not be interpreted as confirming predictive processing differences at a mechanistic level, nor as a diagnostic indicator of autism. This tool is for research and educational purposes only. If you have concerns about your mental health, please consult a qualified professional.",
    citationPrefix: "Preprint: Roos, M., Storm, H., Zimmer, L., & Schuwerk, T. (2025). Participatory Development and Psychometric Evaluation of the Introspective Predictive Processing Inventory (IPPI).",
    citationUrl: "https://osf.io/preprints/psyarxiv/yh7jq_v2",
    citationUrlLabel: "psyarxiv.com/yh7jq",
    start: "Begin questionnaire",
    scaleL: "Do not agree at all / very atypical for me",
    scaleR: "Agree very strongly / very typical for me",
    submit: "View my results",
    errorMsg: "Please answer all items before continuing.",
    resultsHead: "Your results",
    totalLabel: "Total score",
    f1name: "Prediction Integration & Interpretation",
    f2name: "Prediction Error Sensitivity & Stability Needs",
    f1desc: "Captures challenges in integrating sensory and social inputs with predictive models (12 items, range 12\u201384).",
    f2desc: "Reflects the need for environmental predictability and distress in response to unexpected changes (6 items, range 6\u201342).",
    yourScore: "Your score",
    ascMean: "Autistic group mean",
    ntMean: "Non-autistic group mean",
    noteHead: "How to read this chart",
    noteBody: "The shaded bands show ±1\u202fSD around the mean for the autistic (blue) and non-autistic (amber) reference groups from Sample\u00a01 of the validation study (N\u00a0=\u00a0392). Vertical lines mark group means. Your score is the filled circle.",
    restart: "Start over",
    itemOf: "of",
    answered: "answered",
  },
  de: {
    title: "IPPI",
    subtitle: "Validierte 18-Item-Version",
    fullName: "Introspektives Predictive Processing Inventar (IPPI)",
    welcomeSmall: "Willkommen",
    intro: "Dieses Tool erm\u00f6glicht es Ihnen, das Introspektive Predictive Processing Inventar (IPPI) auszuf\u00fcllen und eine \u00dcbersicht Ihrer Punktzahlen im Vergleich zu den autistischen und nicht-autistischen Referenzstichproben der Validierungsstudie zu erhalten.",
    disclaimerHead: "Wichtiger Hinweis",
    disclaimerBody: "Das IPPI misst introspektive Erfahrungen, die theoretisch mit Unterschieden in der Predictive Processing verbunden sind. Ein hoher Wert sollte nicht als Best\u00e4tigung von Predictive-Processing-Unterschieden auf mechanistischer Ebene oder als diagnostischer Hinweis auf Autismus interpretiert werden. Dieses Tool dient ausschlie\u00dflich zu Forschungs- und Bildungszwecken. Bei Bedenken hinsichtlich Ihrer psychischen Gesundheit wenden Sie sich bitte an eine Fachkraft.",
    citationPrefix: "Preprint: Roos, M., Storm, H., Zimmer, L., & Schuwerk, T. (2025). Participatory Development and Psychometric Evaluation of the Introspective Predictive Processing Inventory (IPPI).",
    citationUrl: "https://osf.io/preprints/psyarxiv/yh7jq_v2",
    citationUrlLabel: "psyarxiv.com/yh7jq",
    start: "Fragebogen beginnen",
    scaleL: "Stimme \u00fcberhaupt nicht zu / sehr untypisch f\u00fcr mich",
    scaleR: "Stimme sehr stark zu / sehr typisch f\u00fcr mich",
    submit: "Ergebnisse anzeigen",
    errorMsg: "Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.",
    resultsHead: "Ihre Ergebnisse",
    totalLabel: "Gesamtpunktzahl",
    f1name: "Pr\u00e4diktionsintegration & -interpretation",
    f2name: "Pr\u00e4diktionsfehler-Sensitivit\u00e4t & Stabilit\u00e4tsbed\u00fcrfnis",
    f1desc: "Erfasst Schwierigkeiten bei der Integration sensorischer und sozialer Eingaben mit Vorhersagemodellen (12\u00a0Items, Bereich 12\u201384).",
    f2desc: "Spiegelt das Bed\u00fcrfnis nach Umgebungsvorhersagbarkeit und Stressreaktionen auf unerwartete Ver\u00e4nderungen wider (6\u00a0Items, Bereich 6\u201342).",
    yourScore: "Ihr Wert",
    ascMean: "Mittelwert autistische Gruppe",
    ntMean: "Mittelwert nicht-autistische Gruppe",
    noteHead: "So lesen Sie das Diagramm",
    noteBody: "Die schattierten B\u00e4nder zeigen ±1\u202fSD um den Mittelwert der autistischen (blau) und nicht-autistischen (bernstein) Referenzgruppen aus Stichprobe\u00a01 der Validierungsstudie (N\u00a0=\u00a0392). Senkrechte Linien markieren die Gruppenmittelwerte. Ihr Wert ist der gef\u00fcllte Kreis.",
    restart: "Neu beginnen",
    itemOf: "von",
    answered: "beantwortet",
  },
};

function ScoreViz({ score, data, t }) {
  const { min, max, asc, nt } = data;
  const span = max - min;
  const pct = v => Math.max(0, Math.min(100, ((v - min) / span) * 100));

  const ntL = pct(nt.m - nt.sd), ntR = pct(nt.m + nt.sd);
  const aL  = pct(asc.m - asc.sd), aR = pct(asc.m + asc.sd);
  const sP  = pct(score);

  return (
    <div>
      <div style={{ position: "relative", height: 56, marginBottom: 8 }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 20, height: 16, background: "#EDE9E2", borderRadius: 8 }} />
        <div style={{ position: "absolute", left: `${ntL}%`, width: `${ntR - ntL}%`, top: 20, height: 16, background: "rgba(232,130,74,0.25)", borderRadius: 4 }} />
        <div style={{ position: "absolute", left: `${aL}%`, width: `${aR - aL}%`, top: 20, height: 16, background: "rgba(44,62,107,0.22)", borderRadius: 4 }} />
        <div style={{ position: "absolute", left: `${pct(nt.m)}%`, top: 16, height: 24, width: 2, background: "#E8824A", transform: "translateX(-50%)" }} />
        <div style={{ position: "absolute", left: `${pct(asc.m)}%`, top: 16, height: 24, width: 2, background: "#2C3E6B", transform: "translateX(-50%)" }} />
        <div style={{
          position: "absolute", left: `${sP}%`, top: 14,
          width: 28, height: 28, borderRadius: "50%",
          background: "#1A1A2E", border: "3px solid white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
          transform: "translateX(-50%)", zIndex: 10,
        }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#666", marginBottom: 12 }}>
        <span>{min}</span><span>{max}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", fontSize: "0.72rem", color: "#444" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#1A1A2E", border: "2px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", display: "inline-block" }} />
          {t.yourScore}: <strong>{score}</strong>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 14, height: 3, background: "#2C3E6B", display: "inline-block", borderRadius: 2 }} />
          {t.ascMean}: {asc.m} <span style={{ color: "#666" }}>(±{asc.sd})</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 14, height: 3, background: "#E8824A", display: "inline-block", borderRadius: 2 }} />
          {t.ntMean}: {nt.m} <span style={{ color: "#666" }}>(±{nt.sd})</span>
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang]   = useState("en");
  const [view, setView]   = useState("welcome");
  const [resp, setResp]   = useState(Array(18).fill(null));
  const [error, setError] = useState(false);

  const t  = ui[lang];
  const it = items[lang];
  const answered = resp.filter(r => r !== null).length;

  const setR = (i, v) => {
    const nr = [...resp]; nr[i] = v; setResp(nr); setError(false);
  };

  const submit = () => {
    if (resp.some(r => r === null)) {
      setError(true);
      const fi = resp.findIndex(r => r === null);
      document.getElementById(`item-${fi}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calcScores = () => {
    let total = 0, f1 = 0, f2 = 0;
    it.forEach((item, i) => {
      const s = item.reverse ? 8 - resp[i] : resp[i];
      total += s;
      if (item.factor === 1) f1 += s; else f2 += s;
    });
    return { total, f1, f2 };
  };

  const restart = () => {
    setResp(Array(18).fill(null));
    setView("welcome");
    setError(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const C = {
    navy:   "#2C3E6B",
    amber:  "#E8824A",
    cream:  "#F7F4EF",
    white:  "#FFFFFF",
    ink:    "#1A1A2E",
    muted:  "#555",
    border: "#E2DED7",
    warm:   "#EDE9E2",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #F7F4EF; font-family: 'DM Sans', sans-serif; color: #1A1A2E; }
        button { font-family: 'DM Sans', sans-serif; }
        .scale-btn:hover { border-color: #2C3E6B !important; background: #EEF1F7 !important; }
        .scale-btn.sel { background: #2C3E6B !important; color: white !important; border-color: #2C3E6B !important; }
        .primary-btn:hover { background: #1e2d52 !important; }
        .ghost-btn:hover { background: #2C3E6B !important; color: white !important; }
        a { color: #2C3E6B; }
      `}</style>

      <div style={{ background: C.cream, minHeight: "100vh" }}>
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "2rem 1.25rem 5rem" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2.5rem", paddingBottom: "1.25rem", borderBottom: `1px solid ${C.border}` }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: C.navy, letterSpacing: "-0.01em" }}>{t.title}</div>
              <div style={{ fontSize: "0.7rem", color: C.muted, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.07em" }}>{t.subtitle}</div>
            </div>
            <div style={{ display: "flex", gap: 3, background: C.warm, borderRadius: 8, padding: 3, flexShrink: 0, marginLeft: 12 }}>
              {["en","de"].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: "0.3rem 0.8rem", borderRadius: 6, border: "none", cursor: "pointer",
                  fontSize: "0.78rem", fontWeight: 600,
                  background: lang === l ? C.white : "transparent",
                  color: lang === l ? C.navy : C.muted,
                  boxShadow: lang === l ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.15s",
                }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Welcome */}
          {view === "welcome" && (
            <div>
              <div style={{ background: C.white, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "0.5rem" }}>{t.welcomeSmall}</div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: C.navy, marginBottom: "1rem", lineHeight: 1.3 }}>{t.fullName}</h1>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#333" }}>{t.intro}</p>
              </div>

              <div style={{ background: "#FFF8F2", border: `1px solid #F5DCC8`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "1.25rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B85C20", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 6 }}>{t.disclaimerHead}</div>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "#444" }}>{t.disclaimerBody}</p>
              </div>

              <div style={{ background: C.warm, borderRadius: 10, padding: "0.9rem 1.2rem", fontSize: "0.78rem", color: "#555", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1.75rem" }}>
                {t.citationPrefix}{" "}
                <a href={t.citationUrl} target="_blank" rel="noreferrer" style={{ fontStyle: "normal", fontWeight: 600 }}>{t.citationUrlLabel}</a>
              </div>

              <button className="primary-btn" onClick={() => setView("questionnaire")} style={{
                background: C.navy, color: C.white, border: "none", borderRadius: 12,
                padding: "0.9rem 2.25rem", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
                letterSpacing: "0.02em", transition: "background 0.2s",
              }}>
                {t.start} &rarr;
              </button>
            </div>
          )}

          {/* Questionnaire */}
          {view === "questionnaire" && (
            <div>
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ height: 4, background: C.warm, borderRadius: 2, overflow: "hidden", marginBottom: 6 }}>
                  <div style={{ height: "100%", width: `${(answered / 18) * 100}%`, background: C.navy, borderRadius: 2, transition: "width 0.3s ease" }} />
                </div>
                <div style={{ fontSize: "0.75rem", color: C.muted, textAlign: "right" }}>{answered} / 18 {t.answered}</div>
              </div>

              {it.map((item, i) => (
                <div key={item.id} id={`item-${i}`} style={{
                  background: C.white, borderRadius: 12, padding: "1.5rem",
                  marginBottom: "0.875rem",
                  border: `2px solid ${resp[i] !== null ? "#C8DEB8" : C.border}`,
                  transition: "border-color 0.2s",
                }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#777", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 6 }}>
                    {i + 1} {t.itemOf} 18
                  </div>
                  <div style={{ fontSize: "0.97rem", lineHeight: 1.65, color: C.ink, marginBottom: "1.2rem" }}>{item.text}</div>

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#555", marginBottom: 6, lineHeight: 1.3 }}>
                    <span style={{ maxWidth: "42%", textAlign: "left" }}>{t.scaleL}</span>
                    <span style={{ maxWidth: "42%", textAlign: "right" }}>{t.scaleR}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    {[1,2,3,4,5,6,7].map(v => (
                      <button key={v} onClick={() => setR(i, v)}
                        className={`scale-btn${resp[i] === v ? " sel" : ""}`}
                        style={{
                          flex: 1, minWidth: 0, aspectRatio: "1 / 1", maxWidth: 52,
                          border: `2px solid ${resp[i] === v ? C.navy : C.border}`,
                          borderRadius: 8, background: resp[i] === v ? C.navy : C.white,
                          color: resp[i] === v ? C.white : "#333",
                          cursor: "pointer", fontSize: "0.85rem", fontWeight: 600,
                          transition: "all 0.12s", display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {error && <div style={{ color: "#B03030", fontSize: "0.85rem", textAlign: "center", margin: "0.75rem 0", fontWeight: 500 }}>{t.errorMsg}</div>}

              <button className="primary-btn" onClick={submit} style={{
                background: C.navy, color: C.white, border: "none", borderRadius: 12,
                padding: "1rem 2rem", fontSize: "0.95rem", fontWeight: 600,
                cursor: "pointer", width: "100%", marginTop: "0.5rem",
                transition: "background 0.2s", letterSpacing: "0.02em",
              }}>
                {t.submit} &rarr;
              </button>
            </div>
          )}

          {/* Results */}
          {view === "results" && (() => {
            const { total, f1, f2 } = calcScores();
            return (
              <div>
                <div style={{ background: C.white, borderRadius: 16, padding: "2rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", marginBottom: "1.25rem" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", fontWeight: 700, color: C.navy, marginBottom: "1.5rem" }}>{t.resultsHead}</h2>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{t.totalLabel}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: C.navy, lineHeight: 1 }}>{total}</span>
                      <span style={{ fontSize: "1.1rem", color: "#999" }}>/126</span>
                    </div>
                  </div>
                  <ScoreViz score={total} data={ref.total} t={t} />
                </div>

                <div style={{ background: C.white, borderRadius: 16, padding: "1.75rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: C.navy, display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: C.navy }}>{t.f1name}</span>
                  </div>
                  <p style={{ fontSize: "0.81rem", color: "#555", lineHeight: 1.55, marginBottom: "1.25rem" }}>{t.f1desc}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: C.navy, lineHeight: 1 }}>{f1}</span>
                    <span style={{ fontSize: "0.95rem", color: "#999" }}>/84</span>
                  </div>
                  <ScoreViz score={f1} data={ref.f1} t={t} />
                </div>

                <div style={{ background: C.white, borderRadius: 16, padding: "1.75rem", boxShadow: "0 2px 14px rgba(0,0,0,0.05)", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5B8A8A", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: C.navy }}>{t.f2name}</span>
                  </div>
                  <p style={{ fontSize: "0.81rem", color: "#555", lineHeight: 1.55, marginBottom: "1.25rem" }}>{t.f2desc}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: C.navy, lineHeight: 1 }}>{f2}</span>
                    <span style={{ fontSize: "0.95rem", color: "#999" }}>/42</span>
                  </div>
                  <ScoreViz score={f2} data={ref.f2} t={t} />
                </div>

                <div style={{ background: C.warm, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{t.noteHead}</div>
                  <p style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.65, fontStyle: "italic" }}>{t.noteBody}</p>
                </div>

                <button className="ghost-btn" onClick={restart} style={{
                  background: "transparent", border: `2px solid ${C.navy}`, color: C.navy,
                  borderRadius: 12, padding: "0.75rem 1.75rem", fontSize: "0.88rem", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}>
                  &larr; {t.restart}
                </button>
              </div>
            );
          })()}
        </div>
      </div>
    </>
  );
}
