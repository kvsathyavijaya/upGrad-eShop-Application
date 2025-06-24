export const LAYOUT_NAVBAR_HEIGHT = "64px";
export const LAYOUT_CONTENT_HEIGHT = `calc(100% - ${LAYOUT_NAVBAR_HEIGHT})`;

export const sxStylesLayout = {
  width: "100vw",
  height: "100vh",
};

export const sxStylesNavLayout = {
  height: LAYOUT_NAVBAR_HEIGHT,
  width: "100%",
};

export const sxStylesContentLayout = {
  height: LAYOUT_CONTENT_HEIGHT,
  width: "100%",
  overflowY: "auto",
};
