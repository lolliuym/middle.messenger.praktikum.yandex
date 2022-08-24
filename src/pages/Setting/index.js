import Handlebars from "handlebars";

import tpl from "./tpl.hbs";
import "../../assets/styles/profilePage.scss";
import "../../assets/styles/modal.scss";


Handlebars.registerPartial("setting", tpl);

export default (props = {}) => {
  return tpl(props);
};
 