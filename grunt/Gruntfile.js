module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			compile: {
				files: {
					'js/scripts/script-concat.js': [
						'js/coffee/script1.coffee',
						'js/coffee/script2.coffee'
					],
					'js/scripts/script-single.js': 'js/coffee/script.coffee'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					'css/styles/style1.css': 'css/sass/style1.scss',
					'css/styles/style2.css': 'css/sass/style2.scss'
				}]
			}
		},

		concat: {
			js: {
				src: 'js/scripts/script.js',
				dest: 'js/app.js'
			},
			css: {
				src: 'css/styles/*.css',
				dest: 'css/app.css'
			}
		},

		watch: {
			options: {
				livereload: true
			},
			js: {
				files: ['js/scripts/*.js'],
				tasks: ['concat:js']
			},
			css: {
				files: ['css/**/*.scss'],
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