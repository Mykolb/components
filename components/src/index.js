import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'; //relative path b/c it is in the same folder; webpack auto attempts to find files using JS so you don't have to add it
import { ApprovalCard } from './ApprovalCard';
import 'semantic-ui-css/semantic.min.css';

// created props here first
// to show some custom sontent inside of component, wrap it in parent component, and it will show up on props.children property
const App = () => {
    return(
        <div className='ui container comments'>
            <ApprovalCard >
                <div>
                <h2>Attention!</h2>
                Would you like to add a post?
                </div>


            </ApprovalCard>

            <ApprovalCard> 
            <CommentDetail 
            author='Sam'
            timeAgo='Today at 3:00pm'
            comment='What up!'
            avatar={faker.image.avatar()}
            />
             </ApprovalCard>
             
             <ApprovalCard> 
            <CommentDetail
             author='Ted'
             timeAgo='Today at 4:45pm'
             comment='First day of work'
             avatar={faker.image.avatar()}
             />
             </ApprovalCard>

            <ApprovalCard>
            <CommentDetail
             author='Mel'
             timeAgo='Today at 5:50pm'
             comment='Hanging with friends'
             avatar={faker.image.avatar()}
            />
           </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))