import ESBuildLibrary from 'esbuild-library';

await ESBuildLibrary.clean();

await ESBuildLibrary.build({ entryPoints: [ './src/esm' ] });

await ESBuildLibrary.build({ entryPoints: [ './src/ext' ], outDir: 'dist/proto' });