
(function() {
  chrome.tabs.getSelected(null, function(tab) {
    // console.log(1, tab.url)
    let img = new Image()
    //生成二维码
    let url = `http://c.wotula.com/chart.php?size=8&level=L&val=${tab.url}`
    img.src = url || `http://c.wotula.com/chart.php?text=${tab.url}`
    document.getElementsByClassName('chrome-plugin-simple-plugin')[0].appendChild(img)
    document.getElementsByClassName('chrome-plugin-link-box')[0].innerHTML= `<p>当前二维码链接：${tab.url}</p>`
  })
})()
