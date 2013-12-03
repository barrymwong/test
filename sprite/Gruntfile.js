module.exports = function(grunt) {
	grunt.initConfig({
		sprite:{
	      spritesheet: {
		        src: 'sprite_src/*.png',
		        destImg: 'public/images/sprite.png',
		        destCSS: 'less/sprites.less',
		        imgPath: '../images/sprite.png',
		        padding: 1,
		        cssFormat: 'less'
	      },
	      spritesheet2x: {
				src: 'sprite_src/@2x/*.png',
				destImg: 'public/images/sprite@2x.png',
				destCSS: 'less/sprites@2x.less',
				imgPath: '../images/sprite@2x.png',
				padding: 2,
				cssFormat: 'less'
	      }
	    },
		less: {
			dev: {
				files: {
					'public/css/style.css': 'less/style.less'
				}
			}
		},
		watch: {
			css: {
				files: ['less/*.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('dev', [
		'less', 'watch'
	]);
};