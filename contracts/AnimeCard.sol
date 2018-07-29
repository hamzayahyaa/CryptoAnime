pragma solidity ^0.4.19;
pragma experimental ABIEncoderV2;
import "./Ownable.sol";
import "./SafeMath.sol";
import "./erc721.sol";


contract AnimeCard is Ownable {
using SafeMath for uint;

struct Card{

  string name;
  uint currentPrice;
  uint sellingPrice;
  bool addToMarket;
}

event newCardAdded();
event cardBought();
event addedtoMarketPlace();
event removedFromMarketPlace();
event Transfer(address _from, address _to, uint _tokenId);


Card []private cards;

//mapping (address => uint []) _ownerToCard; //owner address to cards array
mapping (address => uint) _ownerToCardCount; // total card count
mapping (address =>  mapping (uint => uint))  _ownerCardToCount; // owner has what count of a particular card

//mapping (uint => bool) _ownerCardRelation;
//mapping(address => uint) _addressToCardCount; // total card count

uint private TotalPayment;//total payments made to this day



modifier onlyOwnerOf(uint _tokenId){
  require(_ownerCardToCount [msg.sender][_tokenId] > 0);
  _;
}

function getCardsByOwner() external view returns (Card []){
  Card [] memory arr =  new Card[](cards.length);

  for(uint i=0 ; i < cards.length ; i++){
    if(_ownerCardToCount[msg.sender][i] > 0){
      arr[i] = cards[i];
    }
    else {
            arr[i]=Card("null",1,1,false);
    }


  }
  return arr;
}


  //function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function _transfer(address _from, address _to, uint256 _tokenId) private {
      require( _ownerCardToCount[_from][_tokenId] > 0 );

    _ownerToCardCount[_to] = _ownerToCardCount[_to].add(1);
    _ownerCardToCount[_to][_tokenId] = _ownerCardToCount[_to][_tokenId].add(1);

    _ownerToCardCount[_from] = _ownerToCardCount[_from].sub(1);
    _ownerCardToCount[_from][_tokenId] = _ownerCardToCount[_from][_tokenId].sub(1);

//remove from prev user


//if(_ownerCardToCount[_to][_tokenId] == 0 )
    //_ownerToCard[_to].push(_tokenId);

   emit Transfer(_from, _to, _tokenId);
}


  function addCardHelper(string _name, uint _currentPrice, uint _sellingPrice, bool _addToMarket) private returns(uint){
        uint _index = cards.length ;
        cards.push(Card(_name, _currentPrice, _sellingPrice, _addToMarket));

      //  _ownerToCard[msg.sender].push(_index) ;

    return _index;
  }
function addCard (string _name, uint _currentPrice, uint _sellingPrice, bool _addToMarket) external onlyOwner{
        uint _index = addCardHelper(_name, _currentPrice, _sellingPrice, _addToMarket);
        _ownerToCardCount[msg.sender] = _ownerToCardCount[msg.sender].add(1);

        _ownerCardToCount[msg.sender][_index] = _ownerCardToCount[msg.sender][_index].add(1) ; // owner has what count of a particular card
}
function getCard(uint _tokenId) public view returns (string){
    require(_tokenId <= cards.length && _tokenId > 0 );
    return cards[_tokenId].name;
}


/////////////////////       ERC 721 PROTOCOL
function getTotalCardsCount () public view returns(uint){
  return cards.length;
}

  //function balanceOf(address _owner) public view returns (uint256 _balance);


function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId){
      _transfer(msg.sender, _to, _tokenId);
  }
//  function approve(address _to, uint256 _tokenId) public;
//  function takeOwnership(uint256 _tokenId) public;

//---------------------------------------

function withdraw() internal onlyOwner {
  owner.transfer(address(this).balance);
}


function buyCards(uint _tokenId) external payable{
    // TO DO
        uint price = cards[_tokenId].currentPrice;
        //
        uint cardCount  = _ownerCardToCount[owner][_tokenId];
        require(msg.value >= price && cardCount > 0);


         _transfer(owner, msg.sender, _tokenId);
         withdraw();

  }




}
