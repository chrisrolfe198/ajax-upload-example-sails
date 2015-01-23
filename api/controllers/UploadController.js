/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	form: function(req, res) {
		return res.view('form');
	},
	ajax_upload: function(req, res) {
		req.file('image').upload({
			dirname: 'widget-bg/',
			saveAs: 'test.jpg'
		}, function(err, uploaded) {
			console.log(err);
			console.log(uploaded);

			return res.json({
				complete: true
			});
		});
	}
};

