// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import { IComment } from '~/interfaces/comment';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    comments: IComment[];
    level?: number;
}

function CommentsList(props: Props) {
    const {
        comments,
        level = 0,
        className,
        ...rootProps
    } = props;

    const rootClasses = classNames(className);

    return (
        <div className={rootClasses} {...rootProps}>
            <ol className={`comments-list comments-list--level--${level}`}>
                {comments.map((comment, index) => (
                    <li key={index} className="comments-list__item">
                        <div className="comment">
                            <div className="comment__body">
                                <div className="comment__avatar">
                                    <AppImage src={comment.avatar} />
                                </div>
                                <div className="comment__meta">
                                    <div className="comment__author">{comment.author}</div>
                                    <div className="comment__date">{comment.date}</div>
                                </div>
                                <div className="comment__reply">
                                    <button type="button" className="btn btn-xs btn-light">Reply</button>
                                </div>
                                <div className="comment__content typography">{comment.text}</div>
                            </div>
                        </div>
                        {comment.children && comment.children.length > 0 && (
                            <div className="comments-list__children">
                                <CommentsList comments={comment.children} level={level + 1} />
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default CommentsList;
