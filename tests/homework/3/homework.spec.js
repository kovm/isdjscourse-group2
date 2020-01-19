const fs = require('fs');
const path = require('path');
const homeworkRelativePath = 'homework';
const homeworkAbsPath = path.join(process.cwd(), homeworkRelativePath);
const apiEndpoint = 'createSeaBattle';

test('Home works 3 test suite', done => {
   fs.readdir(homeworkAbsPath, (err, studentAbbrevs) => {
      if (err) {
         throw err;
      }
      const studentModules = studentAbbrevs
         .map(studentAbbrev => {
            const studentModulePath = path.join(homeworkAbsPath, studentAbbrev);
            try {
               return require(studentModulePath);
            }
            catch (err) {
               return null;
            }
         })
         .filter(studentModule => Boolean(studentModule) && studentModule.hasOwnProperty(apiEndpoint));
      console.log(`Total: ${studentModules.length}`);
      console.log(studentModules[0][apiEndpoint]()()());
      const fn = studentModules[0][apiEndpoint];
      expect(typeof fn).toBe('function');
      expect(typeof fn()).toBe('function');
      expect(typeof fn()()).toBe('function');
      done();
   });
});
