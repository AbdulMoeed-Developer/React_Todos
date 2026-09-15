import {
  House,
  LayoutList,
  Palette,
} from "lucide-react";

import { useThemeStore } from "../../stores/theme_store.js";

export default function Navbar({ content, contentChanger }) {
  const { theme, setTheme } = useThemeStore();

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    "caramellatte",
    "abyss",
    "silk",
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle inline"
      />

      <div className="drawer-content">

        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">

          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M9 4v16" />
              <path d="M14 10l2 2l-2 2" />
            </svg>
          </label>

          <div className="px-4">
            Todo App
          </div>

        </nav>

        {/* Page content */}
        <main className="m-8 min-h-screen">
          {content}
        </main>

      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">

        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

          <ul className="menu w-full grow">

            {/* Home */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
                onClick={() => contentChanger("main")}
              >
                <House />
                <span className="is-drawer-close:hidden">
                  Homepage
                </span>
              </button>
            </li>

            {/* Create List */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Create New List"
                onClick={() => contentChanger("collectionForm")}
              >
                <LayoutList />
                <span className="is-drawer-close:hidden">
                  Create New List
                </span>
              </button>
            </li>

            {/* Theme Dropdown */}
            <li>

              <details>
                <summary
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Theme"
                >
                  <Palette />

                  <span className="is-drawer-close:hidden">
                    Theme
                  </span>
                </summary>

                <ul className="bg-base-200 rounded-box p-2 max-h-72 overflow-y-auto">

                  {themes.map((themeName) => (
                    <li key={themeName}>
                      <button
                        className={
                          theme === themeName
                            ? "active"
                            : ""
                        }
                        onClick={() => setTheme(themeName)}
                      >
                        {themeName}
                      </button>
                    </li>
                  ))}

                </ul>

              </details>

            </li>

          </ul>

        </div>
      </div>
    </div>
  );
}