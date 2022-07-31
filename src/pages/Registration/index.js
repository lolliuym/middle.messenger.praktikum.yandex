import Handlebars from "handlebars";

import tpl from "./tpl.hbs";
import "../../assets/styles/entryPage.scss";


Handlebars.registerPartial("registration", tpl);

export default (props = {}) => {
  return tpl(props);
};
 