// import { useEffect } from "react";

// export const Imobile = () => {
//   <style jsx>{`
//     .outer {
//       position: fixed;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       width: 100%;
//       background: rgba(0, 0, 0, 0.7);
//       z-index: 99998;
//       text-align: center;
//       transform: translate3d(0, 0, 0);
//     }
//     .inner {
//       margin: auto;
//       z-index: 99999;
//     }
//   `}</style>;

//   useEffect(() => {
//     if (process.env.NODE_ENV !== "a") {
//       const tag = document.createElement("script");
//       tag.src = "https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104";
//       tag.async = true;
//       document.body.appendChild(tag);

//       (window.adsbyimobile = window.adsbyimobile || []).push({
//         pid: 77626,
//         mid: 545283,
//         asid: 1779540,
//         type: "banner",
//         display: "inline",
//         elementid: "im-1ab868e966ef42539ac2882a76df8757",
//       });

//       document.body.removeChild(tag);
//     }
//   }, []);

//   return (
//     <div className="outer">
//       <div className="inner">
//         <div id="im-1ab868e966ef42539ac2882a76df8757"></div>
//       </div>
//     </div>
//   );
// };

import { useEffect } from "react";

export const Imobile = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "a") {
      const tag = document.createElement("script");
      tag.src = "https://imp-adedge.i-mobile.co.jp/script/v1/spot.js?20220104";
      tag.async = true;
      document.body.appendChild(tag);

      (window.adsbyimobile = window.adsbyimobile || []).push({
        pid: 77626,
        mid: 545282,
        asid: 1779542,
        type: "banner",
        display: "inline",
        elementid: "im-37994bc9bc574b7881f1843336009969",
      });

      document.body.removeChild(tag);
    }
  }, []);

  return <div id="im-37994bc9bc574b7881f1843336009969"></div>;
};
