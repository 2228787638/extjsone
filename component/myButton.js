Ext.ns("hi");
hi.SeachButton = Ext.extend(Ext.BoxComponent,
    {
        height: 60,
        style: 'position:absolute;',
        autoEl: {
            tag: 'img',
            src: 'reset/img/seach.png'
        },
        y:20,
    }
);
Ext.reg('hi.SeachButton', hi.SeachButton);

