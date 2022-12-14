// src/figmaTokensChakra/semantic/dark.json
var semantic = {
  fg: {
    default: {
      value: "{color.neutrals.white}",
      type: "color"
    },
    muted: {
      value: "{color.slate.400}",
      type: "color"
    },
    subtle: {
      value: "{color.slate.300}",
      type: "color"
    },
    "on-accent": {
      value: "{color.neutrals.white}",
      type: "color"
    },
    "on-disabled": {
      value: "{color.slate.400}",
      type: "color"
    },
    disabled: {
      value: "{color.slate.300}",
      type: "color"
    },
    accent: {
      value: "{semantic.cta.default}",
      type: "color"
    }
  },
  bg: {
    surface: {
      value: "{color.slate.800}",
      type: "color"
    },
    muted: {
      value: "{color.slate.600}",
      type: "color"
    },
    subtle: {
      value: "#31425C",
      type: "color"
    },
    canvas: {
      value: "{color.slate.700}",
      type: "color"
    }
  },
  color: {
    actions: {
      primary: {
        default: {
          "text-color": {
            value: "{color.zinc.100}",
            type: "color"
          }
        }
      }
    }
  }
};
var dark_default = {
  semantic
};
export {
  dark_default as default,
  semantic
};
