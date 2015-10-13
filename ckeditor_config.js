$(function(){
    CKEDITOR.config.filebrowserUploadUrl = '/dashboard/ckeditor/upload/';
    CKEDITOR.config.filebrowserImageUploadUrl = '/dashboard/ckeditor/upload/';
    CKEDITOR.config.removeButtons = 'Font,Flash,Smiley,PageBreak,CreateDiv,IFrame,NewPage,Preview,Print,Templates';
    CKEDITOR.config.allowedContent = true;
    CKEDITOR.config.toolbarGroups = [
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'tools'},
        {name: 'clipboard', groups:['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
        {name: 'links' },
        {name: 'insert', groups: ['image']},
        '/',
        {name: 'styles' },
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph',   groups: ['list', 'indent', 'blocks', 'align']},
        {name: 'colors' },
        {name: 'others'}
    ];

    if ($('#id_description').length > 0) {
        CKEDITOR.config.toolbarGroups = null;
        CKEDITOR.config.toolbar = [
            {name: 'document', groups: [ 'mode', ],  items: [ 'Source', ]},
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
            {name: 'paragraph',   groups: ['align'], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', ]},
            {name: 'links', items: [ 'Link', 'Unlink', ] },
            {name: 'colors', items: [ 'TextColor', 'BGColor' ] },
            {name: 'insert', items: [ 'Table', ]}
        ];

        CKEDITOR.replace('id_description');
    }

    if ($('#id_categories-0-description').length > 0) {
        CKEDITOR.config.toolbarGroups = null;
        CKEDITOR.config.toolbar = [
            {name: 'document', groups: [ 'mode', ],  items: [ 'Source', ]},
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: [ 'FontSize', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
            {name: 'paragraph',   groups: ['align'], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRigh', 'JustifyBlock', ]},
            {name: 'links', items: [ 'Link', 'Unlink', ] },
            {name: 'colors', items: [ 'TextColor', 'BGColor' ] }
        ];

        CKEDITOR.replace('id_categories-0-description');
        CKEDITOR.replace('id_categories-1-description');
        CKEDITOR.replace('id_categories-2-description');
    }
});
