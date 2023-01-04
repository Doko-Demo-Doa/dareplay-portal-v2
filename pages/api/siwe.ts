import { configureSIWE } from "connectkit-next-siwe";

export const siwe = configureSIWE({
  apiRoutePrefix: "/api/siwe",
  session: {
    password: "5fL*w0MvBN!@dgW02BkXG16w@bJfAlFb",
  },
});
