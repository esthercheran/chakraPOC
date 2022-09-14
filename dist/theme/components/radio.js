// src/theme/components/radio.ts
var Radio = {
  baseStyle: {
    borderRadius: "radio.border-radius"
  },
  sizes: {
    small: {
      Height: "radio.sm.height",
      width: "radio.sm.width",
      checkmarkHeight: "radio.sm.checkmark.height",
      checkmarkWidth: "radio.sm.checkmark.width",
      widthSelected: "radio.selected.sm.border-width"
    },
    md: {
      Height: "radio.md.height",
      width: "radio.md.width",
      checkmarkHeight: "radio.md.checkmark.height",
      checkmarkWidth: "radio.md.checkmark.width",
      widthSelected: "radio.selected.md.border-width"
    },
    lg: {
      Height: "radio.lg.height",
      width: "radio.lg.width",
      checkmarkHeight: "radio.lg.checkmark.height",
      checkmarkWidth: "radio.lg.checkmark.width",
      widthSelected: "radio.selected.lg.border-width"
    }
  },
  variants: {
    unSelected: {
      _defaut: {
        bg: "radio.unselected.default.background-color",
        borderColor: "radio.unselected.default.border-color",
        Width: "radio.unselected.border-width"
      },
      _invalid: {
        bg: "radio.unselected.error.background-color",
        borderColor: "radio.unselected.error.border-color",
        Width: "radio.unselected.border-width"
      },
      _hover: {},
      _disabled: {
        bg: "radio.unselected.disabled.background-color",
        borderColor: "radio.unselected.disabled.border-color",
        Width: "radio.unselected.border-width"
      }
    },
    selected: {
      _default: {
        bg: "radio.selected.default.background-color",
        borderColor: "radio.selected.default.border-color"
      },
      _invalid: {},
      _disabled: {
        bg: "radio.selected.disabled.background-color",
        borderColor: "radio.selected.disabled.border-color",
        borderRadius: "radio.checkmark.border-radius"
      },
      _hover: {
        bg: "checkbox.unselected.disabled.background-color",
        borderColor: "checkbox.unselected.disabled.border-color"
      }
    }
  },
  defaultProps: {
    variant: "unchecked"
  }
};
var radio_default = Radio;
export {
  radio_default as default
};
