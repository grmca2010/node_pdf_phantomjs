var PDF = require('pdfkit');
var fs = require('fs');
doc = new PDF();                        //creating a new PDF object
doc.pipe(fs.createWriteStream('output.pdf'));

var networkInfo='Not good and is highly vulnerable to threats';
var networkStatus="Your network is vulnerable to threats. Advanced attacks can cause severe damage to your organization's data and potentially lead to financial loss. We recommend you look at security holistically from before (reducing attack surface and controlling traffic), during (combat inbound and advanced threats like malware) and after (remediation/quarantine in case of malware outbreak) an attack. Also automation can help you reduce operational overhead.";

var lorem ="hello";
var width=500;
var styleObj= {
  width: width,
  align: 'center'
};

doc.fontSize(9);
doc.fill("#808080").text('Your security score is...',styleObj);
doc.moveDown();
doc.fontSize(10);
doc.text(networkInfo,styleObj );
doc.moveDown();
doc.fontSize(37).fill("#FFA500").text('35%',styleObj);
doc.fontSize(10);
doc.fill("#808080").text(networkStatus, styleObj);

doc.moveTo(0, 250).lineTo(width+300, 250).stroke();
doc.moveDown();
doc.moveDown();
doc.moveDown();
doc.moveDown();
doc.moveDown();
doc.fontSize(15).text('We recommend…',styleObj)
doc.moveDown();
doc.fontSize(14).text('Enhanced', {
  width: width,
  align: 'left'
});

doc.moveDown();
doc.fontSize(10).text(networkStatus, {
  width: width,
  align: 'left'
});


doc.image('Enhanced.jpg', 70, 430, {
  width: 220,
  height: 150
})

// tabular format

doc.fill("#696969").fontSize('12').text("Hardware",310,430, {
     align:'left'
});
doc.fill("#696969").fontSize('12').text("ASA 5525",400,430, {
    align:'left',   
});
doc.fill("#808080").fontSize('10').text("Software",310,450, {
     align:'left'
});
var list_sw = ['VPN (Any Connect Endpoint)-500','AVC','IPS','AMP','URL','AMP endpoint - 200'];
var list_sw_yaxis=450;
for(var i=0;i<list_sw.length;i++){
    doc.fill("#808080").fontSize('10').text(list_sw[i],400,list_sw_yaxis, {
        align:'left', 
        width:400  
    });
    list_sw_yaxis=list_sw_yaxis+20;
}

list_sw_yaxis=list_sw_yaxis+10;
doc.fill("#808080").fontSize('10').text("Number of User",310,list_sw_yaxis, {
     align:'left'
});
doc.fill("#808080").fontSize('10').text("1000",400,list_sw_yaxis, {
     align:'left'
});

list_sw_yaxis=list_sw_yaxis+20;
doc.fill("#808080").fontSize('10').text("Subscription",310,list_sw_yaxis, {
     align:'left'
});
doc.fill("#808080").fontSize('10').text("Cisco Firepower Services TAMC",400,list_sw_yaxis, {
     align:'left'
});
list_sw_yaxis=list_sw_yaxis+20;
doc.fill("#808080").fontSize('10').text("Performance",310,list_sw_yaxis, {
     align:'left'
});
doc.fill("#808080").fontSize('10').text("200 Mbps",400,list_sw_yaxis, {
     align:'left'
});
doc.end(); //we end the document writing.
