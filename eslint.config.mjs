import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [{ ignores: [".local-review/**"] }, ...nextVitals, ...nextTs];

export default config;
