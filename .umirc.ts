import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home" },
    { path: "/room", component: "room" },
  ],
  npmClient: 'yarn',
});
