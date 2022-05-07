# generate-humanstxt

[![NPM version](https://img.shields.io/npm/v/@m00nbyte/generate-humanstxt.svg)](https://www.npmjs.org/package/@m00nbyte/generate-humanstxt)

Generating `humans.txt` using nodejs

## Getting Started

```shell
npm install --save-dev @m00nbyte/generate-humanstxt
```

## Usage

```js
import generateTxt from '@m00nbyte/generate-humanstxt';

const options = {
    team: [
        [
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' }
        ]
    ],
    thanks: [
        [
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' },
            { key: '<Title>', value: '<Value>' }
        ]
    ],
    site: [
        { key: '<Title>', value: '<Value>' },
        { key: '<Title>', value: '__date__' },
        { key: '<Title>', value: ['<Value>', '<Value>', '<Value>'] }
    ]
};

generateTxt(options)
    .then((content) => {
        console.log(content);

        return content;
    })
    .catch((error) => {
        throw error;
    });
```

If you pass `__DATE__` as value, it will return the current date

For more informations about `humans.txt` check out the [official website](https://humanstxt.org/Standard.html)

## CLI

```shell
node generate-humanstxt --config /path/to/config.json
```

-   `path` - optional path for humans.txt (this should contain the full path including the file name, example: `/path/to/humans.txt`).
-   `options` - see options above.

## Contribution

Feel free to submit issues or pull requests.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
