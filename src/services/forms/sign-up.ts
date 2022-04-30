// react
import { useMemo, useState } from 'react';
// third-party
import { useForm } from 'react-hook-form';
// application
import { useAsyncAction } from '~/store/hooks';
import { useUserSignUp } from '~/store/user/userHooks';

interface ISignUpFormOptions {
    onSuccess?: () => void;
}

export interface ISignUpForm {
    email: string;
    password: string;
    confirmPassword: string;
}

export function useSignUpForm(options: ISignUpFormOptions = {}) {
    const signUp = useUserSignUp();
    const { onSuccess } = options;
    const [serverError, setServerError] = useState<string | null>(null);
    const methods = useForm<ISignUpForm>({
        defaultValues: {
            email: 'user@example.com',
            password: '123456',
            confirmPassword: '123456',
        },
    });
    const { handleSubmit } = methods;
    const [submit, submitInProgress] = useAsyncAction((data: ISignUpForm) => {
        setServerError(null);

        return signUp(data.email, data.password).then(
            () => {
                if (onSuccess) {
                    onSuccess();
                }
            },
            (error: Error) => {
                setServerError(`ERROR_API_${error.message}`);
            },
        );
    }, [signUp, setServerError, onSuccess]);

    return {
        submit: useMemo(() => handleSubmit(submit), [handleSubmit, submit]),
        submitInProgress: submitInProgress || methods.formState.isSubmitting,
        serverError,
        errors: methods.errors,
        register: methods.register,
        watch: methods.watch,
    };
}
