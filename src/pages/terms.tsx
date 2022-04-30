// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import Terms from '~/components/shared/Terms';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                Terms And Conditions
            </PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">Terms And Conditions</h1>
                            <div className="document__subtitle">This Agreement was last modified on 27 May 2018.</div>
                        </div>
                        <div className="document__content card">
                            <div className="typography">
                                <Terms />

                                <div className="document__signature">
                                    <AppImage src="/images/signature.jpg" width="160" height="55" />
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
