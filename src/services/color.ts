/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */

type RGB = [number, number, number];

type ColorType = 'white' | 'black' | 'light' | 'dark';

interface Cache {
    [color: string]: ColorType;
}

export function hexToRgb(hex: string): RGB {
    if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
        throw Error('Invalid color');
    }

    const color = hex.substr(1);
    let rgb: string[];

    if (color.length === 3) {
        const mr = color.match(/./g);

        if (!mr) {
            throw Error('Invalid color');
        }

        rgb = mr.map((x) => x + x);
    } else {
        const mr = color.match(/.{2}/g);

        if (!mr) {
            throw Error('Invalid color');
        }

        rgb = mr;
    }

    return rgb.map((x) => parseInt(x, 16)) as RGB;
}

export function luminance(color: string) {
    let rgb = hexToRgb(color);

    rgb = rgb.map((x) => x / 255).map((x) => {
        if (x <= 0.03928) {
            return x / 12.92;
        }

        return ((x + 0.055) / 1.055) ** 2.4;
    }) as RGB;

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

export function contrast(color1: string, color2: string) {
    const l1 = luminance(color1);
    const l2 = luminance(color2);

    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const cache: Cache = {};

export function colorType(color: string): ColorType {
    if (color in cache) {
        return cache[color];
    }

    const whiteContras = contrast(color, '#fff');
    const blackContras = contrast(color, '#000');
    let result: ColorType;

    if (whiteContras === 1 && blackContras === 21) {
        result = 'white';
    } else if (whiteContras === 21 && blackContras === 1) {
        result = 'black';
    } else if (whiteContras >= 3 && blackContras < 10) {
        result = 'dark';
    } else {
        result = 'light';
    }

    cache[color] = result;

    return result;
}
