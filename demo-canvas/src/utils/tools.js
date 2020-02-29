let tool = {}

/**整合鼠标事件和触摸事件 */
tool.captureMT = function(element, touchStartEvent, touchMoveEvent, touchEndEvent) {
    let is_Touch = ('ontouched' in document)
    let touchstart = null
    let touchmove = null
    let touchend = null

    if (is_Touch) {
        touchstart = 'touchstart'
        touchmove = 'touchmove'
        touchend = 'touchend'
    } else {
        touchstart = 'mousedown'
        touchmove = 'mousemove'
        touchend = 'mouseup'
    }

    function getPoint(event) {
        /**将当前的触摸点坐标值减去元素的偏移位置，返回触摸点相对于element的坐标值 */
        event = event || window.event
        let touchEvent = is_Touch ? event.changedTouches[0] : event
        let x = (touchEvent.pageX || touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft)
        x -= element.offsetLeft
        let y = (touchEvent.pageY || touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop)
        y -= element.offsetTop

        return { x, y }
    }

    /**为element元素绑定touchstart事件 */
    element.addEventListener(touchstart, function(event) {
        event.point = getPoint(event)

        touchStartEvent && touchStartEvent.call(this, event)
    }, false)

    /**为element元素绑定touchmove事件 */
    element.addEventListener(touchmove, function(event) {
        event.point = getPoint(event)

        touchMoveEvent && touchMoveEvent.call(this, event)
    }, false)

    /**为element元素绑定touchstart事件 */
    element.addEventListener(touchend, function(event) {
        event.point = getPoint(event)

        touchEndEvent && touchEndEvent.call(this, event)
    }, false)
}

tool.captureKeyDown = function(params) {
    function keyEvent(event) {
        params[event.keyCode]()
    }

    window.addEventListener('keydown', keyEvent, false)
}

export default tool