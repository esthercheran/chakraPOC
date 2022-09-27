// src/figmaTokensChakra/comp/button.json
var btn = {
  "border-radius": {
    value: "{semantic.border-radius.actions}",
    type: "borderRadius"
  },
  "border-width": {
    value: "{semantic.border-width.actions}",
    type: "borderWidth"
  },
  "font-family": {
    value: "{semantic.font-family.actions}",
    type: "fontFamilies"
  },
  "font-weight": {
    value: "{semantic.font-weight.actions}",
    type: "fontWeights"
  },
  primary: {
    default: {
      "background-color": {
        value: "blue",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.primary.default.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.primary.default.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.default.text}",
        type: "color"
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.primary.hover.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.primary.hover.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.primary.hover.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.hover.text}",
        type: "color"
      }
    },
    active: {
      "background-color": {
        value: "purple",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.primary.active.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.primary.active.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.active.text}",
        type: "color"
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.primary.disabled.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.primary.disabled.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.primary.disabled.background}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.primary.disabled.text}",
        type: "color"
      }
    }
  },
  secondary: {
    default: {
      "background-color": {
        value: "{semantic.color.actions.secondary.default.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.default.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.default.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.default.text}",
        type: "color"
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.secondary.hover.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.hover.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.hover.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.hover.text}",
        type: "color"
      }
    },
    active: {
      "background-color": {
        value: "{semantic.color.actions.secondary.active.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.active.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.active.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.active.text}",
        type: "color"
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.secondary.disabled.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.secondary.disabled.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.secondary.disabled.background}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.secondary.disabled.text}",
        type: "color"
      }
    }
  },
  negative: {
    default: {
      "background-color": {
        value: "{semantic.color.actions.negative.default.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.negative.default.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.negative.default.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.default.text}",
        type: "color"
      }
    },
    hover: {
      "background-color": {
        value: "{semantic.color.actions.negative.hover.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.negative.hover.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.negative.hover.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.hover.text}",
        type: "color"
      }
    },
    active: {
      "background-color": {
        value: "{semantic.color.actions.negative.active.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.negative.active.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.negative.active.border}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.active.text}",
        type: "color"
      }
    },
    disabled: {
      "background-color": {
        value: "{semantic.color.actions.negative.disabled.background}",
        type: "color"
      },
      "text-color": {
        value: "{semantic.color.actions.negative.disabled.text}",
        type: "color"
      },
      "border-color": {
        value: "{semantic.color.actions.negative.disabled.background}",
        type: "color"
      },
      "icon-color": {
        value: "{semantic.color.actions.negative.disabled.text}",
        type: "color"
      }
    }
  },
  xs: {
    "text-size": {
      value: "{semantic.font-size.actions.xs}",
      type: "fontSizes"
    },
    "padding-left": {
      value: "{semantic.spacing.actions.xs.padding-left}",
      type: "spacing"
    },
    "padding-right": {
      value: "{semantic.spacing.actions.xs.padding-right}",
      type: "spacing"
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing"
    },
    height: {
      value: "{semantic.sizing.actions.xs}",
      type: "sizing"
    }
  },
  sm: {
    "text-size": {
      value: "{semantic.font-size.actions.sm}",
      type: "fontSizes"
    },
    "padding-left": {
      value: "{semantic.spacing.actions.sm.padding-left}",
      type: "spacing"
    },
    "padding-right": {
      value: "{semantic.spacing.actions.sm.padding-right}",
      type: "spacing"
    },
    "padding-top": {
      value: "{semantic.spacing.actions.sm.padding-top}",
      type: "spacing"
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.sm.padding-bottom}",
      type: "spacing"
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing"
    },
    height: {
      value: "{semantic.sizing.actions.sm}",
      type: "sizing"
    }
  },
  md: {
    "text-size": {
      value: "{semantic.font-size.actions.md}",
      type: "fontSizes"
    },
    "padding-left": {
      value: "{semantic.spacing.actions.md.padding-left}",
      type: "spacing"
    },
    "padding-right": {
      value: "{semantic.spacing.actions.md.padding-right}",
      type: "spacing"
    },
    "padding-top": {
      value: "{semantic.spacing.actions.md.padding-top}",
      type: "spacing"
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.md.padding-bottom}",
      type: "spacing"
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.xs}",
      type: "sizing"
    },
    height: {
      value: "{semantic.sizing.actions.md}",
      type: "sizing"
    }
  },
  lg: {
    "text-size": {
      value: "{semantic.font-size.actions.lg}",
      type: "fontSizes"
    },
    "padding-left": {
      value: "{semantic.spacing.actions.lg.padding-left}",
      type: "spacing"
    },
    "padding-right": {
      value: "{semantic.spacing.actions.lg.padding-right}",
      type: "spacing"
    },
    "padding-top": {
      value: "{semantic.spacing.actions.lg.padding-top}",
      type: "spacing"
    },
    "padding-bottom": {
      value: "{semantic.spacing.actions.lg.padding-bottom}",
      type: "spacing"
    },
    "icon-size": {
      value: "{semantic.sizing.actions.icon-size.sm}",
      type: "sizing"
    },
    height: {
      value: "{semantic.sizing.actions.lg}",
      type: "sizing"
    }
  },
  "line-height": {
    value: "100%",
    type: "lineHeights"
  },
  "focus-ring": {
    value: "{semantic.color.focus.border}",
    type: "color",
    "border-width": {
      value: "{semantic.border-width.focus}",
      type: "borderWidth"
    }
  }
};
var semantic = {
  "border-width": {
    inputs: {
      value: "{border-width.1}",
      type: "borderWidth"
    }
  }
};
var button_default = {
  btn,
  semantic
};
export {
  btn,
  button_default as default,
  semantic
};
