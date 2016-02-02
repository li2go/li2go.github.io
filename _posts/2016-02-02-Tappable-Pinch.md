---
layout: post
title: Tappable Pinch
tagline: pinch tappable react
category: react
tags: []
published: true

---
####1.	The pinch implementation has not been thoroughly tested

		pinch功能没有被完全的测试。

####Any touch event with 3 three or more touches is completely ignored.
		超出三个触点的触摸将被忽略。


##Properties	|	属性

`activeDelay` ms delay before the -active class is added, defaults to 0
	
	标记触发状态的延时时长，默认为0毫秒。

`component` component to render, defaults to 'span'
	
	要渲染的组件类型。默认为span。

`classes` optional object containing active and inactive class names to apply to the component; useful with css-modules

	用css-modules时，用来定义样式的属性标识。


`classBase` base to use for the active/inactive classes
	
	css类名的base。


`className` optional class name for the component

	组件的classname


`moveThreshold` px to allow movement before cancelling a tap; defaults to 100

	tap事件判定时间下限。默认0.1秒。

`pressDelay` ms delay before a press event is detected, defaults to 1000

	press事件判定的事件下限。默认1秒。
		
`pressMoveThreshold` px to allow movement before ignoring long presses; defaults to 5

	长按状态允许触点移动的范围偏差5像素。


`preventDefault` (boolean) automatically call preventDefault on all events

	自动阻止所有默认事件。
	
`stopPropagation` (boolean) automatically call stopPropagation on all events

	自动停止事件冒泡。

`style` (object) styles to apply to the component

##Pinch Events｜触摸控制：


Pinch events come with a special object with additional data to actually be more useful than the native events:

-----------------


`touches`: Array of Objects - {identifier, pageX, pageY} - raw data from the event

	触摸位置坐标和标识符（编号）组成的数组。

-----------------
`center`: Object - {x, y} - Calculated center between the two touch points

	触摸两点间的中点坐标。



------------------

`angle`: Degrees - angle of the line connecting the two touch points to the X-axis
	
	触摸两点连线与X轴形成的夹角。

`distance`: Number of pixels - beween the two touch points

	触摸两点之间的间距。
-----------------

`displacement`: Object {x, y} - offset of the center since the pinch began

	双指触摸位置连线的中点在触摸过程中偏离原来位置的像素值(中心点偏移量)
-----------------


`displacementVelocity`: Object {x, y} : Pixels/ms - Immediate velocity of the displacement
	
	偏移速度。单位：像素／毫秒

-----------------

`rotation`: degrees - delta rotation since the beginning of the gesture
	
	 从手势开始时的旋转角度。
-----------------


`rotationVelocity`: degrees/millisecond - immediate rotational velocity

	角度旋转速度。单位：度／毫秒。
-----------------

`zoom`: Number - Zoom factor - ratio between distance between the two touch points now over initial

	缩放系数。比起两点原来间距，缩放改变的倍数。
-----------------

`zoomVelocity`: zoomFactor/millisecond - immediate velocity of zooming

	缩放速度。单位：缩放因子／毫秒。
-----------------

`time`: milliseconds since epoch - Timestamp

	经历的时间长度。

-----------------