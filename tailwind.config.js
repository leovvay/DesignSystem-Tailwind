const colors = require("tailwindcss/colors");
const { theme } = require("tailwindcss/stubs/defaultConfig.stub");

module.exports = {
    purge: {
        enabled: true,
        content: ["src/*.html"],
    },
    theme: {
        fontFamily: {
            Heebo: ["Heebo", "sans-serif"],
            Mont: ["Mont", "sans-serif"],
        },
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            full: "9999px",
            large: "12px",
            1.75: "7px",
            2.5: '10px'
        },
        scrollbar: {
            0.5: '2px'
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'miniDesktop': '1366px',
            'desktop': '1440px',
            '2xl': '1536px',
        },
        extend: {
            zIndex: {
                1: '1',
                2: '2'
            },
            maxWidth: {
                93.5: '23.375rem',
                64: '16rem',
                99.75: '399px',
                150: '600px',
                '7.2xl': '1312px'
            },
            minWidth: {
                61: "244px",
            },
            width: {
                7.5: '30px',
                11: '44px',
                32.5: '8.125rem',
                79: '316px',
                85: '340px',
                93.5: '23.375rem',
                125.5: '502px',
                130: '32.5rem',
                144: '36rem',
                150: '37.5rem',
                170: '680px',
                259: '64.75rem',
                328: '1312px'
            },
            height: {
                7.5: '30px',
                11: '44px',
                18.25: '73px',
                34.25: '137px'
            },
            maxHeight: {
                129: '32.25rem',
                138: '34.5rem',
                '90vh': '90vh'
            },
            minHeight: {
                4.5: '18px',
                12: '3rem',
                13.5: '3.375rem',
                16: '4rem',
                35.25: "141px",
                50: "200px"
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 }
                },
                slide: {
                    '0%': { opacity: 0, maxHeight: 0 },
                    '100%': { opacity: 1, maxHeight: 'max-content' }
                }
            },
            animation: {
                blink: 'pulse 2s ease-in-out infinite',
                slide: 'slide .5s ease-in-out'
            },
            fontSize: {
                dotIcon: '8px',
                playIcon: '10px',
                checkboxTitle: '22px',
            },
            backgroundImage: {
                bgImgDefault: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgba(209, 59, 199, 1)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
                bgImgDark: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgba(167, 47, 159, 1)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
                bgImgLight: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgba(232, 157, 227, 1)' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
            },
            boxShadow: {
                base: "0px 1px 2px rgba(16, 16, 155, 0.08), 0px 1px 3px rgba(16, 16, 155, 0.08)",
                md: "0px 2px 4px rgba(16, 16, 155, 0.08), 0px 4px 6px rgba(16, 16, 155, 0.08)",
                lg: "0px 10px 15px rgba(16, 16, 155, 0.08), 0px 4px 6px rgba(16, 16, 155, 0.08)",
                xl: "0px 20px 25px rgba(16, 16, 155, 0.08), 0px 10px 10px rgba(16, 16, 155, 0.08)",
                inner: "inset 2px 2px 4px rgba(13, 13, 88, 0.08)",
                'success-toast': "0px 8px 12px rgba(14, 149, 99, 0.06)",
                'info-toast': "0px 8px 12px rgba(0, 144, 204, 0.06)",
                'warn-toast': "0px 8px 12px rgba(226, 151, 15, 0.08)",
                'err-toast': "0px 8px 12px rgba(189, 9, 54, 0.08)",
                'dropdown-menu': "0px 10px 15px rgba(16, 16, 155, 0.08), 0px 4px 6px rgba(16, 16, 155, 0.08)",
                'modal': "0px 1px 0px #F1F1F9",
            },
            spacing: {
                0.125: "0.5px",
                0.25: "1px",
                0.5: "2px",
                0.75: "0.1875rem",
                1.25: "0.3125rem",
                1.6: "6.5px",
                1.9: "0.4375rem",
                2.25: "0.5625rem",
                2.75: "0.65625rem",
                3.8: "15px",
                3.9: "15.5px",
                4.25: "1.0625rem",
                4.5: "1.125rem",
                5.5: "1.3125rem",
                6.5: "1.625rem",
                6.75: "1.6875rem",
                7.5: "1.875rem",
                13: "3.3125rem",
                15: "3.75rem",
                17: "4.375rem",
                19: "4.6875rem",
                21: "5.1875rem",
                25: "6.25rem",
                31: "7.75rem",
                37: "9.375rem",
                39: "9.6875rem",
                61: "15.25rem",
                73: "18.125rem",
                82: "21.875rem",
                95: "23.4375rem",
                134.5: "538px"
            },
            lineHeight: {
                4.5: "18px",
                5.5: "22px",
                9.5: "38px"
            },
            colors: {
                "daily-dev-tips": "#F89283",
                headlineTextColor: "#0D0D58",
                primary: "#10109B",
                primaryDark: "#0D0D58",
                "primary-80": "#4040AF",
                "primary-60": "#7070C3",
                "primary-40": "#9F9FD7",
                "primary-20": "#CFCFEB",
                "primary-5": "#F1F1F9",
                secondary: "#D13BC7",
                secondaryDark: "#A72F9F",
                "secondary-80": "#DA62D2",
                "secondary-60": "#E389DD",
                "secondary-40": "#E89DE3",
                "secondary-20": "#F1C4EE",
                "secondary-5": "#FCF3FC",
                dark: "#040426",
                "dark-80": "#363651",
                "dark-60": "#68687D",
                "dark-40": "#9B9BA8",
                "dark-20": "#CDCDD4",
                "dark-5": "#F0F0F2",
                violet: "#4B00C8",
                violetDark: "#3C00A0",
                "violet-80": "#6F33D3",
                "violet-60": "#9366DE",
                "violet-40": "#A580E4",
                "violet-20": "#C9B3EF",
                "violet-5": "#F4F0FC",
                blue: "#00B4FF",
                blueDark: "#0090CC",
                "blue-80": "#33C3FF",
                "blue-60": "#66D2FF",
                "blue-40": "#99E1FF",
                "blue-20": "#CCF0FF",
                "blue-5": "#F0FBFF",
                orange: "#FFBC42",
                orangeDark: "#E2970F",
                "orange-80": "#FFC968",
                "orange-60": "#FFD78E",
                "orange-40": "#FFE4B3",
                "orange-20": "#FFF2D9",
                "orange-5": "#FFFBF4",
                green: "#12BA7C",
                greenDark: "#0E9563",
                "green-80": "#41C896",
                "green-60": "#71D6B0",
                "green-40": "#A0E3CB",
                "green-20": "#D0F1E5",
                "green-5": "#F1FBF7",
                red: "#EC0B43",
                redDark: "#BD0936",
                "red-80": "#F03C69",
                "red-60": "#F46D8E",
                "red-40": "#F79DB4",
                "red-20": "#FBCED9",
                "red-5": "#FEF0F4",
                background: "#FAFBFF",
            },
        },
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        require('@tailwindcss/custom-forms'),
        function({ addUtilities }) {
            const extendUnderline = {
                ".underline": {
                    "text-decoration-thickness": "2px",
                    "text-underline-offset": "2px",
                },
            };
            addUtilities(extendUnderline);
        },
    ],
    variants: {
        extend: {
            scrollbar: 'rounded',
        },
    },
};