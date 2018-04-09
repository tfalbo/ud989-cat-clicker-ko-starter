var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('./img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/');

    

    this.level = ko.computed(function(){
        var clicks = this.clickCount();
        if(clicks < 10){
            return "Newborn";
        }
        else if (clicks >= 10 && clicks < 20 ){
            return "Infant";
        }
        else if(clicks >= 20 && clicks < 30){
            return "Teen";
        }
        else {
            return "Adult";
        }
    }, this);

    this.nicknames = ko.observableArray(['TabTab', 'T-Bone' ,'Mister T']);
}


var ViewModel = function() {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
    
}

ko.applyBindings(new ViewModel());