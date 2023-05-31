import React from 'react'
import ContentBlog from '../../../../components/bloggables/contentBlog'

import HeaderBlog from '../../../../components/bloggables/headerBlog'
import MainBlogContent from '../../../../components/bloggables/mainBlogContent'
import ParagraphBlog from '../../../../components/bloggables/paragraphBlog'

type Props = {}

function ricePurityTest({ }: Props) {
    return (
        <MainBlogContent header={<><span>Rice Purity</span> Test</>}>
            <HeaderBlog>
                Explanation
            </HeaderBlog>

            <ParagraphBlog>
                The <span>Rice Purity test</span> is a test to determine the purity
                of the taker; just like it says. By &quot;purity,&quot; we simply
                mean that in terms of <span>sex, drugs, and other acts of 
                indecency and adulthood</span> (and worse).
            </ParagraphBlog>

            <ParagraphBlog>
                The test contains <span>100 questions</span>. For each question
                marked yes, a point is lost. This means that a score
                of <span>100 is very very pure</span>, while <span>0 is very very
                corrupt</span>.
            </ParagraphBlog>

            <ParagraphBlog>
                <span>Quick Disclaimer</span>: Although this test has been used in
                a serious context, this is for <span>entertainment 
                purposes</span> only. These scores do not reflect a person as a 
                whole, <span>merely their experiences</span>.
            </ParagraphBlog>

            <ContentBlog>
                <button title='Take Our Test' onClick={() => window.open('/e-portfolio/projects/rice-purity-test/test', '_self')}>Take Our Test</button>
            </ContentBlog>

            <HeaderBlog>
                Historical Context
            </HeaderBlog>

            <ParagraphBlog>
                Students intending to apply to the <span>Rice 
                University</span> would be required to take the test to determine their 
                purity. The test was very similar to modern times:
                students were asked <span>100</span> questions, and
                the more answers were yes, the less pure, and the
                lower the score.
            </ParagraphBlog>

            <ParagraphBlog>
                When the first test came out from the university, it
                was predominately given to <span>women</span>. Women were then <span>shamed</span> if 
                there score was <span>lower than 70</span>, and <span>praised if it was 
                above 90.</span>
            </ParagraphBlog>

            <ParagraphBlog>
                From there on, many other Universities gave out a <span>similar
                test</span> to show how pure their students were. 
            </ParagraphBlog>

            <ParagraphBlog>
                In <span>1976</span>, a teacher gave out the test to her 
                students. She was very quickly fired. However, the teacher
                sued the school district, and received <span>$71,000</span>.
            </ParagraphBlog>

            <ParagraphBlog>
                The test <span>nowadays</span> is used as a <span>joke between 
                friends</span> (as this version of the test is as well). Even though
                this test has had some serious contexts, we <span>highly
                recommend</span> that you do <span>not engage</span> in judging others
                over the test. <span>It&apos;s a joke, we promise.</span>
            </ParagraphBlog>
        </MainBlogContent>
    )
}

export default ricePurityTest    

// Resources:
//
// https://lhsepic.com/6806/opinion/3_op_ricepuritypranavm/#:~:text=The%20Rice%20Purity%20Test%20is,risqu%C3%A9%20their%20female%20population%20was.
// https://en.wikipedia.org/wiki/Purity_test