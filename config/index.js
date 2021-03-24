const devUrl = "http://localhost:3000";
const prodUrl = "http://localhost:8000"; // Change for actual website.

const dev = process.env.NODE_ENV !== "production";

export const server = dev ? devUrl : prodUrl;
