module.exports = function(grunt) {
	grunt.initConfig({
		"sass": {
			dist: {
				options: {
					style: "expanded"
				},
				files: [{
					"css/styles/style1.css": "css/sass/style1.scss",
					"css/styles/style2.css": "css/sass/style2.scss"
				}]
			}
		},
		"concat": {
			"js": {
				"src": "js/scripts/*.js",
				"dest": "js/app.js"
			},
			"css": {
				"src": "css/styles/*.css",
				"dest": "css/app.css"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["sass", "concat"]);
};