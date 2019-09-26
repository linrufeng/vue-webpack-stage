
! function (e, t) {
   
    ("object" == typeof exports) &&( "undefined" != typeof module) ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).jme = {})
  
}(this, function (e) {
    "use strict";
   
    var t, s = {
        default: void 0,
        call: function (e, t, s) {
            var n = "";
            "function" == typeof t && (s = t, t = {});
            var o = {
                data: void 0 === t ? null : t
            };
            if ("function" == typeof s) {
                var a = "dscb" + window.dscb++;
                window[a] = s, o._dscbstub = a
            }
            return o = JSON.stringify(o), window._dsbridge ? n = _dsbridge.call(e, o) : (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge")) && (n = prompt("_dsbridge=" + e, o)), JSON.parse(n || "{}").data
        },
        register: function (e, t, n) {
            var o = n ? window._dsaf : window._dsf;
            window._dsInit || (window._dsInit = !0, setTimeout(function () {
                s.call("_dsb.dsinit")
            }, 0)), "object" == typeof t ? o._obs[e] = t : o[e] = t
        },
        registerAsyn: function (e, t) {
            this.register(e, t, !0)
        },
        hasNativeMethod: function (e, t) {
            return this.call("_dsb.hasNativeMethod", {
                name: e,
                type: t || "all"
            })
        },
        disableJavascriptDialogBlock: function (e) {
            this.call("_dsb.disableJavascriptDialogBlock", {
                disable: !1 !== e
            })
        }
    };
    ! function () {
        if (!window._dsf) {
            var e = {
                _dsf: {
                    _obs: {}
                },
                _dsaf: {
                    _obs: {}
                },
                dscb: 0,
                dsBridge: s,
                close: function () {
                    s.call("_dsb.closePage")
                },
                _handleMessageFromNative: function (e) {
                    var t = JSON.parse(e.data),
                        n = {
                            id: e.callbackId,
                            complete: !0
                        },
                        o = this._dsf[e.method],
                        a = this._dsaf[e.method],
                        r = function (e, o) {
                            n.data = e.apply(o, t), s.call("_dsb.returnValue", n)
                        },
                        i = function (e, o) {
                            t.push(function (e, t) {
                                n.data = e, n.complete = !1 !== t, s.call("_dsb.returnValue", n)
                            }), e.apply(o, t)
                        };
                    if (o) r(o, this._dsf);
                    else if (a) i(a, this._dsaf);
                    else {
                        var c = e.method.split(".");
                        if (c.length < 2) return;
                        var l = c.pop(),
                            d = c.join("."),
                            u = this._dsf._obs,
                            f = u[d] || {},
                            p = f[l];
                        if (p && "function" == typeof p) return void r(p, f);
                        if ((p = (f = (u = this._dsaf._obs)[d] || {})[l]) && "function" == typeof p) return void i(p, f)
                    }
                }
            };
            for (var t in e) window[t] = e[t];
            s.register("_hasJavascriptMethod", function (e, t) {
                var s = e.split(".");
                if (s.length < 2) return !(!_dsf[s] && !_dsaf[s]);
                e = s.pop();
                var n = s.join("."),
                    o = _dsf._obs[n] || _dsaf._obs[n];
                return o && !!o[e]
            })
        }
    }(), window.dsBridge ? t = function (e, t) {
        dsBridge.call("onAjaxRequest", e, function (s) {
            s = JSON.parse(s), "stream" === e.responseType && function (e) {
                var t = e.headers || {},
                    s = (t["content-type"] || t["Content-Type"] || "").toString().toLowerCase(); - 1 !== s.indexOf("image") && -1 === e.responseText.indexOf("base64") && (e.responseText = "data:" + s + ";base64," + e.responseText)
            }(s), t(s)
        })
    } : console.error("dsBridge is not exist!");
    var n = "undefined" != typeof document;

    function o(e) {
        return e.replace(/(^\s*)|(\s*$)/g, "")
    }

    function a() {
        if (window && window.location.protocol.indexOf("file") > -1) {
            var e = function (e) {
                var t = function () {
                    this.requestHeaders = {}, this.readyState = 0, this.timeout = 0, this.responseURL = "", this.responseHeaders = {}
                };
                return t.prototype._call = function (e) {
                    this[e] && this[e].apply(this, [].splice.call(arguments, 1))
                }, t.prototype._changeReadyState = function (e) {
                    this.readyState = e, this._call("onreadystatechange")
                }, t.prototype.open = function (e, t) {
                    if (this.method = e, t) {
                        if (0 !== (t = o(t)).indexOf("http") && n) {
                            var s = document.createElement("a");
                            s.href = t, t = s.href
                        }
                    } else t = location.href;
                    this.responseURL = t, this._changeReadyState(1)
                }, t.prototype.send = function (t) {
                    var s = this;
                    t = t || null;
                    var o = this;
                    if (e) {
                        var a, r = {
                            method: o.method,
                            url: o.responseURL,
                            headers: o.requestHeaders || {},
                            body: t
                        };
                        ! function (e, t) {
                            for (var s in t) e.hasOwnProperty(s) ? this.isObject(t[s], 1) && this.isObject(e[s], 1) && this.merge(e[s], t[s]) : e[s] = t[s]
                        }(r, o._options || {}), "GET" === r.method && (r.body = null), o._changeReadyState(3), o.timeout = o.timeout || 0, o.timeout > 0 && (a = setTimeout(function () {
                            3 === o.readyState && (s._call("onloadend"), o._changeReadyState(0), o._call("ontimeout"))
                        }, o.timeout)), r.timeout = o.timeout, e(r, function (e) {
                            function t(t) {
                                var s = e[t];
                                return delete e[t], s
                            }
                            if (3 === o.readyState) {
                                clearTimeout(a), o.status = t("statusCode") - 0;
                                var s = t("responseText"),
                                    r = t("statusMessage");
                                if (o.status) {
                                    var i = t("headers"),
                                        c = {};
                                    for (var l in i) {
                                        var d = i[l],
                                            u = l.toLowerCase();
                                        "object" == typeof d ? c[u] = d : (c[u] = c[u] || [], c[u].push(d))
                                    }
                                    var f = c["set-cookie"];
                                    n && f && f.forEach(function (e) {
                                        document.cookie = e.replace(/;\s*httpOnly/gi, "")
                                    }), o.responseHeaders = c, o.statusText = r || "", o.response = o.responseText = s, o._response = e, o._changeReadyState(4), o._call("onload")
                                } else o.statusText = s, o._call("onerror", {
                                    msg: r
                                });
                                o._call("onloadend")
                            }
                        })
                    } else console.error("Ajax require adapter")
                }, t.prototype.setRequestHeader = function (e, t) {
                    this.requestHeaders[o(e)] = t
                }, t.prototype.getResponseHeader = function (e) {
                    return (this.responseHeaders[e.toLowerCase()] || "").toString() || null
                }, t.prototype.getAllResponseHeaders = function () {
                    var e = "";
                    for (var t in this.responseHeaders) e += t + ":" + this.getResponseHeader(t) + "\r\n";
                    return e || null
                }, t.prototype.abort = function (e) {
                    this._changeReadyState(0), this._call("onerror", {
                        msg: e
                    }), this._call("onloadend")
                }, t.setAdapter = function (t) {
                    e = t
                }, t
            }(t);
            XMLHttpRequest = e
        }
    }
    var r = {
            getDeviceInfo: function () {
                return dsBridge.call("devinfo.deviceInfo")
            }
        },
        i = {
            getAppInfo: function () {
                return dsBridge.call("appInfo.appInfo")
            },
            canOpenUrl: function () {
                return dsBridge.call("application.canOpenUrl")
            },
            openAppletUrl: function (e) {
                dsBridge.call("application.openUrl", {
                    url: e.url
                }, function (t) {
                    e.success && e.success(t)
                })
            }
        },
        c = {
            openCamera: function (e) {
                dsBridge.call("camera.shooting", {}, function (t) {
                    e && e(t)
                })
            }
        },
        l = {
            chooseImage: function (e) {
                var t = Object.assign({
                    multiple: !1,
                    count: 9,
                    success: null
                }, e);
                t.multiple ? dsBridge.call("photoalbum.chooseASetPhoto", {
                    count: t.count
                }, function (e) {
                    t.success && t.success(e)
                }) : dsBridge.call("photoalbum.chooseAPhoto", function (e) {
                    t.success && t.success(e)
                })
            },
            getImageBase64: function (e) {
                dsBridge.call("photoalbum.chooseAPhoto", function (t) {
                    var s = dsBridge.call("file.getFileData", {
                        filePath: t.localUrl,
                        format: "base64"
                    });
                    e.success && e.success({
                        base64: "data:image/jpeg;base64," + s
                    })
                })
            }
        },
        d = {
            setNaviBarHidden: function (e) {
                null === e && (t = !0);
                var t = e;
                dsBridge.call("browser.setNaviBarHidden", {
                    isHidden: t
                })
            },
            closeWeb: function () {
                dsBridge.call("browser.close")
            },
            refreshWeb: function () {
                dsBridge.call("browser.refresh")
            },
            goback: function () {
                dsBridge.call("browser.goback")
            },
            forward: function () {
                dsBridge.call("browser.forward")
            },
            showError: function (e) {
                var t = Object.assign({
                    errCode: null,
                    message: ""
                }, e);
                dsBridge.call("browser.showError", {
                    errCode: t.errCode,
                    message: t.message
                })
            },
            openUrl: function (e) {
                var t = Object.assign({
                        type: 1,
                        url: "",
                        isHideNaviBar: !1
                    }, e),
                    s = {
                        url: t.url,
                        isHideNaviBar: t.isHideNaviBar
                    };
                switch (t.type) {
                    case 1:
                        dsBridge.call("browser.openUrl", s);
                        break;
                    case 2:
                        dsBridge.call("browser.openLocalUrl", s);
                        break;
                    case 3:
                        dsBridge.call("browser.openDeepLink", s);
                        break;
                    case 4:
                        dsBridge.call("browser.openSafariUrl", {
                            url: t.url
                        })
                }
            },
            setShareButtonHidden: function () {
                dsBridge.call("browser.setShareButtonHidden", {
                    isHidden: !0
                })
            },
            setShareButtonShow: function () {
                dsBridge.call("browser.setShareButtonHidden", {
                    isHidden: !1
                })
            },
            onKeyboardHeightChange: function (e) {
                dsBridge.call("browser.onKeyboardHeightChange", function (t) {
                    e.change && e.change(t)
                })
            },
            setPopAllowedLeftEdge: function (e) {
                dsBridge.call("browser.setPopAllowedLeftEdge", {
                    persent: e.persent || 0
                })
            }
        },
        u = {
            getNetworkStatus: function (e) {
                return dsBridge.call("network.networkStatus", function (t) {
                    e && e({
                        status: t
                    })
                })
            }
        },
        f = {
            scanCode: function (e) {
                dsBridge.call("imagescan.scanning", function (t) {
                    e && e(t)
                })
            }
        },
        p = {
            shareNormal: function (e, t) {
                var s = Object.assign({
                    title: "",
                    content: "",
                    url: "",
                    icon: ""
                }, e);
                dsBridge.call("share.share", s, function (e) {
                    t && t(e)
                })
            },
            shareCustom: function (e) {
                var t = Object.assign({
                        title: "",
                        content: "",
                        url: "",
                        icon: ""
                    }, e.shareData),
                    s = Object.assign({
                        shareData: t,
                        typeList: null
                    }, e);
                dsBridge.call("share.shareCustom", s, function (t) {
                    e.callback && e.callback(t)
                })
            }
        },
        g = {
            setStorage: function (e) {
                dsBridge.call("storageKV.setObject", {
                    obj: e.value,
                    key: e.key
                })
            },
            getStorage: function (e) {
                return dsBridge.call("storageKV.objForKey", {
                    key: e.key
                })
            },
            removeStorage: function (e) {
                dsBridge.call("storageKV.removeObjForKey", {
                    key: e.key
                })
            },
            clearStorage: function () {
                dsBridge.call("storageKV.clear")
            }
        },
        h = {
            sendShareCardMessage: function (e) {
                var t = Object.assign({
                        app: "",
                        pin: "",
                        type: 1,
                        isSecret: !1
                    }, e.session),
                    s = Object.assign({
                        session: t,
                        url: "",
                        title: "",
                        content: "",
                        icon: "",
                        source: "",
                        sourceIcon: ""
                    }, e);
                dsBridge.call("im.sendShareCardMessage", s, function (t) {
                    e.callback && e.callback(t)
                })
            },
            openContactSelector: function (e) {
                var t = Object.assign({
                    selected: null,
                    title: "",
                    maxNum: 50
                }, e);
                dsBridge.call("im.openContactSelector", t, function (t) {
                    e.callback && e.callback(t)
                })
            }
        },
        b = {
            startSpeechRecognition: function (e) {
                dsBridge.call("speechrecognition.startSpeechRecognition", function (t) {
                    e.callback && e.callback(t)
                })
            }
        },
        m = {
            portrait: function () {
                dsBridge.call("screencontrol.portrait")
            },
            landscape: function () {
                dsBridge.call("screencontrol.landscape")
            }
        },
        v = {
            getFileData: function (e) {
                var t = Object.assign({
                    filePath: e.filePath || "",
                    format: e.format || "base64"
                }, e);
                return "data:image/jpeg;base64," + dsBridge.call("file.getFileData", {
                    filePath: t.filePath,
                    format: t.format
                })
            }
        },
        w = {
            getJDPinToken: function (e) {
                dsBridge.call("userinfo.getJDPinToken", {
                    url: e.url
                }, function (t) {
                    e.success && e.success(t)
                })
            }
        };
    a(), e.initDsBridge = a, e.device = r, e.applet = i, e.camera = c, e.album = l, e.browser = d, e.network = u, e.scan = f, e.share = p, e.storage = g, e.im = h, e.speechrecognition = b, e.screen = m, e.file = v, e.user = w, e.version = "0.0.4", Object.defineProperty(e, "__esModule", {
        value: !0
    })
});

