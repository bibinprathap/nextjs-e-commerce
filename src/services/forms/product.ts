/* eslint-disable no-alert */

// react
import { useEffect, useMemo, useRef } from 'react';
// third-party
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
// application
import { ICartItemOption } from '~/store/cart/cartTypes';
import { IProduct } from '~/interfaces/product';
import { useAsyncAction } from '~/store/hooks';
import { useCartAddItem } from '~/store/cart/cartHooks';

export interface IProductForm {
    options: Record<string, any>;
    quantity: number | string;
}

export function useProductForm(product: IProduct | null) {
    const intl = useIntl();
    const cartAddItem = useCartAddItem();
    const methods = useForm<IProductForm>({
        defaultValues: {
            quantity: 1,
            options: { material: "aluminium", color: "yellow" }
        },
    });
    const { handleSubmit } = methods;
    const { submitCount } = methods.formState;
    const prevSubmitCount = useRef(0);

    useEffect(() => {
        if (prevSubmitCount.current !== submitCount && Object.keys(methods.errors).length > 0) {
            if (methods.errors.quantity) {
                alert(intl.formatMessage({ id: 'ERROR_ADD_TO_CART_QUANTITY' }));
            } else if (methods.errors.options) {
                alert(intl.formatMessage({ id: 'ERROR_ADD_TO_CART_OPTIONS' }));
            }
        }

        prevSubmitCount.current = submitCount;
    }, [intl, submitCount, methods.errors]);

    const [submit, submitInProgress] = useAsyncAction(async (data: IProductForm) => {
        debugger;
        if (!product) {
            return null;
        }

        const options: ICartItemOption[] = [];

        Object.keys(data.options).forEach((optionSlug) => {
            const option = product.options.find((x) => x.slug === optionSlug);

            if (!option) {
                return;
            }

            const value = option.values.find((x) => x.slug === data.options[optionSlug]);

            if (!value) {
                return;
            }

            options.push({ name: option.name, value: value.name });
        });

        return cartAddItem(product, options, typeof data.quantity === 'number' ? data.quantity : 1);
    }, [product, cartAddItem]);

    return {
        submit: useMemo(() => handleSubmit(submit), [handleSubmit, submit]),
        submitInProgress: submitInProgress || methods.formState.isSubmitting,
        errors: methods.errors,
        register: methods.register,
        watch: methods.watch,
        methods,
    };
}
