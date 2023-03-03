
module.exports = {
    preset: 'ts-jest',
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    roots: ['<rootDir>/test/'],
    testTimeout: 1000 * 10,
    
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/testReporter/',
                filename: 'reporter.html',
                // expand: false,
            },
        ],
    ],
};
