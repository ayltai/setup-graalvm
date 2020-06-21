import { rmRF, } from '@actions/io';
import { existsSync, } from 'fs';
import { join, } from 'path';
import { arch, } from 'os';

import { getGraalVM, } from './installer';

const CACHE_DIR = join(__dirname, '..', 'cache');
const TEMP_DIR  = join(__dirname, '..', 'temp');

process.env['RUNNER_TOOL_CACHE'] = CACHE_DIR;
process.env['RUNNER_TEMP']       = TEMP_DIR;

const safeDelete = async (dir) => {
    try {
        await rmRF(dir);
    } catch {
        console.error(`Failed to delete directory ${dir}`);
    }
};

describe('installer', () => {
    afterAll(async () => {
        await safeDelete(CACHE_DIR);
        await safeDelete(TEMP_DIR);
    });

    it('Installs GraalVM', async () => {
        const javaVersion    = 11;
        const graalvmVersion = '20.1.0';
        const options        = {
            tempDir  : TEMP_DIR,
            jvmDir   : join(TEMP_DIR, 'Library', 'Java', 'JavaVirtualMachines'),
            javaHome : 'TEST_JAVA_HOME',
        };

        const toolPath = await getGraalVM(javaVersion, graalvmVersion, options);

        if (process.platform === 'darwin') {
            expect(process.env[options.javaHome]).toBe(join(toolPath, '/Contents/Home'));
        } else {
            expect(existsSync(join(TEMP_DIR, `graalvm-ce-java${javaVersion}-${graalvmVersion}`))).toBeTruthy();
            expect(process.env[options.javaHome]).toBe(toolPath);
        }

        expect(toolPath).toBe(join(CACHE_DIR, 'GraalVM', `java${javaVersion}-darwin-amd64-${graalvmVersion}`, arch()));
    });
});
