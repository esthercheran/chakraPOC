// src/theme/components/avatar.ts
var Avatar = {
  baseStyle: {
    borderRadius: "avatar-border-radius",
    bg: "btn-primary-default-background-color",
    borderColor: "btn-primary-default-background-color"
  },
  sizes: {
    sm: {
      height: "avatar-s-height",
      width: "avatar-s-width"
    },
    md: {
      height: "avatar-m-height",
      width: "avatar-m-height"
    },
    lg: {
      height: "avatar-l-height",
      width: "avatar-l-height"
    }
  },
  defaultProps: {
    sizes: "md"
  }
};
var avatar_default = Avatar;
export {
  avatar_default as default
};
