// src/theme/components/tag.ts
var Tag = {
  parts: ["container", "label", "closeButton"],
  baseStyle: {
    container: {
      background: "btn-primary-default-background-color",
      bgColor: "btn-primary-default-background-color"
    }
  },
  sizes: {
    sm: {
      container: {
        minH: "tag-sm-height",
        fontSize: "btn-xs-text-size"
      }
    },
    md: {
      container: {
        minH: "tag-md-height",
        fontSize: "btn-sm-text-size"
      }
    },
    lg: {
      container: {
        minH: "tag-lg-height",
        fontSize: "btn-md-text-size"
      }
    }
  },
  defaultProps: {
    size: "md"
  }
};
var tag_default = Tag;
export {
  tag_default as default
};
