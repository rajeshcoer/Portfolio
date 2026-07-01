import type { ComponentType, ReactNode } from "react";

declare const Page: ComponentType<{ params?: Promise<Record<string, unknown>> } & Record<string, unknown>> | ((props: { params?: Promise<Record<string, unknown>> } & Record<string, unknown>) => ReactNode | Promise<ReactNode> | void | Promise<void>);

export default Page;
