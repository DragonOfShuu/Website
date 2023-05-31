import React, { Component, PropsWithChildren, ReactElement, ReactNode } from 'react'
import OneAnswerCheck from './OneAnswerCheck';
import { QuestionProps} from './Question';

// type AcceptableChildren = Question<QuestionProps, QuestionState>;

export interface BlogTestProps {
    // children: ReactNode
    // callback: CallableFunction
    startValue: number
}

type State = {}

abstract class BlogTest extends Component<BlogTestProps, State> {
    constructor(props: BlogTestProps) {
        super(props)
        this.state = { score: props.startValue }
    }

    render() {
        return (
            <>
            {this.renderable()}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20}}>
                <button title='submit' onClick={this.submitClicked} >Submit</button>
            </div>
            </>
        )
    }

    adjustScore = (amount: number) => {

    }

    abstract submitClicked(): void;
    abstract renderable(): React.ReactNode
}

export default BlogTest