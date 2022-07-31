import Handlebars from "handlebars";

import tpl from "./tpl.hbs";
import "../../assets/styles/entryPage.scss";


Handlebars.registerPartial("login", tpl);

export default (props = {}) => {
  return tpl(props);
};
