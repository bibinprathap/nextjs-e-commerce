// react
import React, { useMemo } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
// application
import { useDetachableForm } from '~/services/hooks';
import { validateEmail } from '~/services/validators';

export interface IRegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
}

interface Props {
    namespace?: string;
    disabled?: boolean;
    idPrefix?: string;
}

export function getRegisterFormDefaultValue(initialData: IRegisterForm | null = null): IRegisterForm {
    return {
        email: '',
        password: '',
        confirmPassword: '',
        ...initialData,
    };
}

function RegisterForm(props: Props) {
    const { namespace, disabled, idPrefix } = props;
    const formMethods = useFormContext();
    const { getValues, errors: errorsProps } = formMethods;
    const errors = namespace ? errorsProps[namespace] : errorsProps;
    const intl = useIntl();
    const fieldId = idPrefix ? `${idPrefix}-` : '';
    const ns = useMemo(() => (namespace ? `${namespace}.` : ''), [namespace]);
    const register = useDetachableForm(formMethods, disabled || false);

    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor={`${fieldId}email`}>
                    <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                </label>
                <input
                    type="text"
                    id={`${fieldId}email`}
                    name={`${ns}email`}
                    className={classNames('form-control', {
                        'is-invalid': errors?.email,
                    })}
                    disabled={disabled}
                    placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}
                    ref={register({ required: true, validate: { email: validateEmail } })}
                />
                <div className="invalid-feedback">
                    {errors?.email?.type === 'required' && (
                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                    )}
                    {errors?.email?.type === 'email' && (
                        <FormattedMessage id="ERROR_FORM_INCORRECT_EMAIL" />
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor={`${fieldId}password`}>
                    <FormattedMessage id="INPUT_PASSWORD_LABEL" />
                </label>
                <input
                    type="password"
                    id={`${fieldId}password`}
                    name={`${ns}password`}
                    className={classNames('form-control', {
                        'is-invalid': errors?.password,
                    })}
                    disabled={disabled}
                    placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_PLACEHOLDER' })}
                    ref={register({ required: true })}
                />
                <div className="invalid-feedback">
                    {errors?.password?.type === 'required' && (
                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                    )}
                </div>
            </div>

            <div className="form-group mb-0">
                <label htmlFor={`${fieldId}confirm-password`}>
                    <FormattedMessage id="INPUT_PASSWORD_REPEAT_LABEL" />
                </label>
                <input
                    type="password"
                    id={`${fieldId}confirm-password`}
                    name={`${ns}confirmPassword`}
                    className={classNames('form-control', {
                        'is-invalid': errors?.confirmPassword,
                    })}
                    disabled={disabled}
                    placeholder={intl.formatMessage({ id: 'INPUT_PASSWORD_REPEAT_PLACEHOLDER' })}
                    ref={register({
                        required: true,
                        validate: {
                            match: (value) => value === getValues(`${ns}password`),
                        },
                    })}
                />
                <div className="invalid-feedback">
                    {errors?.confirmPassword?.type === 'required' && (
                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                    )}
                    {errors?.confirmPassword?.type === 'match' && (
                        <FormattedMessage id="ERROR_FORM_PASSWORD_DOES_NOT_MATCH" />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default RegisterForm;
