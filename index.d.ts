declare function gen(num?: number, options?: genOptions): string;

interface genOptions {
    chars?: string;
    pattern?: string;
}

export = gen;