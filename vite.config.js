'use strict';

import { defineConfig } from 'vite';
import path from 'path';


/**
 * The development configuration
 */
function _development_config() {
    return {
        publicDir: './static',
        base: '',

        plugins: [
        ],
        build: {
            outDir: 'dist',
        },

        server: {
            port: 4444,
        },
    };
}

/**
 * The production configuration
 */
function _production_config() {


    return {
        publicDir: './static',


        base: '',

        worker: {
            plugins: [

            ],
            format: 'iife',
            rollupOptions: {
                output: {

                },
            },
        },

        build: {
            outDir: 'dist',

            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[hash].js',
                    chunkFileNames: 'assets/[hash].js',
                    assetFileNames: 'assets/[hash][extname]',
                },
            },
        },

        server: {
            port: 4444,
        },
    }
}

/**
 * vite configuration files
 */

export default defineConfig(({ command, mode }) => {
    if (command === 'serve') {
        //
        // development
        //
        return _development_config();
    }

    //
    // command === 'build', production
    //
    return _production_config();
});
