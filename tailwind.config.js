module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(270deg, #35A1DA 0%, #324AAD 100%)",
      },
      boxShadow: {
        "custom-light": "0px 0px 0.84px 0px #30497433",
        "custom-dark": "0px 0.84px 4px -1px #2E4F8833",
      },
      colors: {
        "gray-fade": "rgba(89, 86, 86, 0.65)",
        gray1: "#F4F5F4",
        gray3: "#D7D5CB",
        gray5: "#798174",
        gray6: "#535850",
        surface: "#FAFCFF",
        blue2: "#ebf3ff",
        blue3: "#f7f6fd",
        blue4: "#3385FF",
        red1: "#FDECEC",
        red3: "#F47B7B",
        red4: "#EE2F2F",
        red5: "#D01111",
        red6: "#F9B4B44D",
        green1: "#E1FAF2",
        green2: "#8BE4C84D",
        green3: "#80C783",
        green4: "#10835E",
        greenBtn: "#2DC28D",
        yellow1: "#FFFCEB",
        yellow2: "#FFF6C2",
        yellow5: "#E0BF00",
        yellow6: "#B89C00",
      },
      fontSize: {
        "2xs": "10px",
      },
      dropShadow: {
        red3: "0 4px 0 #F44949",
        greenBtn: "0 4px 0 #04977F",
      },
      boxShadow: {
        kpi: "0 10px 30px 0 #98CEFF52",
      },
    },
  },
};
