module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //清除项目
        clean: {
            all: ['dist/**', 'dist/*.*','copy/**'],
            image: 'dist/img',
            css: 'dist/css',
            html: 'dist/**/*'
        },
        //复制文件
        copy: {
            togit: {
                flatten: true,
                src: '../huqiwen/**',
                dest: '../Cat/huqiwen/'
            },
            tosvn : {
                flatten: true,
                src: '../huqiwen/**',
                dest: '../../svn/6.0/root/H5/huqiwen/'
            },
            copycss:{
                flatten: true,
                src:'dist/css/**.css',
                dest:'src/css/**.css'
            },
            copyjs:{
                flatten: true,
                src:'dist/js/<%= pkg.name %>.js',
                dest:'src/js/<%= pkg.name %>.js'
            },
            copyallcss:{
                flatten: true,
                src:'dist/css/*.css',
                dest:'src/css_copy/'
            },
            copyalljs:{
                flatten: true,
                src:'dist/js/*.js',
                dest:'src/js_copy/'
            }
        },
        //合并文件
        concat: {
            options: {
                separator: '\n '//分割
            },
            //合并css
            two: {
                src: ['src/css/style.css','src/css/style 2.css','src/css/style 3.css'],
                dest: 'dist/css/style.css',
            },
            //合并js
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        //合并js
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //添加banner
            },
            buildall: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    },
                    report: "min" //输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: [{
                    expand: true,
                    cwd: 'src', //js目录下
                    src: 'js/*.js', //所有js文件
                    dest: 'dist' //输出到此目录下
                }]
            },
            buildminjs: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    },
                    report: "min" //输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: {
                    'dist/js/<%= pkg.name %>.min.js': 'dist/js/<%= pkg.name %>.js'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! css  <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //添加banner
            },
            prod: {
                options: {
                    report: 'gzip'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['css/*.css'],
                        dest: 'dist'
                    }
                ]
            },
            buildmincss: {
                options: {
                    report: 'gzip'
                },
                files: [
                    {
                        'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
                    }
                ]
            }
        },
        qunit: {
            files: ['test/*.html']
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },
        jshint: {
            files: ['src/**/*.js', 'test/**/*.js'],
            options: {
                //覆盖默认配置
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        //压缩图片
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 7 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                    dest: 'dist' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        },
        //监听
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['minall'],
                options: {
                    spawn: true,
                    interrupt: true
                }
            },
            css: {
                files: ['src/**/*.css'],
                tasks: ['mincss'],
                options: {
                    spawn: true,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('minall', ['uglify:buildall']);
    grunt.registerTask('mincss', ['cssmin:prod']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('git', ['copy:togit']);
    grunt.registerTask('svn', ['copy:tosvn']);
    grunt.registerTask('cssjs', ['copy:copycss',  'copy:copyjs']);
    grunt.registerTask('allcssjs', ['copy:copyallcss',  'copy:copyalljs']);
    grunt.registerTask('unittest', ['connect', 'qunit']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('full', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('heti',['concat','uglify:buildminjs','cssmin:buildmincss','imagemin']);
    grunt.registerTask('default', ['uglify:buildall',  'cssmin:prod']);
};