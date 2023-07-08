const $ = function(tag) {
    this.select = null;
    this.searchTag = function (selector) {
        this.select = document.querySelector(`.${selector}`);
        return this;
    };
    this.addEvent = function(eventCustom, callBackFn) {
        this.select.addEventListener(eventCustom, (event) => {
            callBackFn(event.target.style);
        });   
    };
    this.click = function (callBackFn) {
        this.addEvent('click', callBackFn);
        return this;        
    };

    return this.searchTag(tag);
};


