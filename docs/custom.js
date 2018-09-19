window.addEventListener('load', function (e) {
  if (window.applicationCache) {
    window.applicationCache.addEventListener('updateready', function (e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();

        swal({
            title: "网站已经更新，是否重新加载 ?",
            icon: "info",
            buttons: ["取消", "确认"],
          })
          .then((confirmed) => {
            if (confirmed) {
              window.location.reload();
            } else {
              swal("重新打开网页后，网站会自动更新");
            }
          });
      } else {
        // Manifest didn't changed. Nothing new to server.
      }
    }, false);
  }

}, false);

var mainScrollArea = document.getElementById("md-all")
var scrollTimeout;

window.onload = function () {
  this.setTimeout(function () {
    if (window.screenY > 0) {
      window.scrollTo(0, 0)
    }
  }, 0)
}