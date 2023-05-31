import React from 'react'

import HeaderBlog from '../../../../components/bloggables/headerBlog'
import MainBlogContent from '../../../../components/bloggables/mainBlogContent'

import BlogTest, {BlogTestProps} from '../../../../components/bloggables/testable/BlogTest'
import OneAnswerCheck from '../../../../components/bloggables/testable/OneAnswerCheck'

// type Props = {
    
// }

// function test({}: Props) {

//     function getScore() {

//     }

//     return (
//         // <main className='main'>
//         //     <h1 className='title'>
//         //         <span>Rice Purity</span> Test
//         //     </h1>
//         //     <ATest callback={getScore}>
//         //         <OneAnswerCheck isRemovePoint={true}>{"Have you ever held hands romantically?"}</OneAnswerCheck>
//         //     </ATest>
//         // </main>
//         <MainBlogContent header={<><span>Rice Purity</span> Test</>}>
//             <ATest callback={getScore}>
//                 <OneAnswerCheck isRemovePoint={true}>{"Have you ever held hands romantically?"}</OneAnswerCheck>
//             </ATest>
//         </MainBlogContent>
//     )
// }

interface ITheTest extends BlogTestProps {

}

class theTest extends BlogTest {
    constructor(props: BlogTestProps) {
        // let giveable: BlogTestProps = {startValue: 100}
        super(props)
    }

    renderable(): React.ReactNode {
        return (
            <MainBlogContent header={<><span>Rice Purity</span> Test</>}>
                <HeaderBlog>
                    Test
                </HeaderBlog>
                <OneAnswerCheck isRemovePoint={true} callbackFunction={this.adjustScore}>
                &quot;Have you ever held hands romantically?&quot;
                </OneAnswerCheck>
            </MainBlogContent>
        )
    }

    submitClicked(): void {
        
    }
}

type Props = {}
const Test = (props: Props) => {
  return (
      <></>
    // <theTest>
    // </theTest>
  );
}

export default Test;