import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        "max-xsm":{"max":"320px", "min":"280px"},
        "max-sm":{"max":"428px"},
        "cs":{"max":"400px"},
        "max-msm":{"max":"639px", "min":"429px"},
      }
    },
  },
  plugins: [],
} satisfies Config;
