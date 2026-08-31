import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kahawa West Family Hospital — Family healthcare in Kahawa West, Nairobi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f5f4ee",
          color: "#082b21",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(255,253,248,0.98) 0%, rgba(239,245,240,0.96) 52%, rgba(205,225,214,0.88) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -110,
            top: -120,
            width: 430,
            height: 430,
            borderRadius: 999,
            background: "#dcede3",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 52,
            bottom: -190,
            width: 470,
            height: 470,
            borderRadius: 999,
            background: "#e9b44c",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            padding: "34px 54px 0 54px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              background: "#0c3b2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e9b44c",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            +
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              Kahawa West
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 3,
                color: "#5c6b63",
                marginTop: 3,
              }}
            >
              FAMILY HOSPITAL
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: "66px 54px 0 54px",
            width: 780,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              fontSize: 17,
              fontWeight: 700,
              color: "#14553f",
              letterSpacing: 1.7,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#e9b44c",
              }}
            />
            LEVEL 3 NURSING HOME · 24527
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2.4,
            }}
          >
            Family care that
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginTop: 1,
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2.4,
            }}
          >
            <span style={{ color: "#1a9b6d" }}>knows</span>
            <span>&nbsp;your name.</span>
          </div>

          <div
            style={{
              width: 210,
              height: 7,
              borderRadius: 99,
              background: "#e1ad28",
              marginTop: 9,
            }}
          />

          <div
            style={{
              marginTop: 27,
              fontSize: 21,
              lineHeight: 1.45,
              color: "#4d5d56",
              maxWidth: 720,
            }}
          >
            Family healthcare, specialist clinics, diagnostics and supportive care in Kahawa West, Nairobi.
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 28,
            }}
          >
            <div
              style={{
                background: "#0c5a45",
                color: "white",
                borderRadius: 999,
                padding: "15px 24px",
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              Book an appointment
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid #d7e3da",
                color: "#143e33",
                borderRadius: 999,
                padding: "15px 24px",
                fontSize: 17,
                fontWeight: 700,
              }}
            >
              0798 319936
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 50,
            top: 160,
            width: 310,
            borderRadius: 26,
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(255,255,255,0.9)",
            padding: 23,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 18px 40px rgba(12,59,46,0.10)",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#1b654d",
              letterSpacing: 1.8,
              textTransform: "uppercase",
            }}
          >
            Our services
          </div>
          {[
            "General Outpatient Care",
            "Mother & Child Health",
            "Eye Clinic",
            "Basic Orthopaedics",
            "Class C Laboratory",
          ].map((service) => (
            <div
              key={service}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 16,
                fontSize: 14,
                fontWeight: 700,
                color: "#263731",
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 99,
                  background: "white",
                  border: "1px solid #dce9df",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d8b69",
                  fontSize: 13,
                }}
              >
                ✓
              </span>
              {service}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            right: 78,
            bottom: 42,
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderRadius: 23,
            background: "rgba(255,255,255,0.83)",
            border: "1px solid rgba(255,255,255,0.95)",
            padding: "18px 22px",
            boxShadow: "0 16px 38px rgba(12,59,46,0.10)",
          }}
        >
          <div style={{ fontSize: 28, color: "#2e8f6c" }}>♡</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#18382e" }}>
              Caring for every stage of life.
            </div>
            <div style={{ fontSize: 13, color: "#68746e", marginTop: 5 }}>
              You&apos;re in good hands.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
