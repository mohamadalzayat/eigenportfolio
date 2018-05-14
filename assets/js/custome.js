new TiltSlider( document.getElementById( 'slideshow' ) );

(function() {

				function SVGMenu( el, options ) {
					this.el = el;
					this.init();
				}

				SVGMenu.prototype.init = function() {
					this.trigger = this.el.querySelector( 'button.menu__handle' );
					this.shapeEl = this.el.querySelector( 'div.morph-shape' );

					var s = Snap( this.shapeEl.querySelector( 'svg' ) );
					this.pathEl = s.select( 'path' );
					this.paths = {
						reset : this.pathEl.attr( 'd' ),
						open : this.shapeEl.getAttribute( 'data-morph-open' ),
						close : this.shapeEl.getAttribute( 'data-morph-close' )
					};

					this.isOpen = false;

					this.initEvents();
				};

				SVGMenu.prototype.initEvents = function() {
					this.trigger.addEventListener( 'mouseover', this.toggle.bind(this) );
				};

				SVGMenu.prototype.toggle = function() {
					var self = this;

					if( this.isOpen ) {
						classie.remove( self.el, 'menu--anim' );
						setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );
					}
					else {
						classie.add( self.el, 'menu--anim' );
						setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );
					}
					this.pathEl.stop().animate( { 'path' : this.isOpen ? this.paths.close : this.paths.open }, 350, mina.easeout, function() {
						self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
					} );
					
					this.isOpen = !this.isOpen;
				};

				new SVGMenu( document.getElementById( 'menu' ) );

			})();






(function() {

				function extend( a, b ) {
					for( var key in b ) {
						if( b.hasOwnProperty( key ) ) {
							a[key] = b[key];
						}
					}
					return a;
				}

				function SVGButton( el, options ) {
					this.el = el;
					this.options = extend( {}, this.options );
					extend( this.options, options );
					this.init();
				}

				SVGButton.prototype.options = {
					speed : { reset : 800, active : 150 },
					easing : { reset : mina.elastic, active : mina.easein }
				};

				SVGButton.prototype.init = function() {
					this.shapeEl = this.el.querySelector( 'span.morph-shape-button' );

					var s = Snap( this.shapeEl.querySelector( 'svg' ) );
					this.pathEl = s.select( 'path' );
					this.paths = {
						reset : this.pathEl.attr( 'd' ),
						active : this.shapeEl.getAttribute( 'data-morph-active' )
					};

					this.initEvents();
				};

				SVGButton.prototype.initEvents = function() {
					this.el.addEventListener( 'mousedown', this.down.bind(this) );
					this.el.addEventListener( 'touchstart', this.down.bind(this) );

					this.el.addEventListener( 'mouseup', this.up.bind(this) );
					this.el.addEventListener( 'touchend', this.up.bind(this) );

					this.el.addEventListener( 'mouseout', this.up.bind(this) );
				};

				SVGButton.prototype.down = function() {
					this.pathEl.stop().animate( { 'path' : this.paths.active }, this.options.speed.active, this.options.easing.active );
				};

				SVGButton.prototype.up = function() {
					this.pathEl.stop().animate( { 'path' : this.paths.reset }, this.options.speed.reset, this.options.easing.reset );
				};

				[].slice.call( document.querySelectorAll( 'button.button--effect-1' ) ).forEach( function( el ) {
					new SVGButton( el );
				} );

				[].slice.call( document.querySelectorAll( 'button.button--effect-2' ) ).forEach( function( el ) {
					new SVGButton( el, {
						speed : { reset : 650, active : 650 },
						easing : { reset : mina.elastic, active : mina.elastic }
					} );
				} );

			})();




