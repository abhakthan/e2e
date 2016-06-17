
describe('Login Page', function() {

  // Successful
  it('should fill in the sign-up page fields and successfully submit', function() {
    browser.get('http://localhost:8100/app/login/sign-up');

    element(by.name('email')).sendKeys('abc@email.com');
    element(by.name('confirmEmail')).sendKeys('abc@email.com');
    element.all(by.name('firstName')).last().sendKeys('Gertrude');
    element.all(by.name('middleName')).last().sendKeys('X');
    element.all(by.name('lastName')).last().sendKeys('Harkenreadeo');
    element.all(by.name('street1')).last().sendKeys('305 LINDEN AV');
    element.all(by.name('city')).last().sendKeys('ATLANTA');
    element.all(by.name('state')).last().sendKeys('GA');
    element.all(by.name('zip')).last().sendKeys('30316');
    element.all(by.name('phone')).last().sendKeys('1111111111');
    element.all(by.name('cardNumber')).last().sendKeys('4111111111111111');
    element.all(by.name('month')).get(0).sendKeys('4');
    element.all(by.name('year')).get(0).sendKeys('2021');
    element.all(by.name('cardSecurityCode')).last().sendKeys('111');
    element.all(by.name('month')).last().sendKeys('June');
    element.all(by.name('date')).last().sendKeys('8');
    element.all(by.name('year')).last().sendKeys('1967');
    element.all(by.name('gender')).last().sendKeys('Female');
    element.all(by.name('ssn')).last().sendKeys('666066112');
    element(by.buttonText('Submit')).click();
    browser.pause();

  });

});