"use client";
import { useState } from "react";

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: "diagnosis",
      text: "عند أول تواصل مع العميل، وش تركيزك الأساسي؟",
      options: [
        "أفهم احتياجه قبل ما أتكلم",
        "أشرح الخدمة مباشرة",
        "أحاول أقنعه بسرعة"
      ]
    },
    {
      id: "negotiation",
      text: "إذا اعترض العميل على السعر، وش أول رد فعلك؟",
      options: [
        "أستفسر عن سبب الاعتراض",
        "أدافع عن السعر",
        "أقدم خصم"
      ]
    }
  ];

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  }

  return (
    <main style={{ minHeight: "100vh", padding: "40px", background: "#0B1220", color: "white" }}>
      {step < questions.length ? (
        <div>
          <h2>{questions[step].text}</h2>
          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{ display: "block", margin: "12px 0", padding: "12px" }}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>🧩 تم جمع القطع</h2>
          <p>الخطوة الجاية: تحليل إجاباتك بالذكاء الاصطناعي</p>
        </div>
      )}
    </main>
  );
}
