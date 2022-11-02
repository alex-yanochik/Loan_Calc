describe("Calculation Tests", function() {
  beforeEach(function () {
    amount: 0;
    years: 0;
    rate: 0;
  });
  
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 20000,
      years: 10,
      rate: 4
    };
    expect(calculateMonthlyPayment(values)).toEqual('202.49');
  });
    
    
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 20000,
      years: 10,
      rate: 4.987
    };
    expect(calculateMonthlyPayment(values)).toEqual('212.00');
  });
    
  afterEach(function() {
    amount: 0;
    years: 0;
    rate: 0;
  });
});