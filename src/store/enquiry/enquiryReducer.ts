// application
import { IEnquiryState } from '~/store/enquiry/enquiryTypes';
import { ENQUIRY_CLOSE, ENQUIRY_OPEN, EnquiryAction } from '~/store/enquiry/enquiryActionTypes';

const initialState: IEnquiryState = {
    open: false,
    product: null,
};

export const ENQUIRY_NAMESPACE = 'enquiry';

export default function enquiryReducer(state = initialState, action: EnquiryAction) {
    let newState = state;

    if (action.type === ENQUIRY_OPEN) {
        newState = {
            ...state,
            open: true,
            product: JSON.parse(JSON.stringify(action.product)),
        };
    } else if (action.type === ENQUIRY_CLOSE) {
        newState = {
            ...state,
            open: false,
        };
    }

    return newState;
}
