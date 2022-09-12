// src/theme/components/button.ts
var Button = {
  baseStyle: {
    fontWeight: "btn-font-weight",
    textTransform: "uppercase",
    width: "auto",
    paddingLeft: "btn-xs-padding-left",
    borderRadius: "btn-border-radius",
    fontFamily: "btn-font-family",
    border: "btn-border-width",
    borderStyle: "solid"
  },
  sizes: {
    xs: {
      paddingLeft: "btn-xs-padding-left",
      paddingRight: "btn-xs-padding-right",
      h: "btn-xs-height",
      fontSize: "btn-xs-text-size"
    },
    small: {
      paddingLeft: "btn-sm-padding-left",
      paddingRight: "btn-sm-padding-right",
      h: "btn-sm-height",
      fontSize: "btn-sm-text-size"
    },
    md: {
      paddingLeft: "btn-md-padding-left",
      paddingRight: "btn-md-padding-right",
      h: "btn-md-height",
      fontSize: "btn-md-text-size"
    },
    lg: {
      paddingLeft: "btn-lg-padding-left",
      paddingRight: "btn-lg-padding-right",
      h: "btn-lg-height",
      fontSize: "btn-lg-text-size"
    }
  },
  variants: {
    primary: {
      bg: "btn-primary-default-background-color",
      color: "btn-primary-default-text-color",
      borderColor: "btn-primary-default-border-color",
      _hover: {
        bg: "btn-primary-hover-background-color",
        color: "btn-primary-hover-text-color",
        borderColor: "btn-primary-hover-border-color"
      },
      _active: {
        bg: "btn-primary-active-background-color",
        color: "btn-primary-active-text-color",
        borderColor: "btn-primary-active-border-color"
      }
    },
    secondary: {
      bg: "btn-secondary-default-background-color",
      color: "btn-secondary-default-text-color",
      borderColor: "btn-secondary-default-border-color",
      _hover: {
        bg: "btn-secondary-hover-background-color",
        color: "btn-secondary-hover-text-color",
        borderColor: "btn-secondary-hover-border-color"
      },
      _active: {
        bg: "btn-secondary-active-background-color",
        color: "btn-secondary-active-text-color",
        borderColor: "btn-secondary-active-border-color"
      }
    },
    negative: {
      bg: "btn-negative-default-background-color",
      color: "btn-negative-default-text-color",
      borderColor: "btn-negative-default-border-color",
      _hover: {
        bg: "btn-negative-hover-background-color",
        color: "btn-negative-hover-text-color",
        borderColor: "btn-negative-hover-border-color"
      },
      _acive: {
        bg: "btn-negative-acive-background-color",
        color: "btn-negative-acive-text-color",
        borderColor: "btn-negative-active-border-color"
      }
    }
  },
  defaultProps: {
    variant: "primary"
  }
};
var button_default = Button;
export {
  button_default as default
};
