import { ImageResponse } from "next/og";
import { getArticleBySlug } from "@/lib/mdx";
import { profile } from "@/content/profile";

export const alt = "Article Preview Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%", background: "#0f172a" }} />
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: "32px",
              color: "#818cf8",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "24px",
            }}
          >
            {profile.name} • Articles
          </p>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "32px",
              color: "#f8fafc",
            }}
          >
            {article.meta.title}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            {article.meta.preview.length > 120
              ? `${article.meta.preview.substring(0, 120)}...`
              : article.meta.preview}
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: "32px", fontWeight: "bold", color: "#f8fafc", margin: 0 }}>
              {profile.title}
            </p>
            <p style={{ fontSize: "24px", color: "#64748b", margin: 0, marginTop: "8px" }}>
              {profile.positioning}
            </p>
          </div>
          <div style={{ fontSize: "28px", color: "#818cf8", fontWeight: "bold" }}>
            azadhossain.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
