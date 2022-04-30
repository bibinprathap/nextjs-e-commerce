// react
import React, { useCallback } from 'react';
// application
import classNames from 'classnames';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockMap from '~/components/blocks/BlockMap';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
// data
import theme from '~/data/theme';
import { shopApi } from '~/api';
import { useEnquiry, useEnquiryClose } from '~/store/enquiry/enquiryHooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useAsyncAction, useIsUnmountedRef } from '~/store/hooks';
import { validateEmail } from '~/services/validators';
import { NextSeo } from 'next-seo';
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
function Page() {
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
        <React.Fragment>

            <NextSeo
                title=" No 1 car accessories dubai,sharjah,abu dhabi,uae,Ras Al Khaimah and all over the world"
                description="Royal auto parts is one of the online market for  import, export and distributor of original and after-market auto accessories dubai,Sharjah,abu dhabi,and all over the world"
            />
            <BlockMap />

            <BlockHeader
                pageTitle="Contact Us"
                breadcrumb={[
                    { title: 'Home', url: '' },
                    { title: 'Breadcrumb', url: '' },
                    { title: 'Current Page', url: '' },
                ]}
                afterHeader={false}
            />

            <div className="block">
                <div className="container container--max--lg">
                    <div className="card">
                        <div className="card-body card-body--padding--2">
                            <div className="row">
                                <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <div className="mr-1">
                                        <h4 className="contact-us__header card-title">Our Address</h4>

                                        <div className="contact-us__address">
                                            {theme.contacts.address.map((item, index) => (<p>
                                                {item}

                                            </p>
                                            ))}

                                            <p>

                                                {`Email: ${theme.contacts.email[0]}`}

                                            </p>
                                            <p>
                                                <strong>Opening Hours</strong>
                                                <br />
                                                   Saturday To Thursday
                                                    9 AM TO 9 PM
                                           </p>
                                            <p>

                                                <strong>Comment</strong>
                                                <br />
                                                    Royal Auto Spare parts Market  is one of the leading online automotive parts dealer. We specialize in Mercedes, BMW, Audi, Volkswagen, Range Rover and Porsche
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="ml-1">
                                        <h4 className="contact-us__header card-title">Leave us a Message</h4>

                                        <form onSubmit={handleSubmit(submit)}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Your Name</label>

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
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
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
                                                <label htmlFor="form-subject">Phone Number</label>
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
                                            <div className="form-group">
                                                <label htmlFor="form-message">Message</label>
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
                                            <button
                                                type="submit"
                                                className={classNames('btn', 'btn-primary', {
                                                    'btn-loading': submitInProgress,
                                                })}
                                            >
                                                <FormattedMessage id="BUTTON_POST_ENQUIRY" />
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
