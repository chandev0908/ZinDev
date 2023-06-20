import { FaCss3, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";

export default function TechStackList() {
  return (
    <div className="techstack-list grid grid-flow-dense w-fit gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center">
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span>
          <FaHtml5 />
        </span>
        HTML5
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span>
          <FaCss3 />
        </span>
        CSS3
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span>
          <FaJs />
        </span>
        Javascript
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span className="w-4">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
          >
            <style>{`.st0{fill:#333333}.st1{fill:#fff}`}</style>
            <path className="st0" d="M0 200V0h400v400H0" />
            <path
              className="st1"
              d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
            />
          </svg>
        </span>
        TypeScript
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span>
          <FaReact />
        </span>
        ReactJs
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span className="w-4">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
                fill="#333333"
              ></path>{" "}
            </g>
          </svg>
        </span>
        NextJs
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span className="w-4">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 73.29"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              className="cls-1"
              d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
              fill="#333333"
            />
          </svg>
        </span>
        TailwindCSS
      </h1>
      <h1 className="grid grid-flow-col items-center gap-0.5 border border-black p-2 transition hover:-translate-y-1">
        <span>
          <FaJava />
        </span>
        Java
      </h1>
    </div>
  );
}
