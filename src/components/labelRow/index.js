import Handlebars from 'handlebars';
 import tpl from './tpl.hbs';


Handlebars.registerPartial('LabelRow', tpl);

export default (value, cls_label, cls_input, type, name, value_input) => {
	return tpl({ value, cls_label, cls_input, type, name, value_input });
}
