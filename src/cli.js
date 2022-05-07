#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const generateTxt = require('./index');

if (typeof process.argv !== 'undefined') {
    const args = process.argv;
    args.splice(0, 2);

    args.forEach((val, index) => {
        const key = val.substring(2);

        if (key === 'config') {
            const configPath = path.resolve(args[index + 1]);

            fs.readFile(configPath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const { path: outputPath, options } = JSON.parse(data);

                generateTxt(options)
                    .then((content) => {
                        fs.writeFile(outputPath, content, (err) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        return;
                    });
            });
        }
    });
}
