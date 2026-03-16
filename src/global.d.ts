// Allow importing CSS files (e.g. from third-party libraries like AOS) in TypeScript.
// This file provides a minimal module declaration for CSS imports.

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}
