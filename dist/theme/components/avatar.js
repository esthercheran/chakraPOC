// src/theme/components/avatar.ts
var Avatar = {
  parts: ["container", "badge"],
  baseStyle: {
    badge: {
      borderRadius: "avatar-border-radius",
      height: "100%"
    }
  },
  sizes: {
    sm: {
      container: {
        height: "avatar-s-height",
        width: "avatar-s-width"
      }
    },
    md: {
      container: {
        height: "avatar-m-height",
        width: "avatar-m-width"
      }
    },
    lg: {
      container: {
        height: "avatar-l-height",
        width: "avatar-l-width"
      }
    }
  },
  defaultProps: {
    size: "sm"
  }
};
var avatar_default = Avatar;
export {
  avatar_default as default
};
