module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {                            // Target
		      options: {                       // Target options
		        style: 'compressed'
		      },
		      files: {                         // Dictionary of files
		        'public/css/main.css': 'public/src/sass/main.scss'
		      }
		    }
		},
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					cwd: 'public/src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'public/img/'
				}]
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				files: {
					'public/js/scripts.js': ['public/src/js/vendor/*.js', 'public/src/js/main.js'],
					'public/js/ie8.js': ['public/src/js/fallbacks-polyfills/*.js', 'public/js/ie8.js'],
				},
			},
		},
		uglify: {
			options: {
				preserveComments: 'none'
			},
			my_target: {
				files: {
					'public/js/modernizr-min.js': ['public/src/js/modernizr.2.7.2.js'],
					'public/js/scripts-min.js': ['public/js/scripts.js'],
					'public/js/ie8-min.js': ['public/js/ie8.js'],
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				force: true
			},
			css: {
				files: ['public/src/sass/**/*'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			markup: {
				files: ['**/*.jade'],
				tasks: [],
				options: {
					livereload: true,
				}
			},
			javascript: {
				files: ['public/src/js/**/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					livereload: true
				}
			},
			img: {
				files: ['public/src/img/*'],
				tasks: ['imagemin'],
				options: {
					livereload: true
				}
			}
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'imagemin', 'concat', 'uglify', 'watch']);

};