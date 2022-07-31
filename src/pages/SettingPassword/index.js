import Handlebars from "handlebars";

import tpl from "./tpl.hbs";
import "../../assets/styles/profilePage.scss";


Handlebars.registerPartial("settingPassword", tpl);

export default (props = {}) => {
  return tpl(props);
};
 