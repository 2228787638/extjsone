Ext.ns("hi");
hi.SeachButton = Ext.extend(Ext.BoxComponent,
    {
        xtype: 'box',
        height: 80,
        autoEl: {
            tag: 'img',
            src: 'reset/img/seach.png'
        },
    }
);
Ext.reg('hi.SeachButton', hi.SeachButton);

