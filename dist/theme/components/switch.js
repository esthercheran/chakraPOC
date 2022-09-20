// src/theme/components/switch.ts
var Switch = {
  parts: ["track", "thumb"],
  baseStyle: {
    track: {
      borderRadius: "100px",
      borderColor: "switch-default-border-color",
      bg: "gray",
      _checked: {
        borderColor: "switch-default-border-color",
        bg: "yellow"
      }
    },
    thumb: {
      borderRadius: "switch-border-radius",
      borderColor: "switch-thumb-unselected-default-background-color",
      bg: "red",
      _checked: {
        borderColor: "switch-default-border-color",
        bg: "switch-thumb-selected-default-background-color"
      }
    }
  },
  sizes: {
    sm: {
      track: {
        height: "16px",
        width: "26px"
      },
      thumb: {
        height: "10px",
        width: "10px"
      }
    },
    md: {
      track: {
        height: "switch.md.height",
        width: "switch.md.width"
      },
      thumb: {
        height: "switch.md.thumb.height",
        width: "switch.md.thumb.width"
      }
    },
    lg: {
      track: {
        height: "switch.lg.height",
        width: "switch.lg.width"
      },
      thumb: {
        height: "switch.lg.thumb.height",
        width: "switch.lg.thumb.width"
      }
    }
  }
};
var switch_default = Switch;
export {
  switch_default as default
};
