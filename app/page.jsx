
export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "white",
      padding: "40px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🧩 لعبة البازل في المبيعات
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
          هذه التجربة مبنية على فكرة بسيطة:
          <br />
          المبيعات وتطوير الأعمال ليست مهارة واحدة،
          بل صورة كاملة تتكوّن من قطع.
        </p>

        <p style={{ fontSize: "1rem", opacity: 0.85, marginBottom: "40px" }}>
          كل قطعة تمثّل مرحلة، قرار، أو وعي.
          ومع كل قطعة تكتمل الصورة.
        </p>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "1rem",
            background: "#22c55e",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          ابدأ التقييم
        </button>
      </div>
    </main>
  );
}
