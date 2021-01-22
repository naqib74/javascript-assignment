// kilometer to meter conversion
function kilometerToMeter(kilometer) {
    
    if(kilometer < 0){
        return "Distance can't be negative please input positive value.";

    }
    else{
        meter=kilometer*1000; //1kilometer=1000meter
        return meter;
    }
  
}


// budget calculator
function budgetCalculator(watch , mobile, laptop) {
    if(watch < 0 || mobile < 0 || laptop < 0){
        return "You can't buy negative things"
    }
    else{
        var watchPrice=watch*50;
        var mobilePrice=mobile*100;
        var laptopPrice=laptop*500;
        var total=watchPrice + mobilePrice + laptopPrice;
        return total;
    }
}

// hotel cost calculator
function hotelCost(day) {
    var totalCost=0;
    if(day<=10){
        totalCost=day*100;
        return totalCost;
    }
    else if(day<=20){
        var firstPartDayCost=10*100;
        var remainingDay=day-10;
        var remainingDayCost=remainingDay*80
        var totalCost=firstPartDayCost + remainingDayCost;
        return totalCost;
    }
    else{
        var firstPartDayCost=10*100;
        var secondPartDaycost=10*80;
        var thirdPartDayCost=(day-20)*50;
        var totalCost=firstPartDayCost + secondPartDaycost + thirdPartDayCost;
        return totalCost;
    }
    
}

// Longest word identification
function megaFriend(friends) {
    var maxWord=friends[0];
    for(var i = 0; i< friends.length; i++){
        if(friends[i].length > maxWord.length){
            maxWord=friends[i];
            
        }
    }
    return maxWord;
}

