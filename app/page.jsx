import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0f172a, #020617)",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          background: "rgba(2,6,23,0.6)",
          padding: "48px 32px",
          borderRadius: "24px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            marginBottom: "24px",
            lineHeight: "1.3",
          }}
        >
          🧩 لعبة البازل في المبيعات
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.9",
            opacity: 0.9,
            marginBottom: "28px",
          }}
        >
          هذه التجربة مبنية على فكرة بسيطة:
          <br />
          المبيعات وتطوير الأعمال ليست مهارة واحدة،
          بل صورة كاملة تتكوّن من قطع.
          <br />
          <br />
          كل قطعة تمثل مرحلة، قرار أو وعي.
          <br />
          ومع كل قطعة… تكتمل الصورة.
        </p>

        {/* زر الانتقال للتقييم */}
        <Link href="/assessment" style={{ textDecoration: "none" }}>
          <button
            type="button"
            style={{
              background: "#22c55e",
              color: "#022c22",
              padding: "14px 34px",
              borderRadius: "14px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 12px 30px rgba(34,197,94,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ابدأ التقييم
          </button>
        </Link>
      </div>
    </main>
  );
}
