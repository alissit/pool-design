import $ from "jquery";



class MobileMenu {
		constructor() {
			this.siteHeader = $(".navbar");
			this.menuIcon = $(".navbar__menu-icon");
			this.menuContent = $(".navbar__menu-content");

			this.dropMenuIcon = $(".drop__dropbtn");
			this.dropMenuContent = $(".drop__dropdown-content");

			this.dropMenuIconNews = $(".drop__dropbtn-news");
			this.dropMenuContentNews = $(".drop__dropdown-content-news");

			this.events();
			this.drop();
			this.dropNews();
		}

		events(){
			this.menuIcon.click(this.toggleTheMenu.bind(this));
		}

		drop(){
			this.dropMenuIcon.click(this.toggleTheDropMenu.bind(this));
		}

		dropNews(){
			this.dropMenuIconNews.click(this.toggleTheDropMenuNews.bind(this));
		}

		toggleTheMenu(){
			this.menuContent.toggleClass("navbar__menu-content--is-visible");
			this.siteHeader.toggleClass("navbar--is-expanded");
			this.menuIcon.toggleClass("navbar__menu-icon--close-x");
			
		}

		toggleTheDropMenu(){
			this.dropMenuContent.toggleClass("drop__dropdown-content--is-visible");
		}

		toggleTheDropMenuNews(){
			this.dropMenuContentNews.toggleClass("drop__dropdown-content-news--is-visible");
		}

}

export default MobileMenu;