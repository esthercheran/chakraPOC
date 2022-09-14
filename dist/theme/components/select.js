// src/theme/components/select.ts
var Select = {
  baseStyle: {
    borderRadius: "select.border-radius",
    Width: "select.border-width",
    fontFamily: "select.font-family.inputs",
    fontWeight: "select.font-weight.inputs",
    itemSpacing: "select.space-between"
  },
  sizes: {
    small: {
      iconSize: "select.sm.icon-size",
      fontSize: "select.sm.font-size",
      height: "select.sm.height"
    },
    md: {
      iconSize: "select.md.icon-size",
      fontSize: "select.md.font-size",
      height: "select.sm.height"
    },
    lg: {
      iconSize: "select.lg.icon-size",
      fontSize: "select.md.font-size",
      height: "select.sm.height"
    }
  },
  variants: {
    _defaut: {
      bg: "select.default.background-color",
      iconColor: "select.default.icon-color",
      borderColor: "select.default.border-color",
      Color: "select.default.text-color"
    },
    _hover: {
      bg: "select.hover.background-color",
      iconColor: "select.hover.icon-color",
      borderColor: "select.hover.border-color",
      Color: "select.hover.text-color"
    },
    _focus: {
      bg: "select.focus.background-color",
      iconColor: "select.focus.icon-color",
      borderColor: "select.focus.border-color",
      Color: "select.focus.text-color",
      width: "select.focus.border-width"
    },
    _invalid: {
      bg: "select.invalid.background-color",
      iconColor: "select.invalid.icon-color",
      borderColor: "select.invalid.border-color",
      Color: "select.invalid.text-color"
    },
    _disabled: {
      bg: "select.disabled.background-color",
      iconColor: "select.disabled.icon-color",
      borderColor: "select.disabled.border-color",
      Color: "select.disabled.text-color"
    }
  },
  defaultProps: {
    variant: "default"
  }
};
var select_default = Select;
export {
  select_default as default
};
