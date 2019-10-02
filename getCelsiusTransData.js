var firstWallet = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d&address=0x7de3e919d1d7e5f1b1b27bdb3575b65c5874a5f6&offset=100&sort=asc&apikey=P26ZP2HDIZ8AKNTXGCM2QU8C25SJCRDXK4"
var secondWallet = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d&address=0x75db8b92937f8f86213e523788ab9f066efde3fe&offset=100&sort=asc&apikey=P26ZP2HDIZ8AKNTXGCM2QU8C25SJCRDXK4"
var thirdWallet = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d&address=0x721e3d8Aa92D1f26936f6945F176415f66a88588&offset=100&sort=asc&apikey=P26ZP2HDIZ8AKNTXGCM2QU8C25SJCRDXK4"
var request = require('request');

var array = [];

var total = 0;

var transactionData = [];
request(firstWallet, function (error, response, body) {
    //console.log(body); // Print the HTML for the Google homepage.
    body = JSON.parse(body);

    for (var x = 0; x < body['result'].length; x++) {
        //console.log(body.result[x].timeStamp);

        var d = new Date(body.result[x].timeStamp * 1000);

        var date = ((d.getMonth() > 8) ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9) ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear()


        if (body['result'][x + 1] !== undefined) {

            if (contains(transactionData, "date", date)) {
                var index = transactionData.findIndex(obj => obj.date == date);
                console.log("Date Index: " + index + " of " + date);
                if (body['result'][x].to === "0x7de3e919d1d7e5f1b1b27bdb3575b65c5874a5f6") {
                    console.log("Deposit: " + body['result'][x].value + " Current: " + total);
                    total += (parseInt(body['result'][x].value) / 10000)
                    console.log("New Total: " + total);
                    transactionData[index].value = (total.toFixed(4));
                } else {
                    console.log("!!!!!!!!!!!!!!!!!!!! Withdraw: " + body['result'][x].value + " Current: " + total);
                    total = total - (parseInt(body['result'][x].value) / 10000).toFixed(4)
                    console.log("New Total: " + total);
                    transactionData[index].value = (total.toFixed(4));
                }
            } else {
                console.log("New Date: " + body['result'][x].value + " Current: " + total);
                total += (parseInt(body['result'][x].value) / 10000)
                console.log("New Total: " + total);
                temp = {
                    "date": date,
                    "value": (total.toFixed(4))
                }
                transactionData.push(temp);
            }
        }
    }
    console.log("data");
    const fs = require('fs');

    fs.writeFileSync("wallet.json", JSON.stringify(transactionData));
    fs.writeFileSync("raw.json", JSON.stringify(body['result']));
    console.log("--------------------- First Wallet -----------------------------");
    console.log((transactionData));
    request(secondWallet, function (error, response, body) {
        //console.log(body); // Print the HTML for the Google homepage.
        body = JSON.parse(body);

        for (var x = 0; x < body['result'].length; x++) {
            //console.log(body.result[x].timeStamp);

            var d = new Date(body.result[x].timeStamp * 1000);

            var date = ((d.getMonth() > 8) ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9) ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear()


            if (body['result'][x + 1] !== undefined) {

                if (contains(transactionData, "date", date)) {
                    var index = transactionData.findIndex(obj => obj.date == date);
                    console.log("Date Index: " + index + " of " + date);
                    if (body['result'][x].to === "0x75db8b92937f8f86213e523788ab9f066efde3fe") {
                        console.log("Deposit: " + body['result'][x].value + " Current: " + total);
                        total += (parseInt(body['result'][x].value) / 10000)
                        console.log("New Total: " + total);
                        transactionData[index].value = (total.toFixed(4));
                    } else {
                        console.log("!!!!!!!!!!!!!!!!!!!! Withdraw: " + body['result'][x].value + " Current: " + total);
                        total = total - (parseInt(body['result'][x].value) / 10000).toFixed(4)
                        console.log("New Total: " + total);
                        transactionData[index].value = (total.toFixed(4));
                    }
                } else {
                    console.log("New Date: " + body['result'][x].value + " Current: " + total);
                    total += (parseInt(body['result'][x].value) / 10000)
                    console.log("New Total: " + total);
                    temp = {
                        "date": date,
                        "value": (total.toFixed(4))
                    }
                    transactionData.push(temp);
                }
            }
        }
        console.log("data");
        const fs = require('fs');

        fs.writeFileSync("wallet.json", JSON.stringify(transactionData));
        fs.writeFileSync("raw.json", JSON.stringify(body['result']));
        console.log("--------------------- Wallets -----------------------------");
        console.log((transactionData));
        request(thirdWallet, function (error, response, body) {
            //console.log(body); // Print the HTML for the Google homepage.
            body = JSON.parse(body);

            for (var x = 0; x < body['result'].length; x++) {
                //console.log(body.result[x].timeStamp);

                var d = new Date(body.result[x].timeStamp * 1000);

                var date = ((d.getMonth() > 8) ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1))) + '/' + ((d.getDate() > 9) ? d.getDate() : ('0' + d.getDate())) + '/' + d.getFullYear()


                if (body['result'][x + 1] !== undefined) {

                    if (contains(transactionData, "date", date)) {
                        var index = transactionData.findIndex(obj => obj.date == date);
                        console.log("Date Index: " + index + " of " + date);
                        if (body['result'][x].to === "0x721e3d8Aa92D1f26936f6945F176415f66a88588") {
                            console.log("Deposit: " + body['result'][x].value + " Current: " + total);
                            total += (parseInt(body['result'][x].value) / 10000)
                            console.log("New Total: " + total);
                            transactionData[index].value = (total.toFixed(4));
                        } else {
                            console.log("!!!!!!!!!!!!!!!!!!!! Withdraw: " + body['result'][x].value + " Current: " + total);
                            total = total - (parseInt(body['result'][x].value) / 10000).toFixed(4)
                            console.log("New Total: " + total);
                            transactionData[index].value = (total.toFixed(4));
                        }
                    } else {
                        console.log("New Date: " + body['result'][x].value + " Current: " + total);
                        total += (parseInt(body['result'][x].value) / 10000)
                        console.log("New Total: " + total);
                        temp = {
                            "date": date,
                            "value": (total.toFixed(4))
                        }
                        transactionData.push(temp);
                    }
                }
            }
            console.log("data");
            const fs = require('fs');
            fs.writeFileSync("wallet.json", JSON.stringify(transactionData));
            fs.writeFileSync("raw.json", JSON.stringify(body['result']));
            console.log("--------------------- Wallets -----------------------------");
            console.log((transactionData));
        });
    });

});

function contains(arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) return true;
    }
    return false;
}