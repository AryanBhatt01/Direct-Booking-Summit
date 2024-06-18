(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [26251], {
        196781: function(o, _, t) {
            "use strict";
            t.r(_);
            var s = t(653120),
                i = t(597121),
                l = t(983706),
                d = t(975172),
                v = t.n(d),
                c = t(203958),
                u = t.n(c);
            YUI.add("squarespace-native-video-loader", function(a) {
                a.namespace("Squarespace"), a.Squarespace.NativeVideoLoader = a.Base.create("NativeVideoLoader", a.Plugin.Base, [], {
                    initializer: function() {
                        var e = {
                            muted: !1,
                            autoPlay: !1,
                            loop: !1,
                            controls: i.Vo.Full
                        };
                        this._wrapperElement = this._getWrapperElement(), this._nativeVideoPlayerElement = this._getNativeVideoPlayerElement(), this._thumbnailConfig = this._getDataFromAttribute("config-thumbnail") || {}, this._videoConfig = this._getDataFromAttribute("config-video"), this._settingsConfig = this._getDataFromAttribute("config-settings") || e, this._videoPlayerOptions = this._getVideoPlayerOptions(), this._videoPlayerContext = this._getVideoPlayerContext(), this._playerWithTracker = this._createPlayerWithTracker()
                    },
                    destructor: function() {
                        this._playerWithTracker && (this._playerWithTracker.videoActivityTracker && this._playerWithTracker.videoActivityTracker.destroy(), this._playerWithTracker.videoPlayer.destroy()), this._wrapperElement = null
                    },
                    getVideoPlayer: function() {
                        return this._playerWithTracker.videoPlayer
                    },
                    _getVideoPlayerOptions: function() {
                        var e = {
                            language: window.Static.SQUARESPACE_CONTEXT.website.language,
                            thumbnailFocalPoint: this._thumbnailConfig.focalPoint,
                            performanceAnalytics: this._isPerformanceAnalyticsEnabled(),
                            storage: !this._settingsConfig.muted
                        };
                        return Object.assign(e, this._settingsConfig)
                    },
                    _createPlayerWithTracker: function() {
                        var e = this._getVideoActivityTracker();
                        return {
                            videoActivityTracker: e,
                            videoPlayer: new i.Y7(this._nativeVideoPlayerElement, this._getVideoPlayerConfiguration(e))
                        }
                    },
                    _getWrapperElement: function() {
                        return this.get("host").getDOMNode()
                    },
                    _getNativeVideoPlayerElement: function() {
                        var e = ".native-video-player";
                        return this._wrapperElement.querySelector(e)
                    },
                    _getDataFromAttribute: function(e) {
                        return JSON.parse(this._wrapperElement.getAttribute("data-" + e))
                    },
                    _getVideoPlayerContext: function() {
                        return {
                            squarespaceContext: window.Static.SQUARESPACE_CONTEXT,
                            videoAssetDetails: this._videoConfig,
                            assetDestination: "video-block",
                            contentCollectionId: this._getDataFromAttribute("config-collection-id") || null,
                            contentItemId: this._videoConfig.id
                        }
                    },
                    _getVideoActivityTracker: function() {
                        var e = !this.get("isVisitorWebsite") || this._settingsConfig.autoPlay;
                        if (e) return null;
                        var r = Object.assign(this._videoPlayerContext, {
                                videoPlayerOptions: this._videoPlayerOptions
                            }),
                            n = (0, l.oy)(r);
                        return new l.EP(this._nativeVideoPlayerElement, n)
                    },
                    _getVideoPlayerConfiguration: function(e) {
                        var r = this._videoConfig.alexandriaUrl,
                            n = this._thumbnailConfig.src;
                        return {
                            src: (0, i.Tj)(this._videoConfig),
                            thumbnailSrc: (0, i.ZJ)(r, n),
                            events: e ? e.makeEventHooks() : void 0,
                            environment: (0, i.zj)(),
                            context: this._videoPlayerContext,
                            options: this._videoPlayerOptions
                        }
                    },
                    _isPerformanceAnalyticsEnabled: function() {
                        var e = this._settingsConfig.autoPlay;
                        return e ? s.Z.isMuxDataVideoBlockAutoplayEnabled() : s.Z.isMuxDataVideoBlockEnabled()
                    }
                }, {
                    NS: "nativevideoloader",
                    ATTRS: {
                        isVisitorWebsite: {
                            value: !1
                        }
                    }
                })
            }, "1.0", {
                requires: ["base", "node", "plugin"]
            })
        },
        203958: function(o) {
            o.exports = {}
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/cfbcc1d392bf49d26273482f27e99af4/native-video-loader-1cf21928609fe52d96d8-min.en-US.js.map