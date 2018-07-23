
var Component = require("montage/ui/component").Component;

var TRAILER_URL = "https://www.youtube.com/embed/%s?autoplay=1&enablejsapi=1",
    PLACE_HOLDER = "%s";

exports.Player = Component.specialize({

    constructor: {
        value: function Player() {
            this.super();
        }
    },


    player: {
        value: null
    },

    handleCloseButtonAction: {
        value: function () {
            this.player.src = "";
            this.templateObjects.overlay.hide();
        }
    },

    _trailerId: {
        value: null
    },

    openTrailer: {
        value: function (id) {
            this._trailerId = id;
            this.templateObjects.overlay.show();
        }
    },

    didShowOverlay: {
        value: function (overlay) {
            if (this._trailerId) {
                var trailerUrl = TRAILER_URL.replace(PLACE_HOLDER, encodeURIComponent(this._trailerId));
                if (this.player.src !== trailerUrl) {
                    this.player.src = trailerUrl;
                }
            }
            overlay.classList.add('is-shown');
        }
    },

    didHideOverlay: {
        value: function (overlay) {
            this._trailerId = null;
            overlay.classList.remove('is-shown');
        }

    }
});
