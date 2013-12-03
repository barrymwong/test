module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			compile: {
				files: {
					'public/js/scripts/script-concat.js': [
						'public/js/coffee/script1.coffee',
						'public/js/coffee/script2.coffee'
					],
					'public/js/scripts/script-single.js':
						'public/js/coffee/script.coffee'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					'public/css/styles/style1.css':
						'public/css/sass/style1.scss',
					'public/css/styles/style2.css':
						'public/css/sass/style2.scss'
				}]
			}
		},
		concat: {
			js: {
				src: 'public/js/scripts/*.js',
				dest: 'public/js/app.js'
			},
			css: {
				src: 'public/css/styles/*.css',
				dest: 'public/css/app.css'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			coffee: {
				files: 'public/js/coffee/*.coffee',
				tasks: 'coffee'
			},
			js: {
				files: 'public/js/scripts/*.js',
				tasks: 'concat:js'
			},
			css: {
				files: 'public/css/**/*.scss',
				tasks: ['sass', 'concat:css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('dev', [
		'coffee',
		'sass',
		'concat',
		'watch'
	]);
};