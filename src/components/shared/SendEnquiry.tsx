// react
import React, { useCallback } from 'react';

import { Modal } from 'reactstrap';

import classNames from 'classnames';
// application

import { Cross12Svg } from '~/svg';
import { shopApi } from '~/api';
import { useEnquiry, useEnquiryClose } from '~/store/enquiry/enquiryHooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAsyncAction, useIsUnmountedRef } from '~/store/hooks';
import { validateEmail } from '~/services/validators';
interface IForm {
    brand: string;
    fullname: string;
    phonenumber: string;
    year: string;
    chassis: string;
    email: string;
    address: string;
    enquirycontent: string;
    pagename: string;
}

function SendEnquiry() {
    const intl = useIntl();
    const enquiry = useEnquiry();
    const enquiryClose = useEnquiryClose();

    const toggle = useCallback(() => {
        if ((enquiry || { open: false }).open) {
            enquiryClose();
        }
    }, [(enquiry || { open: false }).open, enquiryClose]);
    const formMethods = useForm<IForm>();
    const {
        handleSubmit,
        register,
        errors,
        reset,
    } = formMethods;
    const [submit, submitInProgress] = useAsyncAction(async (data: IForm) => {

        await shopApi.sendEnquiry({ ...data });
        reset();
        toast.success(intl.formatMessage({ id: 'TEXT_TOAST_ENQUIRY_ADDED' }));
    }, [reset]);

    return (
        <Modal isOpen={(enquiry || { open: false }).open} toggle={toggle} centered className="enquiry">
            <button type="button" className="enquiry__close" onClick={enquiryClose}>
                <Cross12Svg />
            </button>

            <form className="enquiry-view__form" onSubmit={handleSubmit(submit)}>
                <h3 className="enquiry-view__header">
                    <FormattedMessage id="HEADER_WRITE_ENQUIRY" />
                </h3>
                <div className="row enquiry-view__body">
                    <div
                        className="col-xxl-8 col-xl-10 col-lg-9 col-12"
                    >
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="review-stars">
                                    <FormattedMessage id="INPUT_ENTERNAME_LABEL" />
                                </label>
                                <input
                                    type="text"
                                    id="review-fullname"
                                    name="fullname"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.fullname,
                                    })}
                                    placeholder={intl.formatMessage({ id: 'INPUT_YOUR_NAME_PLACEHOLDER' })}
                                    ref={register({ required: true })}
                                />
                                <div className="invalid-feedback">
                                    {errors.fullname?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                </div>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="review-phonenumber">
                                    <FormattedMessage id="INPUT_WHATSAPPNUMBER_LABEL" />
                                </label>
                                <input
                                    type="text"
                                    id="review-phonenumber"
                                    name="phonenumber"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.phonenumber,
                                    })}
                                    placeholder={intl.formatMessage({ id: 'INPUT_YOUR_WHATSAPP_PLACEHOLDER' })}
                                    ref={register({ required: true })}
                                />
                                <div className="invalid-feedback">
                                    {errors.phonenumber?.type === 'required' && (
                                        <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                    )}
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-chassis">
                                    <FormattedMessage id="INPUT_CHASSISNUMBER_LABEL" />
                                </label>
                                <input
                                    type="text"
                                    id="review-chassis"
                                    name="chassis"
                                    className={classNames('form-control', {
                                        'is-invalid': errors.chassis,
                                    })}
                                    placeholder={intl.formatMessage({ id: 'INPUT_CHASSISNUMBER_LABEL' })}
                                    ref={register({ required: false })}
                                />
                                <div className="invalid-feedback">
                                    {errors.chassis?.type === 'required' && (
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
                            <label htmlFor="review-enquirycontent">
                                <FormattedMessage id="INPUT_MESSAGE_LABEL" />
                            </label>
                            <textarea
                                id="review-enquirycontent"
                                rows={6}
                                name="enquirycontent"
                                className={classNames('form-control', {
                                    'is-invalid': errors.enquirycontent,
                                })}
                                placeholder={intl.formatMessage({ id: 'INPUT_YOUR_REVIEW_PLACEHOLDER' })}
                                ref={register({ required: true })}
                            />
                            <div className="invalid-feedback">
                                {errors.enquirycontent?.type === 'required' && (
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
                                <FormattedMessage id="BUTTON_POST_ENQUIRY" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </Modal>
    );
}

export default SendEnquiry;
