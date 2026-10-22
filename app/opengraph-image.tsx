import { ImageResponse } from "next/og";
export const alt = "Hashwift — Good food. Zero inbox chaos.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#07090e",
        padding: "70px",
        color: "#f2f5f4",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 40, color: "#34d399" }}>
        # hashwift.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        <div>Good food.</div>
        <div style={{ color: "#34d399" }}>Zero inbox chaos.</div>
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#a3a9b3" }}>
        WhatsApp ordering for kitchens that mean business. · gethashwift.com
      </div>
    </div>,
    size,
  );
}
