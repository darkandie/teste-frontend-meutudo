import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      header: string;
      fontBlack: string;
      fontWhite: string;
      background: string;
      disabled: string;
    };
  }
}
