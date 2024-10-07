import type { StrapiApp } from "@strapi/strapi/admin";
import Icon from "./extensions/icon.png";
import Logo from "./extensions/logo.svg";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      logo: Icon,
    },
    menu: {
      logo: Icon,
    },
    locales: [],
    translations: {
      en: {
        "Auth.form.welcome.title": "Bem vindo",
        "Auth.form.welcome.subtitle": "Entre na sua conta",
      },
    },
    theme: {
      light: {},
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral0: "#0d102f",
          neutral100: "#030415",
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {},
};
