const path = require('path');

module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
    title: 'UI Components',
    sections: [
        {
            name: 'Components UI',
            components: './src/components/**/*.tsx',
        },

    ],
    showSidebar: true,
    skipComponentsWithoutExample: true,
    theme: {
        baseBackground: '#fdfdfc',
        link: '#274e75',
        linkHover: '#90a7bf',
        border: 'green',
        font: ['Gotham Narrow']
    },
    styles: {
        Playground: {
            root: {
                borderRadius: 0,
                borderWidth: [[0, 0, 1, 0]],
            },
            preview: {
                paddingLeft: 0,
                paddingRight: 0,
            },
            codeToggle: {
                marginTop: 1,
                border: 0,
            },
            hideCode: {
                background: 'none',
            },
        },
        Markdown: {
            pre: {
                border: 0,
                background: 'none',
            },
            code: {
                fontSize: 14,
            },
        },
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.tsx');
        return `import { ${name} } from '@react-components/ui';`;
    },
};
