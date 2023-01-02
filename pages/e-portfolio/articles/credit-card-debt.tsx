import React from 'react'
import dynamic from 'next/dynamic'

import MainBlogContent from '../../../components/bloggables/mainBlogContent'
import HeaderBlog from '../../../components/bloggables/headerBlog'
import ParagraphBlog from '../../../components/bloggables/paragraphBlog'
import ContentBlog from '../../../components/bloggables/contentBlog'
import TableMaker from '../../../components/utils/tableMaker'
// import { MathComponent } from 'mathjax-react'

type Props = {}

export default function CreditCardDebt({}: Props) {
    const Math = dynamic(() => import("../../../components/utils/math"), {
        ssr: false
      })

  return (
    <MainBlogContent header={<>Credit Card Debt <span>Reflection</span></>}>
        <HeaderBlog>
            Introduction
        </HeaderBlog>
        <ParagraphBlog>
            Recently I learned about applying mathematics to real world scenarios 
            involving monthly payments to pay off debts; in this case, specifically 
            credit card debt. We learned about how interest can affect payments over 
            a long period of time.
        </ParagraphBlog>

        <HeaderBlog>
            Breakdown
        </HeaderBlog>

        <ParagraphBlog>
            Assume that we had an exciting birthday party, and we spent <span>1500</span> using a 
            credit card. We now spend <span>25</span> dollars a month to pay off the debt; however, 
            we are plagued by an <span>APR (Annual Percentage Rate)</span> of <span>14.1%.</span>
        </ParagraphBlog>

        <ParagraphBlog>
            First, we must calculate the monthly, compound interest. This is calculated using:
        </ParagraphBlog>

        {/* <ParagraphBlog>
            <code>
                i = APR/12
            </code>
        </ParagraphBlog> */}

        <ContentBlog stretchInner={true}>
            <Math>
            {String.raw`i = APR/12`}
            </Math>
        </ContentBlog>

        <ParagraphBlog>
            This is because the interest is compounded monthly, and APR is relative to a year, and 
            there are 12 months in a year. Therefore, to calculate interest we divide APR by 12.
        </ParagraphBlog>

        <ParagraphBlog>
            In this example, we assume that the consumer pays $25 a month. However, due to interest, 
            the amount on the debt actually increases by a given percentage [i].
        </ParagraphBlog>

        <ParagraphBlog>
            Thankfully, $25 dollars is enough to overturn the monthly interest.
        </ParagraphBlog>

        <ContentBlog>
            <TableMaker>
            {[
                ["Month", "Interest", "Balance"],
                [1, "$17.63", "$1492.63"],
                [2, "$17.54", "$1485.17"],
                [3, "$17.45", "$1477.62"]
            ]}
            </TableMaker>
        </ContentBlog>

        <ParagraphBlog>
            Next, we introduce an equation that calculates the payment per month from the amount of 
            months we want to spend paying off the debt.
        </ParagraphBlog>
        
        <ParagraphBlog>
            Key
            <br/>
            <code>
                P = Monthly Payment
                <br />
                D = Current Debt Balance
                <br />
                M = Amount of Months Paying Off the Debt
                <br />
                i = Monthly Interest Percentage
            </code>
        </ParagraphBlog>
        
        <ContentBlog stretchInner={true}>
            <Math>
            {String.raw`P = {D * i \over 1-(1+i)^{-M}}`}
            </Math>
        </ContentBlog>
                
        <ParagraphBlog>
            Using this equation, we flip it around to give us the months we&apos;d take with different 
            payment counts. 
        </ParagraphBlog>

        <ContentBlog stretchInner={true}>
            <Math>
            {String.raw`M = {-\ln({P-D*i \over P}) \over \ln(1+i)}`}
            </Math>
        </ContentBlog>

        <ParagraphBlog>
            For example, we can calculate how many months we would be paying off the debt if we spent 
            $25 a month.
        </ParagraphBlog>

        <ParagraphBlog>
            We would be paying off the debt for the next 105 months; that would around 8.7 years! This 
            would cause us to pay $1K on interest, which is <u>not</u> ideal.
        </ParagraphBlog>

        <ParagraphBlog>
            As you can expect, as we pay more a month, we won&apos;t be paying off this debt for as long, and 
            we won&apos;t be paying as much for interest.
        </ParagraphBlog>

        <ParagraphBlog>
            If we use the equation the other way, we can define the amount of months we want to keep 
            paying off the debt for. 
        </ParagraphBlog>

        <ParagraphBlog>
            For example, if we want to continue paying off the debt for 12 months, our payment would 
            be <span>134.75</span> a month.
        </ParagraphBlog>

        <HeaderBlog>
            Real World Application
        </HeaderBlog>

        <ParagraphBlog>
            This is a great example of math being used in real world application, because it allows 
            someone to be able to calculate their finances, and the best way to manage their moeny.
        </ParagraphBlog>

        <ParagraphBlog>
            With the ability to make and use these equations, someone can easily solve their 
            finances, and efficiently use their money and find the best deals.
        </ParagraphBlog>

        <HeaderBlog>
            Other Applications
        </HeaderBlog>

        <ParagraphBlog>
            Similar equations and analysis could be used for figuring out the amount of animals 
            that can be hunted, while still keeping the current population afloat. 
        </ParagraphBlog>

        <ParagraphBlog>
            This is because animals slowly increase usually at a predictable percentage rate, and 
            therefore this could represent the interest part of the equation. 
        </ParagraphBlog>

        <ParagraphBlog>
            With that knowledge, the amount of animals that can be hunted can be easily counted.
        </ParagraphBlog>

        <HeaderBlog>
            Is this important for consumers?
        </HeaderBlog>

        <ParagraphBlog>
            Yes, this would absolutely be beneficial for a normal person to understand. If someone 
            wants to get into the business world as well, this would also be very important. 
            Understanding how the monthly interest affects your payments may seem complicated, but 
            it is very important for someone to at least understand the basics of, or may be further.
        </ParagraphBlog>

        <HeaderBlog>
            What is the best plan for paying off Credit Card Balance?
        </HeaderBlog>

        <ParagraphBlog>
            Generally, the best thing you can do if possible is to pay more monthly; this will allow 
            you to avoid less interest charges, and it will eliminate the debt faster so you won&apos;t 
            have to worry about it anymore.
        </ParagraphBlog>

        <ParagraphBlog>
            The worst thing that you could do is spend less money every month; if you pay too little, 
            your interest could quite literally over power the amount you pay, which would make your 
            debt only worse. 
        </ParagraphBlog>

        <ParagraphBlog>
            And if you do pay too little, but enough to outweight the interest, the debt will still 
            sit for long periods of time, which will cause you to be paying mostly interest money. 
            This would be terrible because that is money you don&apos;t need to waste.
        </ParagraphBlog>

        <ParagraphBlog>
            If you can&apos;t pay for the best method, at least pay some amount; a little bit is going 
            to be better than nothing. If you pay nothing, the debt will only increase further 
            faster.
        </ParagraphBlog>

        <HeaderBlog>
            Conclusion
        </HeaderBlog>

        <ParagraphBlog>
            In conclusion, I believe the average consumer should at least understand the basics 
            of interest and APR; the idea that there is an interest constantly battling your debt 
            payments, and the more you spend a month, the less you pay of interest.
        </ParagraphBlog>

        <ParagraphBlog>
            Not only that, but this assignment has shown me how useful math can be, even outside 
            of a Computer Science and Physics stand point. The fact that math can be so beneficial 
            in finance (a thing that everyone has to deal with in a capitilist society) shows its 
            importance to understand; even at a High School level.
        </ParagraphBlog>

    </MainBlogContent>
  )
}