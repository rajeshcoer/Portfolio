declare module "../../app/page" {
  import type { ComponentType, ReactNode } from "react";

  const Page: ComponentType<any> | ((props: any) => ReactNode | Promise<ReactNode> | void | Promise<void>);
  export default Page;
}

declare module "../../app/layout" {
  import type { ComponentType, ReactNode } from "react";

  const Layout: ComponentType<any> | ((props: any) => ReactNode | Promise<ReactNode> | void | Promise<void>);
  export default Layout;
  export const metadata: unknown;
}
