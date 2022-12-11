import { lazy, Suspense } from "react";
import LoadingProgress from "./shared/components/LoadingProgress";
import { RouteInterface } from "./shared/models/interfaces/route-interface.interface";

const HomePage = lazy(() => import("./pages/HomePage"));
const PhotosList = lazy(() => import("./pages/PhotosList"));

export const routes = (): Array<RouteInterface> => [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/photos/:id",
    element: (
      <Suspense fallback={<LoadingProgress />}>
        <PhotosList />
      </Suspense>
    ),
  },
];
