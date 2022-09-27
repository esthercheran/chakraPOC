// src/figmaTokensChakra/Brand-ChakraDemo/dark.json
var semantic = {
  fg: {
    default: {
      value: "{color.neutrals.white}",
      type: "color"
    },
    subtle: {
      value: "#4040F2",
      type: "color"
    },
    muted: {
      value: "#2F2F97",
      type: "color"
    },
    "on-accent": {
      value: "{color.neutrals.black}",
      type: "color"
    }
  },
  bg: {
    canvas: {
      value: "#2F2F2F",
      type: "color"
    },
    surface: {
      value: "{color.neutrals.black}",
      type: "color"
    }
  },
  "border-radius": {
    "ui-card": {
      value: "{border-radius.4}",
      type: "borderRadius"
    }
  },
  ui: {
    "border-radius": {
      value: "{border-radius.4}",
      type: "borderRadius"
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
