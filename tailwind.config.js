module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        title: ["ColourSans", "Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(270deg, #35A1DA 0%, #324AAD 100%)",
        "step-gradient": "linear-gradient(90deg, #002A68 0%, #0041A3 100%)",
      },
      boxShadow: {
        "custom-light": "0px 0px 0.84px 0px #30497433",
        "custom-dark": "0px 0.84px 4px -1px #2E4F8833",
      },
      colors: {
        "gray-fade": "rgba(89, 86, 86, 0.65)",
        gray1: "#F4F5F4",
        gray2: "#EAECEA",
        gray3: "#D7D5CB",
        gray4: "#989E94",
        gray5: "#798174",
        gray6: "#535850",
        gray7: "#3C403A",
        surface: "#FAFCFF",
        surface2: "#F7F8FA",
        blue1: "#F5F9FF",
        blue2: "#ebf3ff",
        blue3: "#ADCEFF",
        blue4: "#3385FF",
        "blue-gradient-from": "#369FFF",
        "blue-gradient-to": "#64B5FF",
        red1: "#FDECEC",
        red3: "#F47B7B",
        red4: "#EE2F2F",
        red5: "#D01111",
        red6: "#F9B4B44D",
        green1: "#E1FAF2",
        green2: "#8BE4C84D",
        green3: "#31CE9C",
        green4: "#10835E",
        "green-success-icon": "#80C783",
        "green-gradient-from": "#31CE9C",
        "green-gradient-to": "#2EDE91",
        greenBtn: "#28bf8c",
        yellow1: "#FFFCEB",
        yellow2: "#FFF6C2",
        yellow3: "#FFE75C",
        yellow4: "#FFD800",
        yellow5: "#E0BF00",
        yellow6: "#B89C00",
        "orange-gradient-from": "#FF8B18",
        "orange-gradient-to": "#FF9F41",
        stroke2: "#EAECEA",
        success: "#31CE80",
        fail: "#FB5B5B",
      },
      fontSize: {
        "2xs": "10px",
      },
      dropShadow: {
        red3: "0 4px 0 #F44949",
        greenBtn: "0 4px 0 #04977F",
        "top-card": "0 -4px 24px  #00000014",
      },
      boxShadow: {
        kpi: "0 10px 30px 0 #98CEFF52",
        faqs: "0 4px 24px 0 #0000000F",
        kit: "0px 2px 12px 0px #0000000A",
        pdf: "0px 2px 12px 0px #0000001F",
      },
      padding: {
        1.5: "0.375rem",
      },
    },
  },
};
