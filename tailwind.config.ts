import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
            ],
              theme: {
                  extend: {
                        colors: {
                                background: "#F8F7F4",
                                        foreground: "#111111",
                                                primary: "#0057FF",
                                                        primaryHover: "#004CE0",
                                                                success: "#00C48C",
                                                                        warning: "#FFB800",
                                                                                surface: "#FFFFFF",
                                                                                        surfaceBorder: "#E5E5E5",
                                                                                              },
                                                                                                    fontFamily: {
                                                                                                            heading: ["var(--font-syne)", "sans-serif"],
                                                                                                                    body: ["var(--font-dm-sans)", "sans-serif"],
                                                                                                                          },
                                                                                                                              },
                                                                                                                                },
                                                                                                                                  plugins: [],
                                                                                                                                  };
                                                                                                                                  export default config;
                                                                                                                                  
