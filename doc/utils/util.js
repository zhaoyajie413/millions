export const formatTime = (val)=>{
  if(!val)return '';
  var data = new Date(val);
  var year = data.getFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate();
  var hour = data.getHours();
  var mint = data.getMinutes();
  var second = data.getSeconds();
  return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day) + " " + (hour > 9 ? hour : "0" + hour) + ":" + (mint > 9 ? mint : "0" + mint) + ":" + (second > 9 ? second : "0" + second)
};

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

