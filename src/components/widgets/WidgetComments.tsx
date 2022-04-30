// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { IComment } from '~/interfaces/comment';

interface Props {
    widgetTitle?: React.ReactNode;
    comments: IComment[];
}

function WidgetComments(props: Props) {
    const { widgetTitle, comments } = props;

    return (
        <div className="card widget widget-comments">
            {widgetTitle && (
                <div className="widget__header">
                    <h4>{widgetTitle}</h4>
                </div>
            )}

            <div className="widget-comments__body">
                <ul className="widget-comments__list">
                    {comments.map((comment, index) => (
                        <li key={index} className="widget-comments__item">
                            <div className="widget-comments__author">
                                <AppLink href="/">
                                    {comment.author}
                                </AppLink>
                            </div>
                            <div className="widget-comments__content">{comment.text}</div>
                            <div className="widget-comments__meta">
                                <div className="widget-comments__date">{comment.date}</div>
                                <div className="widget-comments__name">
                                    {'On '}
                                    <AppLink href="/" title={comment.postTitle}>
                                        {comment.postTitle}
                                    </AppLink>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WidgetComments;
