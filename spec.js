describe('Enter name facture', function()
{
    it('should enter name as Tom', function()
    {

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Tom');
        var text = element(by.css('h1.ng-binding'));

        expect(text.getText()).toEqual('Hello Tom!');
    })
    
});