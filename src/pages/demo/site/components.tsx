// react
import React, { useState } from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import InputNumber from '~/components/shared/InputNumber';
import PageTitle from '~/components/shared/PageTitle';
import StatusBadge from '~/components/shared/StatusBadge';
import { Cross12Svg, Quickview16Svg } from '~/svg';

function titleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(' ');
}

function Page() {
    const [numberValue, setNumberValue] = useState<number | string>(1);

    return (
        <React.Fragment>
            <PageTitle>Components</PageTitle>

            <BlockHeader
                pageTitle="Components"
                breadcrumb={[
                    { title: 'Home', url: '' },
                    { title: 'Breadcrumb', url: '' },
                    { title: 'Current Page', url: '' },
                ]}
            />

            <div className="block">
                <div className="container">
                    <div className="card mb-4">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Alerts</h2>

                            <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-primary alert-lg mb-3 alert-dismissible fade show">
                                        A simple large alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.

                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <Cross12Svg />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="alert alert-info mb-3">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                    <div className="alert alert-primary mb-3">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                    <div className="alert alert-secondary mb-3 mb-md-5">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="alert alert-success mb-3">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                    <div className="alert alert-danger mb-3">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                    <div className="alert alert-warning mb-5">
                                        A simple alert with
                                        {' '}
                                        <AppLink href="/">an example link</AppLink>
                                        . Give it a click if you like.
                                    </div>
                                </div>
                            </div>
                            <div className="alert alert-success" role="alert">
                                <h4 className="alert-heading">Well done!</h4>
                                <p>
                                    Aww yeah, you successfully read this important alert message. This example text is
                                    going to run a bit longer so that you can see how spacing within an alert works with
                                    this kind of content.
                                </p>
                                <hr />
                                <p className="mb-0">
                                    Whenever you need to, be sure to use margin utilities to keep
                                    things nice and tidy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Input Number</h2>

                            <div className="row">
                                <div className="col-3">
                                    <InputNumber
                                        value={numberValue}
                                        onChange={setNumberValue}
                                        className="mb-3"
                                        min={1}
                                        size="lg"
                                    />

                                    <InputNumber
                                        value={numberValue}
                                        onChange={setNumberValue}
                                        className="mb-3"
                                        min={1}
                                    />

                                    <InputNumber
                                        value={numberValue}
                                        onChange={setNumberValue}
                                        min={1}
                                        size="sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Buttons</h2>
                            <div className="row">
                                {['primary', 'secondary', 'light', 'muted'].map((style, index) => (
                                    <React.Fragment key={index}>
                                        <div className="col-lg-4">
                                            <p><strong>{`${titleCase(style)} Buttons`}</strong></p>

                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-xl`}>Extra Large</button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-xl btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-lg`}>Button Large</button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-lg btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style}`}>Button Normal</button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-sm`}>Button Small</button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-sm btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-xs`}>Extra Small</button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-xs btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>

                                            <p><strong>Loading State</strong></p>

                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-loading btn-xl`}>
                                                    Extra Large
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-loading btn-xl btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-loading btn-lg`}>
                                                    Button Large
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-loading btn-lg btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-loading`}>
                                                    Button Normal
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-loading btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-loading btn-sm`}>
                                                    Button Small
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-loading btn-sm btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-loading btn-xs`}>
                                                    Extra Small
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-loading btn-xs btn-icon`}>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>

                                            <p><strong>Disabled State</strong></p>

                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-lg`} disabled>
                                                    Button Large
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-lg btn-icon`} disabled>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style}`} disabled>
                                                    Button Normal
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-icon`} disabled>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-sm`} disabled>
                                                    Button Small
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-sm btn-icon`} disabled>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className={`btn btn-${style} btn-xs`} disabled>
                                                    Extra Small
                                                </button>
                                                {' '}
                                                <button type="button" className={`btn btn-${style} btn-xs btn-icon`} disabled>
                                                    <Quickview16Svg />
                                                </button>
                                                {' '}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Fields</h2>

                            <div className="row">
                                <div className="col-lg-4">
                                    <p><strong>Text Field</strong></p>

                                    <div className="form-group">
                                        <label htmlFor="text-default">Default</label>
                                        <input
                                            id="text-default"
                                            type="text"
                                            className="form-control"
                                            placeholder="Placeholder"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-readonly">Readonly</label>
                                        <input
                                            id="text-readonly"
                                            type="text"
                                            className="form-control"
                                            placeholder="Placeholder"
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-disabled">Disabled</label>
                                        <input
                                            id="text-disabled"
                                            type="text"
                                            className="form-control"
                                            placeholder="Placeholder"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-success">Success</label>
                                        <input
                                            id="text-success"
                                            type="text"
                                            className="form-control is-valid"
                                            placeholder="Placeholder"
                                        />
                                        <div className="valid-feedback">Example invalid feedback text</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="text-error">Error</label>
                                        <input
                                            id="text-error"
                                            type="text"
                                            className="form-control is-invalid"
                                            placeholder="Placeholder"
                                        />
                                        <div className="invalid-feedback">Example invalid feedback text</div>
                                    </div>

                                    <p className="mt-5"><strong>Text Field Sizes</strong></p>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Large"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Normal"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Small"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <p><strong>Select</strong></p>

                                    <div className="form-group">
                                        <label htmlFor="select-default">Default</label>
                                        <select id="select-default" className="form-control">
                                            <option>Select</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select-disabled">Disabled</label>
                                        <select id="select-disabled" className="form-control" disabled>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select-success">Success</label>
                                        <select id="select-success" className="form-control is-valid">
                                            <option>Select</option>
                                        </select>
                                        <div className="valid-feedback">Example invalid feedback text</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="select-error">Error</label>
                                        <select id="select-error" className="form-control is-invalid">
                                            <option>Select</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid feedback text</div>
                                    </div>

                                    <p className="mt-5"><strong>Select Sizes</strong></p>

                                    <div className="form-group">
                                        <select className="form-control form-control-lg">
                                            <option>Large</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-control-sm">
                                            <option>Small</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <p><strong>Textarea</strong></p>

                                    <div className="form-group">
                                        <label htmlFor="area-default">Default</label>
                                        <textarea
                                            id="area-default"
                                            rows={3}
                                            className="form-control"
                                            placeholder="Placeholder"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area-readonly">Readonly</label>
                                        <textarea
                                            id="area-readonly"
                                            rows={3}
                                            className="form-control"
                                            placeholder="Placeholder"
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area-disabled">Disabled</label>
                                        <textarea
                                            id="area-disabled"
                                            rows={3}
                                            className="form-control"
                                            placeholder="Placeholder"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area-success">Success</label>
                                        <textarea
                                            id="area-success"
                                            rows={3}
                                            className="form-control is-valid"
                                            placeholder="Placeholder"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="area-error">Error</label>
                                        <textarea
                                            id="area-error"
                                            rows={3}
                                            className="form-control is-invalid"
                                            placeholder="Placeholder"
                                        />
                                    </div>

                                    <p className="mt-5"><strong>Textarea Sizes</strong></p>
                                    <div className="form-group">
                                        <textarea
                                            rows={3}
                                            className="form-control form-control-lg"
                                            placeholder="Large"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            rows={3}
                                            className="form-control"
                                            placeholder="Normal"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            rows={3}
                                            className="form-control form-control-sm"
                                            placeholder="Small"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Status Badge</h2>

                            <div>
                                <StatusBadge
                                    type="success"
                                    text="In Stock"
                                    tooltip="In Stock"
                                    icon="success"
                                />
                                {' '}
                                <StatusBadge
                                    type="failure"
                                    text="Out of Stock"
                                    tooltip="Out of Stock"
                                    icon="failure"
                                />
                                {' '}
                                <StatusBadge
                                    type="warning"
                                    text="On Order"
                                    tooltip="On Order"
                                    icon="success"
                                />
                                {' '}
                                <StatusBadge
                                    type="unknown"
                                    text="Unknown"
                                    tooltip="Unknown"
                                    icon="failure"
                                />
                                {' '}
                            </div>
                            <div className="mt-3">
                                <StatusBadge
                                    type="success"
                                    text="In Stock"
                                    tooltip="In Stock"
                                />
                                {' '}
                                <StatusBadge
                                    type="failure"
                                    text="Out of Stock"
                                    tooltip="Out of Stock"
                                />
                                {' '}
                                <StatusBadge
                                    type="warning"
                                    text="On Order"
                                    tooltip="On Order"
                                />
                                {' '}
                                <StatusBadge
                                    type="unknown"
                                    text="Unknown"
                                    tooltip="Unknown"
                                />
                                {' '}
                            </div>
                            <div className="mt-3">
                                <StatusBadge
                                    type="success"
                                    tooltip="In Stock"
                                    icon="success"
                                />
                                {' '}
                                <StatusBadge
                                    type="failure"
                                    tooltip="Out of Stock"
                                    icon="failure"
                                />
                                {' '}
                                <StatusBadge
                                    type="warning"
                                    tooltip="On Order"
                                    icon="success"
                                />
                                {' '}
                                <StatusBadge
                                    type="unknown"
                                    tooltip="Unknown"
                                    icon="failure"
                                />
                                {' '}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body card-body--padding--2">
                            <h2 className="card-title">Tag Badge</h2>

                            <div>
                                <div className="tag-badge tag-badge--theme">Theme</div>
                                <div className="tag-badge tag-badge--sale">Sale</div>
                                <div className="tag-badge tag-badge--new">New</div>
                                <div className="tag-badge tag-badge--hot">Hot</div>
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
