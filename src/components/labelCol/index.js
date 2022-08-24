import Handlebars from 'handlebars';
 import tpl from './tpl.hbs';


Handlebars.registerPartial('LabelCol', tpl);

export default (value, type, name) => {
	return tpl({ value, type, name });
}
