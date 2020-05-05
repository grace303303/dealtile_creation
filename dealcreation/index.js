let tableobj = new Map();

function createtable() {
    tableobj = new Map();
    let lines = $("#dealtable-textarea").val().split("\n");
    // Remove header row if exists.
    if(lines.length > 0) {
        if(lines[0].startsWith("Merchant") || lines[0].startsWith("Store")) {
            lines.shift();   
        }
    }
    // Put rows into tableobj.
    for (let i = 0; i < lines.length; i++) {
        let item = lines[i].split('\t');
        tableobj.set(i + 1, item);
    }
    // Check tableobj has no missing data.
    for (const entry of tableobj.entries()) {
        if (entry[1].length < 4) {
            alert("Please make make sure you have copied every table detail from the jira table.");
            return;
        }
    }

    //Create table    
    $("#thetable").addClass("show-block");
    
    let allrows="";

    for (let i = 0; i < tableobj.size; i++) {
        allrows = allrows + `<tr id="store${i+1}"><td>Store${i+1}: ${tableobj.get(i+1)[0]}</td><td>${tableobj.get(i+1)[1]}</td><td>${tableobj.get(i+1)[2]}</td><td>${tableobj.get(i+1)[3]}</td></tr>`
    }
    document.getElementById("tablebody").innerHTML=allrows;

}

function createcodes() {
    let start = `<!--deal starts--><tr>
   <td align="center" width="520px">
      <table cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
         <tr bgcolor="#FFFFFF">
            <td valign="top" align="center" width="520px" bgcolor="#FFFFFF" background="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2019_NewHDTemplate/darkmode_background_520.png" style="background:url(https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2019_NewHDTemplate/darkmode_background_520.png) no-repeat center 0; background-size:520px; vertical-align: top; margin:0 auto; background:url(https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2019_NewHDTemplate/darkmode_background_520.png) no-repeat center 0; background-size:520px;vertical-align: top;">
               <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                     <td><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="1" width="10"></td>
                     <!--Start of 490px Table-->
                     <td width="490" align="center">
                        <table cellpadding="0" cellspacing="0" border="0">
                           <tr>
                              <td>
                                 <table cellpadding="0" cellspacing="0" border="0">`
    let end = `                                 </table>
                              </td>
                           </tr>
                        </table>
                     </td>
                     <!--End of 490px Table-->	
                     <td><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="1" width="20"></td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </td>
</tr>
<tr>
   <td><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="1" height="20"></td>
</tr><!--End of deal-->`
    let allrows = '';
    for (let i = 1; i < tableobj.size+1; i++) {
        console.log(allrows);
        let link = tableobj.get(i)[3].replace("ebates.com", "rakuten.com");
        link=link.replace("http://", "https://");
        allrows = allrows + `<!--store ${i}-->
<tr>
   <td><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="1" height="80"></td>
</tr>
<tr>
   <td>
      <table cellpadding="0" cellspacing="0" border="0">
         <tr>
            <td width="210">
               <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                     <td align="center"><a href="${link}&eeid=\${eeid}&ebtoken=\${Recipient.JWT_TOKEN}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}" style="text-decoration:none"><img src="https://static.ebates.com/\${store${i}.large_logo}" alt="\${store${i}.store_name}" height="40" width="150" border="0"></a></td>
                  </tr>
                  <tr>
                     <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="2" height="20"></td>
                  </tr>
                  <tr>
                     <td style="line-height: 0px; font-size: 0px;" align="center" width="210"><a href="${link}&eeid=\${eeid}&ebtoken=\${Recipient.JWT_TOKEN}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}" style="text-decoration:none"><span style="display: inline"><img src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2019_NewHDTemplate/CirclePlus.png" width="24" height="20" style="display:inline;border:0;vertical-align:-0.5px;" alt=""></span><span style="font-family:'Benton Sans Med', Helvetica, Arial, San-serif; color:#ED5050;font-size:24px;line-height:28px;">\${store${i}.cashback_display} Cash&nbsp;Back</span></a></td>
                  </tr>
               </table>
            </td>
            <td><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" height="1" width="10"></td>
            <td valign="center">
               <table width="1"  bgcolor="#DDDDDD" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; padding:0; margin:0px; background-color: #DDDDDD">
                  <tr>
                     <td><img src="http://www.rakuten.com/email/x.gif" style="display:block;" width="1" height="160" alt=""/></td>
                  </tr>
               </table>
            </td>
            <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="19" height="1"></td>
            <td align="center" width="250">
               <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                     <td align="center"><a href="${link}&eeid=\${eeid}&ebtoken=\${Recipient.JWT_TOKEN}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}" style="text-decoration:none"><span style="font-family:'Benton Sans Reg', Helvetica, Arial, San-serif; color:#7e7e7e;font-size:24px; line-height: 28px;">${tableobj.get(i)[1]}</span></a></td>
                  </tr>
                  ${(tableobj.get(i)[2]!==' '?`<tr>
                     <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="1" height="15"></td>
                  </tr>
                  <tr>
                     <td align="center"><span style="font-family:'Benton Sans Reg', Helvetica, Arial, San-serif; color:#7e7e7e; font-size:20px; line-height: 24px;">Code: </span><a href="${link}&eeid=\${eeid}&ebtoken=\${Recipient.JWT_TOKEN}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}" style="text-decoration:none"><span style="font-family:'Benton Sans Reg', Helvetica, Arial, San-serif; color:#7e7e7e; font-size:20px; line-height: 24px;font-weight: bold;" >${tableobj.get(i)[2]}</span></a></td>
                  </tr>`:``)
                  }
                  <tr>
                     <td style="font-size:0px;line-height:0px;"><img src="http://www.rakuten.com/email/x.gif" alt="" border="0" style="display:block;" width="1" height="15"></td>
                  </tr>
				 <tr>
                  <td align="center"><a href="${link}&eeid=\${eeid}&ebtoken=\${Recipient.JWT_TOKEN}&utm_source=rakuten&utm_medium=email&utm_channel=email&utm_campaign=\${utmCampaign}&utm_content=\${utmDate}" style="text-decoration:none"><img src="https://mg-cf.s3.amazonaws.com/img/15C3AD3A7F45A77D48AD7FF3FA2EEE5ED3FEAB5D/2019_NewHDTemplate/ShopNow-CTA.png" width="156" border="0" style="display:block" alt="Shop Now"></a></td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </td>
</tr>`
    }
    let allcodes = start + allrows + end;
    allcodes = allcodes.replace(/</g, "&lt;");
    allcodes = allcodes.replace(/>/g, "&gt;");
    $("#insertedcode").html(allcodes);

    $("#thecode").addClass("show-block");

}

    let clipboard = new ClipboardJS(".copybtn");

    clipboard.on('success', function(e) {
        alert('Code has been successfully copied to your clipboard!');
    });

    clipboard.on('error', function(e) {
        alert('Copy failed. Please try again.');
    });
