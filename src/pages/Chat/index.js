import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import './Chat'
 


//import button from '../../components/button';

Handlebars.registerPartial('chat', tpl);

export default (props = {}) => {
	return tpl(props);
}
