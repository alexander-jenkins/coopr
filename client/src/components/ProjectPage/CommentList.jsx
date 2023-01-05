//Displays a list of comments on a specific ticket
//ProjectPage -> CommentList -> CommentCard
import React from 'react';
import { Stack } from 'react-bootstrap';
import CommentCard from './CommentCard';

function CommentList(props) {

    const comments = props.commentList.comments;
    return (
        <div>
            <Stack gap={3}>
                {comments &&
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.user} />
                    ))}
            </Stack>
        </div>
    );
}

export default CommentList;
