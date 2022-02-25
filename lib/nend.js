import React, { Component } from "react";

class Nend extends Component {
  nendManage = () => {
    var nend_links = document.querySelectorAll(".nend_wrapper a");
    for (var i = 0; i < nend_links.length; i += 1) {
      (function () {
        var href = nend_links[i].href;
        nend_links[i].href = "#";
        nend_links[i].onclick = function () {
          window.open(href);
          return false;
        };
      })();
    }
  };
  componentDidMount() {
    const dom = document.querySelector(".nend_wrapper");
    const p = this.props.params;

    const s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.async = true;
    s1.innerHTML = `var nend_params = {media:${p.media},site:${p.site},spot:${p.spot},type:${p.type},oriented:${p.oriented}};`;
    dom.appendChild(s1);

    const s2 = document.createElement("script");
    s2.src = "http://js1.nend.net/js/nendAdLoader.js";
    s2.async = true;
    dom.appendChild(s2);

    window.addEventListener("load", this.nendManage);
  }
  render() {
    return <div className="nend_wrapper"></div>;
  }
}
export default Nend;
