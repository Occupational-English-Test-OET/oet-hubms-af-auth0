/** @type {import('lint-staged').Config} */
const config = {
    '**/*': 'pnpm format',
    '**/*.{js,ts}': 'pnpm lint',
};

export default config;
