// application
import { ENQUIRY_NAMESPACE } from '~/store/enquiry/enquiryReducer';
import { enquiryClose, enquiryOpen } from '~/store/enquiry/enquiryActions';
import { useAppAction, useAppSelector } from '~/store/hooks';

export const useEnquiry = () => useAppSelector((state) => state[ENQUIRY_NAMESPACE]);

export const useEnquiryOpen = () => useAppAction(enquiryOpen);

export const useEnquiryClose = () => useAppAction(enquiryClose);
