tinyMCEPopup.requireLangPack();

var CustomWrapperDialog = {
	init : function() {
        var defaultTemplate ="";
        defaultTemplate += "<div class=\"spoiler\">\n";
        defaultTemplate += "<a class=\"visible\">\n";
        defaultTemplate += getHeaderPlaceholder();
        defaultTemplate += "<\/a>\n";
        defaultTemplate += "<div class=\"hidden\">\n";
        defaultTemplate += "<div class=\"content\">\n";
        defaultTemplate += "<div class=\"content-body\">\n";
        defaultTemplate += getPlaceholder();
        defaultTemplate += "<\/div>\n";
        defaultTemplate += "<\/div>\n";
        defaultTemplate += "<\/div>\n";
        defaultTemplate += "<\/div>\n";

        var f = document.forms[0];


        f.template.value = defaultTemplate;
        f.header.value = tinymce.i18n[ tinymce.activeEditor.settings.language + '.customwrapper.header'];

    },

	insert : function() {
        var f = document.forms[0];


        var template = f.template.value;
        var header = f.header.value;

        var selectedStr = tinyMCE.activeEditor.selection.getContent();


        var bodyRegExp = new RegExp(getPlaceholder(),"g");
        var headerRegExp = new RegExp(getHeaderPlaceholder(),"g");

        var result = template.replace(bodyRegExp, selectedStr).replace(headerRegExp, header);

        tinyMCEPopup.editor.execCommand('mceInsertContent', false, result);
		tinyMCEPopup.close();
	}


};

function getPlaceholder() {
    return "#{" + tinymce.i18n[ tinymce.activeEditor.settings.language + '.customwrapper.placeholder'] + "}";
}
function getHeaderPlaceholder() {
    return "#{" + tinymce.i18n[ tinymce.activeEditor.settings.language + '.customwrapper.header'] + "}";
}

function toggle(el) {
    if (el.style.display != '') {
        el.style.display = '';
    } else {
        el.style.display = 'none';
    }
}

tinyMCEPopup.onInit.add(CustomWrapperDialog.init, CustomWrapperDialog);


