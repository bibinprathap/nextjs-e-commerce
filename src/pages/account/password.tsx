// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
// application
import AccountLayout from '~/components/account/AccountLayout';
import PageTitle from '~/components/shared/PageTitle';
import { accountApi } from '~/api';
import { useAsyncAction } from '~/store/hooks';

interface IForm {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

function Page() {
    const intl = useIntl();
    const [serverError, setServerError] = useState<string | null>(null);
    const {
        register,
        errors,
        watch,
        handleSubmit,
    } = useForm<IForm>();

    const [submit, submitInProgress] = useAsyncAction((data: IForm) => {
        setServerError(null);

        return accountApi.changePassword(data.currentPassword, data.newPassword).then(
            () => {
                toast.success(intl.formatMessage({ id: 'TEXT_TOAST_PASSWORD_CHANGED' }));
            },
            (error: Error) => {
                setServerError(`ERROR_API_${error.message}`);
            },
        );
    }, [intl]);

    return (
        <div className="card">
            <PageTitle>{intl.formatMessage({ id: 'HEADER_CHANGE_PASSWORD' })}</PageTitle>

            <div className="card-header">
                <h5><FormattedMessage id="HEADER_CHANGE_PASSWORD" /></h5>
            </div>
            <div className="card-divider" />
            <div className="card-body card-body--padding--2">
                <div className="row no-gutters">
                    <form onSubmit={handleSubmit(submit)} className="col-12 col-lg-7 col-xl-6">
                        {serverError && (
                            <div className="alert alert-sm alert-danger">
                                <FormattedMessage id={serverError} />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="password-current">
                                <FormattedMessage id="INPUT_PASSWORD_CURRENT_LABEL" />
                            </label>
                            <input
                                type="password"
                                id="password-current"
                                name="currentPassword"
                                className={classNames('form-control', {
                                    'is-invalid': errors.currentPassword,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_CURRENT_PLACEHOLDER' })}
                                ref={register({ required: true })}
                            />
                            <div className="invalid-feedback">
                                {errors.currentPassword?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-new">
                                <FormattedMessage id="INPUT_PASSWORD_NEW_LABEL" />
                            </label>
                            <input
                                type="password"
                                id="password-new"
                                name="newPassword"
                                className={classNames('form-control', {
                                    'is-invalid': errors.newPassword,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_NEW_PLACEHOLDER' })}
                                ref={register({ required: true })}
                            />
                            <div className="invalid-feedback">
                                {errors.newPassword?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-confirm">
                                <FormattedMessage id="INPUT_PASSWORD_REPEAT_LABEL" />
                            </label>
                            <input
                                type="password"
                                id="password-confirm"
                                name="confirmPassword"
                                className={classNames('form-control', {
                                    'is-invalid': errors.confirmPassword,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_REPEAT_PLACEHOLDER' })}
                                ref={register({
                                    required: true,
                                    validate: {
                                        match: (value) => value === watch('newPassword'),
                                    },
                                })}
                            />
                            <div className="invalid-feedback">
                                {errors.confirmPassword?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )}
                                {errors.confirmPassword?.type === 'match' && (
                                    <FormattedMessage id="ERROR_FORM_PASSWORD_DOES_NOT_MATCH" />
                                )}
                            </div>
                        </div>

                        <div className="form-group mb-0">
                            <button
                                type="submit"
                                className={classNames('btn', 'btn-primary', 'mt-3', {
                                    'btn-loading': submitInProgress,
                                })}
                            >
                                <FormattedMessage id="BUTTON_CHANGE" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Page.Layout = AccountLayout;

export default Page;
