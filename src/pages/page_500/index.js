import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "../../assets/styles/notificationPage.scss";
 

Handlebars.registerPartial("page_500", tpl);

export default (props = {}) => {
  return tpl(props);
};
 