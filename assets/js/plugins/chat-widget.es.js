var o = Object.defineProperty;
var a = (e, t, n) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => a(e, typeof t != "symbol" ? t + "" : t, n);
class h {
  constructor() {
    i(this, "isOpen", !1);
    i(this, "container");
    i(this, "iframe");
    i(this, "button");
    this.container = document.createElement("div"), this.iframe = document.createElement("iframe"), this.button = document.createElement("button"), this.initializeElements(), this.attachEventListeners(), this.render();
  }
  initializeElements() {
    this.container.style.cssText = `
            position: fixed;
            z-index: 1000;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        `, this.iframe.src = "https://valeia.vercel.app/chat", this.iframe.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 0;
            height: 0;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            overflow: hidden;
        `, this.button.textContent = "M", this.button.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55px;
            width: 55px;
            border-radius: 50%;
            background-color: #25D366;
            color: white;
            font-size: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        `;
  }
  attachEventListeners() {
    this.button.addEventListener("click", this.handleClick.bind(this)), this.button.addEventListener("mouseover", () => {
      this.button.style.backgroundColor = "white", this.button.style.color = "#25D366";
    }), this.button.addEventListener("mouseout", () => {
      this.button.style.backgroundColor = "#25D366", this.button.style.color = "white";
    }), window.addEventListener("resize", this.updateIframeSize.bind(this));
  }
  handleClick() {
    this.isOpen = !this.isOpen, this.updateIframeVisibility(), this.updateButtonText();
  }
  updateIframeVisibility() {
    this.isOpen ? (this.updateIframeSize(), setTimeout(() => {
      this.iframe.style.opacity = "1";
    }, 50)) : (this.iframe.style.opacity = "0", setTimeout(() => {
      this.iframe.style.width = "0", this.iframe.style.height = "0";
    }, 300));
  }
  updateButtonText() {
    this.button.textContent = this.isOpen ? "X" : "M";
  }
  updateIframeSize() {
    window.innerWidth <= 1200 ? (this.iframe.style.width = "90vw", this.iframe.style.height = "80vh", this.iframe.style.maxWidth = "400px", this.iframe.style.maxHeight = "600px", this.iframe.style.right = "5vw") : (this.iframe.style.width = "400px", this.iframe.style.height = "600px", this.iframe.style.right = "30px"), this.iframe.style.bottom = "100px";
  }
  render() {
    this.container.appendChild(this.iframe), this.container.appendChild(this.button);
  }
  mount() {
    document.body.appendChild(this.container);
  }
}
function s() {
  new h().mount();
}
window.ChatWidgetConfig = window.ChatWidgetConfig || {};
window.ChatWidgetConfig.autoInit !== !1 && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s());
window.initChatWidget = s;
