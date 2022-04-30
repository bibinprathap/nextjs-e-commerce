// react
import React, { useEffect, useRef, useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
// application
import ReviewsList from '~/components/shop/ReviewsList';
import { IProductPageLayout } from '~/interfaces/pages';
import { IReviewsList } from '~/interfaces/list';
import { shopApi } from '~/api';
import { useAsyncAction, useIsUnmountedRef } from '~/store/hooks';
import { validateEmail } from '~/services/validators';

interface IForm {
    rating: string;
    author: string;
    email: string;
    content: string;
}

interface Props {
    productId: number;
    productPageLayout: IProductPageLayout;
}

function ReviewsView(props: Props) {
    const intl = useIntl();
    const { productId, productPageLayout } = props;
    const [page, setPage] = useState<number>(1);
    const listMetaRef = useRef<{ productId: number, page: number } | null>(null);
    const [list, setList] = useState<IReviewsList | null>(null);
    const formMethods = useForm<IForm>();
    const {
        handleSubmit,
        register,
        errors,
        reset,
    } = formMethods;

    const isUnmountedRef = useIsUnmountedRef();

    const load = async (productId: number, page: number, canceledRef?: React.RefObject<boolean>) => {
        await shopApi.getProductReviews(productId, { limit: 8, page }).then((result) => {
            if (isUnmountedRef.current || canceledRef?.current) {
                return;
            }

            listMetaRef.current = {
                productId,
                page,
            };

            setList(result);
            setPage(result.page);
        });
    };

    useEffect(() => {
        const canceledRef = { current: false };

        if (productId !== listMetaRef.current?.productId || page !== listMetaRef.current?.page) {
            load(productId, page, canceledRef).then();
        }

        return () => {
            canceledRef.current = true;
        };
    }, [productId, page]);

    const [submit, submitInProgress] = useAsyncAction(async (data: IForm) => {
        await shopApi.addProductReview(productId, {
            ...data,
            rating: parseFloat(data.rating),
        });

        await load(productId, 1);

        if (isUnmountedRef.current) {
            return;
        }

        reset();

        toast.success(intl.formatMessage({ id: 'TEXT_TOAST_REVIEW_ADDED' }));
    }, [productId, reset]);

    return (
        <div className="reviews-view">
            {list && (
                <div className="reviews-view__list">
                    <ReviewsList
                        list={list}
                        page={page}
                        onPageChange={setPage}
                    />
                </div>
            )}

            <form className="reviews-view__form" onSubmit={handleSubmit(submit)}>
                <h3 className="reviews-view__header">
                    <FormattedMessage id="HEADER_WRITE_REVIEW" />
                </h3>
                <div className="row">
                    <div
                        className={classNames({
                            'col-xxl-8 col-xl-10 col-lg-9 col-12': productPageLayout === 'full',
                            'col-xxl-12 col-xl-10 col-12': productPageLayout === 'sidebar',
                        })}
                    >
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="review-stars">
                                    <FormattedMessage id="INPUT_RATING_LABEL" />
                                </label>
                                <select
                                    id="review-stars"
                                    name="rating"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.rating,
                                    })}
                                    ref={register({ required: true })}
                                >
                                    <option value="">
                                        {intl.formatMessage({ id: 'INPUT_RATING_PLACEHOLDER' })}
                                    </option>
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <option key={stars} value={stars}>
                                            {intl.formatMessage({ id: 'INPUT_RATING_OPTION' }, { stars })}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    {errors.rating?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-author">
                                    <FormattedMessage id="INPUT_YOUR_NAME_LABEL" />
                                </label>
                                <input
                                    type="text"
                                    id="review-author"
                                    name="author"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.author,
                                    })}
                                    placeholder={intl.formatMessage({ id: 'INPUT_YOUR_NAME_PLACEHOLDER' })}
                                    ref={register({ required: true })}
                                />
                                <div className="invalid-feedback">
                                    {errors.author?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-email">
                                    <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                                </label>
                                <input
                                    type="text"
                                    id="review-email"
                                    name="email"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.email,
                                    })}
                                    placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}
                                    ref={register({
                                        required: true,
                                        validate: { email: validateEmail },
                                    })}
                                />
                                <div className="invalid-feedback">
                                    {errors.email?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                    {errors.email?.type === 'email' && (
                                        <FormattedMessage id="ERROR_FORM_INCORRECT_EMAIL" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="review-text">
                                <FormattedMessage id="INPUT_YOUR_REVIEW_LABEL" />
                            </label>
                            <textarea
                                id="review-text"
                                rows={6}
                                name="content"
                                className={classNames('form-control', {
                                    'is-invalid': errors.content,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_YOUR_REVIEW_PLACEHOLDER' })}
                                ref={register({ required: true })}
                            />
                            <div className="invalid-feedback">
                                {errors.content?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )}
                            </div>
                        </div>
                        <div className="form-group mb-0 mt-4">
                            <button
                                type="submit"
                                className={classNames('btn', 'btn-primary', {
                                    'btn-loading': submitInProgress,
                                })}
                            >
                                <FormattedMessage id="BUTTON_POST_REVIEW" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReviewsView;
