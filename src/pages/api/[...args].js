import { createProxyMiddleware } from "http-proxy-middleware";
// 利用http-proxy-middleware实现代理
export default createProxyMiddleware({
  target: "http://yuanjin.tech:5005",
  changeOrigin: true
});
