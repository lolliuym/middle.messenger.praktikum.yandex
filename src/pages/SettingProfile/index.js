import Handlebars from "handlebars";

import tpl from "./tpl.hbs";
import "../../assets/styles/profilePage.scss";


Handlebars.registerPartial("settingProfile", tpl);

export default (props = {}) => {
  return tpl(props);
};
 