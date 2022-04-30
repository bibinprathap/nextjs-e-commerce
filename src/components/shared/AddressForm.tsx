// react
import React, {
    useEffect,
    useMemo,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
// application
import { countriesApi } from '~/api';
import { ICountry } from '~/interfaces/country';
import { useDetachableForm } from '~/services/hooks';
import { validateEmail } from '~/services/validators';

export interface IAddressForm {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    email: string;
    phone: string;
}
// country: string;
// address1: string;
// address2: string;
// city: string;
// state: string;
// postcode: string;

interface Props {
    namespace?: string;
    disabled?: boolean;
    idPrefix?: string;
}

export function getAddressFormDefaultValue(initialData: IAddressForm | null = null): IAddressForm {
    return {
        firstName: '',
        lastName: '',
        company: '',
        country: 'AE',
        email: '',
        phone: '',
        ...initialData,
    };


}

function AddressForm(props: Props) {
    const { namespace, disabled, idPrefix } = props;
    const intl = useIntl();
    const formMethods = useFormContext();
    const { errors: errorsProps } = formMethods;
    const errors = namespace ? errorsProps[namespace] : errorsProps;
    const fieldId = idPrefix ? `${idPrefix}-` : '';
    const ns = useMemo(() => (namespace ? `${namespace}.` : ''), [namespace]);
    const [countries, setCountries] = useState<ICountry[] | null>(null);
    const register = useDetachableForm(formMethods, disabled || false);

    // Load countries.
    useEffect(() => {
        let canceled = false;

        countriesApi.getCountries().then((result) => {
            if (canceled) {
                return;
            }

            setCountries(result);
        });

        return () => {
            canceled = true;
        };
    }, []);

    if (countries === null) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor={`${fieldId}first-name`}>
                        <FormattedMessage id="INPUT_FIRST_NAME_LABEL" />
                    </label>
                    <input
                        type="text"
                        id={`${fieldId}first-name`}
                        name={`${ns}firstName`}
                        className={classNames('form-control', {
                            'is-invalid': errors?.firstName,
                        })}
                        disabled={disabled}
                        placeholder={intl.formatMessage({ id: 'INPUT_FIRST_NAME_PLACEHOLDER' })}
                        ref={register({ required: true })}
                    />
                    <div className="invalid-feedback">
                        {errors?.firstName?.type === 'required' && (
                            <FormattedMessage id="ERROR_FORM_REQUIRED" />
                        )}
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor={`${fieldId}last-name`}>
                        <FormattedMessage id="INPUT_LAST_NAME_LABEL" />
                    </label>
                    <input
                        type="text"
                        id={`${fieldId}last-name`}
                        name={`${ns}lastName`}
                        className={classNames('form-control', {
                            'is-invalid': errors?.lastName,
                        })}
                        disabled={disabled}
                        placeholder={intl.formatMessage({ id: 'INPUT_LAST_NAME_PLACEHOLDER' })}
                        ref={register({ required: true })}
                    />
                    <div className="invalid-feedback">
                        {errors?.lastName?.type === 'required' && (
                            <FormattedMessage id="ERROR_FORM_REQUIRED" />
                        )}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor={`${fieldId}company-name`}>
                    <FormattedMessage id="INPUT_COMPANY_LABEL" />
                    <span className="text-muted">
                        {' ('}
                        <FormattedMessage id="TEXT_OPTIONAL" />
                        )
                    </span>
                </label>
                <input
                    type="text"
                    id={`${fieldId}company-name`}
                    name={`${ns}company`}
                    className="form-control"
                    disabled={disabled}
                    placeholder={intl.formatMessage({ id: 'INPUT_COMPANY_PLACEHOLDER' })}
                    ref={register()}
                />
            </div>
            <div className="form-group">
                <label htmlFor={`${fieldId}country`}>
                    <FormattedMessage id="INPUT_COUNTRY_LABEL" />
                </label>
                <select
                    id={`${fieldId}country`}
                    name={`${ns}country`}
                    className={classNames('form-control', {
                        'is-invalid': errors?.country,
                    })}
                    disabled={disabled}
                    ref={register({ required: true })}
                >
                    <option value="">{intl.formatMessage({ id: 'INPUT_COUNTRY_PLACEHOLDER' })}</option>
                    {countries && countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {/* {intl.formatMessage({ id: `COUNTRY_NAME_${country.code}` })} */}
                            {country.name}
                        </option>
                    ))}
                </select>
                <div className="invalid-feedback">
                    {errors?.country?.type === 'required' && (
                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                    )}
                </div>
            </div>


            <div className="form-row">
                <div className="form-group col-md-6 mb-0">
                    <label htmlFor={`${fieldId}email`}>
                        <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                    </label>
                    <input
                        type="email"
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
                <div className="form-group col-md-6 mb-0">
                    <label htmlFor={`${fieldId}phone`}>
                        <FormattedMessage id="INPUT_PHONE_NUMBER_LABEL" />
                    </label>
                    <input
                        type="text"
                        id={`${fieldId}phone`}
                        name={`${ns}phone`}
                        className={classNames('form-control', {
                            'is-invalid': errors?.phone,
                        })}
                        disabled={disabled}
                        placeholder={intl.formatMessage({ id: 'INPUT_PHONE_NUMBER_PLACEHOLDER' })}
                        ref={register({ required: true })}
                    />
                    <div className="invalid-feedback">
                        {errors?.phone?.type === 'required' && (
                            <FormattedMessage id="ERROR_FORM_REQUIRED" />
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddressForm;
