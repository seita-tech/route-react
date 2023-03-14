import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    chidren: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    chidren: <UrlParameter />
  }
];
