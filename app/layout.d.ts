import type { ComponentType, ReactNode } from "react";

declare const Layout: ComponentType<Record<string, unknown>> | ((props: Record<string, unknown>) => ReactNode | Promise<ReactNode> | void | Promise<void>);

export default Layout;
export const metadata: unknown;
