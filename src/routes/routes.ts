import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazy-load/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazy-load/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    component: LazyLayout,
    name: 'Lazy Layout Dash'
  },
  {
    to: '/noLazy',
    path: '/noLazy',
    component: NoLazy,
    name: 'No Lazy'
  },
]