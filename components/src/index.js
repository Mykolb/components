import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'; //relative path b/c it is in the same folder; webpack auto attempts to find files using JS so you don't have to add it



// created props here first
const App = () => {
    return(
        <div className='ui container comments'>
            <CommentDetail 
            author='Sam'
            timeAgo='Today at 3:00pm'
            comment='What up!'
            avatar={faker.image.avatar()}
            />
            <CommentDetail
             author='Ted'
             timeAgo='Today at 4:45pm'
             comment='First day of work'
             avatar={faker.image.avatar()}
             />
            <CommentDetail
             author='Mel'
             timeAgo='Today at 5:50pm'
             comment='Hanging with friends'
             avatar={faker.image.avatar()}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))