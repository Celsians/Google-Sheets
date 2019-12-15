# Celsians Data Hub

Welcome to the data hub of [celsians.com](https://www.celsians.com/). Here you will find all the data we auto update the website with. Please see the table of contents below for more information about what each file contains.

In the name of transparency, we have made all this data public, so that you, and other developers can audit, parse, and create your own charts with it.

We ask that if you do use this data, to please credit us somewhere on the site. For more information please email [hi@celsians.com](mailto:hi@celsians.com)!

All the data is pulled nightly from the Celsius Network API and compared to the in-app numbers to verify they are correct. 

Developer and Maintainer: Ryan Guarascia - [Github](https://github.com/rguarascia)


# Table of Contents

 - [ActiveUsers](#active-users)
 - [AllWeeklyCommunityData](#allweeklycommunitydata)
 - [AverageUsers](#averageusers)
 - [BTCData](#btcbata)
 - [BTCUsers](#btcusers)
 - [BuyBackData](#buybackdata)
 - [CELData](#celdata)
 - [ETHData](#ethdata)
 - [USDCData](#usdcdata)
 - [communityData](#communitydata)
 - [data](#data)
 - [wallets](#wallets)

## Active Users

Contains the daily data of the active users percent. 

    {
	    "Date": "07.10.2019",
	    "Growth Percent": "2.87"
    }...

## AllWeeklyCommunityData

Contains the weekly data for Active Users %, BTC Depositors % and Average Network Growth %.

    {
    	"Date": "06.10.2019",
    	"Active Users %": "3.05",
    	"BTC Deposits %": "4.56",
    	"Average Network Growth %": "4.23"
    }...

## AverageUsers

Contains the daily data for Average Network Growth %.

    {
    	"Date": "07.10.2019",
    	"Growth Percent": "4.23"
    }...

## BTCData

Contains the weekly data for BTC Deposits, BTC Withdraws, Running total of Deposits and Running total of Withdraws

    {
	    "Week of": "09/12/2019",
	    "BTC Deposited": 404.6924847800001,
	    "BTC Withdrew": -210.52712271000001,
	    "Running Total": 35666.62088496003,
	    "Running Withdrew": -13363.151587380005
    }...

## BTCUsers

Contains the daily data for the BTC User Growth %.

    {
        "Date": "13.12.2019",
        "Growth Percent": "2.10"
    }...

## BuyBackData

Contains the daily data for the BTC User Growth %.

    {
	    "Date": "13.12.2019",
	    "# CEL Total": "15169859",
	    "CEL Close": "0.067553",
	    "$ Value CEL Total": "1,024.769"
    }...
## CELData

Contains the weekly data for CEL Deposits, CEL Withdraws, Running total of Deposits and Running total of Withdraws

       {
	        "Week of": "09/12/2019",
	        "CEL Deposited": 22359024.52200002,
	        "CEL Withdrew": -580536.4474,
	        "Running Total": 252633026.78989992,
	        "Running Withdrew": -58635573.319499984
        }...
        
## ETHData

Contains the weekly data for ETH Deposits, ETH Withdraws, Running total of Deposits and Running total of Withdraws

     {
	    "Week of": "09/12/2019",
	    "ETH Deposited": 6846.765516269443,
	    "ETH Withdrew": -2344.6964411135996,
	    "Running Total": 562504.7459431704,
	    "Running Withdrew": -233726.5486158186
    }...
    
## USDCData

Contains the weekly data for USDC Deposits, USDC Withdraws, Running total of Deposits and Running total of Withdraws

    {
	    "Week of": "09/12/2019",
	    "USDC Deposited": 1624786.948901999,
	    "USDC Withdrew": -791503.8348020001,
	    "Running Total": 43078910.87436402,
	    "Running Withdrew": -20402365.952189963
    }...

## communityData

Contains the all weekly community outputted as row Google-Sheet CEL Data

    {
	    "Date": "13.12.2019",
	    "KYC Users": "61082",
	    "Active Users": "17110",
	    "BTC Users": "35946",
	    "buybacks": "",
	    "_d9ney": "15169859", // # CEL total
	    "_db1zf": "0.067553", // CEL Close
	    "_dcgjs": "$1.024.769", // $ Value CEL total
	    "celinapp": "181595938", // Public Wallet
	    "_d415a": "2067349", // Withdraw Gateway
	    "_d5fpr": "15169859", // Buyback Wallet
	    "_d6ua4": "198833146", // Total
	    "_d88ul": "Friday",
	    "_dkvya": "13.12.2019", // Circ Date
	    "_dmair": "304895605" // Circ Supply
    }...

## data

Contains historical and current interest rates of Celsius Network.

    {
	    "Day": "Monday",
	    "Date": "09.12.2019",
	    "BTC": "3.7",
	    "ETH": "3",
	    "XRP": "3",
	    "LTC": "3.5",
	    "BCH": "3.6",
	    "ZRX": "4",
	    "BTG": "4",
	    "EOS": "4.75",
	    "OMG": "2.8",
	    "XLM": "2.75",
	    "ZEC": "5",
	    "DASH": "5.5",
	    "ORBS": "2.5",
	    "USDC": "7.6",
	    "GUSD": "7.6",
	    "TUSD": "7.6",
	    "PAX": "7.6",
	    "DAI": "4.25",
	    "USDT": "8",
	    "TGBP": "7.6",
	    "TAUD": "7.6",
	    "TCAD": "7.6",
	    "THKD": "7.6",
	    "CEL": "5.45",
	    "LEO": "",
	    "AVG-ALL": "",
	    "MAX % Bonus": ""
    }...

## wallets

Contains combined data on the total amount of CEL stored in wallets and the current circulating supply

    {
	    "Date": "13.12.2019",
	    "Wallet Data": "198833146",
	    "Circ Supply": "304895605"
    }...
