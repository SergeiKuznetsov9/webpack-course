import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutLazy } from "@/pages/about/AboutLazy";
import { ShopLazy } from "@/pages/shop/ShopLazy";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={"Loading..."}>
            <AboutLazy />
          </Suspense>
        ),
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <ShopLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

// теперь ленивые компоненты подгружаются чанками

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
