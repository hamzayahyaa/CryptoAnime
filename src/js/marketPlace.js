

//      var Web3 = require('web3');
//      var web3 = new Web3('http://localhost:7545');

       if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
             console.log("is  DEFINED");
         }
         else{
         // set the provider you want from Web3.providers
         var mnemonic = "connect differ ticket issue expect roast idle arrest cannon draft valve limits";
         web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

           console.log("IS Not Defined");
        }

         // first account
         var walletAddress =  "0xb8731e673fac0c3c7c01fcd80d63cfcb3c575df4";

        web3.eth.defaultAccount = walletAddress;
        //web3.personal.unlockAccount(web3.eth.defaultAccount);

              //ABI
        var AnimeCardABI = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_currentPrice",
				"type": "uint256"
			},
			{
				"name": "_sellingPrice",
				"type": "uint256"
			},
			{
				"name": "_addToMarket",
				"type": "bool"
			}
		],
		"name": "addCard",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "buyCards",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "removedFromMarketPlace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "addedtoMarketPlace",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "cardBought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "newCardAdded",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getCard",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCardsByOwner",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "currentPrice",
						"type": "uint256"
					},
					{
						"name": "sellingPrice",
						"type": "uint256"
					},
					{
						"name": "addToMarket",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalCardsCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

       //AnimeCardContractAddress.addCard()


       //contract address
 var AnimeCardContract = AnimeCardABI.at('0x9c4c57b060f50084094f5e8136e939ffcc95c15c');


      // var res = AnimeCardContract.methods.getTotalCardsCount().call();
       //console.log(res);

            // var res = AnimeCardContract.methods.getTotalCardsCount();

        //    balance = web3.eth.getBalance('0x6183fba1816431b5bd2a818410b7425a0f797646');
         //AnimeCardContract.addCard("Checking", 4343324, 42342342, 0);
        //var name = AnimeCardContractAddress.getCard(0);
        //console.log(balance);
    //    console.log( web3.eth.getBalance(walletAddress));

//          AnimeCardContract.addCard("Moeed",3555,56464,true,{from:walletAddress,gas:300000});
        // AnimeCardContract.addCard("Hamza",3555,56464,true,{from:walletAddress,gas:300000});
           //AnimeCardContract.addCard("Abubakar Suhail",3555,56464,true,{from:walletAddress} );

//             console.log(AnimeCardContract.getTotalCardsCount());
              //var a = AnimeCardContract.test("hehe");
             //var ret =AnimeCardContract.getCard(0);
              //console.log(ret);

          //console.log(AnimeCardContract.getTotalCardsCount()) ;




        //  web3.eth.sendTransaction({to:'0x6183fba1816431b5bd2a818410b7425a0f797646' ,from: '0xb8731e673fac0c3c7c01fcd80d63cfcb3c575df4',data : data});
                  //AnimeCardContract.getTotalCardsCount
                //$("#button").click(function() {
                //    Coursetro.setInstructor($("#name").val(), $("#age").val());
                //});




       function fetchInput(){
        var name = parseInt(document.getElementById("nm").value);
        var sellingPrice=parseInt(document.getElementById("sp").value);
        var currentPrice = parseInt(document.getElementById("cp").value);

        AnimeCardContractAddress.methods.addCard(name, sellingPrice, currentPrice, 1);


       }

       function seeOutput(){
         var name = AnimeCardContractAddress.getCard(0).call();
         document.getElementById("checkDekho").value = name;

       }
