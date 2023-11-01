import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home" },
    { path: "/room/:roomName", component: "room" },
  ],
  npmClient: 'yarn',
});
