// react
import React from 'react';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
// data
import theme from '~/data/theme';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>Contact Us</PageTitle>

            <BlockHeader
                pageTitle="Contact Us"
                breadcrumb={[
                    { title: 'Home', url: '' },
                    { title: 'Breadcrumb', url: '' },
                    { title: 'Current Page', url: '' },
                ]}
            />

            <div className="block">
                <div className="container container--max--lg">
                    <div className="card contacts">
                        <div className="contacts__map">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                            />
                        </div>
                        <div className="card-body card-body--padding--2">
                            <div className="row">
                                <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <div className="mr-1">
                                        <h4 className="contact-us__header card-title">Our Address</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                                <br />
                                                {`Email: ${theme.contacts.email[0]}`}
                                                <br />
                                                Phone Number: +1 754 000-00-00
                                            </p>

                                            <p>
                                                <strong>Opening Hours</strong>
                                                <br />
                                                Monday to Friday: 8am-8pm
                                                <br />
                                                Saturday: 8am-6pm
                                                <br />
                                                Sunday: 10am-4pm
                                            </p>

                                            <p>
                                                <strong>Comment</strong>
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                                suscipit suscipit mi, non
                                                tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="ml-1">
                                        <h4 className="contact-us__header card-title">Leave us a Message</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Your Name</label>
                                                    <input
                                                        type="text"
                                                        id="form-name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Subject</label>
                                                <input
                                                    type="text"
                                                    id="form-subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Message</label>
                                                <textarea
                                                    id="form-message"
                                                    className="form-control"
                                                    rows={4}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Send Message</button>
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
