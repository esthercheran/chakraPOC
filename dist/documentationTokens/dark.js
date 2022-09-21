// src/documentationTokens/dark.json
var semantic = {
  fg: {
    default: {
      value: "#ffffff",
      type: "color"
    },
    muted: {
      value: "#94a3b8",
      type: "color"
    },
    subtle: {
      value: "#cbd5e1",
      type: "color"
    },
    "on-accent": {
      value: "#ffffff",
      type: "color"
    },
    "on-disabled": {
      value: "#94a3b8",
      type: "color"
    },
    disabled: {
      value: "#cbd5e1",
      type: "color"
    },
    accent: {
      value: "{semantic.cta.default}",
      type: "color",
      failedToResolve: true
    }
  },
  bg: {
    surface: {
      value: "#1e293b",
      type: "color"
    },
    muted: {
      value: "#475569",
      type: "color"
    },
    subtle: {
      value: "#31425C",
      type: "color"
    },
    canvas: {
      value: "#334155",
      type: "color"
    }
  },
  color: {
    actions: {
      primary: {
        default: {
          "text-color": {
            value: "#f4f4f5",
            type: "color"
          }
        }
      }
    }
  },
  "border-radius": {
    inputs: {
      value: "{semantic.border.radius.medium}",
      type: "borderRadius",
      failedToResolve: true
    }
  },
  "border-width": {
    inputs: {
      value: 1,
      type: "borderWidth"
    }
  }
};
var font_family = {
  serif: {
    value: "IBM Plex Serif",
    type: "fontFamilies"
  },
  "sans-serif": {
    value: "IBM Plex Sans",
    type: "fontFamilies"
  },
  mono: {
    value: "IBM Plex Mono",
    type: "fontFamilies"
  }
};
var font_size = {
  "0": {
    value: "8px",
    type: "fontSizes"
  },
  "1": {
    value: "10px",
    type: "fontSizes"
  },
  "2": {
    value: "12px",
    type: "fontSizes"
  },
  "3": {
    value: "14px",
    type: "fontSizes"
  },
  "4": {
    value: "16px",
    type: "fontSizes"
  },
  "5": {
    value: "18px",
    type: "fontSizes"
  },
  "6": {
    value: "20px",
    type: "fontSizes"
  },
  "7": {
    value: "22px",
    type: "fontSizes"
  },
  "8": {
    value: "24px",
    type: "fontSizes"
  },
  "9": {
    value: "26px",
    type: "fontSizes"
  },
  "10": {
    value: "28px",
    type: "fontSizes"
  },
  "11": {
    value: "30px",
    type: "fontSizes"
  },
  "12": {
    value: "32px",
    type: "fontSizes"
  },
  "13": {
    value: "34px",
    type: "fontSizes"
  },
  "14": {
    value: "36px",
    type: "fontSizes"
  },
  "15": {
    value: "38px",
    type: "fontSizes"
  },
  "16": {
    value: "40px",
    type: "fontSizes"
  },
  "17": {
    value: "42px",
    type: "fontSizes"
  },
  "18": {
    value: "44px",
    type: "fontSizes"
  },
  "19": {
    value: "46px",
    type: "fontSizes"
  },
  "20": {
    value: "48px",
    type: "fontSizes"
  },
  "21": {
    value: "50px",
    type: "fontSizes"
  },
  "22": {
    value: "52px",
    type: "fontSizes"
  },
  "23": {
    value: "54px",
    type: "fontSizes"
  },
  "24": {
    value: "64px",
    type: "fontSizes"
  },
  "25": {
    value: "80px",
    type: "fontSizes"
  },
  "26": {
    value: "112px",
    type: "fontSizes"
  },
  "27": {
    value: "140px",
    type: "fontSizes"
  },
  "28": {
    value: "160px",
    type: "fontSizes"
  }
};
var font_style = {
  normal: {
    value: "normal",
    type: "other"
  },
  italic: {
    value: "italic",
    type: "other"
  }
};
var font_weight = {
  semiBold: {
    value: "SemiBold",
    type: "fontWeights",
    default: "600"
  },
  regular: {
    value: "Regular",
    type: "fontWeights",
    default: "400"
  },
  light: {
    value: "Light",
    type: "fontWeights",
    default: "300"
  },
  bold: {
    value: "Bold",
    type: "fontWeights",
    default: "700"
  }
};
var line_height = {
  "1": {
    value: "130%",
    type: "lineHeights"
  },
  "2": {
    value: "150%",
    type: "lineHeights"
  },
  "100": {
    value: "100%",
    type: "lineHeights"
  },
  "120": {
    value: "120%",
    type: "lineHeights"
  }
};
var space = {
  "0": {
    value: 0,
    type: "spacing"
  },
  "25": {
    value: 2,
    type: "spacing"
  },
  "50": {
    value: 4,
    type: "spacing"
  },
  "75": {
    value: 6,
    type: "spacing"
  },
  "100": {
    value: 8,
    type: "spacing"
  },
  "125": {
    value: 10,
    type: "spacing"
  },
  "150": {
    value: 12,
    type: "spacing"
  },
  "175": {
    value: 14,
    type: "spacing"
  },
  "200": {
    value: 16,
    type: "spacing"
  },
  "225": {
    value: 18,
    type: "spacing"
  },
  "250": {
    value: 20,
    type: "spacing"
  },
  "275": {
    value: 22,
    type: "spacing"
  },
  "300": {
    value: 24,
    type: "spacing"
  },
  "350": {
    value: 28,
    type: "spacing"
  },
  "400": {
    value: 32,
    type: "spacing"
  },
  "500": {
    value: 40,
    type: "spacing"
  },
  "600": {
    value: 48,
    type: "spacing"
  },
  "700": {
    value: 56,
    type: "spacing"
  },
  "800": {
    value: 64,
    type: "spacing"
  },
  "900": {
    value: 72,
    type: "spacing"
  },
  "1000": {
    value: 80,
    type: "spacing"
  },
  "1200": {
    value: 96,
    type: "spacing"
  },
  "1400": {
    value: 112,
    type: "spacing"
  },
  "1600": {
    value: 128,
    type: "spacing"
  },
  "1800": {
    value: 144,
    type: "spacing"
  },
  "2000": {
    value: 160,
    type: "spacing"
  },
  "2200": {
    value: 176,
    type: "spacing"
  },
  "2400": {
    value: 192,
    type: "spacing"
  },
  "2600": {
    value: 208,
    type: "spacing"
  },
  "2800": {
    value: 224,
    type: "spacing"
  },
  "3000": {
    value: 240,
    type: "spacing"
  },
  "3200": {
    value: 256,
    type: "spacing"
  },
  "3400": {
    value: 288,
    type: "spacing"
  },
  "3600": {
    value: 320,
    type: "spacing"
  },
  "3800": {
    value: 384,
    type: "spacing"
  }
};
var size = {
  "0": {
    value: 0,
    type: "sizing"
  },
  "12": {
    value: 1,
    type: "sizing"
  },
  "25": {
    value: 2,
    type: "sizing"
  },
  "50": {
    value: 4,
    type: "sizing"
  },
  "75": {
    value: 6,
    type: "sizing"
  },
  "100": {
    value: 8,
    type: "sizing"
  },
  "125": {
    value: 10,
    type: "sizing"
  },
  "150": {
    value: 12,
    type: "sizing"
  },
  "175": {
    value: 14,
    type: "sizing"
  },
  "200": {
    value: 16,
    type: "sizing"
  },
  "225": {
    value: 18,
    type: "sizing"
  },
  "250": {
    value: 20,
    type: "sizing"
  },
  "275": {
    value: 22,
    type: "sizing"
  },
  "300": {
    value: 24,
    type: "sizing"
  },
  "400": {
    value: 32,
    type: "sizing"
  },
  "450": {
    value: 36,
    type: "sizing"
  },
  "500": {
    value: 40,
    type: "sizing"
  },
  "600": {
    value: 48,
    type: "sizing"
  },
  "700": {
    value: 56,
    type: "sizing"
  },
  "800": {
    value: 64,
    type: "sizing"
  },
  "900": {
    value: 72,
    type: "sizing"
  },
  "1000": {
    value: 80,
    type: "sizing"
  },
  "1200": {
    value: 96,
    type: "sizing"
  },
  "1400": {
    value: 112,
    type: "sizing"
  },
  "1600": {
    value: 128,
    type: "sizing"
  },
  "1800": {
    value: 144,
    type: "sizing"
  },
  "2000": {
    value: 160,
    type: "sizing"
  },
  "2200": {
    value: 176,
    type: "sizing"
  },
  "2400": {
    value: 192,
    type: "sizing"
  },
  "2600": {
    value: 208,
    type: "sizing"
  },
  "2800": {
    value: 224,
    type: "sizing"
  },
  "3000": {
    value: 240,
    type: "sizing"
  },
  "3200": {
    value: 256,
    type: "sizing"
  },
  "3400": {
    value: 288,
    type: "sizing"
  },
  "3600": {
    value: 320,
    type: "sizing"
  },
  "3800": {
    value: 384,
    type: "sizing"
  }
};
var opacity = {
  "5": {
    value: "5%",
    type: "opacity"
  },
  "10": {
    value: "10%",
    type: "opacity"
  },
  "15": {
    value: "15%",
    type: "opacity"
  },
  "20": {
    value: "20%",
    type: "opacity"
  },
  "25": {
    value: "25%",
    type: "opacity"
  },
  "30": {
    value: "30%",
    type: "opacity"
  },
  "40": {
    value: "40%",
    type: "opacity"
  },
  "50": {
    value: "50%",
    type: "opacity"
  },
  "60": {
    value: "60%",
    type: "opacity"
  },
  "70": {
    value: "70%",
    type: "opacity"
  },
  "80": {
    value: "80%",
    type: "opacity"
  },
  "90": {
    value: "90%",
    type: "opacity"
  },
  "100": {
    value: "100%",
    type: "opacity"
  }
};
var color = {
  slate: {
    "50": {
      value: "#f8fafc",
      type: "color"
    },
    "100": {
      value: "#f1f5f9",
      type: "color"
    },
    "200": {
      value: "#e2e8f0",
      type: "color"
    },
    "300": {
      value: "#cbd5e1",
      type: "color"
    },
    "400": {
      value: "#94a3b8",
      type: "color"
    },
    "500": {
      value: "#64748b",
      type: "color"
    },
    "600": {
      value: "#475569",
      type: "color"
    },
    "700": {
      value: "#334155",
      type: "color"
    },
    "800": {
      value: "#1e293b",
      type: "color"
    },
    "900": {
      value: "#0f172a",
      type: "color"
    }
  },
  gray: {
    "50": {
      value: "#f9fafb",
      type: "color"
    },
    "100": {
      value: "#f3f4f6",
      type: "color"
    },
    "200": {
      value: "#e5e7eb",
      type: "color"
    },
    "300": {
      value: "#d1d5db",
      type: "color"
    },
    "400": {
      value: "#9ca3af",
      type: "color"
    },
    "500": {
      value: "#6b7280",
      type: "color"
    },
    "600": {
      value: "#4b5563",
      type: "color"
    },
    "700": {
      value: "#374151",
      type: "color"
    },
    "800": {
      value: "#1f2937",
      type: "color"
    },
    "900": {
      value: "#111827",
      type: "color"
    }
  },
  zinc: {
    "50": {
      value: "#fafafa",
      type: "color"
    },
    "100": {
      value: "#f4f4f5",
      type: "color"
    },
    "200": {
      value: "#e4e4e7",
      type: "color"
    },
    "300": {
      value: "#d4d4d8",
      type: "color"
    },
    "400": {
      value: "#a1a1aa",
      type: "color"
    },
    "500": {
      value: "#71717a",
      type: "color"
    },
    "600": {
      value: "#52525b",
      type: "color"
    },
    "700": {
      value: "#3f3f46",
      type: "color"
    },
    "800": {
      value: "#27272a",
      type: "color"
    },
    "900": {
      value: "#18181b",
      type: "color"
    }
  },
  NeutralGray: {
    "50": {
      value: "#fafafa",
      type: "color"
    },
    "100": {
      value: "#f5f5f5",
      type: "color"
    },
    "200": {
      value: "#e5e5e5",
      type: "color"
    },
    "300": {
      value: "#d4d4d4",
      type: "color"
    },
    "400": {
      value: "#a3a3a3",
      type: "color"
    },
    "500": {
      value: "#737373",
      type: "color"
    },
    "600": {
      value: "#525252",
      type: "color"
    },
    "700": {
      value: "#404040",
      type: "color"
    },
    "800": {
      value: "#262626",
      type: "color"
    },
    "900": {
      value: "#171717",
      type: "color"
    }
  },
  stone: {
    "50": {
      value: "#fafaf9",
      type: "color"
    },
    "100": {
      value: "#f5f5f4",
      type: "color"
    },
    "200": {
      value: "#e7e5e4",
      type: "color"
    },
    "300": {
      value: "#d6d3d1",
      type: "color"
    },
    "400": {
      value: "#a8a29e",
      type: "color"
    },
    "500": {
      value: "#78716c",
      type: "color"
    },
    "600": {
      value: "#57534e",
      type: "color"
    },
    "700": {
      value: "#44403c",
      type: "color"
    },
    "800": {
      value: "#292524",
      type: "color"
    },
    "900": {
      value: "#1c1917",
      type: "color"
    }
  },
  red: {
    "50": {
      value: "#fef2f2",
      type: "color"
    },
    "100": {
      value: "#fee2e2",
      type: "color"
    },
    "200": {
      value: "#fecaca",
      type: "color"
    },
    "300": {
      value: "#fca5a5",
      type: "color"
    },
    "400": {
      value: "#f87171",
      type: "color"
    },
    "500": {
      value: "#ef4444",
      type: "color"
    },
    "600": {
      value: "#dc2626",
      type: "color"
    },
    "700": {
      value: "#b91c1c",
      type: "color"
    },
    "800": {
      value: "#991b1b",
      type: "color"
    },
    "900": {
      value: "#7f1d1d",
      type: "color"
    }
  },
  orange: {
    "50": {
      value: "#fff7ed",
      type: "color"
    },
    "100": {
      value: "#ffedd5",
      type: "color"
    },
    "200": {
      value: "#fed7aa",
      type: "color"
    },
    "300": {
      value: "#fdba74",
      type: "color"
    },
    "400": {
      value: "#fb923c",
      type: "color"
    },
    "500": {
      value: "#f97316",
      type: "color"
    },
    "600": {
      value: "#ea580c",
      type: "color"
    },
    "700": {
      value: "#c2410c",
      type: "color"
    },
    "800": {
      value: "#9a3412",
      type: "color"
    },
    "900": {
      value: "#7c2d12",
      type: "color"
    }
  },
  amber: {
    "50": {
      value: "#fffbeb",
      type: "color"
    },
    "100": {
      value: "#fef3c7",
      type: "color"
    },
    "200": {
      value: "#fde68a",
      type: "color"
    },
    "300": {
      value: "#fcd34d",
      type: "color"
    },
    "400": {
      value: "#fbbf24",
      type: "color"
    },
    "500": {
      value: "#f59e0b",
      type: "color"
    },
    "600": {
      value: "#d97706",
      type: "color"
    },
    "700": {
      value: "#b45309",
      type: "color"
    },
    "800": {
      value: "#92400e",
      type: "color"
    },
    "900": {
      value: "#78350f",
      type: "color"
    }
  },
  yellow: {
    "50": {
      value: "#fefce8",
      type: "color"
    },
    "100": {
      value: "#fef9c3",
      type: "color"
    },
    "200": {
      value: "#fef08a",
      type: "color"
    },
    "300": {
      value: "#fde047",
      type: "color"
    },
    "400": {
      value: "#facc15",
      type: "color"
    },
    "500": {
      value: "#eab308",
      type: "color"
    },
    "600": {
      value: "#ca8a04",
      type: "color"
    },
    "700": {
      value: "#a16207",
      type: "color"
    },
    "800": {
      value: "#854d0e",
      type: "color"
    },
    "900": {
      value: "#713f12",
      type: "color"
    }
  },
  lime: {
    "50": {
      value: "#f7fee7",
      type: "color"
    },
    "100": {
      value: "#ecfccb",
      type: "color"
    },
    "200": {
      value: "#d9f99d",
      type: "color"
    },
    "300": {
      value: "#bef264",
      type: "color"
    },
    "400": {
      value: "#a3e635",
      type: "color"
    },
    "500": {
      value: "#84cc16",
      type: "color"
    },
    "600": {
      value: "#65a30d",
      type: "color"
    },
    "700": {
      value: "#4d7c0f",
      type: "color"
    },
    "800": {
      value: "#3f6212",
      type: "color"
    },
    "900": {
      value: "#365314",
      type: "color"
    }
  },
  green: {
    "50": {
      value: "#f0fdf4",
      type: "color"
    },
    "100": {
      value: "#dcfce7",
      type: "color"
    },
    "200": {
      value: "#bbf7d0",
      type: "color"
    },
    "300": {
      value: "#86efac",
      type: "color"
    },
    "400": {
      value: "#4ade80",
      type: "color"
    },
    "500": {
      value: "#22c55e",
      type: "color"
    },
    "600": {
      value: "#16a34a",
      type: "color"
    },
    "700": {
      value: "#15803d",
      type: "color"
    },
    "800": {
      value: "#166534",
      type: "color"
    },
    "900": {
      value: "#14532d",
      type: "color"
    }
  },
  emerald: {
    "50": {
      value: "#ecfdf5",
      type: "color"
    },
    "100": {
      value: "#d1fae5",
      type: "color"
    },
    "200": {
      value: "#a7f3d0",
      type: "color"
    },
    "300": {
      value: "#6ee7b7",
      type: "color"
    },
    "400": {
      value: "#34d399",
      type: "color"
    },
    "500": {
      value: "#10b981",
      type: "color"
    },
    "600": {
      value: "#059669",
      type: "color"
    },
    "700": {
      value: "#047857",
      type: "color"
    },
    "800": {
      value: "#065f46",
      type: "color"
    },
    "900": {
      value: "#064e3b",
      type: "color"
    }
  },
  teal: {
    "50": {
      value: "#f0fdfa",
      type: "color"
    },
    "100": {
      value: "#ccfbf1",
      type: "color"
    },
    "200": {
      value: "#99f6e4",
      type: "color"
    },
    "300": {
      value: "#5eead4",
      type: "color"
    },
    "400": {
      value: "#2dd4bf",
      type: "color"
    },
    "500": {
      value: "#14b8a6",
      type: "color"
    },
    "600": {
      value: "#0d9488",
      type: "color"
    },
    "700": {
      value: "#0f766e",
      type: "color"
    },
    "800": {
      value: "#115e59",
      type: "color"
    },
    "900": {
      value: "#134e4a",
      type: "color"
    }
  },
  cyan: {
    "50": {
      value: "#ecfeff",
      type: "color"
    },
    "100": {
      value: "#cffafe",
      type: "color"
    },
    "200": {
      value: "#a5f3fc",
      type: "color"
    },
    "300": {
      value: "#67e8f9",
      type: "color"
    },
    "400": {
      value: "#22d3ee",
      type: "color"
    },
    "500": {
      value: "#06b6d4",
      type: "color"
    },
    "600": {
      value: "#0891b2",
      type: "color"
    },
    "700": {
      value: "#0e7490",
      type: "color"
    },
    "800": {
      value: "#155e75",
      type: "color"
    },
    "900": {
      value: "#164e63",
      type: "color"
    }
  },
  sky: {
    "50": {
      value: "#f0f9ff",
      type: "color"
    },
    "100": {
      value: "#e0f2fe",
      type: "color"
    },
    "200": {
      value: "#bae6fd",
      type: "color"
    },
    "300": {
      value: "#7dd3fc",
      type: "color"
    },
    "400": {
      value: "#38bdf8",
      type: "color"
    },
    "500": {
      value: "#0ea5e9",
      type: "color"
    },
    "600": {
      value: "#0284c7",
      type: "color"
    },
    "700": {
      value: "#0369a1",
      type: "color"
    },
    "800": {
      value: "#075985",
      type: "color"
    },
    "900": {
      value: "#0c4a6e",
      type: "color"
    }
  },
  blue: {
    "50": {
      value: "#eff6ff",
      type: "color"
    },
    "100": {
      value: "#dbeafe",
      type: "color"
    },
    "200": {
      value: "#bfdbfe",
      type: "color"
    },
    "300": {
      value: "#93c5fd",
      type: "color"
    },
    "400": {
      value: "#60a5fa",
      type: "color"
    },
    "500": {
      value: "#3b82f6",
      type: "color"
    },
    "600": {
      value: "#2563eb",
      type: "color"
    },
    "700": {
      value: "#1d4ed8",
      type: "color"
    },
    "800": {
      value: "#1e40af",
      type: "color"
    },
    "900": {
      value: "#1e3a8a",
      type: "color"
    }
  },
  indigo: {
    "50": {
      value: "#eef2ff",
      type: "color"
    },
    "100": {
      value: "#e0e7ff",
      type: "color"
    },
    "200": {
      value: "#c7d2fe",
      type: "color"
    },
    "300": {
      value: "#a5b4fc",
      type: "color"
    },
    "400": {
      value: "#818cf8",
      type: "color"
    },
    "500": {
      value: "#6366f1",
      type: "color"
    },
    "600": {
      value: "#4f46e5",
      type: "color"
    },
    "700": {
      value: "#4338ca",
      type: "color"
    },
    "800": {
      value: "#3730a3",
      type: "color"
    },
    "900": {
      value: "#312e81",
      type: "color"
    }
  },
  violet: {
    "50": {
      value: "#f5f3ff",
      type: "color"
    },
    "100": {
      value: "#ede9fe",
      type: "color"
    },
    "200": {
      value: "#ddd6fe",
      type: "color"
    },
    "300": {
      value: "#c4b5fd",
      type: "color"
    },
    "400": {
      value: "#a78bfa",
      type: "color"
    },
    "500": {
      value: "#8b5cf6",
      type: "color"
    },
    "600": {
      value: "#7c3aed",
      type: "color"
    },
    "700": {
      value: "#6d28d9",
      type: "color"
    },
    "800": {
      value: "#5b21b6",
      type: "color"
    },
    "900": {
      value: "#4c1d95",
      type: "color"
    }
  },
  purple: {
    "50": {
      value: "#faf5ff",
      type: "color"
    },
    "100": {
      value: "#f3e8ff",
      type: "color"
    },
    "200": {
      value: "#e9d5ff",
      type: "color"
    },
    "300": {
      value: "#d8b4fe",
      type: "color"
    },
    "400": {
      value: "#c084fc",
      type: "color"
    },
    "500": {
      value: "#a855f7",
      type: "color"
    },
    "600": {
      value: "#9333ea",
      type: "color"
    },
    "700": {
      value: "#7e22ce",
      type: "color"
    },
    "800": {
      value: "#6b21a8",
      type: "color"
    },
    "900": {
      value: "#581c87",
      type: "color"
    }
  },
  fuchsia: {
    "50": {
      value: "#fdf4ff",
      type: "color"
    },
    "100": {
      value: "#fae8ff",
      type: "color"
    },
    "200": {
      value: "#f5d0fe",
      type: "color"
    },
    "300": {
      value: "#f0abfc",
      type: "color"
    },
    "400": {
      value: "#e879f9",
      type: "color"
    },
    "500": {
      value: "#d946ef",
      type: "color"
    },
    "600": {
      value: "#c026d3",
      type: "color"
    },
    "700": {
      value: "#a21caf",
      type: "color"
    },
    "800": {
      value: "#86198f",
      type: "color"
    },
    "900": {
      value: "#701a75",
      type: "color"
    }
  },
  pink: {
    "50": {
      value: "#fdf2f8",
      type: "color"
    },
    "100": {
      value: "#fce7f3",
      type: "color"
    },
    "200": {
      value: "#fbcfe8",
      type: "color"
    },
    "300": {
      value: "#f9a8d4",
      type: "color"
    },
    "400": {
      value: "#f472b6",
      type: "color"
    },
    "500": {
      value: "#ec4899",
      type: "color"
    },
    "600": {
      value: "#db2777",
      type: "color"
    },
    "700": {
      value: "#be185d",
      type: "color"
    },
    "800": {
      value: "#9d174d",
      type: "color"
    },
    "900": {
      value: "#831843",
      type: "color"
    }
  },
  rose: {
    "50": {
      value: "#fff1f2",
      type: "color"
    },
    "100": {
      value: "#ffe4e6",
      type: "color"
    },
    "200": {
      value: "#fecdd3",
      type: "color"
    },
    "300": {
      value: "#fda4af",
      type: "color"
    },
    "400": {
      value: "#fb7185",
      type: "color"
    },
    "500": {
      value: "#f43f5e",
      type: "color"
    },
    "600": {
      value: "#e11d48",
      type: "color"
    },
    "700": {
      value: "#be123c",
      type: "color"
    },
    "800": {
      value: "#9f1239",
      type: "color"
    },
    "900": {
      value: "#881337",
      type: "color"
    }
  },
  neutrals: {
    black: {
      value: "#000000",
      type: "color"
    },
    white: {
      value: "#ffffff",
      type: "color"
    },
    transparent: {
      value: "#ffffff03",
      type: "color"
    }
  }
};
var border_radius = {
  "0": {
    value: "0px",
    type: "borderRadius"
  },
  "1": {
    value: "1px",
    type: "borderRadius"
  },
  "2": {
    value: "2px",
    type: "borderRadius"
  },
  "3": {
    value: "3px",
    type: "borderRadius"
  },
  "4": {
    value: "4px",
    type: "borderRadius"
  },
  "5": {
    value: "8px",
    type: "borderRadius"
  },
  "6": {
    value: "16px",
    type: "borderRadius"
  },
  "7": {
    value: "24px",
    type: "borderRadius"
  },
  "8": {
    value: "32px",
    type: "borderRadius"
  },
  "9": {
    value: "100px",
    type: "borderRadius"
  }
};
var border_width = {
  "0": {
    value: 0,
    type: "borderWidth"
  },
  "1": {
    value: 1,
    type: "borderWidth"
  },
  "2": {
    value: 2,
    type: "borderWidth"
  },
  "3": {
    value: 4,
    type: "borderWidth"
  },
  "4": {
    value: 5,
    type: "borderWidth"
  }
};
var tag = {
  sm: {
    height: {
      value: "{semantic.sizing.status.s.height}",
      type: "sizing",
      failedToResolve: true
    }
  },
  md: {
    height: {
      value: "{semantic.sizing.status.m.height}",
      type: "sizing",
      failedToResolve: true
    }
  },
  lg: {
    height: {
      value: "{semantic.sizing.status.l.height}",
      type: "sizing",
      failedToResolve: true
    }
  }
};
var switch2 = {
  sm: {
    width: {
      value: "26px",
      type: "sizing"
    },
    height: {
      value: "16px",
      type: "sizing"
    },
    thumb: {
      width: {
        value: 12,
        type: "sizing"
      },
      height: {
        value: 12,
        type: "sizing"
      }
    }
  },
  md: {
    width: {
      value: "34px",
      type: "sizing"
    },
    height: {
      value: "20px",
      type: "sizing"
    },
    thumb: {
      width: {
        value: "{semantic.sizing.actions.icon-size.xs}",
        type: "sizing",
        failedToResolve: true
      },
      height: {
        value: "{semantic.sizing.actions.icon-size.xs}",
        type: "sizing",
        failedToResolve: true
      }
    }
  },
  default: {
    "border-color": {
      value: "{semantic.color.inputs.default.border-color}",
      type: "color",
      failedToResolve: true
    }
  },
  disabled: {
    "border-color": {
      value: "{semantic.color.inputs.disabled.border-color}",
      type: "color",
      failedToResolve: true
    }
  },
  selected: {
    default: {
      "border-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "border-color": {
        value: "{semantic.color.inputs.selected.hover.border-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  thumb: {
    unselected: {
      default: {
        "background-color": {
          value: "{semantic.color.inputs.default.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      disabled: {
        "background-color": {
          value: "{semantic.color.inputs.disabled.background-color}",
          type: "color",
          failedToResolve: true
        }
      }
    },
    selected: {
      default: {
        "background-color": {
          value: "{semantic.color.inputs.selected.default.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      disabled: {
        "background-color": {
          value: "{semantic.color.inputs.hover.background-color}",
          type: "color",
          failedToResolve: true
        }
      }
    }
  },
  lg: {
    width: {
      value: "50px",
      type: "sizing"
    },
    height: {
      value: "28px",
      type: "sizing"
    },
    thumb: {
      width: {
        value: "{semantic.component.extra-small}",
        type: "sizing",
        failedToResolve: true
      },
      height: {
        value: "{semantic.component.extra-small}",
        type: "sizing",
        failedToResolve: true
      }
    }
  },
  "border-radius": {
    value: "{semantic.border.radius.round}",
    type: "borderRadius",
    failedToResolve: true
  },
  "space-between": {
    value: "{semantic.spacing.inputs.space-between}",
    type: "spacing",
    failedToResolve: true
  }
};
var select = {
  sm: {
    height: {
      type: "sizing",
      value: "{semantic.component.small}",
      failedToResolve: true
    },
    "icon-size": {
      value: 20,
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.xs}",
      failedToResolve: true
    }
  },
  md: {
    height: {
      type: "sizing",
      value: "{semantic.component.medium}",
      failedToResolve: true
    },
    "icon-size": {
      value: 20,
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.sm}",
      failedToResolve: true
    }
  },
  lg: {
    height: {
      type: "sizing",
      value: "{semantic.component.large}",
      failedToResolve: true
    },
    "icon-size": {
      value: 20,
      type: "sizing"
    },
    "text-size": {
      type: "fontSizes",
      value: "{semantic.font-size.inputs.md}",
      failedToResolve: true
    }
  },
  "space-between": {
    type: "spacing",
    value: "{semantic.spacing.inputs.medium.padding-top}",
    failedToResolve: true
  },
  "border-radius": {
    type: "borderRadius",
    value: "{semantic.border-radius.actions}",
    failedToResolve: true
  },
  "border-width": {
    type: "borderWidth",
    value: 1
  },
  default: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.default.border-color}",
      failedToResolve: true
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.default.background-color}",
      failedToResolve: true
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.default.text-color}",
      failedToResolve: true
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}",
      failedToResolve: true
    }
  },
  hover: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.default.border-color}",
      failedToResolve: true
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.hover.background-color}",
      failedToResolve: true
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.hover.text-color}",
      failedToResolve: true
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}",
      failedToResolve: true
    }
  },
  focus: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.focus.focus-ring}",
      failedToResolve: true
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.default.background-color}",
      failedToResolve: true
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.default.text-color}",
      failedToResolve: true
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.default.icon-color}",
      failedToResolve: true
    },
    "border-width": {
      value: "{semantic.border-width.focus}",
      type: "borderWidth",
      failedToResolve: true
    }
  },
  invalid: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.error.border-color}",
      failedToResolve: true
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.error.background-color}",
      failedToResolve: true
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.error.text-color}",
      failedToResolve: true
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.error.icon-color}",
      failedToResolve: true
    }
  },
  disabled: {
    "border-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.border-color}",
      failedToResolve: true
    },
    "background-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.background-color}",
      failedToResolve: true
    },
    "text-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.text-color}",
      failedToResolve: true
    },
    "icon-color": {
      type: "color",
      value: "{semantic.color.inputs.disabled.icon-color}",
      failedToResolve: true
    }
  },
  "font-family": {
    value: "{semantic.font-family.inputs}",
    type: "fontFamilies",
    failedToResolve: true
  },
  "font-weight": {
    value: "{semantic.font-weight.inputs}",
    type: "fontWeights",
    failedToResolve: true
  }
};
var radio = {
  sm: {
    width: {
      value: 14,
      type: "sizing"
    },
    height: {
      value: 14,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 6,
        type: "sizing"
      },
      height: {
        value: 6,
        type: "sizing"
      }
    }
  },
  md: {
    width: {
      value: 18,
      type: "sizing"
    },
    height: {
      value: 18,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 10,
        type: "sizing"
      },
      height: {
        value: 10,
        type: "sizing"
      }
    }
  },
  lg: {
    width: {
      value: 22,
      type: "sizing"
    },
    height: {
      value: 22,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 12,
        type: "sizing"
      },
      height: {
        value: 12,
        type: "sizing"
      }
    }
  },
  unselected: {
    default: {
      "border-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    error: {
      "border-color": {
        value: "{semantic.color.actions.negative.default.border}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.error.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "border-color": {
        value: "{semantic.color.inputs.disabled.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.disabled.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    "border-width": {
      value: 1,
      type: "borderWidth"
    }
  },
  selected: {
    default: {
      "border-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.selected.default.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    hover: {
      "border-color": {
        value: "{semantic.color.inputs.selected.hover.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.selected.hover.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "border-color": {
        value: "{semantic.color.inputs.disabled.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    sm: {
      "border-width": {
        value: 4,
        type: "borderWidth"
      }
    },
    md: {
      "border-width": {
        value: 5,
        type: "borderWidth"
      }
    },
    lg: {
      "border-width": {
        value: "6px",
        type: "borderWidth"
      }
    }
  },
  checkmark: {
    selected: {
      default: {
        "background-color": {
          value: "{semantic.color.inputs.default.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      hover: {
        "background-color": {
          value: "{semantic.color.inputs.hover.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      disabled: {
        "background-color": {
          value: "{semantic.color.inputs.disabled.background-color}",
          type: "color",
          failedToResolve: true
        }
      }
    },
    "border-radius": {
      value: "{semantic.border.radius.large}",
      type: "borderRadius",
      failedToResolve: true
    }
  },
  "border-radius": {
    value: "{semantic.border.radius.large}",
    type: "borderRadius",
    failedToResolve: true
  }
};
var input = {
  sm: {
    height: {
      value: "{semantic.component.small}",
      type: "sizing",
      failedToResolve: true
    },
    "icon-size": {
      value: 20,
      type: "sizing"
    },
    "padding-left": {
      value: 12,
      type: "spacing"
    },
    "padding-right": {
      value: 12,
      type: "spacing"
    },
    "text-size": {
      value: "{semantic.font-size.inputs.xs}",
      type: "fontSizes",
      failedToResolve: true
    }
  },
  md: {
    height: {
      value: "{semantic.component.medium}",
      type: "sizing",
      failedToResolve: true
    },
    "icon-size": {
      value: 20,
      type: "sizing"
    },
    "padding-left": {
      value: "{semantic.spacing.inputs.small.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.inputs.small.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.inputs.sm}",
      type: "fontSizes",
      failedToResolve: true
    }
  },
  lg: {
    height: {
      value: "{semantic.component.large}",
      type: "sizing",
      failedToResolve: true
    },
    "icon-size": {
      value: 24,
      type: "sizing"
    },
    "padding-left": {
      value: "{semantic.spacing.inputs.medium.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.inputs.small.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.inputs.md}",
      type: "fontSizes",
      failedToResolve: true
    }
  },
  "space-between": {
    value: "{semantic.spacing.inputs.space-between}",
    type: "spacing",
    failedToResolve: true
  },
  "border-radius": {
    value: "{semantic.border-radius.actions}",
    type: "borderRadius",
    failedToResolve: true
  },
  "border-width": {
    value: "{semantic.border-width.actions}",
    type: "borderWidth",
    failedToResolve: true
  },
  default: {
    outlined: {
      "border-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.text-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.icon-color}",
        type: "color",
        failedToResolve: true
      }
    },
    filled: {
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    flushed: {
      "border-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.text-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.icon-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  hover: {
    outlined: {
      "border-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.hover.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.hover.text-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.icon-color}",
        type: "color",
        failedToResolve: true
      }
    },
    filled: {
      "background-color": {
        value: "{semantic.neutral.subtle}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    flushed: {
      "border-color": {
        value: "{semantic.color.inputs.hover.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.neutral.subtle}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.hover.border-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.hover.border-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  focus: {
    outlined: {
      "border-color": {
        value: "{semantic.color.inputs.focus.focus-ring}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.text-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.icon-color}",
        type: "color",
        failedToResolve: true
      }
    },
    filled: {
      "border-color": {
        value: "{semantic.color.inputs.focus.focus-ring}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.inputs.default.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    flushed: {
      "border-color": {
        value: "{semantic.color.inputs.focus.focus-ring}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  invalid: {
    outlined: {
      "border-color": {
        value: "{semantic.color.inputs.error.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.error.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.error.text-color}",
        type: "color",
        failedToResolve: true
      }
    },
    filled: {
      "border-color": {
        value: "{semantic.color.inputs.error.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.error.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.error.text-color}",
        type: "color",
        failedToResolve: true
      }
    },
    flushed: {
      "border-color": {
        value: "{semantic.color.inputs.error.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.error.background-color}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.inputs.error.text-color}",
        type: "color",
        failedToResolve: true
      }
    },
    icon: {
      "icon-color": {
        value: "{semantic.color.inputs.error.icon-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  disabled: {
    "border-color": {
      value: "{semantic.color.inputs.disabled.border-color}",
      type: "color",
      failedToResolve: true
    },
    "background-color": {
      value: "{semantic.color.inputs.disabled.background-color}",
      type: "color",
      failedToResolve: true
    },
    "text-color": {
      value: "{semantic.color.inputs.disabled.text-color}",
      type: "color",
      failedToResolve: true
    },
    "icon-color": {
      value: "{semantic.color.inputs.disabled.icon-color}",
      type: "color",
      failedToResolve: true
    }
  },
  "add-on": {
    "background-color": {
      value: "{semantic.neutral.subtle}",
      type: "color",
      failedToResolve: true
    }
  },
  "font-weight": {
    value: "{semantic.font-weight.inputs}",
    type: "fontWeights",
    failedToResolve: true
  },
  "font-family": {
    value: "{semantic.font-family.inputs}",
    type: "fontFamilies",
    failedToResolve: true
  }
};
var checkbox = {
  sm: {
    width: {
      value: 12,
      type: "sizing"
    },
    height: {
      value: 12,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 8,
        type: "sizing"
      },
      height: {
        value: 8,
        type: "sizing"
      }
    }
  },
  md: {
    width: {
      value: 16,
      type: "sizing"
    },
    height: {
      value: 16,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 12,
        type: "sizing"
      },
      height: {
        value: 12,
        type: "sizing"
      }
    }
  },
  lg: {
    width: {
      value: 20,
      type: "sizing"
    },
    height: {
      value: 20,
      type: "sizing"
    },
    checkmark: {
      width: {
        value: 16,
        type: "sizing"
      },
      height: {
        value: 16,
        type: "sizing"
      }
    }
  },
  unselected: {
    default: {
      "border-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.default.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    error: {
      "border-color": {
        value: "{semantic.color.actions.negative.default.border}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.error.background-color}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "border-color": {
        value: "{semantic.color.inputs.disabled.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.disabled.background-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  selected: {
    default: {
      "border-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.selected.default.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    hover: {
      "border-color": {
        value: "{semantic.color.inputs.selected.hover.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.selected.hover.border-color}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "border-color": {
        value: "{semantic.color.inputs.disabled.border-color}",
        type: "color",
        failedToResolve: true
      },
      "background-color": {
        value: "{semantic.color.inputs.disabled.background-color}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  checkmark: {
    selected: {
      default: {
        "icon-color": {
          value: "{semantic.color.inputs.default.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      hover: {
        "icon-color": {
          value: "{semantic.color.inputs.hover.background-color}",
          type: "color",
          failedToResolve: true
        }
      },
      disabled: {
        "icon-color": {
          value: "{semantic.color.inputs.disabled.icon-color}",
          type: "color",
          failedToResolve: true
        }
      }
    }
  },
  "border-width": {
    value: 1,
    type: "borderWidth"
  }
};
var btn = {
  "border-radius": {
    value: "{semantic.border-radius.actions}",
    type: "borderRadius",
    failedToResolve: true
  },
  "border-width": {
    value: "{semantic.border-width.actions}",
    type: "borderWidth",
    failedToResolve: true
  },
  "font-family": {
    value: "{semantic.font-family.actions}",
    type: "fontFamilies",
    failedToResolve: true
  },
  "font-weight": {
    value: "{semantic.font-weight.actions}",
    type: "fontWeights",
    failedToResolve: true
  },
  primary: {
    default: {
      "background-color": {
        value: "{semantic.color.actions.primary.default.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.primary.default.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.primary.default.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.default.text}",
        type: "color",
        failedToResolve: true
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.primary.hover.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.primary.hover.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.primary.hover.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.hover.text}",
        type: "color",
        failedToResolve: true
      }
    },
    active: {
      "background-color": {
        value: "{semantic.color.actions.primary.active.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.primary.active.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.primary.active.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.active.text}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.primary.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.primary.disabled.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.primary.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.disabled.text}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  secondary: {
    default: {
      "background-color": {
        value: "{semantic.color.actions.secondary.default.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.default.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.default.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.default.text}",
        type: "color",
        failedToResolve: true
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.secondary.hover.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.hover.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.hover.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.hover.text}",
        type: "color",
        failedToResolve: true
      }
    },
    active: {
      "background-color": {
        value: "{semantic.color.actions.secondary.active.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.active.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.active.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.active.text}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.secondary.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.disabled.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.disabled.text}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  negative: {
    default: {
      "background-color": {
        value: "{semantic.color.actions.negative.default.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.negative.default.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.negative.default.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.default.text}",
        type: "color",
        failedToResolve: true
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.negative.hover.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.negative.hover.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.negative.hover.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.hover.text}",
        type: "color",
        failedToResolve: true
      }
    },
    active: {
      "background-color": {
        value: "{semantic.color.actions.negative.active.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.negative.active.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.negative.active.border}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.active.text}",
        type: "color",
        failedToResolve: true
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.negative.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "text-color": {
        value: "{semantic.color.actions.negative.disabled.text}",
        type: "color",
        failedToResolve: true
      },
      "border-color": {
        value: "{semantic.color.actions.negative.disabled.background}",
        type: "color",
        failedToResolve: true
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.disabled.text}",
        type: "color",
        failedToResolve: true
      }
    }
  },
  xs: {
    "text-size": {
      value: "{semantic.font-size.actions.xs}",
      type: "fontSizes",
      failedToResolve: true
    },
    "padding-left": {
      value: "{semantic.spacing.actions.xs.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.actions.xs.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing",
      failedToResolve: true
    },
    height: {
      value: "{semantic.sizing.actions.xs}",
      type: "sizing",
      failedToResolve: true
    }
  },
  sm: {
    "text-size": {
      value: "{semantic.font-size.actions.sm}",
      type: "fontSizes",
      failedToResolve: true
    },
    "padding-left": {
      value: "{semantic.spacing.actions.sm.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.actions.sm.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-top": {
      value: "{semantic.spacing.actions.sm.padding-top}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.sm.padding-bottom}",
      type: "spacing",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing",
      failedToResolve: true
    },
    height: {
      value: "{semantic.sizing.actions.sm}",
      type: "sizing",
      failedToResolve: true
    }
  },
  md: {
    "text-size": {
      value: "{semantic.font-size.actions.md}",
      type: "fontSizes",
      failedToResolve: true
    },
    "padding-left": {
      value: "{semantic.spacing.actions.md.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.actions.md.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-top": {
      value: "{semantic.spacing.actions.md.padding-top}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.md.padding-bottom}",
      type: "spacing",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing",
      failedToResolve: true
    },
    height: {
      value: "{semantic.sizing.actions.md}",
      type: "sizing",
      failedToResolve: true
    }
  },
  lg: {
    "text-size": {
      value: "{semantic.font-size.actions.lg}",
      type: "fontSizes",
      failedToResolve: true
    },
    "padding-left": {
      value: "{semantic.spacing.actions.lg.padding-left}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-right": {
      value: "{semantic.spacing.actions.lg.padding-right}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-top": {
      value: "{semantic.spacing.actions.lg.padding-top}",
      type: "spacing",
      failedToResolve: true
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.lg.padding-bottom}",
      type: "spacing",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.sm}",
      type: "sizing",
      failedToResolve: true
    },
    height: {
      value: "{semantic.sizing.actions.lg}",
      type: "sizing",
      failedToResolve: true
    }
  },
  "line-height": {
    value: "100%",
    type: "lineHeights"
  }
};
var avatar = {
  "font-color": {
    value: "{semantic.color.navigation.font-color}",
    type: "color",
    failedToResolve: true
  },
  "icon-color": {
    value: "{semantic.color.navigation.icon-color}",
    type: "color",
    failedToResolve: true
  },
  "border-radius": {
    value: "{semantic.border-radius.navigation.round}",
    type: "borderRadius",
    failedToResolve: true
  },
  badge: {
    "2xs": {
      "border-width": {
        value: "{semantic.border-width.status}",
        type: "borderWidth",
        failedToResolve: true
      }
    },
    xs: {
      "border-width": {
        value: "{semantic.border-width.navigation}",
        type: "borderWidth",
        failedToResolve: true
      }
    },
    sm: {
      "border-width": {
        value: "{semantic.border-width.navigation}",
        type: "borderWidth",
        failedToResolve: true
      }
    },
    md: {
      "border-width": {
        value: 4,
        type: "borderWidth"
      }
    },
    lg: {
      "border-width": {
        value: 5,
        type: "borderWidth"
      }
    },
    xl: {
      "border-width": {
        value: "6px",
        type: "borderWidth"
      }
    },
    "2xl": {
      "border-width": {
        value: "6px",
        type: "borderWidth"
      }
    },
    "border-color": {
      value: "{semantic.color.navigation.font-color}",
      type: "color",
      failedToResolve: true
    },
    "border-radius": {
      value: "{semantic.border-radius.navigation.round}",
      type: "borderRadius",
      failedToResolve: true
    }
  },
  xxs: {
    height: {
      value: "{semantic.sizing.navigation.xxs}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.xxs}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.xxs}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.xxs}",
      type: "sizing",
      failedToResolve: true
    }
  },
  xs: {
    height: {
      value: "{semantic.sizing.navigation.xs}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.xs}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.xs}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.xs}",
      type: "sizing",
      failedToResolve: true
    }
  },
  s: {
    height: {
      value: "{semantic.sizing.navigation.s}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.s}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.s}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.s}",
      type: "sizing",
      failedToResolve: true
    }
  },
  m: {
    height: {
      value: "{semantic.sizing.navigation.m}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.m}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.m}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.m}",
      type: "sizing",
      failedToResolve: true
    }
  },
  l: {
    height: {
      value: "{semantic.sizing.navigation.l}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.l}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.l}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.l}",
      type: "sizing",
      failedToResolve: true
    }
  },
  xl: {
    height: {
      value: "{semantic.sizing.navigation.xl}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.xl}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.xl}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.xl}",
      type: "sizing",
      failedToResolve: true
    }
  },
  xxl: {
    height: {
      value: "{semantic.sizing.navigation.xxl}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.xxl}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.xxl}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.xxl}",
      type: "sizing",
      failedToResolve: true
    }
  },
  xxxl: {
    height: {
      value: "{semantic.sizing.navigation.xxxl}",
      type: "sizing",
      failedToResolve: true
    },
    width: {
      value: "{semantic.sizing.navigation.xxxl}",
      type: "sizing",
      failedToResolve: true
    },
    "text-size": {
      value: "{semantic.font-size.navigation.xxxl}",
      type: "fontSizes",
      failedToResolve: true
    },
    "icon-size": {
      value: "{semantic.sizing.navigation.icon-size.xxxl}",
      type: "sizing",
      failedToResolve: true
    }
  },
  "background-color": {
    value: "{semantic.color.navigation.border-color}",
    type: "color",
    failedToResolve: true
  },
  "font-family": {
    value: "{semantic.font-family.navigation}",
    type: "fontFamilies",
    failedToResolve: true
  }
};
var dark_default = {
  semantic,
  "font-family": font_family,
  "font-size": font_size,
  "font-style": font_style,
  "font-weight": font_weight,
  "line-height": line_height,
  space,
  size,
  opacity,
  color,
  "border-radius": border_radius,
  "border-width": border_width,
  tag,
  switch: switch2,
  select,
  radio,
  input,
  checkbox,
  btn,
  avatar
};
export {
  avatar,
  border_radius as "border-radius",
  border_width as "border-width",
  btn,
  checkbox,
  color,
  dark_default as default,
  font_family as "font-family",
  font_size as "font-size",
  font_style as "font-style",
  font_weight as "font-weight",
  input,
  line_height as "line-height",
  opacity,
  radio,
  select,
  semantic,
  size,
  space,
  switch2 as switch,
  tag
};
