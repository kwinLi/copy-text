(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.copyText = factory();
    }
}(this, function () {
    'use strict';

    let copyText = function (value) {
        let isSupport = !!document.queryCommandSupported && !!document.queryCommandSupported('copy');
        let succeeded = false;

        if (isSupport) {
            let fakeElem = document.createElement('textarea');
            fakeElem.style.fontSize = '12pt';
            fakeElem.style.border = '0';
            fakeElem.style.padding = '0';
            fakeElem.style.margin = '0';
            fakeElem.style.position = 'absolute';
            fakeElem.style.left = '-9999px';
            let yPosition = window.pageYOffset || document.documentElement.scrollTop;
            fakeElem.style.top = yPosition + 'px';

            fakeElem.setAttribute('readonly', '');
            fakeElem.value = value;
            document.body.appendChild(fakeElem);
            fakeElem.select();
            fakeElem.setSelectionRange(0, fakeElem.value.length);

            try {
                succeeded = document.execCommand('copy');
            }
            catch (err) {
                succeeded = false;
            }

            document.body.removeChild(fakeElem);
        }

        return isSupport && succeeded;
    };

    return copyText;
}));
