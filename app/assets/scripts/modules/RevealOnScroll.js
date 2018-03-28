import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class RevealOnScroll {

	// create 2 parameters to recieve the two incoming arguments from
	// app.js
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		// setting a variable will set THAT as the THIS keyword and bring the info
		// into this function for offsetPercentage to be used.
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass("reveal-item--is-visible")
				},
				offset: that.offsetPercentage
			});
		});
	}

}


export default RevealOnScroll;