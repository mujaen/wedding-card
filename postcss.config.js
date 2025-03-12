module.exports = {
  plugins: [
    require("postcss-url")({
      url: "inline", // URL을 인라인으로 처리하여 로컬 폰트 이름을 유지
    }),
    require("tailwindcss"),
    require("autoprefixer"),
    // 기타 다른 PostCSS 플러그인들을 여기에 추가할 수 있습니다.
  ],
};
