import { useState } from "react";

export const Home = () => {
  const [clicks, setClicks] = useState(0);

  const onCount = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center gap-2 text-center lg:text-left lg:flex-row w-full justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">
            Ready to use React + Vite + TailwindCSS?
          </span>
          <span className="block text-indigo-600">Template by quave</span>
        </h2>

        <a
          target="_blank"
          href="https://www.quave.dev"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
        >
          Visit quave.dev
        </a>
      </div>
      <div className="mt-12 flex w-full flex-col items-center space-y-2">
        <div className="text-lg font-bold text-indigo-700">Clicks</div>
        <div className="text-3xl font-semibold">{clicks}</div>
        <div>
          <button
            onClick={onCount}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Click to increment
          </button>
        </div>
      </div>
    </div>
  );
};
