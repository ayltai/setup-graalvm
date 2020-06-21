import { getInput, setFailed, } from '@actions/core';
import { join, } from 'path';

import { getGraalVM, getNativeImage, } from './installer';

const run = async () => {
    try {
        await getGraalVM(getInput('java-version', {
            required : true,
        }), getInput('graalvm-version', {
            required : true,
        }));

        if (getInput('native-image')) await getNativeImage();

        console.log(`##[add-matcher]${join(join(__dirname, '..', '.github'), 'graalvm.json')}`);
    } catch (error) {
        setFailed(error);
    }
};

run();
