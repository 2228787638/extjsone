Ext.ns("hi");
hi.SeachButton = Ext.extend(Ext.Button,
    {
        style: 'position:absolute; ',
        height: 45,
        y: 30,
        text:'seach'
    }
);
Ext.reg('hi.SeachButton', hi.SeachButton);

