'use strict';

const MIN_BABEL_VERSION = 7;

module.exports = (api) => {
    api.assertVersion(MIN_BABEL_VERSION);
    api.cache(true);

    return {
        comments: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: '14.2.0'
                    }
                }
            ]
        ]
    };
};
