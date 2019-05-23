
(function() {
  chrome.tabs.getSelected(null, function(tab) {
    console.log(1, tab.url)
    let img = new Image()
    //生成二维码
    img.src = `http://qr.topscan.com/api.php?text=${tab.url}`
    document.getElementsByClassName('chrome-plugin-simple-plugin')[0].appendChild(img)
    document.getElementsByClassName('chrome-plugin-link-box')[0].innerHTML= `<p>当前二维码链接：${tab.url}</p>`
  })
})()
