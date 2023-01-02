OUTLINE
==
- Do you think this project shows how math can be appliedto the real world? "Yes": 
  Elaborate why it is important or beneficial.

```This is a good example of how math is used in the real world because it involves a core subject for what math is used for; finance. Math is used heavily in finance to make sure that people are being paid fairly. However, this can be used as tricks as well.```

- Can you give an example of another application where this type of analysis would be beneficial? Be Specific.

```This kind of analysis can be beneficial to ```

- If you were a financial adviser, why wouold it be important to be able to explain the details of this project to clients?

``` Because people who are able to understand these concepts will be able to manage their money better. They will be able to predict the amount of money they will need over time, and they will understand the benefits of spending more money at a time instead of playing multitudes of interest for just less to pay every month. ```

- Did this assignment change your opinion of the usefulness of math? Write one paragraph stating what ideas changed and why. If this project did not change the way you think, write how this project gave further evidence to support your existing opinion about applying math. Be specific.

- What is the best plan for paying off a credit card balance? What is the worst approach and why? What should you do if you can't afford the payments required for the best plan? What are two things that the "average" consumer can learn by completing this assignment?

ESSAY
==

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recently I learned about applying mathematics to real world scenarios involving monthly payments to pay off debts; in this case, specifically credit card debt. We learned about how interest can affect payments over a long period of time. 

**Breakdown**
---

<!-- ![alt text](../../public/e-portfolio/credit-card-debt/CreditCardDebt-1.png) -->

> Assume that we had an exciting birthday party, and we spent 1500 using a credit card. We now spend 25 dollars a month to pay off the debt; however, we are plagued by an APR (Annual Percentage Rate) of 14.1%.

First, we must calculate the monthly, compound interest. This is calculated using:

```r
i = APR/12
```

This is because the interest is compounded monthly, and APR is relative to a year, and there are 12 months in a year. Therefore, to calculate interest we divide APR by 12.

In this example, we assume that the consumer pays $25 a month. However, due to interest, the amount on the debt actually increases by a given percentage [`i`].

Thankfully, $25 dollars is enough to overturn the monthly interest.

|Month|Interest|Balance|
|-----|--------|-------|
|1 | $17.63 | $1492.63
|2 | $17.54 | $1485.17
|3 | $17.45 | $1477.62

<!-- ![alt text](../../public/e-portfolio/credit-card-debt/CreditCardDebt-2.png) -->

Next, we introduce an equation that calculates the payment per month from the amount of months we want to spend paying off the debt.

<!-- $$ i = {-b \pm \sqrt{b^2-4ac} \over 2a} $$ -->

$$ P = {D * i \over 1-(1+i)^{-M}} $$

```
> Key

P = Monthly Payment
D = Current Debt Balance
M = Amount of Months Paying Off the Debt
i = Monthly Interest Percentage
```

Using this equation, we flip it around to give us the months we'd take with different payment counts. 

$$ M = {-\ln({P-D*i \over P}) \over \ln(1+i)} $$

For example, we can calculate how many months we would be paying off the debt if we spent $25 a month.

We would be paying off the debt for the next 105 months; that would around 8.7 years! This would cause us to pay $1K on interest, which is __not__ ideal.

As you can expect, as we pay more a month, we won't be paying off this debt for as long, and we won't be paying as much for interest.

If we use the equation the other way, we can define the amount of months we want to keep paying off the debt for. 

For example, if we want to continue paying off the debt for 12 months, our payment would be `134.75` a month.

**Real World Application**
--

This is a great example of math being used in real world application, because it allows someone to be able to calculate their finances, and the best way to manage their moeny.

With the ability to make and use these equations, someone can easily solve their finances, and efficiently use their money and find the best deals.

**Other Applilcations**
--

Similar equations and analysis could be used for figuring out the amount of animals that can be hunted, while still keeping the current population afloat. 

This is because animals slowly increase usually at a predictable percentage rate, and therefore this could represent the interest part of the equation. 

With that knowledge, the amount of animals that can be hunted can be easily counted.

**Is this important for consumers?**
--

Yes, this would absolutely be beneficial for a normal person to understand. If someone wants to get into the business world as well, this would also be very important. Understanding how the monthly interest affects your payments may seem complicated, but it is very important for someone to at least understand the basics of, or may be further.

**What is the best plan for paying off Credit Card Balance?**
--

Generally, the best thing you can do if possible is to pay more monthly; this will allow you to avoid less interest charges, and it will eliminate the debt faster so you won't have to worry about it anymore.

The worst thing that you could do is spend less money every month; if you pay too little, your interest could quite literally over power the amount you pay, which would make your debt only worse. 

And if you do pay too little, but enough to outweight the interest, the debt will still sit for long periods of time, which will cause you to be paying mostly interest money. This would be terrible because that is money you don't need to waste.

If you can't pay for the best method, at least pay some amount; a little bit is going to be better than nothing. If you pay nothing, the debt will only increase further faster.

**Conclusion**
--

In conclusion, I believe the average consumer should at least understand the basics of interest and APR; the idea that there is an interest constantly battling your debt payments, and the more you spend a month, the less you pay of interest.

Not only that, but this assignment has shown me how useful math can be, even outside of a Computer Science and Physics stand point. The fact that math can be so beneficial in finance (a thing that everyone has to deal with in a capitilist society) shows its importance to understand; even at a High School level.