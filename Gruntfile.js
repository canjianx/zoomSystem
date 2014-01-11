/*jslint nomen: true, debug: true, evil: true, vars: true, browser:true, devel:true, indent:4 */
module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            // 编译
            compile: {
                files: {
                    'public/stylesheets/main.css': 'dev/css/main.less'
                }
            },
            // 压缩
            yuicompress: {
                files: {
                    'public/stylesheets/main-min.css': 'public/stylesheets/main.css'
                },
                options: {
                    yuicompress: true
                }
            }
        },
        qunit: {
            all: ['public/test/**/*.html']
        },
        watch: {
            scripts: {
                files: ['dev/css/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'qunit', 'watch']);

};