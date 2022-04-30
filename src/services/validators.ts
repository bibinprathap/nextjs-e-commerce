/* eslint-disable import/prefer-default-export */

export function validateEmail(value: string): boolean {
    return /^[^@]+@[^@]+$/.test(value);
}
