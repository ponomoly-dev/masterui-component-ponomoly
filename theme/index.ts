export const DEFAULT_COLORS = {
  transparent: "transparent",
  neutral: {
    0: "#FFFFFF",
    100: "#F9FAFC",
    200: "#EDEFF5",
    300: "#E6E8F0",
    400: "#D8DAE5",
    500: "#C1C4D6",
    600: "#8F95B2",
    700: "#696F8C",
    800: "#474D66",
    900: "#051B44",
  },
  primary: {
    0: "#E9F1FF",
    100: "#CFE5FF",
    200: "#9BB8FF",
    300: "#638EFF",
    400: "#427AFF ",
    500: "#0066FF",
    600: "#0154D1",
    700: "#0049B7",
    800: "#0031BA",
    900: "#00398F",
  },
  secondary: {
    0: "#F2E8FE",
    100: "#EDDBFF",
    200: "#BBA1FF",
    300: "#8A6AFF",
    400: "#7156F5",
    500: "#694FE7",
    600: "#5A44E0",
    700: "#5133C7",
    800: "#4025AD",
    900: "#2A1A8D",
  },
  functional: {
    warning: {
      0: "#FFF7D0",
      100: "#FFDD7D",
      200: "#FFB729",
      300: "#EDA101",
      400: "#D48C00",
      500: "#BC7800",
      600: "#A36400",
      700: "#8C5100",
      800: "#763E00",
      900: "#612B00",
    },
    error: {
      0: "#FFDEDE",
      100: "#FFAFA3",
      200: "#FF988E",
      300: "#FF827A",
      400: "#FF6C66",
      500: "#CC3F40",
      600: "#D14343",
      700: "#A73636",
      800: "#892A2A",
      900: "#7D2828",
    },
    success: {
      0: "#DCF2EA",
      100: "#C6EDDF",
      200: "#A3E6CD",
      300: "#59C39A",
      400: "#52BD94",
      500: "#429777",
      600: "#00825D",
      700: "#006E4A",
      800: "#005938",
      900: "#004626",
    },
    information: {
      0: "#E9F1FF",
      100: "#B6CEFF",
      200: "#9BB8FF",
      300: "#80A3FF",
      400: "#648EFF",
      500: "#427AFF",
      600: "#0266FF",
      700: "#0053E8",
      800: "#0041D1",
      900: "#0031BA",
    },
  },
};

export const DEFAULT_FONTS = {
  /* Display */
  // 64/80/600/default
  d1: [
    "4rem",
    {
      lineHeight: "5rem",
      fontWeight: "600",
    },
  ],
  // 56/72/600/default
  d2: [
    "3.5rem",
    {
      lineHeight: "4.5rem",
      fontWeight: "600",
    },
  ],
  // 48/56/600/-1%
  d3: [
    "3rem",
    {
      lineHeight: "3.5rem",
      lineSpacing: "-0.01rem",
      fontWeight: "600",
    },
  ],
  /* Headline */
  // 40/64/600/-1.5px
  h1: [
    "2.5rem",
    {
      lineHeight: "4rem",
      lineSpacing: "-0.09375rem",
      fontWeight: "600",
    },
  ],
  // 30/48/600/-1.5px
  h2: [
    "2.5rem",
    {
      lineHeight: "3rem",
      lineSpacing: "-0.09375rem",
      fontWeight: "600",
    },
  ],
  // 24/32/600/-1px
  h3: [
    "1.875rem",
    {
      lineHeight: "2rem",
      lineSpacing: "-0.0625rem",
      fontWeight: "600",
    },
  ],
  // 18/24/600/-0.5px
  h4: [
    "1.125rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "600",
    },
  ],
  // 14/18/600/-0.5px
  h5: [
    "0.875rem",
    {
      lineHeight: "1.125rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "600",
    },
  ],
  /* Text */
  // 24/32/500/-0.5px
  t1: [
    "1.5rem",
    {
      lineHeight: "2rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 18/24/500/-0.5px
  t2: [
    "1.125rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 16/24/500/-0.5px
  t3: [
    "0.8888888889rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 14/20/500/-0.5px
  t4: [
    "0.875rem",
    {
      lineHeight: "1.25rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 12/18/500/-0.5px
  t5: [
    "0.75rem",
    {
      lineHeight: "1.125rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  /* Caption */
  // 12/18/500/-0.5px
  c1: [
    "0.75rem",
    {
      lineHeight: "1.125rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 10/16/500/-0.2px
  c2: [
    "0.625rem",
    {
      lineHeight: "1rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  /* Functional/Button */
  // 18/24/600/-0.5px
  b1: [
    "1.125rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "600",
    },
  ],
  // 16/24/600/-0.5px
  b2: [
    "1rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "600",
    },
  ],
  // 14/24/600/-0.5px
  b3: [
    "0.875rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "600",
    },
  ],
  /* Functional/Input */
  // 16/24/500/-0.5px
  i1: [
    "1rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 14/24/500/-0.5px
  i2: [
    "0.875rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  /* Functional/Checkbox */
  // 12/20/400/-0.5px
  cb: [
    "0.75rem",
    {
      lineHeight: "1.25rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "400",
    },
  ],
  /* Functional/Label */
  // 12/16/400/-0.5px
  lb: [
    "0.75rem",
    {
      lineHeight: "1rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "400",
    },
  ],
  /* Functional/Link */
  // 18/24/500/-0.5px
  l1: [
    "1.125rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 16/24/500/-0.5px
  l2: [
    "1rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  // 14/24/500/-0.5px
  l3: [
    "0.875rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "500",
    },
  ],
  /* Functional/Pagination */
  // 14/24/400/-0.5px
  pg: [
    "0.875rem",
    {
      lineHeight: "1.5rem",
      lineSpacing: "-0.03125rem",
      fontWeight: "400",
    },
  ],
};
