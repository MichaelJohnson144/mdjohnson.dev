const path = require('path');

const fileTransformerConfig = {
  process(sourceText, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};

module.exports = fileTransformerConfig;
