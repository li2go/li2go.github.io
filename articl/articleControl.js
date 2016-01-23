/**
 * Created by lanhao on 16/1/23.
 */

const btnId = {
    showMask: 'btn_showMask',
    closeMask: 'btn_closeMask'
};
const viewId = {
    mask: 'fullscreenmask'
};


var controls = {
    showMask: function () {
        document.querySelector('#'+viewId.mask).className = 'fullScreenMask show';
    }, closeMask: function () {
        document.querySelector('#'+viewId.mask).className = 'fullScreenMask';
    }
};
var dealFunction = function (e) {
    var el = e.target;
    switch (el.id) {
        case btnId.showMask:
            controls.showMask();
            break;
        case btnId.closeMask:
            controls.closeMask();

            break;
        default:
            break;
    }
};
window.addEventListener('click', dealFunction);


