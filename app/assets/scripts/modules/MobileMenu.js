import $ from "jquery";



class MobileMenu {
		constructor() {
			this.siteHeader = $(".navbar");
			this.menuIcon = $(".navbar__menu-icon");
			this.menuContent = $(".navbar__menu-content");
			this.dropMenuIcon = $(".drop__dropbtn")
			this.dropMenuContent = $(".drop__dropdown-content");
			this.events();
			this.drop();
		}

		events(){
			this.menuIcon.click(this.toggleTheMenu.bind(this));
			
		}

		drop(){
			this.dropMenuIcon.click(this.toggleTheDropMenu.bind(this));
		}

		toggleTheMenu(){
			this.menuContent.toggleClass("navbar__menu-content--is-visible");
			this.siteHeader.toggleClass("navbar--is-expanded");
			this.menuIcon.toggleClass("navbar__menu-icon--close-x");
			
		}

		toggleTheDropMenu(){
			this.dropMenuContent.toggleClass("drop__dropdown-content--is-visible");
		}

}

export default MobileMenu;