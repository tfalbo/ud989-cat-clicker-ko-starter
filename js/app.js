var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('./img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function(){
        if(this.clickCount() < 10){
            return "Newborn";
        }
        else if (this.clickCount() >= 10 && this.clickCount() < 20 ){
            return "Infant";
        }
        else if(this.clickCount() >= 20 && this.clickCount() < 30){
            return "Teen";
        }
        else {
            return "Adult";
        }
    }, this);

    this.nicknames = ko.observableArray(['TabTab', 'T-Bone' ,'Mister T']);
}

ko.applyBindings(new ViewModel());