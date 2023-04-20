import { createProxyMiddleware } from "http-proxy-middleware";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
  // URLs starting with /api go to http://localhost:5000/api
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5002",
      changeOrigin: true,
    })
  );
};
