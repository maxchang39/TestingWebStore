define(['vue', 'common', 'webclient', "jquery"], function(Vue, common, webclient, $) {
	common.test();

	var v = new Vue({
		el: "#main",
		data: {
			product_name: "",
			product_description: "",
			menu: 1,
			products: [{name: "test", description: "test item", images:[]}],
			images: [],
			isShow: true
		},
			
		methods: {
			// trigger file open when upload button is pressed
			uploadImage(e) {
				$('input[type=file]').trigger('click');
				return false;
			},

			onFileChange(e) {
				var files = e.target.files || e.dataTransfer.files;

				if(files.length > 0) {
					return this.addImage(files);
				}
			},

			addImage(file) {
				var reader = null;
				var leng = file.length;
				for(var i = 0; i < leng; i++) {
					reader = new window.FileReader()
					reader.readAsDataURL(file[i])
					reader.onload = function(e) {
						v.images.push(e.target.result);
					}
				}
			},

			submit: function(e) {
				var product = {
					name: v.product_name,
					description: v.product_description,
					images: v.images
				};
				
				v.products.push(product);
			},

			openMenu: function(n) {
				v.menu = n;
				console.log(v.menu);

				if(v.menu == 1) {
					v.isShow = true;
				} else {
					v.isShow = false;
				}
			}
		}
	});
});