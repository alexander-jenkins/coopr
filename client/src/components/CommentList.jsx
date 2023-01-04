import React from 'react';
import { Stack } from 'react-bootstrap';
import CommentCard from './CommentCard';

function CommentList(props) {
    //ProjectPage -> CommentList -> CommentCard

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
