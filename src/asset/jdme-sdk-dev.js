//author qinchaoyong@jd.com
//date:2015-06-01
var JDME = {
	_isWifi: '',
	backToHomePage: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.goBack();
		} else{
			window.location.href = "objc://" + escape("backToHomePage:" + ":/");
		}
	},
	backToLoginPage: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.goBack();
		} else{
			window.location.href = "objc://" + escape("backToLoginVC:" + ":/");
		}

	},
	backToWallet: function () {
		var bIsAndroid = isAndroid();
		if (bIsAndroid) {
			Android.onWalletBindSuccess();
		} else{
			var cmd = "objc://onWalletBindSuccess::/";
			window.location.href = cmd;
		}
	},
	isIphoneOs: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = isAndroid();
		if (bIsAndroid) {
			return false;
		} else {
			return true;
		}
	},
	isAndroid: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			return true;
		} else {
			return false;
		}
	},
	scanQRCode: function () {
		// alert("scanQRCode");
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.qrScan()
		} else{
			var cmd = "objc://" + escape("openScannerOfH5Platform:" + ":/");
			window.location.href = cmd;
		}
	},
	scanQRCode1: function () {
		// alert("scanQRCode");
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.qrScan()
		} else{
			var cmd = "objc://" + escape("openScannerOfH5Platform1:" + ":/");
			window.location.href = cmd;
		}
	},
	getUserNameForCookie: function () {
		/* 获取浏览器所有cookie将其拆分成数组 */
		var arr_temp = document.cookie;
		var arr2 = arr_temp.split(';');
		for (var i = 0; i < arr2.length; i++) {
			var arr3 = arr2[i].split('=');
			var value = arr3[0].replace(/^\s+|\s+$/g, '');
			if (value == 'third_name') {
				return arr3[1];
			}
		}
	},
	getBaseInfo: function () {
		var arr_temp = document.cookie;
		var arr2 = arr_temp.split(';');
		for (var i = 0; i < arr2.length; i++) {
			var arr3 = arr2[i].split('=');
			var value = arr3[0].replace(/^\s+|\s+$/g, '');
			if (value == 'basic_info') {
				return arr3[1];
			}
		}

	},
	getCookie: function (c_name) {
		var arr_temp = document.cookie;
		var arr2 = arr_temp.split(';');
		for (var i = 0; i < arr2.length; i++) {
			var arr3 = arr2[i].split('=');
			var value = arr3[0].replace(/^\s+|\s+$/g, '');
			if (value == c_name) {
				return arr3[1];
			} else {
				return '';
			}
		}
	},
	getUserName: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.getUserName();
		} else{
			return window.getUsername();
		}
	},
	getSkinURL: function (type) {
		var imageURL = "https://jdme.jd.com/static/jme/images/0.png"
		if (type) {
			imageURL = "https://jdme.jd.com/static/jme/images/" + type + ".png"
		}
		return imageURL;
	},
	getInsideNetwork: function (isInside) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			return Android.isInner();
		} else{
			if (typeof (isInside) == "undefined") {
				var cmd = "objc://" + escape("getInnerNetForJS:" + ":/");
				window.location.href = cmd;
			} else {
				return isInside;
			}
		}
	},
	share: function (title, h5Url, imgUrl, content) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.share(title, h5Url, imgUrl, content);
		} else{
			var cmd = "objc://" + escape("openShareTitle:h5Url:imgUrl:content:" + ":/");
			//                    var subUrl =h5Url.substring(7, h5Url.length);
			//                    var subImgUrl = imgUrl.substring(7, imgUrl.length);
			var parm = JDME.EncodeUtf8(title) + ":/" + JDME.EncodeUtf8(h5Url) + ":/" +
				JDME.EncodeUtf8(imgUrl) + ":/" + JDME.EncodeUtf8(content);
			window.location.href = cmd + parm;
		}
	},
	//兼容之前方法，新增方法，按照新ios新格式进行传递
	share2: function (title, h5Url, imgUrl, content) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.share(title, h5Url, imgUrl, content);
		} else{
			var baseinfo = JDME.getBaseInfo();
			var baseArray = baseinfo.split("\|\|");
			var version = baseArray[1];
			var count = version.replace(/[^.]/g, '').length;
			var versionNum = version.replace(new RegExp("\\.", "g"), "");
			if (count == 2) {
				versionNum = versionNum + "0";
			}
			var cmd = "";
			var param = "";
			if (versionNum < 3200) {
				var subUrl = h5Url.substring(7, h5Url.length);
				var subImgUrl = imgUrl.substring(7, imgUrl.length);
				cmd = "objc://" + escape("openShareTitle:h5Url:imgUrl:content:" + ":/");
				param = JDME.EncodeUtf8(title) + ":/" + JDME.EncodeUtf8(h5Url) + ":/" + JDME.EncodeUtf8(imgUrl) + ":/" + JDME.EncodeUtf8(content);
			} else {
				param = "{\"method\":\"openShareTitle:h5Url:imgUrl:content:\",\"paras\":{\"h5Url\":\"" + JDME.EncodeUtf8(h5Url) + "\",\"title\":\"" + JDME.EncodeUtf8(title) + "\",\"imgUrl\":\"" + JDME.EncodeUtf8(imgUrl) + "\",\"content\":\"" + JDME.EncodeUtf8(content) + "\"}}";
				cmd = "JDMEiOS://";
			}
			//prompt("test:",cmd + param);
			window.location.href = cmd + param;
		}
	},
	isWifi: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			JDME.isWifiResult(Android.isWifi());
		} else{
			var cmd = "objc://" + escape("isWIFIForJS:" + ":/");
			window.location.href = cmd;
		}
	},
	isWifiResult: function (isWifi) {
		JDME._isWifi = isWifi;
	},
	openTimline: function (userName) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			return Android.openTimline(userName);
		} else{
			var cmd = "objc://openTimeLineWithErp::/" + userName;
			window.location.href = cmd;
		}
	},
	backToScanQR: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {

		}else{
			var cmd = "objc://" + escape("popViewController:" + ":/");
			window.location.href = cmd;
		}
	},
	//第三方调用扫一扫，可以回调js方法  thirdPartyScanCallBack(scanResult,transParam)  scanResult:扫描结果  transParam：透传参数
	openScanForThirdParty: function (transParam) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.openScanForThirdParty(transParam);
		} else{
			var cmd = "objc://" + escape("openScanForThirdParty:" + ":/");
			var param = JDME.EncodeUtf8(transParam);
			window.location.href = cmd + param;
		}
	},

    openScanForDefined: function (callbackJsFunName,transParam) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.openScanForThirdPartyJsCallback(callbackJsFunName , transParam);
        } else{
        	var cmd = "objc://" + escape("openScanForThirdPartyJsCallback:" + ":/" + callbackJsFunName + ":/");
            var param = JDME.EncodeUtf8(transParam);
            window.location.href = cmd + param;
        }
    },
	//第三方扫一扫回调函数示例测试
	thirdPartyScanCallBack: function (scanResult, transParam) {
		alert("第三方扫一扫回调函数返回结果==扫一扫结果：" + scanResult + ",透传参数：" + transParam);
	},

	//H5页面调用原生、sdk功能  视频业务参数：{"url": "rtmp://live.jd.com/live","isLive": "true"}
	openModule: function (appID, appAddressAndroid, appAddressIos, appType, appName, bizParam) { //appID appAddress  appType isToken bizParam  id,libUrl,imgUrl,content
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.openModule(appID, appAddressAndroid, appType, appName, bizParam);
		} else{
			param = "{\"method\":\"openModule:\",\"paras\":{\"appID\":\"" +
				appID + "\",\"appAddressIos\":\"" + appAddressIos + "\",\"appType\":\"" + appType + "\",\"appName\":\"" + appName + "\",\"bizParam\":" + bizParam + "}}";
			param = JDME.EncodeUtf8(param)
			cmd = "JDMEiOS://";
			window.location.href = cmd + param;
		}
	},

	//H5页面调用原生、sdk功能  视频业务参数：{"url": "rtmp://live.jd.com/live","isLive": "true"}
	openDPModule: function (deeplink, title) { //appID appAddress  appType isToken bizParam  id,libUrl,imgUrl,content
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.openDPModule(deeplink, title);
		} else{
			param = "{\"method\":\"openDPModule:\",\"deeplink\":\"" + deeplink + "\",\"title\":\"" + title + "\"}";
			param = JDME.EncodeUtf8(param)
			cmd = "JDMEiOS://";
			window.location.href = cmd + param;
		}
	},

	openSafari: function (url) {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			
		} else { 
			var cmd = "objc://" + escape("openSafari:" + ":/");
			var param = JDME.EncodeUtf8(url);
			window.location.href = cmd + param;
		}
	},

	takePhoto: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			return Android.takePhoto();
		} else{
			var cmd = "objc://" + escape("openCustomCameraView:" + ":/");
			window.location.href = cmd;
		}
	},

	openCamera: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.openCamera();
		} else{
			var cmd = "objc://" + escape("openCamera:" + ":/");
			window.location.href = cmd;
		}
	},

	openGallery: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.openGallery();
		} else{
			var cmd = "objc://" + escape("openGallery:" + ":/");
			window.location.href = cmd;
		}
	},

	EncodeUtf8: function (s1) {
		var s = escape(s1);
		var sa = s.split("%"); // sa[1]=u6211
		var retV = "";
		if (sa[0] != "") {
			retV = sa[0];
		}
		for (var i = 1; i < sa.length; i++) {
			if (sa[i].substring(0, 1) == "u") {
				retV += JDME.Hex2Utf8(JDME.Str2Hex(sa[i].substring(1, 5)));
				if (sa[i].length >= 6) {
					retV += sa[i].substring(5);
				}
			} else
				retV += "%" + sa[i];
		}
		return retV;
	},
	Str2Hex: function (s) {
		var c = "";
		var n;
		var ss = "0123456789ABCDEF";
		var digS = "";
		for (var i = 0; i < s.length; i++) {
			c = s.charAt(i);
			n = ss.indexOf(c);
			digS += JDME.Dec2Dig(eval(n));

		}
		// return value;
		return digS;
	},
	Dec2Dig: function (n1) {
		var s = "";
		var n2 = 0;
		for (var i = 0; i < 4; i++) {
			n2 = Math.pow(2, 3 - i);
			if (n1 >= n2) {
				s += '1';
				n1 = n1 - n2;
			} else
				s += '0';

		}
		return s;

	},
	Dig2Dec: function (s) {
		var retV = 0;
		if (s.length == 4) {
			for (var i = 0; i < 4; i++) {
				retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
			}
			return retV;
		}
		return -1;
	},
	Hex2Utf8: function (s) {
		var retS = "";
		var tempS = "";
		var ss = "";
		if (s.length == 16) {
			tempS = "1110" + s.substring(0, 4);
			tempS += "10" + s.substring(4, 10);
			tempS += "10" + s.substring(10, 16);
			var sss = "0123456789ABCDEF";
			for (var i = 0; i < 3; i++) {
				retS += "%";
				ss = tempS.substring(i * 8, (eval(i) + 1) * 8);

				retS += sss.charAt(JDME.Dig2Dec(ss.substring(0, 4)));
				retS += sss.charAt(JDME.Dig2Dec(ss.substring(4, 8)));
			}
			return retS;
		}
		return "";
	},
	scanQRCodeClose: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			Android.scanQRCodeClose();
		} else{
			window.location.href = "objc://" + escape("scanQRCodeClose:" + ":/");
		}
	},
	landscape: function () {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		if (bIsAndroid) {
			 Android.landscape();
		} else{
			var cmd = "objc://" + escape("landscape:" + ":/");
			 window.location.href = cmd;
		}
	},
	portrait: function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.portrait();
        } else{
        	var cmd = "objc://" + escape("portrait:" + ":/");
            window.location.href = cmd;
        }
    },
    openGalleryMultiple: function (maxNum) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.openGalleryMultiple(maxNum);
        } else{
        	param = "{\"method\":\"openGalleryMultiple:\",\"maxNum\":\"" + maxNum + "\"}";
            param = JDME.EncodeUtf8(param)
            cmd = "JDMEiOS://";
            window.location.href = cmd + param;
        }
    },

    getFile2: function (path) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.getFile2(path);
        } else{
        	param = "{\"method\":\"getFile2:\",\"path\":\"" + path + "\"}";
            param = JDME.EncodeUtf8(param)
            cmd = "JDMEiOS://";
            window.location.href = cmd + param;
        }
    },

    getJDPinToken: function (url) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.getJDPinToken(url);
        } else{
        	param = "{\"method\":\"getJDPinToken:\",\"url\":\"" + url + "\"}";
            param = JDME.EncodeUtf8(param)
            cmd = "JDMEiOS://";
            window.location.href = cmd + param;
        }
    },
    getFontScale: function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            return Android.getFontScale();
        } else{
        	return window.getFontScale();
        }
    },

    sendShareLinkMsg: function (session, url, title, content, icon, source, sourceIcon) {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        if (bIsAndroid) {
            Android.sendShareLinkMsg(session, url, title, content, icon, source, sourceIcon);
        } else{
        	param = "{\"method\":\"sendShareLinkMsg:\"," +
                "\"session\":\"" + session + "\","
            "\"url\":\"" + url + "\","
            "\"title\":\"" + title + "\","
            "\"content\":\"" + content + "\","
            "\"icon\":\"" + icon + "\","
            "\"source\":\"" + source + "\","
            "\"sourceIcon\":\"" + sourceIcon + "\""
            + "}";
            param = JDME.EncodeUtf8(param)
            cmd = "JDMEiOS://";
            window.location.href = cmd + param;
        }
    },
};