
export default function AssessmentPage() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#0f172a",
      color: "white",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
          🧩 تقييم البازل في المبيعات
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "30px" }}>
          هذا التقييم مبني على فكرة أن المبيعات وتطوير الأعمال
          <br />
          ليست مهارة واحدة، بل صورة متكاملة من قطع مختلفة.
        </p>

        <p style={{ fontSize: "1rem", opacity: 0.85 }}>
          قريبًا ✨<br />
          ستجاوب على مجموعة أسئلة،
          وكل إجابة تكشف قطعة من البازل الخاص فيك.
        </p>
      </div>
    </main>
  );
}
