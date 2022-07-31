//import Handlebars from "handlebars";
import tpl from './index.hbs';

const data = {
	h1: 'Title',
	content: 'Содержимое'

}

console.log(tpl(data));

import './styles/global.scss';
import button from './components/button';
import chat from './pages/Chat/index.js';
import login from './pages/Login/index';
import page_404 from './pages/page_404';
import page_500 from './pages/page_500';
import registration from './pages/Registration';
import setting from './pages/Setting';
import settingPassword from './pages/SettingPassword';
import settingProfile from './pages/SettingProfile';


console.log(tpl);

document.getElementById('root').innerHTML = tpl({

});


window.createButton = (id, value) => {

	const htmlTpl = document.createElement('template');
	htmlTpl.innerHTML = button(id,value);

	document.getElementById('root').appendChild(htmlTpl.content);
}
