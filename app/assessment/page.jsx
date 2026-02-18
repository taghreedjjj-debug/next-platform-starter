
"use client";

import { useState, useEffect } from "react";

export default function Assessment() {
  const questions = [
    {
      key: "diagnosis",
      text: "كيف تقيّمين قدرتك على تشخيص احتياج العميل؟",
      options: ["قوية", "متوسطة", "ضعيفة"],
    },
    {
      key: "negotiation",
      text: "كيف مستوى التفاوض عندك؟",
      options: ["قوية", "متوسطة", "تحتاج تطوير"],
    },
    {
      key: "followup",
      text: "كيف تقيّمين المتابعة بعد العرض؟",
      options: ["منتظمة", "غير ثابتة", "ضعيفة"],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleAnswer(option) {
    const currentQuestion = questions[step];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: option,
    }));
    setStep(step + 1);
  }

  // 🔮 AI ANALYSIS (Mock الآن – نربطه بـ AI حقيقي لاحقًا)
  async function analyzeAnswers() {
    setLoading(true);

    // محاكاة ذكاء اصطناعي
    setTimeout(() => {
      const analysis = {
        diagnosis:
          answers.diagnosis === "قوية"
            ? "🧠 تشخيصك ممتاز، تعرفين تسألين الأسئلة الصح."
            : "🔍 تحتاجين تركيز أكثر على فهم احتياج العميل.",
        negotiation:
          answers.negotiation === "قوية"
            ? "💬 تفاوضك قوي وتعرفين قيمة عرضك."
            : "📉 التفاوض عندك يحتاج أدوات أوضح.",
        followup:
          answers.followup === "منتظمة"
            ? "📅 متابعتك احترافية وتزيد فرص الإغلاق."
            : "⏳ المتابعة نقطة تحتاج تنظيم أكثر.",
      };

      setResult(analysis);
      setLoading(false);
    }, 1500);
  }

  // تشغيل التحليل بعد آخر سؤال
  useEffect(() => {
    if (step === questions.length) {
      analyzeAnswers();
    }
  }, [step]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "white",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%" }}>
        {step < questions.length ? (
          <>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>
              🧩 {questions[step].text}
            </h2>

            {questions[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                style={{
                  display: "block",
                  width: "100%",
                  margin: "12px 0",
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  background: "#1f2937",
                  color: "white",
                }}
              >
                {opt}
              </button>
            ))}
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
              🧩 تم جمع القطع
            </h2>

            {loading && <p>🤖 الذكاء الاصطناعي يحلل إجاباتك...</p>}

            {result && (
              <div
                style={{
                  background: "#111827",
                  padding: "24px",
                  borderRadius: "16px",
                  marginTop: "20px",
                  textAlign: "right",
                }}
              >
                <p>{result.diagnosis}</p>
                <p>{result.negotiation}</p>
                <p>{result.followup}</p>

                <p style={{ marginTop: "20px", opacity: 0.7 }}>
                  🧩 كل نتيجة تمثل قطعة… ومع وعيك تكتمل الصورة.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
