const allTypes = ['team', 'thanks', 'site'];

const generateTxt = (options) => {
    return new Promise((resolve, reject) => {
        try {
            if (typeof options === 'object' && !(options instanceof Array)) {
                let output = '';

                for (let currentType of allTypes) {
                    let cIndex = 0;

                    if (typeof options[currentType] !== 'undefined' && Object.keys(options[currentType]).length > 0) {
                        const cBlock = options[currentType];

                        if (cBlock instanceof Array && Object.keys(cBlock).length > 0) {
                            if (Object.keys(cBlock[cIndex]).length > 0) {
                                output += `/* ${currentType.toUpperCase()} */\n`;

                                for (let [bKey, bValue] of Object.entries(cBlock)) {
                                    if (Object.keys(bValue).length > 0) {
                                        if (bValue instanceof Array) {
                                            for (let [sKey, sValue] of Object.entries(bValue)) {
                                                const { key, value } = sValue;
                                                output += `${key}: ${value instanceof Array ? value.join(', ') : value}\n`;
                                            }

                                            if (bKey < Object.keys(cBlock).length - 1) {
                                                output += '\n';
                                            }
                                        } else {
                                            const { key, value } = bValue;
                                            output += `${key}: ${
                                                value instanceof Array
                                                    ? value.join(', ')
                                                    : value === '__date__'
                                                    ? new Date().toISOString().slice(0, 10).replace(/[-]/g, '/')
                                                    : value
                                            }\n`;
                                        }
                                    }
                                }

                                if (currentType !== allTypes[allTypes.length - 1]) {
                                    output += '\n';
                                }

                                cIndex++;
                            }
                        }
                    }
                }

                resolve(output);
            }
        } catch (error) {
            reject(error);
        }
    });
};

export default generateTxt;
